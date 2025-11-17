import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Shopify Marketing | SEA, Social Ads & Email | Niblah',
  description: 'Shopify marketing door experts. Google Ads, Social Advertising, Email marketing en SEO voor jouw webshop. 30+ jaar ervaring voor maximale groei.',
  keywords: 'shopify marketing, shopify google ads, shopify social ads, shopify email marketing, shopify seo',
  openGraph: {
    title: 'Shopify Marketing | Groei je webshop | Niblah',
    description: 'Complete marketing oplossingen voor Shopify webshops. Van Google Ads tot email marketing.',
    images: ['/avatar.png'],
  },
}

export default function ShopifyMarketingPage() {
  const heroData = {
    badge: 'SHOPIFY MARKETING',
    title: 'Marketing die jouw Shopify webshop laat groeien',
    description: 'Een mooie Shopify webshop is slechts het begin. Marketing zorgt voor groei, bezoekers en omzet. Niblah combineert 30+ jaar e-commerce ervaring met data-driven marketing. Van Google Ads en Social Advertising tot SEO en Email Marketing - wij zorgen dat jouw webshop niet alleen bezoekers trekt, maar ze ook omzet in loyale klanten.',
    ctaText: 'Bespreek je marketing strategie',
    ctaLink: '/contact',
    note: '* Data-driven aanpak met focus op ROI en meetbare resultaten',
    image: '/shopify-marketing.png',
    imageAlt: 'Shopify marketing dashboard met statistieken'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Marketing Uitleg Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Marketing voor jouw <span className="bg-[#1795FF] text-white px-2 rounded">Shopify webshop</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Het runnen van een succesvolle Shopify webshop gaat verder dan alleen goed design en techniek. Je marketingstrategie bepaalt of je webshop groeit of stagneert.
                </p>
                <p>
                  Van gerichte Google Ads campagnes die direct conversie opleveren, tot Social Media advertising die je merk zichtbaar maakt. Van SEO voor organische groei tot email marketing die klanten terugbrengt.
                </p>
                <p className="font-semibold text-gray-900">
                  Niblah zorgt ervoor dat jouw webshop niet alleen bezoekers trekt, maar deze ook omzet in betalende en terugkerende klanten. Goede marketing is de key tot groei.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Marketing kanalen die we inzetten:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Google Ads (SEA) voor directe conversies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Social Advertising op Facebook, Instagram & TikTok</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Email marketing met Klaviyo automatisering</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">SEO optimalisatie voor organische groei</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Marketplace integraties (Bol.com, Amazon)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Conversion Rate Optimization (CRO)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Aanraders Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Drie activiteiten die voor veel <span className="bg-[#1795FF] text-white px-2 rounded">Shopify shops</span> werken
            </h2>
            <p className="text-lg text-gray-600 italic max-w-3xl mx-auto">
              "Iedere webshop heeft unieke USP's waar je met verschillende marketing op kunt inspelen. We bespreken graag de kansen voor jouw webshop!"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ads (SEA)</h3>
              <p className="text-gray-600">
                Jouw producten direct zichtbaar bovenaan Google zoekresultaten. Gericht verkeer van mensen die actief zoeken naar wat jij verkoopt. Meet directe ROI.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Marketing</h3>
              <p className="text-gray-600">
                Gepersonaliseerde email campagnes en automatiseringen die klanten betrokken houden. Van abandoned cart tot win-back flows - meer herhaalaankopen.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Advertising</h3>
              <p className="text-gray-600">
                Gerichte advertenties op Facebook, Instagram en TikTok. Vergroot merkbekendheid, trek nieuwe klanten aan en retarget bezoekers die nog niet kochten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketingkanalen Details */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketingkanalen voor jouw <span className="bg-[#1795FF] text-white px-2 rounded">Shopify shop</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Om het maximale uit je Shopify webshop te halen, combineren we verschillende kanalen voor optimale resultaten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SEA (Google Ads)</h3>
                  <p className="text-gray-600 text-sm">
                    Google Shopping, Search Ads en Display campagnes voor directe zichtbaarheid en conversies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SEO Optimalisatie</h3>
                  <p className="text-gray-600 text-sm">
                    Technische en content SEO voor hogere organische rankings en duurzame groei zonder advertentiekosten.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Social Advertising</h3>
                  <p className="text-gray-600 text-sm">
                    Facebook, Instagram en TikTok ads voor merkbekendheid, engagement en conversie bij jouw doelgroep.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Marketing</h3>
                  <p className="text-gray-600 text-sm">
                    Klaviyo flows, nieuwsbrieven en segmentatie voor meer herhaalaankopen en hogere customer lifetime value.
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
                  <p className="text-gray-600 text-sm">
                    Bol.com, Amazon en andere marketplace integraties voor extra verkoopkanalen en bereik.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">CRO & Analytics</h3>
                  <p className="text-gray-600 text-sm">
                    Conversion Rate Optimization, A/B testing en data-analyse voor continue verbetering en groei.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Kies voor Niblah als jouw <span className="bg-[#1795FF] text-white px-2 rounded">Shopify marketing partner</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bij Niblah geloven we in een persoonlijke en strategische aanpak. Met 30+ jaar e-commerce ervaring ontwikkelen we data-driven marketingstrategieën die écht werken voor jouw business.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Focus op data, creativiteit en resultaat. We zorgen dat je online zichtbaar bent én meer omzet genereert. Van strategie tot uitvoering en optimalisatie.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Bespreek je marketing strategie <span>→</span>
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
