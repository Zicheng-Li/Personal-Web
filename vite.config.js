import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Personal-Web/',
  plugins: [react()],
  server:{
    port:3000,
  },
  assetsInclude: ['**/*.jpg', '**/*.JPG']
})
