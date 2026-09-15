import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the build works unmodified on any GitHub Pages
// project URL (https://<user>.github.io/<repo>/) or a custom path.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
