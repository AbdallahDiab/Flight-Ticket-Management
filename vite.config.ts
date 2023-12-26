import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@slices": "/src/store/slices",
      "@assets": "/src/assets",
      "@ui": "/src/ui",
      "@store": "/src/store",
      "@reducers": "/src/store/reducers",
      "@actions": "/src/store/actions",
    },
  },
});
