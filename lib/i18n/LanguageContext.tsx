"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  dir: "ltr" | "rtl";
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  dir: "ltr",
  isAr: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Apply dir + class to <html> element whenever lang changes
  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang) || "en";
    applyLang(saved);
    setLangState(saved);
  }, []);

  const applyLang = (l: Lang) => {
    const html = document.documentElement;
    html.setAttribute("lang", l);
    html.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    if (l === "ar") {
      html.classList.add("lang-ar");
    } else {
      html.classList.remove("lang-ar");
    }
  };

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem("lang", l);
    applyLang(l);
    setLangState(l);
  }, []);

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang],
    dir: lang === "ar" ? "rtl" : "ltr",
    isAr: lang === "ar",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
