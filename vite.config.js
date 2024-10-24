import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {// This is the base path of the app
    host: '0.0.0.0',  // This makes the app accessible externally
    port: 5000,



  }
});
