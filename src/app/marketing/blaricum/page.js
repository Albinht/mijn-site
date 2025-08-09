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

export default function MarketingBlaricum() {
  // Unieke Blaricum reviews - exclusieve Het Gooi gemeente
  const dutchReviews = [
    { name: 'Villa Makelaardij Blaricum', rating: 5, text: 'Perfect vindbaar voor luxury real estate zoekers in Het Gooi. Onze high-end woningen worden nu veel beter gevonden online.' },
    { name: 'Restaurant Moeke Spijkstra', rating: 5, text: 'Als gerenommeerd restaurant in het dorp trekken we nu nog meer gasten uit heel Het Gooi. De lokale SEO werkt uitstekend.' },
    { name: 'Golfclub Blaricum', rating: 5, text: 'Nieuwe leden vinden ons nu makkelijk online. Vooral de zichtbaarheid voor "golf Het Gooi" heeft veel opgeleverd.' },
    { name: 'Exclusieve Mode Boutique', rating: 5, text: 'Onze designer collecties worden gevonden door de juiste doelgroep uit Blaricum, Laren en Huizen. Precies wat we zochten.' },
    { name: 'Private Clinic Blaricum', rating: 5, text: 'Discrete maar effectieve online marketing. We bereiken nu de exclusieve clientèle uit Het Gooi die we zoeken.' },
    { name: 'Tennis & Padel Blaricum', rating: 4.5, text: 'Sinds de nieuwe marketing strategie hebben we 30% meer aanmeldingen voor lessen en lidmaatschappen uit de regio.' },
  ]
  const dutchMoreReviews = [
    { name: 'Wellness Center Gooi', rating: 5, text: 'We trekken nu klanten uit heel Het Gooi voor onze spa behandelingen. De targeting op welgestelde doelgroepen werkt perfect.' },
    { name: 'Notariskantoor Blaricum', rating: 5, text: 'Voor vastgoedtransacties in Het Gooi worden we nu uitstekend gevonden. Meer opdrachten uit Blaricum en omgeving.' },
    { name: 'Interior Design Studio', rating: 4.5, text: 'Onze high-end interieurprojecten krijgen nu de online aandacht die ze verdienen. Veel nieuwe villa-eigenaren als klant.' },
    { name: 'Jachthaven Het Gooimeer', rating: 5, text: 'De watersportliefhebbers uit Blaricum en omstreken vinden ons nu perfect. Ligplaatsen zijn sneller verhuurd.' },
    { name: 'Paardensport Centrum', rating: 5, text: 'Met de juiste online strategie bereiken we de ruiters uit Het Gooi. Stallen en lessen zitten weer vol.' },
    { name: 'Kunstgalerie Torenlaan', rating: 4.5, text: 'Meer bezoekers uit Het Gooi voor onze exclusieve exposities. De culturele elite vindt ons nu online.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Blaricum | Exclusieve Marketing Het Gooi | High-End Bureau</title>
        <meta
          name="description"
          content="SEO Specialist Blaricum voor exclusieve online marketing in Het Gooi. Bereik de welgestelde doelgroep van Blaricum, Laren en Huizen. Premium marketing strategie."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/blaricum" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Exclusieve marketing voor</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Blaricum & Het Gooi</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Blaricum: het meest welvarende dorp van Nederland in het hart van Het Gooi.</strong><br />
              Met zijn karakteristieke villa's, mediapersoonlijkheden en ondernemers vormt Blaricum een unieke markt. Als <b>SEO specialist in Blaricum</b> begrijp ik de exclusieve dynamiek van deze gemeente. Van de historische Dorpskerk tot moderne villawijk Bijvanck - ik positioneer uw bedrijf perfect voor de welgestelde doelgroep van Het Gooi.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 11.500+ welgestelde inwoners van Blaricum</li>
              <li>✓ Targeting op luxury lifestyle Het Gooi</li>
              <li>✓ Zichtbaar voor elite uit Laren, Huizen & Bussum</li>
              <li>✓ <b>Premium marketing Blaricum</b> voor exclusieve merken</li>
              <li>✓ Discrete positionering voor high-end dienstverlening</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Exclusief Adviesgesprek <span>→</span>
              </Button>
              <Button variant="secondary">
                Portfolio Het Gooi
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Premium marketing specialist voor Blaricum & Het Gooi</p>
            <p className="mt-2 text-xs text-green-600">📞 Directe lijn: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Blaricum - Premium Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Blaricum" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Premium Marketing Bureau voor Blaricum's Elite"
          subtitle="Exclusieve online positionering in Het Gooi"
          features={[
            {
              badge: "Luxury SEO",
              title: "High-End Vindbaarheid",
              description: "Domineer de premium zoekresultaten in Het Gooi. Van villa makelaars tot private clinics - wij positioneren u waar de elite zoekt.",
              visualTitle: "Top Rankings",
              visualSubtitle: "Het Gooi Elite",
              image: masterSeoImage
            },
            {
              badge: "Targeted Ads",
              title: "Welgestelde Doelgroepen",
              description: "Precisie targeting op postcodes zoals 1261 Blaricum en omliggende villawijken. Bereik exact de juiste high-net-worth individuals.",
              visualTitle: "Premium Bereik",
              visualSubtitle: "Luxury Lifestyle",
              image: keywordResearchImage
            },
            {
              badge: "Exclusive Design",
              title: "Blaricum Brand Presence",
              description: "Websites die de exclusiviteit van Blaricum uitstralen. Sophisticated design dat past bij uw premium merk en clientèle.",
              visualTitle: "Elite Design",
              visualSubtitle: "Blaricum Style",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Blaricum's elite kiest voor <span class='bg-[#F7D8FA] px-2 rounded italic'>premium marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Exclusieve Marketing Services voor <span className="bg-[#F7D8FA] px-2 rounded italic">Blaricum</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van de historische Dorpsstraat tot villawijk Bijvanck - premium online presence voor heel Blaricum.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Luxury SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury SEO Blaricum</h3>
                <p className="text-gray-600 mb-6">
                  Exclusieve SEO strategie voor bedrijven in Blaricum. Perfect voor luxury brands, villa makelaars en high-end dienstverleners.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Premium keyword targeting</li>
                  <li>✓ Het Gooi dominantie</li>
                  <li>✓ Luxury brand positioning</li>
                  <li>✓ Elite review management</li>
                </ul>
              </div>
              {/* Targeted Advertising */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Exclusief in Het Gooi
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Google Ads</h3>
                <p className="text-gray-600 mb-6">
                  Target de welgestelde bewoners van Blaricum, Laren en Het Gooi. Sophisticated campagnes voor luxury products & services.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Postcode 1261 targeting</li>
                  <li>✓ High-net-worth bereik</li>
                  <li>✓ Luxury lifestyle focus</li>
                  <li>✓ Premium ROI tracking</li>
                </ul>
              </div>
              {/* Elite Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite Web Design</h3>
                <p className="text-gray-600 mb-6">
                  Sophisticated websites voor Blaricum's exclusieve bedrijven. Design dat de status en kwaliteit van uw merk uitstraalt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Luxury brand design</li>
                  <li>✓ Premium gebruikerservaring</li>
                  <li>✓ Mobile-first voor elite</li>
                  <li>✓ Exclusive content strategie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor premium groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Blaricum?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Of u nu gevestigd bent aan de Torenlaan, in het historische dorpscentrum of in villawijk Bijvanck - ik verzorg uw exclusieve online positionering in Het Gooi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Persoonlijk contact</h3>
                <p className="text-gray-600 mb-4">Bespreek uw exclusieve Blaricum strategie rechtstreeks.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor premium marketing advies.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Blaricum & Het Gooi</h3>
              <p className="text-gray-600">
                Blaricum • Laren • Huizen • Bussum • Naarden • Hilversum • Eemnes • Baarn • Soest
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}