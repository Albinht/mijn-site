import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Shopify Webshop Laten Maken | Professionele E-commerce Ontwikkeling | Niblah',
  description: 'Laat Niblah je Shopify webshop bouwen. Maatwerk oplossingen, snelle laadtijden en geoptimaliseerd voor conversie. Officiële Shopify experts met bewezen resultaten.',
  keywords: 'shopify webshop laten maken, shopify ontwikkelaar, shopify partner, webshop bouwen, e-commerce ontwikkeling, shopify expert',
  openGraph: {
    title: 'Shopify Webshop Laten Maken | Niblah',
    description: 'Professionele Shopify webshops die converteren. Van design tot development, volledig op maat.',
    images: ['/avatar.png'],
  },
}

export default function ShopifyWebshopPage() {
  const heroData = {
    badge: 'SHOPIFY WEBSHOP ONTWIKKELING',
    title: 'Laat je Shopify webshop bouwen door experts die resultaat leveren',
    description: 'Als Shopify specialist bouwt Niblah webshops die niet alleen mooi zijn, maar ook converteren. Van concept tot lancering, wij zorgen voor een naadloze online winkel die meegroeit met jouw ambities. Snelle laadtijden, veilige betalingen en een gebruikerservaring die klanten bindt.',
    ctaText: 'Start je Shopify project',
    ctaLink: '/contact',
    note: '* 30+ jaar development ervaring gebundeld in één team',
    image: '/shopify-hero.png',
    imageAlt: 'Shopify webshop development dashboard'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom Shopify Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor <span className="bg-[#1795FF] text-white px-2 rounded">Shopify?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shopify is het wereldwijde toonaangevende e-commerce platform voor een reden
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gebruiksvriendelijk</h3>
              <p className="text-gray-600">
                Beheer je webshop zelf zonder technische kennis. Producten toevoegen, pagina's aanpassen en content wijzigen - allemaal intuïtief en eenvoudig.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schaalbaar</h3>
              <p className="text-gray-600">
                Start klein en groei groot. Of je nu 10 of 10.000 producten hebt, Shopify groeit moeiteloos mee met duizenden bezoekers tegelijk.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Razendsnelle Performance</h3>
              <p className="text-gray-600">
                Wereldwijd servernetwerk zorgt voor bliksemsnelle laadtijden. Meer snelheid betekent betere conversie en hogere rankings in Google.
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
                De kracht van Shopify én <span className="bg-[#1795FF] text-white px-2 rounded">Niblah</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Shopify is wereldwijd één van de meest krachtige e-commerce platforms. Het biedt een solide basis: gebruiksvriendelijk, veilig en vol slimme tools die je online verkoop naar een hoger niveau tillen.
                </p>
                <p>
                  Maar een goed platform alleen is niet genoeg. Hier komt Niblah in beeld.
                </p>
                <p>
                  Als Shopify specialist combineren wij de kracht van Shopify met 30+ jaar development ervaring. We bouwen geen standaard webshops, maar digitale verkoopkanalen die perfect aansluiten op jouw unieke visie en doelstellingen.
                </p>
                <p className="font-semibold text-gray-900">
                  Met Niblah krijg je een technisch sterke webshop én een partner die meedenkt over jouw groei. Zo haal je het maximale uit Shopify.
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
                    <p className="text-gray-900 font-medium">Conversie-optimalisatie vanaf dag 1</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">✓</span>
                    </div>
                    <p className="text-gray-900 font-medium">Koppelingen met marketing tools en logistiek</p>
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
              Voordelen voor jou als <span className="bg-[#1795FF] text-white px-2 rounded">webshop eigenaar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/blog.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Pas je webshop zelf aan zonder technische kennis - wijzig afbeeldingen, teksten en knoppen in minuten</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/blog.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Shopify groeit moeiteloos mee - van 100 tot 100.000 producten en duizenden bezoekers tegelijk</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/blog.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Automatische SSL-beveiliging en naleving van alle veiligheidsnormen - jouw klantgegevens zijn veilig</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/blog.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Razendsnelle laadtijden wereldwijd door servernetwerk - meer snelheid betekent meer conversies</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/blog.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Eenvoudige koppeling met betaalmethoden en verzendpartners - soepel bestelproces voor je klanten</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/blog.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Standaard mobielvriendelijk - je webshop werkt perfect op smartphones en tablets</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/blog.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Uitbreidbaar met 8000+ apps - voeg functies toe zoals reviews en marketingtools zonder code</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 flex-shrink-0 mt-1">
                <Image src="/blog.png" alt="Check" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-900">Regelmatige updates en wereldwijde community support - blijf altijd up-to-date</p>
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
