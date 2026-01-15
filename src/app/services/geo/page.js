import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import SEOConsultSection from '@/components/SEOConsultSection'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getGEOPageCopy } from '@/i18n/services/geo-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getGEOPageCopy(locale)
  return copy.metadata
}

export default async function GEOPage() {
  const locale = await getServerLocale()
  const copy = getGEOPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  const whyNiblahIcons = ['🧪', '🎯', '🚀']

  return (
    <ServicePageTemplate hero={heroData}>
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.why.title.prefix ? `${copy.why.title.prefix} ` : ''}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.why.title.highlight}</span>
            {copy.why.title.suffix ? ` ${copy.why.title.suffix}` : ''}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {copy.why.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-semibold">{copy.why.lead}</p>
            <div className="space-y-3 ml-6">
              {copy.why.reasons.map((reason) => (
                <p key={reason} className="text-gray-700">
                  {reason}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SEOReviewSlider />

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.whyNiblah.title.prefix ? `${copy.whyNiblah.title.prefix} ` : ''}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.whyNiblah.title.highlight}</span>
            {copy.whyNiblah.title.suffix ? ` ${copy.whyNiblah.title.suffix}` : ''}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.whyNiblah.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.whyNiblah.cards.map((card, index) => (
              <div key={card.title} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-[#1795FF] text-white' : 'bg-[#FFE500] text-black'} border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4`}>
                  {whyNiblahIcons[index] || '✓'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {copy.nowVsLater.title.prefix ? `${copy.nowVsLater.title.prefix} ` : ''}
            <span className="bg-[#FFE500] px-2 rounded">{copy.nowVsLater.title.highlight}</span>
            {copy.nowVsLater.title.suffix ? ` ${copy.nowVsLater.title.suffix}` : ''}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 border-2 border-black rounded-full flex items-center justify-center text-gray-400 text-2xl">
                  ✗
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{copy.nowVsLater.nowTitle}</h3>
              </div>
              <ul className="space-y-4">
                {copy.nowVsLater.nowItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{copy.nowVsLater.laterTitle}</h3>
              </div>
              <ul className="space-y-4">
                {copy.nowVsLater.laterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
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
            {copy.pillars.title.prefix ? `${copy.pillars.title.prefix} ` : ''}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.pillars.title.highlight}</span>
            {copy.pillars.title.suffix ? ` ${copy.pillars.title.suffix}` : ''}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.pillars.subtitle}
          </p>

          <div className="space-y-6">
            {copy.pillars.items.map((item, index) => (
              <div key={item.number} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 ${index % 2 === 0 ? 'bg-[#1795FF] text-white' : 'bg-[#FFE500] text-black'} border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl`}>
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.paragraphs[0]}</p>
                    <p className="text-gray-700">{item.paragraphs[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.steps.title.prefix ? `${copy.steps.title.prefix} ` : ''}
            <span className="bg-[#FFE500] px-2 rounded">{copy.steps.title.highlight}</span>
            {copy.steps.title.suffix ? ` ${copy.steps.title.suffix}` : ''}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.steps.subtitle}
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {copy.steps.items.map((item) => (
              <div key={item.number} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {item.number}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.caseStudies.title.prefix ? `${copy.caseStudies.title.prefix} ` : ''}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.caseStudies.title.highlight}</span>
            {copy.caseStudies.title.suffix ? ` ${copy.caseStudies.title.suffix}` : ''}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">{copy.caseStudies.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.caseStudies.cases.map((item, index) => (
              <div key={item.name} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-[#FFE500] text-black' : 'bg-[#1795FF] text-white'} border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl`}>
                    {item.badge}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 font-medium">{item.headline}</p>
                <div className="grid grid-cols-3 gap-4">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-3xl font-bold text-[#1795FF]">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.testimonials.title.prefix ? `${copy.testimonials.title.prefix} ` : ''}
            <span className="bg-[#FFE500] px-2 rounded">{copy.testimonials.title.highlight}</span>
            {copy.testimonials.title.suffix ? ` ${copy.testimonials.title.suffix}` : ''}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">{copy.testimonials.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.testimonials.items.map((testimonial) => (
              <div key={testimonial.name} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-6 py-3 shadow-[4px_4px_0_0_#000]">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-gray-900">{copy.testimonials.ratingText}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {copy.faq.title.prefix ? `${copy.faq.title.prefix} ` : ''}
            <span className="bg-[#FFE500] px-2 rounded">{copy.faq.title.highlight}</span>
            {copy.faq.title.suffix ? ` ${copy.faq.title.suffix}` : ''}
          </h2>

          <div className="space-y-4">
            {copy.faq.items.map((faq) => (
              <details key={faq.question} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">{faq.question}</summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SEOConsultSection />
    </ServicePageTemplate>
  )
}

