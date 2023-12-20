import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/declare/index.ts"),
      name: "drop-components-ts",
      fileName: (format) => `drop.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue", /^drop-components-ts/],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  optimizeDeps: {
    include: ["src/packages/**/*"],
  },
});
