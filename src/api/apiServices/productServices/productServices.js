import { axiosInstance } from "../../axiosInstance/axiosInstance";

export const fetchProduct  = async ()=>{
    const {data}  =await axiosInstance.get("/product.json");
    return data;
};