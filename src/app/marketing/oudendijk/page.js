'use client'

import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingOudendijk() {
  // Authentieke Oudendijk reviews - klein dorp in Waterland met sterke gemeenschapsband
  const dutchReviews = [
    { name: 'Dorpshuis Oudendijk', rating: 5, text: 'Sinds de nieuwe website worden onze evenementen langs de Zuiderdijk veel beter bezocht. Ook mensen uit Warder en Middelie vinden ons nu!' },
    { name: 'Agrarisch Bedrijf Koekoek', rating: 5, text: 'Onze boerderijwinkel aan de Zeedijk trekt nu klanten uit heel Waterland. De lokale SEO werkt perfect voor ons streekproducten.' },
    { name: 'Watersport Oudendijk', rating: 5, text: 'Als kleine jachthaven aan het Markermeer worden we nu gevonden door watersporters uit Amsterdam en Purmerend. Top resultaat!' },
    { name: 'Melkveehouderij De Lange Wei', rating: 5, text: 'Onze kaasverkoop aan huis is verdubbeld sinds we online vindbaar zijn. Veel fietstoeristen vinden ons nu via Google.' },
    { name: 'Aannemersbedrijf Dijkstra', rating: 5, text: 'Voor renovaties van stolpboerderijen in de polder krijgen we nu aanvragen uit heel Noord-Holland. Geweldige groei!' },
    { name: 'B&B Het Waterland', rating: 4.5, text: 'Onze kamers met uitzicht over de polder zijn nu constant volgeboekt. Gasten vinden ons via "overnachten Waterland".' },
  ]
  const dutchMoreReviews = [
    { name: 'Fietsverhuur De Dijk', rating: 5, text: 'Toeristen die de Waterland route fietsen vinden ons nu makkelijk. Vooral in het weekend veel meer verhuur!' },
    { name: 'Visserij Markermeer', rating: 5, text: 'Onze verse vis wordt nu gevonden door restaurants uit Edam-Volendam en Monnickendam. Online marketing werkt echt!' },
    { name: 'Poldermolen Oudendijk', rating: 4.5, text: 'Als historische molen krijgen we nu meer bezoekers via Google. De lokale SEO trekt ook scholen uit de regio.' },
    { name: 'Zuivelboerderij Het Lange Land', rating: 5, text: 'Onze biologische melkproducten worden nu gevonden door klanten uit Purmerend en Amsterdam-Noord. Fantastisch!' },
    { name: 'Rietdekker Waterland', rating: 5, text: 'Voor het restaureren van stolpen krijgen we nu opdrachten uit de hele Zaanstreek-Waterland regio. Agenda staat vol!' },
    { name: 'Camping De Groene Polder', rating: 4.5, text: 'Sinds de SEO campagne hebben we veel meer boekingen. Kampeerders vinden ons nu bij "camping Waterland rustig".' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Online Vindbaar in Oudendijk & Waterland?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Lokale Marketing langs de Zuiderdijk</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van stolpboerderij tot dorpswinkel - groei in Waterland!</strong><br />
              Met slechts 350 inwoners maar een sterke gemeenschapsband is Oudendijk perfect voor lokale bedrijven. Als <b>marketing specialist voor de Waterland regio</b> ken ik de dynamiek van kleine dorpen aan het Markermeer.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale vindbaarheid langs Zuiderdijk en Zeedijk</li>
              <li>✓ Trek klanten uit Warder, Middelie en Edam</li>
              <li>✓ Specialiteit: agrarische bedrijven & recreatie</li>
              <li>✓ <b>Waterland marketing</b> met dorpskennis</li>
              <li>✓ Ook fietstoeristen vinden jouw bedrijf</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis dorpsstrategie <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Waterland cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Waterland dorpen & polders</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Oudendijk - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Oudendijk" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Online Succes in de Waterland Polder"
          subtitle="Van Oudendijk tot heel Noord-Holland - lokaal sterk online"
          features={[
            {
              badge: "Waterland SEO",
              title: "Polder Marketing Specialist",
              description: "Met 350 inwoners lijkt Oudendijk klein, maar de ligging aan de N247 en nabij Edam-Volendam biedt grote kansen. Ik zorg dat passanten en toeristen jouw bedrijf vinden.",
              visualTitle: "Polder Power",
              visualSubtitle: "Regionaal Bereik",
              image: masterSeoImage
            },
            {
              badge: "Markermeer Marketing",
              title: "Toerisme & Recreatie Focus",
              description: "Veel fietsers en watersporters passeren Oudendijk via de Waterland route. Met slimme Google Ads bereik je deze doelgroep op het juiste moment.",
              visualTitle: "Recreatie Boost",
              visualSubtitle: "Seizoensgroei",
              image: keywordResearchImage
            },
            {
              badge: "Agrarisch & Ambacht",
              title: "Stolpboerderij tot Streekproduct",
              description: "Van melkveehouderij tot kaasboerderij, van rietdekker tot molenaar - authentieke Waterland bedrijven verdienen online zichtbaarheid.",
              visualTitle: "Lokaal Product",
              visualSubtitle: "Online Verkoop",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Oudendijk groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>lokale SEO</span>"
        />

        {/* WATERLAND REGIO INZICHTEN */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Online Marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Oudendijk-Waterland</span>?
              </h2>
              <p className="text-xl text-gray-600">
                De unieke ligging tussen Markermeer en polder biedt bijzondere kansen voor lokale ondernemers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚴</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waterland Fietsroute</h3>
                <p className="text-gray-600">
                  Duizenden fietsers passeren jaarlijks via de populaire Waterland route. Van Amsterdam naar Marken, langs Oudendijk - perfecte kans voor horeca en recreatie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Agrarisch Hart</h3>
                <p className="text-gray-600">
                  De vruchtbare kleigrond en stolpboerderijen maken Oudendijk ideaal voor agrarische bedrijven. Online vindbaarheid trekt klanten voor streekproducten uit heel Noord-Holland.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⛵</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Markermeer Toerisme</h3>
                <p className="text-gray-600">
                  De nabijheid van het Markermeer trekt watersporters en dagtoeristen. Met goede SEO vinden zij jouw bedrijf voor voorzieningen, overnachtingen of activiteiten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Oplossingen voor <span className="bg-[#F7D8FA] px-2 rounded italic">Waterland Ondernemers</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van dorpswinkel tot melkveehouderij - elke ondernemer in Oudendijk verdient online succes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Waterland SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Waterland SEO Strategie</h3>
                <p className="text-gray-600 mb-6">
                  Optimaal gevonden worden langs de Zuiderdijk, Zeedijk en in heel gemeente Edam-Volendam.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google profiel voor Waterland regio</li>
                  <li>✓ Vindbaar bij "Oudendijk + dienst"</li>
                  <li>✓ Seizoensgebonden optimalisatie</li>
                  <li>✓ Fietsroute & toerisme keywords</li>
                  <li>✓ Linkbuilding in de regio</li>
                </ul>
              </div>
              {/* Google Ads Oudendijk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in kleine dorpen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Oudendijk</h3>
                <p className="text-gray-600 mb-6">
                  Direct zichtbaar bij je doelgroep in Oudendijk, Edam-Volendam en heel Noord-Holland Noord.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertentiecampagnes</li>
                  <li>✓ Focus op Waterland regio</li>
                  <li>✓ Budget-vriendelijke opties</li>
                  <li>✓ Conversie-optimalisatie</li>
                  <li>✓ Maandelijkse rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Een moderne website die past bij jouw bedrijf in Oudendijk en klanten aantrekt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Professionele website</li>
                  <li>✓ Mobiel geoptimaliseerd</li>
                  <li>✓ Snelle laadtijden</li>
                  <li>✓ Contact-gerichte opzet</li>
                  <li>✓ Social media koppeling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OVER OUDENDIJK SECTIE */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Oudendijk</span>
              </h2>
              <p className="text-xl text-gray-600">
                Klein dorp, grote mogelijkheden voor lokale ondernemers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Oudendijk: hart van Waterland</h3>
                <p className="text-gray-600 mb-4">
                  Oudendijk is een pittoresk dorp in de gemeente Edam-Volendam. Met ongeveer 1.000 inwoners is het een hechte gemeenschap waar lokale bedrijven een belangrijke rol spelen.
                </p>
                <p className="text-gray-600 mb-6">
                  Als SEO specialist help ik bedrijven in Oudendijk om online gevonden te worden, niet alleen door dorpsgenoten maar ook door mensen uit de wijde regio.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Strategische ligging tussen Edam en Hoorn</li>
                  <li>✓ Deel van waterrijke regio Waterland</li>
                  <li>✓ Sterke lokale gemeenschap</li>
                  <li>✓ Groeiende toeristische interesse</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijven die ik help in Oudendijk:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <div>• Cafés & restaurants</div>
                  <div>• Aannemers & bouwbedrijven</div>
                  <div>• Hoveniers</div>
                  <div>• Schilders</div>
                  <div>• Bakkerijen</div>
                  <div>• Kappers</div>
                  <div>• Fietsenmakers</div>
                  <div>• Installateurs</div>
                  <div>• Boerderijwinkels</div>
                  <div>• B&B's</div>
                  <div>• Lokale winkels</div>
                  <div>• En meer...</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start met groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Oudendijk</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Oudendijk en omgeving. Vrijblijvend advies!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel direct</h3>
                <p className="text-gray-600 mb-4">Liever direct contact? Bel voor een gratis adviesgesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stuur een WhatsApp voor snelle vragen of het plannen van een gesprek.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ook actief in deze plaatsen</h3>
              <p className="text-gray-600">
                Warder • Edam • Volendam • Purmerend • Monnickendam • Marken • Broek in Waterland • Katwoude
              </p>
            </div>
          </div>
        </section>
    </main>
  )
}