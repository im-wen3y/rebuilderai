import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageEn, LanguageKo } from './locales';

export const languages = ['en', 'ko'] as const;

export type Languages = (typeof languages)[number]; // 'en' | 'ko'

const resources = {
  en: {
    translation: LanguageEn,
  },
  ko: {
    translation: LanguageKo,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
