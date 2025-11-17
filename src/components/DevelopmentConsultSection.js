'use client'

import LeadForm from './LeadForm'

const DevelopmentConsultSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-0">
              <button className="px-3 md:px-6 py-1.5 md:py-2.5 bg-[#241C15] text-white font-semibold rounded-l-full border-2 border-[#241C15] text-xs md:text-base whitespace-nowrap">
                Probeer het gratis
              </button>
              <button className="px-3 md:px-6 py-1.5 md:py-2.5 bg-white text-gray-900 font-normal rounded-r-full border-2 border-[#241C15] border-l-0 text-xs md:text-base">
                <span className="font-semibold">Bespaar 25%</span> <span className="hidden sm:inline">t.o.v. grote bureaus</span><span className="sm:hidden">vs bureaus</span>
              </button>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Start je development project met een <span className="bg-[#FFE500] px-2 rounded">gratis consult</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Bespreek je project met onze development experts. We analyseren je behoeften, adviseren over de beste technologie en maken een duidelijk stappenplan.
            </p>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-900">30+ jaar gecombineerde ervaring</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-900">Realistische tijdlijn & budget</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-900">Technisch advies op maat</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-900">Geen verplichtingen</span>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="lg:sticky lg:top-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentConsultSection
