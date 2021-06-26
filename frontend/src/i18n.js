import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

i18n
    .use(detector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        languages: ['en', 'de', 'fr'],
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            wait: true,
            useSuspense: true,
        }
    });

export default i18n;