export const defaultLocale = 'en';
export const sourceLocale = 'nl';
export const supportedLocales = ['en', 'de', 'sv', 'da', 'fr', 'it', 'nl'];
export const localeCookieName = 'niblah-locale';

const localeAliases = {
  'en-us': 'en',
  'en_us': 'en',
  'en-gb': 'en',
  'de-de': 'de',
  'sv-se': 'sv',
  'da-dk': 'da',
  'fr-fr': 'fr',
  'it-it': 'it',
  'nl-nl': 'nl',
};

const nonLocalizedPrefixes = [
  '/api',
  '/_next',
  '/admin',
  '/favicon',
  '/icon',
  '/robots.txt',
  '/sitemap.xml',
  '/uploads',
  '/downloads',
  '/assets',
  '/static',
];

export const localeLabels = {
  en: 'English (US)',
  de: 'Deutsch',
  sv: 'Svenska',
  da: 'Dansk',
  fr: 'Francais',
  it: 'Italiano',
  nl: 'Nederlands',
};

export function normalizeLocale(value) {
  if (!value) return null;
  const normalized = value.toLowerCase().replace('_', '-');
  if (supportedLocales.includes(normalized)) return normalized;
  return localeAliases[normalized] || normalized.split('-')[0];
}

export function isSupportedLocale(value) {
  const locale = normalizeLocale(value);
  return supportedLocales.includes(locale);
}

export function splitLocaleFromPath(pathname) {
  if (!pathname || pathname === '/') {
    return { locale: null, pathname: '/' };
  }

  const segments = pathname.split('/');
  const maybeLocale = segments[1];
  if (isSupportedLocale(maybeLocale)) {
    const rest = '/' + segments.slice(2).join('/');
    return { locale: normalizeLocale(maybeLocale), pathname: rest === '/' ? '/' : rest.replace(/\/$/, '') };
  }

  return { locale: null, pathname };
}

export function buildLocalizedPath(pathname, locale) {
  const normalizedPath = pathname && pathname !== '' ? pathname : '/';
  if (isLocaleExcludedPath(normalizedPath)) return normalizedPath;
  if (locale === defaultLocale) return normalizedPath;
  return `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function isLocaleExcludedPath(pathname) {
  if (!pathname) return false;
  if (nonLocalizedPrefixes.some((prefix) => pathname.startsWith(prefix))) return true;
  if (pathname.startsWith('/marketing/')) return true;
  if (pathname.startsWith('/marketing-')) return true;
  if (pathname.startsWith('/services/') && pathname.endsWith('-barneveld')) return true;
  return false;
}

export function parseAcceptLanguage(value) {
  if (!value) return [];
  return value
    .split(',')
    .map((entry) => {
      const [lang, qValue] = entry.trim().split(';q=');
      return { lang: normalizeLocale(lang), q: qValue ? Number(qValue) : 1 };
    })
    .filter((item) => item.lang)
    .sort((a, b) => b.q - a.q)
    .map((item) => item.lang);
}

export function pickPreferredLocale({ cookieLocale, acceptLanguage }) {
  if (cookieLocale && isSupportedLocale(cookieLocale)) return normalizeLocale(cookieLocale);
  const accepted = parseAcceptLanguage(acceptLanguage);
  const match = accepted.find((locale) => supportedLocales.includes(locale));
  return match || defaultLocale;
}

export function localeToHtmlLang(locale) {
  const normalized = normalizeLocale(locale) || defaultLocale;
  if (normalized === 'en') return 'en-US';
  if (normalized === 'nl') return 'nl-NL';
  if (normalized === 'de') return 'de-DE';
  if (normalized === 'sv') return 'sv-SE';
  if (normalized === 'da') return 'da-DK';
  if (normalized === 'fr') return 'fr-FR';
  if (normalized === 'it') return 'it-IT';
  return normalized;
}

export function localeToOpenGraphLocale(locale) {
  const normalized = normalizeLocale(locale) || defaultLocale;
  if (normalized === 'en') return 'en_US';
  if (normalized === 'nl') return 'nl_NL';
  if (normalized === 'sv') return 'sv_SE';
  if (normalized === 'da') return 'da_DK';
  if (normalized === 'de') return 'de_DE';
  if (normalized === 'fr') return 'fr_FR';
  if (normalized === 'it') return 'it_IT';
  return normalized;
}
