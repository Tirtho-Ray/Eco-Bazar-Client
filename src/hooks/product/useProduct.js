import { useQuery } from "@tanstack/react-query";
import { fetchProduct, fetchProductById } from "../../api/apiServices/productServices/productServices";

export const useProduct = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => fetchProductById(id),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
