import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': join(__dirname, './src')
            // '~element-plus': resolve(__dirname, 'node_modules/element-plus')
        }
    },
    server: {
        hmr: true,
        proxy: {
            '/api': {
                // target: 'http://192.168.0.15:10888',
                target: 'http://needex.io:10888',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
