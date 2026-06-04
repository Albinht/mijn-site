import { permanentRedirect } from 'next/navigation'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'

export default async function LegacyContentPage() {
  const locale = await getServerLocale()
  permanentRedirect(buildLocalizedPath('/services/seo/contentmarketing', locale))
}
