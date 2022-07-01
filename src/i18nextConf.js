import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './assets/locales/tr/translationTr.json'

const fallbackLng = ['tr'];
const availableLanguages = ['en', 'ar', 'fr'];
const resources = {
    tr: {
        translation: translationEN
    },

};

i18n
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        resources,
        fallbackLng, // fallback language is english.

        detection: {
            checkWhitelist: true,
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false,
        },
    });

