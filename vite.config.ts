import { PluginOption, defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import Paths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const plugins: PluginOption[] = [
  react(),
  Paths(),
  tailwindcss(),
  VitePWA({
    registerType: "prompt",
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: "GT Tenant UI",
      short_name: "GT Tenant",
      description: "Global Tote Tenant UI",
      theme_color: "#ffffff",
    },

    workbox: {
      globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: "index.html",
      suppressWarnings: true,
      type: "module",
    },
  }),
];

export default defineConfig(({ mode }) => {
  const envDir = `${process.cwd()}/src/configs/env/`;
  const env = loadEnv(mode, envDir); // Load env file according to mode.
  const port = Number(env.VITE_PORT ?? 3000); // Get the PORT from env or 3000 if not available
  return {
    plugins,
    envDir,
    build: {
      outDir: "build",
      emptyOutDir: true,
      sourcemap: false,
    },
    server: {
      host: true,
      port,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  };
});
