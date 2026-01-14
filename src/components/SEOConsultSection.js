'use client'

import LeadForm from './LeadForm'
import useLocale from '@/hooks/useLocale'
import { getSEOConsultSectionCopy } from '@/i18n/services/seo-consult-section'

const SEOConsultSection = () => {
  const { locale } = useLocale()
  const copy = getSEOConsultSectionCopy(locale)

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {copy.title.prefix}{' '}
              <span className="bg-[#FFE500] px-2 rounded">{copy.title.highlight}</span>
              {copy.title.suffix ? ` ${copy.title.suffix}` : ''}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {copy.intro}
            </p>

            <div className="bg-[#FFE500]/20 border-2 border-black rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">{copy.callout.title}</h3>
              <ul className="space-y-2 text-sm text-gray-900">
                {copy.callout.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              <h3 className="font-bold text-xl text-gray-900">{copy.benefitsTitle}</h3>
              
              {copy.benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-gray-900 block">{benefit.title}</span>
                    <span className="text-sm text-gray-600">{benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="md:sticky md:top-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SEOConsultSection
