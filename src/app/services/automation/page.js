import { permanentRedirect } from 'next/navigation'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'

export default async function LegacyAutomationPage() {
  const locale = await getServerLocale()
  permanentRedirect(buildLocalizedPath('/resources/automation', locale))
}
