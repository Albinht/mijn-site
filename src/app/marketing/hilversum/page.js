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

export default function MarketingHilversum() {
  // Lokale Hilversum reviews - Mediastad van Nederland
  const dutchReviews = [
    { name: 'Creatief Bureau Media Park', rating: 5, text: 'Het Media Park is het creatieve hart van Nederland. Door lokale SEO krijgen we opdrachtgevers uit de hele media- en creatieve industrie!' },
    { name: 'Restaurant Centrum', rating: 5, text: 'Het gezellige centrum van Hilversum trekt veel bezoekers en media professionals. Onze zaak staat nu bovenaan in Google en zit vol beroemdheden.' },
    { name: 'Tandarts Kerkelanden', rating: 4.5, text: 'Kerkelanden heeft veel gezinnen met goede koopkracht. Via online marketing bereiken we nu patiënten uit heel het Gooi en Noord-Holland.' },
    { name: 'IT Bedrijf Noord', rating: 5, text: 'Hilversum-Noord heeft veel creatieve bedrijven. We staan nu #1 voor "IT diensten Hilversum" en ondersteunen media bedrijven in heel Nederland!' },
    { name: 'Sportschool Zuid', rating: 5, text: 'Hilversum-Zuid is sportief en welvarend. Dankzij Google Ads komen er leden uit Bussum, Naarden en heel het Gooi naar onze premium gym.' },
    { name: 'Makelaar Trompenberg', rating: 5, text: 'Trompenberg heeft prachtige villa\'s. Door professionele marketing bereiken we nu woningzoekers uit Amsterdam die rust zoeken in het Gooi.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fysiotherapie Oosterpark', rating: 5, text: 'Het Oosterpark gebied is zeer gewild. Door lokale zichtbaarheid krijgen we patiënten die kwaliteit en discretie waarderen uit heel het Gooi.' },
    { name: 'Schoonheidssalon West', rating: 4.5, text: 'Hilversum-West heeft veel media professionals die er verzorgd uit willen zien. Onze salon wordt nu gevonden door klanten uit de hele creatieve sector.' },
    { name: 'Bouwbedrijf Liebergen', rating: 5, text: 'Liebergen heeft veel monumentale panden. Via Google Ads bereiken we eigenaren die vakmanschap en discretie waarderen bij renovaties.' },
    { name: 'Accountant Centrum', rating: 5, text: 'Het centrum heeft veel zzp\'ers en creatieve ondernemers. Door SEO vinden freelancers en media bedrijven ons voor fiscale diensten.' },
    { name: 'Autogarage Erfgooiers', rating: 5, text: 'Erfgooiers waarderen kwaliteit. Online marketing brengt ons klanten met premium auto\'s die vakmanschap en service verwachten.' },
    { name: 'Tuinontwerp Crailo', rating: 4.5, text: 'Crailo heeft exclusieve woningen met grote tuinen. Ons bedrijf wordt nu gevonden door eigenaren die unieke tuinontwerpen willen.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Hilversum | Marketing Bureau & Online Marketing Hilversum</title>
        <meta
          name="description"
          content="SEO Specialist Hilversum voor creatieve bedrijven. Meer klanten in Hilversum met gerichte SEO, Google Ads en professionele marketing in het Gooi."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/hilversum" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Hilversum: Mediastad van Nederland</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">91.000 Hilversummers bereiken jouw bedrijf</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Hilversum: waar media, creativiteit en Gooise levensstijl samenkomen.</strong><br />
              Van het wereldberoemde Media Park tot charmante wijken zoals Kerkelanden en Trompenberg, van creatieve professionals tot welvarende gezinnen, van internationale omroepen tot lokale ondernemers - Hilversum combineert mediaglans met Gooise kwaliteit van leven. Met 91.000+ inwoners en als onbetwiste mediastad van Nederland biedt Hilversum ondernemers de perfecte mix van creativiteit, netwerken en koopkracht. Als <b>SEO specialist Hilversum</b> help ik ambitieuze bedrijven de digitale kansen van deze unieke mediastad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Hilversum: zichtbaar in het Gooi</li>
              <li>✓ Google Ads: direct bereik naar 91.000+ Hilversummers</li>
              <li>✓ Speciaal voor creatieve en media bedrijven</li>
              <li>✓ <b>SEO Hilversum</b> met focus op premium markt</li>
              <li>✓ Websites die passen bij Hilversum's niveau</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Hilversum cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Hilversum & het Gooi</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Hilversum - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Hilversum" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Hilversum met doelgerichte marketing"
          subtitle="Digitale groei voor de mediastad"
          features={[
            {
              badge: "SEO Hilversum",
              title: "SEO Specialist Hilversum",
              description: "Hilversum heeft een unieke positie als mediastad met creatieve professionals en hoge koopkracht. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en nieuwe klanten aan te trekken uit heel het Gooi en de creatieve sector.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Hilversum",
              description: "Direct zichtbaar voor 91.000+ Hilversummers en media professionals uit heel Nederland. Adverteer gericht in alle wijken van Media Park tot Trompenberg en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Hilversum",
              description: "Moderne, creatieve websites die passen bij Hilversum's media-erfgoed en Gooise stijl. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit heel het Gooi.",
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
          title="Hilversum groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Hilversum</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van media professionals tot lokale ondernemers – ik help creatieve bedrijven online groeien in de mediastad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Hilversum */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Hilversum</h3>
                <p className="text-gray-600 mb-6">
                  In de mediastad Hilversum is lokale zichtbaarheid essentieel voor alle sectoren. Word gevonden door mensen die nú zoeken en bereik ook de creatieve industrie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Hilversum</li>
                  <li>✓ Zoekwoordenonderzoek voor alle sectoren</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in premium markt</li>
                </ul>
              </div>
              {/* Google Ads Hilversum */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor creatieve sector
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Hilversum</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 91.000+ Hilversummers en media professionals uit Nederland met strategisch gerichte campagnes voor maximale impact in het Gooi.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & media sector</li>
                  <li>✓ Focus op kwaliteit en creativiteit</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Creatieve, professionele websites die passen bij Hilversum's media-uitstraling en Gooise kwaliteit, zorgen voor meer conversies uit heel het Gooi.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Creatief design voor media markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik het Gooi</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Hilversum</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Hilversum?</h3>
                <p className="text-gray-600">
                  Hilversum is de mediastad van Nederland met unieke mix van creatieve professionals, welvarende bewoners en toeristen. Met 91.000+ inwoners en het Media Park is lokale zichtbaarheid cruciaal. Van creatieve bureaus tot luxe diensten - je wilt gevonden worden door zowel lokale klanten als nationale media professionals die Hilversum bezoeken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Hilversum van andere steden?</h3>
                <p className="text-gray-600">
                  Hilversum combineert mediaglans met Gooise kwaliteit van leven. Veel inwoners werken in de creatieve sector, hebben hoge koopkracht en waarderen kwaliteit, originaliteit en discretie. Ze zijn kritisch en goed geïnformeerd. Marketing moet daarom creatief, professioneel en exclusief zijn, met oog voor detail en persoonlijke service.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Hilversum zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het Media Park voor creatieve en media bedrijven, het centrum voor retail en horeca, Kerkelanden voor gezinsgerichte diensten, Trompenberg voor luxe diensten, Noord voor startende ondernemers, Zuid voor welvarende doelgroep, en Oosterpark voor exclusieve services. Elk gebied heeft eigen karakteristieken en doelgroepen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Hilversum?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €950-1500 per maand, afhankelijk van concurrentie en ambities. Google Ads beheer vanaf €550 per maand plus advertentiebudget. Websiteprojecten vanaf €3500. Hilversum heeft uitstekende koopkracht en de ROI is zeer goed door de premium markt en media connecties.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Hilversum?</h3>
                <p className="text-gray-600">
                  Zeker! Hilversum trekt bezoekers uit heel Nederland voor media, cultuur en het Gooi. Veel bedrijven bedienen Amsterdam, Utrecht, het Gooi en zelfs internationale klanten. De strategie wordt aangepast om dit bredere verzorgingsgebied effectief te dekken, inclusief de nationale media sector.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Hilversum?</h3>
                <p className="text-gray-600">
                  Eerste verbeteringen zie je vaak binnen 2-3 maanden, significante groei binnen 4-6 maanden. Google Ads leveren directe zichtbaarheid. De concurrentie in Hilversum is professioneel door de vele creatieve bedrijven, maar met de juiste strategie zijn uitstekende resultaten haalbaar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Hilversum?</h3>
                <p className="text-gray-600">
                  Media en creatieve diensten (sterke basis), premium retail en horeca, gezondheidszorg en wellness, vastgoed en wonen, zakelijke dienstverlening voor creatieven, en toerisme/cultuur. Hilversum's unieke positie als mediastad biedt kansen voor diverse hoogwaardige sectoren.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Hilversum?</h3>
                <p className="text-gray-600">
                  Basis social media en netwerken kun je zelf doen in de creatieve sector. Maar in een veeleisende markt als Hilversum is professionele expertise cruciaal. Lokale SEO, premium positionering en creatieve marketing vereisen ervaring. Ik begeleid ook graag bij een strategische hybride aanpak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Hilversum</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de mediastad – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Hilversum - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Hilversum Media Park • Centrum • Kerkelanden • Trompenberg • Noord • Zuid • Oosterpark • Bussum • Naarden • Laren • Blaricum
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}