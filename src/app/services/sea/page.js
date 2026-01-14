import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import SEOReviewSlider from '../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../components/SEOConsultSection'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getSEAPageCopy } from '@/i18n/services/sea-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getSEAPageCopy(locale)
  return copy.metadata
}

export default async function SEAPage() {
  const locale = await getServerLocale()
  const copy = getSEAPageCopy(locale)

  const heroData = {
    ...copy.hero,
    ctaLink: buildLocalizedPath(copy.hero.ctaLink, locale),
  }

  const expectationIcons = ['💰', '⚙️', '🤝']
  const expertiseIcons = ['🛒', '🔍', '📱', '⚙️']

  return (
    <ServicePageTemplate hero={heroData}>
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {copy.strategy.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.strategy.title.highlight}</span>{' '}
            {copy.strategy.title.suffix}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {copy.strategy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-semibold">{copy.strategy.lead}</p>
            <ul className="space-y-3 ml-6">
              {copy.strategy.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">&#10003;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white border-2 border-black rounded-xl p-6 mt-8 shadow-[4px_4px_0_0_#000]">
              <p className="text-gray-700 font-semibold mb-2">{copy.strategy.callout.title}</p>
              {copy.strategy.callout.items.map((item, index) => (
                <p key={item.label} className={index === 0 ? 'text-gray-700 text-sm mb-2' : index === copy.strategy.callout.items.length - 1 ? 'text-gray-700 text-sm' : 'text-gray-700 text-sm mb-2'}>
                  <strong>{item.label}</strong> {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SEOReviewSlider />

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {copy.expectations.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.expectations.cards.map((card, index) => (
              <div key={card.title} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-[#1795FF] text-white' : 'bg-[#FFE500] text-black'} border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4`}>
                  {expectationIcons[index]}
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
            {copy.nowVsLater.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.nowVsLater.title.highlight}</span>{' '}
            {copy.nowVsLater.title.suffix}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 border-2 border-black rounded-full flex items-center justify-center text-gray-400 text-2xl">
                  &#10007;
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{copy.nowVsLater.nowTitle}</h3>
              </div>
              <ul className="space-y-4">
                {copy.nowVsLater.nowItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">&#10007;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl">
                  &#10003;
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{copy.nowVsLater.laterTitle}</h3>
              </div>
              <ul className="space-y-4">
                {copy.nowVsLater.laterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">&#10003;</span>
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
            {copy.expertise.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.expertise.title.highlight}</span>{' '}
            {copy.expertise.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.expertise.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.expertise.items.map((item, index) => (
              <div key={item.title} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-[#1795FF] text-white' : 'bg-[#FFE500] text-black'} border-2 border-black rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto`}>
                  {expertiseIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                {item.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraph} className={paragraphIndex === 0 ? 'text-gray-600 mb-4' : 'text-gray-600'}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.steps.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.steps.title.highlight}</span>{' '}
            {copy.steps.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {copy.steps.subtitle}
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {copy.steps.items.map((step) => (
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

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {copy.caseStudies.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.caseStudies.title.highlight}</span>{' '}
            {copy.caseStudies.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            {copy.caseStudies.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.caseStudies.items.map((item, index) => (
              <div key={item.company} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-16 h-16 ${index === 0 ? 'bg-[#FFE500] text-black' : 'bg-[#1795FF] text-white'} border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl`}>
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">{item.company}</h3>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 font-medium">
                  {item.description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-[#1795FF]">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
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
            {copy.testimonials.title.prefix}{' '}
            <span className="bg-[#FFE500] px-2 rounded">{copy.testimonials.title.highlight}</span>{' '}
            {copy.testimonials.title.suffix}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            {copy.testimonials.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.testimonials.items.map((review) => (
              <div key={review.name} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  {review.quote}
                </p>
                <p className="font-bold text-gray-900">{review.name}</p>
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
              <span className="font-bold text-gray-900">{copy.testimonials.ratingLabel}</span>
            </div>
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
