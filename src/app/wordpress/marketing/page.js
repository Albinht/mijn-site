import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'WordPress Marketing | SEO, SEA & Content Marketing | Niblah',
  description: 'WordPress marketing door experts. SEO, Google Ads, Content Marketing en Social Media voor jouw website. 30+ jaar ervaring voor maximale online groei.',
  keywords: 'wordpress marketing, wordpress seo, wordpress google ads, content marketing, wordpress social media',
  openGraph: {
    title: 'WordPress Marketing | Groei je website | Niblah',
    description: 'Complete marketing oplossingen voor WordPress websites. Van SEO tot content marketing.',
    images: ['/avatar.png'],
  },
}

export default function WordPressMarketingPage() {
  const heroData = {
    badge: 'WORDPRESS MARKETING',
    title: 'Marketing die jouw WordPress website laat groeien',
    description: 'Een mooie WordPress website is slechts het begin. Marketing zorgt voor groei, bezoekers en leads. Niblah combineert 30+ jaar web ervaring met data-driven marketing. Van SEO en Google Ads tot Content Marketing en Social Media - wij zorgen dat jouw website niet alleen bezoekers trekt, maar ze ook omzet in loyale klanten.',
    ctaText: 'Bespreek je marketing strategie',
    ctaLink: '/contact',
    note: '* Data-driven aanpak met focus op ROI en meetbare resultaten',
    image: '/wordpress-marketing.png',
    imageAlt: 'WordPress marketing dashboard met statistieken'
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
                Marketing voor jouw <span className="bg-[#1795FF] text-white px-2 rounded">WordPress website</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Het hebben van een succesvolle WordPress website gaat verder dan alleen goed design en techniek. Je marketingstrategie bepaalt of je online groeit of stagneert.
                </p>
                <p>
                  Van SEO voor organische vindbaarheid tot Google Ads campagnes die direct leads opleveren. Van Content Marketing die autoriteit opbouwt tot Social Media die je merk zichtbaar maakt.
                </p>
                <p className="font-semibold text-gray-900">
                  Niblah zorgt ervoor dat jouw website niet alleen bezoekers trekt, maar deze ook omzet in leads, klanten en terugkerende bezoekers. Goede marketing is de key tot online groei.
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
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">SEO optimalisatie voor organische groei</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Google Ads (SEA) voor directe leads en conversies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Content Marketing en blogging strategie</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Social Media Marketing (LinkedIn, Facebook, Instagram)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Email marketing en nieuwsbrief campagnes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
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
              Drie activiteiten die voor veel <span className="bg-[#1795FF] text-white px-2 rounded">WordPress websites</span> werken
            </h2>
            <p className="text-lg text-gray-600 italic max-w-3xl mx-auto">
              "Iedere website heeft unieke doelen waar je met verschillende marketing op kunt inspelen. We bespreken graag de kansen voor jouw website!"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Optimalisatie</h3>
              <p className="text-gray-600">
                Hogere rankings in Google voor relevante zoektermen. Organisch verkeer van mensen die actief zoeken naar jouw diensten. Duurzame groei.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Marketing</h3>
              <p className="text-gray-600">
                Waardevolle content die autoriteit opbouwt en bezoekers bindt. Van blogs tot whitepapers - content die informeert, inspireert en converteert.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ads (SEA)</h3>
              <p className="text-gray-600">
                Direct zichtbaar bovenaan Google voor belangrijke zoektermen. Snelle resultaten, meetbare ROI en volledige controle over je budget.
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
              Marketingkanalen voor jouw <span className="bg-[#1795FF] text-white px-2 rounded">WordPress website</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Om het maximale uit je WordPress website te halen, combineren we verschillende kanalen voor optimale resultaten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SEO Optimalisatie</h3>
                  <p className="text-gray-600 text-sm">
                    On-page en technical SEO voor hogere rankings. Keyword research, content optimalisatie en linkbuilding voor duurzame organische groei.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SEA (Google Ads)</h3>
                  <p className="text-gray-600 text-sm">
                    Search Ads, Display campagnes en remarketing voor directe zichtbaarheid en leads. Meet ROI en optimaliseer continu.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Content Marketing</h3>
                  <p className="text-gray-600 text-sm">
                    Strategische content creatie met WordPress. Blogs, landingspaginas en resources die autoriteit opbouwen en traffic genereren.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media Marketing</h3>
                  <p className="text-gray-600 text-sm">
                    LinkedIn, Facebook en Instagram marketing. Van organische posts tot paid advertising voor merkbekendheid en engagement.
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
                    Nieuwsbrieven, drip campagnes en automatiseringen. Bouw een mailinglist en nurture leads naar klanten.
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
                    Conversion Rate Optimization, A/B testing en data-analyse voor continue verbetering en groei van je website.
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
            Kies voor Niblah als jouw <span className="bg-[#1795FF] text-white px-2 rounded">WordPress marketing partner</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bij Niblah geloven we in een persoonlijke en strategische aanpak. Met 30+ jaar web ervaring ontwikkelen we data-driven marketingstrategieën die écht werken voor jouw WordPress website.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Focus op data, creativiteit en resultaat. We zorgen dat je online zichtbaar bent én meer leads en klanten genereert. Van strategie tot uitvoering en optimalisatie.
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
