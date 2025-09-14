import { axiosInstance } from "../../axiosInstance/axiosInstance";

export const fetchProduct  = async ()=>{
    const {data}  =await axiosInstance.get("/product.json");
    return data;
};

// export const fetchProductById = async (id) => {
//   const res = await axiosInstance.get(`/${id}`);
//   return res.data;
// };


export const fetchProductById = async (id) => {
  const { data } = await axiosInstance.get("/product.json");
  const product = data.find(item => item.id === id);
  if (!product) throw new Error("Product not found");
  return product;
};
