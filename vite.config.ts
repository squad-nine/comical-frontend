import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src', 'pages'),
      '@assets': resolve(__dirname, 'src', 'assets')
    }
  }
})
