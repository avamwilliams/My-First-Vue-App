import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/confif/
export default defineConfig({
    base: '/deploying-my-vue-app/',
    plugins: [vue()]
})