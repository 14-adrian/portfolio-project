import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        react(),
    ],
    build: {
        outDir: 'public', // ← Build en public/
        emptyOutDir: true, // ← Limpiar public/ antes de build
    }
})