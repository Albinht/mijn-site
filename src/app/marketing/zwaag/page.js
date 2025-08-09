'use client'

import Head from 'next/head'
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

export default function MarketingZwaag() {
  // Lokale Zwaag reviews
  const dutchReviews = [
    { name: 'Restaurant De Gouden Leeuw Zwaag', rating: 5, text: 'Sinds we werken met Albin zijn we het best vindbare restaurant in Zwaag. Iedere week nieuwe reserveringen!' },
    { name: 'Garage Westfrisia Zwaag', rating: 5, text: 'De marketingstrategie zorgt voor een gestage stroom aan klanten uit Zwaag en omgeving. Google Ads werkt perfect.' },
    { name: 'Kapsalon Styling Zwaag', rating: 5, text: 'Sinds de website is aangepakt krijgen we veel meer afspraken. We zijn goed zichtbaar in lokale zoekresultaten.' },
    { name: 'Fysiotherapie Praktijk Zwaag', rating: 5, text: 'Onze praktijk wordt nu structureel gevonden door mensen uit Zwaag. De agenda is voller dan ooit.' },
    { name: 'Installatiebedrijf Van der Berg', rating: 5, text: 'Lokale SEO levert elke week aanvragen uit Zwaag en West-Friesland op. De investering betaalt zich terug.' },
    { name: 'Tandartspraktijk Zwaag Centrum', rating: 4.5, text: 'Meer patiënten, betere reviews en veel meer zichtbaarheid in Zwaag. Super tevreden met de samenwerking!' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemer Hoorn-Zwaag', rating: 5, text: 'Onze projecten komen nu rechtstreeks via Google binnen. Binnen een half jaar bovenaan voor onze zoekwoorden.' },
    { name: 'Schoonheidssalon Bella Zwaag', rating: 5, text: 'Dankzij de lokale focus boeken klanten uit Zwaag nu direct via Google. Onze omzet is flink gestegen.' },
    { name: 'Fietsenwinkel Zwaag', rating: 4.5, text: 'Onze naamsbekendheid in Zwaag groeit snel dankzij slimme online marketing en lokale SEO.' },
    { name: 'Advocatenkantoor Westfrisia', rating: 5, text: 'De Google Ads campagnes leveren maandelijks nieuwe cliënten op, vooral uit Zwaag en omliggende dorpen.' },
    { name: 'Tuincentrum Zwaag', rating: 5, text: 'Onze seizoensacties zijn nu veel beter zichtbaar bij inwoners van Zwaag en West-Friesland.' },
    { name: 'Dierenkliniek Zwaag-Noord', rating: 4.5, text: 'Toppositie in Google voor "dierenarts Zwaag" en een duidelijke groei in aanvragen uit de regio.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Zwaag | Marketing Bureau & Online Marketing Zwaag</title>
        <meta
          name="description"
          content="SEO Specialist Zwaag inschakelen? Kies voor hét marketing bureau in Zwaag. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/zwaag" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SEO Specialist Zwaag - Niblah",
              "description": "Professionele SEO services en online marketing voor bedrijven in Zwaag en West-Friesland.",
              "url": "https://www.niblah.com/marketing/zwaag",
              "telephone": "+31648728828",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zwaag",
                "addressRegion": "Noord-Holland",
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.6642,
                "longitude": 5.0681
              },
              "areaServed": {
                "@type": "City",
                "name": "Zwaag"
              },
              "serviceType": "SEO Services, Online Marketing, Google Ads",
              "priceRange": "€€"
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Zwaag bij Hoorn: groeikern met 10.000+ inwoners online zetten</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Grootste dorp West-Friesland digitaal domineren</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              <strong>Zwaag: van historisch dorp tot moderne groeikern direct naast Hoorn.</strong><br />
              Met 10.500 inwoners het grootste dorp van West-Friesland, strategisch gelegen tussen Hoorn (73.000 inw.) en de A7. Het moderne winkelcentrum Stationslaan, sportpark De Kreek en de nieuwbouwwijken Bangert & Oosterpolder maken Zwaag aantrekkelijk. Als <b>SEO specialist Zwaag</b> ken ik de dynamiek tussen dorpsgevoel en stedelijke voorzieningen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✓ Lokale SEO Zwaag: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Zwaag en regio</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Zwaag</li>
              <li>✓ <b>SEO Zwaag</b> met meetbaar resultaat</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Zwaag & West-Friesland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Zwaag - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Zwaag" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Zwaag met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Zwaag",
              title: "SEO Specialist Zwaag",
              description: "Wil je echt groeien in Zwaag en West-Friesland? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de regio.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Zwaag",
              description: "Direct aanvragen van inwoners en bedrijven uit Zwaag en omliggende dorpen. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Zwaag",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Zwaag. Volledig geoptimaliseerd voor de lokale markt in West-Friesland.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer aanvragen",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Zwaag groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* WAAROM KIEZEN VOOR LOKALE SEO IN ZWAAG */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Zwaag</span> voor lokale SEO?
              </h2>
              <p className="text-lg text-gray-600">
                Zwaag is een groeiende gemeente in West-Friesland met veel ondernemers die lokaal gevonden willen worden.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lokale concurrentie</h3>
                <p className="text-gray-600">
                  Zwaag heeft een groeiend aantal bedrijven. Met de juiste SEO strategie spring je eruit en trek je klanten van je concurrenten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lokaal zoekgedrag</h3>
                <p className="text-gray-600">
                  Mensen zoeken steeds vaker naar "bedrijf Zwaag" of "dienst West-Friesland". Met lokale SEO sta je bovenaan bij deze zoekopdrachten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Meetbare groei</h3>
                <p className="text-gray-600">
                  Lokale SEO in Zwaag levert snel resultaat op. Meer telefoontjes, meer afspraken en meer omzet uit je eigen regio.
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
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Zwaag</span>
              </h2>
              <p className="text-lg text-gray-600">
                Van lokale dienstverlener tot retailer – ik help je bedrijf online groeien in Zwaag en West-Friesland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Zwaag */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Zwaag</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Zwaag.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Zwaag</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                  <li>✓ Lokale citaties & NAP consistentie</li>
                </ul>
              </div>
              {/* Google Ads Zwaag */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Zwaagse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Zwaag</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Zwaag en West-Friesland.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Zwaag en omliggende dorpen</li>
                  <li>✓ Continu geoptimaliseerd voor ROAS</li>
                  <li>✓ Landing pages die converteren</li>
                  <li>✓ Transparante rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Website op maat voor Zwaag</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke lokale zichtbaarheid</li>
                  <li>✓ Social media integratie</li>
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
                Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Zwaag</span>
              </h2>
              <p className="text-lg text-gray-600">
                Alles wat je moet weten over lokale SEO en online marketing in Zwaag.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Zwaag?</h3>
                <p className="text-gray-600">
                  Zwaag is een groeiende gemeente in West-Friesland met veel lokale bedrijven. Door je te richten op "SEO Zwaag" of "dienst Zwaag" trek je specifiek klanten aan die in jouw regio zoeken naar je diensten. Dit levert vaak hogere conversies op dan algemene SEO.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
                <p className="text-gray-600">
                  Voor lokale SEO in Zwaag zie je vaak al binnen 1-3 maanden eerste resultaten. Google Ads campagnes kunnen direct resultaat opleveren. De beste resultaten kom je na 6-12 maanden consistent werken aan je online zichtbaarheid.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt online marketing ook voor kleine bedrijven in Zwaag?</h3>
                <p className="text-gray-600">
                  Zeker! Juist kleine bedrijven in Zwaag hebben veel voordeel bij lokale SEO. Je concurreert niet met grote landelijke partijen, maar met lokale bedrijven. Met de juiste strategie kun je als kleine ondernemer bovenaan staan in Google.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Zwaag?</h3>
                <p className="text-gray-600">
                  De kosten voor SEO in Zwaag verschillen per bedrijf en doelstelling. Ik werk met maandelijkse pakketten vanaf €500 per maand voor lokale SEO. During een gratis strategiegesprek bespreken we wat het beste bij jouw bedrijf past.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook klanten trekken uit de regio West-Friesland?</h3>
                <p className="text-gray-600">
                  Absoluut! Naast Zwaag kunnen we je ook zichtbaar maken in Hoorn, Medemblik, Enkhuizen en andere plaatsen in West-Friesland. We passen de SEO-strategie aan op basis van waar jouw ideale klanten vandaan komen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OVER ZWAAG SECTIE */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Zwaag</span> & West-Friesland
              </h2>
              <p className="text-lg text-gray-600">
                Zwaag is een dynamische gemeente met veel ondernemers die lokaal succesvol willen zijn.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor lokale bedrijven</h3>
                <p className="text-gray-600 mb-4">
                  Zwaag ligt strategisch in West-Friesland, tussen Hoorn en Medemblik. De gemeente groeit en heeft een sterke lokale economie met veel MKB-bedrijven, winkels en dienstverleners.
                </p>
                <p className="text-gray-600 mb-6">
                  Als SEO specialist Zwaag help ik bedrijven om lokaal gevonden te worden, meer klanten te trekken en te groeien in deze mooie regio.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Sterke lokale economie</li>
                  <li>✓ Groeiende bevolking</li>
                  <li>✓ Veel MKB en ondernemers</li>
                  <li>✓ Strategische ligging in West-Friesland</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Zwaag:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <div>• Restaurants & cafés</div>
                  <div>• Kappers & schoonheid</div>
                  <div>• Garage & autoservice</div>
                  <div>• Fysiotherapie</div>
                  <div>• Tandartsen</div>
                  <div>• Aannemers</div>
                  <div>• Installatiebedrijven</div>
                  <div>• Tuincentra</div>
                  <div>• Dierenkliniek</div>
                  <div>• Advocaten</div>
                  <div>• Boekhouders</div>
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Zwaag</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Zwaag – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Zwaag & West-Friesland</h3>
              <p className="text-gray-600">
                Zwaag • Hoorn • Medemblik • Enkhuizen • Bovenkarspel • Grootebroek • Hoogkarspel • Venhuizen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}