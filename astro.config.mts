import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { loadEnv } from 'vite'

const { SITE_URL } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '')

console.log(`Astro's SITE_URL: ${SITE_URL}`)

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
})
