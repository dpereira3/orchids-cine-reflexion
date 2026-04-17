import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // ── IMPORTANTE para GitHub Pages ──
  // Descomentá la línea siguiente y poné el nombre exacto de tu repositorio.
  // Sin esto, los archivos CSS y JS no se encuentran al publicar.
  base: '/orchids-cine-reflexion/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
