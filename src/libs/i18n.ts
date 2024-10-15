import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translations from './../locales'

const i18nConfig = {
  supportedLngs: ['en', 'pt', 'es'],
  resources: translations,
  fallbackLng: 'en',
  defaultNS: 'translations',
  lowerCaseLng: true,
  cleanCode: true,
  nonExplicitSupportedLngs: true
}

void i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig)

export default i18n
