import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home";
import Popular from "../Pages/Products/Category/Popular";
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
            path:"/popular",
            element:<Popular/>
        },
        
      ]
    },
  ]);