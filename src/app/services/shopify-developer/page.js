import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Shopify Developer | Expert Development Agency | Niblah',
  description: 'Shopify developer met 30+ jaar expertise. Van custom themes tot complexe apps - Niblah is je betrouwbare Shopify agency voor technisch perfecte webshops.',
  keywords: 'shopify developer, shopify agency, shopify experts, shopify development, shopify app developer, custom shopify development',
  openGraph: {
    title: 'Shopify Developer & Agency | Niblah',
    description: 'Expert Shopify development voor technisch perfecte webshops die converteren.',
    images: ['/avatar.png'],
  },
}

export default function ShopifyDeveloperPage() {
  const heroData = {
    badge: 'SHOPIFY DEVELOPER AGENCY',
    title: 'Expert Shopify developers voor technisch perfecte webshops',
    description: 'Niblah is jouw betrouwbare Shopify development agency met 30+ jaar ervaring. Onze Shopify experts bouwen custom themes, geavanceerde apps en complete webshops die niet alleen mooi zijn, maar ook technisch perfect functioneren. Van Liquid development tot headless Shopify - wij leveren maatwerk development van A tot Z.',
    ctaText: 'Bespreek je Shopify project',
    ctaLink: '/contact',
    note: '* Gecertificeerde Shopify developers met bewezen track record',
    image: '/shopify-developer.png',
    imageAlt: 'Shopify developer aan het werk met code'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Developer Expertise Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Jouw betrouwbare <span className="bg-[#1795FF] text-white px-2 rounded">Shopify developer</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Als gespecialiseerde Shopify agency combineert Niblah technische development expertise met 30+ jaar e-commerce ervaring. Onze Shopify experts ontwikkelen niet alleen mooie webshops, maar bouwen technisch perfecte oplossingen die converteren en schalen.
                </p>
                <p>
                  Van custom Shopify themes met pixel-perfect design tot complexe app development met geavanceerde functionaliteiten. Van headless Shopify architectuur tot API integraties met legacy systemen. Wij bouwen wat andere developers niet kunnen.
                </p>
                <p className="font-semibold text-gray-900">
                  Het verschil? Onze developers begrijpen e-commerce. Ze bouwen niet alleen wat je vraagt, maar denken mee over conversie, UX en toekomstbestendigheid.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Wat onze developers bouwen:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Custom Shopify themes met Liquid, HTML, CSS, JavaScript</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Shopify apps (public & private) met Node.js en React</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Headless Shopify met Next.js, React of Vue</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Complexe API integraties en koppelingen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Custom checkout extensies en Shopify Functions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Performance optimalisatie en Core Web Vitals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technische Expertise Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze <span className="bg-[#1795FF] text-white px-2 rounded">technische expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dit is waar Niblah als Shopify developer in uitblinkt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Theme Development</h3>
                  <p className="text-gray-600 text-sm">
                    Expert Liquid development, modern JavaScript (ES6+), responsive CSS en optimale performance. Geen template limitations.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Shopify App Development</h3>
                  <p className="text-gray-600 text-sm">
                    Public en private apps met Node.js, React, GraphQL en Shopify App Bridge. Van simpel tot enterprise niveau.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Headless Commerce</h3>
                  <p className="text-gray-600 text-sm">
                    Headless Shopify met Next.js, React of Vue. Complete vrijheid in frontend met Shopify als backend.
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
                    REST en GraphQL API's voor koppelingen met ERP, CRM, WMS en andere systemen. Realtime sync en webhooks.
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
                    Core Web Vitals optimalisatie, lazy loading, image optimization en code splitting voor 100% Lighthouse scores.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">UX & Conversion Focus</h3>
                  <p className="text-gray-600 text-sm">
                    Niet alleen technisch perfect, maar ook optimaal voor conversie. A/B testing, heatmaps en data-driven design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze <span className="bg-[#1795FF] text-white px-2 rounded">Shopify development</span> services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van concept tot livegang en doorlopende optimalisatie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Webshop Development</h3>
              <p className="text-gray-600 mb-6">
                Volledige Shopify webshops van A tot Z. Custom design, technische implementatie, integraties en launch. Turn-key oplossingen die direct verkopen.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Strategy & planning</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Custom design & development</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Integraties & koppelingen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Testing & QA</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Launch & training</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Functionaliteiten</h3>
              <p className="text-gray-600 mb-6">
                Maatwerk development voor specifieke behoeften. Van productconfigurators tot B2B portals, van custom checkout tot geavanceerde search.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Productconfigurators & builders</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">B2B functionaliteiten & wholesale</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Custom checkout flows</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Geavanceerde search & filters</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Membership & subscription systems</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Theme Aanpassingen & Optimalisatie</h3>
              <p className="text-gray-600 mb-6">
                Bestaande theme customizen of volledig rebuilden. Performance optimalisatie, nieuwe features toevoegen en conversie verbeteren.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Design aanpassingen & rebranding</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Performance optimalisatie (100% score)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Nieuwe features & functionaliteiten</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Mobile optimization</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Conversion rate optimization</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technische Support & Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Doorlopende support voor je Shopify webshop. Van bugfixes tot nieuwe features, van performance monitoring tot security updates.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">24/7 monitoring & support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Bugfixes & troubleshooting</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Security updates & patches</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Performance monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <Image src="/blog.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-sm text-gray-700">Doorlopende optimalisaties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Niblah Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Waarom kiezen voor Niblah als <span className="bg-[#1795FF] text-white px-2 rounded">Shopify developer?</span>
          </h2>
          
          <div className="space-y-4 mb-10">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">30+ Jaar E-commerce Expertise</h3>
                  <p className="text-gray-600">
                    We begrijpen e-commerce omdat we het al 30+ jaar doen. Onze developers bouwen niet alleen technisch, ze denken mee over conversie, UX en business doelen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Officiële Shopify Partner</h3>
                  <p className="text-gray-600">
                    Directe toegang tot Shopify support, early access tot nieuwe features en gecertificeerde developers volgens Shopify standaarden.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Technische Perfectie</h3>
                  <p className="text-gray-600">
                    Clean code, optimale performance, schaalbaar en toekomstbestendig. We bouwen webshops die jaren meegaan zonder technische problemen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Full-Service Aanpak</h3>
                  <p className="text-gray-600">
                    Niet alleen development, maar ook design, marketing, SEO en support. Alles onder één dak voor complete ontzorging.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Start je Shopify project <span>→</span>
          </Link>
        </div>
      </section>

      {/* Gerelateerde Services */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze Shopify <span className="bg-[#1795FF] text-white px-2 rounded">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Complete Shopify oplossingen van expert developers
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
