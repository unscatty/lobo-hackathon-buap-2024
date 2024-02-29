import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { loadEnv } from 'vite'

const { SITE_URL } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '')

if (!SITE_URL) {
  throw new Error('SITE_URL is required. Place it inside .env file')
}

console.log('\x1b[34m%s\x1b[0m', `Astro's SITE_URL: ${SITE_URL}`)

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
})
