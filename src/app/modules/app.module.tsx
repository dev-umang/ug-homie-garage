import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PWABadge } from "@configs/pwa";
import { AppRoutes } from "@configs/routes";
import { ThemeConfig } from "@configs/theme";

const AppModule: FC = () => (
  <ThemeConfig>
    <Toaster
      position="bottom-center"
      gutter={8}
      toastOptions={{
        duration: 4000,
        success: { duration: 3000 },
        error: { duration: 5000 },
      }}
    />
    <PWABadge />
    <RouterProvider router={createBrowserRouter(AppRoutes)} />
  </ThemeConfig>
);

export default AppModule;
