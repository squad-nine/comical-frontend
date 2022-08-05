import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src', 'pages'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@services': resolve(__dirname, 'src', 'services'),
      '@assets': resolve(__dirname, 'src', 'assets')
    }
  }
})
