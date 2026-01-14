import { defaultLocale, normalizeLocale } from '@/lib/i18n';

export function getLocaleCopy(copy, locale) {
  const normalized = normalizeLocale(locale) || defaultLocale;
  return copy[normalized] || copy[defaultLocale];
}
