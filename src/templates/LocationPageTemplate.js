'use client'

import HeroSection from '../components/templates/HeroSection'
import FeatureSection from '../components/FeatureSection'
import ReviewSlider from '../components/ReviewSlider'
import ServiceGrid from '../components/templates/ServiceGrid'
import CTASection from '../components/templates/CTASection'
import ContactSection from '../components/templates/ContactSection'
import { spacing } from '../styles/tokens'

export default function LocationPageTemplate({
  location,
  seo,
  hero,
  features,
  reviews,
  services,
  cta,
  contact,
  areaInfo,
}) {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        {/* Hero Section */}
        <HeroSection {...hero} />

        {/* Feature Section (met FeatureSection component voor visuele features) */}
        {features && (
          <FeatureSection
            title={features.title}
            subtitle={features.subtitle}
            features={features.items}
          />
        )}

        {/* Reviews Section */}
        {reviews && (
          <ReviewSlider
            customReviews={reviews.items}
            customMoreReviews={reviews.moreItems}
            title={reviews.title}
          />
        )}

        {/* Services Grid */}
        {services && (
          <ServiceGrid
            title={services.title}
            subtitle={services.subtitle}
            services={services.items}
            backgroundColor={services.backgroundColor}
          />
        )}

        {/* CTA Section */}
        {cta && (
          <CTASection {...cta} />
        )}

        {/* Contact Section */}
        {(contact || areaInfo) && (
          <ContactSection
            title={contact?.title}
            description={contact?.description}
            phone={contact?.phone}
            whatsapp={contact?.whatsapp}
            areaInfo={areaInfo}
            locationName={location?.name}
          />
        )}
    </main>
  )
}
