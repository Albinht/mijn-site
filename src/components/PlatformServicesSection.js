'use client'

import Link from 'next/link'
import Image from 'next/image'

const PlatformServicesSection = () => {
  const shopifyServices = [
    { title: 'Shopify webshop laten maken', href: '/shopify/webshop-laten-maken' },
    { title: 'Shopify maatwerk', href: '/shopify/maatwerk' },
    { title: 'Shopify thema', href: '/shopify/thema' },
    { title: 'Shopify marketing', href: '/shopify/marketing' },
    { title: 'Shopify migreren', href: '/shopify/migratie' },
    { title: 'Shopify koppelingen', href: '/services/shopify-koppelingen' },
    { title: 'Shopify partner', href: '/services/shopify-partner' },
    { title: 'Shopify developer', href: '/services/shopify-developer' },
  ]

  const wordpressServices = [
    { title: 'WordPress website laten maken', href: '/wordpress/website-laten-maken' },
    { title: 'WordPress maatwerk', href: '/wordpress/maatwerk' },
    { title: 'WordPress thema', href: '/wordpress/thema' },
    { title: 'WordPress marketing', href: '/wordpress/marketing' },
    { title: 'WordPress migreren', href: '/wordpress/migratie' },
    { title: 'WordPress koppelingen', href: '/wordpress/koppelingen' },
    { title: 'WordPress partner', href: '/wordpress/partner' },
    { title: 'WordPress developer', href: '/wordpress/developer' },
  ]

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Shopify Sectie */}
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/blog.png" alt="Shopify" width={40} height={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Shopify <span className="bg-[#1795FF] text-white px-2 rounded">Development</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Van webshop tot maatwerk apps - alles voor jouw Shopify succes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shopifyServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
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

        {/* WordPress Sectie */}
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/wp dev.png" alt="WordPress" width={40} height={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                WordPress <span className="bg-[#1795FF] text-white px-2 rounded">Development</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Van website tot custom plugins - complete WordPress oplossingen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wordpressServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
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
