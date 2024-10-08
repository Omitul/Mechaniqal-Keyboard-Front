// router.tsx

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDashboard from "../pages/productDash/ProductDashboard";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ProductDetailCard from "../components/productdetailcard/ProductDetailCard";
import Cart from "../components/cart/Cart";
import Checkout from "../pages/checkout/Checkout";

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
      {
        path: "product-management",
        element: <ProductDashboard></ProductDashboard>,
      },
      {
        path: "about-us",
        element: <About></About>,
      },
      {
        path: "contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "product-details",
        element: <ProductDetailCard></ProductDetailCard>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      // {
      //   path: "cart",
      //   element: <Cart></Cart>,
      // },
      //Add more nested routes as needed
    ],
  },
]);

export default router;
