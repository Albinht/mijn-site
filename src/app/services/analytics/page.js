import { permanentRedirect } from 'next/navigation'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'

export default async function LegacyAnalyticsPage() {
  const locale = await getServerLocale()
  permanentRedirect(buildLocalizedPath('/resources', locale))
}
