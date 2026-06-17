import { getWorkWithMeCopy } from '@/content/work-with-me'

export async function generateMetadata() {
  const copy = getWorkWithMeCopy()
  return copy.metadata
}

export default function WorkWithMeLayout({ children }) {
  return children
}
