import { join, resolve } from 'path';
import { existsSync, readFileSync } from 'fs';

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

import { format } from 'date-fns';

const OFFICIAL_REPO = 'yjl9903/CoBook';

const version = findPackage().version;

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __FingerprintJS__: process.env.FingerprintJS && `"${process.env.FingerprintJS}"`,
    __GITHUB_SHA__:
      process.env.GITHUB_REPOSITORY === OFFICIAL_REPO &&
      process.env.GITHUB_SHA &&
      `"${process.env.GITHUB_SHA}"`,
    __VERSION__: `"${version}"`,
    __BUILD_TIME__: `"${format(new Date(), 'yyyy-MM-dd HH:mm')}"`
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [VantResolve()],
      exclude: []
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

function findPackage() {
  for (const rp of ['./package.json', '../package.json']) {
    const p = join(__dirname, rp);
    if (existsSync(p)) {
      return JSON.parse(readFileSync(p, 'utf-8'));
    }
  }
}
