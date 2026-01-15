	import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
	import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
	import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
	import Link from 'next/link'
	import Image from 'next/image'
	import { getServerLocale } from '@/lib/locale'
	import { buildLocalizedPath } from '@/lib/i18n'
	import { getWordPressKoppelingenCopy } from '@/i18n/wordpress/koppelingen-page'

	export async function generateMetadata() {
	  const locale = await getServerLocale()
	  const copy = getWordPressKoppelingenCopy(locale)
	  return copy.metadata
	}

	export default async function WordPressKoppelingenPage() {
	  const locale = await getServerLocale()
	  const copy = getWordPressKoppelingenCopy(locale)

	  const heroData = {
	    ...copy.hero,
	    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
	  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Wat zijn Koppelingen Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {copy.sections.intro.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.intro.title.highlight}</span>
                {copy.sections.intro.title.suffix}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>{copy.sections.intro.paragraphs[0]}</p>
                <p>{copy.sections.intro.paragraphs[1]}</p>
                <p className="font-semibold text-gray-900">{copy.sections.intro.paragraphs[2]}</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {copy.sections.intro.benefitsHeading}
                </h3>
                <div className="space-y-4">
                  {copy.sections.intro.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex-shrink-0 mt-1">
                        <Image src="/wp dev.png" alt="Check" width={24} height={24} />
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

      {/* Systemen Koppelen Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.systems.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.systems.title.highlight}</span>
              {copy.sections.systems.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.sections.systems.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.sections.systems.cards.map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{card.paragraphs[0]}</p>
                    <p className="text-gray-600 text-sm">{card.paragraphs[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifieke Koppelingen Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.popular.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.popular.title.highlight}</span>
              {copy.sections.popular.title.suffix}
            </h2>
            <p className="text-lg text-gray-600">
              {copy.sections.popular.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.sections.popular.cards.map((card) => (
              <div key={card.title} className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0_0_#000]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <div className="space-y-3 mb-6">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                      </div>
                      <p className="text-gray-700 text-sm">{bullet}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={buildLocalizedPath(card.ctaLink, locale)}
                  className="inline-flex items-center justify-center gap-2 font-semibold text-[#1795FF] hover:text-[#1795FF]/80 transition-colors"
                >
                  {card.ctaText} <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficiëntie Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {copy.sections.efficiency.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.efficiency.title.highlight}</span>
            {copy.sections.efficiency.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {copy.sections.efficiency.paragraphs[0]}
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {copy.sections.efficiency.paragraphs[1]}
          </p>
          <Link
            href={buildLocalizedPath(copy.sections.efficiency.buttonLink, locale)}
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            {copy.sections.efficiency.buttonText} <span>→</span>
          </Link>
        </div>
      </section>

      {/* Maatwerk Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.custom.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.custom.title.highlight}</span>
              {copy.sections.custom.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.sections.custom.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.sections.custom.cards.map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              {copy.sections.custom.question}
            </p>
            <Link
              href={buildLocalizedPath(copy.sections.custom.linkLink, locale)}
              className="inline-flex items-center justify-center gap-2 font-semibold text-[#1795FF] hover:text-[#1795FF]/80 transition-colors text-lg"
            >
              {copy.sections.custom.linkText} <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gerelateerde Services */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.related.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.related.title.highlight}</span>
              {copy.sections.related.title.suffix}
            </h2>
            <p className="text-lg text-gray-600">
              {copy.sections.related.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {copy.sections.related.cards.map((card) => (
              <Link
                key={card.href}
                href={buildLocalizedPath(card.href, locale)}
                className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                <span className="text-[#1795FF] text-sm font-semibold">{copy.sections.related.moreInfoLabel}</span>
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
