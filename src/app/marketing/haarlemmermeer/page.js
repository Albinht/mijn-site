'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingHaarlemmermeer() {
  // Lokale Haarlemmermeer reviews - Internationale gemeente nabij Schiphol
  const dutchReviews = [
    { name: 'Logistics Bedrijf Schiphol-Rijk', rating: 5, text: 'Schiphol-Rijk is het logistieke hart van Nederland. Door lokale SEO krijgen we internationale klanten uit de hele luchtvaartsector!' },
    { name: 'Hotel Hoofddorp', rating: 5, text: 'Hoofddorp is perfect gelegen nabij Schiphol. Onze zaak staat nu bovenaan in Google en ontvangt gasten uit de hele wereld.' },
    { name: 'IT Consultancy Nieuw-Vennep', rating: 4.5, text: 'Nieuw-Vennep combineert dorpssfeer met zakelijke kansen. Via online marketing bereiken we nu bedrijven uit heel de Randstad en internationaal.' },
    { name: 'Restaurant Badhoevedorp', rating: 5, text: 'Badhoevedorp profiteert van Schiphol verkeer. We staan nu #1 voor "restaurant Haarlemmermeer" en bedienen reizigers uit heel de wereld!' },
    { name: 'Tandarts Cruquius', rating: 5, text: 'Cruquius heeft veel internationale families. Dankzij meertalige Google Ads komen er patiënten uit diverse culturen naar onze praktijk.' },
    { name: 'Bouwbedrijf Vijfhuizen', rating: 5, text: 'Vijfhuizen groeit snel met nieuwe projecten. Door professionele marketing bereiken we nu opdrachtgevers uit heel Noord-Holland en Amsterdam.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fysiotherapie Lijnden', rating: 5, text: 'Lijnden heeft veel forenzen naar Amsterdam. Door lokale zichtbaarheid krijgen we patiënten die kwaliteitszorg zoeken dicht bij huis.' },
    { name: 'Autogarage Rozenburg', rating: 4.5, text: 'Rozenburg ligt strategisch in de polder. Onze garage wordt nu gevonden door automobilisten uit heel Haarlemmermeer en Amsterdam Nieuw-West.' },
    { name: 'Accountant Zwanenburg', rating: 5, text: 'Zwanenburg heeft veel ondernemers. Via Google Ads bereiken we internationale bedrijven die Nederlandse fiscale expertise nodig hebben.' },
    { name: 'Kapsalon Lisserbroek', rating: 5, text: 'Lisserbroek behoudt dorpskarakter. Door SEO vinden klanten ons die persoonlijke aandacht zoeken weg van de drukte van Schiphol.' },
    { name: 'Sportschool De Hoek', rating: 5, text: 'De Hoek wordt steeds populairder. Online marketing brengt ons leden die moderne fitness faciliteiten zoeken in een rustige omgeving.' },
    { name: 'Makelaar Boesingheliede', rating: 4.5, text: 'Boesingheliede biedt rust nabij de stad. Ons kantoor wordt nu gevonden door woningzoekers uit Amsterdam die ruimte zoeken in de polder.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Haarlemmermeer | Marketing Bureau & Online Marketing Haarlemmermeer</title>
        <meta
          name="description"
          content="SEO Specialist Haarlemmermeer voor internationale bedrijven. Meer klanten in Haarlemmermeer met gerichte SEO, Google Ads en marketing nabij Schiphol."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/haarlemmermeer" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Haarlemmermeer: Gateway naar Europa</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">148.000 inwoners in internationale poldergemeente</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Haarlemmermeer: waar Nederlandse poldertraditie en internationale dynamiek elkaar versterken.</strong><br />
              Van het bruisende Hoofddorp tot pittoreske dorpjes zoals Nieuw-Vennep en Cruquius, van wereldwijde logistiek rond Schiphol-Rijk tot lokale ondernemers in Vijfhuizen - Haarlemmermeer combineert internationale allure met Hollandse nuchterheid. Met 148.000+ inwoners en als poort van Europa biedt Haarlemmermeer ondernemers de perfecte mix van mondiale connecties, groei en bereikbaarheid. Als <b>SEO specialist Haarlemmermeer</b> help ik ambitieuze bedrijven de digitale kansen van deze unieke internationale gemeente optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Haarlemmermeer: zichtbaar in de polder</li>
              <li>✓ Google Ads: bereik naar 148.000+ internationale inwoners</li>
              <li>✓ Speciaal voor bedrijven nabij Schiphol</li>
              <li>✓ <b>SEO Haarlemmermeer</b> met internationale focus</li>
              <li>✓ Websites voor mondiale en lokale doelgroepen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Haarlemmermeer cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Haarlemmermeer & Schiphol regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Haarlemmermeer - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Haarlemmermeer" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Haarlemmermeer met doelgerichte marketing"
          subtitle="Digitale groei voor de internationale poldergemeente"
          features={[
            {
              badge: "SEO Haarlemmermeer",
              title: "SEO Specialist Haarlemmermeer",
              description: "Haarlemmermeer heeft een unieke positie als internationale gateway met Schiphol en diverse lokaleeeneden. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en nieuwe klanten aan te trekken uit heel Europa.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Haarlemmermeer",
              description: "Direct zichtbaar voor 148.000+ inwoners en internationale bezoekers via Schiphol. Adverteer gericht in alle kernen van Hoofddorp tot Nieuw-Vennep en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Haarlemmermeer",
              description: "Moderne, meertalige websites die passen bij Haarlemmermeer's internationale karakter en Nederlandse kwaliteit. Volledig geoptimaliseerd voor de lokale en wereldwijde markt.",
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
          title="Haarlemmermeer groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Haarlemmermeer</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van internationale logistiek tot lokale dienstverlening – ik help wereldwijde en lokale bedrijven online groeien in de poldergemeente.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Haarlemmermeer */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Haarlemmermeer</h3>
                <p className="text-gray-600 mb-6">
                  In een internationale gemeente als Haarlemmermeer is lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken in alle kernen en bereik ook Schiphol bezoekers.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie alle kernen</li>
                  <li>✓ Meertalige zoekwoordenonderzoek</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews in meerdere talen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Haarlemmermeer */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor internationale bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Haarlemmermeer</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 148.000+ inwoners en internationale bezoekers via Schiphol met strategisch gerichte campagnes voor maximale impact wereldwijd.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle kernen & Schiphol</li>
                  <li>✓ Focus op internationale doelgroepen</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Internationale, professionele websites die passen bij Haarlemmermeer's mondiale uitstraling en Nederlandse betrouwbaarheid, zorgen voor meer conversies wereldwijd.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalig design voor internationale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Europa & wereldwijd</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Haarlemmermeer</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Haarlemmermeer?</h3>
                <p className="text-gray-600">
                  Haarlemmermeer is uniek als internationale gemeente met Schiphol maar ook vele lokale kernen. Met 148.000+ inwoners plus miljoenen Schiphol bezoekers is lokale zichtbaarheid cruciaal. Van Hoofddorp tot Nieuw-Vennep - je wilt gevonden worden door zowel lokale klanten als internationale bezoekers die Nederland via Schiphol betreden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Haarlemmermeer van andere gemeenten?</h3>
                <p className="text-gray-600">
                  Haarlemmermeer combineert internationale dynamiek met Nederlandse poldermentaliteit. Veel inwoners werken internationaal of bij Schiphol, waardoor ze gewend zijn aan diverse culturen en talen. Marketing moet daarom professioneel, betrouwbaar en bij voorkeur meertalig zijn, met begrip voor internationale businesscultuur.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke kernen in Haarlemmermeer zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Hoofddorp als centrum voor retail en dienstverlening, Schiphol-Rijk voor logistiek en internationale handel, Nieuw-Vennep voor lokale gemeenschap, Badhoevedorp voor horeca en hotels, Cruquius voor expat families, en kleinere kernen zoals Vijfhuizen voor lokale diensten. Elk heeft eigen karakteristieken en doelgroepen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Haarlemmermeer?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €800-1300 per maand, afhankelijk van internationale ambities en concurrentie. Google Ads beheer vanaf €500 per maand plus advertentiebudget. Meertalige websiteprojecten vanaf €3500. Haarlemmermeer heeft uitstekende koopkracht en internationale klantpotentie, waardoor de ROI zeer goed kan zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook internationale klanten vanuit Haarlemmermeer?</h3>
                <p className="text-gray-600">
                  Absoluut! Haarlemmermeer is de perfecte uitvalsbasis voor internationale marketing. Veel bedrijven bedienen heel Europa, Amerika en Azië via Schiphol connecties. De strategie wordt aangepast voor internationale SEO, meertalige content en wereldwijde doelgroepen, terwijl lokale aanwezigheid behouden blijft.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Haarlemmermeer?</h3>
                <p className="text-gray-600">
                  Eerste verbeteringen zie je vaak binnen 2-3 maanden lokaal, internationale resultaten binnen 4-8 maanden. Google Ads leveren directe zichtbaarheid. De concurrentie varieert per sector - lokaal nog overzichtelijk, internationaal professioneler, maar met de juiste strategie zijn uitstekende resultaten haalbaar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Haarlemmermeer?</h3>
                <p className="text-gray-600">
                  Logistiek en transport (Schiphol voordeel), internationale handel, hotels en hospitality, technologie en IT, consultancy en zakelijke dienstverlening, en lokale diensten voor expats. Haarlemmermeer's unieke positie biedt kansen voor zowel mondiale als lokale ondernemingen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Haarlemmermeer?</h3>
                <p className="text-gray-600">
                  Google My Business en LinkedIn kun je zelf opstarten voor basis zichtbaarheid. Maar in een internationale markt als Haarlemmermeer is professionele expertise cruciaal. Meertalige SEO, internationale targeting en culturele nuances vereisen ervaring. Ik begeleid ook graag bij een strategische hybride aanpak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Haarlemmermeer</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de internationale poldergemeente – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Haarlemmermeer - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Hoofddorp • Nieuw-Vennep • Badhoevedorp • Cruquius • Vijfhuizen • Lijnden • Rozenburg • Schiphol-Rijk • Zwanenburg • Lisserbroek • Amsterdam • Haarlem
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}