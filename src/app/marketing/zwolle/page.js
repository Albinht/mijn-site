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

export default function MarketingZwolle() {
  // Lokale Zwolle reviews - Hanzestad aan de IJssel
  const dutchReviews = [
    { name: 'Restaurant Grote Kerk Zwolle', rating: 5, text: 'Vlak bij de iconische Grote Kerk krijgen we nu veel meer toeristen binnen. De omzet in het historische centrum is flink gestegen!' },
    { name: 'Advocaat Sassenstraat', rating: 5, text: 'Ons kantoor in de winkelstraat profiteert enorm van de lokale zichtbaarheid. Clients uit heel Overijssel vinden ons nu makkelijk.' },
    { name: 'Tandarts Wipstrik', rating: 5, text: 'In de groeiende wijk Wipstrik veel nieuwe gezinnen. Door SEO krijgen we continu nieuwe patiënten uit Zwolle-Zuid.' },
    { name: 'Bouwbedrijf Stadshagen', rating: 4.5, text: 'Stadshagen is een moderne wijk met veel nieuwbouw. We worden nu als eerste gevonden voor "aannemer Zwolle" - perfecte timing!' },
    { name: 'Sportschool Aa-landen', rating: 5, text: 'In het hart van de Aa-landen bedienen we nu leden uit heel Zwolle. De Google Ads hebben ons ledenaantal verdubbeld.' },
    { name: 'IT Consultancy Holtenbroek', rating: 5, text: 'Vanuit onze vestiging in Holtenbroek bereiken we nu bedrijven in heel Oost-Nederland. SEO werkt echt voor B2B!' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Berkum', rating: 5, text: 'Berkum heeft een eigen gemeenschapsfeer. Door lokale SEO komen klanten nu uit alle hoeken van Zwolle naar onze salon.' },
    { name: 'Autogarage Westenholte', rating: 4.5, text: 'In het noordelijke deel van Zwolle veel bedrijventerreinen. We staan bovenaan voor "auto onderhoud Zwolle" en zijn nu goed boekbaar.' },
    { name: 'Fysiotherapie Dieze', rating: 5, text: 'Dieze is perfect voor gezondheidsvoorzieningen. Onze praktijk wordt nu gevonden door patiënten uit heel de regio Zwolle.' },
    { name: 'Makelaar Ittersum', rating: 5, text: 'Het dorpse karakter van Ittersum past perfect bij onze persoonlijke aanpak. Door marketing zijn onze woningverkopen flink gestegen.' },
    { name: 'Installatiebedrijf Windesheim', rating: 5, text: 'Dichtbij de hogeschool veel studentenhuisvesting. We krijgen nu veel klussen voor verhuurders dankzij onze online zichtbaarheid.' },
    { name: 'Schoonheidssalon Assendorp', rating: 4.5, text: 'Assendorp heeft een multiculturele bevolking. Onze diverse clientèle vindt ons nu gemakkelijk via Google - fantastisch resultaat!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Zwolle | Marketing Bureau & Online Marketing Zwolle</title>
        <meta
          name="description"
          content="SEO Specialist Zwolle inschakelen? Kies voor hét marketing bureau in Zwolle. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/zwolle" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Zwolle: Hanzestad aan de IJssel</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">130.000 Zwollenaren wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Zwolle: waar Hanzetrots en moderne innovatie samenkomen.</strong><br />
              Van de historische binnenstad met de imposante Sassenpoort tot moderne wijken zoals Stadshagen, van het bruisende studentenleven rond Windesheim tot bloeiende bedrijventerreinen - Zwolle combineert eeuwenoude handelsgeest met eigentijdse ondernemingszin. Met 130.000+ inwoners en als hoofdstad van Overijssel biedt Zwolle ondernemers de perfecte mix van cultuur, handel en groei. Als <b>SEO specialist Zwolle</b> help ik ambitieuze bedrijven de digitale kansen van deze dynamische Hanzestad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Zwolle: zichtbaar in de Hanzestad</li>
              <li>✓ Google Ads: direct bereik naar 130.000+ Zwollenaren</li>
              <li>✓ Speciaal voor ambitieuze bedrijven in Overijssel</li>
              <li>✓ <b>SEO Zwolle</b> met focus op lokale dominantie</li>
              <li>✓ Websites die passen bij Zwolle's ondernemersgeest</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Zwolle cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Zwolle & Overijssel</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Zwolle - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Zwolle" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Zwolle met doelgerichte marketing"
          subtitle="Digitale groei voor de Hanzestad"
          features={[
            {
              badge: "SEO Zwolle",
              title: "SEO Specialist Zwolle",
              description: "Zwolle heeft een rijke geschiedenis in handel en is vandaag een moderne zakenhub. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en structureel nieuwe klanten aan te trekken uit heel Overijssel en daarbuiten.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Zwolle",
              description: "Direct zichtbaar voor 130.000+ Zwollenaren en bezoekers uit Nederland en Duitsland. Adverteer gericht in alle wijken van centrum tot Stadshagen en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Zwolle",
              description: "Moderne, professionele websites die passen bij Zwolle's mix van traditie en innovatie. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit heel Oost-Nederland.",
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
          title="Zwolle groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Zwolle</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startende ondernemers tot gevestigde bedrijven – ik help ambitieuze ondernemers online groeien in de Hanzestad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Zwolle */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Zwolle</h3>
                <p className="text-gray-600 mb-6">
                  In een groeiende stad als Zwolle is lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken in alle Zwolse wijken en omliggende plaatsen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Zwolle</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Zwolle */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor groeiende bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Zwolle</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 130.000+ Zwollenaren en bezoekers uit Nederland en Duitsland met strategisch gerichte campagnes voor maximale impact.
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
                  Professionele websites die passen bij Zwolle's moderne en ondernemende karakter en zorgen voor meer conversies uit heel Overijssel.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern design voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Overijssel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Zwolle</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Zwolle?</h3>
                <p className="text-gray-600">
                  Zwolle is een groeiende stad met veel nieuwe bedrijvigheid en een sterke lokale identiteit. Met 130.000+ inwoners plus duizenden studenten en dagelijkse bezoekers is lokale zichtbaarheid cruciaal. Van het historische centrum tot moderne wijken zoals Stadshagen - je wilt gevonden worden wanneer mensen lokale diensten zoeken in heel Overijssel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Zwolle van andere steden?</h3>
                <p className="text-gray-600">
                  Zwolle combineert Hanzetrots met moderne ondernemingszin. De stad heeft een sterke lokale gemeenschap, veel studenten door Windesheim, en groeit snel. De inwoners waarderen zowel traditie als innovatie. Dit betekent dat marketing authentiek moet zijn maar ook modern en professioneel - een perfecte balans tussen historie en toekomst.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Zwolle zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Sassenstraat, Grote Markt) voor retail en horeca, Stadshagen voor gezinnen en nieuwbouw, Wipstrik en Aa-landen voor moderne woonwijken, Berkum voor gemeenschapsbinding, en bedrijventerreinen bij de A28 voor B2B. Elke wijk heeft eigen karakteristieken en doelgroepen waar je marketing op kunt afstemmen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Zwolle?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €800-1300 per maand, afhankelijk van je ambities en concurrentie. Google Ads beheer vanaf €450 per maand plus advertentiebudget. Websiteprojecten vanaf €2900. Zwolle groeit snel met veel kansen, en de koopkracht stijgt, waardoor de ROI uitstekend kan zijn voor goed uitgevoerde campagnes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Zwolle?</h3>
                <p className="text-gray-600">
                  Zeker! Zwolle is de hoofdstad van Overijssel en trekt bezoekers uit heel Oost-Nederland. Veel Zwolse bedrijven bedienen de regio (Meppel, Kampen, Deventer, Apeldoorn) en zelfs delen van Drenthe en Gelderland. De SEO strategie kan worden aangepast om dit bredere gebied te dekken, inclusief grensverkeer met Duitsland.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Zwolle?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 4-6 maanden. Google Ads geven directe zichtbaarheid. Zwolle groeit snel en de concurrentie is nog niet zo intens als in grote steden, waardoor resultaten vaak sneller zichtbaar zijn dan in Amsterdam of Rotterdam.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Zwolle?</h3>
                <p className="text-gray-600">
                  Bouw en renovatie (veel nieuwe ontwikkelingen), zakelijke dienstverlening, gezondheidszorg en wellness, horeca en retail (toerisme en studenten), onderwijs en training (Windesheim), en IT/tech (groeiende sector). Zwolle's diverse economie en groei bieden kansen voor vrijwel elke branche.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Zwolle?</h3>
                <p className="text-gray-600">
                  Basis Google My Business en social media kun je zelf doen. Maar voor echte groei in een groeiende markt als Zwolle heb je expertise nodig. Lokale SEO, concurrentieanalyse, en conversie-optimalisatie vereisen ervaring. Ik begeleid ook graag bij een hybride aanpak waarbij jij bepaalde onderdelen overneemt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Zwolle</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Hanzestad – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Zwolle - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Zwolle Centrum • Stadshagen • Wipstrik • Berkum • Aa-landen • Holtenbroek • Assendorp • Dieze • Windesheim • Ittersum • Westenholte • Kampen • Meppel • Deventer • Apeldoorn • Steenwijk
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}