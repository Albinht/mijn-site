import { getHreflangTesterCopy } from '@/content/tools/hreflang-tester';

export async function generateMetadata() {
  const copy = getHreflangTesterCopy();
  return copy.metadata;
}

export default function Layout({ children }) {
  return children;
}
