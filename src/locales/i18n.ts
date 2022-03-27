import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './en/common.json';
import enPokemon from './en/pokemon.json';
import ptCommon from './pt/common.json';
import ptPokemon from './pt/pokemon.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: enCommon,
    pokemon: enPokemon,
  },
  pt: {
    common: ptCommon,
    pokemon: ptPokemon,
  },
} as const;

export const i18n = i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['common', 'pokemon'],
    resources,
    defaultNS,

    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    interpolation: {
      escapeValue: false,
    },
  });
