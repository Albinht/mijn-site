import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Shopify Maatwerk | Custom Development & Apps op Maat | Niblah',
  description: 'Shopify maatwerk door Niblah: unieke functionaliteiten, custom apps en design volledig op maat. 30+ jaar development ervaring voor jouw perfecte webshop.',
  keywords: 'shopify maatwerk, shopify custom development, shopify app ontwikkeling, custom shopify theme, maatwerk webshop',
  openGraph: {
    title: 'Shopify Maatwerk | Custom Development | Niblah',
    description: 'Custom Shopify development voor unieke functionaliteiten en design op maat.',
    images: ['/avatar.png'],
  },
}

export default function ShopifyMaatwerkPage() {
  const heroData = {
    badge: 'SHOPIFY MAATWERK DEVELOPMENT',
    title: 'Creëer een Shopify shop met functionaliteiten volledig op maat',
    description: 'Standaard Shopify templates bieden veel, maar met maatwerk ga je verder. Niblah bouwt custom functionaliteiten, unieke designs en geavanceerde integraties die perfect aansluiten op jouw merkidentiteit en bedrijfsdoelen. Van productconfigurators tot complexe API-koppelingen - wij maken het mogelijk.',
    ctaText: 'Bespreek je maatwerk project',
    ctaLink: '/contact',
    note: '* 30+ jaar development expertise voor complete Shopify oplossingen',
    image: '/shopify-maatwerk.png',
    imageAlt: 'Shopify maatwerk development dashboard'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom Maatwerk Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waarom kiezen voor <span className="bg-[#1795FF] text-white px-2 rounded">maatwerk?</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Een standaard Shopify webshop biedt veel mogelijkheden, maar met maatwerk haal je pas het maximale uit je online winkel. Geen beperkingen meer door standaard templates of functies die net niet passen.
                </p>
                <p>
                  Met Shopify maatwerk van Niblah creëer je een webshop die volledig aansluit op jouw unieke merkidentiteit, specifieke workflow en de wensen van je doelgroep. Van custom productpagina's tot geavanceerde ERP-integraties.
                </p>
                <p className="font-semibold text-gray-900">
                  Geen beperkingen, maar complete vrijheid om te groeien, optimaliseren en je te onderscheiden van de concurrentie.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Wat Niblah voor je bouwt:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Custom Shopify themes volledig op maat</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Unieke productconfigurators en builders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Geavanceerde API-integraties met externe systemen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Gepersonaliseerde checkout flows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Custom Shopify apps voor specifieke functionaliteiten</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Geavanceerde zoek- en filteropties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Drie redenen waarom we <span className="bg-[#1795FF] text-white px-2 rounded">maatwerk</span> aanbevelen
            </h2>
            <p className="text-lg text-gray-600 italic max-w-3xl mx-auto">
              "Steeds meer ondernemers kiezen voor maatwerk Shopify - en dat is niet voor niets!"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uniek Design</h3>
              <p className="text-gray-600">
                Geen standaard templates, maar een webshop die perfect aansluit bij de look & feel van jouw merk. Complete controle over elk design element.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Functionaliteiten</h3>
              <p className="text-gray-600">
                Van productconfigurators tot speciale betalingsopties. Shopify volledig aangepast aan jouw specifieke bedrijfsprocessen en workflow.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimale UX</h3>
              <p className="text-gray-600">
                Stem de winkelervaring exact af op jouw klanten. Dit verhoogt gebruiksvriendelijkheid, conversie en klantloyaliteit significant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Functionaliteiten Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Functionaliteiten die we <span className="bg-[#1795FF] text-white px-2 rounded">bouwen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Met Shopify maatwerk is bijna alles mogelijk. Enkele voorbeelden van wat we realiseren:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔧</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Geavanceerde Productconfigurators</h3>
                  <p className="text-gray-600 text-sm">
                    Laat klanten producten samenstellen met live preview, dynamische prijsberekening en validatie van combinaties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">ERP & CRM Integraties</h3>
                  <p className="text-gray-600 text-sm">
                    Koppel Shopify met jouw bestaande systemen voor realtime voorraadsync, orderverwerking en klantdata.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Search & Filters</h3>
                  <p className="text-gray-600 text-sm">
                    Gepersonaliseerde zoekfunctionaliteit met AI, geavanceerde filters en automatische suggesties voor betere product discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💳</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Checkout Flows</h3>
                  <p className="text-gray-600 text-sm">
                    Aangepaste checkout met specifieke velden, validaties, multiple shipping options en custom betalingsmethoden.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👥</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">B2B Portals & Wholesale</h3>
                  <p className="text-gray-600 text-sm">
                    Speciale B2B functionaliteiten zoals volume pricing, approval workflows en dedicated customer accounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Shopify Apps</h3>
                  <p className="text-gray-600 text-sm">
                    Privé Shopify apps specifiek voor jouw unieke bedrijfsprocessen en automations die niet in de app store bestaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gerelateerde Services */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meer Shopify <span className="bg-[#1795FF] text-white px-2 rounded">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ontdek onze andere Shopify diensten voor complete e-commerce oplossingen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/shopify/webshop-laten-maken"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                Shopify Webshop
              </h3>
              <p className="text-sm text-gray-600 mb-3">Laat je volledige Shopify webshop bouwen</p>
              <span className="text-[#1795FF] text-sm font-semibold">Meer info →</span>
            </Link>

            <Link
              href="/shopify/thema"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                Shopify Thema
              </h3>
              <p className="text-sm text-gray-600 mb-3">Snel en kostenefficiënt starten met thema's</p>
              <span className="text-[#1795FF] text-sm font-semibold">Meer info →</span>
            </Link>

            <Link
              href="/shopify/marketing"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                Shopify Marketing
              </h3>
              <p className="text-sm text-gray-600 mb-3">Boost je conversies met geoptimaliseerde marketing</p>
              <span className="text-[#1795FF] text-sm font-semibold">Meer info →</span>
            </Link>

            <Link
              href="/shopify/migratie"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                Shopify Migreren
              </h3>
              <p className="text-sm text-gray-600 mb-3">Verhuis naadloos naar Shopify vanuit andere platforms</p>
              <span className="text-[#1795FF] text-sm font-semibold">Meer info →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <DevelopmentReviewSlider />

      {/* Gratis Consult */}
      <DevelopmentConsultSection />
    </ServicePageTemplate>
  )
}
