import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import SEOServicesSection from '../../../components/SEOServicesSection'
import SEOReviewSlider from '../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../components/SEOConsultSection'
import SEOBenefitsSlider from '../../../components/SEOBenefitsSlider'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getSEOPageCopy } from '@/i18n/services/seo-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getSEOPageCopy(locale)
  return copy.metadata
}

export default async function SEOPage() {
  const locale = await getServerLocale()
  const copy = getSEOPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  const pillarStyles = [
    { bg: 'bg-[#1795FF]', text: 'text-white' },
    { bg: 'bg-[#FFE500]', text: 'text-black' },
    { bg: 'bg-[#1795FF]', text: 'text-white' },
  ]

  return (
    <ServicePageTemplate hero={heroData}>
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.whyOutsource.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.whyOutsource.title.highlight}</span>{' '}
            {copy.whyOutsource.title.suffix}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {copy.whyOutsource.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p className="font-semibold">{copy.whyOutsource.lead}</p>
            <ul className="space-y-3 ml-6">
              {copy.whyOutsource.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">&#10003;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SEOReviewSlider />

      <SEOBenefitsSlider />

      <SEOServicesSection />

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.pillars.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.pillars.title.highlight}</span>{' '}
            {copy.pillars.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.pillars.subtitle}
          </p>

          <div className="space-y-8">
            {copy.pillars.items.map((item, index) => {
              const style = pillarStyles[index] || pillarStyles[0]
              return (
                <div key={item.title} className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${style.bg} border-2 border-black rounded-xl flex items-center justify-center ${style.text} font-bold text-2xl`}>
                        {item.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      {item.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className={paragraphIndex === 0 ? 'text-gray-600 mb-4' : 'text-gray-600'}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {copy.audience.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.audience.title.highlight}</span>{' '}
            {copy.audience.title.suffix}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000] h-full flex flex-col">
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-black">
                  &#10003;
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {copy.audience.good.title.prefix}{' '}
                    <span className="text-[#1795FF]">{copy.audience.good.title.highlight}</span>{' '}
                    {copy.audience.good.title.suffix}
                  </h3>
                </div>
              </div>
              <ul className="space-y-4 flex-1">
                {copy.audience.good.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">&#10003;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000] h-full flex flex-col">
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold text-2xl border-2 border-black">
                  &#10007;
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {copy.audience.bad.title.prefix}{' '}
                    <span className="text-gray-500">{copy.audience.bad.title.highlight}</span>{' '}
                    {copy.audience.bad.title.suffix}
                  </h3>
                </div>
              </div>
              <ul className="space-y-4 flex-1">
                {copy.audience.bad.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">&#10007;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.roadmap.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.roadmap.title.highlight}</span>{' '}
            {copy.roadmap.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.roadmap.subtitle}
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {copy.roadmap.steps.map((step) => (
              <div key={step.number} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {copy.caseStudies.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.caseStudies.title.highlight}</span>{' '}
            {copy.caseStudies.title.suffix}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.caseStudies.items.map((item, index) => {
              const statsColumns = item.stats.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
              const badgeClasses = index === 0 ? 'bg-[#FFE500] text-black' : 'bg-[#1795FF] text-white'

              return (
                <div key={item.company} className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${badgeClasses} border-2 border-black rounded-full flex items-center justify-center text-2xl font-bold`}>
                      {item.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{item.company}</h3>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {item.description}
                  </p>
                  <div className={`grid ${statsColumns} gap-4 mb-6`}>
                    {item.stats.map((stat, statIndex) => (
                      <div key={`${stat.label}-${statIndex}`} className="text-center">
                        <div className="text-3xl font-bold text-[#1795FF] mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {copy.otherMarketing.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.otherMarketing.title.highlight}</span>{' '}
            {copy.otherMarketing.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {copy.otherMarketing.intro}
          </p>

          <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 mb-8">
            <h3 className="font-bold text-xl text-gray-900 mb-4">
              {copy.otherMarketing.callout.title}
            </h3>
            {copy.otherMarketing.callout.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'text-gray-700 leading-relaxed' : 'text-gray-700 leading-relaxed mt-4'}>
                {paragraph}
              </p>
            ))}
          </div>

          <p className="text-lg text-gray-900 font-semibold mb-6">
            {copy.otherMarketing.closing}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.pricing.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.pricing.title.highlight}</span>{' '}
            {copy.pricing.title.suffix}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              {copy.pricing.intro}
            </p>
            <ul className="space-y-3 ml-6">
              {copy.pricing.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">&#8226;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white border-2 border-black rounded-xl p-6 mt-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">&#128161;</span>
                {copy.pricing.callout.title}
              </h3>
              <p className="text-gray-700">
                {copy.pricing.callout.body}
              </p>
            </div>

            <p className="text-center font-semibold text-gray-900 pt-6">
              {copy.pricing.closing}
            </p>
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
            {copy.faq.items.map((item, index) => (
              <details key={index} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  {item.question}
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SEOConsultSection />
    </ServicePageTemplate>
  )
}
