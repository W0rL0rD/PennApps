import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Node >=17
import manifest from './manifest.json' assert { type: 'json' } 

export default defineConfig({
  plugins: [react()],
});

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
// })
