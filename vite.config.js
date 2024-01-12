import { fileURLToPath, URL } from "node:url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: "./",
  build: {
    outDir: "computer-graphics",
    chunkSizeWarningLimit: 1000,
  },
  server: {
    open: "./",
    port: 3000,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    splitVendorChunkPlugin(),
  ],
});
