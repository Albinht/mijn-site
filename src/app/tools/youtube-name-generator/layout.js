import { getYouTubeNameGeneratorCopy } from '@/content/tools/youtube-name-generator';

export async function generateMetadata() {
  const copy = getYouTubeNameGeneratorCopy();
  return copy.metadata;
}

export default function Layout({ children }) {
  return children;
}
