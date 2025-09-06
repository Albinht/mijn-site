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

export default function MarketingMiddelburg() {
  // Lokale Middelburg reviews - hoofdstad van Zeeland met rijke maritieme historie en sterke toeristische sector
  const dutchReviews = [
    { name: 'Hotel De Abdij', rating: 5, text: 'Ons historische hotel naast de Abdij krijgt nu gasten uit heel Europa. Lokale SEO heeft onze internationale zichtbaarheid verdriedubbeld!' },
    { name: 'Restaurant Scherp', rating: 5, text: 'In het hart van de binnenstad zijn we uitgegroeid tot culinaire hotspot. Google Ads brengt zowel toeristen als locals naar onze tafels.' },
    { name: 'Advocatenkantoor Lange Delft', rating: 4.5, text: 'Vanaf onze kantoren aan de Lange Delft bedienen we heel Walcheren. Digitale marketing heeft ons bereik enorm vergroot in de regio.' },
    { name: 'Zeilschool Veerse Meer', rating: 5, text: 'Vanuit Middelburg trekken we zeilliefhebbers uit heel Nederland. Maritime SEO heeft ons seizoen flink verlengd!' },
    { name: 'Boetiek Lange Noordstraat', rating: 5, text: 'In de gezellige winkelstraat staan we nu bovenaan voor "mode Middelburg". Toeristen en locals vinden ons perfect online.' },
    { name: 'Tandartspraktijk Abdijplein', rating: 4.5, text: 'Op het prachtige Abdijplein hebben we patiënten uit heel Zeeland. Lokale autoriteit opbouwen werkt uitstekend in onze provincie!' },
  ]
  const dutchMoreReviews = [
    { name: 'Café De Beierd', rating: 5, text: 'Ons eeuwenoude café aan de Markt is nu bekend tot ver buiten Zeeland. Historie en SEO zijn een perfecte combinatie!' },
    { name: 'Rederij Nehalennia', rating: 4.5, text: 'Onze rondvaarten door Middelburg en Veerse Meer boeken gasten nu online uit heel Europa. Maritime marketing op zijn best!' },
    { name: 'Kunstgalerie Koestraat', rating: 5, text: 'In de historische Koestraat exposeren we nu werk van internationale kunstenaars. Culturele SEO heeft ons netwerk verbreed.' },
    { name: 'Fietsverhuuur Walcheren', rating: 5, text: 'Vanuit het station verhuren we fietsen aan toeristen uit de hele wereld. Seizoensgebonden marketing werkt perfect voor ons!' },
    { name: 'B&B Het Londenhuis', rating: 4.5, text: 'Ons monumentale pand aan de gracht staat nu in alle reisgidsen online. Hospitality marketing heeft onze occupancy verdubbeld.' },
    { name: 'Consultancy Delta Works', rating: 5, text: 'Vanuit Middelburg adviseren we over waterbouw wereldwijd. Specialistische B2B marketing heeft ons internationale klanten gebracht.' },
    { name: 'Kapperszaak Groenmarkt', rating: 5, text: 'Op de gezellige Groenmarkt bedienen we nu klanten uit heel Walcheren. Lokale marketing in Middelburg vraagt om persoonlijke aanpak.' },
    { name: 'Notariskantoor Dam', rating: 4.5, text: 'Bij de historische Dam behandelen we transacties voor heel Zeeland. Zakelijke dienstverlening perfect gepositioneerd online.' },
    { name: 'Sportschool Fit Zeeland', rating: 5, text: 'In het moderne sportcentrum trainen nu leden uit alle omliggende dorpen. Fitness marketing in Zeeland heeft zijn eigen dynamiek.' },
    { name: 'Muziekschool De Beiaard', rating: 5, text: 'Naast de beroemde Lange Jan geven we les aan talent uit heel Zeeland. Cultureel onderwijs marketing vraagt om lokale verbinding.' },
    { name: 'Scheepswerf Arnemuiden', rating: 4.5, text: 'Hoewel in Arnemuiden, bereiken we via Middelburg-SEO de hele maritime sector. Regionale specialisatie loont!' },
    { name: 'Immobyliënkantoor Zeeuws Erfgoed', rating: 5, text: 'Historische panden in Middelburg verkopen we nu aan kopers uit heel Europa. Luxe vastgoed marketing vraagt om internationale aanpak.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Middelburg | Marketing Bureau Zeeland - Online Marketing Middelburg</title>
        <meta
          name="description"
          content="SEO Specialist Middelburg inschakelen? Kies voor hét marketing bureau in Middelburg en Zeeland. Meer klanten met lokale SEO, Google Ads en moderne marketing strategie."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/middelburg" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Middelburg: Van Abdij tot Lange Jan digitaal domineren</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">48.000 Middelburgers + miljoen toeristen per jaar wachten op jouw expertise</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Middelburg: de monumentale hoofdstad van Zeeland waar acht eeuwen geschiedenis samenkomen met moderne ondernemingszin.</strong><br />
              Met de imposante Abdij (1123), de iconische Lange Jan (90 meter hoog), het levendige centrum en als poort naar Walcheren biedt Middelburg unieke kansen. Als <b>SEO specialist Middelburg</b> positioneer ik je tussen de 4.200+ lokale bedrijven - van maritime ondernemingen tot hospitality, van monumentenzorg tot toerisme op het prachtige Walcheren.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Middelburg: bovenaan voor toeristen én locals</li>
              <li>✓ Google Ads: directe leads vanuit heel Zeeland</li>
              <li>✓ Toerismemarkt: 1 miljoen+ bezoekers per jaar bereiken</li>
              <li>✓ <b>SEO Middelburg</b> met aantoonbare ROI</li>
              <li>✓ Maritime & hospitality specialisatie</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Middelburg cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">SEO Specialist Middelburg - Marketing Bureau Zeeland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct spreken? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Middelburg - Marketing Resultaten Zeeland" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Middelburg" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Middelburg met gerichte marketing"
          subtitle="Lokale expertise voor de hoofdstad van Zeeland"
          features={[
            {
              badge: "SEO Middelburg",
              title: "SEO Specialist Middelburg",
              description: "Van historische binnenstad tot moderne bedrijventerreinen - ik positioneer je waar Middelburgers en toeristen écht zoeken. Lokale autoriteit opbouwen in Zeeland's meest bezochte stad.",
              visualTitle: "Lokaal zichtbaar",
              visualSubtitle: "Altijd vindbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Middelburg",
              description: "Direct zichtbaar voor 48.000 inwoners, miljoen toeristen én zakelijke bezoekers van heel Walcheren. Adverteren in het economische hart van Zeeland.",
              visualTitle: "Directe zichtbaarheid",
              visualSubtitle: "Maximum bereik",
              image: keywordResearchImage
            },
            {
              badge: "Marketing Bureau",
              title: "Online Marketing Middelburg",
              description: "Professionele websites en campagnes die werken in Middelburg's unieke mix van historie, toerisme en modern ondernemerschap. Van B2B maritime sector tot B2C hospitality.",
              visualTitle: "Website & Strategie",
              visualSubtitle: "Meer conversies",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Middelburg onderneemt <span class='bg-[#F7D8FA] px-2 rounded italic'>succesvoller online</span> met Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Middelburg</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van monumentale binnenstad tot modern bedrijfsleven - ik help je bedrijf online groeien in Zeeland's hoofdstad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Middelburg */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Middelburg</h3>
                <p className="text-gray-600 mb-6">
                  Lokale SEO die werkt in Middelburg's unieke markt. Van toeristische sector tot maritime industrie - overal zichtbaar zijn waar het telt voor Zeeland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel voor Middelburg</li>
                  <li>✓ Toerisme & hospitality SEO</li>
                  <li>✓ Maritime sector specialisatie</li>
                  <li>✓ Regionale Zeeland-targeting</li>
                </ul>
              </div>
              {/* Google Ads Middelburg */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor Middelburg's toerismemarkt
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Middelburg</h3>
                <p className="text-gray-600 mb-6">
                  Strategische advertenties die werken in Middelburg's seizoensgebonden markt. Van locals tot internationale toeristen - iedereen bereiken met de juiste boodschap.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Seizoensgebonden campagne-optimalisatie</li>
                  <li>✓ Internationale toerist-targeting</li>
                  <li>✓ Walcheren-brede bereik</li>
                  <li>✓ Maritime & hospitality focus</li>
                </ul>
              </div>
              {/* Website & Marketing Bureau */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Marketing Bureau</h3>
                <p className="text-gray-600 mb-6">
                  Websites en marketing die passen bij Middelburg's karakter. Van monumentenzorg tot moderne dienstverlening - altijd de juiste uitstraling.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Responsive design voor alle toeristen</li>
                  <li>✓ Historisch en modern geschikt</li>
                  <li>✓ Snelle laadtijden voor mobiele bezoekers</li>
                  <li>✓ Conversie-geoptimaliseerd voor hospitality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MIDDELBURG SPECIFIEKE FAQ SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO & Marketing in Middelburg</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik toeristen én locals in Middelburg?</h3>
                <p className="text-gray-600">Middelburg's unieke mix van 48.000 inwoners en 1 miljoen toeristen per jaar vraagt om een dubbele strategie. Ik ontwikkel campagnes die beide doelgroepen bedienen - lokale SEO voor bewoners en internationale SEO voor toeristen, elk met eigen keywords en seizoensinzichten.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor een Middelburg bedrijf?</h3>
                <p className="text-gray-600">SEO in Middelburg start vanaf €650 per maand, afhankelijk van je sector en doelen. Toeristische bedrijven vragen om seizoensstrategieën, maritime bedrijven om B2B-aanpak. Na gratis analyse krijg je transparante prijsopgave gebaseerd op je specifieke Middelburg-doelstellingen en Zeeland-bereik.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe belangrijk is seizoensmarketing in Middelburg?</h3>
                <p className="text-gray-600">Cruciaal! Middelburg kent duidelijke seizoenen: drukke zomermaanden (mei-september) met toeristen, rustigere winterperiode met focus op locals. Succesvol marketing anticipeert hierop met seizoensgebonden content, Google Ads budgetverdeling en speciale acties tijdens Zeeuwse evenementen.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke sectoren presteren goed online in Middelburg?</h3>
                <p className="text-gray-600">Hospitality (hotels, B&B's, restaurants), maritime diensten, monumentenzorg, cultuur en retail presteren uitstekend. Middelburg's status als hoofdstad van Zeeland geeft lokale bedrijven autoriteit. Specialisatie in Zeeuwse cultuur, Delta Works of maritime historie creëert unieke marktposities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verhoud ik me tot andere Zeeuwse steden online?</h3>
                <p className="text-gray-600">Middelburg heeft als hoofdstad een natuurlijk voordeel. Vlissingen richt zich op haven en industrie, Goes op retail. Jouw marketing moet Middelburg's unieke positie benadrukken: historie, cultuur, centrale ligging op Walcheren en toegangspoort tot heel Zeeland.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik vanuit Middelburg landelijk opereren?</h3>
                <p className="text-gray-600">Absoluut! Middelburg's rijke historie en unieke ligging geven je een verhaal dat landelijk interessant is. Ik ontwikkel strategieën die starten met sterke lokale basis en geleidelijk uitbreiden. Zeeuwse kwaliteit en betrouwbaarheid zijn landelijk gewaardeerde eigenschappen.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe zit het met internationale marketing vanuit Middelburg?</h3>
                <p className="text-gray-600">Middelburg trekt bezoekers uit Duitsland, België, Frankrijk en UK. Internationale SEO in deze talen kan zeer winstgevend zijn, vooral voor hospitality en cultuur. Duitse en Belgische toeristen zoeken specifiek naar "Middelburg" en "Zeeland" - perfecte kansen voor gespecialiseerde campagnes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke resultaten kan ik verwachten in de eerste 6 maanden?</h3>
                <p className="text-gray-600">Middelburg's kleinere maar focused markt kan sneller resultaten opleveren. In 2-3 maanden zie je verbeteringen in lokale vindbaarheid, na 6 maanden significante groei in toeristenverkeer online. Google Ads werken binnen weken voor zowel lokale als toeristische keywords. Transparante rapportage per doelgroep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Middelburg te veroveren</span> met slimme marketing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf laat groeien in Zeeland's monumentale hoofdstad - altijd strategisch advies en meetbare resultaten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Meer weten over marketing in Middelburg? Bel voor een vrijblijvend strategiegesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel schakelen zoals in Zeeland gebruikelijk? Start direct het gesprek via WhatsApp.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Middelburg - Online Marketing Bureau Zeeland & Omgeving</h3>
              <p className="text-gray-600">
                Actief in: Middelburg Centrum • Binnenstad • Abdijplein • Lange Jan • Dam • Groenmarkt • Lange Delft • Koestraat • Lange Noordstraat • Vlissingen • Goes • Veere • Arnemuiden • Koudekerke • Sint Laurens • Gapinge • Nieuw- en Sint Joosland • Kleverskerke • Oostkapelle • Domburg • Walcheren • Heel Zeeland
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}