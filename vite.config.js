import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // allows external access 
    port: 5173,        // your Vite port
    allowedHosts: ['.ngrok-free.app'], // allow ngrok tunnels
  },
})
