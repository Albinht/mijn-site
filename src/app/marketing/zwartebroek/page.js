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

export default function MarketingZwartebroek() {
  // Lokale Zwartebroek reviews - Focus op familiebedrijven en lokale gemeenschap
  const dutchReviews = [
    { name: 'Bouwbedrijf Van Zwartebroek', rating: 5, text: 'Als familiebedrijf wilden we onze waarden online uitdragen. Nu vinden klanten uit heel de regio ons voor betrouwbaar vakwerk!' },
    { name: 'Christelijke Boekhandel Silo', rating: 5, text: 'Onze webshop bereikt nu de hele reformatorische gemeenschap. Online verkoop gestegen met 200%!' },
    { name: 'Vishandel Zwartebroek', rating: 5, text: 'Vrijdagse visdag wordt nu perfect gepromoot. Klanten uit Barneveld en Nijkerk komen speciaal naar ons toe.' },
    { name: 'Klusbedrijf De Vakman', rating: 5, text: 'Marketing die past bij onze normen en waarden. Meer opdrachten uit de gemeenschap zonder onze identiteit te verliezen.' },
    { name: 'Bakkerij t Stoepje', rating: 5, text: 'Onze ambachtelijke producten worden nu ook online besteld. Vooral de oliebollen in december zijn een hit!' },
    { name: 'Autoservice Zwartebroek', rating: 4.5, text: 'Betrouwbare partner voor online marketing. Klanten waarderen onze eerlijke service, nu ook digitaal zichtbaar.' },
  ]
  const dutchMoreReviews = [
    { name: 'Tuinderij De Morgenster', rating: 5, text: 'Seizoensgroenten verkopen we nu aan heel Zwartebroek-Terschuur. Website met bestelmodule werkt perfect!' },
    { name: 'Timmer- en Onderhoudsbedrijf', rating: 5, text: 'Als ZZPer nu veel beter vindbaar. Opdrachten komen vooral uit eigen gemeenschap, precies wat we wilden.' },
    { name: 'Kinderopvang De Regenboog', rating: 4.5, text: 'Ouders vinden ons nu makkelijk online. Wachtlijst is gegroeid, vooral uit reformatorische gezinnen.' },
    { name: 'Rijschool Vertrouwd', rating: 5, text: 'Jongeren uit Zwartebroek en Terschuur boeken nu online rijlessen. Agenda zit bomvol!' },
    { name: 'Kapsalon Haar & Zo', rating: 5, text: 'Dames uit de hele regio komen nu naar onze salon. Online afspraken maken werkt geweldig.' },
    { name: 'Fietsenmaker Zwartebroek', rating: 4.5, text: 'E-bike reparaties adverteren werkt uitstekend. Senioren uit de buurt weten ons nu te vinden.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>Marketing Bureau Zwartebroek-Terschuur | SEO Specialist Lokale Gemeenschap</title>
        <meta
          name="description"
          content="Marketing bureau Zwartebroek voor familiebedrijven en lokale ondernemers. Respectvolle online marketing die past bij de gemeenschap. Meer klanten uit Zwartebroek-Terschuur!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/zwartebroek" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau Zwartebroek voor Familiebedrijven</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Met respect voor traditie</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Online groeien met behoud van identiteit en waarden</strong><br />
              Als <b>marketing specialist in Zwartebroek-Terschuur</b> begrijp ik de lokale gemeenschap. Ik help familiebedrijven, ambachtslieden en lokale ondernemers groeien met marketing die past bij jullie normen en waarden. Van bakker tot bouwbedrijf - authentiek en betrouwbaar online.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Marketing met respect voor christelijke identiteit</li>
              <li>✓ Focus op vertrouwen en vakmanschap</li>
              <li>✓ Lokale SEO voor Zwartebroek, Terschuur en omgeving</li>
              <li>✓ Gemeenschapsgerichte aanpak</li>
              <li>✓ Mond-tot-mond reclame digitaal versterken</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="a" href="tel:+31648728828">
                Vrijblijvend kennismaken <span>→</span>
              </Button>
              <Button variant="secondary" as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer">
                WhatsApp Contact
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mt-2 sm:mt-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Lokaal bereikbaar
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Trotse partner van ondernemers in Zwartebroek-Terschuur</p>
            <p className="mt-4 text-sm text-green-700">Ook 's avonds bereikbaar: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing resultaten Zwartebroek - Lokale groei"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Zwartebroek" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP / FEATURE SECTION */}
        <FeatureSection
          title="Marketing die Past bij de Zwartebroekse Gemeenschap"
          subtitle="Groeien met behoud van identiteit en lokale verbondenheid"
          features={[
            {
              badge: "Gemeenschaps SEO",
              title: "Lokale Vindbaarheid Zwartebroek",
              description: "Word gevonden door jouw dorpsgenoten en klanten uit de regio. Van 'timmerman Zwartebroek' tot 'christelijke boekhandel Barneveld'. Ik zorg dat de juiste mensen jouw bedrijf vinden, met content die past bij de gemeenschap.",
              visualTitle: "#1 in Zwartebroek",
              visualSubtitle: "Lokaal sterk",
              image: masterSeoImage
            },
            {
              badge: "Vertrouwde Marketing",
              title: "Campagnes met Normen & Waarden",
              description: "Marketing die respectvol is en past bij de reformatorische gemeenschap. Geen opdringerige reclame, maar bouwen aan vertrouwen. Focus op vakmanschap, betrouwbaarheid en persoonlijke service. Gemiddeld 40% meer klanten uit eigen kring.",
              visualTitle: "Authentiek",
              visualSubtitle: "& Betrouwbaar",
              image: keywordResearchImage
            },
            {
              badge: "Familie Websites",
              title: "Websites voor Familiebedrijven",
              description: "Professionele websites die jullie verhaal vertellen. Van generatie op generatie, nu ook online. Met ruimte voor bedrijfsgeschiedenis, familie-waarden en vakmanschap. Inclusief testimonials uit de gemeenschap voor extra vertrouwen.",
              visualTitle: "3e generatie",
              visualSubtitle: "Nu ook online",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Zwartebroek</span> groeien online"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Aanpak voor <span className="bg-[#F7D8FA] px-2 rounded italic">Zwartebroek-Terschuur</span>
              </h2>
              <p className="text-lg text-gray-600">
                Respectvolle groei voor familiebedrijven en lokale ondernemers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lokale SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dorps-SEO Strategie</h3>
                <p className="text-gray-600 mb-6">
                  Zichtbaar worden in Zwartebroek, Terschuur en omliggende dorpen. SEO die de gemeenschap bereikt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf voor lokaal</li>
                  <li>✓ Optimalisatie dorpsgericht</li>
                  <li>✓ Reviews uit de gemeenschap</li>
                  <li>✓ Lokale samenwerkingen online</li>
                </ul>
              </div>
              {/* Gemeenschapsmarketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in de regio
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gemeenschapsgerichte Campagnes</h3>
                <p className="text-gray-600 mb-6">
                  Marketing die aansluit bij lokale evenementen, seizoenen en tradities van Zwartebroek.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Koningsdag & Dankdag promoties</li>
                  <li>✓ Seizoensgebonden campagnes</li>
                  <li>✓ Kerkelijke feestdagen</li>
                  <li>✓ Dorpsfeest zichtbaarheid</li>
                </ul>
              </div>
              {/* Familie Branding */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Familiebedrijf Online</h3>
                <p className="text-gray-600 mb-6">
                  Jullie familiegeschiedenis en vakmanschap online zichtbaar maken voor nieuwe generaties klanten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Bedrijfsverhaal vertellen</li>
                  <li>✓ Generaties vakmanschap</li>
                  <li>✓ Lokale betrokkenheid tonen</li>
                  <li>✓ Vertrouwen opbouwen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Veelgestelde Vragen Marketing <span className="bg-[#F7D8FA] px-2 rounded italic">Zwartebroek</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Past online marketing bij onze christelijke identiteit?</h3>
                <p className="text-gray-600">
                  Absoluut! Ik werk met veel reformatorische bedrijven en respecteer jullie waarden volledig. Marketing draait om eerlijk je verhaal vertellen en betrouwbaar gevonden worden. Geen opdringerige technieken, maar opbouwen van vertrouwen en zichtbaarheid binnen de gemeenschap.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een familiebedrijf in Zwartebroek?</h3>
                <p className="text-gray-600">
                  Een basis marketingpakket voor lokale bedrijven start vanaf €650 per maand. Dit omvat lokale SEO, Google Mijn Bedrijf beheer, en basis website onderhoud. Voor familiebedrijven met meerdere diensten adviseer ik vaak een groter pakket vanaf €950. ROI ligt gemiddeld op 300-400%.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik klanten buiten mijn eigen kerkelijke gemeente?</h3>
                <p className="text-gray-600">
                  Door te focussen op vakmanschap en betrouwbaarheid in plaats van alleen denominatie. SEO op 'betrouwbare timmerman Barneveld' of 'eerlijke automonteur Nijkerk' trekt klanten die waarde hechten aan integriteit. Reviews van tevreden klanten doen de rest.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt social media marketing voor Zwartebroek?</h3>
                <p className="text-gray-600">
                  Facebook werkt uitstekend voor lokale bedrijven in Zwartebroek! Veel dorpsgenoten zijn actief in lokale Facebook-groepen. LinkedIn werkt goed voor B2B. Instagram minder, tenzij je een jong publiek zoekt. WhatsApp Business is ideaal voor direct klantcontact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe zorg ik dat mijn bedrijf gevonden wordt op zondag gesloten?</h3>
                <p className="text-gray-600">
                  Dit communiceren we duidelijk op Google Mijn Bedrijf en de website. Veel klanten waarderen juist dat je principieel bent. Ik help met automatische berichten op zondag en alternatieven zoals online offertes aanvragen voor maandag. Dit versterkt vaak het vertrouwen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Samen Jouw <span className="bg-[#F7D8FA] px-2 rounded italic">Familiebedrijf</span> Laten Groeien
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Met respect voor traditie en oog voor de toekomst. Laten we vrijblijvend kennismaken.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bel gerust voor een open gesprek over de mogelijkheden. Ook 's avonds bereikbaar.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor snelle vragen of het maken van een afspraak.</p>
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
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Zwartebroek-Terschuur</h3>
              <p className="text-gray-600">
                Zwartebroek • Terschuur • Barneveld • Nijkerk • Putten • Voorthuizen • Hoevelaken • Amersfoort • Leusden
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Trotse partner van familiebedrijven - van ambachtelijke bakker tot moderne bouwonderneming
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}