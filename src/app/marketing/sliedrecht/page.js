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

export default function MarketingSliedrecht() {
  // Lokale Sliedrecht reviews - baggerstad aan de rivier
  const dutchReviews = [
    { name: 'Baggerbedrijf Sliedrecht', rating: 5, text: 'Als internationaal baggerbedrijf krijgen we nu wereldwijde projectaanvragen via onze website. Lokale roots, globale impact!' },
    { name: 'Restaurant Rivierkant', rating: 5, text: 'Ons restaurant met uitzicht op de Beneden-Merwede wordt nu gevonden door bezoekers en zakenrelaties uit de baggerwereld.' },
    { name: 'Hotel Sliedrecht Centre', rating: 4.5, text: 'Voor zakenreizigers in de maritieme sector zijn we nu het eerste resultaat. Occupancy is sterk gestegen dankzij SEO.' },
    { name: 'Scheepswerf Sliedrecht', rating: 5, text: 'Onze werf voor baggerschepen en werkboten krijgt nu internationale klanten via online marketing. Geweldige uitbreiding!' },
    { name: 'Fysiotherapie Sliedrecht', rating: 5, text: 'Voor onze praktijk in het centrum was lokale SEO perfect. Patiënten uit heel Sliedrecht en omgeving vinden ons nu.' },
    { name: 'Makelaardij Sliedrecht', rating: 4.5, text: 'Voor woningverkoop in Sliedrecht staan we bovenaan. De industriële erfenis maakt woningen hier uniek en gewild.' },
  ]
  const dutchMoreReviews = [
    { name: 'Maritiem Museum Shop', rating: 5, text: 'Onze museumwinkel profiteert van bezoekers die de baggergeschiedenis komen ontdekken. Unieke producten vinden hun weg.' },
    { name: 'Accountant Sliedrecht', rating: 4.5, text: 'Voor financiële diensten aan de maritieme sector bereiken we nu bedrijven uit heel Zuid-Holland. Perfecte specialisatie.' },
    { name: 'Autogarage Sliedrecht', rating: 5, text: 'Voor onderhoud van bedrijfsauto\'s en privéwagens staan we lokaal bovenaan. Veel klanten uit de baggerindustrie.' },
    { name: 'Kinderdagverblijf Sliedrecht', rating: 4.5, text: 'Voor werkende ouders in Sliedrecht waren we moeilijk vindbaar. Nu constant nieuwe aanmeldingen via online zichtbaarheid.' },
    { name: 'Elektricien Sliedrecht', rating: 5, text: 'Voor elektrische installaties in bedrijfspanden en woningen zijn we nu eerste keuze. Baggerbedrijven vragen ons regelmatig.' },
    { name: 'Catering Sliedrecht', rating: 4.5, text: 'Voor zakelijke events en maritime bijeenkomsten krijgen we nu opdrachten uit heel de regio. Specialisatie loont.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Sliedrecht | Marketing Bureau & Online Marketing Sliedrecht</title>
        <meta
          name="description"
          content="SEO Specialist Sliedrecht inschakelen? Kies voor hét marketing bureau in Sliedrecht. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/sliedrecht" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Sliedrecht: Bagger je een Weg naar Online Success</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Wereldhoofdstad van de baggerindustrie</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Sliedrecht: waar Nederlandse ingenieurskunst de wereld verovert vanaf de oevers van de Beneden-Merwede.</strong><br />
              Met 25.000+ inwoners, wereldberoemde baggerbedrijven, strategische rivierligging en sterke industriële traditie biedt Sliedrecht unieke kansen voor B2B en lokale dienstverlening. Als <b>SEO specialist Sliedrecht</b> help ik ondernemers profiteren van zowel de lokale gemeenschap als de internationale maritieme sector.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Sliedrecht: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Sliedrecht</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Sliedrecht</li>
              <li>✓ <b>SEO Sliedrecht</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Sliedrecht & Alblasserwaard</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Sliedrecht - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Sliedrecht" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Sliedrecht met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Sliedrecht",
              title: "SEO Specialist Sliedrecht",
              description: "Wil je echt groeien in Sliedrecht? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Sliedrecht",
              description: "Direct aanvragen van inwoners en bedrijven uit Sliedrecht. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Sliedrecht",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Sliedrecht. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Sliedrecht groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Sliedrecht</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van maritieme dienstverlening tot lokale handel – ik help je bedrijf online groeien in Sliedrecht.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Sliedrecht */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Sliedrecht</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Sliedrecht.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Sliedrecht</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Sliedrecht */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Sliedrechtse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Sliedrecht</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Sliedrecht.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Sliedrecht en regio</li>
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
                  <li>✓ Website op maat voor Sliedrecht</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Sliedrecht</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Waarom lokale SEO in Sliedrecht?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Sliedrecht combineert lokale dienstverlening met internationale baggerindustrie. Lokale SEO helpt je beide doelgroepen bereiken - van Sliedrechtse families tot maritime professionals uit de hele wereld.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Wat kost SEO voor een bedrijf in Sliedrecht?</summary>
                <div className="mt-4 text-gray-600">
                  <p>SEO projecten starten vanaf €800 per maand. Voor Sliedrechtse ondernemers bied ik maatwerk: van lokale dienstverlening tot B2B marketing voor de maritieme sector. Eerste gesprek gratis.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Werk je met baggerbedrijven en maritieme sector?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Ja, Sliedrecht's maritieme erfgoed biedt unieke kansen voor B2B marketing. Van toeleveranciers tot dienstverleners voor de baggerindustrie - ik help je internationale klanten bereiken.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe lang duurt het voor ik resultaat zie?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Eerste verbeteringen binnen 4-8 weken. Voor Sliedrecht werkt lokale SEO goed door beperkte lokale concurrentie. Voor B2B maritime marketing kan het 3-6 maanden duren voor volledige resultaten.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Bereik ik ook internationale klanten?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Zeker! Sliedrecht's wereldfaam in baggertechniek opent internationale deuren. We kunnen lokale SEO combineren met internationale zoekmachine optimalisatie voor maximaal bereik.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe werkt Google Ads voor Sliedrecht?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Google Ads zijn effectief voor beide markten in Sliedrecht. Lokaal adverteren vanaf €300/maand, voor internationale B2B maritime marketing vanaf €600-1000/maand, afhankelijk van je doelstellingen.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Sliedrecht</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Sliedrecht – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Sliedrecht - Online Marketing Sliedrecht & Omgeving</h3>
              <p className="text-gray-600">
                Sliedrecht Centrum • Rivierkant • Industrieterrein • Beneden-Merwede • En natuurlijk ook actief in: Alblasserwaard • Dordrecht • Papendrecht • Hendrik-Ido-Ambacht • Zwijndrecht • Rotterdam
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}