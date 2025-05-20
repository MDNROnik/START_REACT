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
    path: "/news/:id",
    element: <NewsLayout />,
    // eslint-disable-next-line no-unused-vars
    loader: async ({ params }) => await fetch("../../public/News.json"),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default Router;
