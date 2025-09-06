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

export default function MarketingSoest() {
  // Lokale Soest reviews - groene woonplaats met natuur en voorzieningen
  const dutchReviews = [
    { name: 'Restaurant De Utrechtse Heuvelrug', rating: 5, text: 'Ons restaurant nabij Soestduinen krijgt nu gasten van heel de regio. De lokale SEO heeft ons bereik enorm vergroot!' },
    { name: 'Tuincentrum Soest', rating: 5, text: 'Als tuincentrum aan de Birkstraat profiteren we van de groene inwoners van Soest. Online marketing werkt perfect voor ons.' },
    { name: 'Fysiotherapie Soest Centrum', rating: 4.5, text: 'Voor onze praktijk in het centrum van Soest was lokale vindbaarheid cruciaal. Nu vinden patiënten ons uit heel Soest en omgeving.' },
    { name: 'Fietsenwinkel Soest', rating: 5, text: 'Met alle fietspaden rond Soest hebben we veel wielerliefhebbers. De SEO zorgt dat ze ons vinden voor service en nieuwe fietsen.' },
    { name: 'Schoonheidssalon Soest', rating: 5, text: 'Onze salon in Soest Noord wordt nu gevonden door klanten uit heel de gemeente. De investering betaalt zich dubbel uit!' },
    { name: 'Makelaar Soest Wonen', rating: 4.5, text: 'Voor woningverkoop in de gewilde woonplaats Soest zijn we nu het eerste resultaat in Google. Geweldige impact op leads.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kinderdagverblijf Soesterkwartier', rating: 5, text: 'Jonge gezinnen in Soest vinden ons nu moeiteloos. De lokale SEO heeft onze wachtlijst gevuld met nieuwe aanmeldingen.' },
    { name: 'Elektricien Soest Service', rating: 4.5, text: 'Voor spoedklussen en installaties in heel Soest worden we nu als eerste gevonden. Perfect resultaat voor ons bedrijf.' },
    { name: 'Tandartspraktijk Soest Centrum', rating: 5, text: 'Onze moderne praktijk trekt nu patiënten uit Soest, Soesterberg en omgeving. Marketing heeft echt impact gehad.' },
    { name: 'Restaurant Bos & Heide', rating: 5, text: 'Met onze ligging nabij natuurgebied Soestduinen krijgen we nu reserveringen van natuur- en eetliefhebbers uit de hele regio.' },
    { name: 'Autorijschool Soest', rating: 4.5, text: 'Jonge Soesters vinden onze rijschool nu gemakkelijk online. De lokale focus in SEO werkt perfect voor onze doelgroep.' },
    { name: 'Dierenarts Soest', rating: 5, text: 'Met veel huisdieren in Soest was lokale vindbaarheid essentieel. Nu krijgen we nieuwe patiënten uit heel de gemeente en daarbuiten.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Soest | Marketing Bureau & Online Marketing Soest</title>
        <meta
          name="description"
          content="SEO Specialist Soest inschakelen? Kies voor hét marketing bureau in Soest. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/soest" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Soest: Groeien in de Groene Gemeente</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">46.000 inwoners, eindeloze mogelijkheden</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Soest: waar natuur, comfort en ondernemerschap hand in hand gaan.</strong><br />
              Met 46.000+ inwoners, prachtige natuurgebieden zoals Soestduinen, sterke koopkracht en nabijheid van Amersfoort en Utrecht biedt Soest een ideale markt voor lokale ondernemers. Als <b>SEO specialist Soest</b> help ik bedrijven profiteren van deze welvarende, groene gemeenschap die kwaliteit waardeert.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Soest: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Soest</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Soest</li>
              <li>✓ <b>SEO Soest</b> met meetbaar resultaat</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Soest & Utrechtse Heuvelrug</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Soest - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Soest" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Soest met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Soest",
              title: "SEO Specialist Soest",
              description: "Wil je echt groeien in Soest? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Soest",
              description: "Direct aanvragen van inwoners uit Soest. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Soest",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Soest. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Soest groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Soest</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale dienstverlener tot horeca – ik help je bedrijf online groeien in Soest.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Soest */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Soest</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Soest.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Soest</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Soest */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Soestse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Soest</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Soest.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Soest en omliggende dorpen</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Resultaat dat telt</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Soest</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke lokale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Soest</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Waarom lokale SEO in Soest?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Soest heeft 46.000 inwoners met sterke koopkracht die kwaliteit waarderen. Lokale SEO zorgt dat je wordt gevonden door deze aantrekkelijke doelgroep. Perfect voor alle soorten dienstverlening en detailhandel.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Wat kost SEO voor een bedrijf in Soest?</summary>
                <div className="mt-4 text-gray-600">
                  <p>SEO projecten starten vanaf €800 per maand. Voor Soestse ondernemers bied ik maatwerk afgestemd op de lokale markt. De investering loont door de kwaliteit van de lokale doelgroep. Eerst een gratis kennismakingsgesprek.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe lang duurt het voor ik resultaat zie?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Eerste verbeteringen zie je binnen 4-8 weken. Soest heeft een gezonde concurrentie, maar met goede lokale SEO kom je snel bovenaan. Google Ads leveren direct resultaat vanaf dag 1.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Werk je met alle type bedrijven in Soest?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Ja, van lokale dienstverleners tot winkels, van horeca tot zakelijke services. Soest's welvarende inwoners bieden kansen voor veel sectoren. Ik pas de strategie aan op jouw specifieke doelgroep.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe werkt Google Ads voor Soest?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Google Ads zijn effectief voor Soest door de hoge koopkracht van inwoners. Je kunt starten met budgets vanaf €400-600/maand en uitbreiden naar omliggende plaatsen zoals Amersfoort en Hilversum.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Krijg ik ook klanten uit omliggende plaatsen?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Zeker! Dankzij de centrale ligging trek je klanten uit Amersfoort, Hilversum, Soesterberg en heel de Utrechtse Heuvelrug. Soest is een aantrekkelijke uitvalsbasis voor de hele regio.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Soest</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Soest – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Soest - Online Marketing Soest & Omgeving</h3>
              <p className="text-gray-600">
                Soest Centrum • Soest Noord • Soest Zuid • Birkstraat • Soestduinen • Soesterberg • En natuurlijk ook actief in: Amersfoort • Hilversum • Baarn • Zeist • Utrecht • Bunschoten-Spakenburg
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}