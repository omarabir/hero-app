import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,

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
    ],
  },
]);
