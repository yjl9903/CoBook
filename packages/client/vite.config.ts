import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';
import { createCoBookPlugin } from '@cobook/vite-plugin';

import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import transformerDirective from '@unocss/transformer-directives';

import { version } from './package.json';

const OFFICIAL_REPO = 'yjl9903/CoBook';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __FingerprintJS__: process.env.FingerprintJS && `"${process.env.FingerprintJS}"`,
    __GITHUB_SHA__:
      process.env.GITHUB_REPOSITORY === OFFICIAL_REPO &&
      process.env.GITHUB_SHA &&
      `"${process.env.GITHUB_SHA}"`,
    __VERSION__: `"${version}"`
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [VantResolve()]
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Coin Book',
        short_name: 'CoBook',
        description: 'Yet another account record...',
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
    Icons(),
    Unocss({
      presets: [presetUno(), presetAttributify(), transformerDirective()],
      theme: {
        fontFamily: {
          mono: ['var(--font-family-mono)', 'var(--font-family-base)']
        }
      }
    }),
    createCoBookPlugin()
  ]
});
