import "../styles/globals.css";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "../languages/en.json";
import cs from "../languages/cs.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["querystring", "cookie", "navigator"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      caches: ["cookie"],
    },
    resources: {
      en: {
        translation: en,
      },
      cs: {
        translation: cs,
      },
    },
    //lng: "en"
    fallbackLng: "en",
    supportedLngs: ["en", "cs"],
    interpolation: {
      escapeValue: false,
    },
  });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
