import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appData.json"),
        Component: Apps,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/appData.json"),
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: () => fetch("/appData.json"),
        Component: Installation,
      },
    ],
  },
]);
