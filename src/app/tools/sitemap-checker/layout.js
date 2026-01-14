import { getServerLocale } from '@/lib/locale';
import { getSitemapCheckerCopy } from '@/i18n/tools/sitemap-checker';

export async function generateMetadata() {
  const locale = await getServerLocale();
  const copy = getSitemapCheckerCopy(locale);
  return copy.metadata;
}

export default function Layout({ children }) {
  return children;
}
