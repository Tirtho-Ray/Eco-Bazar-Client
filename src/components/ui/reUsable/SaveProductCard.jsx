import React from "react";

const SaveProductCard = ({
  image,
  name,
  price,
  originalPrice,
  inStock,
  onAddToCart,
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between space-x-4 p-3 border border-gray-200 rounded ">
      <div className="flex items-center gap-5">
        <img
          src={image}
          alt={name}
          className="w-[100px] h-[100px] object-contain rounded"
        />
        <div className="flex-1">
          <p className="text-base font-medium">{name}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-bold text-black">${price}</p>
        {originalPrice && (
          <p className="text-gray-400 line-through">${originalPrice}</p>
        )}
      </div>
      <div>
        {inStock && (
          <div className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded">
            In Stock
          </div>
        )}
      </div>
      <div className="flex gap-4">
        <button
          onClick={onAddToCart}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded"
        >
          Add to Cart
        </button>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          &times;
        </button>
      </div>
    </div>
  );
};

export default SaveProductCard;
