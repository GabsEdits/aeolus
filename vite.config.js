import { fileURLToPath, URL } from "node:url";
import { qrcode } from 'vite-plugin-qrcode';

import { defineConfig } from "vite";

export default defineConfig({
  base: "/aeolus",
  plugins: [
    qrcode()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
