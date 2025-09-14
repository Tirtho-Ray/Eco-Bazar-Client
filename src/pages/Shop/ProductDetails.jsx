import React, { useState } from "react";
import { useProductById } from "../../hooks/product/useProduct";
import { useNavigate, useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import {
  FaStar,
  FaShoppingBag,
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useProductById(id);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (isLoading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-600">
        Error loading product: {error.message}
      </p>
    );
  if (!product) return <p className="text-center mt-10">No product found</p>;

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Title and SKU */}
      <h1 className="text-4xl font-bold mb-2 flex items-center gap-4">
        {product.name}
        <span className="text-gray-500 text-sm font-normal">
          SKU: {product.sku || "N/A"}
        </span>
      </h1>

      {/* Rating and Review Count */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < (product.rating ?? 4) ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-gray-600 text-sm">
          {product.reviews || 4} Review{(product.reviews ?? 1) > 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Images Section */}
        <div className="md:w-1/2">
          {product.images && product.images.length > 0 ? (
            <>
              <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-lg overflow-hidden"
                style={{ "--swiper-navigation-color": "#10B981" }}
              >
                {product.images.map((imgUrl, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={imgUrl}
                      alt={`${product.name} image ${idx + 1}`}
                      className="w-full h-[400px] object-contain rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mt-4"
              >
                {product.images.map((imgUrl, idx) => (
                  <SwiperSlide key={idx} className="cursor-pointer">
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-20 object-cover rounded-lg border border-gray-300"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <p>No image available</p>
          )}
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            {/* Price */}
            <div className="mb-4 flex items-center gap-3">
              {product.price?.original_price && (
                <span className="line-through text-gray-400 text-lg">
                  ${product.price.original_price}
                </span>
              )}
              {product.price?.discounted_price && (
                <span className="text-2xl font-extrabold text-green-600">
                  ${product.price.discounted_price}
                </span>
              )}
              {(!product.price ||
                (!product.price.original_price && !product.price.discounted_price)) && (
                <span className="text-2xl font-extrabold">
                  {product.price || "Price not available"}
                </span>
              )}
              {product.discount_percent && (
                <span className="bg-red-100 text-red-600 px-3 py-0.5 rounded-full text-sm">
                  {product.discount_percent} Off
                </span>
              )}
            </div>

            {/* Brand and Social Share */}
            {product.brand && (
              <div className="mb-3 flex items-center gap-2">
                {product.brand.logo && (
                  <img
                    src={product.brand.logo}
                    alt={product.brand.name}
                    className="h-8 w-8 object-contain"
                  />
                )}
                <span className="text-sm font-semibold">{product.brand.name}</span>

                {/* Social Share Buttons */}
                <div className="ml-auto flex gap-3">
                  <button className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700 transition">
                    <FaFacebookF />
                  </button>
                  <button className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400 transition">
                    <FaTwitter />
                  </button>
                  <button className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400 transition">
                    <FaPinterestP />
                  </button>
                  <button className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400 transition">
                    <FaInstagram />
                  </button>
                </div>
              </div>
            )}

            {/* Description */}
            <p className="mb-6 text-gray-700">
              {product.description || "No description available."}
            </p>

            {/* Availability */}
            <p className="mb-2">
              <span className="font-semibold">Availability: </span>
              <span
                className={
                  product.availability === "In Stock"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {product.availability}
              </span>
            </p>

            {/* Quantity Selector */}
            <div className="mb-6 flex items-center gap-4">
              <button
                onClick={decreaseQty}
                className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
              >
                -
              </button>
              <span className="font-semibold text-lg">{quantity}</span>
              <button
                onClick={increaseQty}
                className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap items-center">
            <button
              onClick={() => alert(`Added ${product.id} to cart with quantity ${quantity}`)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2"
            >
              Add to Cart <FaShoppingBag />
            </button>
            <button
              onClick={() => alert(`Wishlist ${product.id}`)}
              className="bg-green-100 text-green-600 rounded-full p-3 hover:bg-green-200 transition flex items-center justify-center"
              aria-label="Add to Wishlist"
            >
              <FaHeart />
            </button>
            <button
              onClick={() => navigate(`/shop/${product.id}`)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Quick View
            </button>
          </div>

          {/* Category & Tags */}
          <div className="mt-6 text-sm text-gray-600">
            <p>
              <strong>Category:</strong>{" "}
              <span className="text-gray-400">{product.category || "Vegetables"}</span>
            </p>
            <p className="mt-1">
              <strong>Tag:</strong>{" "}
              {product.tags && product.tags.length > 0
                ? product.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block mr-2">
                      {tag}
                    </span>
                  ))
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
