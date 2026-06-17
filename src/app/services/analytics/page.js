import { permanentRedirect } from 'next/navigation'

export default async function LegacyAnalyticsPage() {
  permanentRedirect('/resources')
}
