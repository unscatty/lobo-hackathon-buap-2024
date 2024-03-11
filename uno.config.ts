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
import { allFonts, fontLaOriental, fontAnta } from './src/config/fonts'
import { colorPalette } from './src/config/unocss/color-palette'
import {
  btnGlitch1_2Preset,
  glitch1Preset,
  imgGlitch1Preset,
} from './src/config/unocss/glitch-effects'
import { type Theme } from './src/config/unocss/types'
import { variantInherit, variantScoped, variantWeakInherit } from './src/config/unocss/variants'
import { allIcons } from './src/config/unocss/icons'

// Convert the fonts array to an object
const customFonts: Record<string, string> = {}
for (const font of allFonts) {
  customFonts[font.name.toLowerCase().replaceAll(' ', '-')] = [font.name, font.fallback].join(',')
}

const iconsSafelist = allIcons.flatMap((iconSet) => Object.values(iconSet))

export default defineConfig<Theme>({
  theme: {
    colors: colorPalette,
    fontFamily: {
      ...customFonts,
      title: [fontLaOriental.name, fontLaOriental.fallback].join(','),
      sub: [fontAnta.name, fontAnta.fallback].join(','),
    },
    animation: {
      durations: {
        blink: '1s',
      },
      timingFns: {
        blink: 'linear',
      },
      counts: {
        blink: 'infinite',
      },
      keyframes: {
        blink: /*css*/ `
        {
          0% {visibility: visible;}
          49% {visibility: visible;}
          50% {visibility: hidden;}
          100% {visibility: hidden;}
        }`,
      },
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
    imgGlitch1Preset,
    btnGlitch1_2Preset,
  ],
  transformers: [transformerDirectives(), transformerAttributifyJsx(), transformerVariantGroup()],
  variants: [variantInherit, variantWeakInherit, variantScoped],
  safelist: [...iconsSafelist],
})
