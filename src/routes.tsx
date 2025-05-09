import { createBrowserRouter } from "react-router";
import ProductCreateForm from "./components/product-create-form";
import ProductEditForm from "./components/product-edit-form";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import Dashboard from "./pages/app/dashboard";
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
        element: <ProductCreateForm />,
      },
      {
        path: "products/edit",
        element: <ProductEditForm />,
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
