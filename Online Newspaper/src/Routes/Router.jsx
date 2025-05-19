import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
    path: "/catagory/:id",
    element: <h1>Catagory</h1>,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default Router;
