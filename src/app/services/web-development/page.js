import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import PlatformServicesSection from '../../../components/PlatformServicesSection'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getWebDevelopmentPageCopy } from '@/i18n/services/web-development-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getWebDevelopmentPageCopy(locale)
  return copy.metadata
}

export default async function WebDevelopmentPage() {
  const locale = await getServerLocale()
  const copy = getWebDevelopmentPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  return (
    <ServicePageTemplate hero={heroData}>
      <PlatformServicesSection />
      <DevelopmentReviewSlider />
      <DevelopmentConsultSection />
    </ServicePageTemplate>
  )
}
