import { useQuery } from "@tanstack/react-query"
import { fetchProduct } from "../../api/apiServices/productServices/productServices"

export const useProduct  = () =>{
    return useQuery({
        queryKey:["product"],
        queryFn:fetchProduct
    });
};