import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Officiële Shopify Partner | Gecertificeerde Expertise | Niblah',
  description: 'Niblah is officiële Shopify Partner met directe toegang tot Shopify tools en support. 30+ jaar e-commerce expertise en gecertificeerde ontwikkelaars voor je webshop.',
  keywords: 'shopify partner, officiële shopify partner, shopify expert, gecertificeerde shopify developer, shopify plus partner',
  openGraph: {
    title: 'Officiële Shopify Partner | Niblah',
    description: 'Gecertificeerde Shopify expertise met directe toegang tot Shopify support en tools.',
    images: ['/avatar.png'],
  },
}

export default function ShopifyPartnerPage() {
  const heroData = {
    badge: 'OFFICIËLE SHOPIFY PARTNER',
    title: 'Gecertificeerde Shopify expertise voor jouw webshop succes',
    description: 'Niblah is officiële Shopify Partner met directe toegang tot Shopify\'s nieuwste technologieën en support. Onze partner status garandeert gecertificeerde kennis, 30+ jaar e-commerce ervaring en een directe lijn met Shopify zelf. Dit betekent snellere oplossingen, betere advisering en een toekomstbestendige webshop voor jou.',
    ctaText: 'Werk met een Shopify Partner',
    ctaLink: '/contact',
    note: '* Officiële partner status met certificeringen en directe Shopify support',
    image: '/shopify-partner.png',
    imageAlt: 'Shopify Partner badge en certificering'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Partner Status Uitleg Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wat betekent <span className="bg-[#1795FF] text-white px-2 rounded">Officiële Shopify Partner?</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Als officiële Shopify Partner heeft Niblah directe toegang tot Shopify's Partner Program met tools, resources en support die niet beschikbaar zijn voor reguliere developers. Dit is geen status die je zomaar krijgt.
                </p>
                <p>
                  Shopify Partners moeten aantoonbare expertise hebben, succesvol webshops bouwen en voldoen aan Shopify's kwaliteitseisen. Onze 30+ jaar e-commerce ervaring gecombineerd met gecertificeerde Shopify kennis garandeert dat je webshop technisch perfect is.
                </p>
                <p className="font-semibold text-gray-900">
                  Het verschil? Directe ondersteuning van Shopify, early access tot nieuwe features, en bewezen expertise die zorgt dat je webshop optimaal functioneert.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Wat je krijgt met een Partner:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Directe toegang tot Shopify support en engineering team</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Early access tot nieuwe Shopify features en updates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Gecertificeerde developers volgens Shopify standaarden</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Toegang tot exclusieve Partner tools en resources</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Bewezen track record van succesvolle Shopify projecten</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/blog.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Snellere oplossingen voor complexe technische vraagstukken</p>
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
              Waarom kiezen voor een <span className="bg-[#1795FF] text-white px-2 rounded">Shopify Partner?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Niet alle Shopify developers zijn gelijk - partner status maakt het verschil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gecertificeerde Expertise</h3>
              <p className="text-gray-600">
                Onze developers zijn gecertificeerd door Shopify en werken volgens officiële best practices. Dit garandeert technisch perfecte webshops die optimaal presteren.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Snellere Oplossingen</h3>
              <p className="text-gray-600">
                Directe lijn met Shopify support betekent complexe problemen sneller oplossen. Geen wachten op forums of algemene support - we schakelen direct met Shopify engineers.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Toekomstbestendig</h3>
              <p className="text-gray-600">
                Early access tot nieuwe Shopify features betekent dat je webshop altijd up-to-date blijft. We anticiperen op updates in plaats van achter de feiten aanlopen.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kwaliteitsgarantie</h3>
              <p className="text-gray-600">
                Shopify controleert Partner werk regelmatig. Onze status bewijst dat we voldoen aan de hoogste kwaliteitseisen en klanten tevreden zijn met ons werk.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Practices</h3>
              <p className="text-gray-600">
                We hebben directe toegang tot Shopify's documentatie, trainingen en resources. Hierdoor bouwen we webshops volgens de meest recente e-commerce best practices.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategisch Advies</h3>
              <p className="text-gray-600">
                Als Partner hebben we inzicht in wat werkt en wat niet bij duizenden Shopify stores. Deze kennis gebruiken we om jouw webshop optimaal in te richten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe We Werken Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zo werken we samen aan jouw <span className="bg-[#1795FF] text-white px-2 rounded">succesvolle Shopify webshop</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparante aanpak van strategie tot live gang en daarna
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900">Strategie & Planning</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We beginnen met je doelen, doelgroep en requirements in kaart te brengen. Samen bepalen we de beste aanpak voor jouw situatie.
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
                Onze gecertificeerde developers bouwen je webshop volgens Shopify best practices. Regelmatige updates en ruimte voor feedback.
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
                Uitgebreid testen van functionaliteiten, performance en gebruikerservaring. Smooth launch zonder verrassingen.
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
                Doorlopende support en optimalisatie. We blijven je webshop verbeteren op basis van data en nieuwe Shopify features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Garanties Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze <span className="bg-[#1795FF] text-white px-2 rounded">Partner garanties</span>
            </h2>
            <p className="text-lg text-gray-600">
              Dit krijg je gegarandeerd als je met Niblah als Shopify Partner werkt
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] flex items-start gap-4">
              <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Technisch Perfecte Webshop</h3>
                <p className="text-gray-600">
                  Gebouwd volgens Shopify standaarden, getest en geoptimaliseerd voor performance, conversie en SEO.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] flex items-start gap-4">
              <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Directe Shopify Support</h3>
                <p className="text-gray-600">
                  Bij complexe issues kunnen we direct schakelen met Shopify engineering team voor snelle oplossingen.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] flex items-start gap-4">
              <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Toekomstbestendige Code</h3>
                <p className="text-gray-600">
                  We anticiperen op Shopify updates en nieuwe features. Je webshop blijft altijd up-to-date en optimaal functioneren.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] flex items-start gap-4">
              <div className="w-8 h-8 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">30+ Jaar E-commerce Expertise</h3>
                <p className="text-gray-600">
                  Shopify partner status gecombineerd met decennia aan e-commerce ervaring. We weten wat werkt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Werk samen met een <span className="bg-[#1795FF] text-white px-2 rounded">officiële Shopify Partner</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Kies voor de zekerheid van gecertificeerde expertise, directe Shopify support en 30+ jaar e-commerce ervaring. Niblah bouwt je webshop volgens de hoogste standaarden.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Van strategie tot live gang en doorlopende optimalisatie - we zorgen dat je Shopify webshop technisch perfect is en blijft presteren.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Start je Shopify project <span>→</span>
          </Link>
        </div>
      </section>

      {/* Gerelateerde Services */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze Shopify <span className="bg-[#1795FF] text-white px-2 rounded">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Complete Shopify oplossingen van een officiële partner
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
