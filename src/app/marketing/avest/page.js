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

export default function MarketingAvest() {
  // Lokale Avest reviews - Veluwerand gebied
  const dutchReviews = [
    { name: 'Jachthaven \'t Raboes', rating: 5, text: 'Onze haven bij het Drontermeer trekt nu veel meer watersporters. De Google campagnes voor bootbezitters werken perfect!' },
    { name: 'Camping De Veluwerand', rating: 5, text: 'Sinds de nieuwe website krijgen we meer boekingen uit heel Nederland. Vooral gezinnen uit de Randstad weten ons te vinden.' },
    { name: 'Vishandel Elburg', rating: 5, text: 'Als leverancier aan horeca rond de Veluwerandmeren zijn we nu veel beter vindbaar. Restaurants uit Elburg tot Harderwijk bestellen bij ons.' },
    { name: 'Watersport Service Noord-Veluwe', rating: 5, text: 'Boot onderhoud en winterstalling loopt geweldig. We bedienen nu de hele regio van Kampen tot Nunspeet.' },
    { name: 'Agrarisch Bedrijf Oosterwolde', rating: 5, text: 'Onze boerderijwinkel wordt gevonden door toeristen en locals. De combinatie van SEO en sociale media werkt uitstekend.' },
    { name: 'Fietsverhuur Veluwemeer', rating: 4.5, text: 'E-bike verhuur aan toeristen loopt het hele seizoen door. Top posities voor "fietsen huren Elburg" en omgeving.' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemersbedrijf Noord-Veluwe', rating: 5, text: 'Renovatieprojecten komen binnen uit Elburg, Oldebroek en \'t Harde. De lokale targeting is spot on.' },
    { name: 'Restaurant De Oude Haven', rating: 5, text: 'Meer gasten tijdens het vaarseizoen dankzij goede vindbaarheid. Watersporters plannen nu bewust een stop bij ons.' },
    { name: 'Natuurcamping Veluwe', rating: 4.5, text: 'Duitse en Nederlandse kampeerders vinden ons makkelijk. De tweetalige aanpak werkt geweldig voor ons.' },
    { name: 'Bootverhuur Drontermeer', rating: 5, text: 'Online reserveringen zijn verdriedubbeld. We staan nu bovenaan voor "sloep huren Elburg" en varianten.' },
    { name: 'Hoveniersbedrijf Flevoland-Veluwe', rating: 5, text: 'Opdrachten uit nieuwe gebieden zoals Dronten en Zeewolde. De regionale SEO strategie werkt perfect.' },
    { name: 'Dakdekker Randmeren', rating: 4.5, text: 'Van Elburg tot Biddinghuizen, overal worden we gevonden. Vooral na storm is de telefoon roodgloeiend.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Marketing Bureau Avest-Elburg | Veluwerandmeren & Watersport SEO</title>
        <meta
          name="description"
          content="Marketing specialist voor bedrijven rond Avest en Elburg. Expert in toerisme marketing, watersport SEO en recreatie promotie langs de Veluwerandmeren."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/avest" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau voor de Veluwerand bij Avest</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Bereik toeristen & watersporters</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Profiteren van de ligging aan het Drontermeer en Veluwemeer?</strong><br />
              Als marketing specialist voor het gebied <b>Avest-Elburg</b> help ik recreatiebedrijven, horeca en lokale ondernemers met het aantrekken van toeristen, watersporters en dagrecreanten uit heel Nederland.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Toerisme SEO voor Veluwerandmeren gebied</li>
              <li>✓ Watersport & recreatie marketing expertise</li>
              <li>✓ Bereik van Kampen tot Harderwijk</li>
              <li>✓ Seizoensgerichte campagnes (zomer focus)</li>
              <li>✓ Lokaal sterk in Elburg, Oldebroek en Nunspeet</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk recreatie cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in toerisme & recreatie marketing Noord-Veluwe</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Bureau Avest-Elburg - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Veluwerand" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Toerisme marketing voor de Veluwerandmeren"
          subtitle="Trek meer bezoekers naar jouw recreatiebedrijf of horeca"
          features={[
            {
              badge: "Recreatie SEO",
              title: "Watersport & Toerisme SEO",
              description: "Optimaal vindbaar voor watersporters, fietsers en wandelaars die de Veluwerand bezoeken. Van Drontermeer tot Veluwemeer, jouw bedrijf wordt gevonden.",
              visualTitle: "Seizoen focus",
              visualSubtitle: "April-Oktober",
              image: masterSeoImage
            },
            {
              badge: "Doelgroep Ads",
              title: "Google Ads Recreatie",
              description: "Bereik vakantiegangers uit de Randstad, Duitse toeristen en watersporters. Slimme campagnes voor campings, jachthavens en horecabedrijven.",
              visualTitle: "Toeristen bereik",
              visualSubtitle: "Randstad + Duitsland",
              image: keywordResearchImage
            },
            {
              badge: "Lokale Kennis",
              title: "Noord-Veluwe Marketing",
              description: "Ken de regio, de routes en de hotspots. Van historisch Elburg tot natuurgebied Oostvaardersplassen - ik weet wat toeristen zoeken.",
              visualTitle: "Regio expertise",
              visualSubtitle: "Elburg-Nunspeet",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Recreatiebedrijven rond <span class='bg-[#F7D8FA] px-2 rounded italic'>Avest-Elburg</span> groeien online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Toerisme Marketing Specialist <span className="bg-[#F7D8FA] px-2 rounded italic">Veluwerandmeren</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van jachthaven tot camping, van restaurant tot fietsverhuur – vergroot je bereik langs de randmeren.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Watersport Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Watersport Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Bereik bootbezitters, zeilers en watersportliefhebbers. Perfect voor jachthavens, botenverhuur en watersportbedrijven rond het Drontermeer.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Jachthaven & marina marketing</li>
                  <li>✓ Bootverhuur promotie</li>
                  <li>✓ Seizoensgerichte campagnes</li>
                  <li>✓ Vaarroute zichtbaarheid</li>
                </ul>
              </div>
              {/* Camping & Recreatie */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Avest
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Camping & Verblijf SEO</h3>
                <p className="text-gray-600 mb-6">
                  Vol geboekt in het hoogseizoen? Optimale vindbaarheid voor campings, B&B\'s en vakantiehuizen in de regio Elburg-Nunspeet.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Camping & glamping SEO</li>
                  <li>✓ Vakantiehuizen marketing</li>
                  <li>✓ Booking platform optimalisatie</li>
                  <li>✓ Last-minute aanbiedingen</li>
                </ul>
              </div>
              {/* Horeca & Dagrecreatie */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Horeca & Dagrecreatie</h3>
                <p className="text-gray-600 mb-6">
                  Trek dagtoeristen, fietsers en wandelaars naar je restaurant, café of attractie. Profiteer van de recreatiestromen langs de Veluwerand.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Restaurant marketing Elburg</li>
                  <li>✓ Fietsroute zichtbaarheid</li>
                  <li>✓ Evenementen promotie</li>
                  <li>✓ Streekproducten marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meer toeristen naar <span className="bg-[#F7D8FA] px-2 rounded italic">jouw recreatiebedrijf</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Laten we bespreken hoe je optimaal profiteert van de toeristische potentie van de Veluwerandmeren.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Veluwerandmeren & Noord-Veluwe</h3>
              <p className="text-gray-600">
                <strong>Randmeren:</strong> Elburg • Nunspeet • Harderwijk • Zeewolde • Biddinghuizen<br />
                <strong>Veluwe Noord:</strong> Oldebroek • \'t Harde • Wezep • Hattem • Heerde<br />
                <strong>Overijssel:</strong> Kampen • Genemuiden • Zwartsluis
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}