import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import de from '../locales/de.json';

// Detect browser language
const userLang = navigator.language || navigator.languages[0];
const detectedLang = userLang.startsWith('de') ? 'de' : 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: detectedLang,
    fallbackLng: 'en', // Default to English
    /*detection: {
      order: ['navigator', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },*/
    interpolation: { escapeValue: false },
  });

export default i18n;