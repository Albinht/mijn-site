import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import DevelopmentReviewSlider from '../../../components/DevelopmentReviewSlider'
import DevelopmentConsultSection from '../../../components/DevelopmentConsultSection'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'WordPress Migratie | Verhuis je Website Naadloos | Niblah',
  description: 'Migreer naar of van WordPress zonder stress. Niblah zorgt voor veilige data-overzet, SEO behoud en 100% uptime. 30+ jaar migratie-ervaring.',
  keywords: 'wordpress migratie, website verhuizen, migreren naar wordpress, shopify naar wordpress, woocommerce migratie, magento naar wordpress',
  openGraph: {
    title: 'WordPress Migratie | Naadloos Verhuizen | Niblah',
    description: 'Professionele WordPress migratie met SEO behoud en 100% uptime.',
    images: ['/avatar.png'],
  },
}

export default function WordPressMigratiePage() {
  const heroData = {
    badge: 'WORDPRESS MIGRATIE',
    title: 'Verhuis je website naadloos naar of van WordPress',
    description: 'Overstappen naar WordPress of juist van WordPress naar Shopify? Zorgen over downtime, dataverlies of SEO impact? Niblah heeft 30+ jaar ervaring met website en webshop migraties. We zorgen voor een soepele overstap van Shopify, Magento, WooCommerce of elk ander platform. Zonder stress, met behoud van alle data en SEO-waarde.',
    ctaText: 'Bespreek je migratie',
    ctaLink: '/contact',
    note: '* 100% uptime en volledige SEO behoud gegarandeerd',
    image: '/wordpress-migration.png',
    imageAlt: 'WordPress migratie proces visualisatie'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom WordPress/Van WordPress Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wij zorgen voor snelle overgang van <span className="bg-[#1795FF] text-white px-2 rounded">al je data</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Het overzetten van een website of webshop is niet slechts een kwestie van installeren met een ander platform. Een professionele migratie betekent het veilig overplaatsen van alle waardevolle gegevens.
                </p>
                <p>
                  Of je nu van Shopify naar WooCommerce migreert voor meer controle, van Magento naar WordPress voor gebruiksvriendelijkheid, of juist van WordPress naar Shopify voor betere e-commerce functionaliteit - Niblah heeft de ervaring en tools om dit soepel te laten verlopen.
                </p>
                <p className="font-semibold text-gray-900">
                  Niblah zorgt dat de overgang professioneel verloopt, zonder dataverlies, met 100% uptime en volledig behoud van je SEO-rankings.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Wat Niblah voor je migreert:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Alle producten met afbeeldingen en beschrijvingen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Klantgegevens en bestelhistorie (optioneel)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Content pagina's, blogs en media</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">SEO data met URL redirects (301)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Categorieën en taxonomie structuur</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <Image src="/wp dev.png" alt="Check" width={24} height={24} />
                    </div>
                    <p className="text-gray-700">Verkoopgegevens en analytics export</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migratie Routes Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze <span className="bg-[#1795FF] text-white px-2 rounded">migratie specialisaties</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We hebben een migratie tool ontwikkeld die op een soepele manier werkt tegen een aantrekkelijk tarief
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🛒</span>
                <h3 className="text-lg font-bold text-gray-900">Shopify → WooCommerce</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Van Shopify naar WordPress voor meer controle en eigenaarschap over je webshop
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💼</span>
                <h3 className="text-lg font-bold text-gray-900">WooCommerce → Shopify</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Van WordPress naar Shopify voor betere e-commerce functionaliteit en hosting
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚙️</span>
                <h3 className="text-lg font-bold text-gray-900">Magento → WordPress</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Van complex Magento naar gebruiksvriendelijk WordPress/WooCommerce
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔧</span>
                <h3 className="text-lg font-bold text-gray-900">Magento → Shopify</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Van Magento naar Shopify voor eenvoudiger beheer en onderhoud
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📦</span>
                <h3 className="text-lg font-bold text-gray-900">osCommerce → WordPress</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Upgrade van verouderd osCommerce naar modern WordPress/WooCommerce
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌐</span>
                <h3 className="text-lg font-bold text-gray-900">Custom Platform → WordPress</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Van custom of verouderde platforms naar flexibel WordPress
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              We zetten al je belangrijke gegevens over zodat jij snel en moeiteloos weer online bent
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[#1795FF] hover:text-[#1795FF]/80 transition-colors"
            >
              Bekijk alle migratie mogelijkheden <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Drie Stappen Proces Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Webshop migratie in <span className="bg-[#1795FF] text-white px-2 rounded">drie stappen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Een professionele migratie vereist zorgvuldige planning en uitvoering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voorbereiding</h3>
              <p className="text-gray-600 mb-4">
                We brengen eerst in kaart welke data er allemaal aanwezig is in je website of webshop. De huidige URL-structuur slaan we op en we maken natuurlijk back-ups, zodat er geen waardevolle informatie verloren gaat.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Data inventarisatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>URL-mapping en redirects plannen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Complete back-ups maken</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uitvoering</h3>
              <p className="text-gray-600 mb-4">
                Niblah migreert alle data van jouw website en implementeert een eventuele nieuwe URL-structuur. We zorgen voor correcte redirects van de oude URL's zodat alles in je website perfect vindbaar blijft.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Data migratie met onze tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>301 redirects implementeren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Testing op staging omgeving</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nazorg</h3>
              <p className="text-gray-600 mb-4">
                Na de live gang monitoren we je website nauwkeurig. We controleren of alle redirects werken, SEO intact is gebleven en alles functioneert zoals verwacht. Support bij eventuele vragen of issues.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>SEO monitoring en verificatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Functionele testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">✓</span>
                  <span>Post-migratie support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze <span className="bg-[#1795FF] text-white px-2 rounded">migratie garanties</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bij Niblah nemen we migraties serieus en geven duidelijke garanties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">100% Uptime</h3>
                  <p className="text-gray-600 text-sm">
                    Je wilt natuurlijk niet dat jouw website tijdens de migratie offline gaat. Niblah zorgt ervoor dat de migratie soepel verloopt en garandeert daarbij 100% uptime. Op deze manier gaat er geen verkeer of sales verloren en blijft je website gewoon in de lucht. De bezoeker merkt niets van de migratie.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AVG-Richtlijnen</h3>
                  <p className="text-gray-600 text-sm">
                    De data van jouw website is natuurlijk vertrouwelijk. Bij onze website migratie werken we daarom volgens de AVG-richtlijnen en sluiten we een verwerkingsovereenkomst. Wij gaan zorgvuldig met de data om en gebruiken deze uitsluitend voor het migreren van jouw website naar een nieuw platform.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SEO Behoud</h3>
                  <p className="text-gray-600 text-sm">
                    We implementeren alle URL redirects (301) correct zodat je SEO rankings intact blijven. Meta data, alt-tags en technische SEO worden overgezet. Google merkt niets van de wissel en je organisch verkeer blijft stabiel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💾</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Geen Dataverlies</h3>
                  <p className="text-gray-600 text-sm">
                    Alle data wordt volledig gemigreerd - van producten en klanten tot content en media. We maken complete back-ups vooraf en verifiëren na de migratie dat alles correct is overgezet. Niets gaat verloren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migratie Data Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Geef het werk <span className="bg-[#1795FF] text-white px-2 rounded">uit handen</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Een gemiddelde website heeft een enorme database aan data. Denk aan ordergegevens, klantgegevens, producten met afbeeldingen en beschrijvingen en de categorieën van je webshop. Het migreren van die data is een enorme klus, waarbij een foutje snel is gemaakt.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Het is daarom verstandig om deze klus uit te besteden aan experts, die ervaring hebben met het overzetten van data. Niblah helpt je graag bij jouw website migratie met 30+ jaar ervaring.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border-2 border-black shadow-[8px_8px_0_0_#000]">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Wat kost een migratie?
            </h3>
            <p className="text-gray-600 text-center mb-8">
              De kosten van migratie zijn afhankelijk van het aantal data dat je in jouw website hebt. Krijg een duidelijke offerte op basis van jouw specifieke behoefte.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 border-2 border-black">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Image src="/wp dev.png" alt="" width={32} height={32} />
                  </div>
                  <h4 className="font-bold text-gray-900">Van platform</h4>
                </div>
                <p className="text-sm text-gray-600">Shopify, Magento, WooCommerce, osCommerce, custom platforms</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-black">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Image src="/wp dev.png" alt="" width={32} height={32} />
                  </div>
                  <h4 className="font-bold text-gray-900">Naar platform</h4>
                </div>
                <p className="text-sm text-gray-600">WordPress, WooCommerce, Shopify of ander platform</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-black">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Image src="/wp dev.png" alt="" width={32} height={32} />
                  </div>
                  <h4 className="font-bold text-gray-900">Producten</h4>
                </div>
                <p className="text-sm text-gray-600">Aantal producten, varianten en categorieën bepaalt complexiteit</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-black">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Image src="/wp dev.png" alt="" width={32} height={32} />
                  </div>
                  <h4 className="font-bold text-gray-900">Klanten & Orders</h4>
                </div>
                <p className="text-sm text-gray-600">Optioneel: klantgegevens en orderhistorie meenemen</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1795FF] text-lg px-8 py-4 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#000] shadow-[0_5px_0_0_#000]"
              >
                Vraag offerte aan <span>→</span>
              </Link>
              <p className="text-sm text-gray-600 mt-4">
                Aarzel ook zeker niet om contact met ons op te nemen mocht je ergens vragen over hebben
              </p>
            </div>
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
              href="/wordpress/marketing"
              className="group bg-white border-2 border-black rounded-xl p-6 hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] shadow-[0_6px_0_0_#000] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1795FF] transition-colors mb-2">
                WordPress Marketing
              </h3>
              <p className="text-sm text-gray-600 mb-3">SEO, content marketing en Google Ads</p>
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
