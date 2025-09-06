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

export default function MarketingAlmelo() {
  // Lokale Almelo reviews
  const dutchReviews = [
    { name: 'Tekstielbedrijf Twente Almelo', rating: 5, text: 'Dankzij Albin vinden internationale klanten ons nu direct. Onze B2B omzet in Twente is enorm gegroeid!' },
    { name: 'Restaurant De Rechtbank Almelo', rating: 5, text: 'Onze zaak zit nu structureel vol met gasten uit Almelo en omgeving. De online zichtbaarheid is perfect!' },
    { name: 'Autogarage Twente Almelo', rating: 5, text: 'Klanten uit heel de regio Almelo vinden ons voor onderhoud en reparaties. De agenda staat bomvol!' },
    { name: 'Tandartspraktijk Almelo Centrum', rating: 4.5, text: 'Veel meer patiënten sinds onze website geoptimaliseerd is. We worden perfect gevonden in Almelo.' },
    { name: 'Kapperszaak Modern Almelo', rating: 5, text: 'Onze afsprakenboek zit vol dankzij betere zichtbaarheid. Klanten boeken nu direct online hun afspraak.' },
    { name: 'Bouwbedrijf Twenthe Almelo', rating: 5, text: 'Projecten in Almelo en Twente komen nu regelmatig binnen via onze website. Geweldige ROI!' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor Almelo', rating: 5, text: 'MKB-ondernemers in Almelo vinden ons nu veel beter voor belastingadvies. Onze klantenportefeuille groeit snel.' },
    { name: 'Fysiotherapie Praktijk Almelo', rating: 5, text: 'Patiënten uit Almelo en Wierden maken nu makkelijk online afspraken. De praktijk loopt uitstekend.' },
    { name: 'IT-bedrijf Twentech Almelo', rating: 4.5, text: 'Veel meer B2B leads uit de regio Twente. Bedrijven vinden ons perfect voor IT-oplossingen.' },
    { name: 'Interieurzaak Almelo', rating: 5, text: 'Klanten uit heel Twente komen naar onze showroom. Online marketing werkt perfect voor ons!' },
    { name: 'Rijschool Almelo', rating: 5, text: 'Jongeren uit Almelo en omgeving vinden ons nu snel voor rijlessen. De wachtlijst groeit gestaag.' },
    { name: 'Dierenkliniek Twente Almelo', rating: 4.5, text: 'Veel meer lokale klanten voor onze dierenartsenpraktijk. Huisdiereigenaren vinden ons perfect via Google.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Industrieel Almelo: digitaal groeien in Twente</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">73.000 inwoners + industrieel hart van Twente</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Almelo: waar traditie en innovatie samenkomen in Twente.</strong><br />
            Van de historische textielnijverheid tot moderne technologie en logistiek – Almelo biedt unieke zakelijke kansen. Als <b>SEO specialist Almelo</b> positioneer ik je tussen de rijke industriële traditie, de groeiende bedrijvigheid en de strategische ligging aan de A1 en A35 in het hart van Twente.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Almelo: topresultaten in Google</li>
            <li>✓ Google Ads: direct aanvragen uit Almelo en Twente</li>
            <li>✓ Speciaal voor bedrijven, industrie en zzp'ers in Almelo</li>
            <li>✓ <b>SEO Almelo</b> met meetbaar resultaat</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek lokale cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Almelo & Twente</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Almelo - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Almelo" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Almelo met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Almelo",
            title: "SEO Specialist Almelo",
            description: "Wil je echt groeien in Almelo en Twente? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de industriële regio, van centrum tot bedrijventerreinen.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Almelo",
            description: "Direct aanvragen van bedrijven en inwoners uit Almelo en omliggende plaatsen. Perfect voor B2B, retail én dienstverlening in het hart van Twente.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Almelo",
            description: "Professionele websites voor bedrijven in Almelo. Geoptimaliseerd voor de lokale markt en de sterke industriële sector in Twente.",
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
        title="Almelo groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN ALMELO */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Almelo</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Almelo is een dynamische industriestad in Twente met sterke lokale en B2B markten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrieel centrum</h3>
              <p className="text-gray-600">
                Almelo is een belangrijk industrieel centrum in Twente. Van textiel tot technologie - lokale SEO helpt je zowel lokale als zakelijke klanten te bereiken in deze dynamische markt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategische ligging</h3>
              <p className="text-gray-600">
                Gelegen aan de A1 en A35, trekt Almelo bedrijven uit heel Twente aan. Met lokale SEO profiteer je van deze sterke positie en bereik je een groot verzorgingsgebied.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Groeiende economie</h3>
              <p className="text-gray-600">
                Almelo groeit economisch met nieuwe bedrijventerreinen en innovatie. Lokale SEO zorgt ervoor dat jouw bedrijf meegroeit en gevonden wordt door deze nieuwe markt.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Almelo</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van industriële leverancier tot lokale dienstverlener – ik help je bedrijf online groeien in Almelo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Almelo */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Almelo</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen en bedrijven die nú zoeken in Almelo en Twente.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Almelo</li>
                <li>✓ B2B en lokale SEO strategieën</li>
                <li>✓ Klantbeoordelingen stimuleren</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Almelo */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Almelo ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Almelo</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Almelo en Twente. Perfect voor zowel B2B als B2C.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale advertenties & B2B campagnes</li>
                <li>✓ Focus op Almelo en regio Twente</li>
                <li>✓ Continu geoptimaliseerd voor ROAS</li>
                <li>✓ Industriële en consumer targeting</li>
                <li>✓ Transparante rapportages</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt voor de Twentse markt.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Website op maat voor Almelo</li>
                <li>✓ B2B en consumer geoptimaliseerd</li>
                <li>✓ Gericht op conversie & groei</li>
                <li>✓ Sterke lokale zichtbaarheid</li>
                <li>✓ Social media integratie</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Almelo</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Almelo.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Almelo?</h3>
              <p className="text-gray-600">
                Almelo is een industriestad met 73.000 inwoners en veel bedrijven in Twente. Door je te richten op "SEO Almelo" trek je specifiek klanten aan die in jouw stad zoeken naar diensten. De industriële sector biedt extra B2B kansen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt SEO ook voor industriële bedrijven in Almelo?</h3>
              <p className="text-gray-600">
                Zeker! Almelo heeft een sterke industriële traditie. B2B bedrijven zoeken naar "leverancier Almelo", "industrie Twente" of "productie Almelo". Met de juiste SEO strategie bereik je deze professionele markt perfect.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Almelo zie je vaak al binnen 1-3 maanden eerste resultaten. B2B campagnes kunnen langer duren maar leveren hogere waarde leads. Google Ads campagnes geven direct resultaat.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Almelo?</h3>
              <p className="text-gray-600">
                De kosten variëren per bedrijf en doelstelling. Lokale SEO pakketten starten vanaf €600 per maand, B2B SEO vanaf €800. Tijdens een gratis strategiegesprek bespreken we wat het beste past bij jouw bedrijf.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit heel Twente?</h3>
              <p className="text-gray-600">
                Absoluut! Naast Almelo kunnen we je zichtbaar maken in Hengelo, Enschede, Oldenzaal, Wierden en heel Twente. We passen de strategie aan op basis van waar jouw ideale klanten vandaan komen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe zit het met de concurrentie in Almelo?</h3>
              <p className="text-gray-600">
                Almelo heeft een gevarieerde bedrijfsmarkt maar minder concurrentie dan grote steden. Met de juiste SEO strategie kun je snel marktleider worden in jouw sector in Almelo en omgeving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER ALMELO SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Almelo</span> & Twente
            </h2>
            <p className="text-xl text-gray-600">
              Almelo combineert industriële traditie met moderne innovatie - perfect voor ambitieuze ondernemers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrieel hart van Twente</h3>
              <p className="text-gray-600 mb-4">
                Almelo heeft een rijke industriële geschiedenis, van textiel tot moderne technologie. De stad ligt strategisch aan belangrijke snelwegen (A1, A35) en heeft sterke logistieke voordelen. Dit trekt bedrijven uit heel Nederland aan.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Almelo help ik bedrijven om optimaal te profiteren van deze unieke positie: lokale zichtbaarheid voor de 73.000 inwoners én B2B bereik voor de vele bedrijven die Almelo als hub gebruiken.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 73.000 inwoners + sterke B2B markt</li>
                <li>✓ Strategische ligging A1/A35</li>
                <li>✓ Industriële traditie & innovatie</li>
                <li>✓ Logistieke voordelen</li>
                <li>✓ Groeiende bedrijvigheid</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Almelo:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Industrie & productie</div>
                <div>• Logistiek & transport</div>
                <div>• Technologie bedrijven</div>
                <div>• Restaurants & horeca</div>
                <div>• Autobranche</div>
                <div>• Bouw & aannemers</div>
                <div>• Zorg & tandartsen</div>
                <div>• Accountants & advies</div>
                <div>• Kappers & wellness</div>
                <div>• Retail & winkels</div>
                <div>• IT-bedrijven</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Almelo</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Almelo – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Almelo - Online Marketing Twente</h3>
            <p className="text-gray-600">
              Almelo • Hengelo • Enschede • Wierden • Rijssen • Vriezenveen • Tubbergen • Oldenzaal • Twente
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}