import 'i18next'
import translations from './../locales/en/translation'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translations'
    resources: typeof translations
  }
}
