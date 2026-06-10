import type { Locale, LocalizedString } from "@/types";

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function t(content: LocalizedString, locale: Locale): string {
  return content[locale];
}
