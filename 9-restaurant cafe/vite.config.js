import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// import gsap from 'gsap'

export default defineConfig({
  plugins: [
    tailwindcss(),
    // gsap()
  ],
    server:true
})