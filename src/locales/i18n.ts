import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './en/common.json';
import ptCommon from './pt/common.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: enCommon,
  },
  pt: {
    common: ptCommon,
  },
} as const;

export const i18n = i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: Object.keys(resources.en),
    resources,
    defaultNS,

    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    interpolation: {
      escapeValue: false,
    },
  });
