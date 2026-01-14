'use client';

import { usePathname } from 'next/navigation';
import {
  defaultLocale,
  isLocaleExcludedPath,
  sourceLocale,
  splitLocaleFromPath,
} from '@/lib/i18n';

export default function useLocale() {
  const pathname = usePathname() || '/';
  const { locale: localeFromPath, pathname: basePath } = splitLocaleFromPath(pathname);
  const isExcluded = isLocaleExcludedPath(basePath);
  const locale = isExcluded ? sourceLocale : (localeFromPath || defaultLocale);

  return {
    locale,
    basePath,
    pathname,
    isExcluded,
  };
}
