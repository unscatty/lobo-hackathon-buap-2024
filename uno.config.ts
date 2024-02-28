import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography()
  ],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx()
  ],
})
