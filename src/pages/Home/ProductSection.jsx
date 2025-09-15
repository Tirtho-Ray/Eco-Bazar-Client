import React from "react";
import { useProduct } from "../../hooks/product/useProduct";
import { useWishlist } from "../../hooks/saveProduct/useWishlist";

const ProductGrid = () => {
  const { data: products, isLoading, isError } = useProduct();
  // eslint-disable-next-line no-unused-vars
  const { addToWishlist, isInWishlist } = useWishlist();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error loading products</p>;

  const renderProducts = (items) =>
    items.map((item) => {
      // eslint-disable-next-line no-unused-vars
      const wishlisted = isInWishlist(item.id);
      return (
        <div
          key={item.id}
          className="w-[300px] h-[112px] border rounded-lg p-2 flex gap-3 items-center shadow-sm hover:shadow-md transition"
        >
          <img
            src={item.images[0]}
            alt={item.name}
            className="w-24 h-24 object-cover rounded"
          />
          <div className="flex flex-col justify-between flex-1">
            <h3 className="text-sm font-medium">{item.name}</h3>
            <p className="text-green-600 font-bold text-sm">
              ${item.price.discounted_price}
            </p>
            {item.price.original_price && (
              <p className="line-through text-xs text-gray-400">
                ${item.price.original_price}
              </p>
            )}
            <p className="text-xs text-yellow-500">⭐ {item.rating ?? 4}</p>
          </div>
        </div>
      );
    });

  return (
    <div className="flex justify-between gap-12 mt-16">
      {/* Left: 3 Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg font-bold mb-3">Hot Deals</h2>
          <div className="space-y-4">
            {renderProducts(products.slice(0, 3))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-3">Best Seller</h2>
          <div className="space-y-4">
            {renderProducts(products.slice(3, 6))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-3">Top Rated</h2>
          <div className="space-y-4">
            {renderProducts(products.slice(6, 9))}
          </div>
        </div>
      </div>

      <div className="w-[312px] h-[432px] rounded-lg overflow-hidden relative">
        <img
          src="/src/assets/Best selar pr-2/Rectangle 54.png"
          alt="Promo"
          className="w-full h-[408px] object-cover"
        />
        <div className="absolute top-4 left-4 bg-yellow-400 px-4 py-2 rounded font-bold text-lg text-black">
          Save 37% on Every Order
        </div>
        <button className="absolute bottom-10 left-6 bg-white text-green-600 font-semibold px-4 py-2 rounded shadow hover:bg-green-100 transition">
          Shop Now →
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
