import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Dinky_Portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
