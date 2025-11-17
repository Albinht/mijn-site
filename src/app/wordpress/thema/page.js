import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'WordPress Thema | Snel & Kostenefficiënt Online | Niblah',
  description: 'Start snel met een professioneel WordPress thema. Niblah richt je website compleet in met bewezen themes. Kosteneffectief en binnen 1-3 weken live.',
  keywords: 'wordpress thema, wordpress theme, wordpress website snel, kosteneffectieve website, wordpress template',
  openGraph: {
    title: 'WordPress Thema | Snel & Kostenefficiënt | Niblah',
    description: 'Start snel met een professioneel WordPress thema. Kosteneffectief en binnen 1-3 weken live.',
    images: ['/avatar.png'],
  },
}

export default function WordPressThemaPage() {
  const heroData = {
    badge: 'WORDPRESS THEMA WEBSITE',
    title: 'Lanceer nu jouw WordPress website met een professioneel thema',
    description: 'Een WordPress website met een bewezen thema biedt de snelste en meest kosteneffectieve start. WordPress themes zijn ontworpen volgens web best practices en volledig geoptimaliseerd voor performance en SEO. Binnen 1-3 weken heb je een professionele website die direct online kan.',
    ctaText: 'Start met een thema website',
    ctaLink: '/contact',
    note: '* Snelle implementatie binnen 1-3 weken, zonder compromis op kwaliteit',
    image: '/wordpress-theme.png',
    imageAlt: 'WordPress thema website voorbeelden'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom Thema Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waarom kiezen voor een <span className="bg-[#1795FF] text-white px-2 rounded">WordPress thema?</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Een WordPress website met een professioneel thema is de ideale keuze als je snel en kostenefficiënt online wilt. WordPress themes zijn gebouwd door ervaren designers en developers, compleet met alle functionaliteiten die je nodig hebt.
                </p>
                <p>
                  Met een thema-gebaseerde website profiteer je van bewezen ontwerpen die al bij duizenden succesvolle websites hun waarde hebben bewezen. Mobiel-geoptimaliseerd, SEO-vriendelijk en klaar voor groei.
                </p>
                <p className="font-semibold text-gray-900">
                  Niblah richt je thema website volledig in, zodat jij je kunt focussen op je content en doelstellingen in plaats van technische details.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Wat Niblah voor je regelt:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Thema selectie en aankoop op basis van jouw wensen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Complete personalisatie naar jouw huisstijl</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Content migratie en pagina opbouw</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Plugin installatie en configuratie</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">SEO optimalisatie en Google Analytics setup</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Training zodat je zelf verder kunt</p>
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
              De voordelen <span className="bg-[#1795FF] text-white px-2 rounded">op een rijtje</span>
            </h2>
            <p className="text-lg text-gray-600 italic max-w-3xl mx-auto">
              Het is niet voor niets dat veel ondernemers kiezen voor een WordPress thema
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Snelle Implementatie</h3>
              <p className="text-gray-600">
                Een WordPress thema website is binnen 1-3 weken live. Perfect voor ondernemers die snel online willen zonder maandenlange ontwikkeltijd.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kosteneffectief</h3>
              <p className="text-gray-600">
                Profiteer van bewezen designs zonder de kosten van volledig maatwerk. Een betaalbare oplossing met alle essentiële functies.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eenvoudig Aanpassen</h3>
              <p className="text-gray-600">
                WordPress themes bieden enorme flexibiliteit. Pas kleuren, lettertypen, layouts en content eenvoudig aan via de WordPress customizer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Voordelen Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wat je krijgt met een <span className="bg-[#1795FF] text-white px-2 rounded">WordPress thema</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mobiel Geoptimaliseerd</h3>
                  <p className="text-gray-600 text-sm">
                    Alle moderne WordPress themes zijn responsive en werken perfect op smartphones en tablets. Mobile-first design standaard.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SEO Vriendelijk</h3>
                  <p className="text-gray-600 text-sm">
                    Gebouwd volgens SEO best practices met schone code, snelle laadtijden en semantic HTML voor hogere rankings in Google.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Page Builder Integratie</h3>
                  <p className="text-gray-600 text-sm">
                    Themes werken met populaire page builders zoals Elementor en Gutenberg. Drag & drop functionaliteit voor makkelijk aanpassen.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Updates & Support</h3>
                  <p className="text-gray-600 text-sm">
                    Regelmatige theme updates met nieuwe features, bugfixes en compatibility updates. Altijd up-to-date en veilig.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Plugin Compatibility</h3>
                  <p className="text-gray-600 text-sm">
                    Themes zijn getest met populaire plugins zoals WooCommerce, Contact Form 7, Yoast SEO en meer. Alles werkt out-of-the-box.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Bewezen & Getest</h3>
                  <p className="text-gray-600 text-sm">
                    Populaire themes worden gebruikt door duizenden websites wereldwijd. Alle kinderziektes zijn eruit, het werkt gewoon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volledig Inrichten Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Wij richten jouw WordPress thema <span className="bg-[#1795FF] text-white px-2 rounded">volledig in</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bij Niblah nemen we de volledige inrichting van jouw WordPress thema website uit handen. Van thema selectie en personalisatie tot content setup en SEO optimalisatie - wij zorgen ervoor dat je website 100% klaar is om live te gaan.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Met 30+ jaar web development ervaring zorgen we voor een soepele start en optimale prestaties vanaf dag één. Jij focust op je business, wij regelen de rest.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Bespreek jouw thema website <span>→</span>
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
