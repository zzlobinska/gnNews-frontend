import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEN from './locales/en/common.json';
import commonPL from './locales/pl/common.json';

const resources = {
  en: {
    common: commonEN
  },
  pl: {
    common: commonPL
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl',
    interpolation: {
      escapeValue: false 
    }
  });

export { default } from 'i18next';
