import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // default root is project folder; index.html now lives at the root
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
    // letting Vite use the default entry point (./index.html)
  }
})
