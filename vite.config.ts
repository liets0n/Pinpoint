import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@components': path.resolve(import.meta.dirname, 'src/components'),
      '@contexts': path.resolve(import.meta.dirname, 'src/contexts'),
      '@layouts': path.resolve(import.meta.dirname, 'src/layouts'),
      '@libs': path.resolve(import.meta.dirname, 'src/libs'),
      '@locales': path.resolve(import.meta.dirname, 'src/locales'),
      '@pages': path.resolve(import.meta.dirname, 'src/pages'),
      '@services': path.resolve(import.meta.dirname, 'src/services'),
      '@styles': path.resolve(import.meta.dirname, 'src/styles'),
    }
  }
})
