import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@app": resolve(__dirname, "src/app"),
            "@pages": resolve(__dirname, "src/pages"),
            "@features": resolve(__dirname, "src/features"),
            "@shared": resolve(__dirname, "src/shared"),
        },
    },
})
