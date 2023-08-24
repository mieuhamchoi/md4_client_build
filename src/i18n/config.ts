import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json'
console.log("en", en)
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: en,
      },
    },
});

export default i18n