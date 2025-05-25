import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["39da-2405-201-6803-a89b-50ef-2453-20bf-ca4b.ngrok-free.app"],
  }
})
