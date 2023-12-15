import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home";
import AllProduct from "../Pages/Products/Category/AllProduct";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Mycart from "../Pages/Dashboard/MyCart/Mycart";
import UserProfile from "../Pages/Dashboard/UserProfile";
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
        
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/signUp",
            element:<SignUp/>
        },
        
       
        
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard/>,
      children:[
        {
            path:"/dashboard",
            element:<PrivateRoute>
              <UserProfile/>
            </PrivateRoute>
        },
        {
            path:"mycart",
            element:<PrivateRoute>
              <Mycart/>
            </PrivateRoute>
        },
      ]
    }
  ]);