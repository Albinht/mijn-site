import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Shopify Koppelingen | Automatiseer je Processen | Niblah',
  description: 'Shopify koppelingen door experts. Automatiseer voorraadbeheer, ERP, CRM, boekhouding en marketing. 30+ jaar ervaring in API integraties en automatisering.',
  keywords: 'shopify koppelingen, shopify integraties, shopify api, voorraad koppeling, erp koppeling shopify, automatisering shopify',
  openGraph: {
    title: 'Shopify Koppelingen | Automatiseer je Webshop | Niblah',
    description: 'Professionele Shopify koppelingen voor volledige automatisering van je webshop processen.',
    images: ['/avatar.png'],
  },
}

export default function ShopifyKoppelingenPage() {
  const heroData = {
    badge: 'SHOPIFY KOPPELINGEN & INTEGRATIES',
    title: 'Automatiseer jouw Shopify processen met slimme koppelingen',
    description: 'Stop met handmatig werk. Niblah koppelt je Shopify webshop aan alle systemen die je gebruikt. Van realtime voorraadsync met leveranciers tot automatische orderverwerking in je ERP. Van boekhouding tot marketing automation. Met 30+ jaar integratie-ervaring bouwen we koppelingen die werken, schaalbaar zijn en je tijd teruggeven.',
    ctaText: 'Bespreek je koppelingen',
    ctaLink: '/contact',
    note: '* API expertise voor alle Shopify integraties en custom koppelingen',
    image: '/shopify-integrations.png',
    imageAlt: 'Shopify koppelingen en integraties diagram'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Koppelingen Uitleg Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Maak processen makkelijk met <span className="bg-[#1795FF] text-white px-2 rounded">Shopify koppelingen</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Handmatig voorraad bijwerken? Orders overtikken in je boekhouding? Klantgegevens kopiëren naar je CRM? Dit zijn tijdrovende taken die volledig geautomatiseerd kunnen worden met de juiste Shopify koppelingen.
                </p>
                <p>
                  Niblah bouwt realtime integraties tussen Shopify en al je business systemen. Van leveranciers met automatische voorraadupdates tot ERP-koppelingen voor orderverwerking. Van boekhoudsoftware tot marketing automation platforms.
                </p>
                <p className="font-semibold text-gray-900">
                  Het resultaat? Minder fouten, meer efficiëntie en tijd over voor wat echt belangrijk is: groeien.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Koppelingen die Niblah realiseert:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">ERP systemen (Exact, Afas, SAP, Microsoft Dynamics)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Leveranciers met realtime voorraad synchronisatie</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">CRM platforms (HubSpot, Salesforce, Pipedrive)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Boekhoudsoftware (Twinfield, Exact, SnelStart)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Verzendpartners en fulfilment centers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Marketing automation (Klaviyo, Mailchimp, ActiveCampaign)</p>
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
              Drie redenen om te kiezen voor <span className="bg-[#1795FF] text-white px-2 rounded">Shopify koppelingen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Automatisering bespaart niet alleen tijd, het voorkomt fouten en maakt je webshop schaalbaar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nauwkeurigheid</h3>
              <p className="text-gray-600">
                Elimineer menselijke fouten volledig. Data wordt automatisch gesynchroniseerd tussen systemen zonder handmatige invoer. Altijd actuele voorraad en correcte orderinformatie.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schaalbaarheid</h3>
              <p className="text-gray-600">
                Groei zonder zorgen. Met geautomatiseerde koppelingen kan je webshop van 100 naar 10.000 orders schalen zonder extra handmatig werk of personeel.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiëntie</h3>
              <p className="text-gray-600">
                Win 10-20 uur per week terug. Automatiseer voorraadbeheer, orderverwerking, facturering en klantcommunicatie. Focus op strategie in plaats van administratie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Koppeling Voorbeelden Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Populaire <span className="bg-[#1795FF] text-white px-2 rounded">Shopify koppelingen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van standaard integraties tot custom API koppelingen - Niblah realiseert het allemaal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Voorraad & Leveranciers</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Realtime voorraadsync met je leveranciers. Automatische updates van voorraad, prijzen en productdata. Nooit meer overselling of handmatige updates.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Voorbeelden: API koppelingen met groothandels, dropshipping leveranciers, eigen voorraadsystemen
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">ERP Systemen</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Koppel Shopify aan je ERP voor geautomatiseerde orderverwerking, voorraadsync en financiële data. Orders automatisch in je ERP zonder handmatig werk.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Voorbeelden: Exact Online, Afas, SAP, Microsoft Dynamics, Odoo
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Boekhoudsoftware</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Automatische synchronisatie van orders, betalingen en facturen naar je boekhoudpakket. Altijd actuele financiële administratie zonder dubbel werk.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Voorbeelden: Twinfield, Exact Online, SnelStart, Moneybird, Yuki
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">CRM Platforms</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Sync klantgegevens, orderhistorie en gedrag naar je CRM voor betere customer journeys en marketing. Unified customer view over alle systemen.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Voorbeelden: HubSpot, Salesforce, Pipedrive, Zoho CRM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Marketing Automation</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Koppel Shopify aan email marketing tools voor abandoned cart flows, product recommendations en segmentatie op basis van aankoopgedrag.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Voorbeelden: Klaviyo, Mailchimp, ActiveCampaign, Omnisend
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚚</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Verzending & Fulfilment</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Automatische order doorgifte aan verzendpartners en fulfilment centers. Track & trace updates terug naar Shopify voor klantcommunicatie.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Voorbeelden: PostNL, DHL, UPS, 3PL fulfilment centers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🛍️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Marketplaces</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Sync producten en voorraad tussen Shopify en marketplaces. Centraal voorraadbeheer en geautomatiseerde orderverwerking over alle kanalen.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Voorbeelden: Bol.com, Amazon, eBay, Facebook Shop, Instagram Shop
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔧</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom API Koppelingen</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Eigen systemen of specifieke software? Niblah bouwt custom API koppelingen voor elk systeem. Van legacy software tot moderne cloud platforms.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Voorbeelden: Eigen ontwikkelde systemen, branche-specifieke software, custom workflows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Niblah bouwt jouw <span className="bg-[#1795FF] text-white px-2 rounded">Shopify koppelingen</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bij Niblah hebben we 30+ jaar ervaring met API integraties en systeem koppelingen. We selecteren en implementeren de juiste koppelingen om je processen te automatiseren en je webshop efficiënter te maken.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Van standaard app integraties tot complexe custom API koppelingen - wij zorgen dat alles naadloos samenwerkt. Jij richt je op groei, wij regelen de techniek.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Bespreek je koppelingen <span>→</span>
          </Link>
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
              href="/shopify/maatwerk"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                Shopify Maatwerk
              </h3>
              <p className="text-sm text-gray-600 mb-3">Custom functionaliteiten en apps op maat</p>
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
