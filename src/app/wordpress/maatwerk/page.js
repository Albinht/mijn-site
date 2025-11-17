import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'WordPress Maatwerk | Custom Development & Plugins op Maat | Niblah',
  description: 'WordPress maatwerk door Niblah: unieke functionaliteiten, custom plugins en themes volledig op maat. 30+ jaar development ervaring voor jouw perfecte website.',
  keywords: 'wordpress maatwerk, wordpress custom development, wordpress plugin ontwikkeling, custom wordpress theme, maatwerk website',
  openGraph: {
    title: 'WordPress Maatwerk | Custom Development | Niblah',
    description: 'Custom WordPress development voor unieke functionaliteiten en design op maat.',
    images: ['/avatar.png'],
  },
}

export default function WordPressMaatwerkPage() {
  const heroData = {
    badge: 'WORDPRESS MAATWERK DEVELOPMENT',
    title: 'Creëer een WordPress website met functionaliteiten volledig op maat',
    description: 'Standaard WordPress themes en plugins bieden veel, maar met maatwerk ga je verder. Niblah bouwt custom functionaliteiten, unieke themes en geavanceerde integraties die perfect aansluiten op jouw merkidentiteit en bedrijfsdoelen. Van member portals tot complexe API-koppelingen - wij maken het mogelijk.',
    ctaText: 'Bespreek je maatwerk project',
    ctaLink: '/contact',
    note: '* 30+ jaar development expertise voor complete WordPress oplossingen',
    image: '/wordpress-maatwerk.png',
    imageAlt: 'WordPress maatwerk development dashboard'
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
                  Een standaard WordPress website biedt veel mogelijkheden, maar met maatwerk haal je pas het maximale uit je online platform. Geen beperkingen meer door standaard themes of plugins die net niet passen.
                </p>
                <p>
                  Met WordPress maatwerk van Niblah creëer je een website die volledig aansluit op jouw unieke merkidentiteit, specifieke workflow en de wensen van je doelgroep. Van custom post types tot geavanceerde CRM-integraties.
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
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Custom WordPress themes volledig op maat</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Private plugins voor specifieke functionaliteiten</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Geavanceerde API-integraties met externe systemen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Custom post types en taxonomies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Member portals en protected content areas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
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
              "Steeds meer ondernemers kiezen voor maatwerk WordPress - en dat is niet voor niets!"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uniek Design</h3>
              <p className="text-gray-600">
                Geen standaard themes, maar een website die perfect aansluit bij de look & feel van jouw merk. Complete controle over elk design element zonder theme beperkingen.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Functionaliteiten</h3>
              <p className="text-gray-600">
                Van member portals tot custom dashboards. WordPress volledig aangepast aan jouw specifieke bedrijfsprocessen, workflow en gebruikersrollen.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimale UX</h3>
              <p className="text-gray-600">
                Stem de gebruikerservaring exact af op jouw bezoekers. Dit verhoogt gebruiksvriendelijkheid, engagement en conversie significant.
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
              Met WordPress maatwerk is bijna alles mogelijk. Enkele voorbeelden van wat we realiseren:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔌</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom WordPress Plugins</h3>
                  <p className="text-gray-600 text-sm">
                    Privé plugins specifiek voor jouw behoeften. Van simpele functionaliteit tot complexe business logic en workflows.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">CRM & ERP Integraties</h3>
                  <p className="text-gray-600 text-sm">
                    Koppel WordPress met jouw bestaande systemen voor realtime data-sync, lead management en klantcommunicatie.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Member Portals & Subscriptions</h3>
                  <p className="text-gray-600 text-sm">
                    Protected content areas, membership levels, subscription management en custom user dashboards voor community platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📝</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Post Types & Taxonomies</h3>
                  <p className="text-gray-600 text-sm">
                    Maatwerk content structuren zoals portfolios, directories, job boards of event systems met geavanceerde filtering.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WooCommerce Maatwerk</h3>
                  <p className="text-gray-600 text-sm">
                    Custom checkout flows, product configurators, B2B functionaliteiten en geavanceerde shipping/payment integraties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Gutenberg Blocks</h3>
                  <p className="text-gray-600 text-sm">
                    Eigen content blocks voor de WordPress editor. Makkelijk content beheren zonder code kennis, maar met volledige flexibiliteit.
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
              Meer WordPress <span className="bg-[#1795FF] text-white px-2 rounded">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ontdek onze andere WordPress diensten voor complete website oplossingen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/wordpress/website-laten-maken"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                WordPress Website
              </h3>
              <p className="text-sm text-gray-600 mb-3">Laat je volledige WordPress website bouwen</p>
              <span className="text-[#1795FF] text-sm font-semibold">Meer info →</span>
            </Link>

            <Link
              href="/wordpress/thema"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                WordPress Thema
              </h3>
              <p className="text-sm text-gray-600 mb-3">Snel en kostenefficiënt starten met thema's</p>
              <span className="text-[#1795FF] text-sm font-semibold">Meer info →</span>
            </Link>

            <Link
              href="/wordpress/woocommerce"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                WooCommerce
              </h3>
              <p className="text-sm text-gray-600 mb-3">Krachtige e-commerce met WordPress</p>
              <span className="text-[#1795FF] text-sm font-semibold">Meer info →</span>
            </Link>

            <Link
              href="/wordpress/migratie"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                WordPress Migratie
              </h3>
              <p className="text-sm text-gray-600 mb-3">Verhuis naadloos naar WordPress</p>
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
