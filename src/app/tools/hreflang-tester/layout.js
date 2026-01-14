import { getServerLocale } from '@/lib/locale';
import { getHreflangTesterCopy } from '@/i18n/tools/hreflang-tester';

export async function generateMetadata() {
  const locale = await getServerLocale();
  const copy = getHreflangTesterCopy(locale);
  return copy.metadata;
}

export default function Layout({ children }) {
  return children;
}
