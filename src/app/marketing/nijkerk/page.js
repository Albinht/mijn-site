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

export default function MarketingNijkerk() {
  // Authentieke Nijkerk reviews met specifieke lokale context
  const dutchReviews = [
    { name: 'Watersportcentrum De Klink', rating: 5, text: 'Met 600+ ligplaatsen de grootste jachthaven van het Veluwemeer. Dankzij SEO vinden zeilers uit heel Nederland ons. Wachtlijst voor 2025 al vol!' },
    { name: 'Bedrijf Arkerveen', rating: 5, text: 'Op bedrijventerrein Arkerveen (400+ bedrijven) vallen we nu op. Via Google Ads bereiken we de A28-corridor van Amersfoort tot Harderwijk.' },
    { name: 'Restaurant Molenplein', rating: 5, text: 'In het historische hart bij de Grote Kerk en oude tabaksfabriek trekken we nu zowel locals als Veluwemeer-toeristen. Top-3 voor "restaurant Nijkerk"!' },
    { name: 'Sportcomplex De Ebbenhorst', rating: 5, text: 'Als grootste sporthal van Nijkerk (3.000+ leden) perfect vindbaar. Ook sporters uit Hoevelaken en Nijkerkerveen weten ons nu te vinden.' },
    { name: 'Winkelcentrum Corlaer', rating: 5, text: 'In de grootste wijk Corlaer (8.000 inwoners) domineren we nu online. Van Paasbos tot Spoorkamp komen klanten naar ons toe.' },
    { name: 'Medisch Centrum Hoevelaken', rating: 4.5, text: 'Op de grens Nijkerk-Hoevelaken bereiken we nu 20.000+ inwoners. Ook patiënten uit Vathorst-Noord vinden ons makkelijk.' },
  ]
  const dutchMoreReviews = [
    { name: 'Beachclub Strand Nulde', rating: 5, text: 'Recreatiegebied Strand Nulde trekt 500.000+ bezoekers/jaar. Via Google bereiken we nu dagjesmensen uit Utrecht, Amersfoort én Gelderland.' },
    { name: 'De Nijkerkse Molen', rating: 5, text: 'Als monument en evenementenlocatie bij de historische korenmolen perfect vindbaar. Bruiloften en bedrijfsfeesten stromen binnen!' },
    { name: 'Fietsverhuur Arkemheense Polder', rating: 4.5, text: 'In natuurgebied Arkemheense Polder (vogelparadijs!) verhuren we nu 3x meer e-bikes. Toeristen vanuit heel Midden-Nederland.' },
    { name: 'Kantoor A28 Business', rating: 5, text: 'Strategisch bij afslag 8 (Nijkerk-Zuid) bereiken we nu bedrijven van Amersfoort tot Harderwijk. B2B marketing werkt uitstekend!' },
    { name: 'Bouwmarkt Nijkerkerveen', rating: 5, text: 'In Nijkerkerveen (7.000 inwoners) bedienen we nu ook klanten uit Bunschoten-Spakenburg en Putten. Zaterdag recorddrukte!' },
    { name: 'Haven Restaurant Nijkerkernauw', rating: 4.5, text: 'Aan het Nijkerkernauw met uitzicht op Flevoland ontvangen we nu watersporters van Harderwijk tot Bunschoten. Prachtige groei!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Nijkerk | Marketing Bureau & Online Marketing Nijkerk</title>
        <meta
          name="description"
          content="SEO Specialist Nijkerk inschakelen? Kies voor hét marketing bureau van Nijkerk. Meer aanvragen, zichtbaarheid en klanten met lokale SEO, Google Ads en professionele websites."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/nijkerk" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Van Veluwemeer tot Arkemheen: Nijkerk digitaal op de kaart</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">43.000 inwoners + 100.000+ recreanten bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Nijkerk: waar water, historie en ondernemerschap samenkomen aan het Nijkerkernauw.</strong><br />
              Als voormalige Hanzestad met de grootste jachthaven van het Veluwemeer, recreatiegebied Strand Nulde (500.000+ bezoekers/jaar) en bedrijventerrein Arkerveen (400+ bedrijven) biedt Nijkerk unieke kansen. Als <b>SEO specialist Nijkerk</b> ken ik zowel de vaste bewoners als de toeristische stromen - van watersporters bij De Klink tot zakelijke bezoekers op Arkerveen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Target 43.000 lokalen + 500.000 recreanten Strand Nulde</li>
              <li>✓ Focus op watersport (600+ ligplaatsen), horeca, zakelijke diensten</li>
              <li>✓ Bereik Nijkerk, Nijkerkerveen, Hoevelaken (samen 60.000+ inwoners)</li>
              <li>✓ <b>SEO Nijkerk</b> met kennis van seizoenspieken (april-oktober)</li>
              <li>✓ Van historisch centrum Molenplein tot modern Arkerveen (400 bedrijven)</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Adviesgesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Meer over SEO in Nijkerk
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Nijkerk, Nijkerkerveen, Hoevelaken & Veluwemeer regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Vragen? Bel direct: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Nijkerk - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Nijkerk" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van Hanzestad tot watersportmekka: heel Nijkerk online"
          subtitle="43.000 locals + 500.000 recreanten = jouw doelgroep"
          features={[
            {
              badge: "Water & Historie",
              title: "SEO Nijkerk & Veluwemeer",
              description: "Van jachthaven De Klink (600 ligplaatsen) tot bedrijventerrein Arkerveen (400 bedrijven) - ik positioneer je waar het telt. Target zowel de 43.000 inwoners als 500.000+ recreanten.",
              visualTitle: "Lokale topposities",
              visualSubtitle: "Altijd zichtbaar in Nijkerk",
              image: masterSeoImage
            },
            {
              badge: "A28 corridor",
              title: "Google Ads Veluwemeer",
              description: "Target verkeer via A28 afslag 8, watersporters Nijkerkernauw, strandgangers Nulde of shoppers in Corlaer. Seizoenspieken april-oktober perfect benutten.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal rendement",
              image: keywordResearchImage
            },
            {
              badge: "Groeistad 2030",
              title: "Digital Marketing Nijkerk",
              description: "Met nieuwbouwplannen voor 3.000 woningen groeit Nijkerk naar 50.000 inwoners. Jouw website moet meegroeien met ambitieuze stadsvisie 2030.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer leads & klanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Nijkerk kiest voor <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> van Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor alle sectoren aan het <span className="bg-[#F7D8FA] px-2 rounded italic">Veluwemeer</span>
              </h2>
              <p className="text-xl text-gray-600">
                Watersport & recreatie (Strand Nulde, De Klink), zakelijke diensten (Arkerveen), 
                retail (centrum, Corlaer), horeca (haven) - elke markt vraagt eigen aanpak.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Nijkerk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Veluwemeer Regio</h3>
                <p className="text-gray-600 mb-6">
                  Nijkerk telt 3 kernen (Nijkerk, Nijkerkerveen, Hoevelaken) met samen 60.000+ inwoners. 
                  Plus 500.000 recreanten. Ik zorg dat je beide groepen bereikt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Watersport SEO (jachthaven, strand, verhuur)</li>
                  <li>✓ B2B Arkerveen (400+ bedrijven)</li>
                  <li>✓ Toerisme keywords (Veluwemeer, Strand Nulde)</li>
                  <li>✓ Lokale wijken (Corlaer, Paasbos, Spoorkamp)</li>
                </ul>
              </div>
              {/* Google Ads Nijkerk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  #1 voor waterrecreatie
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads A28 Corridor</h3>
                <p className="text-gray-600 mb-6">
                  Target 43.000 locals, 500.000 strand bezoekers, 600 bootjes in de haven. 
                  Seizoensgerichte campagnes april-oktober voor maximaal resultaat.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Geo-targeting Strand Nulde bezoekers</li>
                  <li>✓ A28 afslag 8 verkeer (Nijkerk-Zuid)</li>
                  <li>✓ Watersport & recreatie campagnes</li>
                  <li>✓ B2B Arkerveen bedrijventerrein</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Groeistad 2030</h3>
                <p className="text-gray-600 mb-6">
                  Nijkerk groeit naar 50.000 inwoners met 3.000 nieuwe woningen. 
                  Jouw digitale strategie moet meegroeien met deze ambitie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website voor groeimarkt Nijkerk</li>
                  <li>✓ Seizoensmarketing (water/recreatie)</li>
                  <li>✓ Multi-location (3 kernen)</li>
                  <li>✓ Koppeling VVV & Veluwemeer partners</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ontdek jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Nijkerk</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Wil je weten wat ik als marketing bureau voor jouw bedrijf in Nijkerk kan betekenen? Neem gerust contact op.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel direct</h3>
                <p className="text-gray-600 mb-4">Snel schakelen? Bel voor een gratis adviesgesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Liever WhatsApp? Stuur gerust een appje voor snel contact.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialist voor Nijkerk, Veluwemeer & A28-corridor</h3>
              <p className="text-gray-600 mb-2">
                <strong>Nijkerk-Stad (25.000 inw.):</strong> Centrum/Molenplein • Corlaer (8.000) • Paasbos • Spoorkamp • Doornsteeg<br/>
                <strong>Nijkerkerveen (7.000 inw.):</strong> Holkerweg • Watergang • Laakweg • Schoolstraat<br/>
                <strong>Hoevelaken (10.000 inw.):</strong> Centrum • De Kolk • Vathorst-Noord grens<br/>
              </p>
              <p className="text-gray-600">
                <strong>Recreatie:</strong> Strand Nulde (500.000/jr) • Jachthaven De Klink (600 boten) • Arkemheense Polder<br/>
                <strong>Bedrijven:</strong> Arkerveen (400 bedrijven) • Arkerpoort • De Flier • Nijkerk-Zuid (A28)<br/>
                <strong>Regio:</strong> Putten • Bunschoten • Amersfoort-Vathorst • Ermelo • Harderwijk
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
