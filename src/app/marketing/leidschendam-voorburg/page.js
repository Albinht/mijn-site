'use client'

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

export default function MarketingLeidschendamVoorburg() {
  // Lokale Leidschendam-Voorburg reviews
  const dutchReviews = [
    { name: 'Restaurant Haagse Bos Voorburg', rating: 5, text: 'Dankzij lokale SEO krijgen we nu reserveringen uit heel Leidschendam-Voorburg en Den Haag. Fantastische groei!' },
    { name: 'Tandartspraktijk Dental Care Leidschendam', rating: 5, text: 'Top positie voor "tandarts Leidschendam" bereikt. Patiënten uit beide kernen en Den Haag vinden ons perfect.' },
    { name: 'Installatiebedrijf TechniekXL Voorburg', rating: 4.5, text: 'Google Ads campagne werkt uitstekend voor beide kernen. Meer opdrachten dan ooit uit de hele gemeente.' },
    { name: 'Fysiotherapie Vitaal Leidschendam', rating: 5, text: 'Onze praktijk staat vol dankzij lokale SEO. Klanten uit Voorburg en Leidschendam boeken nu online.' },
    { name: 'Kapsalon Style Studio Voorburg', rating: 5, text: 'Lokale zichtbaarheid heeft onze clientèle flink uitgebreid. Klanten komen nu uit beide delen van de gemeente.' },
    { name: 'Advocatenkantoor Juridisch Advies Leidschendam', rating: 4.5, text: 'Professionele SEO-aanpak heeft ons kantoor veel meer zichtbaarheid gegeven in de regio Den Haag.' },
  ]
  const dutchMoreReviews = [
    { name: 'Autogarage CarService Voorburg', rating: 5, text: 'Meer klanten uit Leidschendam-Voorburg en omgeving dankzij slimme Google Ads en lokale SEO.' },
    { name: 'Schoonheidssalon Bella Vista Leidschendam', rating: 4.5, text: 'Online boekingen zijn verdubbeld. Klanten uit beide kernen vinden ons nu gemakkelijk via Google.' },
    { name: 'Accountantskantoor Finance Plus Voorburg', rating: 5, text: 'Uitstekende B2B marketing voor onze diensten. Bedrijven uit heel Leidschendam-Voorburg nemen contact op.' },
    { name: 'Dierenartspraktijk Animal Care Leidschendam', rating: 5, text: 'Google My Business optimalisatie werkt perfect. Huisdiereigenaren uit de hele gemeente vinden ons snel.' },
    { name: 'Tuincentrum Groen & Bloei Voorburg', rating: 4.5, text: 'Seizoensgebonden campagnes leveren veel klanten op uit Leidschendam, Voorburg en Den Haag.' },
    { name: 'Notariskantoor Van der Berg Leidschendam', rating: 5, text: 'Onze online zichtbaarheid is enorm verbeterd. Klanten uit beide kernen kiezen nu bewust voor ons kantoor.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Leidschendam-Voorburg: Groei in beide kernen</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">76.000 inwoners + directe toegang Den Haag</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Leidschendam-Voorburg: waar twee sterke kernen samen één gemeente vormen.</strong><br />
            Van het moderne Leidschendam met winkelcentrum Leidsenhage tot het historische Voorburg met zijn kastelen en parken. Als <b>SEO specialist Leidschendam-Voorburg</b> help ik bedrijven groeien in beide kernen, met de kracht van de Haagse regio als extra voordeel.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO beide kernen: Leidschendam én Voorburg</li>
            <li>✓ Google Ads: bereik 76K inwoners + Den Haag regio</li>
            <li>✓ Specialisatie in retail, zakelijke diensten en horeca</li>
            <li>✓ <b>SEO Leidschendam-Voorburg</b> met bewezen resultaten</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Bekijk Haagse cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in Leidschendam-Voorburg & Den Haag regio</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Leidschendam-Voorburg - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Leidschendam-Voorburg" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Leidschendam-Voorburg met slimme marketing"
        subtitle="Beide kernen, één strategie: lokaal zichtbaar, regionaal sterk"
        features={[
          {
            badge: "SEO Leidschendam-Voorburg",
            title: "SEO Specialist Leidschendam-Voorburg",
            description: "Domineer de lokale zoekresultaten in beide kernen. Van Leidschendam's winkelgebied tot Voorburg's zakenwijk - ik zorg dat je bedrijf wordt gevonden door klanten uit de hele gemeente.",
            visualTitle: "Beide kernen",
            visualSubtitle: "Maximaal bereik",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Leidschendam-Voorburg",
            description: "Bereik 76.000 inwoners plus de hele Den Haag regio met gerichte advertenties. Focus op één kern, beide kernen of de hele regio - altijd optimale resultaten.",
            visualTitle: "76K+ bereik",
            visualSubtitle: "Plus Den Haag",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Marketing",
            title: "Marketing Bureau Leidschendam-Voorburg",
            description: "Professionele online marketing voor bedrijven in beide kernen. Van retail bij Leidsenhage tot zakelijke diensten in Voorburg - websites die perfect aansluiten bij jouw doelgroep.",
            visualTitle: "Dubbele kracht",
            visualSubtitle: "Beide kernen",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Leidschendam-Voorburg groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Leidschendam-Voorburg</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Twee kernen, één gemeente: unieke kansen voor bedrijven die beide markten willen bedienen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sterke retailpositie</h3>
              <p className="text-gray-600">
                Met Leidsenhage als groot winkelcentrum en diverse lokale winkels in beide kernen heeft Leidschendam-Voorburg een sterke retail-economie die perfect geschikt is voor lokale marketing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dubbele markt</h3>
              <p className="text-gray-600">
                Met lokale SEO bereik je klanten uit beide kernen plus de aangrenzende wijken van Den Haag. Dit verdubbelt je potentiële klantenbestand vergeleken met enkele gemeenten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoogopgeleide doelgroep</h3>
              <p className="text-gray-600">
                Leidschendam-Voorburg heeft een relatief hoogopgeleide bevolking met goede koopkracht. Lokale SEO helpt je deze waardevolle doelgroep effectief te bereiken.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Leidschendam-Voorburg</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van retail tot zakelijke dienstverlening - ik help je bedrijf groeien in beide kernen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Leidschendam-Voorburg */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Leidschendam-Voorburg</h3>
              <p className="text-gray-600 mb-6">
                Domineer de zoekresultaten in beide kernen. Van "winkel Leidschendam" tot "dienst Voorburg" - wij zorgen voor topposities in beide markten.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel beide locaties</li>
                <li>✓ Kern-specifieke SEO optimalisatie</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
                <li>✓ Review management voor beide kernen</li>
                <li>✓ Technische SEO & Core Web Vitals</li>
              </ul>
            </div>
            {/* Google Ads Leidschendam-Voorburg */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij lokale ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Leidschendam-Voorburg</h3>
              <p className="text-gray-600 mb-6">
                Bereik klanten in beide kernen plus Den Haag regio met slimme advertenties. Lokaal adverteren, regionaal groeien.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Geo-targeting per kern/postcode</li>
                <li>✓ Shopping ads voor retailers</li>
                <li>✓ B2B campagnes zakelijke services</li>
                <li>✓ Mobiel-geoptimaliseerde advertenties</li>
                <li>✓ Transparante ROI rapportage</li>
              </ul>
            </div>
            {/* Website & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Moderne websites voor bedrijven in beide kernen. Van e-commerce tot dienstverlening - websites die converteren en groeien met je bedrijf.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Responsive design alle apparaten</li>
                <li>✓ E-commerce integraties</li>
                <li>✓ Afsprakenboekingssystemen</li>
                <li>✓ Meertalige websites (NL/EN)</li>
                <li>✓ Onderhoud & updates inclusief</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VEELGESTELDE VRAGEN */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Leidschendam-Voorburg</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Leidschendam-Voorburg.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Moet ik kiezen tussen Leidschendam of Voorburg voor mijn SEO?</h3>
              <p className="text-gray-600">
                Helemaal niet! We optimaliseren je bedrijf voor beide kernen tegelijk. We creëren content en landingspaginas voor zowel "bedrijf Leidschendam" als "dienst Voorburg" zoektermen. Hierdoor bereik je klanten uit de hele gemeente.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Leidschendam-Voorburg zie je vaak binnen 1-2 maanden eerste verbeteringen. Google Ads leveren direct resultaat. De beste SEO-resultaten bereik je na 6-9 maanden, mede dankzij de sterke concurrentie in de Den Haag regio.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is online marketing geschikt voor winkels bij Leidsenhage?</h3>
              <p className="text-gray-600">
                Absoluut! Retailers profiteren enorm van lokale SEO en Google Shopping advertenties. We kunnen je helpen meer bezoekers naar je fysieke winkel te trekken en online verkoop te stimuleren met geo-gerichte campagnes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Leidschendam-Voorburg?</h3>
              <p className="text-gray-600">
                SEO tarieven starten vanaf €750 per maand voor lokale SEO in beide kernen. Voor e-commerce of uitgebreide diensten is dit €1000-1500 per maand. De investering betaalt zich snel terug door meer klanten uit beide kernen en de Den Haag regio.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook klanten uit Den Haag bereiken?</h3>
              <p className="text-gray-600">
                Zeker! Leidschendam-Voorburg grenst direct aan Den Haag en veel inwoners werken of winkelen over en weer. We kunnen je SEO-strategie uitbreiden naar relevante delen van Den Haag, Rijswijk en Wassenaar voor maximaal bereik.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe meet je succes in een gemeente met twee kernen?</h3>
              <p className="text-gray-600">
                We tracken rankings en verkeer voor beide kernen apart: "Leidschendam" en "Voorburg" zoektermen. Je krijgt inzicht in welke kern meer klanten oplevert en kunnen de strategie hierop aanpassen. Maandelijkse rapportages tonen groei per kern en totaal.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voor welke bedrijven werkt lokale SEO het beste?</h3>
              <p className="text-gray-600">
                Lokale SEO werkt uitstekend voor winkels, restaurants, dienstverleners (tandarts, kapper, garage), zakelijke diensten (accountant, advocaat), horeca, fitness, schoonheidszorg en alle bedrijven die klanten uit beide kernen willen trekken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER LEIDSCHENDAM-VOORBURG SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Leidschendam-Voorburg</span> & regio
            </h2>
            <p className="text-xl text-gray-600">
              Twee kernen, één gemeente: dubbele kansen voor groeiende bedrijven.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor ambitieuze ondernemers</h3>
              <p className="text-gray-600 mb-4">
                Leidschendam-Voorburg combineert het beste van twee werelden: moderne winkelgebieden met traditionele Nederlandse charme. Leidschendam biedt uitstekende retailmogelijkheden rond Leidsenhage, terwijl Voorburg bekend staat om zakelijke dienstverlening en historische attracties.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Leidschendam-Voorburg help ik bedrijven profiteren van beide kernen, de nabijheid van Den Haag, uitstekende bereikbaarheid en een hoogopgeleide bevolking met goede koopkracht.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 76.000 inwoners verdeeld over twee kernen</li>
                <li>✓ Sterke retailpositie (Leidsenhage)</li>
                <li>✓ Nabijheid Den Haag centrum</li>
                <li>✓ Hoogopgeleide doelgroep</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Leidschendam-Voorburg:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Retail & winkels</div>
                <div>• Restaurants & horeca</div>
                <div>• Schoonheidszorg</div>
                <div>• Tandartsen & artsen</div>
                <div>• Kappers & wellness</div>
                <div>• Advocaten & notarissen</div>
                <div>• Accountants & administratie</div>
                <div>• Autogarages & dealers</div>
                <div>• Makelaarskantoren</div>
                <div>• Installatiebedrijven</div>
                <div>• Fitness & sport</div>
                <div>• En veel meer...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Leidschendam-Voorburg</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in beide kernen - altijd eerlijk advies en snelle resultaten.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Leidschendam-Voorburg - Beide kernen & omgeving</h3>
            <p className="text-gray-600">
              Leidschendam • Voorburg • + omliggende gemeenten: Den Haag • Rijswijk • Wassenaar • Zoetermeer
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}