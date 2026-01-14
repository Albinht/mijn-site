'use client'

import Link from 'next/link'
import useLocale from '@/hooks/useLocale'
import { getSEOServicesSectionCopy } from '@/i18n/services/seo-services-section'

const SEOServicesSection = () => {
  const { locale } = useLocale()
  const copy = getSEOServicesSectionCopy(locale)
  const seoServices = copy.services

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {copy.title.prefix}{' '}
            <span className="bg-[#1795FF] text-white px-2 rounded">{copy.title.highlight}</span>
            {copy.title.suffix ? ` ${copy.title.suffix}` : ''}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {copy.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((service, index) => {
            const CardContent = (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
                {service.link && (
                  <div className="mt-4 flex items-center gap-2 text-[#1795FF] font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>{copy.linkLabel}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </>
            )

            return service.link ? (
              <Link
                key={index}
                href={service.link}
                className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200 block"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={index}
                className="bg-white border-2 border-black rounded-xl p-6 shadow-[0_6px_0_0_#000]"
              >
                {CardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SEOServicesSection
