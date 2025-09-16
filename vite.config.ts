import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: false,
    hmr: {
      port: 3000,
      host: 'localhost'
    },
    cors: true,
    proxy: {},
    // Codespaces 전용 설정
    watch: {
      usePolling: true
    },
    // 추가 설정
    middlewareMode: false,
    fs: {
      strict: false
    }
  }
})
