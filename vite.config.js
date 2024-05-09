import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://restaurant-backend-ccq4.onrender.com/categories/",
    },
  },
  plugins: [react()],
});
