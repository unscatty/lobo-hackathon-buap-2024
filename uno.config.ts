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
import { variantInherit, variantScoped, variantWeakInherit } from './src/config/unocss/variants'
import { allFonts } from './src/config/fonts'
import { glitch1Preset, imageGlitch1Preset, btnGlitch1Preset } from './src/config/unocss/glitch-effects'

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
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    // Glitch effects
    glitch1Preset,
    imageGlitch1Preset,
    btnGlitch1Preset,
  ],
  transformers: [transformerDirectives(), transformerAttributifyJsx(), transformerVariantGroup()],
  variants: [variantInherit, variantWeakInherit, variantScoped],
})
