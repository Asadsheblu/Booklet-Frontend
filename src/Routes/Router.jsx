import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home";
import AllProduct from "../Pages/Products/Category/AllProduct";
 export const router = createBrowserRouter([
    {
      path: "/",
      // eslint-disable-next-line react/jsx-no-undef
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/products",
            element:<AllProduct/>
        },
        
      ]
    },
  ]);