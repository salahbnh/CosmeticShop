import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App';
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/Products",
    element: <Products/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);