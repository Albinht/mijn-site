import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'WordPress Expert Agency | 30+ Jaar Ervaring | Niblah',
  description: 'Niblah is WordPress expert agency met 30+ jaar ervaring. Van kleine websites tot enterprise oplossingen. WooCommerce, maatwerk en strategisch advies voor je online succes.',
  keywords: 'wordpress expert, wordpress agency, wordpress specialist, woocommerce expert, wordpress development agency',
  openGraph: {
    title: 'WordPress Expert Agency | Niblah',
    description: 'WordPress expertise met 30+ jaar ervaring voor kleine websites tot enterprise oplossingen.',
    images: ['/avatar.png'],
  },
}

export default function WordPressPartnerPage() {
  const heroData = {
    badge: 'WORDPRESS EXPERT AGENCY',
    title: 'Bewezen WordPress expertise voor jouw online succes',
    description: 'Niblah is WordPress expert agency met 30+ jaar ervaring in het bouwen van websites die écht presteren. Van kleine bedrijfswebsites tot complexe enterprise oplossingen en WooCommerce webshops. Onze expertise omvat custom development, performance optimalisatie, SEO en strategisch advies. Wij bouwen niet zomaar een website - we creëren een toekomstbestendige online aanwezigheid.',
    ctaText: 'Werk met WordPress experts',
    ctaLink: '/contact',
    note: '* 30+ jaar ervaring met WordPress en WooCommerce development',
    image: '/wordpress-expert.png',
    imageAlt: 'WordPress expert development'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Expert Status Uitleg Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waarom kiezen voor een <span className="bg-[#1795FF] text-white px-2 rounded">WordPress Expert Agency?</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  WordPress powers meer dan 43% van alle websites wereldwijd, maar dat betekent niet dat elke WordPress developer gelijk is. Echte WordPress expertise gaat verder dan het installeren van themes en plugins.
                </p>
                <p>
                  Bij Niblah hebben we 30+ jaar ervaring met WordPress development, van kleine bedrijfswebsites tot complexe enterprise platforms. We begrijpen WordPress van binnen en buiten: van custom theme development tot geavanceerde WooCommerce integraties, van performance optimalisatie tot security best practices.
                </p>
                <p className="font-semibold text-gray-900">
                  Het verschil? Diepgaande technische kennis, strategisch inzicht en bewezen resultaten die zorgen dat jouw website niet alleen mooi is, maar ook optimaal functioneert en groeit met je bedrijf.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Onze WordPress expertise:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Custom theme en plugin development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">WooCommerce e-commerce oplossingen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Performance optimalisatie en caching</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Security hardening en malware preventie</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">SEO technische optimalisatie</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">API integraties en headless WordPress</p>
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
              Waarom kiezen voor <span className="bg-[#1795FF] text-white px-2 rounded">Niblah als WordPress expert?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              30+ jaar ervaring maakt het verschil tussen een gewone website en een succesvolle online aanwezigheid
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diepgaande Kennis</h3>
              <p className="text-gray-600">
                We kennen WordPress van binnenuit. Van database optimalisatie tot custom post types, van Gutenberg blocks tot REST API - geen uitdaging is te complex.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Focus</h3>
              <p className="text-gray-600">
                Snelle websites zijn cruciaal. We optimaliseren tot in detail: caching, database queries, image optimization en code efficiency voor maximale snelheid.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">
                WordPress security is essentieel. We implementeren best practices: hardening, regular updates, monitoring en proactive malware preventie.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WooCommerce Experts</h3>
              <p className="text-gray-600">
                Specialist in WooCommerce webshops. Van simpele shops tot complexe B2B platforms met custom functionaliteit en API koppelingen.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maatwerk Development</h3>
              <p className="text-gray-600">
                Custom plugins, themes en functionaliteiten die perfect aansluiten op jouw behoeften. Geen compromissen, gewoon maatwerk dat werkt.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Geoptimaliseerd</h3>
              <p className="text-gray-600">
                Technische SEO is ingebouwd. Clean code, snelle laadtijden, proper schema markup en crawlbare structuur voor hogere Google rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze <span className="bg-[#1795FF] text-white px-2 rounded">WordPress diensten</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van strategie tot ontwikkeling, onderhoud en groei - wij dekken het volledige spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Theme Development</h3>
                  <p className="text-gray-600 text-sm">
                    Maatwerk WordPress themes die perfect aansluiten op je huisstijl en functionele eisen. Responsive, snel en toekomstbestendig.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔌</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Plugin Development</h3>
                  <p className="text-gray-600 text-sm">
                    Custom plugins voor specifieke functionaliteit. Van simple utilities tot complexe business logic geïntegreerd in WordPress.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WooCommerce Development</h3>
                  <p className="text-gray-600 text-sm">
                    Complete e-commerce oplossingen met WooCommerce. Custom checkout, payment gateways, shipping methods en product types.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Optimalisatie</h3>
                  <p className="text-gray-600 text-sm">
                    Snelheid is cruciaal. We optimaliseren je WordPress site tot in detail voor blazing fast performance en Core Web Vitals.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Maintenance & Support</h3>
                  <p className="text-gray-600 text-sm">
                    Proactief onderhoud, updates, backups en 24/7 monitoring. Jouw website blijft veilig, snel en up-to-date.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">API Integraties</h3>
                  <p className="text-gray-600 text-sm">
                    Koppel WordPress aan externe systemen: CRM, ERP, marketing tools. Custom REST API's en webhooks voor automatisering.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Headless WordPress</h3>
                  <p className="text-gray-600 text-sm">
                    WordPress als CMS met modern frontend frameworks. Next.js, React of Vue.js voor ultimate performance en flexibility.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Multisite Netwerken</h3>
                  <p className="text-gray-600 text-sm">
                    WordPress Multisite voor meerdere websites vanuit één installatie. Perfect voor franchises, universiteiten en enterprises.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SEO & Analytics</h3>
                  <p className="text-gray-600 text-sm">
                    Complete SEO setup, tracking implementation en data analysis. Van technische SEO tot content strategie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zo werken we samen aan jouw <span className="bg-[#1795FF] text-white px-2 rounded">WordPress succes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparante aanpak van strategie tot live gang en doorlopende optimalisatie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900">Strategie & Analyse</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We starten met een diepgaande analyse van je doelen, doelgroep en concurrentie. Wat wil je bereiken en hoe gaan we dat realiseren?
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900">Design & Development</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Custom theme en functionaliteit ontwikkeling volgens best practices. Clean code, performance optimized en toekomstbestendig.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900">Testing & Launch</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Uitgebreide testing op alle devices en browsers. Performance checks, security audit en SEO verificatie voor de perfecte launch.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900">Groei & Optimalisatie</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Continue monitoring, updates en optimalisaties. Data-driven verbeteringen en proactief onderhoud voor duurzaam succes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Klaar om te werken met <span className="bg-[#1795FF] text-white px-2 rounded">WordPress experts?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Met 30+ jaar ervaring in WordPress development weten we precies hoe we jouw website naar een hoger niveau tillen. Van kleine bedrijfswebsites tot complexe enterprise platforms - we hebben het allemaal gedaan.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Laten we samen bespreken wat WordPress voor jouw bedrijf kan betekenen en hoe we jouw online aanwezigheid kunnen versterken.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Start je WordPress project <span>→</span>
          </Link>
        </div>
      </section>

      {/* Gerelateerde Services */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
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
              href="/wordpress/maatwerk"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                WordPress Maatwerk
              </h3>
              <p className="text-sm text-gray-600 mb-3">Custom plugins en functionaliteiten op maat</p>
              <span className="text-[#1795FF] text-sm font-semibold">Meer info →</span>
            </Link>

            <Link
              href="/wordpress/koppelingen"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                WordPress Koppelingen
              </h3>
              <p className="text-sm text-gray-600 mb-3">Realworks, HRoffice en CRM integraties</p>
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
