import { useEffect, useMemo, useState } from "react";
import type { Language, LocalizedString } from "../data/profile";

const storageKey = "portfolio-language";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem(storageKey);
    return saved === "zh" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  return useMemo(
    () => ({
      language,
      setLanguage,
      t: (value: LocalizedString) => value[language],
    }),
    [language],
  );
}
