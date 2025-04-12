import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/weather': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        //  rewrite: (path) => path.replace(/^\/weather/, ''), // If needed, to remove /weather from the path
      },
    },
  },
});