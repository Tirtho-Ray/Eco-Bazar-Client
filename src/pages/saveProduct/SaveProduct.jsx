import React from "react";
import SaveProductCard from "../../components/ui/reUsable/SaveProductCard";
import { useWishlist } from "../../hooks/saveProduct/useWishlist";
import toast from "react-hot-toast";
import { Container } from "../../components/ui/reUsable/Container";

const SaveProduct = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemove = (productId, name) => {
    removeFromWishlist(productId);
    toast.success(`${name} removed from wishlist`);
  };

  return (
    <Container>
      <div className="">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <p>No items in wishlist yet.</p>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <SaveProductCard
                key={item.id}
                image={item.images[0]}
                name={item.name}
                price={item.price.discounted_price}
                originalPrice={item.price.original_price}
                inStock={item.availability === "In Stock"}
                onAddToCart={() => toast.success(`Added ${item.name} to cart`)}
                onClose={() => handleRemove(item.id, item.name)}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default SaveProduct;
