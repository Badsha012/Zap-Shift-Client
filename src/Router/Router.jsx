import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Contact from "../Pages/Contact/Contact";

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
]);