import { getServerLocale } from '@/lib/locale'
import { getWorkWithMeCopy } from '@/i18n/work-with-me'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getWorkWithMeCopy(locale)
  return copy.metadata
}

export default function WorkWithMeLayout({ children }) {
  return children
}
