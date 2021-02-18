import Translations from "./locales/translations.json";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: JSON.parse(JSON.stringify(Translations)),
  initImmediate: false,
  lng: "ru",
  fallbackLng: "ru",
  debug: true,
  react: {
    wait: true,
    useSuspense: false,
  },
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18next;
