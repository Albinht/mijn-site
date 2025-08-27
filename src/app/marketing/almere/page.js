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

export default function MarketingAlmere() {
  // Lokale Almere reviews - Nederland's nieuwste en meest moderne stad
  const dutchReviews = [
    { name: 'Restaurant Floriade Park', rating: 5, text: 'Na de verhuizing naar het nieuwe Floriade Park gebied hadden we meer lokale zichtbaarheid nodig. Nu staan we bovenaan voor "restaurant Almere"!' },
    { name: 'Fysiotherapie Almere Stad', rating: 5, text: 'Vanuit ons centrum in Almere Stad bereiken we nu alle wijken. De lokale SEO strategie heeft ons patiëntenaantal verdubbeld.' },
    { name: 'Bouwbedrijf Almere Poort', rating: 5, text: 'Met alle nieuwbouw in Almere Poort is concurrentie groot, maar dankzij de marketing krijgen we constant nieuwe projecten binnen.' },
    { name: 'Kapsalon Almere Buiten', rating: 4.5, text: 'In het drukke winkelcentrum van Almere Buiten vallen we nu op. Google Ads campagne levert wekelijks nieuwe klanten op.' },
    { name: 'Tandarts Almere Haven', rating: 5, text: 'Voor onze praktijk in Almere Haven was lokale vindbaarheid cruciaal. Nu constant nieuwe patiënten uit heel Almere-Zuid.' },
    { name: 'IT Bedrijf Almere Centrum', rating: 5, text: 'Vanuit het zakendistrict in Almere Centrum bereiken we nu heel Flevoland. Professionele aanpak met directe resultaten.' },
  ]
  const dutchMoreReviews = [
    { name: 'Sportschool Almere Muziekwijk', rating: 5, text: 'In de trendy Muziekwijk zijn veel fitness opties, maar we staan nu bovenaan. Ledenaantal groeit maandelijks!' },
    { name: 'Autogarage Almere Hout', rating: 4.5, text: 'Voor spoedklusjes in nieuw Almere Hout worden we als eerste gevonden. Game changer voor ons bedrijf!' },
    { name: 'Schoonheidssalon Stedenwijk', rating: 5, text: 'Onze salon in de Stedenwijk krijgt nu boekingen uit heel Almere. De investering betaalt zich dubbel terug.' },
    { name: 'Installateur Waterwijk', rating: 5, text: 'Met de groei van de Waterwijk hadden we betere online vindbaarheid nodig. Nu constant nieuwe klussen!' },
    { name: 'Kinderopvang Literatuurwijk', rating: 5, text: 'Voor onze locatie in de Literatuurwijk was lokale zichtbaarheid essentieel. Wachtlijst is nu vol!' },
    { name: 'Advocaat Oostvaardersplassen', rating: 4.5, text: 'Vanuit ons kantoor bij de Oostvaardersplassen bedienen we heel oostelijk Flevoland. Structurele groei in cliënten.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Almere | Marketing Bureau & Online Marketing Almere</title>
        <meta
          name="description"
          content="SEO Specialist Almere inschakelen? Kies voor hét marketing bureau in Almere. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/almere" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Almere: de nieuwste stad, de modernste aanpak</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">215.000 Almeerse inwoners wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Almere: Nederland's jongste en meest ambitieuze stad.</strong><br />
              Van de bruisende binnenstad Almere Stad tot de luxe Waterfront en nieuwe wijken zoals Almere Poort - deze snelgroeiende metropool biedt ongekende kansen. Met 12.000+ bedrijven in een stad die pas 50 jaar geleden werd opgericht, is Almere dé plek voor ondernemers die vooruitkijken. Als <b>SEO specialist Almere</b> help ik moderne bedrijven de digitale kansen van deze unieke stad te grijpen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Almere: topresultaten in Nederland's jongste stad</li>
              <li>✓ Google Ads: direct aanvragen uit alle Almeerse wijken</li>
              <li>✓ Speciaal voor moderne bedrijven en innovatieve ondernemers</li>
              <li>✓ <b>SEO Almere</b> met focus op groei en toekomst</li>
              <li>✓ Websites die passen bij Almere's moderne uitstraling</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Almere cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Almere & Flevoland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Almere - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Almere" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Almere met moderne marketing"
          subtitle="Digitale groei voor Nederland's meest toekomstgerichte stad"
          features={[
            {
              badge: "SEO Almere",
              title: "SEO Specialist Almere",
              description: "Almere groeit als geen andere Nederlandse stad. Ik zorg dat jouw bedrijf meegroeit door lokaal bovenaan te staan op relevante zoektermen en structureel nieuwe klanten aan te trekken.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Almere",
              description: "Direct zichtbaar voor 215.000+ Almeerse inwoners en de duizenden nieuwe bewoners die jaarlijks bijkomen. Adverteer gericht in alle wijken en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Almere",
              description: "Moderne, snelle websites die passen bij Almere's innovatieve karakter en zorgen voor meer aanvragen uit heel Flevoland. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Almere groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Almere</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startup tot gevestigde onderneming – ik help moderne bedrijven online groeien in Nederland's nieuwste stad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Almere */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Almere</h3>
                <p className="text-gray-600 mb-6">
                  In een snel groeiende stad als Almere is lokale zichtbaarheid cruciaal. Word gevonden door mensen die nú zoeken in alle Almeerse wijken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Almere</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in groeiende markt</li>
                </ul>
              </div>
              {/* Google Ads Almere */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor groeiende bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Almere</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 215.000+ Almeerse inwoners en de nieuwe bewoners die maandelijks bijkomen met gerichte campagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & districten</li>
                  <li>✓ Focus op groeiende bevolking</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites die passen bij Almere's innovatieve karakter en zorgen voor meer conversies uit heel Flevoland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern design voor moderne stad</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik heel Flevoland</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Almere</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Almere?</h3>
                <p className="text-gray-600">
                  Almere groeit explosief - jaarlijks komen er duizenden nieuwe bewoners bij. Als bedrijf wil je dat deze nieuwe inwoners jou vinden wanneer ze lokale diensten zoeken. Met 215.000+ inwoners verspreid over moderne wijken zoals Poort, Hout en de Waterwijk is lokale zichtbaarheid cruciaal om je marktaandeel te behouden en uit te breiden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Almere van andere steden?</h3>
                <p className="text-gray-600">
                  Almere is uniek: een volledig geplande stad met moderne infrastructuur en een jonge, ambitieuze bevolking. De gemiddelde leeftijd is laag, digitale adoptie hoog, en er is veel ondernemersgeest. Dit betekent dat online marketing hier sneller impact heeft dan in traditionele steden. Bovendien groeit de stad nog steeds, waardoor er constant nieuwe kansen ontstaan.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Almere zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Almere Stad (centrum) voor retail en horeca, Almere Poort voor moderne gezinnen en hoogwaardige diensten, het Waterfront voor luxe services, en de Muziekwijk voor creatieve bedrijven. Elke wijk heeft zijn eigen karakter en doelgroep. Een goede SEO strategie houdt rekening met deze verschillen en positioneert je bedrijf waar jouw klanten zoeken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Almere?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €800-1200 per maand, afhankelijk van je ambities en concurrentie. Google Ads beheer vanaf €400 per maand plus advertentiebudget. Websiteprojecten vanaf €2500. Omdat Almere nog groeiende is, is de concurrentie vaak minder hevig dan in Amsterdam of Utrecht, wat betekent dat je sneller resultaat kunt behalen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Almere?</h3>
                <p className="text-gray-600">
                  Zeker! Almere ligt strategisch tussen Amsterdam, Utrecht en Hilversum. Veel Almeerse bedrijven bedienen heel Flevoland (Lelystad, Zeewolde, Dronten) en delen van Noord-Holland. De SEO strategie kan worden aangepast om dit bredere gebied te dekken, afhankelijk van jouw doelstellingen en servicegebied.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Almere?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 6 maanden. Google Ads geven directe zichtbaarheid. Omdat Almere een jonge stad is met veel nieuwe websites en bedrijven, kun je hier vaak sneller doorbreken dan in steden met gevestigde online concurrentie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Almere?</h3>
                <p className="text-gray-600">
                  Alle dienstverlening voor jong gezinnen: kinderopvang, onderwijs, sport, beauty en wellness. Daarnaast bouw en renovatie (veel nieuwbouw), automotive (veel nieuwe auto's), en moderne gezondheidszorg. Tech startups en creatieve dienstverlening profiteren van Almere's innovatieve karakter en jonge bevolking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Almere?</h3>
                <p className="text-gray-600">
                  Basis Google My Business en social media kun je zelf doen. Maar voor echte groei in een competitieve markt als Almere heb je expertise nodig. Technische SEO, keyword research, concurrentieanalyse en conversie-optimalisatie vereisen ervaring. Ik begeleid ook graag bij een hybride aanpak waarbij jij bepaalde taken overneemt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Almere</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Nederland's nieuwste stad – altijd eerlijk advies en moderne aanpak.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in heel Almere & Flevoland</h3>
              <p className="text-gray-600">
                Almere Stad • Almere Buiten • Almere Haven • Almere Hout • Almere Poort • Almere Pampus • Muziekwijk • Stedenwijk • Waterwijk • Literatuurwijk • Lelystad • Zeewolde • Dronten • Swifterbant • Biddinghuizen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}