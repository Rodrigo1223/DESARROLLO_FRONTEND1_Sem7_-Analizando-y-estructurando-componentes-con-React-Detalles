import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DESARROLLO_FRONTEND1_Sem7_-Analizando-y-estructurando-componentes-con-React-Detalles/', // <-- Agrega esta línea exacta
})
