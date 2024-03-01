import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { allFonts } from './src/config/fonts'

// Convert the fonts array to an object
const customFonts: Record<string, string> = {}
for (const font of allFonts) {
  customFonts[font.name.toLowerCase().replaceAll(' ', '-')] = [font.name, font.fallback].join(',')
}

export default defineConfig({
  theme: {
    fontFamily: {
      ...customFonts,
    },
  },
  shortcuts: {},
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTypography()],
  transformers: [transformerDirectives(), transformerAttributifyJsx(), transformerVariantGroup()],
})
