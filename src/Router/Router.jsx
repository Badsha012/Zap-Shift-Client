import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
        {
            index:true,
            element:<Home></Home>
        }

    ]
  },
]);