import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import NewsLayout from "../Layout/NewsLayout";
import CategoryNews from "../Pages/CategoryNews";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/catagory/0"}></Navigate>,
        errorElement: <div>Oops! Something went wrong.</div>,
      },
      {
        path: "/catagory/:id",
        element: <CategoryNews />,
        errorElement: <div>Oops! Something went wrong.</div>,
        // eslint-disable-next-line no-unused-vars
        loader: async ({ params }) => await fetch("../../public/News.json"),
      },
    ],
  },
  {
    path: "/news/:id",
    element: <NewsLayout />,
    errorElement: <div>Oops! Something went wrong.</div>,
    // eslint-disable-next-line no-unused-vars
    loader: async ({ params }) => await fetch("../../public/News.json"),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
        errorElement: <div>Oops! Something went wrong.</div>,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
        errorElement: <div>Oops! Something went wrong.</div>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
    errorElement: <div>Oops! Something went wrong.</div>,
  },
]);

export default Router;
