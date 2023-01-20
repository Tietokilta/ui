/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "@tietokilta/ui"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/setupTests.ts"
  }
});
