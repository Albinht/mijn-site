import { permanentRedirect } from 'next/navigation'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'

export default async function LegacyWebsitesPage() {
  const locale = await getServerLocale()
  permanentRedirect(buildLocalizedPath('/website-laten-maken', locale))
}
