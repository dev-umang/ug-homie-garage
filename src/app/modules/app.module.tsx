import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PWABadge } from "@configs/pwa";
import { AppRoutes } from "@configs/routes";
import { ThemeConfig } from "@configs/theme";

const AppModule: FC = () => (
  <ThemeConfig>
    <PWABadge />
    <RouterProvider router={createBrowserRouter(AppRoutes)} />
  </ThemeConfig>
);

export default AppModule;
