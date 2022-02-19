import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';
import vue from '@vitejs/plugin-vue';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';

const __APP_NAME__ = 'Coin';

const __ICON__ = [
  `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`,
  `<link rel="alternate icon" href="/favicon.ico" type="image/png" sizes="16x16">`,
  `<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">`,
  `<link rel="mask-icon" href="/favicon.svg" color="#FFFFFF">`,
  `<meta name="theme-color" content="#ffffff">`
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [VantResolve()]
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: __APP_NAME__,
          icon: __ICON__.join('\n')
        }
      }
    }),
    VitePWA({
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: __APP_NAME__,
        short_name: __APP_NAME__,
        description: 'Yet another account record...',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
