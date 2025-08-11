import App from "@/App";
import About from "@/pages/about";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

 export const router = createBrowserRouter([
  {
    // i can use element 
    Component:App,
    path: "/",
    children:[
      {
        Component:About,
        path:"/about"
      }
    ]
  },
  {
    Component:Login,
    path:"/login"
  },
  {
    Component:Register,
    path:"/register"
  },
  {
    Component:Verify,
    path:"/verify"
  },
]);