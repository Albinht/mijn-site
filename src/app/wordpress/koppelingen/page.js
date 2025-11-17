import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'WordPress Koppelingen | Realworks, HRoffice & CRM | Niblah',
  description: 'WordPress koppelingen voor automatisering van je bedrijfsprocessen. Realworks, HRoffice, CRM en ERP integraties op maat. 30+ jaar ervaring.',
  keywords: 'wordpress koppelingen, realworks koppeling, hroffice koppeling, wordpress crm, wordpress integraties, api koppelingen',
  openGraph: {
    title: 'WordPress Koppelingen | Automatiseer je Workflow | Niblah',
    description: 'Maatwerk WordPress koppelingen met Realworks, HRoffice en meer systemen.',
    images: ['/avatar.png'],
  },
}

export default function WordPressKoppelingenPage() {
  const heroData = {
    badge: 'WORDPRESS KOPPELINGEN',
    title: 'Koppel WordPress aan je bedrijfssystemen',
    description: 'WordPress koppelingen, zoals Realworks en HRoffice, helpen je website te automatiseren en bedrijfsprocessen te stroomlijnen. Bij Niblah ontwikkelen we maatwerkoplossingen die jouw WordPress website naadloos verbinden met externe systemen. Bespaar tijd, verminder handmatige taken en focus op groei en klanttevredenheid.',
    ctaText: 'Bespreek je koppeling',
    ctaLink: '/contact',
    note: '* Maatwerk API koppelingen voor elk systeem',
    image: '/wordpress-integrations.png',
    imageAlt: 'WordPress koppelingen visualisatie'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Wat zijn Koppelingen Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wat zijn <span className="bg-[#1795FF] text-white px-2 rounded">WordPress koppelingen?</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Een WordPress koppeling is een technische verbinding tussen je website en andere bedrijfssystemen. Deze koppeling zorgt ervoor dat verschillende programma's automatisch met elkaar communiceren. Hierdoor kun je je bedrijfsprocessen efficiënter inrichten en bespaar je veel tijd.
                </p>
                <p>
                  De koppeling werkt als een digitale brug die constant informatie deelt tussen systemen. Dit is vooral waardevol voor bedrijven die dagelijks veel gegevens verwerken en hun processen willen optimaliseren.
                </p>
                <p className="font-semibold text-gray-900">
                  Dankzij deze integraties bespaar je tijd en verminder je handmatige taken. Hierdoor kun je je richten op groei en klanttevredenheid, terwijl je de efficiëntie van je onderneming verbetert.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Voordelen van WordPress koppelingen:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Automatische synchronisatie van data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Geen dubbele invoer meer nodig</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Minder kans op fouten en inconsistenties</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Real-time data uitwisseling</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Bespaar uren aan handmatig werk per week</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Schaalbaar voor toekomstige groei</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systemen Koppelen Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welke systemen kun je <span className="bg-[#1795FF] text-white px-2 rounded">koppelen</span> aan WordPress?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Een WordPress website kan worden gekoppeld aan verschillende bedrijfssystemen om processen te automatiseren en efficiënter te werken
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👥</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">CRM-systemen</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    CRM-systemen zoals Realworks en HubSpot helpen bij het beheren van klantgegevens en bieden inzicht in klantrelaties.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Klantgegevens, afspraken en interacties worden automatisch gesynchroniseerd. Dit vermindert handmatige invoer en verkleint de kans op fouten.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">HR-systemen</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Een goed HR-systeem, zoals HRoffice, is essentieel voor het efficiënt beheren van vacatures en sollicitaties.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Vacaturegegevens blijven centraal beheerd en worden automatisch naar je website gestuurd. Zo voorkom je inconsistenties en dubbele invoer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">ERP-systemen</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Koppel WordPress aan je ERP voor geïntegreerd voorraadbeheer, inkoop en financiële processen.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Real-time voorraad updates, automatische orderverwerking en complete financiële integratie voor WooCommerce.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Boekhoudsystemen</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Automatische sync met Exact Online, Twinfield of Yuki voor naadloze financiële administratie.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Facturen, orders en klantgegevens worden automatisch gesynchroniseerd met je boekhoudpakket.
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
                  <p className="text-gray-600 text-sm mb-3">
                    Koppel Mailchimp, ActiveCampaign of Klaviyo voor geautomatiseerde email campagnes.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Leads en klanten worden automatisch toegevoegd aan mailinglijsten met juiste segmentatie.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom API's</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Wij bouwen koppelingen met elk systeem dat een API heeft, van niche software tot enterprise platforms.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Maatwerk oplossingen die perfect aansluiten op jouw specifieke workflow en bedrijfsprocessen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifieke Koppelingen Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Populaire <span className="bg-[#1795FF] text-white px-2 rounded">WordPress koppelingen</span>
            </h2>
            <p className="text-lg text-gray-600">
              Deze koppelingen zijn veel gevraagd en bewezen effectief voor bedrijven
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Realworks Koppeling</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Met een Realworks koppeling houd je gemakkelijk overzicht in onder andere je klantafspraken, lopende projecten en je huidige woningaanbod. Perfect voor makelaars en vastgoedbedrijven.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-gray-700 text-sm">Automatische synchronisatie van woningaanbod</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-gray-700 text-sm">Real-time updates van beschikbaarheid en prijzen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-gray-700 text-sm">Klantafspraken en bezichtigingen centraal beheerd</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-gray-700 text-sm">Foto's, plattegronden en documenten automatisch</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[#1795FF] hover:text-[#1795FF]/80 transition-colors"
              >
                Vraag Realworks koppeling aan <span>→</span>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">HRoffice Koppeling</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Met de vacature koppeling tussen HRoffice en jouw WordPress website worden verschillende HR processen gestandaardiseerd. Ideaal voor recruitment en werving & selectie.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-gray-700 text-sm">Automatische vacature publicatie op je website</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-gray-700 text-sm">Sollicitaties direct in HRoffice systeem</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-gray-700 text-sm">Centraal beheer van vacaturegegevens</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Image src="/wp dev.png" alt="Check" width={20} height={20} />
                  </div>
                  <p className="text-gray-700 text-sm">Geen dubbele invoer van vacatureteksten meer</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[#1795FF] hover:text-[#1795FF]/80 transition-colors"
              >
                Vraag HRoffice koppeling aan <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiëntie Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Efficiëntie en groei met <span className="bg-[#1795FF] text-white px-2 rounded">WordPress integraties</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Door deze systemen aan je WordPress website te koppelen, automatiseer je belangrijke bedrijfsprocessen en houd je meer tijd over voor de groei van je bedrijf.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Wij ontwikkelen op maat gemaakte koppelingen die naadloos aansluiten op jouw workflow en zorgen voor een betrouwbare en toekomstbestendige integratie.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Optimaliseer je workflow <span>→</span>
          </Link>
        </div>
      </section>

      {/* Maatwerk Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maatwerk voor jouw <span className="bg-[#1795FF] text-white px-2 rounded">bedrijfsbehoeften</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bij Niblah begrijpen we dat ieder bedrijf uniek is. Daarom bieden we maatwerk WordPress koppelingen die zijn afgestemd op de behoeften van jouw bedrijf
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maatwerk Oplossingen</h3>
              <p className="text-gray-600">
                Of je een eenvoudige koppeling zoekt of een complexe integratie, wij bieden een betrouwbare en veilige oplossing die perfect aansluit op jouw systemen.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Toekomstbestendig</h3>
              <p className="text-gray-600">
                Met maatwerk koppelingen en modules van WordPress ontwikkelen we een naadloze verbinding die schaalbaar is en meegroeit met je bedrijf.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Advies</h3>
              <p className="text-gray-600">
                Ons team van experts staat klaar om je te adviseren en een oplossing te realiseren die jouw website naar een hoger niveau tilt.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Heb je specifieke wensen of wil je weten welke koppeling het beste bij jouw bedrijf past?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[#1795FF] hover:text-[#1795FF]/80 transition-colors text-lg"
            >
              Neem contact op voor een adviesgesprek <span>→</span>
            </Link>
          </div>
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
