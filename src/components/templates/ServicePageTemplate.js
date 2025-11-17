'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'

const ServicePageTemplate = ({ 
  hero,
  features = [],
  cta,
  children 
}) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      {hero && (
        <section className="bg-[#F5F5F5] py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                {hero.badge && (
                  <div className="inline-block">
                    <span className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      {hero.badge}
                    </span>
                  </div>
                )}
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {hero.title}
                </h1>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {hero.description}
                </p>
                
                {hero.ctaText && hero.ctaLink && (
                  <div className="pt-4">
                    <Link
                      href={hero.ctaLink}
                      className="inline-flex items-center justify-center gap-2 font-semibold text-white text-sm px-6 py-3 rounded-full bg-[#1795FF] hover:bg-[#0f7dd4] transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
                    >
                      {hero.ctaText}
                    </Link>
                  </div>
                )}
                
                {hero.note && (
                  <p className="text-xs md:text-sm text-gray-500 italic">
                    {hero.note}
                  </p>
                )}
              </div>

              {/* Right Column - Image/Mockup */}
              <div className="relative">
                {hero.image && (
                  <div className="relative w-full">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFE500] rounded-2xl -z-10 hidden md:block"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1795FF] rounded-2xl -z-10 hidden md:block"></div>
                    
                    {/* Main Image */}
                    <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0_0_#000]">
                      <Image
                        src={hero.image}
                        alt={hero.imageAlt || hero.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
                >
                  {feature.icon && (
                    <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                      {typeof feature.icon === 'string' ? (
                        <span className="text-2xl">{feature.icon}</span>
                      ) : (
                        feature.icon
                      )}
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Content Slot */}
      {children && (
        <div className="bg-white">
          {children}
        </div>
      )}

      {/* CTA Section */}
      {cta && (
        <section className="bg-[#1795FF] py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {cta.title}
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              {cta.description}
            </p>
            
            {cta.buttonText && cta.buttonLink && (
              <Link
                href={cta.buttonLink}
                className="inline-flex items-center justify-center gap-2 font-semibold text-black text-sm px-8 py-4 rounded-full bg-[#FFE500] hover:bg-[#FFD700] transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
              >
                {cta.buttonText} <span>→</span>
              </Link>
            )}
          </div>
        </section>
      )}
    </main>
  )
}

export default ServicePageTemplate
