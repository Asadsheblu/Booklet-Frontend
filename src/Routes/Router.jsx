import {
    createBrowserRouter,
  } from "react-router-dom";
// import Main from "../Layout/main";
// import Home from "../Pages/Home/Home";
// import AllProduct from "../Pages/Products/Category/AllProduct";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Mycart from "../Pages/Dashboard/MyCart/Mycart";
import UserProfile from "../Pages/Dashboard/UserProfile";
 export const router = createBrowserRouter([
    
    {
      path:"/",
      element:
      <Dashboard/>
  ,
      children:[
        {
            path:"/",
            element:<PrivateRoute>
              <UserProfile/>
            </PrivateRoute>
        },
        {
            path:"/mycart",
            element:<PrivateRoute>
              <Mycart/>
            </PrivateRoute>
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
    }
  ]);