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

export default function MarketingRotterdam() {
  // Lokale Rotterdam reviews - havenstad met internationale allure
  const dutchReviews = [
    { name: 'Hotel New York Rijnhaven', rating: 5, text: 'Onze luxe hotelkamers in het iconische Rijnhaven gebouw worden nu perfect gevonden door toeristen. Fantastische stijging in boekingen sinds de SEO optimalisatie!' },
    { name: 'Restaurant Erasmusbrug', rating: 5, text: 'Met uitzicht op de Erasmusbrug krijgen we nu reserveringen van over heel Nederland. De lokale marketing heeft ons restaurant op de kaart gezet.' },
    { name: 'Architectenbureau Kop van Zuid', rating: 5, text: 'Vanuit onze studio op Kop van Zuid bereiken we nu grote projecten in heel Rotterdam. De Google Ads campagne levert structureel nieuwe opdrachten.' },
    { name: 'Logistiek Maasvlakte', rating: 5, text: 'Als transportbedrijf op de Maasvlakte was lokale vindbaarheid cruciaal. Nu worden we direct gevonden door bedrijven die onze diensten nodig hebben.' },
    { name: 'Café Markthal', rating: 4.5, text: 'Onze zaak in de trendy Markthal heeft nu constant nieuwe bezoekers. Perfect resultaat voor het drukke centrum van Rotterdam.' },
    { name: 'Tech Startup Cool District', rating: 5, text: 'In het hippe Cool District was concurrentie groot, maar nu staan we bovenaan bij relevante zoekopdrachten. Game changer voor onze groei!' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Tandartsenpraktijk Kralingen', rating: 5, text: 'Vanuit deftig Kralingen bereiken we nu patiënten uit heel Rotterdam-Oost. Structurele groei in nieuwe aanmeldingen via Google.' },
    { name: 'Notariskantoor Wereldhaven', rating: 5, text: 'Voor zakelijke dienstverlening rond de haven was sterke online aanwezigheid essentieel. Excellent resultaat met lokale SEO strategie.' },
    { name: 'Sportschool Feijenoord', rating: 4.5, text: 'In de wijk van de beroemde voetbalclub krijgen we nu leden uit heel Rotterdam-Zuid. Perfect bereik dankzij gerichte marketing.' },
    { name: 'Kapsalon Lijnbaan', rating: 5, text: 'Op de beroemde Lijnbaan shopping street is concurrentie moordend, maar we staan nu bovenaan. Agenda vol met klanten uit heel Rotterdam!' },
    { name: 'Juridisch Advies Wilhelminaplein', rating: 5, text: 'Vanuit ons kantoor aan het prestigieuze Wilhelminaplein bedienen we nu heel Zuid-Holland. De investering in SEO betaalt zich dubbel terug.' },
    { name: 'Bouwbedrijf Rotterdam Noord', rating: 4.5, text: 'Voor projecten in snelgroeiende wijken als Overschie en Schiebroek zijn we nu de eerste keuze. Constant nieuwe opdrachten via Google.' },
    { name: 'Design Studio Witte de Withkwartier', rating: 5, text: 'In het kunstzinnige Witte de Withkwartier bereiken we nu creatieve opdrachten uit heel Nederland. Fantastische online zichtbaarheid!' },
    { name: 'Consultancy Zuiderpark', rating: 4.5, text: 'Onze business services vanuit Zuiderpark worden nu gevonden door bedrijven in heel de Rotterdamse havenregio. Top resultaat!' },
    { name: 'Restaurant De Kade', rating: 5, text: 'Aan de gezellige Oude Haven krijgen we nu gasten van over heel Europa. De marketing strategie heeft ons restaurant internationaal zichtbaar gemaakt.' },
    { name: 'Accountantskantoor Hoogvliet', rating: 5, text: 'Vanuit Hoogvliet bedienen we nu zzp-ers en mkb bedrijven uit heel groot Rotterdam. Prachtige groei in onze klantenportefeuille.' },
    { name: 'Fitnessstudio Spaanse Polder', rating: 4.5, text: 'In deze opkomende wijk zijn we nu dé fitnessstudio voor ambitieuze Rotterdammers. Ledenaantal verdubbeld dankzij lokale SEO!' },
    { name: 'IT-Bureau Laurenskwartier', rating: 5, text: 'Rondom de iconische Laurenskerk bereiken we nu tech bedrijven uit heel de Randstad. Excellent resultaat met gerichte online marketing.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Rotterdam | Marketing Bureau & Online Marketing Rotterdam</title>
        <meta
          name="description"
          content="SEO Specialist Rotterdam inschakelen? Kies voor hét marketing bureau in Rotterdam. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/rotterdam" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Rotterdam</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Erasmusbrug tot Maasvlakte: heel Rotterdam bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Rotterdam: waar wereldhaven en moderne ambitie elkaar ontmoeten.</strong><br />
              Met iconische architectuur van de Markthal tot de Erasmusbrug, internationale havenbedrijven op Maasvlakte en creatieve hotspots als Witte de Withkwartier biedt Rotterdam ongekende mogelijkheden. Als <b>SEO specialist Rotterdam</b> positioneer ik je tussen de 15.000+ bedrijven die hier floreren - van startup in het Cool District tot multinational in de Wereldhaven.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Rotterdam: domineer de havenstad</li>
              <li>✓ Google Ads: direct klanten uit heel Rotterdam</li>
              <li>✓ Speciaal voor bedrijven in logistiek, tech en dienstverlening</li>
              <li>✓ <b>SEO Rotterdam</b> met bewezen resultaten</li>
              <li>✓ Websites die bezoekers converteren naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Rotterdam cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Rotterdam & havenregio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Rotterdam - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Rotterdam" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Rotterdam met slimme marketing"
          subtitle="Havenstad domineren met lokale SEO en conversie"
          features={[
            {
              badge: "SEO Rotterdam",
              title: "SEO Specialist Rotterdam",
              description: "Wil je echt groeien in de havenstad? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit heel Rotterdam.",
              visualTitle: "Lokaal domineren",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Rotterdam",
              description: "Direct aanvragen van Rotterdammers en havenbedrijven. Je adverteert gericht op logistics, tech en dienstverlening en ziet onmiddellijk resultaat.",
              visualTitle: "Directe resultaten",
              visualSubtitle: "Maximum bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Rotterdam",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Rotterdam. Volledig geoptimaliseerd voor de internationale havenstad.",
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
          title="Rotterdam groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Rotterdam</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van havenbedrijf tot tech startup – ik help je bedrijf online groeien in de havenstad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Rotterdam */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Rotterdam</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO domineer jij Rotterdam. Word gevonden door mensen die nú zoeken naar jouw diensten in de havenstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Rotterdam</li>
                  <li>✓ Content autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Rotterdam */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Rotterdamse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Rotterdam</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Rotterdam en havenregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Rotterdam en omliggende steden</li>
                  <li>✓ Continu geoptimaliseerd voor ROI</li>
                  <li>✓ Meetbare resultaten die tellen</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt in Rotterdam.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Rotterdam</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke lokale Rotterdam zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Rotterdam</span>
              </h2>
              <p className="text-xl text-gray-600">
                Alles wat je wilt weten over online marketing in de havenstad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Wat kost SEO in Rotterdam?</h3>
                  <p className="text-gray-600">SEO voor Rotterdam bedrijven start vanaf €750 per maand. Voor havenbedrijven en internationale handel vaak hoger vanwege competitie en complexiteit.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Hoe snel zie ik resultaten?</h3>
                  <p className="text-gray-600">Voor Rotterdam lokale zoekopdrachten binnen 2-3 maanden. Voor competitieve termen zoals logistiek en harbor services 4-6 maanden.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Werk je met alle sectoren in Rotterdam?</h3>
                  <p className="text-gray-600">Ja! Van logistics en shipping tot tech startups, restaurants, dienstverlening en retail. Speciale expertise in havengerelateerde bedrijven.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Welke wijken bedien je in Rotterdam?</h3>
                  <p className="text-gray-600">Heel Rotterdam: Centrum, Kralingen, Feijenoord, Noord, Delfshaven, Kop van Zuid, Cool District, Markthal gebied en alle andere wijken.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Kan ik concurreren met grote havenbedrijven?</h3>
                  <p className="text-gray-600">Absoluut! Met slimme lokale SEO en nichegerichte content kunnen kleinere bedrijven excelleren in specifieke Rotterdam marktsegmenten.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Welke resultaten kan ik verwachten?</h3>
                  <p className="text-gray-600">Gemiddeld 150% meer website verkeer, 80% meer leads en zichtbaarheid op pagina 1 voor relevante Rotterdam zoektermen binnen 6 maanden.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Bied je ook Google Ads voor Rotterdam?</h3>
                  <p className="text-gray-600">Ja! Gerichte Google Ads campagnes voor Rotterdam en havenregio. Perfect voor snelle resultaten terwijl SEO zich ontwikkelt.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Hoe meet je succes in Rotterdam?</h3>
                  <p className="text-gray-600">Via Google rankings, website traffic uit Rotterdam, leads, conversies en ROI. Maandelijkse rapportages met duidelijke KPIs en groeicijfers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Rotterdam</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Rotterdam – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Rotterdam - Online Marketing Rotterdam & Omgeving</h3>
              <p className="text-gray-600">
                Centrum • Kralingen • Feijenoord • Rotterdam Noord • Kop van Zuid • Cool District • Markthal • Witte de Withkwartier • Delfshaven • Hoogvliet • Overschie • Schiebroek • Spijkenisse • Capelle aan den IJssel • Schiedam • Vlaardingen • Den Haag • Delft • Gouda
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}