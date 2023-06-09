// uno.config.ts
import { defineConfig,
  presetUno,
  presetWebFonts,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup, } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Lato', 'Lato:400,700'],
        display: ['Benguiat'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})