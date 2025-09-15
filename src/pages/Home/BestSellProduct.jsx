import { MoveRight } from "lucide-react";
import { useProduct } from "./../../hooks/product/useProduct";
import ProductCard from "../../components/ui/reUsable/ProductCard";
import { useWishlist } from "../../hooks/saveProduct/useWishlist";
import toast from "react-hot-toast";

const BestSellProduct = () => {
  const { data: products, isLoading, isError } = useProduct();
  // eslint-disable-next-line no-unused-vars
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (isLoading)
    return <p className="text-center mt-10">Loading products...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load products</p>
    );

  return (
    <div className="mt-32">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8 ">
        <h1 className="text-[40px] font-bold">Best sell products</h1>
        <div className="flex items-center gap-2 hover:text-green-600 text-[16px] font-semibold cursor-pointer hover:mr-2 transition-all">
          <p>View all</p>
          <MoveRight />
        </div>
      </div>

      {/* Show Product */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {products?.slice(0, 4).map((item) => {
          const wishlisted = isInWishlist(item.id);

          return (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price.discounted_price}
              oldPrice={item.price.original_price}
              discount={item.price.discount_percentage}
              image={item.images[0]}
              isAvailable={item.availability === "In Stock"}
              rating={item.rating ?? 4}
              onAddToCart={() => toast.success(`Added ${item.name} to cart`)}
              onQuickView={() => toast(`Quick View ${item.name}`)}
              onWishlist={() => {
                if (wishlisted) {
                  toast.error(`${item.name} is already in your wishlist`);
                  return;
                }
                addToWishlist(item);
                toast.success(`${item.name} added to wishlist`);
              }}
              isWishlisted={wishlisted}
            />
          );
        })}
      </div>
      {/* //here render */}
    </div>
  );
};

export default BestSellProduct;
