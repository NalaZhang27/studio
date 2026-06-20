import type { Locale, LocalizedString } from "@/types";

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function t(
  content: LocalizedString | undefined | null,
  locale: Locale,
  fallback = ""
): string {
  return content?.[locale] ?? content?.en ?? fallback;
}
