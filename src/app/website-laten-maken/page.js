import Link from 'next/link'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '@/components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '@/components/DevelopmentConsultSection'
import { getWebsiteLatenMakenCopy } from '@/content/services/website-laten-maken-page'

export async function generateMetadata() {
  const copy = getWebsiteLatenMakenCopy()
  const path = '/website-laten-maken'

  return {
    ...copy.metadata,
    alternates: {
      canonical: `https://niblah.com${path}`,
    },
    openGraph: {
      ...copy.metadata.openGraph,
      url: `https://niblah.com${path}`,
    },
  }
}

export default async function WebsiteLatenMakenPage() {
  const copy = getWebsiteLatenMakenCopy()

  const heroData = {
    ...copy.hero,
    ctaLink: copy.hero.ctaLink,
  }

  return (
    <ServicePageTemplate hero={heroData} features={copy.reasons}>
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {copy.sections.deliverables.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.deliverables.title.highlight}</span>{' '}
                {copy.sections.deliverables.title.suffix}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {copy.sections.deliverables.intro}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {copy.sections.deliverables.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-5 shadow-[4px_4px_0_0_#000]"
                  >
                    <div className="w-8 h-8 bg-[#FFE500] rounded-lg border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-black">✓</span>
                    </div>
                    <p className="text-gray-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0_0_#000]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {copy.sections.wordpress.title.prefix}{' '}
                <span className="bg-[#FFE500] px-2 rounded">{copy.sections.wordpress.title.highlight}</span>{' '}
                {copy.sections.wordpress.title.suffix}
              </h3>
              <div className="space-y-4 text-gray-700 mb-6">
                {copy.sections.wordpress.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="space-y-3">
                {copy.sections.wordpress.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <span className="text-[#1795FF] text-xl leading-none mt-0.5">•</span>
                    <p className="text-gray-900">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DevelopmentReviewSlider />

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.pricing.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.pricing.title.highlight}</span>{' '}
              {copy.sections.pricing.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.sections.pricing.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 items-start">
            <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="space-y-4">
                {copy.sections.pricing.factors.map((factor) => (
                  <div key={factor} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[#1795FF] rounded-lg border-2 border-black flex items-center justify-center flex-shrink-0 text-white font-bold">
                      +
                    </div>
                    <p className="text-gray-900">{factor}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FFE500] border-2 border-black rounded-2xl p-8 shadow-[6px_6px_0_0_#000]">
              <p className="text-lg font-semibold text-gray-900 mb-6">
                {copy.sections.pricing.closing}
              </p>
              <Link
                href={'/contact'}
                className="inline-flex items-center justify-center gap-2 font-semibold text-white text-sm px-6 py-3 rounded-full bg-black border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000] transition-all duration-200"
              >
                {copy.hero.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.process.title.prefix}{' '}
              <span className="bg-[#FFE500] px-2 rounded">{copy.sections.process.title.highlight}</span>{' '}
              {copy.sections.process.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.sections.process.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {copy.sections.process.steps.map((step) => (
              <div key={step.number} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="w-12 h-12 bg-[#1795FF] rounded-full border-2 border-black flex items-center justify-center text-white font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.faq.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.faq.title.highlight}</span>{' '}
              {copy.sections.faq.title.suffix}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {copy.sections.faq.items.map((item) => (
              <div key={item.question} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.related.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.related.title.highlight}</span>{' '}
              {copy.sections.related.title.suffix}
            </h2>
            <p className="text-lg text-gray-600">{copy.sections.related.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {copy.sections.related.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                <span className="text-[#1795FF] text-sm font-semibold">{copy.sections.related.moreInfoLabel}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DevelopmentConsultSection />
    </ServicePageTemplate>
  )
}
