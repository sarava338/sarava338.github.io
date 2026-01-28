import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

export default defineConfig(({ mode }) => {
  const envDir = path.resolve(import.meta.dirname, ".env");
  const env = loadEnv(mode, envDir);

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },
    envDir: envDir,
    base: "/",
    plugins: [react(), tailwindcss(), metaImagesPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
  };
});
