import App from "@/App";
import About from "@/pages/about";
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
]);