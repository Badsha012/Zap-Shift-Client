import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Contact from "../Pages/Contact/Contact";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/Login/Login";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
          path:"/coverage",
          element:<Coverage></Coverage>,
          loader:() => fetch('/serviceCenter.json').then(res => res.json())

        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },


    ]
  },
  {
    path:"/",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>

      }

    ]
  }
]);