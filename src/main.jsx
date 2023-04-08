import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import About from "./Components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
