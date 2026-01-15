import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '@/components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '@/components/DevelopmentConsultSection'
import Image from 'next/image'
import Link from 'next/link'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getShopifyPartnerPageCopy } from '@/i18n/services/shopify-partner-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getShopifyPartnerPageCopy(locale)
  return copy.metadata
}

export default async function ShopifyPartnerPage() {
  const locale = await getServerLocale()
  const copy = getShopifyPartnerPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  return (
    <ServicePageTemplate hero={heroData}>
      {/* Partner Status Uitleg Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {copy.status.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.status.title.highlight}</span>
                {copy.status.title.suffix ? ` ${copy.status.title.suffix}` : ''}
              </h2>
              <div className="space-y-4 text-gray-600">
                {copy.status.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === copy.status.paragraphs.length - 1 ? 'font-semibold text-gray-900' : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {copy.status.benefitTitle}
                </h3>
                <div className="space-y-4">
                  {copy.status.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex-shrink-0 mt-1">
                        <Image src="/blog.png" alt={copy.status.checkAlt} width={24} height={24} />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.benefits.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.benefits.title.highlight}</span>
              {copy.benefits.title.suffix ? ` ${copy.benefits.title.suffix}` : ''}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.benefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.benefits.cards.map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe We Werken Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.process.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.process.title.highlight}</span>
              {copy.process.title.suffix ? ` ${copy.process.title.suffix}` : ''}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.process.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.process.steps.map((step) => (
              <div key={step.number} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Garanties Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.guarantees.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.guarantees.title.highlight}</span>
              {copy.guarantees.title.suffix ? ` ${copy.guarantees.title.suffix}` : ''}
            </h2>
            <p className="text-lg text-gray-600">
              {copy.guarantees.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {copy.guarantees.items.map((item) => (
              <div key={item.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {copy.cta.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.cta.title.highlight}</span>
            {copy.cta.title.suffix ? ` ${copy.cta.title.suffix}` : ''}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {copy.cta.paragraphs[0]}
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {copy.cta.paragraphs[1]}
          </p>
          <Link
            href={buildLocalizedPath(copy.cta.buttonLink, locale)}
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            {copy.cta.buttonText} <span>→</span>
          </Link>
        </div>
      </section>

      {/* Gerelateerde Services */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.related.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.related.title.highlight}</span>
              {copy.related.title.suffix ? ` ${copy.related.title.suffix}` : ''}
            </h2>
            <p className="text-lg text-gray-600">
              {copy.related.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {copy.related.cards.map((card) => (
              <Link
                key={card.href}
                href={buildLocalizedPath(card.href, locale)}
                className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                <span className="text-[#1795FF] text-sm font-semibold">{copy.related.linkText}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <DevelopmentReviewSlider />

      {/* Gratis Consult */}
      <DevelopmentConsultSection />
    </ServicePageTemplate>
  )
}
