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

export default function MarketingLeiden() {
  // Lokale Leiden reviews - Universiteitstad met life sciences & biotech
  const dutchReviews = [
    { name: 'Biotech Leiden Bio Science Park', rating: 5, text: 'Op het Bio Science Park bedienen we internationale farmaceutische bedrijven en onderzoeksinstituten. Door B2B marketing groeien we exponentieel!' },
    { name: 'Restaurant Burcht Leiden', rating: 5, text: 'Vlak bij de historische Burcht veel toeristen en studenten. Onze prachtige ligging aan de grachten trekt nu bezoekers uit heel Europa!' },
    { name: 'Tandarts Merenwijk', rating: 5, text: 'In Merenwijk veel jonge gezinnen en professionals. Door lokale SEO krijgen we continu nieuwe patiënten uit de wijk.' },
    { name: 'Universiteitsboekhandel Breestraat', rating: 4.5, text: 'Op de bruisende Breestraat bedienen we studenten en academici van de Universiteit Leiden. Perfecte mix van online en offline verkoop!' },
    { name: 'IT Consultancy Campus Den Haag', rating: 5, text: 'Vanuit Leiden Campus Den Haag bedienen we tech-startups en multinationals. Door marketing bereiken we klanten in heel de regio!' },
    { name: 'Advocaat Pieterskerk-Choorsteeg', rating: 5, text: 'In het hart van Leiden veel juridische diensten nodig voor universiteit, studenten en bedrijven. Staan nu bovenaan voor "advocaat Leiden"!' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Haarlemmerstraat', rating: 5, text: 'De Haarlemmerstraat is een levendige winkelstraat. Onze salon profiteert van de mix van studenten en locals die hier shoppen.' },
    { name: 'Fysiotherapie Stevenshof', rating: 4.5, text: 'Stevenshof is een rustige woonwijk met veel senioren. Onze praktijk wordt nu goed gevonden door oudere patiënten die kwaliteit zoeken.' },
    { name: 'Life Sciences Startup Oegstgeest', rating: 5, text: 'Vanuit de grens Leiden-Oegstgeest bereiken we de gehele life sciences sector. Door online marketing groeien onze internationale contacten!' },
    { name: 'Autogarage Zoeterwoude-Rijndijk', rating: 5, text: 'Aan de rand van Leiden veel bedrijvigheid. We trekken nu klanten uit Leiden, Zoeterwoude en omliggende gemeenten voor specialistische auto-services.' },
    { name: 'Schoonheidssalon Professorenwijk', rating: 4.5, text: 'De Professorenwijk heeft veel hoogopgeleiden. Onze salon wordt nu beter gevonden door klanten die premium beauty behandelingen waarderen.' },
    { name: 'Psychologenpraktijk Roodenburg', rating: 5, text: 'In Roodenburg veel jonge professionals en kenniswerkers. Door SEO krijgen we patiënten die bewust kiezen voor mentale gezondheid.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Leiden | Marketing Bureau & Online Marketing Leiden</title>
        <meta
          name="description"
          content="SEO Specialist Leiden inschakelen? Kies voor hét marketing bureau in Leiden. Meer klanten met lokale SEO, Google Ads en professionele marketing voor de universiteitstad."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/leiden" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Leiden: Universiteitstad & Life Sciences Hub</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">125.000 Leidenaren wachten op jouw expertise</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Leiden: waar eeuwenoude academische traditie en baanbrekende wetenschappelijke innovatie elkaar ontmoeten.</strong><br />
              Van de historische Universiteit Leiden (1575) tot het wereldberoemde Bio Science Park, van de pittoreske grachten tot cutting-edge life sciences onderzoek - Leiden combineert rijke Nederlandse geschiedenis met internationale kenniseconomie. Met 125.000+ inwoners, waaronder 30.000+ studenten en duizenden onderzoekers, biedt Leiden ondernemers unieke kansen in biotechnologie, farmaceutische industrie en academische dienstverlening. Als <b>SEO specialist Leiden</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze inspirerende universiteitstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Leiden: zichtbaar in de kenniseconomie</li>
              <li>✓ Google Ads: bereik 125.000+ inwoners + internationale gemeenschap</li>
              <li>✓ Speciaal voor biotech, life sciences en onderzoeksbedrijven</li>
              <li>✓ <b>SEO Leiden</b> met focus op academische en zakelijke diensten</li>
              <li>✓ Websites die passen bij Leiden's wetenschappelijke karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Leiden cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Leiden & het Bio Science Park</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Leiden - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Leiden" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Leiden met wetenschappelijk gefundeerde marketing"
          subtitle="Digitale groei voor de universiteitstad & life sciences sector"
          features={[
            {
              badge: "SEO Leiden",
              title: "SEO Specialist Leiden",
              description: "Leiden heeft een unieke mix van academische traditie, internationale studenten en baanbrekende life sciences. Ik zorg dat jouw bedrijf opvalt tussen universitaire concurrentie én wereldwijde biotech-bedrijven door strategisch bovenaan te staan voor relevante zoekopdrachten.",
              visualTitle: "Wetenschappelijk bewezen",
              visualSubtitle: "Academisch niveau",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Leiden",
              description: "Direct zichtbaar voor 125.000+ Leidenaren, 30.000+ studenten en internationale onderzoekers. Adverteer gericht van centrum tot Bio Science Park en zie direct resultaat in je agenda met hoogwaardige leads.",
              visualTitle: "Directe zichtbaarheid",
              visualSubtitle: "Internationale reach",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Leiden",
              description: "Professionele, wetenschappelijk verantwoorde websites die passen bij Leiden's academische standaarden. Volledig geoptimaliseerd voor de lokale markt, internationale onderzoekswereld en life sciences sector.",
              visualTitle: "Website & Onderzoek",
              visualSubtitle: "Life Sciences focus",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Leiden groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Leiden</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van life sciences startups tot gevestigde onderzoeksinstituten – ik help ambitieuze ondernemers online groeien in de academische universiteitstad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Leiden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Leiden</h3>
                <p className="text-gray-600 mb-6">
                  In een kennisintensieve stad als Leiden is strategische online zichtbaarheid cruciaal. Word gevonden door studenten, onderzoekers, biotech-professionals en locals in alle wijken van de universiteitstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Leiden</li>
                  <li>✓ Academische & biotech-gerichte SEO</li>
                  <li>✓ Wetenschappelijke content strategie</li>
                  <li>✓ Reviews in internationale gemeenschap</li>
                </ul>
              </div>
              {/* Google Ads Leiden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor life sciences
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Leiden</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 125.000+ Leidenaren, universiteitsstudenten en internationale biotech-professionals met strategisch gerichte campagnes voor maximale impact in de kenniseconomie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Life sciences-gerichte advertenties</li>
                  <li>✓ Student & onderzoeker targeting</li>
                  <li>✓ Academisch geoptimaliseerd</li>
                  <li>✓ B2B & B2C in kennissector</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Wetenschappelijk verantwoorde, professionele websites die passen bij Leiden's academische excellentie en zorgen voor meer conversies uit de kenniseconomie en universitaire gemeenschap.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Academisch-geïnspireerd design</li>
                  <li>✓ Internationaal toegankelijk</li>
                  <li>✓ Research-based conversie optimalisatie</li>
                  <li>✓ Optimaal bereik universitaire gemeenschap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Leiden</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Leiden?</h3>
                <p className="text-gray-600">
                  Leiden heeft een unieke mix van studenten, onderzoekers, locals en internationale biotech-professionals. Met 125.000+ inwoners plus 30.000+ studenten en duizenden internationale wetenschappers is lokale zichtbaarheid essentieel. Van het historische centrum tot het Bio Science Park - verschillende doelgroepen zoeken op verschillende manieren naar diensten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Leiden van andere steden?</h3>
                <p className="text-gray-600">
                  Leiden combineert eeuwenoude academische traditie met cutting-edge life sciences innovatie. De stad heeft veel hoogopgeleide bewoners, internationale onderzoekers en een sterke biotech-sector. Marketing moet daarom wetenschappelijk verantwoord zijn, academisch credibel én internationaal aantrekkelijk - een balans tussen traditie en innovatie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Leiden zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Breestraat, Pieterskerk) voor retail en cultuur, Bio Science Park voor life sciences, Merenwijk voor moderne gezinnen, Stevenshof voor senioren, Professorenwijk voor hoogopgeleiden, en Roodenburg voor jonge professionals. Elke wijk heeft eigen karakteristieken - van studenten tot onderzokers tot welvarende gezinnen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Leiden?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €900-1600 per maand, afhankelijk van doelgroep en sector. Google Ads beheer vanaf €600 per maand plus advertentiebudget. Websiteprojecten vanaf €3500. Leiden heeft veel hoogwaardige bedrijven en internationale klanten in life sciences, waardoor investeringen in professionele marketing uitstekend renderen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook de internationale onderzoeksgemeenschap?</h3>
                <p className="text-gray-600">
                  Absoluut! Leiden heeft duizenden internationale studenten, onderzoekers en biotech-professionals. SEO kan worden geoptimaliseerd voor Engelstalige zoekopdrachten, wetenschappelijke terminologie en meertalige content. Perfect voor bedrijven die zowel lokaal als internationaal willen groeien in de life sciences sector.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Leiden?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-4 maanden, significante verbetering binnen 4-8 maanden. Google Ads geven directe zichtbaarheid. Leiden's hoogopgeleide gemeenschap is online zeer actief en zoekt bewust naar kwaliteit, waardoor goed uitgevoerde marketing hier sneller resultaat oplevert dan in andere steden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Leiden?</h3>
                <p className="text-gray-600">
                  Life sciences en biotech, onderzoek en ontwikkeling, academische diensten, gezondheidszorg en wellness, onderwijs en training, juridische diensten, cultuur en toerisme, en premium retail. Leiden's mix van wetenschap, historie en internationale gemeenschap biedt kansen voor hoogwaardige, kennisintensieve diensten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Leiden?</h3>
                <p className="text-gray-600">
                  Basis social media kun je zelf doen, maar Leiden's diverse doelgroepen (studenten, onderzoekers, locals, internationale professionals) vereisen gespecialiseerde expertise. Voor echte groei in deze unieke academische markt heb je kennis nodig van zowel lokale SEO als internationale targeting en wetenschappelijke communicatie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Leiden</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de academische universiteitstad – altijd eerlijk advies en wetenschappelijk gefundeerde aanpak.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Leiden - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Actief in Leiden en omgeving: Centrum • Bio Science Park • Merenwijk • Stevenshof • Professorenwijk • Roodenburg • Breestraat • Katwijk • Noordwijk • Voorschoten • Leiderdorp • Oegstgeest • Zoeterwoude • Wassenaar
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}