	import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
	import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
	import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
	import Link from 'next/link'
	import Image from 'next/image'
	import { getServerLocale } from '@/lib/locale'
	import { buildLocalizedPath } from '@/lib/i18n'
	import { getWordPressDeveloperCopy } from '@/i18n/wordpress/developer-page'

	export async function generateMetadata() {
	  const locale = await getServerLocale()
	  const copy = getWordPressDeveloperCopy(locale)
	  return copy.metadata
	}

	export default async function WordPressDeveloperPage() {
	  const locale = await getServerLocale()
	  const copy = getWordPressDeveloperCopy(locale)

	  const heroData = {
	    ...copy.hero,
	    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
	  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom Niblah Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {copy.sections.why.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.why.title.highlight}</span>
                {copy.sections.why.title.suffix}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>{copy.sections.why.paragraphs[0]}</p>
                <p>{copy.sections.why.paragraphs[1]}</p>
                <p className="font-semibold text-gray-900">{copy.sections.why.paragraphs[2]}</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {copy.sections.why.buildHeading}
                </h3>
                <div className="space-y-4">
                  {copy.sections.why.buildItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex-shrink-0 mt-1">
                        <Image src="/wp dev.png" alt="Check" width={24} height={24} />
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

      {/* Wat We Doen Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.services.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.services.title.highlight}</span>
              {copy.sections.services.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.sections.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.sections.services.cards.map((card) => (
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

      {/* Hoe We Werken Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.sections.process.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.process.title.highlight}</span>
              {copy.sections.process.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.sections.process.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.sections.process.steps.map((step) => (
              <div key={step.number} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <ul className="space-y-2 text-xs text-gray-600">
                  {step.bullets.map((bullet) => (
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

      {/* WordPress Expertise Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {copy.sections.cms.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.cms.title.highlight}</span>
                {copy.sections.cms.title.suffix}
              </h2>
              <div className="space-y-4 text-gray-600">
                {copy.sections.cms.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {copy.sections.cms.benefitsHeading}
              </h3>
              <div className="space-y-4">
                {copy.sections.cms.benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibiliteit Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {copy.sections.flexibility.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.sections.flexibility.title.highlight}</span>
            {copy.sections.flexibility.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {copy.sections.flexibility.paragraph}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {copy.sections.flexibility.options.map((option) => (
              <div key={option.title} className="bg-gray-50 border-2 border-black rounded-xl p-6 text-left">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{option.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                <p className="text-xs text-gray-500">{option.note}</p>
              </div>
            ))}
          </div>

          <Link
            href={buildLocalizedPath(copy.sections.flexibility.buttonLink, locale)}
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            {copy.sections.flexibility.buttonText} <span>→</span>
          </Link>
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
