// router.tsx

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "/",
        element: <Home />,
      },
      //Add more nested routes as needed
    ],
  },
]);

export default router;
