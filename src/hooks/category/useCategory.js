import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../api/apiServices/catagory/categoryServices";

export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};