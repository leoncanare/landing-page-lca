import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import es from "./es";

const stored =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: stored || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

export default i18n;
