import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // This allows you to use @import '@carbon/styles/...' 
        // without TypeScript or Vite getting lost in node_modules
        loadPaths: ['node_modules'],
      },
    },
  },
})
