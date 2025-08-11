'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingLaren() {
  // Lokale Laren reviews
  const dutchReviews = [
    { name: 'Galerie Sint-Jansstraat', rating: 5, text: 'Internationale kunstkopers vinden onze galerie nu perfect online. Verkopen aan collectors uit heel Europa zijn verdrievoudigd. Premium marketing op zijn best!' },
    { name: 'Restaurant Mauve Laren', rating: 5, text: 'Van verborgen parel tot fully booked restaurant. De luxury positioning heeft ons op de kaart gezet bij de welgestelde Gooi bewoners.' },
    { name: 'Laren Luxury Real Estate', rating: 5, text: 'In de miljoenenvilla markt is top marketing essentieel. We domineren nu Google voor "luxe makelaardij Het Gooi". Fantastische ROI!' },
    { name: 'Singer Museum Shop', rating: 5, text: 'Online shop voor museumbezoekers draait uitstekend. Kunstliefhebbers uit heel Nederland bestellen nu onze exclusieve collectie.' },
    { name: 'Wellness Resort Het Gooi', rating: 5, text: 'Premium spa marketing trekt de juiste doelgroep aan. Gasten uit Blaricum, Bussum en Amsterdam boeken nu onze luxury packages.' },
    { name: 'Boutique Mode Laren', rating: 4.5, text: 'Onze haute couture collectie wordt nu gevonden door fashionista\'s uit heel Het Gooi. Instagram en SEO strategie werkt perfect!' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Laren Classic Cars', rating: 5, text: 'Exclusieve auto\'s vragen om exclusieve marketing. We bereiken nu de ultrawealthy markt van Het Gooi tot Amsterdam Oud-Zuid.' },
    { name: 'Kunsthandel Hofstede', rating: 5, text: 'Van lokale kunsthandel naar internationale speler. Website trekt nu serieuze verzamelaars uit binnen- en buitenland.' },
    { name: 'Golf Club Laren', rating: 5, text: 'Membership campagne heeft onze wachtlijst gevuld met de juiste mensen. Premium targeting op executives uit Het Gooi werkt uitstekend.' },
    { name: 'Villa Tuinarchitectuur', rating: 5, text: 'Miljoenenprojecten komen nu binnen via Google. Focus op luxury garden design voor Laren, Blaricum en Huizen villa\'s.' },
    { name: 'Privékliniek Laren', rating: 5, text: 'Discrete marketing voor onze exclusieve medische diensten. Perfect bereik onder welgestelde doelgroep Het Gooi.' },
    { name: 'Juwelier Excellence Laren', rating: 4.5, text: 'High-end sieraden vereisen high-end marketing. Klanten voor Rolex en Patek Philippe vinden ons nu moeiteloos online.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Laren NH | Luxury Marketing Bureau Het Gooi - Singer Museum Village</title>
        <meta
          name="description"
          content="Premium marketing specialist Laren voor luxury brands & high-end bedrijven. Expert in welgestelde Gooi doelgroep. ✓ Kunstwereld marketing ✓ Villa makelaardij ✓ Exclusieve positionering"
        />
        <link rel="canonical" href="https://wwww.niblah.nl/marketing/laren" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Luxury Marketing Laren</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Het Gooi Specialist</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Exclusieve marketing voor het welvarendste dorp van Nederland.</strong><br />
              Met 11.500 inwoners, wereldberoemd Singer Museum, en een gemiddeld inkomen dat tot de hoogste van Nederland behoort, vraagt Laren om een <b>premium marketing aanpak</b>. Als specialist in luxury marketing voor Het Gooi, verbind ik exclusieve merken met de kunstminnende, welgestelde bewoners van Laren, Blaricum en Huizen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Luxury brand positioning voor Het Gooi markt</li>
              <li>✓ Kunstwereld & culturele sector expertise</li>
              <li>✓ High-net-worth individual targeting</li>
              <li>✓ Singer Museum dorp marketing connectie</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button as="a" href="tel:+31648728828" className="text-sm px-4 py-2">
                Exclusieve Strategie Bespreken <span>→</span>
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Premium consultancy
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Trusted advisor voor luxury brands in Het Gooi sinds 2019</p>
            <p className="mt-4 text-sm text-red-600">Discrete advisering mogelijk - WhatsApp +31 6 48728828</p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing resultaten Laren - Luxury Het Gooi strategie"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* FEATURE SECTIE */}
        <FeatureSection />

        {/* REVIEWS SECTIE */}
        <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Premium Marketing Services <span className="bg-[#F7D8FA] px-2 rounded italic">Laren & Het Gooi</span>
              </h2>
              <p className="text-lg text-gray-600">
                Exclusieve marketing strategieën voor luxury brands en high-end dienstverleners
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Luxury Brand Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Brand Positioning</h3>
                <p className="text-gray-600 mb-6">
                  Positioneer jouw premium merk in de exclusieve markt van Laren en Het Gooi. Perfect voor haute couture, fine dining, en luxury lifestyle brands.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ High-end website & branding design</li>
                  <li>✓ Targeting postcodes 1251-1253 (Laren/Blaricum)</li>
                  <li>✓ Premium Google Ads & Meta campaigns</li>
                  <li>✓ Influencer marketing Het Gooi elite</li>
                </ul>
              </div>
              {/* Kunst & Cultuur Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Specialist kunstsector Laren
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kunst & Cultuur Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Bereik kunstliefhebbers en collectors in het culturele hart van Het Gooi. Ideaal voor galerieën, antiekhandel en culturele instellingen rond het Singer Museum.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Singer Museum visitor targeting</li>
                  <li>✓ International art collector reach</li>
                  <li>✓ Gallery & exhibition promotion</li>
                  <li>✓ Cultural event marketing</li>
                </ul>
              </div>
              {/* Real Estate & Villa Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Real Estate Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Marketing voor de exclusieve vastgoedmarkt van Laren, waar villa's gemiddeld €2.5 miljoen kosten. Bereik kopers uit binnen- en buitenland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Villa & landgoed marketing</li>
                  <li>✓ International buyer targeting</li>
                  <li>✓ Virtual luxury home tours</li>
                  <li>✓ Expat executive relocation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE EXPERTISE SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Laren: Het Monaco van Nederland
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Laren Exclusieve Feiten</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>11.500 inwoners</b> in gemeente Laren NH</li>
                  <li>• <b>Singer Museum:</b> 250.000+ bezoekers per jaar</li>
                  <li>• <b>Kunstenaarsdorp:</b> Sinds 1870 kunstkolonie</li>
                  <li>• <b>Gemiddelde huisprijs:</b> €1.2 miljoen (2024)</li>
                  <li>• <b>Top 3 hoogste inkomens</b> van Nederland</li>
                  <li>• <b>BEL-gemeente:</b> Samenwerking Blaricum-Eemnes-Laren</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Kansen Laren</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>Luxury lifestyle:</b> Fashion, jewelry, exclusive cars</li>
                  <li>• <b>Kunst & antiek:</b> 30+ galerieën en kunsthandels</li>
                  <li>• <b>Fine dining:</b> Michelin potentieel restaurants</li>
                  <li>• <b>Wellness & beauty:</b> High-end spa's en klinieken</li>
                  <li>• <b>Private banking:</b> Wealth management diensten</li>
                  <li>• <b>Evenementen:</b> Kunst & Antiek weekend, Jazz festival</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Het Gooi Elite Netwerk</h3>
              <p className="text-gray-700 mb-4">
                Laren staat centraal in het welvarende Gooi netwerk:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                <div>
                  <b>Direct Gooi bereik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Blaricum (3 min)</li>
                    <li>• Huizen (7 min)</li>
                    <li>• Hilversum (10 min)</li>
                    <li>• Bussum (8 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Luxury hotspots:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Naarden Vesting (10 min)</li>
                    <li>• Loosdrecht (15 min)</li>
                    <li>• Baarn (12 min)</li>
                    <li>• Soestdijk (15 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Zakelijk bereik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Amsterdam Zuid (25 min)</li>
                    <li>• Utrecht (30 min)</li>
                    <li>• Schiphol (35 min)</li>
                    <li>• Almere (20 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Culturele connecties:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Singer Museum</li>
                    <li>• Rosa Spier Huis</li>
                    <li>• Sint-Jansbasiliek</li>
                    <li>• Brink evenementen</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waarom Laren Unieke Marketing Vereist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Doelgroep Kenmerken:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <b>High-net-worth individuals:</b> CEO's, ondernemers, oud-geld families</li>
                    <li>• <b>Kunstcollectors:</b> Nationale en internationale verzamelaars</li>
                    <li>• <b>Expats:</b> Internationale executives in Amsterdam regio</li>
                    <li>• <b>50+ doelgroep:</b> Kapitaalkrachtige senioren</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Marketing Vereisten:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <b>Premium kwaliteit:</b> Alleen het beste is goed genoeg</li>
                    <li>• <b>Discretie:</b> Privacy en exclusiviteit waarborgen</li>
                    <li>• <b>Authenticiteit:</b> Echte waarde, geen opsmuk</li>
                    <li>• <b>Netwerk approach:</b> Mond-tot-mond amplificatie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Marketing Consultancy <span className="bg-[#F7D8FA] px-2 rounded italic">Laren & Het Gooi</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Voor exclusieve merken en luxury dienstverleners die de welgestelde markt van 
              Laren en Het Gooi effectief willen bereiken. Discrete, professionele advisering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Consultation</h3>
                <p className="text-gray-600 mb-4">Persoonlijk strategiegesprek voor premium positionering in Het Gooi markt.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discrete WhatsApp</h3>
                <p className="text-gray-600 mb-4">Voor vertrouwelijke vragen over luxury marketing strategieën.</p>
                <a
                  href="https://wa.me/31648728828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  💬 Private Message
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusief Werkgebied Het Gooi</h3>
              <p className="text-gray-600">
                Laren • Blaricum • Huizen • Bussum • Naarden • Hilversum • Baarn • Eemnes • Loosdrecht • Amsterdam Oud-Zuid
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}