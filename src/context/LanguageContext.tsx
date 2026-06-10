"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { siteConfig } from "@/config/site";
import { getTranslations, type TranslationKeys } from "@/content/i18n";
import type { Locale } from "@/types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

let listeners: Array<() => void> = [];

function readLocale(): Locale {
  if (typeof window === "undefined") return siteConfig.defaultLocale;
  const stored = localStorage.getItem(siteConfig.storageKey);
  if (stored === "en" || stored === "zh") return stored;
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("zh")) return "zh";
  return siteConfig.defaultLocale;
}

function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function writeLocale(locale: Locale) {
  localStorage.setItem(siteConfig.storageKey, locale);
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  listeners.forEach((l) => l());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    readLocale,
    () => siteConfig.defaultLocale
  );

  const setLocale = useCallback((newLocale: Locale) => {
    writeLocale(newLocale);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getTranslations(locale),
    }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  const { t, locale } = useLanguage();
  return { t, locale };
}
