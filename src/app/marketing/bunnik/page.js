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

export default function MarketingBunnik() {
  // Lokale Bunnik reviews - historisch dorp tussen Utrecht en Heuvelrug
  const dutchReviews = [
    { name: 'Restaurant Fort Rhijnauwen', rating: 5, text: 'Ons historische fort trekt nu veel meer bezoekers uit Utrecht en de Heuvelrug. Perfect gepositioneerd voor "restaurant Bunnik" en "fort evenementen"!' },
    { name: 'Fysiotherapie Bunnik Centrum', rating: 5, text: 'Vanuit onze praktijk aan de Schoudermantel bereiken we nu heel Bunnik en Odijk. De lokale SEO werkt fantastisch voor ons.' },
    { name: 'Aannemersbedrijf Kerklaan', rating: 5, text: 'Als lokale aannemer krijgen we nu opdrachten uit heel Bunnik, Odijk en Werkhoven. De Google Ads campagne levert wekelijks nieuwe klanten.' },
    { name: 'Bloemist Markt Bunnik', rating: 5, text: 'Onze winkel aan de Markt wordt nu gevonden door mensen uit de hele gemeente. Van bruiloften tot rouwwerk - constant nieuwe opdrachten.' },
    { name: 'Sportschool De Rijn', rating: 4.5, text: 'Met onze locatie nabij de A12 trekken we nu leden uit Bunnik, Houten en Zeist. De online marketing heeft ons ledenaantal verdubbeld.' },
    { name: 'Kinderdagverblijf Amelisweerd', rating: 5, text: 'Ouders uit heel Bunnik en omliggende wijken vinden ons nu makkelijk. Wachtlijst is weer gevuld dankzij de SEO strategie.' },
  ]
  const dutchMoreReviews = [
    { name: 'Makelaar Bunnik Vastgoed', rating: 5, text: 'In de concurrerende woningmarkt van Bunnik staan we nu bovenaan. Meer verkopen en aankopen dankzij sterke online positionering.' },
    { name: 'Tandarts Odijkerweg', rating: 5, text: 'Onze praktijk aan de Odijkerweg krijgt nu patiënten uit heel Bunnik-Zuid en Odijk. Perfect bereik in de regio.' },
    { name: 'Autogarage Station Bunnik', rating: 4.5, text: 'Dichtbij station Bunnik zijn we nu dé garage voor forenzen. De lokale campagnes werken uitstekend voor onderhoud en APK.' },
    { name: 'Kapsalon Rhijnhof', rating: 5, text: 'In winkelcentrum Rhijnhof hebben we veel concurrentie, maar staan nu bovenaan. Agenda zit weer vol met nieuwe klanten.' },
    { name: 'Schildersbedrijf Werkhoven', rating: 5, text: 'Vanuit Werkhoven bedienen we heel gemeente Bunnik. De online strategie heeft ons bereik enorm vergroot.' },
    { name: 'Hoveniersbedrijf Kromme Rijn', rating: 4.5, text: 'Voor tuinonderhoud in de groene wijken van Bunnik worden we nu als eerste gevonden. Structurele groei in vaste klanten.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Bunnik | Online Marketing Bureau & Webdesign Bunnik</title>
        <meta
          name="description"
          content="SEO Specialist Bunnik nodig? Lokaal marketing bureau voor meer klanten in Bunnik, Odijk en Werkhoven. Profiteer van sterke SEO, Google Ads en moderne websites."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/bunnik" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Van Romeins Fectio tot modern Bunnik: jouw bedrijf op de kaart</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">15.000 inwoners, grenzeloze mogelijkheden</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Bunnik: waar Romeinse historie en moderne ambitie elkaar ontmoeten.</strong><br />
              Gelegen op de historische Limes met Fort Rhijnauwen en landgoed Amelisweerd, tussen Utrecht (10 min) en de Utrechtse Heuvelrug. Met kernen Bunnik, Odijk en Werkhoven biedt deze groene gemeente unieke kansen voor lokale ondernemers. Als <b>SEO specialist Bunnik</b> positioneer ik jouw bedrijf strategisch tussen de 1.200+ bedrijven die hier floreren - van ambachtelijke werkplaats tot moderne dienstverlener aan de A12.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Bunnik: dominant in Google voor jouw regio</li>
              <li>✓ Google Ads: bereik Utrecht-Oost en Heuvelrug effectief</li>
              <li>✓ Speciaal voor MKB, winkels en ZZP'ers in gemeente Bunnik</li>
              <li>✓ <b>Online marketing Bunnik</b> met meetbaar resultaat</li>
              <li>✓ Websites die de groene, dorpse sfeer perfect vertalen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start gratis adviesgesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk lokale successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Bunnik, Odijk, Werkhoven & omstreken</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Bunnik - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Bunnik" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Lokale groei voor ondernemers in Bunnik"
          subtitle="Van dorpskern tot bedrijventerrein - overal vindbaar"
          features={[
            {
              badge: "SEO Bunnik",
              title: "Lokale SEO Specialist Bunnik",
              description: "Profiteer van Bunniks strategische ligging tussen Utrecht en de Heuvelrug. Ik zorg dat klanten uit de hele regio jouw bedrijf vinden, van Station Bunnik tot Fort Rhijnauwen.",
              visualTitle: "Regionaal sterk",
              visualSubtitle: "Lokaal verankerd",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Bunnik & Regio",
              description: "Bereik forensen, toeristen en lokale inwoners met gerichte campagnes. Van Amelisweerd bezoekers tot Utrecht-Oost bewoners - jouw ideale klanten zien je advertenties.",
              visualTitle: "Smart targeting",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Conversie",
              title: "Website & Marketing Bunnik",
              description: "Moderne websites die de groene, authentieke uitstraling van Bunnik weerspiegelen. Perfect voor lokale bedrijven die willen groeien zonder hun dorpse karakter te verliezen.",
              visualTitle: "Professioneel",
              visualSubtitle: "Persoonlijk",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Bunnik groeit online met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Online Marketing & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Bunnik</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van historisch centrum tot moderne bedrijventerreinen – jouw groei begint hier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Bunnik */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Bunnik</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden door inwoners van Bunnik, Odijk en Werkhoven. Plus trek klanten uit Utrecht-Oost en de Heuvelrug met slimme lokale SEO.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Lokale zoekwoorden Bunnik & regio</li>
                  <li>✓ Contentmarketing met lokale focus</li>
                  <li>✓ Reviews en reputatiemanagement</li>
                </ul>
              </div>
              {/* Google Ads Bunnik */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in gemeente Bunnik
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Bunnik</h3>
                <p className="text-gray-600 mb-6">
                  Bereik forensen via Station Bunnik, bezoekers van Fort Rhijnauwen en alle lokale inwoners met gerichte advertenties.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale campagnes Bunnik-Odijk-Werkhoven</li>
                  <li>✓ Targeting Utrecht-Oost & Zeist</li>
                  <li>✓ A12 corridor bereik</li>
                  <li>✓ Meet & optimaliseer continu</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Digitale Groei</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die Bunniks groene karakter combineren met moderne functionaliteit. Perfect voor lokale groei.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Webdesign met lokale uitstraling</li>
                  <li>✓ Snelle, veilige websites</li>
                  <li>✓ Conversie-optimalisatie</li>
                  <li>✓ Koppeling met sociale media</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE MARKT INSIGHTS */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom online marketing essentieel is voor <span className="bg-[#F7D8FA] px-2 rounded italic">Bunnik</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategische ligging = Grote kansen</h3>
                <p className="text-gray-700 mb-4">
                  Bunnik ligt op een gouden locatie: 10 minuten van Utrecht CS, direct aan de A12, en grenzend aan de Utrechtse Heuvelrug. Deze positie trekt dagelijks duizenden potentiële klanten:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>8.000+ forensen</strong> via Station Bunnik</li>
                  <li>• <strong>Toeristen</strong> voor Fort Rhijnauwen & Amelisweerd</li>
                  <li>• <strong>Zakelijk verkeer</strong> via A12 corridor</li>
                  <li>• <strong>Recreanten</strong> uit Utrecht en omstreken</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale economie in beweging</h3>
                <p className="text-gray-700 mb-4">
                  Met 1.200+ bedrijven en een groeiende bevolking biedt Bunnik volop kansen. De mix van historie, natuur en moderne voorzieningen trekt nieuwe bewoners en bedrijven:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Groeiende dorpskernen</strong> met koopkrachtige inwoners</li>
                  <li>• <strong>Bedrijventerrein Rumpsterweg</strong> in ontwikkeling</li>
                  <li>• <strong>Hoogopgeleide bevolking</strong> (45% HBO+)</li>
                  <li>• <strong>Sterke lokale binding</strong> en ondernemersnetwerk</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Jouw concurrenten in Bunnik zijn al online actief</h3>
              <p className="text-gray-700 text-center">
                Terwijl jij dit leest, vinden klanten jouw concurrenten via Google. Met de juiste online strategie sta jij straks bovenaan. 
                Van lokale zoekopdrachten tot regionale campagnes - ik help je groeien in Bunnik en ver daarbuiten.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Bunnik</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt lokale SEO ook voor een klein dorp als Bunnik?</h3>
                <p className="text-gray-700">
                  Juist in Bunnik werkt lokale SEO uitstekend! Met 15.000 inwoners plus dagelijks forensen- en toeristenverkeer is er voldoende zoekvolume. 
                  Bovendien bereik je via Bunnik ook Utrecht-Oost, Zeist en Houten - samen goed voor 500.000+ potentiële klanten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor een bedrijf in Bunnik?</h3>
                <p className="text-gray-700">
                  Voor lokale bedrijven in Bunnik start SEO vanaf €497 per maand. Dit includeert Google Mijn Bedrijf optimalisatie, 
                  lokale contentcreatie en maandelijkse rapportages. Voor regionale campagnes (Utrecht provincie) rekenen we vanaf €797 per maand.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie ik resultaat van online marketing?</h3>
                <p className="text-gray-700">
                  Google Ads levert direct resultaat - vaak al binnen 24 uur eerste aanvragen. SEO heeft 3-6 maanden nodig voor sterke posities, 
                  maar eerste verbeteringen zie je meestal binnen 4-8 weken. Voor Bunnik focussen we eerst op quick wins in Odijk en Werkhoven.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik ik ook klanten uit Utrecht met jullie aanpak?</h3>
                <p className="text-gray-700">
                  Absoluut! Bunnik ligt op slechts 10 minuten van Utrecht. We targeten specifiek Utrecht-Oost, Rijnsweerd en Lunetten - 
                  wijken die geografisch dichtbij liggen. Veel Utrechters zoeken diensten "bij Utrecht" en vinden dan jouw bedrijf in Bunnik.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed in Bunnik?</h3>
                <p className="text-gray-700">
                  Horeca rond Fort Rhijnauwen, bouwbedrijven (veel nieuwbouw), ZZP'ers en consultants (thuiswerkers), gezondheidscentra, 
                  en recreatiebedrijven doen het uitstekend. Ook B2B dienstverleners profiteren van de nabijheid van Utrecht en de A12.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om te groeien met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Bunnik</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Laat je bedrijf opvallen tussen Utrecht en de Heuvelrug. Gratis adviesgesprek voor ondernemers uit Bunnik, Odijk en Werkhoven.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Liever direct schakelen? Bel voor een vrijblijvend gesprek over jouw online groeikansen.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Stuur een WhatsApp voor snelle vragen of het plannen van een kennismaking.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied vanuit Bunnik</h3>
              <p className="text-gray-600">
                <strong>Gemeente Bunnik:</strong> Bunnik • Odijk • Werkhoven • Vechten<br />
                <strong>Directe regio:</strong> Utrecht-Oost • Zeist • Houten • Driebergen • Wijk bij Duurstede • Cothen • Langbroek<br />
                <strong>Bereikbaar via A12:</strong> Utrecht • Veenendaal • Arnhem • Den Haag
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}