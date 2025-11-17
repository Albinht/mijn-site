import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'WordPress Developer Agency | 30+ Jaar Expertise | Niblah',
  description: 'Professional WordPress developers voor custom themes, plugins en complexe web applicaties. Van kleine aanpassingen tot enterprise projecten. 30+ jaar development ervaring.',
  keywords: 'wordpress developer, wordpress programmeur, wordpress ontwikkelaar, custom wordpress development, wordpress agency',
  openGraph: {
    title: 'WordPress Developer Agency | Niblah',
    description: 'Expert WordPress developers voor maatwerk oplossingen en complexe projecten.',
    images: ['/avatar.png'],
  },
}

export default function WordPressDeveloperPage() {
  const heroData = {
    badge: 'WORDPRESS DEVELOPERS',
    title: 'Expert WordPress developers voor jouw project',
    description: 'Niblah biedt professionele WordPress development services voor projecten van elke omvang. Onze developers hebben 30+ jaar ervaring met WordPress, van custom theme development tot complexe API integraties. Of je nu een maatwerk plugin nodig hebt, een complete website of technische ondersteuning - wij leveren clean code, snelle delivery en toekomstbestendige oplossingen.',
    ctaText: 'Bespreek je project',
    ctaLink: '/contact',
    note: '* Snelle start met ervaren WordPress developers',
    image: '/wordpress-developers.png',
    imageAlt: 'WordPress development team'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom Niblah Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                WordPress ontwikkelaars met <span className="bg-[#1795FF] text-white px-2 rounded">bewezen expertise</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sinds de introductie van WordPress hebben onze developers ervaring opgebouwd met elk aspect van dit populaire CMS. Van PHP en JavaScript tot MySQL database optimalisatie - onze kennis is diepgaand en actueel.
                </p>
                <p>
                  We specialiseren ons in maatwerk WordPress oplossingen die verder gaan dan standaard themes en plugins. Custom post types, advanced custom fields, REST API integraties, WooCommerce extensies en complexe web applicaties - geen uitdaging is te groot.
                </p>
                <p className="font-semibold text-gray-900">
                  Niblah levert WordPress developers die niet alleen coderen, maar ook meedenken over architectuur, performance, security en schaalbaarheid van je project.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Waarom kiezen voor Niblah developers:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">30+ jaar ervaring met WordPress development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Clean, goed gedocumenteerde en onderhoudbare code</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Ervaring met alle populaire page builders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">WordPress best practices en coding standards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Snelle communicatie en transparante voortgang</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Flexibele inzet: van enkele uren tot full-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat We Doen Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WordPress development <span className="bg-[#1795FF] text-white px-2 rounded">diensten</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van kleine aanpassingen tot complete custom applicaties - onze WordPress developers kunnen het
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
                    Maatwerk WordPress themes vanaf scratch of aanpassing van bestaande themes naar jouw specifieke design en functionaliteit eisen.
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
                    Custom WordPress plugins die perfect aansluiten op jouw workflow. Van simple utilities tot complexe business functionaliteit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏗️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Page Builder Expertise</h3>
                  <p className="text-gray-600 text-sm">
                    Ervaring met Elementor, WPBakery, Divi en Gutenberg. Custom widgets, modules en page builder extensies.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">API Koppelingen</h3>
                  <p className="text-gray-600 text-sm">
                    Integraties met externe systemen via REST API of custom endpoints. CRM, ERP, marketing tools en payment gateways.
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
                    Custom WooCommerce functionaliteit: checkout flows, product types, payment methods en backend extensions.
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
                    Database queries optimaliseren, caching implementeren, lazy loading en code minification voor snellere websites.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Security Hardening</h3>
                  <p className="text-gray-600 text-sm">
                    WordPress security best practices implementeren, vulnerability scanning en proactieve monitoring tegen malware.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">☁️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Hosting & Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Managed WordPress hosting setup, automated backups, updates en 24/7 monitoring voor zorgeloos onderhoud.
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
                    WordPress als headless CMS met Next.js, React of Vue.js frontends. REST API en GraphQL implementaties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe We Werken Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WordPress developer inzetten <span className="bg-[#1795FF] text-white px-2 rounded">in 4 stappen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van intake tot oplevering - zo verloopt de samenwerking met Niblah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900">Intake Gesprek</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                We bespreken je project in detail: wat moet er gebouwd worden, welke functionaliteiten zijn nodig, wat is de timeline en wat is je budget?
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Projectscope bepalen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Technische requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Planning en budget</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900">Developer Matching</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                We selecteren de beste developer(s) voor jouw project op basis van expertise, ervaring en beschikbaarheid. Snelle match binnen 2-3 werkdagen.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Juiste technische skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Passende ervaring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Beschikbaarheid checken</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900">Development</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                De developer gaat aan de slag met je project. Regelmatige updates, transparante communicatie en iteratieve delivery zorgen dat je altijd op de hoogte bent.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Agile development process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Wekelijkse voortgang updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Code reviews en testing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900">Oplevering & Support</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Na oplevering blijven we beschikbaar voor vragen, bugs en verdere ontwikkelingen. Documentatie, training en optionele maintenance contracten.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Complete documentatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Training indien gewenst</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Nazorg en support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Expertise Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waarom WordPress <span className="bg-[#1795FF] text-white px-2 rounded">het beste CMS is</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  WordPress powers meer dan 43% van alle websites wereldwijd en is het populairste Content Management System met ruim 60% marktaandeel binnen CMS platforms. Deze populariteit is niet zonder reden.
                </p>
                <p>
                  Het grootste voordeel van WordPress is de combinatie van gebruiksvriendelijkheid en technische flexibiliteit. De intuïtieve backend maakt het eenvoudig om content te beheren, terwijl de onderliggende architectuur oneindig uitbreidbaar is voor developers.
                </p>
                <p>
                  WordPress draait op PHP, MySQL, JavaScript en CSS - proven technologies die stabiel, veilig en goed gedocumenteerd zijn. Dit maakt het eenvoudig om developers te vinden en complexe functionaliteiten te bouwen.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Voordelen van WordPress:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Gebruiksvriendelijk</h4>
                    <p className="text-sm text-gray-600">Zelf eenvoudig content updaten zonder technische kennis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">SEO Vriendelijk</h4>
                    <p className="text-sm text-gray-600">Ingebouwde SEO features en plugins zoals Yoast SEO</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Schaalbaar</h4>
                    <p className="text-sm text-gray-600">Van kleine blog tot enterprise website - alles mogelijk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Enorme Community</h4>
                    <p className="text-sm text-gray-600">Duizenden plugins, themes en actieve developer community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Kosteneffectief</h4>
                    <p className="text-sm text-gray-600">Open source software zonder licentiekosten</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibiliteit Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Flexibele inzet van <span className="bg-[#1795FF] text-white px-2 rounded">WordPress developers</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Of je nu een enkele developer nodig hebt voor een paar uur per week, of een volledig dedicated team voor een groot project - we bieden flexibiliteit die past bij jouw behoeften en budget.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 border-2 border-black rounded-xl p-6 text-left">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Uren Basis</h3>
              <p className="text-gray-600 text-sm mb-3">
                Betaal alleen voor de uren die gewerkt worden. Perfect voor kleine aanpassingen en onderhoud.
              </p>
              <p className="text-xs text-gray-500">
                Vanaf enkele uren per week
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-black rounded-xl p-6 text-left">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Part-time</h3>
              <p className="text-gray-600 text-sm mb-3">
                Developer voor 2-3 dagen per week op vaste basis. Ideaal voor doorlopende ontwikkeling.
              </p>
              <p className="text-xs text-gray-500">
                16-24 uur per week gegarandeerd
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-black rounded-xl p-6 text-left">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Full-time</h3>
              <p className="text-gray-600 text-sm mb-3">
                Dedicated developer(s) full-time op je project. Maximum focus en snelste delivery.
              </p>
              <p className="text-xs text-gray-500">
                40 uur per week, volledig dedicated
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
          >
            Bespreek jouw project <span>→</span>
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
              href="/wordpress/partner"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                WordPress Expert Agency
              </h3>
              <p className="text-sm text-gray-600 mb-3">30+ jaar ervaring met WordPress projecten</p>
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
