import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: "bernie-web-base",
      fileName: 'bernie-web-base', // .js ?
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    },
  },
  plugins: [
      react()
  ]
})
