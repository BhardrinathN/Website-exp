import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Custom plugin to duplicate index.html to 404.html for GitHub Pages SPA routing
const copyIndexTo404Plugin = () => {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      const distPath = path.resolve(__dirname, 'dist')
      const indexHtml = path.join(distPath, 'index.html')
      const errorHtml = path.join(distPath, '404.html')
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, errorHtml)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyIndexTo404Plugin()],
  base: process.env.NODE_ENV === 'production' ? '/Website-exp/' : '/',
})
