import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true, // allows access from LAN or domain
    allowedHosts: [
    "www.chicku.info",
    "chicku.info",
      "chicku.in",     
      "www.chicku.in",  
    ],
    port: 5173, // optional (default Vite port)
  },
});