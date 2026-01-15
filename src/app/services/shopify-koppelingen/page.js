import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '@/components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '@/components/DevelopmentConsultSection'
import Image from 'next/image'
import Link from 'next/link'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getShopifyKoppelingenPageCopy } from '@/i18n/services/shopify-koppelingen-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getShopifyKoppelingenPageCopy(locale)
  return copy.metadata
}

export default async function ShopifyKoppelingenPage() {
  const locale = await getServerLocale()
  const copy = getShopifyKoppelingenPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  const listIconAlt = 'Check'

  return (
    <ServicePageTemplate hero={heroData}>
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {copy.sections.intro.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.intro.title.highlight}</span>
                {copy.sections.intro.title.suffix ? ` ${copy.sections.intro.title.suffix}` : ''}
              </h2>
              <div className="space-y-4 text-gray-600">
                {copy.sections.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{copy.sections.intro.listHeading}</h3>
                <div className="space-y-4">
                  {copy.sections.intro.listItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex-shrink-0 mt-1">
                        <Image src="/blog.png" alt={listIconAlt} width={24} height={24} />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.benefits.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.benefits.title.highlight}</span>
              {copy.sections.benefits.title.suffix ? ` ${copy.sections.benefits.title.suffix}` : ''}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.sections.benefits.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.sections.benefits.cards.map((card) => (
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

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.examples.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.examples.title.highlight}</span>
              {copy.sections.examples.title.suffix ? ` ${copy.sections.examples.title.suffix}` : ''}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.sections.examples.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {copy.sections.examples.cards.map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{card.description}</p>
                    <p className="text-sm text-gray-500 italic">{card.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {copy.sections.cta.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.cta.title.highlight}</span>
            {copy.sections.cta.title.suffix ? ` ${copy.sections.cta.title.suffix}` : ''}
          </h2>
          {copy.sections.cta.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg text-gray-600 mb-8 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <Link
            href={buildLocalizedPath(copy.sections.cta.buttonLink, locale)}
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            {copy.sections.cta.buttonText} <span>→</span>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.related.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.related.title.highlight}</span>
              {copy.sections.related.title.suffix ? ` ${copy.sections.related.title.suffix}` : ''}
            </h2>
            <p className="text-lg text-gray-600">{copy.sections.related.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {copy.sections.related.cards.map((card) => (
              <Link
                key={card.href}
                href={buildLocalizedPath(card.href, locale)}
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

      <DevelopmentReviewSlider />
      <DevelopmentConsultSection />
    </ServicePageTemplate>
  )
}
