import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Shopify Migratie | Verhuis je Webshop Naadloos | Niblah',
  description: 'Migreer je webshop naar Shopify zonder stress. Niblah zorgt voor veilige data-overzet, SEO behoud en minimale downtime. 30+ jaar migratie-ervaring.',
  keywords: 'shopify migratie, webshop verhuizen, migreren naar shopify, woocommerce naar shopify, magento naar shopify',
  openGraph: {
    title: 'Shopify Migratie | Naadloos Verhuizen | Niblah',
    description: 'Professionele Shopify migratie met SEO behoud en minimale downtime.',
    images: ['/avatar.png'],
  },
}

export default function ShopifyMigratiePage() {
  const heroData = {
    badge: 'SHOPIFY MIGRATIE',
    title: 'Verhuis je webshop naadloos naar Shopify',
    description: 'Overstappen naar Shopify maar zorgen over downtime, dataverlies of SEO impact? Niblah heeft 30+ jaar ervaring met webshop migraties. We zorgen voor een soepele overstap van WooCommerce, Magento, Lightspeed of elk ander platform naar Shopify. Zonder stress, met behoud van alle data en SEO-waarde.',
    ctaText: 'Bespreek je migratie',
    ctaLink: '/contact',
    note: '* Minimale downtime en volledige SEO behoud gegarandeerd',
    image: '/shopify-migration.png',
    imageAlt: 'Shopify migratie proces visualisatie'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom Shopify Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waarom overstappen naar <span className="bg-[#1795FF] text-white px-2 rounded">Shopify?</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Shopify is wereldwijd het meest gebruikte e-commerce platform voor een reden. Het combineert gebruiksvriendelijkheid met krachtige functionaliteiten en schaalbaarheid die andere platforms niet kunnen evenaren.
                </p>
                <p>
                  Van trage WooCommerce installaties naar razendsnelle Shopify stores. Van complexe Magento setups naar intuïtief Shopify beheer. Van verouderde custom platforms naar modern e-commerce met alle tools die je nodig hebt.
                </p>
                <p className="font-semibold text-gray-900">
                  Niblah zorgt dat de overgang soepel verloopt, zonder dataverlies, met minimale downtime en volledig behoud van je SEO-rankings.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Wat Niblah voor je migreert:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Alle producten met varianten, foto's en specificaties</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Klantgegevens en orderhistorie</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Content pagina's en blogs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">SEO data en URL redirects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Categorieën en product structuur</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Betalings- en verzendmethoden</p>
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
              Drie redenen om te <span className="bg-[#1795FF] text-white px-2 rounded">verhuizen</span>
            </h2>
            <p className="text-lg text-gray-600 italic max-w-3xl mx-auto">
              "Shopify is wereldleider in e-commerce en biedt veel voordelen die andere platforms niet hebben"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gebruiksvriendelijkheid</h3>
              <p className="text-gray-600">
                Geen technische kennis nodig om producten toe te voegen, bestellingen te beheren of je webshop aan te passen. Iedereen kan ermee werken.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schaalbaarheid</h3>
              <p className="text-gray-600">
                Shopify groeit mee met je bedrijf. Van 10 tot 100.000 producten, van 10 tot 10.000 bezoekers per dag - Shopify blijft stabiel presteren.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uitgebreide Integraties</h3>
              <p className="text-gray-600">
                Duizenden apps en integraties beschikbaar. Van marketing tools tot boekhouding en verzending - alles eenvoudig te koppelen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migratie Proces Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Niblah migreert jouw webshop <span className="bg-[#1795FF] text-white px-2 rounded">professioneel</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Het migreren naar Shopify is een belangrijke stap. Niblah maakt dit proces soepel en efficiënt
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Veilige Data Overzet</h3>
                  <p className="text-gray-600 text-sm">
                    Alle producten, klantgegevens, bestellingen en content worden veilig gemigreerd. Niets gaat verloren, alles komt over zoals het hoort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⏱️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Minimale Downtime</h3>
                  <p className="text-gray-600 text-sm">
                    We plannen de migratie strategisch zodat je webshop zo min mogelijk offline is. Vaak zelfs in een nacht gedaan.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SEO Behoud</h3>
                  <p className="text-gray-600 text-sm">
                    URL redirects, meta data overzet en technische SEO setup. Je rankings blijven behouden, geen verlies van organisch verkeer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Testing & QA</h3>
                  <p className="text-gray-600 text-sm">
                    Uitgebreid testen voor live gang. Alle functionaliteiten, checkout, betalingen en integraties worden grondig gecontroleerd.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Training & Support</h3>
                  <p className="text-gray-600 text-sm">
                    Na migratie krijg je een training zodat je met Shopify kunt werken. Plus doorlopende support voor vragen en optimalisaties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Verbetering</h3>
                  <p className="text-gray-600 text-sm">
                    Vaak is je nieuwe Shopify shop sneller dan je oude webshop. Betere conversie en hogere rankings door optimale performance.
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
            Laat ons jouw webshop <span className="bg-[#1795FF] text-white px-2 rounded">migreren</span> naar Shopify
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bij Niblah hebben we 30+ jaar ervaring met webshop migraties. Van analyse en planning tot uitvoering en nazorg - wij zorgen voor een soepele overstap naar Shopify.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Jij focust op je business, wij regelen de techniek. Minimale downtime, volledige data-overzet en behoud van SEO-waarde gegarandeerd.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Bespreek je migratie <span>→</span>
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
