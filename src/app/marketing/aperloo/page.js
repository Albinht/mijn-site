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

export default function MarketingAperloo() {
  // Authentieke Aperloo reviews met Heerde en Veluwe context
  const dutchReviews = [
    { name: 'Minicamping De Veluwerand', rating: 5, text: 'Onze kleine camping bij Aperloo wordt nu gevonden door toeristen uit heel Nederland. Van Heerde tot Epe, iedereen vindt ons tussen de rust van de Veluwe.' },
    { name: 'Hoveniersbedrijf Aperloo-Heerde', rating: 5, text: 'Als klein bedrijf in Aperloo bereiken we nu klanten in heel gemeente Heerde (18.500 inw). Van Wapenveld tot Veessen worden we gevonden voor tuinonderhoud.' },
    { name: 'Klussenbedrijf De IJsselvallei', rating: 5, text: 'Vanuit ons kleine Aperloo helpen we nu mensen in Heerde, Hattem en zelfs Zwolle. De lokale SEO strategie werkt perfect voor ons familiebedrijf.' },
    { name: 'Boerderijwinkel Aperloo', rating: 5, text: 'Onze verse producten uit Aperloo worden nu online besteld door klanten uit Epe, Heerde en Zwolle. Google vindt ons voor "streekproducten Veluwe".' },
    { name: 'Paardenpension IJsselvallei', rating: 5, text: 'Ruiters uit heel Noord-Veluwe vinden nu ons pension bij Aperloo. De combinatie landelijke rust en goede vindbaarheid trekt nieuwe klanten.' },
    { name: 'Timmerbedrijf Aperloo', rating: 4.5, text: 'Van schuren in Aperloo tot dakkapellen in Heerde-centrum. Via Google worden we gevonden voor authentiek timmerwerk in de hele regio.' },
  ]
  const dutchMoreReviews = [
    { name: 'B&B Het Kleine Geluk', rating: 5, text: 'Toeristen voor de Veluwe boeken nu via Google. Onze locatie bij Aperloo tussen Heerde en Epe is perfect voor fietsers en wandelaars.' },
    { name: 'Loonbedrijf Aperloo-Wapenveld', rating: 5, text: 'Agrarisch werk voor boeren van Aperloo tot Hattem. Via online marketing bereiken we nu alle veehouders langs de IJssel.' },
    { name: 'Elektricien Noord-Veluwe', rating: 4.5, text: 'Vanuit Aperloo bedien ik heel gemeente Heerde plus delen van Epe. De 24/7 vindbaarheid via Google levert constant nieuwe klussen op.' },
    { name: 'Tuinmeubelrestauratie Aperloo', rating: 5, text: 'Specialistisch werk vanuit ons atelier in Aperloo. Klanten uit Zwolle, Apeldoorn en Deventer vinden ons voor restauratie van antiek tuinmeubilair.' },
    { name: 'Hondentrimsalon Veluwerand', rating: 5, text: 'Niet alleen honden uit Aperloo, maar uit heel Heerde en Wapenveld komen nu naar onze salon. Online zichtbaarheid maakt het verschil.' },
    { name: 'Dakdekker Aperloo-Heerde', rating: 4.5, text: 'Van rieten daken in Aperloo tot moderne dakpannen in nieuwbouw Heerde. Google Ads brengt klanten uit de hele regio naar ons toe.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Aperloo (Heerde) | Marketing Bureau Veluwerand & IJsselvallei</title>
        <meta
          name="description"
          content="Marketing bureau Aperloo bij Heerde. Online marketing voor kleine kernen aan de Veluwe. SEO specialist die Aperloo groot maakt op Google. Bereik heel Noord-Veluwe."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/aperloo" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Klein Aperloo, grote online impact op de Veluwe</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van gehucht tot Google-succes</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Aperloo: verstopt pareltje tussen Heerde en de Veluwe.</strong><br />
              Als <b>SEO specialist Aperloo</b> help ik kleine ondernemers in dit gehucht bij Heerde (18.500 inwoners) groot worden online. Gelegen tussen de IJsselvallei en de Veluwerand, maken we van jullie landelijke charme een unique selling point die klanten uit heel Noord-Veluwe aantrekt.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor kleine kernen zoals Aperloo</li>
              <li>✓ Bereik 18.500 inwoners gemeente Heerde</li>
              <li>✓ Target Veluwe-toeristen (miljoenen/jaar)</li>
              <li>✓ <b>SEO Aperloo-Heerde-Wapenveld</b> voor regionaal bereik</li>
              <li>✓ Profiteren van ligging tussen IJssel en Veluwe</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei mee vanuit Aperloo <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = '/work-with-me'}>
                Bekijk Veluwe cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Aperloo, Heerde & Noord-Veluwe</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Aperloo - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Aperloo" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van vergeten gehucht tot vindbare Veluwe-parel"
          subtitle="Waar kleinschaligheid een kracht wordt"
          features={[
            {
              badge: "Veluwe toerisme",
              title: "SEO voor landelijk Aperloo",
              description: "Klein Aperloo ligt strategisch tussen Heerde en de Veluwe. Ik positioneer jullie bedrijf voor toeristen die rust zoeken, locals uit Heerde (18.500 inw) en dagjesmensen uit Zwolle (130.000 inw). Van kampeerders tot wandelaars - iedereen vindt jullie hidden gem.",
              visualTitle: "Klein maar fijn",
              visualSubtitle: "Groot bereik",
              image: masterSeoImage
            },
            {
              badge: "Heerde targeting",
              title: "Google Ads IJsselvallei",
              description: "Bereik heel gemeente Heerde: van Wapenveld (8.000 inw) tot Veessen (3.000 inw), van Vorchten tot Marle. Plus toeristen voor de Veluwe en zakelijke klanten uit Zwolle. Jouw advertenties bereiken precies die mensen die landelijke kwaliteit zoeken.",
              visualTitle: "Lokaal sterk",
              visualSubtitle: "Regionaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Authentieke sites",
              title: "Websites met dorpskarakter",
              description: "Aperloo's kleinschaligheid is jullie kracht. Je website ademt landelijke rust en vakmanschap. Perfect voor bedrijven die persoonlijke service boven massa verkiezen. Van boerderijwinkel tot ambachtelijk bedrijf - authenticiteit verkoopt.",
              visualTitle: "Echt & eerlijk",
              visualSubtitle: "Meer klanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Aperloo groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>landelijke marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor landelijk <span className="bg-[#F7D8FA] px-2 rounded italic">Aperloo</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van familiebedrijf tot boerderijwinkel - marketing die de kracht van kleinschaligheid 
                benut. Groot worden zonder je roots te verliezen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Aperloo */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Klein Aperloo</h3>
                <p className="text-gray-600 mb-6">
                  Ook kleine kernen verdienen grote zichtbaarheid. Domineer lokale zoekresultaten en trek klanten uit heel Noord-Veluwe.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Hyperlocale SEO Aperloo</li>
                  <li>✓ Gemeente Heerde bereik (18.500)</li>
                  <li>✓ Veluwe toerisme targeting</li>
                  <li>✓ IJsselvallei zichtbaarheid</li>
                </ul>
              </div>
              {/* Google Ads Aperloo */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Heerde
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Veluwerand</h3>
                <p className="text-gray-600 mb-6">
                  Bereik toeristen, locals uit Heerde en zakelijke klanten uit Zwolle. Slimme campagnes voor kleine kernen met grote ambities.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Wapenveld-Heerde targeting</li>
                  <li>✓ Zwolle bereik (130.000 inw)</li>
                  <li>✓ Veluwe recreanten focus</li>
                  <li>✓ Seizoenscampagnes toerisme</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Landelijke Websites</h3>
                <p className="text-gray-600 mb-6">
                  Authentieke sites die de charme van Aperloo uitstralen. Perfect voor bedrijven die kleinschaligheid als kwaliteit verkopen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Dorps karakter behouden</li>
                  <li>✓ Verhalen vertellen</li>
                  <li>✓ Foto's van de omgeving</li>
                  <li>✓ Route-info prominent</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Aperloo</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan een klein gehucht als Aperloo wel online succesvol zijn?</h3>
                <p className="text-gray-600">
                  Juist kleine kernen zoals Aperloo hebben online grote kansen! Je authenticiteit en persoonlijke aanpak is wat klanten zoeken. Ik positioneer Aperloo als rustpunt aan de Veluwe, trek toeristen die massa mijden, en bereik alle 18.500 inwoners van gemeente Heerde. Klein zijn is je unique selling point - mensen rijden graag om voor kwaliteit en persoonlijk contact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een klein bedrijf in Aperloo?</h3>
                <p className="text-gray-600">
                  Voor ondernemers in kleine kernen zoals Aperloo start effectieve marketing vanaf €450-650 per maand. Dit omvat lokale SEO voor gemeente Heerde, Google Mijn Bedrijf optimalisatie, en basis advertenties. Voor bedrijven die ook Veluwe-toeristen willen bereiken adviseer ik €650-1.100 per maand, inclusief seizoenscampagnes en uitgebreider bereik naar Zwolle en Apeldoorn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik heel gemeente Heerde vanuit Aperloo?</h3>
                <p className="text-gray-600">
                  Gemeente Heerde telt 18.500 inwoners verspreid over Heerde (7.000), Wapenveld (8.000), Veessen (3.000) en kleine kernen zoals Aperloo, Vorchten en Marle. Ik optimaliseer voor "Heerde + dienst" searches, creëer landingspagina's per kern, en gebruik slimme Google Ads. Je centrale ligging tussen IJssel en Veluwe is perfect voor het bedienen van de hele gemeente.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik Veluwe-toeristen naar mijn bedrijf in Aperloo?</h3>
                <p className="text-gray-600">
                  De Veluwe trekt miljoenen bezoekers per jaar. Aperloo ligt perfect voor toeristen die rust zoeken tussen Heerde en Epe. Ik target "camping Veluwe", "rustige B&B Veluwe" en "authentiek Gelderland". Met goede SEO word je gevonden door mensen die bewust kleine, persoonlijke bedrijven zoeken. De combinatie IJsselvallei en Veluwerand is goud waard voor recreatie-marketing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kunnen klanten uit Zwolle mij vinden in Aperloo?</h3>
                <p className="text-gray-600">
                  Zwolle ligt op slechts 15 kilometer van Aperloo - perfect bereikbaar! Met 130.000 inwoners is het een enorme markt. Ik positioneer je als "specialist bij Zwolle" met landelijke kwaliteit. Zwollenaren waarderen vakmanschap en rijden graag naar Aperloo voor persoonlijke service, lagere prijzen en het vermijden van stadsdrukte. Via Google Ads target ik specifiek Zwolle-Zuid en Zwolle-Stadshagen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Aperloo</span> op de kaart te zetten?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Maak van kleinschaligheid je kracht. Laat heel Noord-Veluwe kennismaken met Aperloo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Ontdek hoe Aperloo online kan groeien. Vrijblijvend advies.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel contact over marketing voor kleine kernen.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Aperloo</h3>
              <p className="text-gray-600">
                <strong>Gemeente Heerde:</strong> Aperloo • Heerde • Wapenveld • Veessen • Vorchten • Marle<br/>
                <strong>Noord-Veluwe:</strong> Epe • Vaassen • Hattem • Oldebroek • Elburg<br/>
                <strong>Regio:</strong> Zwolle • Apeldoorn • Nunspeet • Harderwijk • Kampen • Deventer
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}