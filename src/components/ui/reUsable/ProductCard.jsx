import { Heart, Eye, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  discount,
  image,
  rating = 0,
  isAvailable = true,
  onAddToCart,
  onWishlist,
  onQuickView,
}) => {
  return (
    <div className="relative w-[250px] h-[380px] border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition p-3 flex flex-col justify-between">
      
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
          -{discount}%
        </span>
      )}

      {/* Top Action Buttons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <button onClick={() => onWishlist?.(id)} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <Heart size={18} className="text-gray-600 hover:text-red-500" />
        </button>
        <button onClick={() => onQuickView?.(id)} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <Eye size={18} className="text-gray-600 hover:text-green-500" />
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center items-center h-[180px]">
        <img src={image} alt={name} className="object-contain w-full h-full rounded-md" />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1 mt-2">
        <h3 className="text-gray-800 font-medium truncate">{name}</h3>

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-green-600">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className={index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex justify-end mt-3">
        <button
          onClick={() => onAddToCart?.(id)}
          disabled={!isAvailable}
          className={`p-3 rounded-full transition ${
            isAvailable
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
