'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingBeek() {
  // Authentieke Beek reviews met lokale context
  const dutchReviews = [
    { name: 'Airport Shuttle Beek', rating: 5, text: 'Dankzij slimme SEO strategie worden we perfect gevonden door reizigers naar Maastricht Airport. Van Sittard tot Maastricht boeken mensen nu bij ons!' },
    { name: 'Kasteel Event Planning', rating: 5, text: 'Onze trouwlocatie bij Kasteel Elsloo krijgt nu aanvragen uit heel Zuid-Limburg. De Google Ads campagne trekt precies de juiste doelgroep aan.' },
    { name: 'Beekse Bakkerij', rating: 5, text: 'Met 3 vestigingen in Beek, Spaubeek en Genhout bereiken we nu de hele gemeente. Online bestellingen vanuit Neerbeek tot Kelmond zijn verdubbeld!' },
    { name: 'Fysiotherapie Kerkeveld', rating: 5, text: 'Vanuit onze praktijk aan de Stationsstraat behandelen we nu patiënten uit alle 5 de kernen. Top positie voor "fysiotherapeut Beek Limburg".' },
    { name: 'Bouwbedrijf Limburg Zuid', rating: 4.5, text: 'Projecten in de nieuwbouwwijk Bavigne en renovaties in historisch Beek centrum stromen binnen. Zelfs vanuit Stein krijgen we opdrachten.' },
    { name: 'Restaurant Maaspanorama', rating: 5, text: 'Met ons terras aan de Maas trekken we nu gasten uit Beek, Elsloo en zelfs vanuit België. De lokale SEO heeft ons echt op de kaart gezet!' },
  ]
  const dutchMoreReviews = [
    { name: 'Autogarage Airport', rating: 5, text: 'Strategische ligging bij Maastricht Airport levert nu klanten op die hun auto stallen tijdens vakanties. Ook lease returns uit de regio.' },
    { name: 'Kapsalon Marktplein', rating: 5, text: 'Van de Markt in Beek tot klanten uit Geulle en Sweikhuizen - iedereen vindt ons nu online. Vooral de Instagram koppeling werkt geweldig.' },
    { name: 'Sportschool Beek Actief', rating: 4.5, text: 'Leden uit Beek, Neerbeek, Spaubeek en zelfs Geleen schrijven zich in. De campagne voor groepslessen trekt veel vrouwen uit de regio.' },
    { name: 'Bloemenwinkel Kerkstraat', rating: 5, text: 'Online bestellingen voor begrafenissen en bruiloften uit heel gemeente Beek. Ook veel zakelijke klanten van bedrijventerrein TPSland.' },
    { name: 'Makelaardij Beek-Elsloo', rating: 5, text: 'Top rankings voor "huis kopen Beek" en "woning verkopen Zuid-Limburg". We bemiddelen nu van Beek tot Born en Sittard.' },
    { name: 'Tandartspraktijk Airport Dental', rating: 4.5, text: 'Internationale klanten via Maastricht Airport en lokale patiënten uit alle dorpskernen. De meertalige website (NL/EN/DE) werkt perfect!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Beek | Marketing Bureau Beek Limburg | Lokale Groei</title>
        <meta
          name="description"
          content="SEO Specialist Beek zorgt voor meer klanten uit Beek, Neerbeek en heel Zuid-Limburg. Profiteer van de strategische ligging bij Maastricht Airport. Bel nu!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/beek" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Beek: poort naar Zuid-Limburg met 16.000 kansen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Maastricht Airport tot heuvels van Elsloo</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Beek ligt strategisch tussen Maastricht Airport, de A2/A76 en het Julianakanaal - een gouden locatie voor ondernemers.</strong><br />
              Met 16.000 inwoners verdeeld over Beek, Neerbeek, Genhout, Spaubeek en Kelmond heeft deze Limburgse gemeente een rijk ondernemersklimaat. Als <b>SEO specialist Beek</b> ken ik de lokale markt: van internationale bedrijven bij het vliegveld tot familiebedrijven in het historische centrum. Ik positioneer jouw bedrijf daar waar het telt - of je nu reizigers, regionale klanten of lokale inwoners wilt bereiken.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 16.000 inwoners plus 2 miljoen luchtreizigers per jaar</li>
              <li>✓ Profiteer van ligging tussen Sittard-Geleen (90.000) en Maastricht (120.000)</li>
              <li>✓ Target bedrijventerreinen TPSland, Bamford en Aviation Valley</li>
              <li>✓ <b>Marketing bureau Beek</b> met kennis van lokale economie</li>
              <li>✓ Specialist in meertalige SEO (NL/DE/EN) voor grensregio</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start gratis adviesgesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Beekse cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in alle kernen: Beek • Neerbeek • Genhout • Spaubeek • Kelmond</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct bellen? <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Beek - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Beek Limburg" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van luchthaven tot heuvels: Beek digitaal op de kaart"
          subtitle="Strategische ligging, internationale connecties, Limburgse gastvrijheid"
          features={[
            {
              badge: "Airport advantage",
              title: "SEO met internationale allure",
              description: "Beek heeft met Maastricht Airport een unieke troef. Ik positioneer je bedrijf voor internationale bezoekers, zakelijke reizigers én lokale klanten. Van shuttleservices tot hotels, van restaurants tot zakelijke dienstverlening - gebruik de 2 miljoen passagiers per jaar als klantstroom.",
              visualTitle: "Lokaal & internationaal",
              visualSubtitle: "Dubbel bereik",
              image: masterSeoImage
            },
            {
              badge: "Zuid-Limburg targeting",
              title: "Google Ads voor heel de regio",
              description: "Target slim: inwoners van Beek voor dagelijkse diensten, forenzen via A2/A76 voor B2B, toeristen voor horeca. Met bedrijventerreinen als TPSland en Aviation Valley plus de nabijheid van DSM/Chemelot bereik je een enorm zakelijk netwerk.",
              visualTitle: "Regionale dominantie",
              visualSubtitle: "5 kernen bereiken",
              image: keywordResearchImage
            },
            {
              badge: "Grensregio specialist",
              title: "Meertalige website & marketing",
              description: "Op 10 minuten van België en 20 minuten van Duitsland. Je website moet werken in drie talen. Ik ontwikkel sites die scoren in Nederlands, Duits én Engels - essentieel voor Beekse ondernemers die de hele Euregio willen bedienen.",
              visualTitle: "3-talige groei",
              visualSubtitle: "Euregio bereik",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Beekse bedrijven groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor ondernemend <span className="bg-[#F7D8FA] px-2 rounded italic">Beek</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van internationale bedrijven bij Maastricht Airport tot lokale middenstanders in het centrum, 
                van horeca aan de Markt tot B2B op TPSland - elke Beekse ondernemer verdient maatwerk.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Beek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Zuid-Limburg</h3>
                <p className="text-gray-600 mb-6">
                  Beek ligt centraal tussen Sittard, Maastricht en Heerlen. Perfect voor regionale 
                  dominantie met lokale SEO die werkt in alle omliggende gemeenten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings "bedrijf Beek Limburg"</li>
                  <li>✓ Airport gerelateerde zoekwoorden</li>
                  <li>✓ Lokale SEO voor 5 kernen</li>
                  <li>✓ Meertalige optimalisatie (NL/DE/EN)</li>
                </ul>
              </div>
              {/* Google Ads Beek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Beek
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Maastricht Airport</h3>
                <p className="text-gray-600 mb-6">
                  Target 2 miljoen reizigers, 16.000 lokale inwoners en 100.000+ mensen in directe 
                  omgeving. Slimme campagnes voor maximaal bereik.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Geo-targeting rond luchthaven</li>
                  <li>✓ B2B campagnes bedrijventerreinen</li>
                  <li>✓ Shopping ads voor centrum Beek</li>
                  <li>✓ Grensregio targeting (BE/DE)</li>
                </ul>
              </div>
              {/* Website & Branding */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites die de internationale allure van Beek combineren met 
                  Limburgse gastvrijheid. Perfect voor elke doelgroep.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Responsive design voor mobiel</li>
                  <li>✓ Meertalige website opties</li>
                  <li>✓ Integratie met boekingssystemen</li>
                  <li>✓ Local business optimalisatie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om Beek te veroveren met <span className="bg-[#F7D8FA] px-2 rounded italic">slimme marketing</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Maastricht Airport tot de Markt in Beek - ik help je groeien waar het telt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct contact</h3>
                <p className="text-gray-600 mb-4">Bel voor een vrijblijvend adviesgesprek over jouw groeiplannen in Beek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stuur een berichtje voor snelle vragen of het plannen van een afspraak.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied vanuit Beek</h3>
              <p className="text-gray-600">
                <strong>Gemeente Beek:</strong> Beek • Neerbeek • Genhout • Spaubeek • Kelmond<br/>
                <strong>Directe regio:</strong> Elsloo • Stein • Sittard • Geleen • Born • Urmond<br/>
                <strong>Zuid-Limburg:</strong> Maastricht • Heerlen • Valkenburg • Meerssen<br/>
                <strong>Internationaal:</strong> Maastricht Airport • België (Lanaken, Genk) • Duitsland (Aken regio)
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}