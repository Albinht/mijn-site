import { permanentRedirect } from 'next/navigation'

export default async function LegacyGoogleAdsPage() {
  permanentRedirect('/services/sea/google-ads')
}
