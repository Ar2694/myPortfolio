import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "src": fileURLToPath(new URL("./src", import.meta.url)),
      "components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "res": fileURLToPath(new URL("./src/res", import.meta.url)),
      "contexts": fileURLToPath(new URL("./src/contexts", import.meta.url)),
    },
  },
})
