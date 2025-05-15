import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./Components/Books/BookDetails.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Error from "./Components/Error/Error.jsx";
import Home from "./Components/Home/Home.jsx";
import PersonalList from "./Components/PersonalList/PersonalList.jsx";
import Root from "./Components/Root/Root.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/personalList",
        element: <PersonalList />,
        errorElement: <Error />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        loader: () => fetch("/BooksData.json"),
        errorElement: <Error />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
