import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Decide backend URL based on environment
const API_BASE =
  process.env.VITE_API_URL || "http://localhost:8000"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // Works only in development
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',   // This is what Vercel expects
    emptyOutDir: true // Clean dist before building
  },
  define: {
    __API_BASE__: JSON.stringify(API_BASE),
  },
})
