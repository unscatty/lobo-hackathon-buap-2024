import i18next from 'i18next'
import translationES from 'zod-i18n-map/locales/es/zod.json'

// lng and resources key depend on your locale.
i18next.init({
  lng: 'es',
  resources: {
    es: { zod: translationES },
  },
})

export { i18next }