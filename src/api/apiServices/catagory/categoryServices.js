import { axiosInstance } from "../../axiosInstance/axiosInstance";

export const fetchCategory  = async ()=>{
    const {data}  =await axiosInstance.get("/category.json");
    return data;
};