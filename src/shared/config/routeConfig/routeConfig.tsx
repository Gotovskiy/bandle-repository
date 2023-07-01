import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum Routes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutesPath: Record<Routes, string> = {
  [Routes.MAIN]: "/",
  [Routes.ABOUT]: "/about",
};

export const routeConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
  },
  [Routes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage />,
  },
};
