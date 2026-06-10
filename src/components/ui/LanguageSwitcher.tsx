"use client";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur-sm",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      {siteConfig.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc as Locale)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200",
            locale === loc
              ? "bg-aurora-gold text-aurora-dark shadow-sm"
              : "text-aurora-muted hover:text-white"
          )}
          aria-pressed={locale === loc}
          aria-label={`Switch to ${siteConfig.localeLabels[loc]}`}
        >
          {siteConfig.localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
