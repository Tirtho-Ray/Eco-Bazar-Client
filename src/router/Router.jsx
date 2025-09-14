
import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayout/MainLayout";
import MainHomePage from "../pages/Home/MainHomePage";
import MainShop from "../pages/Shop/MainShop";
import ProductDetails from "../pages/Shop/ProductDetails";
import SaveProduct from "../pages/saveProduct/SaveProduct";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
            path:"/",
            element:<MainHomePage />
            },
            {
            path:"/shop",
            element:<MainShop />
            },
            {
            path:"/my-save-product",
            element:<SaveProduct />
            },
            {
            path:"/shop/:id",
            element:<ProductDetails />
            },
        
    ]        

    }

])