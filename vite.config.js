import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // 配置别名：@ 指向 src 目录
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 配置跨域代理（解决前后端联调跨域问题）
  server: {
    proxy: {
      '/api': {
        target: 'http://后端接口地址:端口号', // 替换成真实后端地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})