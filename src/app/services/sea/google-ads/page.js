import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import SEOConsultSection from '@/components/SEOConsultSection'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getSEAGoogleAdsPageCopy } from '@/i18n/services/sea-google-ads-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getSEAGoogleAdsPageCopy(locale)
  return copy.metadata
}

export default async function GoogleAdsPage() {
  const locale = await getServerLocale()
  const copy = getSEAGoogleAdsPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  const accentBackgrounds = ['bg-[#1795FF] text-white', 'bg-[#FFE500] text-black']
  const accentText = ['text-[#1795FF]', 'text-[#FFE500]']
  const expectationIcons = ['💡', '📈', '🤝']
  const clientIcons = ['🎯', '🛤️', '⚙️', '🚀', '📊', '💰']
  const uniqueIcons = ['🎯', '🤝', '💰', '🚀', '🛤️']
  const taskIcons = ['🔍', '💰', '⭐', '📊', '🎯', '🔬', '🚀', '🤝', '📈', '💡']

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
            {copy.niblah.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.niblah.title.highlight}</span>{' '}
            {copy.niblah.title.suffix}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {copy.niblah.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 mt-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.niblah.callout.title}</h3>
              <p className="text-gray-700 mb-4">{copy.niblah.callout.description}</p>
              <ul className="space-y-2">
                {copy.niblah.callout.bullets.map((bullet) => (
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

      <SEOReviewSlider />

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.clients.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.clients.title.highlight}</span>{' '}
            {copy.clients.title.suffix}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.clients.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {copy.clients.cards.map((card, index) => (
              <div key={card.title} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 ${accentBackgrounds[index % accentBackgrounds.length]} border-2 border-black rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                    {clientIcons[index]}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
          <p className="text-lg text-gray-600 text-center mb-12">
            {copy.unique.subtitle}
          </p>

          <div className="space-y-6">
            {copy.unique.items.map((item, index) => (
              <div key={item.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.process.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.process.title.highlight}</span>{' '}
            {copy.process.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.process.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.process.steps.map((step) => (
              <div key={step.number} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="text-5xl font-bold text-[#1795FF] mb-4 opacity-20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.whyAds.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.whyAds.title.highlight}</span>{' '}
            {copy.whyAds.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.whyAds.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.whyAds.callout.title}</h3>
              <p className="text-gray-700 mb-4">{copy.whyAds.callout.description}</p>
              <ul className="grid md:grid-cols-2 gap-3">
                {copy.whyAds.callout.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#1795FF]">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>{copy.whyAds.closing}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.tasks.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.tasks.title.highlight}</span>{' '}
            {copy.tasks.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            {copy.tasks.subtitle}
          </p>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {copy.tasks.items.map((item, index) => (
                <div key={item} className="flex-shrink-0 w-80 snap-start">
                  <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                    <span className={`${accentText[index % accentText.length]} text-3xl flex-shrink-0`}>
                      {taskIcons[index]}
                    </span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4 text-sm text-gray-500">
              {'<- '} {copy.tasks.scrollHint} {' ->'}
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
                {item.answer ? (
                  <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
                ) : (
                  <div className="mt-4 text-gray-600 leading-relaxed space-y-3">
                    <p>{item.intro}</p>
                    {item.tips.map((tip) => (
                      <p key={tip.label}>
                        <strong>{tip.label}</strong> {tip.text}
                      </p>
                    ))}
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
