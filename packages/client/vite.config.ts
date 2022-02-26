import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';
import vue from '@vitejs/plugin-vue';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';
import { createCoBookPlugin } from '@cobook/vite-plugin';

const __APP_NAME__ = 'Coin Book';

const __DESCRIPTION__ = 'Yet another account record...';

const __ICON__ = [
  `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`,
  `<link rel="alternate icon" href="/favicon.ico" type="image/png" sizes="16x16">`,
  `<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">`,
  `<link rel="mask-icon" href="/favicon.svg" color="#FFFFFF">`,
  `<link href="splash/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />`,
  `<link href="splash/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />`,
  `<link href="splash/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />`,
  `<link href="splash/iphone12_splash.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />`,
  `<link href="splash/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />`,
  `<meta name="theme-color" content="#ffffff">`,
  `<meta name="apple-mobile-web-app-capable" content="yes">`
].join('\n');

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
          icon: __ICON__,
          description: __DESCRIPTION__
        }
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: __APP_NAME__,
        short_name: __APP_NAME__,
        description: __DESCRIPTION__,
        theme_color: '#ffffff',
        lang: 'zh',
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
    }),
    createCoBookPlugin()
  ]
});
