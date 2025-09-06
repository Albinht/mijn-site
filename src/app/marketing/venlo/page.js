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

export default function MarketingVenlo() {
  // Lokale Venlo reviews - Poort naar Duitsland
  const dutchReviews = [
    { name: 'Restaurant Markt Venlo', rating: 5, text: 'Op de gezellige Markt in het centrum krijgen we nu Duitse toeristen én locals. Het grensverkeer zorgt voor perfecte omzetgroei!' },
    { name: 'Logistics Bedrijf Trade Port', rating: 5, text: 'Op Trade Port Noord bedienen we internationale klanten. Door meertalige SEO bereiken we nu bedrijven uit Nederland, Duitsland en België!' },
    { name: 'Tandarts Blerick', rating: 5, text: 'In Blerick veel gezinnen en Duitse patiënten. Door grensoverschrijdende marketing hebben we een internationale praktijk opgebouwd.' },
    { name: 'Hotel Floriade Terrein', rating: 4.5, text: 'Het Floriade terrein trekt veel bezoekers. Onze boekingen zijn gestegen door online zichtbaarheid in Nederland én Duitsland!' },
    { name: 'IT Consultancy Innovatoren', rating: 5, text: 'In de moderne wijk bedienen we tech-bedrijven uit de Euregio. B2B SEO brengt ons klanten uit drie landen!' },
    { name: 'Autogarage Tegelen', rating: 5, text: 'Tegelen ligt aan de Duitse grens. We krijgen nu klanten uit beide landen voor onze specialistische autoservices.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Velden', rating: 5, text: 'Velden is een groeiende wijk. Onze salon wordt nu gevonden door klanten uit heel Noord-Limburg en West-Duitsland.' },
    { name: 'Fysiotherapie Boekend', rating: 4.5, text: 'In Boekend een hechte gemeenschap. Onze praktijk wordt gevonden door patiënten die kwaliteit en persoonlijke aandacht zoeken.' },
    { name: 'Makelaar Hagerhof', rating: 5, text: 'Hagerhof heeft veel potentieel voor woningverkoop. Duitse kopers vinden ons nu ook - grensoverschrijdende vastgoedmarkt!' },
    { name: 'Schoonheidssalon Kaldenkerken', rating: 5, text: 'Kaldenkerken heeft rust en groen. Onze salon trekt nu klanten uit heel de regio - ook uit Duistland!' },
    { name: 'Bouwbedrijf Steyl', rating: 4.5, text: 'Het pittoreske Steyl heeft veel monumenten. Door SEO krijgen we restauratieopdrachten en nieuwbouwprojecten uit beide landen.' },
    { name: 'Sportschool Lomm', rating: 5, text: 'In Lomm een actieve gemeenschap. Onze gym heeft leden uit Nederland én Duitsland - grenzeloze fitness!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Venlo | Marketing Bureau & Online Marketing Venlo</title>
        <meta
          name="description"
          content="SEO Specialist Venlo inschakelen? Kies voor hét marketing bureau in Venlo. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/venlo" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Venlo: Internationale Grensstad</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">100.000 Venlonaars wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Venlo: waar Nederlandse ondernemingszin en Europese kansen samenkomen.</strong><br />
              Van de historische Markt in het gezellige centrum tot het innovatieve Trade Port Noord, van het karakteristieke Blerick tot het groene Floriade-erfgoed - Venlo combineert lokale charme met internationale handel. Met 100.000+ inwoners als poort naar Duitsland biedt Venlo ondernemers unieke kansen in een grensoverschrijdende markt. Als <b>SEO specialist Venlo</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze internationale handelsstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Venlo: zichtbaar in Nederland én Duitsland</li>
              <li>✓ Google Ads: internationaal bereik naar 100.000+ inwoners</li>
              <li>✓ Speciaal voor grensoverschrijdende bedrijven</li>
              <li>✓ <b>SEO Venlo</b> met focus op Euregio markt</li>
              <li>✓ Meertalige websites voor internationale handel</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Venlo cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Venlo & de Euregio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Venlo - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Venlo" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Venlo met doelgerichte marketing"
          subtitle="Digitale groei voor de internationale grensstad"
          features={[
            {
              badge: "SEO Venlo",
              title: "SEO Specialist Venlo",
              description: "Venlo heeft unieke voordelen door zijn ligging aan de Duitse grens. Ik zorg dat jouw bedrijf opvalt in zowel de Nederlandse als internationale markt door strategisch bovenaan te staan en klanten aan te trekken uit de hele Euregio.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Internationaal zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Venlo",
              description: "Direct zichtbaar voor 100.000+ Venlonaars plus Duitse bezoekers en zakelijke reizigers. Adverteer meertalig van centrum tot Trade Port en zie direct resultaat in je internationale agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Grensoverschrijdend",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Venlo",
              description: "Internationale, professionele websites die passen bij Venlo's handelsgeest en zorgen voor meer conversies uit Nederland, Duitsland en de hele Euregio. Meertalige mogelijkheden inbegrepen.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Internationale uitstraling",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Venlo groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Venlo</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale ondernemers tot internationale bedrijven – ik help ambitieuze ondernemers online groeien in de grensoverschrijdende markt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Venlo */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Venlo</h3>
                <p className="text-gray-600 mb-6">
                  In een internationale grensstad als Venlo is strategische meertalige zichtbaarheid essentieel. Word gevonden door klanten uit Nederland én Duitsland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalige SEO Nederlands/Duits</li>
                  <li>✓ Grensoverschrijdende zoekwoordenstrategie</li>
                  <li>✓ Internationale content & linkbuilding</li>
                  <li>✓ Reviews in meerdere talen</li>
                </ul>
              </div>
              {/* Google Ads Venlo */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor internationale bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Venlo</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 100.000+ Venlonaars plus Duitse bezoekers en zakenreizigers met meertalige, strategisch gerichte campagnes voor maximale grensoverschrijdende impact.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalige advertentiecampagnes</li>
                  <li>✓ Grensoverschrijdende targeting</li>
                  <li>✓ Internationale optimalisatie</li>
                  <li>✓ Cross-border resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Venlo's internationale handelskarakter en zorgen voor meer conversies uit de hele Euregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Internationaal zakelijk design</li>
                  <li>✓ Meertalige content management</li>
                  <li>✓ Grensoverschrijdende conversie</li>
                  <li>✓ Euregio markt geoptimaliseerd</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Venlo</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Venlo?</h3>
                <p className="text-gray-600">
                  Venlo heeft een unieke positie als grensstad met intense handelsrelaties met Duitsland. Met 100.000+ inwoners plus duizenden Duitse bezoekers is meertalige lokale zichtbaarheid cruciaal. Bedrijven kunnen hun markt verdubbelen door beide landen te bedienen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Venlo van andere steden?</h3>
                <p className="text-gray-600">
                  Venlo is uniek door zijn grensligging en internationale karakter. Marketing moet daarom meertalig, cultureel sensitief, en grensoverschrijdend zijn. Duitse klanten hebben andere verwachtingen dan Nederlandse, en Venlo biedt kansen in beide markten - een balans tussen lokaal en internationaal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Venlo zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Markt) voor retail en horeca, Trade Port Noord voor logistiek en industrie, Blerick voor lokale diensten, het Floriade terrein voor toerisme, Tegelen voor grenshandel, en moderne wijken voor gezinsdiensten. Elke locatie heeft eigen Nederlandse en Duitse doelgroepen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Venlo?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €850-1400 per maand voor meertalige optimalisatie. Google Ads beheer vanaf €550 per maand plus advertentiebudget. Meertalige websiteprojecten vanaf €3500. Venlo's internationale markt rechtvaardigt deze investering door toegang tot twee landen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook Duitse klanten?</h3>
                <p className="text-gray-600">
                  Absoluut! Dat is juist Venlo's grote kracht. Door meertalige SEO en Duitse Google Ads kunnen bedrijven hun markt verdubbelen. Veel Venlose bedrijven bedienen succesvol klanten uit Mönchengladbach, Düsseldorf, Krefeld en heel Noordrijn-Westfalen. Grensoverschrijdende marketing is onze specialiteit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Venlo?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 4-6 maanden. Meertalige Google Ads geven directe internationale zichtbaarheid. Venlo's unieke grensligging betekent dat succesvolle marketing direct toegang geeft tot een veel grotere markt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Venlo?</h3>
                <p className="text-gray-600">
                  Logistiek en transport, grenshandel en retail, internationale zakelijke dienstverlening, toerisme en horeca, automotive (Duitse klanten), en technologie. Venlo's ligging en Trade Port maken het ideaal voor bedrijven die internationale markten willen bedienen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Venlo?</h3>
                <p className="text-gray-600">
                  Basis marketing kun je zelf doen, maar Venlo's internationale kansen vereisen expertise in meertalige SEO, Duitse Google Ads, cross-border e-commerce, en culturele verschillen. Voor echte groei in deze unieke markt heb je professionele begeleiding nodig die beide landen begrijpt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Venlo</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de internationale grensmarkt – altijd eerlijk advies en meertalige expertise.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Venlo - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Venlo Centrum • Markt • Blerick • Trade Port Noord • Velden • Boekend • Hagerhof • Kaldenkerken • Steyl • Tegelen • Lomm • Mönchengladbach (DE) • Düsseldorf (DE) • Krefeld (DE) • Roermond
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}