import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3003,
    proxy: {
      '/gh/flysme/images_service': {
        target: 'https://cdn.staticaly.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy_img/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
