import { permanentRedirect } from 'next/navigation'

export default async function LegacyContentPage() {
  permanentRedirect('/services/seo/contentmarketing')
}
