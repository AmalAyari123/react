// app/language/useTranslation.js

import { useContext } from "react";
import translation from "./translation";
import LanguageContext from "./languageContext";


export default function useTranslation() {
  const { language } = useContext(LanguageContext);

  const currentLang = language === "Français" ? "fr" : "en";

  const t = (key) => {
    const keys = key.split(".");
    let value = translation[currentLang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t };
}
