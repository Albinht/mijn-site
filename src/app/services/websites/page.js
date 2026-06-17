import { permanentRedirect } from 'next/navigation'

export default async function LegacyWebsitesPage() {
  permanentRedirect('/website-laten-maken')
}
