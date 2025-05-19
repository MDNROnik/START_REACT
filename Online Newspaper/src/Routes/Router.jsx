import { createBrowserRouter, Navigate } from "react-router-dom";
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
    element: <h1>AUTH</h1>,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default Router;
