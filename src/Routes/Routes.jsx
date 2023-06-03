

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Selated from "../Pages/Shared/Selated/Selated";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../Pages/DashBoard/addItem/AddItem";
import AdminRoutes from "./AdminRoutes";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"menu",
          element:<Menu></Menu>
        },
        {
          path:"order/:category",
          element:<Order></Order>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        },
        {
          path:'selated',
          element:<PrivateRoutes><Selated></Selated></PrivateRoutes>
        }
      ]
    },
    {
      path: 'dashBoard',
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children:[
        {
          path:'myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addItem',
          element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
        }
      ]
    }
  ]);