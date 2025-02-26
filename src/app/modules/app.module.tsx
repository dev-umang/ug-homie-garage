import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PWABadge } from "@configs/pwa";
import { AppRoutes } from "@configs/routes";
import { ThemeConfig, useTheme } from "@configs/theme";

const AppModule: FC = () => {
  const { color } = useTheme();
  return (
    <ThemeConfig>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: color.containerElevated,
            color: color.bodyPrimaryText,
          },
        }}
      />
      <PWABadge />
      <RouterProvider router={createBrowserRouter(AppRoutes)} />
    </ThemeConfig>
  );
};

export default AppModule;
