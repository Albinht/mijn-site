'use client'

import LeadForm from './LeadForm'

const SEOConsultSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Start met een <span className="bg-[#FFE500] px-2 rounded">gratis groeiscan</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Goed vindbaar is mooi. Maar wat levert het op? Onze groeiscan geeft je inzicht in de factoren die de effectiviteit van SEO beïnvloeden.
            </p>

            <div className="bg-[#FFE500]/20 border-2 border-black rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">Wat kan je verwachten?</h3>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>✓ Analyse van techniek, content, autoriteit én conversie</li>
                <li>✓ Inzicht in de factoren die effectiviteit beïnvloeden</li>
                <li>✓ Handgemaakt door een SEO-specialist</li>
                <li>✓ Focus op resultaat, niet alleen rankings</li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              <h3 className="font-bold text-xl text-gray-900">Wat kan ik verwachten?</h3>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900 block">Meetbaar resultaat</span>
                  <span className="text-sm text-gray-600">Je ontvangt iedere maand een uitgebreide rapportage waarin je precies ziet wat jouw investering oplevert.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900 block">Lekker flexibel</span>
                  <span className="text-sm text-gray-600">Samenwerking waar iedereen blij van wordt. Je zit nergens aan vast.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900 block">Strategisch partner</span>
                  <span className="text-sm text-gray-600">SEO is voor ons meer dan op de juiste knoppen klikken. We denken ook graag mee over jouw strategie.</span>
                </div>
              </div>
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
