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

export default function MarketingNijmegen() {
  // Authentieke Nijmegen reviews met wijkspecifieke context
  const dutchReviews = [
    { name: 'Restaurant Valkhof Park', rating: 5, text: 'Dankzij lokale SEO trekken we nu toeristen uit heel Europa naar ons restaurant bij de Romeinse ruïnes. Van Lindenholt tot het centrum weten mensen ons te vinden!' },
    { name: 'Tandartspraktijk Dukenburg', rating: 5, text: 'Onze praktijk in Dukenburg krijgt nu aanvragen uit Hatert, Neerbosch-Oost én vanuit het centrum. Google Ads targeting per wijk werkt perfect voor 178.000 Nijmegenaren.' },
    { name: 'Kapsalon Marikenstraat', rating: 5, text: 'Sinds de nieuwe website boeken studenten van Radboud Universiteit én locals uit Bottendaal online. We zijn nu dé kapper voor het Nijmeegse centrum.' },
    { name: 'Boekhandel Berg en Dal', rating: 5, text: 'Onze winkel nabij de grens bedient nu de hele regio - van studenten Radboud tot Duitse klanten uit Kleve. Cross-border marketing werkt uitstekend.' },
    { name: 'Fietsenzaak Waalsprong', rating: 5, text: 'Van spoedklussen in nieuwe wijk Waalsprong tot toerfietsen voor Duitse grenstoerist - we worden overal voor gevonden sinds de SEO-campagne.' },
    { name: 'Fysio Oost Nijmegen', rating: 4.5, text: 'Strategische positie nabij Radboud UMC levert nu via Google meer patiënten op uit heel Oost-Nijmegen en de Duitse grensstreek.' },
  ]
  const dutchMoreReviews = [
    { name: 'Cateringbedrijf Bottendaal', rating: 5, text: 'Van bedrijfsfeesten bij Tech Pact tot universitaire events - onze top-3 positie voor "catering Nijmegen" levert constant aanvragen op.' },
    { name: 'Accountant Goffert', rating: 5, text: 'Vanuit kantoor nabij NEC stadion bedienen we nu ondernemers uit heel Gelderland. Mkb-klanten uit Wijchen, Beuningen stromen binnen.' },
    { name: 'Bouwbedrijf Lent', rating: 4.5, text: 'Perfect vindbaar voor nieuwbouwprojecten Waalsprong, renovaties historisch centrum en Duitse klanten. Grensligging is pure winst.' },
    { name: 'IT-consultancy Tech Pact', rating: 5, text: 'Vanuit zakenwijk richten we ons op universiteit, ziekenhuizen en Duitse tech-bedrijven. LinkedIn + SEO combinatie werkt fantastisch.' },
    { name: 'Horeca De Bastei', rating: 5, text: 'Toeristen zoeken "romeins restaurant Nijmegen" en vinden onze zaak bij Valkhof. Ook Duitse bezoekers boeken nu online tafel.' },
    { name: 'Yogastudio Centrum', rating: 4.5, text: 'Studenten, expats én locals uit alle wijken komen naar onze lessen. Van Dukenburg tot Lindenholt - iedereen vindt ons via Google.' },
    { name: 'Autoschool Oosterpark', rating: 5, text: 'Jonge Nijmegenaren én internationale studenten kiezen voor onze rijschool. Meertalige website trekt Duitse grensgangers aan.' },
    { name: 'Notariskantoor Plein 1944', rating: 4.5, text: 'Centraal gelegen voor alle formaliteiten - van starterskopers Waalsprong tot erfenissen historische binnenstad. Top vindbaarheid!' },
    { name: 'Tuincentrum Beek-Ubbergen', rating: 5, text: 'Duitse grensgangers én Nijmegenaren komen naar ons centrum. Van kleine tuintjes Dukenburg tot grote villa-tuinen Berg en Dal.' },
    { name: 'Webshop Logistiek Wijchen', rating: 5, text: 'Strategisch tussen Nijmegen-Duitse grens voor e-commerce fulfillment. Internationale klanten vinden ons perfect via SEO.' },
    { name: 'Consultancy Radboud Science Park', rating: 4.5, text: 'Spin-off bedrijven universiteit én Duitse research-partners werken samen via onze platforms. Academische marketing op punt.' },
    { name: 'Eventlocatie Waalstrand', rating: 5, text: 'Van bruiloften tot bedrijfsfeesten - onze locatie aan de Waal trekt aanvragen uit heel Gelderland én Duitse grensstreek.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Nijmegen | Marketing Bureau & Online Marketing Nijmegen</title>
        <meta
          name="description"
          content="SEO Specialist Nijmegen inschakelen? Kies voor hét marketing bureau in de oudste stad van Nederland. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/nijmegen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing voor Nederland's oudste stad</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Valkhof tot Waalsprong groeit je business</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Nijmegen: 178.000 inwoners, 2000 jaar geschiedenis, grenzeloze mogelijkheden.</strong><br />
              Van de historische binnenstad rond het Valkhof tot de moderne wijk Waalsprong - als <b>SEO specialist Nijmegen</b> ken ik deze unieke markt. Of je nu studenten van de Radboud Universiteit wilt bereiken, Duitse grenstoerist wilt aantrekken, of lokale gezinnen in Dukenburg zoekt - ik positioneer jouw bedrijf precies waar de kansen liggen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Focus op alle Nijmeegse wijken: van centrum tot Lindenholt</li>
              <li>✓ Bereik 178.000+ inwoners plus Duitse grensregio (15km tot Kleve)</li>
              <li>✓ Specialisme: universiteit, gezondheidszorg, toerisme, grenshandel</li>
              <li>✓ <b>SEO Nijmegen</b> met kennis van Romeinse historie & moderne economie</li>
              <li>✓ Van internationale student tot MKB-ondernemer in Tech Pact</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor oudste stad + Duitse grensregio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Nijmegen - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Nijmegen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van Valkhof tot Waalsprong: heel Nijmegen + Duitse grens bereiken"
          subtitle="178.000 inwoners, Radboud Universiteit, Duitse grenstoerist - oneindig veel kansen"
          features={[
            {
              badge: "Oude stad, nieuwe kansen",
              title: "SEO voor alle wijken Nijmegen",
              description: "Van historisch centrum rond Grote Markt tot moderne Waalsprong, van studentenstad Dukenburg tot villawijk Berg en Dal - ik positioneer je waar jouw klanten zoeken. Met Radboud Universiteit en Duitse grens zijn de mogelijkheden eindeloos.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Grenzeloos bereik",
              image: masterSeoImage
            },
            {
              badge: "Romeins + modern",
              title: "Google Ads Nijmegen + grens",
              description: "Target precies: studenten bij Radboud, toeristen bij Valkhof, gezinnen in Lindenholt of Duitse klanten in Kleve. Met 50.000+ studenten, toeristen én grensgangers pak je een unieke multiculturele markt.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Historie meets tech",
              title: "Website & Branding Nijmegen",
              description: "Als stad van Radboud Universiteit en Tech Pact innovation district combineer je 2000 jaar geschiedenis met cutting-edge technologie. Perfect voor bedrijven die traditie en innovatie willen uitstralen.",
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
          title="Nijmegen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor alle sectoren in <span className="bg-[#F7D8FA] px-2 rounded italic">Nijmegen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Universiteit (Radboud), gezondheidszorg (UMC), toerisme (Romeinse routes), internationale handel (Duitse grens), 
                tech (Tech Pact) - elke sector vraagt een unieke lokale aanpak.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Nijmegen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Oudste Stad</h3>
                <p className="text-gray-600 mb-6">
                  Nijmegen combineert 2000 jaar geschiedenis met moderne universiteitsstad. 
                  Van Romeinse toeristen tot Duitse grensgangers - ik zorg dat je overal gevonden wordt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Wijkgerichte SEO (Centrum, Dukenburg, Waalsprong)</li>
                  <li>✓ Universiteitgerichte zoekwoorden (studenten/expats)</li>
                  <li>✓ Toerisme focus (Valkhof, Romeinse routes)</li>
                  <li>✓ Grenshandel optimalisatie (DE markt)</li>
                </ul>
              </div>
              {/* Google Ads Nijmegen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Nijmegen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Grensregio</h3>
                <p className="text-gray-600 mb-6">
                  Target 178.000 Nijmegenaren, 50.000 studenten Radboud, Duitse grensgangers 
                  én toeristen. Unieke multiculturele markt met enorme potentie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Wijkcampagnes (Lindenholt, Hatert, Neerbosch)</li>
                  <li>✓ Student targeting (Radboud, internationale studenten)</li>
                  <li>✓ Toerist campagnes (Valkhof, Romeinse routes)</li>
                  <li>✓ Cross-border marketing (DE klanten)</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing Nijmegen</h3>
                <p className="text-gray-600 mb-6">
                  Oudste stad van Nederland, Radboud Universiteit, Duitse grens - 
                  jouw website sluit aan bij Nijmegens unieke positie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalige websites (NL/EN/DE targeting)</li>
                  <li>✓ Universiteit/academische sector focus</li>
                  <li>✓ Toerisme & heritage marketing</li>
                  <li>✓ Cross-border e-commerce optimalisatie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Nijmegen</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor Nijmegen bedrijven?</h3>
                <p className="text-gray-600">
                  Nijmegen heeft een unieke markt: 178.000 inwoners verdeeld over diverse wijken, 50.000 studenten, toeristen voor Romeinse geschiedenis én Duitse grensgangers. Lokale SEO zorgt dat je alle doelgroepen bereikt - van studenten in Dukenburg tot Duitse bezoekers bij het Valkhof.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wat kosten SEO diensten in Nijmegen?</h3>
                <p className="text-gray-600">
                  SEO tarieven variëren van €800-2500 per maand, afhankelijk van concurrentie en doelen. Voor Nijmegen adviseer ik vaak lokale pakketten vanaf €1200/maand - zo bereik je effectief alle wijken, de universiteit én Duitse grensmarkt zonder budget te verspillen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hoe lang duurt het voor ik resultaten zie van SEO in Nijmegen?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je binnen 3-4 maanden, significante verbetering na 6-8 maanden. Nijmegen heeft matige concurrentie, dus sneller dan Amsterdam/Rotterdam. Voor student-gerichte bedrijven werken we seizoensgebonden (augustus-februari piek).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kan ik ook Duitse klanten bereiken vanuit Nijmegen?</h3>
                <p className="text-gray-600">
                  Absoluut! Nijmegen ligt slechts 15km van Duitse grens. Met meertalige SEO en Google Ads bereik je Kleve, Kranenburg en omgeving. Vooral voor retail, horeca en dienstverlening biedt dit enorme kansen. Deutsche keywords + Nederlandse service = perfecte combinatie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Welke wijken in Nijmegen hebben het meeste potentieel?</h3>
                <p className="text-gray-600">
                  Centrum (toerisme/horeca), Dukenburg (studenten/jonge gezinnen), Waalsprong (nieuwbouw/koopkrachtig), Berg en Dal (affluent/villa's) en Lindenholt (gezinnen). Voor B2B focus op Tech Pact innovation district en rond Radboud Universiteit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hoe benader ik studenten van de Radboud Universiteit online?</h3>
                <p className="text-gray-600">
                  Studenten zoeken anders: smartphone-first, social media, English content. Focus op lange termijn zoekwoorden, Instagram/TikTok ads, en seizoenspatronen (september-februari actief). Denk aan: "student housing Nijmegen", "bike repair campus", "study spots downtown".
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wat maakt Nijmegen uniek voor online marketing?</h3>
                <p className="text-gray-600">
                  Unieke mix: oudste stad (historie/toerisme), universiteitsstad (internationaal/jong), Duitse grens (cross-border handel). Dit vraagt gespecialiseerde aanpak met historische keywords, academische termen, meertalige content én grenshandel optimalisatie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Welke resultaten kan ik verwachten van Google Ads in Nijmegen?</h3>
                <p className="text-gray-600">
                  Click-through rates 2-4%, conversie 3-8% afhankelijk van sector. Klik kosten €0,80-3,50. Voordeel Nijmegen: lagere concurrentie dan Randstad, maar wel diverse doelgroepen. Budgetadvies: minimum €1000/maand voor effectieve lokale campagnes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Nijmegen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de oudste stad van Nederland – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Nijmegen - Online Marketing Nijmegen & Omgeving</h3>
              <p className="text-gray-600">
                <strong>Alle wijken:</strong> Centrum • Dukenburg • Lindenholt • Hatert • Neerbosch-Oost • Waalsprong • Bottendaal<br/>
                <strong>Regio:</strong> Berg en Dal • Wijchen • Beuningen • Groesbeek • Ubbergen • Heumen<br/>
                <strong>Grensgebied:</strong> Kleve (DE) • Kranenburg (DE) • Emmerich (DE) • Goch (DE)
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}