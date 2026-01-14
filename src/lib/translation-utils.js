import { sourceLocale, supportedLocales } from '@/lib/i18n';

export const requiredLocales = supportedLocales;

export function normalizeTranslations({ translations, baseLocale = sourceLocale, baseValues, fields }) {
  const normalized = translations && typeof translations === 'object' ? { ...translations } : {};
  const baseEntry = { ...(normalized[baseLocale] || {}) };

  fields.forEach((field) => {
    if (baseValues[field] && !baseEntry[field]) {
      baseEntry[field] = baseValues[field];
    }
  });

  normalized[baseLocale] = baseEntry;
  return normalized;
}

export function isTranslationComplete({ translations, fields, locales = requiredLocales }) {
  if (!translations || typeof translations !== 'object') return false;
  return locales.every((locale) => {
    const entry = translations[locale];
    if (!entry) return false;
    return fields.every((field) => {
      const value = entry[field];
      if (value === undefined || value === null) return false;
      if (typeof value === 'string' && value.trim().length === 0) return false;
      return true;
    });
  });
}
