import { getSitemapCheckerCopy } from '@/content/tools/sitemap-checker';

export async function generateMetadata() {
  const copy = getSitemapCheckerCopy();
  return copy.metadata;
}

export default function Layout({ children }) {
  return children;
}
