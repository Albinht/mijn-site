import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import SEOConsultSection from '@/components/SEOConsultSection'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getSEABingAdsPageCopy } from '@/i18n/services/sea-bing-ads-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getSEABingAdsPageCopy(locale)
  return copy.metadata
}

export default async function BingAdsPage() {
  const locale = await getServerLocale()
  const copy = getSEABingAdsPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  const accentBackgrounds = ['bg-[#1795FF] text-white', 'bg-[#FFE500] text-black']
  const accentText = ['text-[#1795FF]', 'text-[#FFE500]']
  const expectationIcons = ['💰', '🚀', '🤝']
  const benefitIcons = ['💸', '💰', '🔗', '🌍', '🎯', '👔']
  const whyIcons = ['💸', '🌐']
  const niblahIcons = ['🎯', '📊', '💰', '🚀']

  return (
    <ServicePageTemplate hero={heroData}>
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.expectations.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.expectations.title.highlight}</span>{' '}
            {copy.expectations.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.expectations.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.expectations.cards.map((card, index) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <div className={`w-12 h-12 ${accentBackgrounds[index % accentBackgrounds.length]} border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4`}>
                  {expectationIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.howWorks.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.howWorks.title.highlight}</span>{' '}
            {copy.howWorks.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.howWorks.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.howWorks.callout.title}</h3>
              {copy.howWorks.callout.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SEOReviewSlider />

      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.benefits.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.benefits.title.highlight}</span>{' '}
            {copy.benefits.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            {copy.benefits.subtitle}
          </p>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {copy.benefits.items.map((item, index) => (
                <div key={item.title} className="flex-shrink-0 w-96 snap-start">
                  <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${accentBackgrounds[index % accentBackgrounds.length]} border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                        {benefitIcons[index]}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4 text-sm text-gray-500">
              {'<- '} {copy.benefits.scrollHint} {' ->'}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.whyCombine.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.whyCombine.title.highlight}</span>{' '}
            {copy.whyCombine.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.whyCombine.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {copy.whyCombine.columns.map((column, index) => (
                <div key={column.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className={`${accentText[index % accentText.length]} text-2xl`}>{whyIcons[index]}</span>
                    {column.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {column.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className={`${accentText[index % accentText.length]} mt-1`}>&#10003;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-[#1795FF] text-white border-2 border-black rounded-xl p-8 mt-8 shadow-[6px_6px_0_0_#000]">
              <p className="text-lg font-semibold text-center">
                {copy.whyCombine.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.niblah.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.niblah.title.highlight}</span>{' '}
            {copy.niblah.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.niblah.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="space-y-6 mt-8">
              {copy.niblah.cards.map((card, index) => (
                <div key={card.title} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className={`${accentText[index % accentText.length]} text-2xl`}>{niblahIcons[index]}</span>
                    {card.title}
                  </h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {copy.faq.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.faq.title.highlight}</span>{' '}
            {copy.faq.title.suffix}
          </h2>

          <div className="space-y-4">
            {copy.faq.items.map((item) => (
              <details key={item.question} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  {item.question}
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SEOConsultSection />
    </ServicePageTemplate>
  )
}
