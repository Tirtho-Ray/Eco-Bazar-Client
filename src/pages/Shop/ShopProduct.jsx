import React, { useState, useMemo } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useProduct } from "./../../hooks/product/useProduct";
import ProductCard from "../../components/ui/reUsable/ProductCard";
import { FaSlidersH } from "react-icons/fa";

// Dummy Popular Tags
const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Kid foods",
  "Vitamins",
  "Bread",
  "Meat",
  "Snacks",
  "Tiffin",
  "Launch",
  "Dinner",
  "Breakfast",
  "Fruit",
];

const ShopProduct = () => {
  // UI toggle
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    rating: true,
    tags: true,
  });

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [minRating, setMinRating] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);

  // Sort
  const [sortBy, setSortBy] = useState("latest");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Load products
  const { data: products, isError, isLoading } = useProduct();

  // Category Map
  const categoryMap = {};
  products?.forEach((p) => {
    if (p.category) {
      categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
    }
  });
  const uniqueCategories = Object.entries(categoryMap);

  // Toggle Sidebar Section
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Filter + Sort + Pagination (useMemo for performance)
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let result = products.filter((p) => {
      const discountedPrice = parseFloat(
        p.price.discounted_price.toString().replace("$", "")
      );

      const byCategory =
        selectedCategory === "all" || !selectedCategory
          ? true
          : p.category === selectedCategory;

      const byPrice =
        discountedPrice >= priceRange[0] &&
        discountedPrice <= priceRange[1];

      const byRating = p.rating ? p.rating >= minRating : true;

      const byTag = p.tags
        ? selectedTags.length > 0
          ? selectedTags.some((tag) => p.tags.includes(tag))
          : true
        : true;

      return byCategory && byPrice && byRating && byTag;
    });

    // Sorting
    if (sortBy === "latest") {
      result = result.sort((a, b) => Number(b.id) - Number(a.id)); // desc
    } else if (sortBy === "oldest") {
      result = result.sort((a, b) => Number(a.id) - Number(b.id)); // asc
    } else if (sortBy === "popular") {
      result = result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [products, selectedCategory, priceRange, minRating, selectedTags, sortBy]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Loading
  if (isLoading) {
    return <p className="text-center mt-10">⏳ Loading products...</p>;
  }

  if (isError) {
    return (
      <p className="text-center mt-10 text-red-500">
        ❌ Failed to load products
      </p>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex gap-2 justify-between">
        <div className="w-[312px] ">
          <button className="flex items-center gap-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-full">
            <FaSlidersH className="text-sm" />
            <span>Filter</span>
          </button>
        </div>
        <div className="w-[984px] ">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <select
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1); // reset page
                }}
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="popular">Popular</option>
              </select>
            </div>
            <div>
              <p>{filteredProducts.length} products found</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-between mt-8">
        {/* Sidebar Filters */}
        <div className="w-[312px]">
          {/* Category */}
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[20px] font-medium">All Categories</p>
              <div
                onClick={() => toggleSection("category")}
                className="cursor-pointer"
              >
                {openSections.category ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={24} />
                )}
              </div>
            </div>

            {openSections.category && (
              <ul className="mt-4 space-y-2">
                <li
                  className={`flex items-center gap-2 cursor-pointer ${
                    selectedCategory === "all"
                      ? "font-bold text-green-600"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory("all");
                    setCurrentPage(1);
                  }}
                >
                  <span>All</span>
                  <span className="text-gray-500">
                    ({products?.length || 0})
                  </span>
                </li>
                {uniqueCategories.map(([category, count]) => (
                  <li
                    key={category}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                  >
                    <div
                      className={`h-[18px] w-[18px] rounded-full border-2 flex items-center justify-center ${
                        selectedCategory === category
                          ? "border-green-600"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedCategory === category && (
                        <div className="h-[10px] w-[10px] bg-green-600 rounded-full" />
                      )}
                    </div>
                    <span className="text-[15px] capitalize">
                      {category}
                    </span>
                    <span className="text-gray-500">({count})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Price */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="text-[20px] font-medium">Price Range</p>
              <div
                onClick={() => toggleSection("price")}
                className="cursor-pointer"
              >
                {openSections.price ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={24} />
                )}
              </div>
            </div>

            {openSections.price && (
              <div className="mt-3">
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([+e.target.value, priceRange[1]])
                  }
                />
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], +e.target.value])
                  }
                />
                <p className="text-sm text-gray-600 mt-1">
                  Price: {priceRange[0]} – {priceRange[1]}
                </p>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="text-[20px] font-medium">Rating</p>
              <div
                onClick={() => toggleSection("rating")}
                className="cursor-pointer"
              >
                {openSections.rating ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={24} />
                )}
              </div>
            </div>
            {openSections.rating && (
              <div>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label
                    key={rating}
                    className="flex items-center gap-2 cursor-pointer mt-1"
                  >
                    <input
                      type="radio"
                      name="rating"
                      checked={minRating === rating}
                      onChange={() => {
                        setMinRating(rating);
                        setCurrentPage(1);
                      }}
                    />
                    <span className="text-yellow-500">
                      {"★".repeat(rating)}{" "}
                      <span className="text-gray-500 text-sm">& up</span>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="text-[20px] font-medium">Popular Tags</p>
              <div
                onClick={() => toggleSection("tags")}
                className="cursor-pointer"
              >
                {openSections.tags ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={24} />
                )}
              </div>
            </div>
            {openSections.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedTags.includes(tag)
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((t) => t !== tag)
                          : [...prev, tag]
                      );
                      setCurrentPage(1);
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-[984px]">
          {currentProducts?.length === 0 ? (
            <p className="text-center text-gray-500">No products found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {currentProducts?.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={parseFloat(
                    item.price.discounted_price.replace("$", "")
                  )}
                  oldPrice={parseFloat(
                    item.price.original_price.replace("$", "")
                  )}
                  discount={item.price.discount_percentage}
                  image={item.images[0]}
                  isAvailable={item.availability === "In Stock"}
                  rating={item.rating ?? 4}
                  onAddToCart={(id) => alert(`Added ${id} to cart`)}
                  onWishlist={(id) => alert(`Wishlist ${id}`)}
                  onQuickView={(id) => alert(`Quick View ${id}`)}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-6">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
