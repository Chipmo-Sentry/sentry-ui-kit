import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Separate config from the library build (vite.config.ts). This builds the
// component showcase as a normal static SPA (React bundled, NOT externalized).
export default defineConfig({
  root: "showcase",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../showcase-dist",
    emptyOutDir: true,
  },
});
