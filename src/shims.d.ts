import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare global {
  // Enable UnoCSS attributify mode in Astro
  namespace astroHTML.JSX {
    interface HTMLAttributes extends AttributifyAttributes {}
  }
}
