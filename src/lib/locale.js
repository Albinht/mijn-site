import { headers } from 'next/headers';
import { defaultLocale, normalizeLocale } from '@/lib/i18n';

export async function getServerLocale() {
  const headerList = await headers();
  const locale = normalizeLocale(headerList.get('x-locale'));
  return locale || defaultLocale;
}
