
import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayout/MainLayout";
import MainHomePage from "../pages/Home/MainHomePage";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
            path:"/",
            element:<MainHomePage />
        }
    ]        

    }

])