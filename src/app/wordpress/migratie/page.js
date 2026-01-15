import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '@/components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '@/components/DevelopmentConsultSection'
import Image from 'next/image'
import Link from 'next/link'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getWordPressMigratieCopy } from '@/i18n/wordpress/migratie-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getWordPressMigratieCopy(locale)
  return copy.metadata
}

export default async function WordPressMigratiePage() {
  const locale = await getServerLocale()
  const copy = getWordPressMigratieCopy(locale)

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
                {copy.sections.data.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.data.title.highlight}</span>{' '}
                {copy.sections.data.title.suffix}
              </h2>
              <div className="space-y-4 text-gray-600">
                {copy.sections.data.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === copy.sections.data.paragraphs.length - 1 ? 'font-semibold text-gray-900' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{copy.sections.data.listHeading}</h3>
                <div className="space-y-4">
                  {copy.sections.data.listItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex-shrink-0 mt-1">
                        <Image src="/wp dev.png" alt={listIconAlt} width={24} height={24} />
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
              {copy.sections.routes.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.routes.title.highlight}</span>{' '}
              {copy.sections.routes.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.sections.routes.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {copy.sections.routes.cards.map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">{copy.sections.routes.ctaNote}</p>
            <Link
              href={buildLocalizedPath(copy.sections.routes.ctaLink, locale)}
              className="inline-flex items-center justify-center gap-2 font-semibold text-[#1795FF] hover:text-[#1795FF]/80 transition-colors"
            >
              {copy.sections.routes.ctaText} <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.steps.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.steps.title.highlight}</span>{' '}
              {copy.sections.steps.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.sections.steps.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.sections.steps.cards.map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{card.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-[#1795FF] mt-1">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.guarantees.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.guarantees.title.highlight}</span>{' '}
              {copy.sections.guarantees.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.sections.guarantees.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {copy.sections.guarantees.cards.map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.pricing.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.pricing.title.highlight}</span>{' '}
              {copy.sections.pricing.title.suffix}
            </h2>
            {copy.sections.pricing.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg text-gray-600 leading-relaxed mb-8">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border-2 border-black shadow-[8px_8px_0_0_#000]">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{copy.sections.pricing.boxTitle}</h3>
            <p className="text-gray-600 text-center mb-8">{copy.sections.pricing.boxSubtitle}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {copy.sections.pricing.factors.map((factor) => (
                <div key={factor.title} className="bg-white rounded-lg p-4 border-2 border-black">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <Image src="/wp dev.png" alt={listIconAlt} width={32} height={32} />
                    </div>
                    <h4 className="font-bold text-gray-900">{factor.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={buildLocalizedPath(copy.sections.pricing.buttonLink, locale)}
                className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
              >
                {copy.sections.pricing.buttonText} <span>→</span>
              </Link>
              <p className="text-sm text-gray-600 mt-4">{copy.sections.pricing.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-gray-50">
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

