import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'WordPress Website Laten Maken | Professionele WordPress Development | Niblah',
  description: 'Laat Niblah je WordPress website bouwen. Maatwerk oplossingen, SEO-geoptimaliseerd en schaalbaar. WordPress experts met 30+ jaar ervaring en bewezen resultaten.',
  keywords: 'wordpress website laten maken, wordpress ontwikkelaar, wordpress developer, website bouwen, wordpress expert, maatwerk wordpress',
  openGraph: {
    title: 'WordPress Website Laten Maken | Niblah',
    description: 'Professionele WordPress websites die converteren. Van design tot development, volledig op maat.',
    images: ['/avatar.png'],
  },
}

export default function WordPressWebsitePage() {
  const heroData = {
    badge: 'WORDPRESS WEBSITE ONTWIKKELING',
    title: 'Laat je WordPress website bouwen door experts die resultaat leveren',
    description: 'Als WordPress specialist bouwt Niblah websites die niet alleen mooi zijn, maar ook presteren. Van concept tot lancering, wij zorgen voor een professionele website die meegroeit met jouw ambities. Snelle laadtijden, SEO-geoptimaliseerd en een gebruikerservaring die bezoekers bindt.',
    ctaText: 'Start je WordPress project',
    ctaLink: '/contact',
    note: '* 30+ jaar development ervaring gebundeld in één team',
    image: '/wordpress-hero.png',
    imageAlt: 'WordPress website development dashboard'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom WordPress Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor <span className="bg-[#1795FF] text-white px-2 rounded">WordPress?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              WordPress is het meest gebruikte CMS ter wereld - en dat is niet voor niets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Open Source & Flexibel</h3>
              <p className="text-gray-600">
                Complete vrijheid en controle over je website. Geen vendor lock-in, geen beperkingen. WordPress past zich aan jouw wensen aan, niet andersom.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Vriendelijk</h3>
              <p className="text-gray-600">
                WordPress is gebouwd met SEO in gedachten. Schone code, snelle performance en volledige controle over meta tags zorgen voor betere rankings in Google.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schaalbaar & Uitbreidbaar</h3>
              <p className="text-gray-600">
                Start klein en groei groot. Van blog tot enterprise website, WordPress schaalt mee. Met WooCommerce zelfs volledig webshop mogelijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* De Kracht van Niblah Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                De kracht van WordPress én <span className="bg-[#1795FF] text-white px-2 rounded">Niblah</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  WordPress is wereldwijd het meest gebruikte CMS. Het biedt een solide basis: flexibel, gebruiksvriendelijk en vol mogelijkheden die je online aanwezigheid naar een hoger niveau tillen.
                </p>
                <p>
                  Maar een goed CMS alleen is niet genoeg. Hier komt Niblah in beeld.
                </p>
                <p>
                  Als WordPress specialist combineren wij de kracht van WordPress met 30+ jaar development ervaring. We bouwen geen standaard websites, maar digitale platforms die perfect aansluiten op jouw unieke visie en doelstellingen.
                </p>
                <p className="font-semibold text-gray-900">
                  Met Niblah krijg je een technisch sterke website én een partner die meedenkt over jouw groei. Zo haal je het maximale uit WordPress.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">✓</span>
                    </div>
                    <p className="text-gray-900 font-medium">Maatwerk ontwikkeling op basis van jouw behoeften</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">✓</span>
                    </div>
                    <p className="text-gray-900 font-medium">SEO-optimalisatie vanaf dag 1</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">✓</span>
                    </div>
                    <p className="text-gray-900 font-medium">Koppelingen met marketing tools en CRM systemen</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">✓</span>
                    </div>
                    <p className="text-gray-900 font-medium">Doorlopende support en optimalisatie</p>
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
              Voordelen voor jou als <span className="bg-[#1795FF] text-white px-2 rounded">website eigenaar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/wp dev.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Beheer je content zelf met de intuïtieve WordPress editor - geen technische kennis vereist</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/wp dev.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">60.000+ plugins beschikbaar - voeg functionaliteiten toe zonder custom development</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/wp dev.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Volledig responsive en mobiel-geoptimaliseerd - je website werkt perfect op alle devices</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/wp dev.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Ingebouwde SEO tools en optimalisatie - hogere rankings in Google vanaf de start</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/wp dev.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">WooCommerce integratie mogelijk - transformeer je website naar volledig webshop</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/wp dev.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Regelmatige updates en patches - je website blijft veilig en up-to-date</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/wp dev.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Multi-user rollen en permissies - meerdere mensen kunnen veilig samenwerken</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/wp dev.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Wereldwijde community support - altijd hulp beschikbaar van miljoenen gebruikers</p>
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
                WooCommerce Webshop
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
