import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({

  // build: {
  //   lib: {
  //     entry: './src/index.ts',
  //     name: "bernie-web-base",
  //     // fileName: 'bernie-web-base', // .js ?
  //     fileName: (format) => `my-library.${format}.js`,
  //     formats: ["es"]
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom']
  //   },
  // },
  plugins: [
      // react(),
      dts({
        rollupTypes: true,
        insertTypesEntry: true
      })
  ]
})
