import { getServerLocale } from '@/lib/locale';
import { getYouTubeNameGeneratorCopy } from '@/i18n/tools/youtube-name-generator';

export async function generateMetadata() {
  const locale = await getServerLocale();
  const copy = getYouTubeNameGeneratorCopy(locale);
  return copy.metadata;
}

export default function Layout({ children }) {
  return children;
}
