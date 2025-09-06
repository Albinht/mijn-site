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

export default function MarketingSneek() {
  // Lokale Sneek reviews - Friese waterstad met zeilsport
  const dutchReviews = [
    { name: 'Jachtwerf Sneek', rating: 5, text: 'Onze jachtwerf aan het Sneekermeer krijgt nu klanten van heel Europa. Lokale SEO gecombineerd met internationale marketing werkt perfect!' },
    { name: 'Restaurant Waterpoort', rating: 5, text: 'Ons restaurant aan de historische Waterpoort wordt nu gevonden door toeristen en locals. Reserveringen stromen binnen dankzij sterke SEO.' },
    { name: 'Zeilschool Sneekermeer', rating: 4.5, text: 'Voor onze zeilschool was online vindbaarheid cruciaal. Nu krijgen we cursisten uit heel Nederland die naar Sneek komen voor zeillessen.' },
    { name: 'Marina Sneek', rating: 5, text: 'Onze jachthaven profiteert van watersporters en toeristen. De marketing zorgt voor constante bezetting in het seizoen.' },
    { name: 'Friese Scheepvaartmuseum Shop', rating: 5, text: 'Als museumwinkel krijgen we nu meer bezoekers die onze Friese producten ontdekken. Online zichtbaarheid werkt geweldig!' },
    { name: 'Bed & Breakfast Sneek', rating: 4.5, text: 'Ons B&B nabij het centrum krijgt nu gasten die Sneek en het Sneekermeer bezoeken. Boekingen lopen het hele seizoen door.' },
  ]
  const dutchMoreReviews = [
    { name: 'Watersportwinkel Sneek', rating: 5, text: 'Als specialist in zeilkleding en bootaccessoires bereiken we nu klanten uit heel Friesland en daarbuiten. Fantastisch resultaat!' },
    { name: 'Fysiotherapie Sneek Centrum', rating: 4.5, text: 'Onze praktijk in het centrum behandelt nu patiënten uit hele gemeente Súdwest-Fryslân. Lokale SEO werkt uitstekend.' },
    { name: 'Rederij Sneekermeer', rating: 5, text: 'Onze rondvaarten worden nu geboekt door toeristen van ver buiten Friesland. De online marketing heeft ons seizoen verlengd.' },
    { name: 'Camping Sneekermeer', rating: 4.5, text: 'Voor waterliefhebbers zijn we nu de eerste keuze in Sneek. Reserveringen komen binnen via onze verbeterde online aanwezigheid.' },
    { name: 'Schilder Sneek', rating: 5, text: 'Voor woningschilderwerk in Sneek en omgeving worden we nu als eerste gevonden. Perfect voor ons lokale bedrijf.' },
    { name: 'Tandartspraktijk Sneek', rating: 4.5, text: 'Onze moderne praktijk trekt nu patiënten uit heel de regio. De investering in SEO heeft zich snel terugbetaald.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Sneek | Marketing Bureau & Online Marketing Sneek</title>
        <meta
          name="description"
          content="SEO Specialist Sneek inschakelen? Kies voor hét marketing bureau in Sneek. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/sneek" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Sneek: Zeil Mee op de Digitale Wind</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">De waterstad van Friesland online laten groeien</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Sneek: waar Friese trots en watersport samenkomen in een bloeiende economie.</strong><br />
              Met 33.000+ inwoners, het beroemde Sneekermeer, rijke zeiltraditie en als centrum van gemeente Súdwest-Fryslân biedt Sneek kansen voor zowel lokale dienstverleners als watersportbedrijven. Als <b>SEO specialist Sneek</b> help ik ondernemers varen op de digitale golven naar meer klanten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Sneek: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Sneek</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Sneek</li>
              <li>✓ <b>SEO Sneek</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Sneek & Súdwest-Fryslân</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Sneek - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Sneek" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Sneek met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Sneek",
              title: "SEO Specialist Sneek",
              description: "Wil je echt groeien in Sneek? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Sneek",
              description: "Direct aanvragen van inwoners en toeristen uit Sneek. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Sneek",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Sneek. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Sneek groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Sneek</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van watersportbedrijf tot lokale dienstverlener – ik help je bedrijf online groeien in Sneek.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Sneek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Sneek</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Sneek.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Sneek</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Sneek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Sneeker ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Sneek</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Sneek.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Sneek en Friese meren</li>
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
                  <li>✓ Website op maat voor Sneek</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Sneek</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Waarom lokale SEO in Sneek?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Sneek combineert lokale dienstverlening met toerisme en watersport. Lokale SEO zorgt dat je wordt gevonden door zowel Snekers als bezoekers van het Sneekermeer. Perfect voor horeca, watersportbedrijven en lokale services.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Wat kost SEO voor een bedrijf in Sneek?</summary>
                <div className="mt-4 text-gray-600">
                  <p>SEO projecten starten vanaf €800 per maand. Voor Sneeker ondernemers bied ik maatwerk: van lokale dienstverlening tot watersportbedrijven met internationale klanten. Eerste gesprek is altijd gratis.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe lang duurt het voor ik resultaat zie?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Eerste verbeteringen zie je binnen 4-8 weken. Voor Sneek werkt lokale SEO goed omdat je zowel locals als toeristen kunt bereiken. Google Ads leveren direct resultaat, perfect voor het zeilseizoen.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Werk je met watersportbedrijven?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Ja, Sneek's watersportcultuur biedt unieke kansen. Van jachtwerven tot zeilscholen, van watersportwinkels tot rederijen. Ik help je bereiken van lokale tot internationale klanten die naar Friesland komen.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe werkt Google Ads voor Sneek?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Google Ads zijn perfect voor Sneek's seizoensgebonden economie. Je kunt adverteren naar watersporters, toeristen en locals. Budgets vanaf €400-700/maand, afhankelijk van je doelgroep en seizoen.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Bereik ik ook klanten buiten Friesland?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Zeker! Sneek's watersportfaam trekt bezoekers uit heel Nederland en Europa. Perfect voor bedrijven die profiteren van toerisme en watersport. Van lokaal tot internationaal bereik mogelijk.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Sneek</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Sneek – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Sneek - Online Marketing Sneek & Omgeving</h3>
              <p className="text-gray-600">
                Sneek Centrum • Waterpoort • Sneekermeer • Jachthaven • En natuurlijk ook actief in: Súdwest-Fryslân • IJlst • Bolsward • Workum • Heeg • Lemmer • Leeuwarden • Heerenveen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}