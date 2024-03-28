import { join } from 'node:path'

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
  fallback: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui'
}

const localFontsPath = join(process.cwd(), 'public', 'fonts')

export const fontLaOriental: FontConfig = {
  name: 'La Oriental',
  src: [
    {
      style: 'bold',
      weight: 600,
      path: join(localFontsPath, 'LaOriental.otf'),
    },
  ],
  preload: false,
  display: 'swap',
  fallback: 'sans-serif' as const,
}

export const fontAnta: FontConfig = {
  src: [],
  name: 'Anta',
  // Google Fonts URL
  googleFontsURL: 'https://fonts.googleapis.com/css2?family=Anta',
  preload: true,
  display: 'swap',
  fallback: 'sans-serif',
}

export const commonFonts = [fontLaOriental, fontAnta]

// Get font from diffrerent sources
// More info: https://github.com/rishi-raj-jain/astro-font/
export const mainPageFonts: FontConfig[] = [
  {
    name: 'Jack Input',
    src: [
      {
        style: 'normal',
        weight: 400,
        path: join(localFontsPath, 'JackInput.ttf'),
      },
    ],
    preload: false,
    display: 'swap',
    fallback: 'monospace',
  },
  {
    src: [],
    name: 'VT323',
    // Google Fonts URL
    googleFontsURL: 'https://fonts.googleapis.com/css2?family=VT323',
    preload: true,
    display: 'swap',
    fallback: 'sans-serif',
  },
  {
    src: [],
    name: 'Archivo Black',
    // Google Fonts URL
    googleFontsURL: 'https://fonts.googleapis.com/css2?family=Archivo+Black',
    preload: true,
    display: 'swap',
    fallback: 'sans-serif',
  },
  ...commonFonts,
]

export const allFonts: FontConfig[] = [...mainPageFonts]
