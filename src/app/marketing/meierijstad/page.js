'use client'

import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingMeierijstad() {
  // Lokale Meierijstad reviews
  const dutchReviews = [
    { name: 'Restaurant De Brabantse Tafel Schijndel', rating: 5, text: 'Dankzij lokale SEO ontvangen we nu wekelijks reserveringen uit heel Meierijstad. Onze omzet is met 40% gestegen!' },
    { name: 'Fysiotherapie Centraal Veghel', rating: 5, text: 'Uitstekende lokale SEO voor Meierijstad. We staan bovenaan voor "fysiotherapie Veghel" en krijgen dagelijks aanmeldingen.' },
    { name: 'Automonteur Van den Berg Sint-Oedenrode', rating: 5, text: 'Perfecte Google Ads campagne voor Meierijstad. Meer klanten uit Schijndel, Veghel en Sint-Oedenrode dan ooit tevoren.' },
    { name: 'Kapsalon Trendy Cuts Schijndel', rating: 4.5, text: 'Lokale zichtbaarheid in Meierijstad werkt fantastisch. Klanten boeken nu online via onze website uit de hele gemeente.' },
    { name: 'Tandartspraktijk Smile Veghel', rating: 5, text: 'Top 3 positie voor "tandarts Veghel" behaald. Patiënten uit heel Meierijstad vinden ons nu gemakkelijk online.' },
    { name: 'Tuincentrum Groenendaal Sint-Oedenrode', rating: 5, text: 'Seizoensgebonden Google Ads werken uitstekend. Klanten uit Schijndel en Veghel komen nu specifiek naar ons toe.' },
  ]
  const dutchMoreReviews = [
    { name: 'Notariskantoor Van der Meer Meierijstad', rating: 5, text: 'Professionele SEO-aanpak voor onze vestigingen in Schijndel en Veghel. Meer klanten uit heel Meierijstad.' },
    { name: 'Fietsenwinkel Wielerman Veghel', rating: 4.5, text: 'Lokale marketing heeft onze verkoop flink verhoogd. Klanten uit Sint-Oedenrode en Schijndel komen nu ook.' },
    { name: 'Accountantskantoor Boekhoudkundig Schijndel', rating: 5, text: 'Excellent lokale SEO resultaat. We bedienen nu ZZPers en bedrijven uit heel Meierijstad dankzij online vindbaarheid.' },
    { name: 'Dierenartspraktijk Meierijstad Veghel', rating: 5, text: 'Google My Business optimalisatie werkt perfect. Huisdiereigenaren uit de hele gemeente vinden ons nu snel.' },
    { name: 'Installatiebedrijf TechniekPlus Sint-Oedenrode', rating: 4.5, text: 'Sterke lokale campagnes leveren wekelijks nieuwe klanten op uit Schijndel en Veghel.' },
    { name: 'Schoonheidssalon Pure Beauty Schijndel', rating: 5, text: 'Onze online agenda staat vol dankzij lokale SEO. Klanten uit heel Meierijstad boeken nu online behandelingen.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Meierijstad: Groei in Schijndel, Veghel & Sint-Oedenrode</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">80.000 inwoners + bloeiende bedrijventerreinen</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Meierijstad: moderne gemeente waar traditie en innovatie samenkomen.</strong><br />
            Van de historische kern van Schijndel tot de bedrijventerreinen van Veghel en de groeiende Sint-Oedenrode - Meierijstad biedt volop kansen. Als <b>SEO specialist Meierijstad</b> help ik bedrijven groeien tussen de logistieke hubs, Brabantse industrie en het uitgebreide MKB-netwerk.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Meierijstad: zichtbaar in alle kernen</li>
            <li>✓ Google Ads: bereik klanten uit Schijndel tot Sint-Oedenrode</li>
            <li>✓ Specialisatie in MKB en logistieke bedrijven</li>
            <li>✓ <b>SEO Meierijstad</b> met bewezen groeiresultaten</li>
            <li>✓ Websites die bezoekers converteren naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Bekijk Brabantse cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in heel Meierijstad & omliggende gemeenten</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Meierijstad - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Meierijstad" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Meierijstad met doelgerichte marketing"
        subtitle="Van Schijndel tot Sint-Oedenrode: lokaal zichtbaar, regionaal sterk"
        features={[
          {
            badge: "SEO Meierijstad",
            title: "SEO Specialist Meierijstad",
            description: "Groei in alle kernen van Meierijstad met lokale SEO. Van Schijndel's centrum tot de bedrijventerreinen van Veghel - ik zorg dat je bedrijf lokaal wordt gevonden door de juiste klanten.",
            visualTitle: "Lokaal dominant",
            visualSubtitle: "Alle kernen",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Meierijstad",
            description: "Bereik 80.000 inwoners en duizenden bedrijven met gerichte advertenties. Focus op Schijndel, Veghel, Sint-Oedenrode of heel Meierijstad - altijd maximale ROAS.",
            visualTitle: "Direct bereik",
            visualSubtitle: "80K inwoners",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Marketing",
            title: "Marketing Bureau Meierijstad",
            description: "Complete online marketing voor Brabantse bedrijven. Van MKB in Schijndel tot logistiek in Veghel - websites en campagnes die perfect aansluiten bij jouw doelgroep.",
            visualTitle: "Brabants sterk",
            visualSubtitle: "MKB gericht",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Meierijstad groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN MEIERIJSTAD */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Meierijstad</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Meierijstad combineert Brabantse ondernemerszin met moderne bedrijvigheid in drie sterke kernen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sterke bedrijvigheid</h3>
              <p className="text-gray-600">
                Van logistieke hubs in Veghel tot industriële bedrijven in Schijndel - Meierijstad heeft een diverse economie met veel kansen voor B2B marketing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokale concurrentie</h3>
              <p className="text-gray-600">
                Met lokale SEO in Meierijstad concurreer je niet met heel Nederland, maar focus je op Schijndel, Veghel en Sint-Oedenrode - veel effectiever!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meetbare groei</h3>
              <p className="text-gray-600">
                Lokale SEO in Meierijstad levert snelle resultaten: meer telefoontjes uit de buurt, meer klanten in je zaak en hogere omzet uit de regio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOKALE MARKETING DIENSTEN */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Meierijstad</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlening tot industrie en logistiek - ik help je bedrijf groeien in Meierijstad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Meierijstad */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Meierijstad</h3>
              <p className="text-gray-600 mb-6">
                Domineer de lokale zoekresultaten in alle kernen van Meierijstad. Van "bedrijf Schijndel" tot "dienst Veghel" - wij zorgen voor topposities.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel voor alle locaties</li>
                <li>✓ Kern-specifieke landingspaginas</li>
                <li>✓ Lokale linkbuilding Meierijstad</li>
                <li>✓ Review management alle locaties</li>
                <li>✓ Technische SEO optimalisatie</li>
              </ul>
            </div>
            {/* Google Ads Meierijstad */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Meierijstad ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Meierijstad</h3>
              <p className="text-gray-600 mb-6">
                Bereik klanten in Schijndel, Veghel en Sint-Oedenrode met gerichte advertenties. Lokaal adverteren, regionaal groeien.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Geo-targeting per kern/wijk</li>
                <li>✓ B2B en B2C campagnes</li>
                <li>✓ Seizoensgebonden advertenties</li>
                <li>✓ Mobiel-geoptimaliseerde ads</li>
                <li>✓ Transparante ROAS rapportage</li>
              </ul>
            </div>
            {/* Website & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites voor Brabantse bedrijven. Van MKB tot industrie - websites die converteren en groeien met jouw ambities.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Responsive design voor alle apparaten</li>
                <li>✓ Snelle laadtijden & Core Web Vitals</li>
                <li>✓ Conversie-geoptimaliseerde formulieren</li>
                <li>✓ Integratie met bedrijfsprocessen</li>
                <li>✓ Onderhoud & updates inclusief</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VEELGESTELDE VRAGEN */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Meierijstad</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Meierijstad.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt lokale SEO ook voor bedrijven in verschillende kernen van Meierijstad?</h3>
              <p className="text-gray-600">
                Absoluut! Meierijstad bestaat uit meerdere kernen en we kunnen je bedrijf optimaliseren voor specifieke kernen (Schijndel, Veghel, Sint-Oedenrode) of voor heel Meierijstad. We creëren kern-specifieke landingspaginas en zorgen voor lokale vindbaarheid in elke gewenste kern.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie in Meierijstad?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Meierijstad zie je vaak binnen 2-3 maanden eerste verbeteringen in de zoekresultaten. Google Ads leveren direct resultaat op. De beste SEO-resultaten bereik je na 6-12 maanden consistent werken aan je online aanwezigheid.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is online marketing geschikt voor industriële bedrijven in Meierijstad?</h3>
              <p className="text-gray-600">
                Zeker! Meierijstad heeft een sterke industriële basis en veel logistieke bedrijven. B2B marketing werkt uitstekend: denk aan LinkedIn advertenties, Google Ads voor specifieke industrietermen en SEO voor technische zoektermen. We hebben ervaring met productie, logistiek en technische dienstverlening.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Meierijstad?</h3>
              <p className="text-gray-600">
                SEO prijzen in Meierijstad starten vanaf €650 per maand voor lokale SEO. Voor bedrijven met meerdere locaties of uitgebreide diensten is dit €900-1500 per maand. Tijdens een gratis kennismakingsgesprek bepalen we samen wat het beste pakket voor jouw bedrijf is.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit omliggende gemeenten?</h3>
              <p className="text-gray-600">
                Natuurlijk! Vanuit Meierijstad kun je gemakkelijk klanten bereiken in Den Bosch, Eindhoven, Uden, Oss en andere Brabantse gemeenten. We stemmen de SEO-strategie af op jouw gewenste servicegebied en zorgen voor regionale zichtbaarheid.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe meet je het succes van lokale SEO in Meierijstad?</h3>
              <p className="text-gray-600">
                We meten succes via concrete KPI's: Google ranking posities voor lokale zoektermen, toename website bezoekers uit Meierijstad, meer telefoontjes en contactformulier aanvragen. Je ontvangt maandelijkse rapportages met alle belangrijke cijfers en groei-inzichten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke bedrijven in Meierijstad hebben baat bij lokale SEO?</h3>
              <p className="text-gray-600">
                Praktisch alle bedrijven die lokale klanten bedienen: restaurants, kappers, garages, bouwbedrijven, accountants, tandartsen, fysiotherapeuten, winkels, maar ook B2B dienstverlening, logistieke bedrijven en industriële toeleveranciers die regionaal opereren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER MEIERIJSTAD SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Meierijstad</span> & omgeving
            </h2>
            <p className="text-xl text-gray-600">
              Meierijstad: waar Brabantse ondernemerszin en moderne industrie hand in hand gaan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideaal voor groeiende bedrijven</h3>
              <p className="text-gray-600 mb-4">
                Meierijstad combineert drie sterke kernen: Schijndel met zijn historische centrum en lokale bedrijvigheid, Veghel als logistiek knooppunt, en Sint-Oedenrode als groeiende woonkern. Deze diversiteit biedt unieke kansen voor bedrijven.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Meierijstad help ik bedrijven profiteren van de sterke economische positie tussen Eindhoven en Den Bosch, uitstekende bereikbaarheid via A50 en het groeiende aantal inwoners en bedrijven.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 80.000+ inwoners in groei</li>
                <li>✓ Sterke logistieke positie</li>
                <li>✓ Diverse bedrijventerreinen</li>
                <li>✓ Strategische ligging A50/A73</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Meierijstad:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Logistieke bedrijven</div>
                <div>• Productie & industrie</div>
                <div>• Bouw & installatie</div>
                <div>• Automotive sector</div>
                <div>• Restaurants & horeca</div>
                <div>• Detailhandel</div>
                <div>• Zorg & welzijn</div>
                <div>• Zakelijke dienstverlening</div>
                <div>• Technische bedrijven</div>
                <div>• Transport & distributie</div>
                <div>• Financiële diensten</div>
                <div>• En veel meer...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Meierijstad</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Schijndel, Veghel en Sint-Oedenrode - altijd eerlijk advies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
              <p className="text-gray-600 mb-4">Meer weten? Bel vrijblijvend voor een gratis strategiegesprek.</p>
              <a
                href="tel:+31648728828"
                className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📞 +31 6 48728828
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
              <p className="text-gray-600 mb-4">Snel schakelen? Stuur direct een WhatsApp voor snel contact.</p>
              <a
                href="https://wa.me/31648728828"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Meierijstad - Actief in de hele gemeente</h3>
            <p className="text-gray-600">
              Schijndel • Veghel • Sint-Oedenrode • + omliggende gemeenten zoals Den Bosch • Uden • Oss • Eindhoven
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}