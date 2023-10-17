import { lazy } from "react";
import HomeLayout from "./layouts/HomeLayout/index";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("../src/view/pages/home")),
  },
];
