import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import SEOConsultSection from '@/components/SEOConsultSection'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getSEARemarketingPageCopy } from '@/i18n/services/sea-remarketing-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getSEARemarketingPageCopy(locale)
  return copy.metadata
}

export default async function RemarketingPage() {
  const locale = await getServerLocale()
  const copy = getSEARemarketingPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  const expectationIcons = ['💰', '🎯', '🚀']
  const stepIcons = ['1️⃣', '2️⃣', '3️⃣']

  return (
    <ServicePageTemplate hero={heroData}>
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.expectations.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.expectations.title.highlight}</span>{' '}
            {copy.expectations.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{copy.expectations.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.expectations.cards.map((card, index) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  {expectationIcons[index] || '✅'}
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
            {copy.whatIs.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.whatIs.title.highlight}</span> {copy.whatIs.title.suffix}
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.whatIs.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.whatIs.callout.title}</h3>
              {copy.whatIs.callout.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="font-semibold text-gray-900">{copy.whatIs.lead}</p>
            <p>{copy.whatIs.closing}</p>
          </div>
        </div>
      </section>

      <SEOReviewSlider />

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.practice.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.practice.title.highlight}</span>{' '}
            {copy.practice.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">{copy.practice.subtitle}</p>

          <div className="space-y-6">
            {copy.practice.scenarios.map((scenario) => (
              <div key={scenario.title} className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    {scenario.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{scenario.title}</h3>
                    <p className="text-gray-700">{scenario.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-8">{copy.practice.note}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.howWorks.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.howWorks.title.highlight}</span> {copy.howWorks.title.suffix}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10">{copy.howWorks.intro}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.howWorks.steps.map((step, index) => (
              <div key={step.title} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="text-2xl mb-3">{stepIcons[index] || '✅'}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">{copy.tags.title}</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {copy.tags.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="list-disc pl-6 space-y-2">
              {copy.tags.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p>{copy.tags.closing}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.dynamic.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.dynamic.title.highlight}</span> {copy.dynamic.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {copy.dynamic.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.dynamic.example.title}</h3>
              {copy.dynamic.example.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.channels.title.prefix}{' '}
              <span className="bg-[#FFE500] px-2 rounded">{copy.channels.title.highlight}</span>{' '}
              {copy.channels.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.channels.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.channels.items.map((item) => (
              <div key={item.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 text-center mt-8">{copy.channels.scrollHint}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.tips.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.tips.title.highlight}</span>{' '}
              {copy.tips.title.suffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.tips.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {copy.tips.items.map((tip) => (
              <div key={tip.title} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-700 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {copy.niblah.title.prefix}{' '}
              <span className="bg-[#1795FF] text-white px-2 rounded">{copy.niblah.title.highlight}</span>{' '}
              {copy.niblah.title.suffix}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-12">
            {copy.niblah.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {copy.niblah.cards.map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            {copy.faq.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.faq.title.highlight}</span> {copy.faq.title.suffix}
          </h2>

          <div className="space-y-6">
            {copy.faq.items.map((item) => (
              <div key={item.question} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SEOConsultSection />
    </ServicePageTemplate>
  )
}
