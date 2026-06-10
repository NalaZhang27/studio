import type { Locale } from "@/types";
import type { TranslationKeys } from "./types";
import { en } from "./en";
import { zh } from "./zh";

export const translations: Record<Locale, TranslationKeys> = {
  en,
  zh: zh as unknown as TranslationKeys,
};

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}

export type { TranslationKeys };
export { en, zh };
