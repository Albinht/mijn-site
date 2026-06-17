import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import PlatformServicesSection from '../../../components/PlatformServicesSection'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import { getWebDevelopmentPageCopy } from '@/content/services/web-development-page'

export async function generateMetadata() {
  const copy = getWebDevelopmentPageCopy()
  return copy.metadata
}

export default async function WebDevelopmentPage() {
  const copy = getWebDevelopmentPageCopy()

  const heroData = {
    ...copy.hero,
    ctaLink: copy.hero.ctaLink,
  }

  return (
    <ServicePageTemplate hero={heroData}>
      <PlatformServicesSection />
      <DevelopmentReviewSlider />
      <DevelopmentConsultSection />
    </ServicePageTemplate>
  )
}
