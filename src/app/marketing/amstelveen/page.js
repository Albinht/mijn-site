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

export default function MarketingAmstelveen() {
  // Lokale Amstelveen reviews - Groene Hart nabij Amsterdam
  const dutchReviews = [
    { name: 'Advocaat Stadshart', rating: 5, text: 'Het moderne Stadshart van Amstelveen trekt veel zakelijke klanten. Door lokale SEO krijgen we cliënten uit heel de Randstad!' },
    { name: 'Restaurant Westwijk', rating: 5, text: 'Westwijk heeft een eigen karakter met veel gezinnen. Onze zaak staat nu bovenaan in Google en zit elke avond vol met lokale gasten.' },
    { name: 'Tandarts Elsrijk', rating: 4.5, text: 'Elsrijk is de modernste wijk met veel expats. Via online marketing in meerdere talen bereiken we nu internationale professionals.' },
    { name: 'IT Consultancy Centrum', rating: 5, text: 'Het centrum nabij Amsterdam Zuid is perfect voor B2B. We staan nu #1 voor "IT diensten Amstelveen" en bedienen klanten tot in de City.' },
    { name: 'Sportschool Middenhoven', rating: 5, text: 'Middenhoven heeft veel sportieve bewoners. Dankzij Google Ads komen er leden uit Amsterdam Zuid, Ouderkerk en heel de regio.' },
    { name: 'Makelaar Buitenveldert', rating: 5, text: 'De grens met Buitenveldert biedt veel kansen. Door professionele marketing bereiken we nu woningzoekers uit heel Amsterdam Zuid.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fysiotherapie Bovenkerk', rating: 5, text: 'Bovenkerk heeft veel oudere bewoners die zorg nodig hebben. Door lokale zichtbaarheid krijgen we patiënten uit heel Amstelveen.' },
    { name: 'Schoonheidssalon Nes aan de Amstel', rating: 4.5, text: 'Nes heeft een pittoresk karakter. Onze salon wordt nu gevonden door klanten die kwaliteit en rust zoeken - perfecte match!' },
    { name: 'Bouwbedrijf Ouderkerk', rating: 5, text: 'Ouderkerk aan de Amstel heeft veel monumentale panden. Via Google Ads bereiken we eigenaren die vakmanschap waarderen.' },
    { name: 'Accountant Groenelaan', rating: 5, text: 'De Groenelaan ligt centraal in Amstelveen. Door SEO vinden ondernemers ons voor fiscale diensten en bedrijfsadvies uit de hele regio.' },
    { name: 'Kapsalon Kronenburg', rating: 5, text: 'Kronenburg is een gezellige buurt. Online marketing brengt ons klanten die persoonlijke aandacht waarderen in een drukke wereld.' },
    { name: 'Tuinontwerp Amstelpark', rating: 4.5, text: 'Nabij het Amstelpark veel villa\'s met grote tuinen. Ons bedrijf wordt nu gevonden door eigenaren van exclusieve woningen.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Amstelveen | Marketing Bureau & Online Marketing Amstelveen</title>
        <meta
          name="description"
          content="SEO Specialist Amstelveen voor ambitieuze bedrijven. Meer klanten in Amstelveen met gerichte SEO, Google Ads en professionele marketing in de Groene Hart."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/amstelveen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Amstelveen: Groene Hart bij Amsterdam</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">91.000 Amstellanders vinden jouw bedrijf</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Amstelveen: waar groene leefkwaliteit en zakelijke ambities elkaar versterken.</strong><br />
              Van het bruisende Stadshart tot groene wijken zoals Westwijk en Elsrijk, van internationale bedrijven tot lokale ondernemers, van het Amstelpark tot de grens met Amsterdam Zuid - Amstelveen combineert rust en ruimte met metropolitaanse kansen. Met 91.000+ inwoners en als groene voorstad van de hoofdstad biedt Amstelveen ondernemers de perfecte mix van kwaliteit, bereikbaarheid en koopkracht. Als <b>SEO specialist Amstelveen</b> help ik ambitieuze bedrijven de digitale kansen van deze aantrekkelijke gemeente optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Amstelveen: zichtbaar in het Groene Hart</li>
              <li>✓ Google Ads: direct bereik naar 91.000+ Amstellanders</li>
              <li>✓ Speciaal voor ondernemers in de Randstad</li>
              <li>✓ <b>SEO Amstelveen</b> met focus op kwaliteit & koopkracht</li>
              <li>✓ Websites die passen bij Amstelveen's niveau</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Amstelveen cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Amstelveen & omgeving</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Amstelveen - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Amstelveen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Amstelveen met doelgerichte marketing"
          subtitle="Digitale groei voor het Groene Hart"
          features={[
            {
              badge: "SEO Amstelveen",
              title: "SEO Specialist Amstelveen",
              description: "Amstelveen heeft een unieke positie als groene voorstad met hoge koopkracht en internationale allure. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en nieuwe klanten aan te trekken uit de hele Randstad.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Amstelveen",
              description: "Direct zichtbaar voor 91.000+ Amstellanders en dagelijkse bezoekers uit Amsterdam. Adverteer gericht in alle wijken van Stadshart tot Elsrijk en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Amstelveen",
              description: "Moderne, professionele websites die passen bij Amstelveen's hoge standaard en internationale karakter. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit de hele Randstad.",
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
          title="Amstelveen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Amstelveen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale ondernemers tot internationale bedrijven – ik help ambitieuze organisaties online groeien in het Groene Hart.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Amstelveen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Amstelveen</h3>
                <p className="text-gray-600 mb-6">
                  In een welvarende gemeente als Amstelveen is lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken en bereik ook Amsterdam Zuid en de Zuidas.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Amstelveen</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Amstelveen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor premium markt
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Amstelveen</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 91.000+ Amstellanders en zakelijke bezoekers uit Amsterdam met strategisch gerichte campagnes voor maximale impact in de Randstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & zakengebieden</li>
                  <li>✓ Focus op kwaliteit en koopkracht</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Amstelveen's hoge standaard en internationale uitstraling, zorgen voor meer conversies uit de hele Randstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Premium design voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Randstad</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Amstelveen</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Amstelveen?</h3>
                <p className="text-gray-600">
                  Amstelveen is een welvarende gemeente met hoge koopkracht en veel internationale bewoners. Met 91.000+ inwoners plus dagelijkse bezoekers uit Amsterdam is lokale zichtbaarheid cruciaal. Van het moderne Stadshart tot groene woonwijken - je wilt gevonden worden door zowel lokale klanten als bezoekers uit de hele Randstad die kwaliteit zoeken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Amstelveen van andere steden?</h3>
                <p className="text-gray-600">
                  Amstelveen combineert groene leefkwaliteit met zakelijke ambities en internationale allure. Veel bewoners hebben hoge functies, waarderen kwaliteit en zijn kritisch op service. Ze zoeken lokaal maar denken globaal. Marketing moet daarom professioneel, betrouwbaar en premium zijn, met oog voor detail en persoonlijke service.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Amstelveen zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het Stadshart voor retail en zakelijke dienstverlening, Westwijk voor gezinnen, Elsrijk voor expats en internationale professionals, het Centrum voor bereikbaarheid, Bovenkerk voor oudere doelgroep, en Ouderkerk aan de Amstel voor exclusieve diensten. Elke wijk heeft eigen karakteristieken en koopkracht.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Amstelveen?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €900-1400 per maand, afhankelijk van concurrentie en ambities. Google Ads beheer vanaf €500 per maand plus advertentiebudget. Websiteprojecten vanaf €3200. Amstelveen heeft uitstekende koopkracht en de ROI is zeer goed door de combinatie van lokale en Randstad klanten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Amstelveen?</h3>
                <p className="text-gray-600">
                  Zeker! Amstelveen ligt strategisch tegen Amsterdam Zuid en de Zuidas aan. Veel bedrijven bedienen heel Zuid-Holland, Amsterdam, Utrecht en de Randstad. De strategie wordt aangepast om dit bredere verzorgingsgebied effectief te dekken, inclusief internationale doelgroepen waar relevant.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Amstelveen?</h3>
                <p className="text-gray-600">
                  Eerste verbeteringen zie je vaak binnen 2-3 maanden, significante groei binnen 4-6 maanden. Google Ads leveren directe zichtbaarheid. De concurrentie in Amstelveen is serieus door de vele professionals, maar met de juiste strategie zijn uitstekende resultaten haalbaar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Amstelveen?</h3>
                <p className="text-gray-600">
                  Zakelijke dienstverlening (veel professionals), premium retail en horeca, gezondheidszorg en wellness, vastgoed en wonen, financiële dienstverlening, en internationale services. Amstelveen's welvarende en internationale karakter biedt kansen voor hoogwaardige diensten en producten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Amstelveen?</h3>
                <p className="text-gray-600">
                  Google My Business en social media kun je zelf opstarten voor basis zichtbaarheid. Maar in een veeleisende markt als Amstelveen is professionele expertise cruciaal. Lokale SEO, premium positionering en conversie-optimalisatie vereisen ervaring. Ik begeleid ook graag bij een professionele hybride aanpak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Amstelveen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in het Groene Hart – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Amstelveen - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Amstelveen Stadshart • Westwijk • Elsrijk • Centrum • Bovenkerk • Nes aan de Amstel • Ouderkerk • Amsterdam Zuid • Zuidas • Buitenveldert
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}