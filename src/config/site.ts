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
    { href: "/about", key: "about" },
    { href: "/portfolio", key: "portfolio" },
    { href: "/services", key: "services" },
    { href: "/projects", key: "projects" },
    { href: "/contact", key: "contact" },
  ] as const,
  storageKey: "aurora-locale",
} as const;
