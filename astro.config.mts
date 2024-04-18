import node from '@astrojs/node'
import React from '@astrojs/react'
import Sitemap from '@astrojs/sitemap'
import Vue from '@astrojs/vue'
import AstroFontPicker from 'astro-font-picker'
import Icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import AuthAstro from 'auth-astro'
import UnoCSS from 'unocss/astro'
import { loadEnv } from 'vite'

const { SITE_URL: PROCESS_SITE_URL, PORT: PROCESS_PORT, HOST: PROCESS_HOST } = process.env
const {
  SITE_URL: LOADED_SITE_URL,
  PORT: LOADED_PORT,
  HOST: LOADED_HOST,
} = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')

const SITE_URL = PROCESS_SITE_URL || LOADED_SITE_URL
const PORT = PROCESS_PORT || LOADED_PORT || '3000'
const HOST = PROCESS_HOST || LOADED_HOST || 'localhost'

if (process.env.NODE_ENV === 'production' && !SITE_URL) {
  throw new Error('SITE_URL is required. Place it inside .env file')
}

console.log('\x1b[34m%s\x1b[0m', `Astro's SITE_URL: ${SITE_URL}`)

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: parseInt(PORT),
    host: HOST,
  },
  site: SITE_URL,
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    // Font Picker for Astro's dev toolbar
    AstroFontPicker(),
    Sitemap(),
    // https://github.com/natemoo-re/astro-icon
    Icon(),

    // React integration
    React(),

    // Vue integration
    Vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    AuthAstro(),
  ],
  vite: {
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.node': 'file',
        },
      },
    },
  },
})
