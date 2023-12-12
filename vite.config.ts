import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/declare/index.ts"),
      name: "drop",
      fileName: (format) => `button.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue", /^drop/],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
