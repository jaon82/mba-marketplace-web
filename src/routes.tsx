import { createBrowserRouter } from "react-router";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import Dashboard from "./pages/app/dashboard";
import NewProduct from "./pages/app/new-product";
import Product from "./pages/app/product";
import Products from "./pages/app/products";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/new",
        element: <NewProduct />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
