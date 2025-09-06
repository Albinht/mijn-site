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

export default function MarketingLeeuwarden() {
  // Lokale Leeuwarden reviews - Hoofdstad van Friesland
  const dutchReviews = [
    { name: 'Restaurant Nieuwestad', rating: 5, text: 'In het historische hart van Leeuwarden krijgen we nu veel meer toeristen. De Fryske identiteit spreekt aan en de omzet is flink gestegen!' },
    { name: 'Advocaat Europaplein', rating: 5, text: 'Vanaf ons kantoor bij het station bereiken we nu cliënten uit heel Friesland. De provincie kent ons als specialist in Fries recht.' },
    { name: 'Tandarts Bilgaard', rating: 5, text: 'Bilgaard is een multiculturele wijk met veel gezinnen. Door lokale SEO krijgen we patiënten uit alle delen van Leeuwarden.' },
    { name: 'IT Bedrijf Techum', rating: 4.5, text: 'Op het innovatieve Techum bedienen we tech-bedrijven uit heel Noord-Nederland. Google Ads bracht ons internationale klanten!' },
    { name: 'Bouwbedrijf Voorhout', rating: 5, text: 'In de groeiende wijk De Voorhout veel nieuwbouw. We staan bovenaan voor "aannemer Leeuwarden" - perfect voor onze groei!' },
    { name: 'Sportschool Cambuurplein', rating: 5, text: 'Vlak bij het Cambuurstadion hebben we nu leden uit heel de stad. De voetbalcultuur en lokale trots werken perfect samen!' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Oldegalileë', rating: 5, text: 'De historische wijk heeft veel karakter. Onze salon wordt nu gevonden door klanten die echte Friese kwaliteit waarderen.' },
    { name: 'Fysiotherapie Heechterp', rating: 4.5, text: 'Heechterp is een rustige woonwijk perfect voor onze praktijk. Door SEO bereiken we nu patiënten uit heel Leeuwarden en omgeving.' },
    { name: 'Makelaar Schieringen', rating: 5, text: 'In deze groeiwijk kennen we de lokale markt goed. Onze woningverkopen zijn verdubbeld door betere online zichtbaarheid.' },
    { name: 'Autogarage Goutum', rating: 5, text: 'Goutum ligt strategisch aan de rand van Leeuwarden. We trekken nu klanten uit heel Friesland voor onze specialistische diensten.' },
    { name: 'Schoonheidssalon Huizum', rating: 4.5, text: 'Huizum heeft een eigen gemeenschapsfeer. Onze salon wordt nu veel beter gevonden door mensen die kwaliteit zoeken.' },
    { name: 'Installatiebedrijf Westerpark', rating: 5, text: 'Moderne wijk met veel nieuwbouw en renovatie. Door lokale marketing krijgen we continu nieuwe opdrachten van particulieren én bedrijven.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Leeuwarden | Marketing Bureau & Online Marketing Leeuwarden</title>
        <meta
          name="description"
          content="SEO Specialist Leeuwarden inschakelen? Kies voor hét marketing bureau in Leeuwarden. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/leeuwarden" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Leeuwarden: Hoofdstad van Friesland</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">125.000 Leeuwarders wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Leeuwarden: waar Fryske trots en moderne innovatie elkaar ontmoeten.</strong><br />
              Van de historische binnenstad met de iconische Oldehove tot het innovatieve Techum, van de multiculturele wijk Bilgaard tot cultureel erfgoed als Europese Culturele Hoofdstad - Leeuwarden combineert diepe wortels met vooruitstrevende visie. Met 125.000+ inwoners als kloppende hart van Friesland biedt Leeuwarden ondernemers unieke kansen in een authentieke, trotse regio. Als <b>SEO specialist Leeuwarden</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze bijzondere hoofdstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Leeuwarden: zichtbaar in Friesland's hoofdstad</li>
              <li>✓ Google Ads: direct bereik naar 125.000+ Leeuwarders</li>
              <li>✓ Speciaal voor ambitieuze bedrijven in Noord-Nederland</li>
              <li>✓ <b>SEO Leeuwarden</b> met focus op lokale dominantie</li>
              <li>✓ Websites die passen bij Fryske ondernemersgeest</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Leeuwarden cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Leeuwarden & Friesland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Leeuwarden - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Leeuwarden" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Leeuwarden met doelgerichte marketing"
          subtitle="Digitale groei voor Friesland's hoofdstad"
          features={[
            {
              badge: "SEO Leeuwarden",
              title: "SEO Specialist Leeuwarden",
              description: "Leeuwarden heeft een sterke lokale identiteit en diepe gemeenschapsbanden. Ik zorg dat jouw bedrijf opvalt in de Friese markt door lokaal bovenaan te staan en structureel nieuwe klanten aan te trekken uit heel Noord-Nederland.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Leeuwarden",
              description: "Direct zichtbaar voor 125.000+ Leeuwarders en bezoekers uit heel Nederland en Duitsland. Adverteer gericht in alle wijken van centrum tot Techum en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Leeuwarden",
              description: "Moderne, professionele websites die passen bij Leeuwarden's unieke mix van traditie en innovatie. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit heel Friesland.",
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
          title="Leeuwarden groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Leeuwarden</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startende ondernemers tot gevestigde bedrijven – ik help ambitieuze ondernemers online groeien in Friesland's hoofdstad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Leeuwarden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Leeuwarden</h3>
                <p className="text-gray-600 mb-6">
                  In een cultureel rijke stad als Leeuwarden is authentieke lokale zichtbaarheid cruciaal. Word gevonden door mensen die nú zoeken in alle wijken van de Friese hoofdstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Leeuwarden</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Leeuwarden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor groeiende bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Leeuwarden</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 125.000+ Leeuwarders en bezoekers uit heel Nederland en Noord-Duitsland met strategisch gerichte campagnes voor maximale impact.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & districten</li>
                  <li>✓ Focus op lokale concurrentie</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Leeuwarden's unieke karakter als culturele hoofdstad en zorgen voor meer conversies uit heel Noord-Nederland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Authentiek design voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Friesland</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Leeuwarden</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Leeuwarden?</h3>
                <p className="text-gray-600">
                  Leeuwarden heeft een sterke lokale identiteit en gemeenschapszin. Met 125.000+ inwoners plus toeristen en studenten is lokale zichtbaarheid essentieel. Van het historische centrum tot moderne wijken zoals Techum - Friezen waarderen authenticiteit en lokale verbinding. Goede SEO zorgt ervoor dat je gevonden wordt door mensen die écht lokaal zoeken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Leeuwarden van andere steden?</h3>
                <p className="text-gray-600">
                  Leeuwarden is uniek door haar Friese identiteit, sterke cultuur, en gemeenschapstrots. Als Europese Culturele Hoofdstad 2018 heeft de stad internationale uitstraling gekregen. Marketing moet respectvol zijn naar de lokale cultuur en tegelijk modern en innovatief - een balans tussen traditie en vooruitgang die perfect past bij de Friese mentaliteit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Leeuwarden zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Nieuwestad, Oldegalileë) voor cultuur en retail, Bilgaard voor diverse gemeenschappen, Techum voor innovatie en IT, Heechterp en De Voorhout voor gezinnen, het Europaplein voor zakelijke diensten, en Cambuurplein voor sport en recreatie. Elke wijk heeft eigen karakteristieken en doelgroepen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Leeuwarden?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €750-1200 per maand, afhankelijk van je ambities. Google Ads beheer vanaf €400 per maand plus advertentiebudget. Websiteprojecten vanaf €2500. Leeuwarden heeft minder concurrentie dan grote steden, maar wel sterke lokale loyaliteit, waardoor goede SEO zeer effectief kan zijn voor lokale bedrijven.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Leeuwarden?</h3>
                <p className="text-gray-600">
                  Absoluut! Als hoofdstad van Friesland trekt Leeuwarden bezoekers uit de hele provincie en Noord-Nederland. Veel bedrijven bedienen heel Friesland (Heerenveen, Sneek, Drachten) en delen van Groningen en Drenthe. De SEO strategie kan aangepast worden om dit bredere gebied te dekken, inclusief Duitse bezoekers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Leeuwarden?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 4-6 maanden. Google Ads geven directe zichtbaarheid. Leeuwarden heeft minder concurrentie dan grote steden maar wel sterke lokale gemeenschappen, waardoor organische groei en mond-tot-mond reclame excellent kunnen werken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Leeuwarden?</h3>
                <p className="text-gray-600">
                  Cultuur en toerisme (erfgoed, musea), onderwijs en training, gezondheidszorg en wellness, zakelijke dienstverlening, IT en innovatie (Techum), bouw en renovatie, en creatieve diensten. Leeuwarden's mix van cultuur, onderwijs en innovatie biedt kansen voor diverse branches.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Leeuwarden?</h3>
                <p className="text-gray-600">
                  Basis social media en Google My Business kun je zelf doen. Maar voor echte groei in Leeuwarden's unieke markt heb je kennis nodig van lokale cultuur, Friese eigenheid, en regionale SEO. Ik begeleid ook graag bij een hybride aanpak waarbij jij bepaalde taken overneemt terwijl ik de strategie en techniek verzorg.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Leeuwarden</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Friesland's hoofdstad – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Leeuwarden - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Leeuwarden Centrum • Nieuwestad • Bilgaard • Heechterp • De Voorhout • Techum • Europaplein • Oldegalileë • Cambuurplein • Goutum • Huizum • Westerpark • Schieringen • Heerenveen • Sneek • Drachten • Franeker
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}