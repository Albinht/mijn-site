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

export default function MarketingDordrecht() {
  // Lokale Dordrecht reviews - Oudste stad van Holland
  const dutchReviews = [
    { name: 'Restaurant Grote Kerk Dordrecht', rating: 5, text: 'In de historische binnenstad van de oudste stad krijgen we nu veel meer cultuurliefhebbers. De omzet bij de Grote Kerk is flink gestegen!' },
    { name: 'Advocaat Voorstraat', rating: 5, text: 'Ons kantoor in de iconische Voorstraat bedient nu cliënten uit heel de Drechtsteden. De historische uitstraling werkt perfect.' },
    { name: 'Tandarts Sterrenburg', rating: 5, text: 'In de moderne wijk Sterrenburg veel jonge gezinnen. Door lokale SEO krijgen we continu nieuwe patiënten uit Dordrecht-Noord.' },
    { name: 'Scheepswerf Kalkhaven', rating: 4.5, text: 'Als maritieme stad heeft Dordrecht een rijke scheepvaarttraditie. Onze werf wordt nu gevonden door klanten uit heel Nederland!' },
    { name: 'IT Bedrijf Dubbeldam', rating: 5, text: 'In Dubbeldam veel bedrijvigheid en goede bereikbaarheid. Door B2B SEO bedienen we nu tech-bedrijven uit heel Zuid-Holland.' },
    { name: 'Bouwbedrijf Krispijn', rating: 5, text: 'Krispijn is een groeiende wijk met veel nieuwbouw. We staan bovenaan voor "aannemer Dordrecht" en krijgen veel opdrachten!' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Bagijnhof', rating: 5, text: 'Het historische Bagijnhof trekt veel bezoekers. Onze salon profiteert van de toeristen en heeft nu klanten uit heel de regio.' },
    { name: 'Fysiotherapie Wielwijk', rating: 4.5, text: 'Wielwijk is een rustige woonwijk aan de rivier. Onze praktijk wordt nu gevonden door patiënten die kwaliteit zoeken.' },
    { name: 'Makelaar Reeland', rating: 5, text: 'Reeland heeft veel water en groen. Door marketing zijn onze woningverkopen gestegen - mensen vinden de rust hier!' },
    { name: 'Autogarage Zuidpolder', rating: 5, text: 'Zuidpolder ligt strategisch bij de A16. We trekken nu klanten uit Rotterdam, Breda en heel de Drechtsteden.' },
    { name: 'Schoonheidssalon Crabbehof', rating: 4.5, text: 'Crabbehof heeft een eigen gemeenschapsfeer. Onze salon wordt nu veel beter gevonden door mensen die kwaliteit waarderen.' },
    { name: 'Installatiebedrijf Papendrecht', rating: 5, text: 'Vanuit onze vestiging bedienen we de hele Drechtsteden. Door SEO krijgen we opdrachten van particulieren én bedrijven.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Dordrecht | Marketing Bureau & Online Marketing Dordrecht</title>
        <meta
          name="description"
          content="SEO Specialist Dordrecht inschakelen? Kies voor hét marketing bureau in Dordrecht. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/dordrecht" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Dordrecht: Oudste Stad van Holland</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">120.000 Dordtenaren wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Dordrecht: waar meer dan 800 jaar geschiedenis en moderne innovatie elkaar ontmoeten.</strong><br />
              Van de monumentale binnenstad met de imposante Grote Kerk tot moderne wijken zoals Sterrenburg, van de historische scheepvaart in de Kalkhaven tot het groene eilandkarakter - Dordrecht combineert rijke traditie met hedendaagse ondernemingszin. Met 120.000+ inwoners als hart van de Drechtsteden biedt Dordrecht ondernemers unieke kansen in een authentieke, waterrijke omgeving. Als <b>SEO specialist Dordrecht</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze historische handelstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Dordrecht: zichtbaar in de oudste stad</li>
              <li>✓ Google Ads: direct bereik naar 120.000+ Dordtenaren</li>
              <li>✓ Speciaal voor ambitieuze bedrijven in de Drechtsteden</li>
              <li>✓ <b>SEO Dordrecht</b> met focus op lokale dominantie</li>
              <li>✓ Websites die passen bij Dordrecht's historische karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Dordrecht cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Dordrecht & de Drechtsteden</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Dordrecht - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Dordrecht" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Dordrecht met doelgerichte marketing"
          subtitle="Digitale groei voor de oudste stad van Holland"
          features={[
            {
              badge: "SEO Dordrecht",
              title: "SEO Specialist Dordrecht",
              description: "Dordrecht heeft een rijke geschiedenis en sterke lokale gemeenschap. Ik zorg dat jouw bedrijf opvalt in deze historische handelstraditie door lokaal bovenaan te staan en structureel nieuwe klanten aan te trekken uit heel de Drechtsteden.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Historisch verankerd",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Dordrecht",
              description: "Direct zichtbaar voor 120.000+ Dordtenaren en bezoekers uit Rotterdam, Utrecht en heel Nederland. Adverteer gericht in alle wijken van binnenstad tot Dubbeldam en zie direct resultaat.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Regional bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Dordrecht",
              description: "Authentieke, professionele websites die passen bij Dordrecht's historische karakter en moderne ambities. Volledig geoptimaliseerd voor de lokale markt en de Drechtsteden.",
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
          title="Dordrecht groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Dordrecht</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startende ondernemers tot gevestigde bedrijven – ik help ambitieuze ondernemers online groeien in de oudste stad van Holland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Dordrecht */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Dordrecht</h3>
                <p className="text-gray-600 mb-6">
                  In een historische stad als Dordrecht is authentieke lokale zichtbaarheid cruciaal. Word gevonden door mensen die nú zoeken in alle wijken van de oudste stad van Holland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Dordrecht</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Dordrecht */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor groeiende bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Dordrecht</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 120.000+ Dordtenaren en bezoekers uit de Randstad en heel Nederland met strategisch gerichte campagnes voor maximale impact.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & districten</li>
                  <li>✓ Focus op lokale concurrentie</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Dordrecht's historische waardigheid en moderne ondernemingsgeest, zorgen voor meer conversies uit de Drechtsteden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Historisch geïnspireerd design</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Drechtsteden</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Dordrecht</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Dordrecht?</h3>
                <p className="text-gray-600">
                  Dordrecht heeft een sterke lokale identiteit als oudste stad van Holland. Met 120.000+ inwoners plus toeristen die de historie komen ervaren is lokale zichtbaarheid essentieel. Van de monumentale binnenstad tot moderne wijken - mensen zoeken lokaal en waarderen authentieke, gevestigde bedrijven.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Dordrecht van andere steden?</h3>
                <p className="text-gray-600">
                  Dordrecht combineert meer dan 800 jaar geschiedenis met moderne ondernemingszin. De stad heeft een uniek eilandkarakter, watertoeristme, en sterke lokale trots. Marketing moet respecteren dat Dordtenaren waarde hechten aan traditie, kwaliteit en betrouwbaarheid - authenticiteit is hier cruciaal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Dordrecht zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Voorstraat, Grote Kerk) voor retail en cultuur, Sterrenburg voor gezinnen, Dubbeldam voor bedrijvigheid, Krispijn voor nieuwbouw, de Kalkhaven voor maritieme diensten, en Reeland voor rust en groen. Elke wijk heeft eigen karakter en doelgroepen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Dordrecht?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €800-1300 per maand, afhankelijk van je ambities. Google Ads beheer vanaf €450 per maand plus advertentiebudget. Websiteprojecten vanaf €2900. Dordrecht heeft stabiele koopkracht en loyale klanten, waardoor investeringen in marketing goed renderen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Dordrecht?</h3>
                <p className="text-gray-600">
                  Zeker! Dordrecht ligt centraal in de Drechtsteden en trekt bezoekers uit de Randstad. Veel bedrijven bedienen Papendrecht, Zwijndrecht, Sliedrecht en heel Zuid-Holland. De SEO strategie kan worden aangepast om dit bredere gebied en toeristen te bereiken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Dordrecht?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 4-6 maanden. Google Ads geven directe zichtbaarheid. Dordrecht heeft minder concurrentie dan grote steden maar wel loyale klanten, waardoor organische groei en mond-tot-mond reclame excellent werken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Dordrecht?</h3>
                <p className="text-gray-600">
                  Toerisme en cultuur (monumenten, musea), maritieme diensten, bouw en restauratie, gezondheidszorg en wellness, zakelijke dienstverlening, en retail. Dordrecht's unieke positie als historische stad met water en natuur biedt kansen voor diverse authentieke diensten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Dordrecht?</h3>
                <p className="text-gray-600">
                  Basis social media en Google My Business kun je zelf doen. Maar voor echte groei in Dordrecht's historische markt heb je kennis nodig van lokale cultuur, toerisme-SEO, en authentieke branding. Ik begeleid graag bij een hybride aanpak die past bij jouw bedrijf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Dordrecht</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de oudste stad van Holland – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Dordrecht - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Dordrecht Centrum • Voorstraat • Sterrenburg • Dubbeldam • Krispijn • Bagijnhof • Wielwijk • Reeland • Zuidpolder • Crabbehof • Kalkhaven • Papendrecht • Zwijndrecht • Sliedrecht • Rotterdam
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}