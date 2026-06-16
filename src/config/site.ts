import type { Locale } from "@/types";

export const siteConfig = {
  defaultLocale: "en" as Locale,
  locales: ["en", "zh"] as const,
  localeLabels: {
    en: "EN",
    zh: "中文",
  },
  nav: [
    { href: "/", key: "home" },
    { href: "/portfolio", key: "portfolio" },
    { href: "/services", key: "services" },
    { href: "/contact", key: "contact" },
  ] as const,
  storageKey: "aurora-locale",
} as const;
