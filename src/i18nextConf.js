import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationTR from './assets/locales/tr/translationTR.json'

const availableLanguages = ['en'];
const resources = {
    tr: {
        translation: translationTR
    },
    en: {

    }

};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',

        detection: {
            checkWhitelist: true,
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false,
        },
    });

