import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import SEOConsultSection from '@/components/SEOConsultSection'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getSEAGoogleShoppingPageCopy } from '@/i18n/services/sea-google-shopping-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getSEAGoogleShoppingPageCopy(locale)
  return copy.metadata
}

export default async function GoogleShoppingPage() {
  const locale = await getServerLocale()
  const copy = getSEAGoogleShoppingPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  const accentBackgrounds = ['bg-[#1795FF] text-white', 'bg-[#FFE500] text-black']
  const accentText = ['text-[#1795FF]', 'text-[#FFE500]']
  const expectationIcons = ['📈', '🤝', '🚀']
  const stepIcons = ['📝', '💰', '✨', '📊']
  const highlightIcons = ['👁️', '🎯', '💰', '📊']
  const benefitIcons = ['📈', '🛠️', '⏰', '💰']
  const uniqueIcons = ['🤝', '🎯', '🚀', '💰']

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
            {copy.outsource.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.outsource.title.highlight}</span>{' '}
            {copy.outsource.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.outsource.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.outsource.callout.title}</h3>
              <p className="text-gray-700 mb-4">{copy.outsource.callout.description}</p>
              <ul className="space-y-2">
                {copy.outsource.callout.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="text-[#1795FF] text-xl flex-shrink-0">&#10003;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.whatIs.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.whatIs.title.highlight}</span>{' '}
            {copy.whatIs.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.whatIs.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.whatIs.callout.title}</h3>
              <p className="text-gray-700 mb-4">{copy.whatIs.callout.description}</p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {copy.whatIs.callout.highlights.map((highlight, index) => (
                  <div key={highlight.title} className="flex items-start gap-3">
                    <span className={`${accentText[index % accentText.length]} text-2xl flex-shrink-0`}>{highlightIcons[index]}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{highlight.title}</p>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SEOReviewSlider />

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.steps.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.steps.title.highlight}</span>{' '}
            {copy.steps.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.steps.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.steps.items.map((step, index) => (
              <div key={step.number} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{stepIcons[index]}</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#1795FF] mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {copy.steps.closing.title}
            </h3>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              {copy.steps.closing.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.benefits.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.benefits.title.highlight}</span>{' '}
            {copy.benefits.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            {copy.benefits.subtitle}
          </p>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {copy.benefits.items.map((item, index) => (
                <div key={item.title} className="flex-shrink-0 w-96 snap-start">
                  <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
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

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.performance.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.performance.title.highlight}</span>{' '}
            {copy.performance.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.performance.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.performance.compare.regular.title}</h3>
                <ul className="space-y-3">
                  {copy.performance.compare.regular.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-[#1795FF] mt-1">&#10003;</span>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.performance.compare.max.title}</h3>
                <ul className="space-y-3">
                  {copy.performance.compare.max.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-[#FFE500] mt-1">&#10003;</span>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#1795FF] text-white border-2 border-black rounded-xl p-8 mt-8 shadow-[6px_6px_0_0_#000]">
              <p className="text-lg font-semibold text-center">
                {copy.performance.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.unique.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.unique.title.highlight}</span>{' '}
            {copy.unique.title.suffix}
          </h2>

          <div className="space-y-6">
            {copy.unique.items.map((item, index) => (
              <div key={item.title} className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className={`${accentText[index % accentText.length]} text-2xl`}>{uniqueIcons[index]}</span>
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {copy.faq.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.faq.title.highlight}</span>{' '}
            {copy.faq.title.suffix}
          </h2>

          <div className="space-y-4">
            {copy.faq.items.map((item) => (
              <details key={item.question} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  {item.question}
                </summary>
                {item.answer ? (
                  <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
                ) : (
                  <div className="mt-4 text-gray-600 leading-relaxed space-y-3">
                    <p>{item.intro}</p>
                    <ul className="space-y-2 ml-6">
                      {item.tips.map((tip) => (
                        <li key={tip.label} className="flex items-start gap-2">
                          <span className="text-[#1795FF]">&bull;</span>
                          <span>
                            <strong>{tip.label}</strong> {tip.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>

      <SEOConsultSection />
    </ServicePageTemplate>
  )
}
