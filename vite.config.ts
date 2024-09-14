import UnpluginTypia from '@ryoppippi/unplugin-typia/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import presetUno from 'unocss/preset-uno'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnpluginTypia(),
    UnoCSS({ presets: [presetUno()] }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      // TODO: need to modify manifest setting
      manifest: {
        name: `MagBook`,
        short_name: 'App',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'public/icons/logo-with-shadow.png',
            sizes: '640x640',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'public/icons/logo-with-shadow.png',
            sizes: '640x640',
            type: 'image/png',
            label: 'Wide Screenshot',
            form_factor: 'wide',
          },
          {
            src: 'public/icons/logo-with-shadow.png',
            sizes: '640x640',
            type: 'image/png',
            label: 'Mobile Screenshot',
            form_factor: 'narrow',
          },
        ],
      },
    }),
  ],
})
