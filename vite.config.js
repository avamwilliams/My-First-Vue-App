import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/confif/
export default defineConfig({
    base: '/My-First-Vue-App-Deploy/',
    plugins: [vue()]
})