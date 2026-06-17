import { permanentRedirect } from 'next/navigation'

export default async function LegacyAutomationPage() {
  permanentRedirect('/resources/automation')
}
