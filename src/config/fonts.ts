interface Record {
  [property: string]: string
}

interface Source {
  path: string
  css?: Record
  style: string
  preload?: boolean
  weight?: string | number
}

export interface FontConfig {
  name: string
  src: Source[]
  fetch?: boolean
  display: string
  verbose?: boolean
  selector?: string
  preload?: boolean
  cacheDir?: string
  basePath?: string
  fallbackName?: string
  googleFontsURL?: string
  cssVariable?: string | boolean
  fallback: 'serif' | 'sans-serif'
}

// Get font from diffrerent sources
// More info: https://github.com/rishi-raj-jain/astro-font/
export const mainPageFonts: FontConfig[] = [
  // {
  //   name: 'Inter',
  //   src: [],
  //   googleFontsURL: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  //   preload: true,
  //   display: 'swap',
  //   fallback: 'sans-serif',
  // },
  // {
  //   src: [],
  //   name: 'Poppins',
  //   // Google Fonts URL
  //   googleFontsURL: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,700&display=swap',
  //   preload: true,
  //   display: 'swap',
  //   fallback: 'sans-serif',
  // },
]

export const allFonts: FontConfig[] = [...mainPageFonts]
