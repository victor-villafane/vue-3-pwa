import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate', //Esto actualiza automaticamente su sw
      includeAssets: ["favicon.ico"],
      manifest: {
        "theme_color": "#8936FF",
        "background_color": "#2EC6FE",
        "icons": [
          {
            "purpose": "maskable",
            "sizes": "512x512",
            "src": "icon512_maskable.png",
            "type": "image/png"
          },
          {
            "purpose": "any",
            "sizes": "512x512",
            "src": "icon512_rounded.png",
            "type": "image/png"
          }
        ],
        "orientation": "any",
        "display": "standalone",
        "dir": "auto",
        "lang": "es-ES",
        "name": "vue 3 pwa",
        "short_name": "pwa"
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
