import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/catagory/0"}></Navigate>,
      },
      {
        path: "/catagory/:id",
        element: <CategoryNews />,
        // eslint-disable-next-line no-unused-vars
        loader: async ({ params }) => await fetch("../../public/News.json"),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>NEWS</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <h1>Login</h1>,
      },
      {
        path: "/auth/signup",
        element: <h1>Signup</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default Router;
