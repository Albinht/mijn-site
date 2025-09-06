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

export default function MarketingHaarlem() {
  // Lokale Haarlem reviews - Bloemenstad van Nederland
  const dutchReviews = [
    { name: 'Bloemenwinkel Grote Markt', rating: 5, text: 'Op de iconische Grote Markt met uitzicht op de Sint-Bavo. Door SEO vinden toeristen en locals ons makkelijk - omzet is explosief gegroeid!' },
    { name: 'Fysiotherapie Schalkwijk', rating: 5, text: 'Vanuit onze praktijk in Schalkwijk bereiken we heel Haarlem-Noord. De lokale SEO strategie heeft ons patiëntenaantal verdrievoudigd.' },
    { name: 'Restaurant Zijlstraat', rating: 5, text: 'In het bruisende uitgaansgebied stonden we tussen veel concurrentie. Nu staan we bovenaan en zitten vol elke avond!' },
    { name: 'Kapsalon Amsterdamse Buurt', rating: 4.5, text: 'De Amsterdamse Buurt heeft veel karakter. Google Ads campagne zorgt voor constante stroom nieuwe klanten uit heel Haarlem.' },
    { name: 'Tandarts Waarderpolder', rating: 5, text: 'Waarderpolder is een groeiende wijk. Onze moderne praktijk wordt nu gevonden door gezinnen uit heel Haarlem-Zuid.' },
    { name: 'Advocaat Botermarkt', rating: 5, text: 'Kantoor vlak bij het stadhuis op de Botermarkt. Door lokale SEO krijgen we cliënten uit heel Noord-Holland.' },
  ]
  const dutchMoreReviews = [
    { name: 'Sportschool Vijfhoek', rating: 5, text: 'In de hippe wijk Vijfhoek veel jonge professionals. We staan nu bovenaan voor "sportschool Haarlem" - ledenaantal groeit wekelijks!' },
    { name: 'Autogarage Spaarndam', rating: 4.5, text: 'Spaarndam ligt strategisch tussen Haarlem en Amsterdam. Voor spoedklusjes worden we als eerste gevonden in heel de regio!' },
    { name: 'Schoonheidssalon Kleverpark', rating: 5, text: 'Kleverpark is een rustige, nette wijk. Perfect voor onze salon - nu boekingen uit heel Haarlem door online vindbaarheid.' },
    { name: 'Installateur Hazepaterslaan', rating: 5, text: 'De Hazepaterslaan verbindt verschillende wijken. Ideale locatie - door SEO krijgen we klussen uit heel Haarlem en omstreken.' },
    { name: 'IT Bedrijf Waarderpolder', rating: 5, text: 'In de zakelijke zone van Waarderpolder. Door online marketing bedienen we nu bedrijven in heel de Randstad.' },
    { name: 'Makelaar Haarlem Oost', rating: 4.5, text: 'Haarlem Oost groeit snel met veel nieuwbouw. Onze woningverkopen zijn verdubbeld door betere online zichtbaarheid.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Haarlem | Marketing Bureau & Online Marketing Haarlem</title>
        <meta
          name="description"
          content="SEO Specialist Haarlem inschakelen? Kies voor hét marketing bureau in Haarlem. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/haarlem" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Haarlem: bloemenstad van Nederland</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">162.000 Haarlemmers wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Haarlem: waar historie en moderniteit hand in hand gaan.</strong><br />
              Van de majestueuze Sint-Bavo kerk tot het bruisende uitgaansleven in de Zijlstraat, van de karakteristieke Amsterdamse Buurt tot moderne wijken zoals Waarderpolder - Haarlem combineert rijke geschiedenis met eigentijdse dynamiek. Met 162.000+ inwoners op slechts 15 minuten van Amsterdam is Haarlem de perfecte plek voor ondernemers die willen groeien. Als <b>SEO specialist Haarlem</b> help ik ambitieuze bedrijven de digitale kansen van deze bloemenstad te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Haarlem: zichtbaar in de bloemenstad</li>
              <li>✓ Google Ads: direct bereik naar 162.000+ Haarlemmers</li>
              <li>✓ Speciaal voor ondernemers in Noord-Holland</li>
              <li>✓ <b>SEO Haarlem</b> met focus op lokale dominantie</li>
              <li>✓ Websites die passen bij Haarlem's unieke karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Haarlem cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Haarlem & Noord-Holland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Haarlem - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Haarlem" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Haarlem met gerichte marketing"
          subtitle="Digitale groei voor de bloemenstad van Nederland"
          features={[
            {
              badge: "SEO Haarlem",
              title: "SEO Specialist Haarlem",
              description: "Haarlem heeft een unieke mix van historie, cultuur en moderne bedrijvigheid. Ik zorg dat jouw bedrijf opvalt door lokaal bovenaan te staan op relevante zoektermen en structureel nieuwe klanten aan te trekken uit heel Noord-Holland.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Haarlem",
              description: "Direct zichtbaar voor 162.000+ Haarlemmers plus duizenden dagelijkse bezoekers en toeristen. Adverteer gericht in alle wijken van centrum tot Schalkwijk en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Haarlem",
              description: "Professionele, karaktervolle websites die passen bij Haarlem's authentieke sfeer en zorgen voor meer aanvragen uit heel Noord-Holland. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Haarlem groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Haarlem</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van creatieve ondernemers tot gevestigde bedrijven – ik help ambitieuze ondernemers online groeien in de bloemenstad van Nederland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Haarlem */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Haarlem</h3>
                <p className="text-gray-600 mb-6">
                  In de concurrerende markt van Haarlem is lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken in alle Haarlemse wijken en de bredere regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Haarlem</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in toeristische markt</li>
                </ul>
              </div>
              {/* Google Ads Haarlem */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor toeristische bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Haarlem</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 162.000+ Haarlemmers plus duizenden toeristen en bezoekers uit Amsterdam en omstreken met strategisch gerichte campagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & toeristen</li>
                  <li>✓ Focus op lokale én regionale markt</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Karaktervolle websites die passen bij Haarlem's unieke sfeer en zorgen voor meer conversies uit heel Noord-Holland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Authentiek design voor bloemenstad</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Noord-Holland</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Haarlem</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Haarlem?</h3>
                <p className="text-gray-600">
                  Haarlem heeft een unieke combinatie van lokale bewoners (162.000+) en veel toeristen door de nabijheid van Amsterdam en de rijke geschiedenis. Lokale bedrijven concurreren niet alleen met elkaar, maar ook met Amsterdam. Sterke lokale SEO zorgt ervoor dat je zichtbaar bent voor zowel inwoners als bezoekers die specifiek in Haarlem zoeken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Haarlem van Amsterdam?</h3>
                <p className="text-gray-600">
                  Haarlem heeft een meer lokale, gemoedelijke sfeer dan Amsterdam. Inwoners waarderen persoonlijke service en authenticiteit. Tegelijk profiteert de stad van Amsterdam's nabijheid voor toerisme. Marketing in Haarlem moet deze balans vinden: lokale verankering met oog voor bezoekers en de internationale bereikbaarheid.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Haarlem zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Grote Markt, Zijlstraat) voor retail, horeca en toerisme, Schalkwijk voor gezinnen, de Amsterdamse Buurt voor karakteristieke diensten, Waarderpolder voor moderne bedrijven, en Vijfhoek voor jonge professionals. Elke wijk heeft zijn eigen identiteit en doelgroep die je marketing kan benutten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Haarlem?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €1000-1600 per maand, afhankelijk van je ambities en concurrentie. Google Ads beheer vanaf €500 per maand plus advertentiebudget. Websiteprojecten vanaf €3500. De proximiteit van Amsterdam maakt de markt competitief, maar de koopkracht en toerisme bieden uitstekende mogelijkheden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten uit Amsterdam en omstreken?</h3>
                <p className="text-gray-600">
                  Zeker! Haarlem ligt strategisch op 15 minuten van Amsterdam. Veel Haarlemse bedrijven bedienen de hele regio Noord-Holland en trekken klanten uit Amsterdam, Hoofddorp, Heemstede en IJmond. De SEO strategie kan worden afgestemd op dit bredere gebied, inclusief toeristen en zakelijke klanten uit de Randstad.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Haarlem?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-4 maanden, significante verbetering binnen 6-8 maanden. Google Ads geven directe zichtbaarheid. De concurrentie in Haarlem is matig, maar de nabijheid van Amsterdam vereist een sterke strategie. Met de juiste aanpak zijn de resultaten zeer goed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Haarlem?</h3>
                <p className="text-gray-600">
                  Horeca en retail (veel toerisme), creatieve diensten en cultuur, wellness en beauty, zakelijke dienstverlening, bouw en monumentenonderhoud (veel historische panden), en moderne diensten zoals IT en marketing. Haarlem's diverse economie biedt kansen voor vele branches.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Haarlem?</h3>
                <p className="text-gray-600">
                  Basis Google My Business optimalisatie kun je zelf doen. Maar voor echte groei in de competitieve markt rondom Amsterdam heb je expertise nodig. Lokale SEO, toeristische marketing, en conversie-optimalisatie vereisen ervaring. Ik begeleid ook graag bij een hybride aanpak waarbij jij bepaalde taken overneemt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Haarlem</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de bloemenstad van Nederland – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Haarlem - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Haarlem Centrum • Schalkwijk • Amsterdamse Buurt • Waarderpolder • Vijfhoek • Kleverpark • Spaarndam • Haarlem Oost • Heemstede • Hoofddorp • Bloemendaal • Santpoort • Velsen • Amsterdam Noord
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}