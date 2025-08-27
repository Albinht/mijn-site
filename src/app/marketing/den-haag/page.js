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

export default function MarketingDenHaag() {
  // Lokale Den Haag reviews - hofstad met internationale uitstraling
  const dutchReviews = [
    { name: 'Hotel Des Indes Lange Voorhout', rating: 5, text: 'Ons luxe hotel op het prestigieuze Lange Voorhout wordt nu perfect gevonden door internationale gasten. Fantastische stijging in directe boekingen!' },
    { name: 'Restaurant Binnenhof', rating: 5, text: 'In het hart van de hofstad, nabij het Binnenhof, krijgen we nu politici en diplomaten als gasten. De lokale SEO heeft ons op de kaart gezet.' },
    { name: 'Advocatenkantoor Bezuidenhout', rating: 5, text: 'Vanuit het diplomatieke Bezuidenhout bedienen we nu internationale rechtszaken. Google Ads levert structureel kwalitatieve leads op.' },
    { name: 'Consultancy Vredespaleis', rating: 5, text: 'In de buurt van het Vredespaleis was sterke online aanwezigheid cruciaal voor internationale cliënten. Perfect resultaat met lokale marketing.' },
    { name: 'Café Scheveningen Boulevard', rating: 4.5, text: 'Aan de bruisende Scheveningse Boulevard hebben we nu constant bezoekers uit heel Europa. Excellent voor ons seizoensgebonden bedrijf.' },
    { name: 'IT-Bureau Haagse Bos', rating: 5, text: 'In het groene Haagse Bos waren we onzichtbaar online, nu staan we bovenaan voor tech-diensten in Den Haag. Geweldige groei!' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Tandartspraktijk Statenkwartier', rating: 5, text: 'Vanuit het chique Statenkwartier bereiken we nu patiënten uit heel Den Haag. Structurele groei in nieuwe aanmeldingen via Google.' },
    { name: 'Notariskantoor Centrum', rating: 5, text: 'Voor zakelijke dienstverlening in het centrum was sterke digitale aanwezigheid essentieel. Excellent resultaat met gerichte SEO strategie.' },
    { name: 'Sportschool Laak', rating: 4.5, text: 'In de multiculturele wijk Laak krijgen we nu leden uit heel Den Haag-Oost. Perfect bereik dankzij lokale marketing campagnes.' },
    { name: 'Kapsalon Noordeinde', rating: 5, text: 'Op het koninklijke Noordeinde is concurrentie groot, maar we staan nu bovenaan. Agenda vol met klanten uit de hele hofstad!' },
    { name: 'Juridisch Advies Malieveld', rating: 5, text: 'Nabij het Malieveld bedienen we nu overheidsmedewerkers en diplomaten uit heel Den Haag. De SEO investering betaalt zich dubbel terug.' },
    { name: 'Bouwbedrijf Loosduinen', rating: 4.5, text: 'Voor projecten in opkomende wijken als Loosduinen en Segbroek zijn we nu de eerste keuze. Constant nieuwe opdrachten via online kanalen.' },
    { name: 'Design Studio Zeeheldenkwartier', rating: 5, text: 'In het trendy Zeeheldenkwartier bereiken we nu creatieve opdrachten uit heel de Randstad. Fantastische online zichtbaarheid!' },
    { name: 'Consultancy International Zone', rating: 4.5, text: 'Onze business services in de International Zone worden nu gevonden door internationale organisaties. Top resultaat voor B2B marketing!' },
    { name: 'Restaurant Pier Scheveningen', rating: 5, text: 'Op de iconische pier van Scheveningen krijgen we nu gasten van over heel Europa. De marketing strategie heeft ons internationaal zichtbaar gemaakt.' },
    { name: 'Accountantskantoor Ypenburg', rating: 5, text: 'Vanuit modern Ypenburg bedienen we nu ondernemers uit heel groot Den Haag. Prachtige groei in onze zakelijke klantenportefeuille.' },
    { name: 'Fitnessstudio Transvaal', rating: 4.5, text: 'In deze multiculturele wijk zijn we nu dé fitnessstudio voor ambitieuze Hagenaars. Ledenaantal verdubbeld dankzij lokale SEO!' },
    { name: 'Tech Startup International Campus', rating: 5, text: 'Op de International Campus The Hague bereiken we nu tech-investeerders uit heel Europa. Excellent resultaat met gerichte online marketing.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Den Haag | Marketing Bureau & Online Marketing Den Haag</title>
        <meta
          name="description"
          content="SEO Specialist Den Haag inschakelen? Kies voor hét marketing bureau in Den Haag. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/den-haag" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Den Haag</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Binnenhof tot Scheveningen: heel de hofstad bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Den Haag: waar internationale politiek en Nederlandse traditie samenkomen.</strong><br />
              Met het Binnenhof als politieke hart, het Vredespaleis voor internationale rechtspraak, diplomaten in Bezuidenhout en het bruisende Scheveningen aan zee biedt Den Haag unieke zakelijke kansen. Als <b>SEO specialist Den Haag</b> positioneer ik je tussen de 8.000+ bedrijven die hier floreren - van advocatenkantoor in het Centrum tot international business op de International Campus.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Den Haag: domineer de hofstad</li>
              <li>✓ Google Ads: direct klanten uit heel Den Haag</li>
              <li>✓ Speciaal voor bedrijven in recht, overheid en internationale dienstverlening</li>
              <li>✓ <b>SEO Den Haag</b> met bewezen resultaten</li>
              <li>✓ Websites die bezoekers converteren naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Den Haag cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Den Haag & hofstad regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Den Haag - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Den Haag" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Den Haag met slimme marketing"
          subtitle="Hofstad domineren met lokale SEO en conversie"
          features={[
            {
              badge: "SEO Den Haag",
              title: "SEO Specialist Den Haag",
              description: "Wil je echt groeien in de hofstad? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit heel Den Haag.",
              visualTitle: "Lokaal domineren",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Den Haag",
              description: "Direct aanvragen van Hagenaars en internationale organisaties. Je adverteert gericht op juridische diensten, overheid en diplomatie en ziet onmiddellijk resultaat.",
              visualTitle: "Directe resultaten",
              visualSubtitle: "Maximum bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Den Haag",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Den Haag. Volledig geoptimaliseerd voor de internationale hofstad.",
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
          title="Den Haag groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Den Haag</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van overheidsinstelling tot international business – ik help je bedrijf online groeien in de hofstad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Den Haag */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Den Haag</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO domineer jij Den Haag. Word gevonden door mensen die nú zoeken naar jouw diensten in de hofstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Den Haag</li>
                  <li>✓ Content autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Den Haag */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Haagse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Den Haag</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Den Haag en hofstad regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Den Haag en omliggende gemeenten</li>
                  <li>✓ Continu geoptimaliseerd voor ROI</li>
                  <li>✓ Meetbare resultaten die tellen</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt in Den Haag.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Den Haag</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke lokale Den Haag zichtbaarheid</li>
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
                Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Den Haag</span>
              </h2>
              <p className="text-xl text-gray-600">
                Alles wat je wilt weten over online marketing in de hofstad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Wat kost SEO in Den Haag?</h3>
                  <p className="text-gray-600">SEO voor Den Haag bedrijven start vanaf €850 per maand. Voor overheidsorganisaties en internationale dienstverlening vaak hoger vanwege competitie en complexiteit.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Hoe snel zie ik resultaten?</h3>
                  <p className="text-gray-600">Voor Den Haag lokale zoekopdrachten binnen 2-3 maanden. Voor competitieve termen zoals advocatuur en international business 4-6 maanden.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Werk je met alle sectoren in Den Haag?</h3>
                  <p className="text-gray-600">Ja! Van juridische dienstverlening en overheidsorganisaties tot internationale bedrijven, restaurants en retail. Speciale expertise in government relations en diplomatie.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Welke wijken bedien je in Den Haag?</h3>
                  <p className="text-gray-600">Heel Den Haag: Centrum, Scheveningen, Bezuidenhout, Statenkwartier, Haagse Bos, Zeeheldenkwartier, Laak, Loosduinen, Ypenburg en alle andere wijken.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Kan ik concurreren met grote advocatenkantoren?</h3>
                  <p className="text-gray-600">Absoluut! Met slimme lokale SEO en nichegerichte content kunnen kleinere praktijken excelleren in specifieke Den Haag rechtsgebieden.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Welke resultaten kan ik verwachten?</h3>
                  <p className="text-gray-600">Gemiddeld 160% meer website verkeer, 85% meer leads en zichtbaarheid op pagina 1 voor relevante Den Haag zoektermen binnen 6 maanden.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Bied je ook Google Ads voor Den Haag?</h3>
                  <p className="text-gray-600">Ja! Gerichte Google Ads campagnes voor Den Haag en hofstad regio. Perfect voor snelle resultaten terwijl SEO zich ontwikkelt.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Hoe meet je succes in Den Haag?</h3>
                  <p className="text-gray-600">Via Google rankings, website traffic uit Den Haag, leads, conversies en ROI. Maandelijkse rapportages met duidelijke KPIs en groeicijfers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Den Haag</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Den Haag – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Den Haag - Online Marketing Den Haag & Omgeving</h3>
              <p className="text-gray-600">
                Centrum • Scheveningen • Bezuidenhout • Statenkwartier • Haagse Bos • Zeeheldenkwartier • Laak • Loosduinen • Ypenburg • Mariahoeve • Bouwlust • Transvaal • Schilderswijk • Rotterdam • Delft • Zoetermeer • Rijswijk • Leidschendam-Voorburg • Wassenaar
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}