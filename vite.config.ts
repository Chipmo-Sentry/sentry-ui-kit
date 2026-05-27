import { resolve } from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ["src"],
      rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    target: "es2022",
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      // Externalize peer deps + their subpaths so consumers bring their own React
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^react-dom\/.*/,
        "lucide-react",
        /^@radix-ui\/.*/,
      ],
      output: {
        // Emit the single CSS chunk as styles.css so consumers can do
        //   `import "@chipmo-sentry/ui-kit/styles.css"`
        assetFileNames: (asset) =>
          asset.name?.endsWith(".css") ? "styles.css" : "[name][extname]",
      },
    },
  },
});
