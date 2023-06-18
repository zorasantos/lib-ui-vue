/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), terser(), postcss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "zora-lib-ui-vue",
      fileName: "lib-ui-vue",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "c8",
    },
  },
});
