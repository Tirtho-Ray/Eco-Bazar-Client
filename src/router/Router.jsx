
import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayout/MainLayout";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
            path:"/",
            element:<p></p>
        }
    ]        

    }

])