'use client'

import Link from 'next/link'
import Image from 'next/image'
import useLocale from '@/hooks/useLocale'
import { buildLocalizedPath } from '@/lib/i18n'
import { getPlatformServicesSectionCopy } from '@/i18n/services/platform-services-section'

const PlatformServicesSection = () => {
  const { locale } = useLocale()
  const copy = getPlatformServicesSectionCopy(locale)

  const localizePath = (href) => buildLocalizedPath(href, locale)

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/blog.png" alt={copy.shopify.iconAlt} width={40} height={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {copy.shopify.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.shopify.title.highlight}</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              {copy.shopify.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {copy.shopify.services.map((service) => (
              <Link
                key={service.href}
                href={localizePath(service.href)}
                className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors">
                    {service.title}
                  </h3>
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-gray-400 group-hover:text-[#1795FF] group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/wp dev.png" alt={copy.wordpress.iconAlt} width={40} height={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {copy.wordpress.title.prefix}{' '}
                <span className="bg-[#1795FF] text-white px-2 rounded">{copy.wordpress.title.highlight}</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              {copy.wordpress.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {copy.wordpress.services.map((service) => (
              <Link
                key={service.href}
                href={localizePath(service.href)}
                className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors">
                    {service.title}
                  </h3>
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-gray-400 group-hover:text-[#1795FF] group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformServicesSection
