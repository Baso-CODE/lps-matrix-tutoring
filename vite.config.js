import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-redux": ["@reduxjs/toolkit", "react-redux"],
          "vendor-carousel": [
            "embla-carousel-react",
            "embla-carousel-autoplay",
          ],
          "vendor-animation": ["framer-motion", "aos"],
          "vendor-markdown": [
            "react-markdown",
            "remark-gfm",
            "rehype-highlight",
            "highlight.js",
          ],
          "vendor-misc": [
            "react-helmet-async",
            "react-spinners",
            "lucide-react",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
});
