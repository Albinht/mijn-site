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

export default function MarketingHoorn() {
  // Lokale Hoorn reviews
  const dutchReviews = [
    { name: 'Restaurant De Hoofdtoren Hoorn', rating: 5, text: 'Sinds we werken met Albin zitten we elke dag vol. Toeristen en locals vinden ons perfect via Google!' },
    { name: 'Autobedrijf Westfries Hoorn', rating: 5, text: 'Fantastische resultaten! Klanten uit heel West-Friesland vinden ons nu makkelijk. De agenda staat vol met afspraken.' },
    { name: 'Tandartspraktijk Hoorn Centrum', rating: 5, text: 'Onze praktijk wordt dagelijks gevonden door mensen uit Hoorn en omgeving. Een investering die zich terugbetaalt.' },
    { name: 'Kapsalon Stijl Hoorn', rating: 5, text: 'Veel meer klanten sinds de website live ging. We staan bovenaan voor "kapper Hoorn" en de agenda is vol.' },
    { name: 'Fysiotherapie Westfries Hoorn', rating: 4.5, text: 'Onze zichtbaarheid in Hoorn is enorm verbeterd. Patiënten boeken nu direct online hun eerste afspraak.' },
    { name: 'Bouwbedrijf Van der Berg Hoorn', rating: 5, text: 'Projecten in Hoorn en omgeving komen nu structureel binnen via onze website. TOP resultaat!' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor Hoorn', rating: 5, text: 'Als MKB-adviseur in Hoorn merk ik direct het verschil. Meer bedrijven vinden ons voor belastingadvies en boekhouding.' },
    { name: 'Interieurzaak Hoorn', rating: 5, text: 'Klanten uit heel West-Friesland komen nu naar onze showroom. Onze omzet is flink gestegen dankzij betere online vindbaarheid.' },
    { name: 'Rijschool Hoorn Centrum', rating: 4.5, text: 'Onze rijschool wordt nu veel beter gevonden door jongeren in Hoorn. De wachtlijst voor lessen groeit snel.' },
    { name: 'Dierenartspraktijk Hoorn', rating: 5, text: 'Huisdiereigenaren uit Hoorn en omliggende dorpen vinden ons perfect via Google. De praktijk loopt uitstekend.' },
    { name: 'Notariskantoor Hoorn', rating: 5, text: 'Voor hypotheken en woningverkoop worden we veel beter gevonden in Hoorn. Onze expertise komt nu goed over.' },
    { name: 'Juwelier Hoorn', rating: 4.5, text: 'Verlovingsringen en horloges verkopen we nu ook online aan klanten uit heel de regio. Geweldige groei!' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Historisch Hoorn: digitaal domineren in West-Friesland</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">75.000 inwoners + 2 miljoen toeristen per jaar</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Hoorn: waar de Gouden Eeuw nog altijd leeft aan het IJsselmeer.</strong><br />
            Met de iconische Hoofdtoren, Westfries Museum, bloeiende binnenstad en strategische ligging in West-Friesland biedt Hoorn unieke kansen. Als <b>SEO specialist Hoorn</b> positioneer ik je tussen de historische charme, het moderne zakenleven en de groeiende toerismemarkt van Noord-Holland.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Hoorn: topresultaten in Google</li>
            <li>✓ Google Ads: direct aanvragen uit Hoorn en West-Friesland</li>
            <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Hoorn</li>
            <li>✓ <b>SEO Hoorn</b> met meetbaar resultaat</li>
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
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Hoorn & West-Friesland</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Hoorn - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Hoorn" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Hoorn met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Hoorn",
            title: "SEO Specialist Hoorn",
            description: "Wil je echt groeien in Hoorn en West-Friesland? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de regio, van centrum tot Kersenboogerd.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Hoorn",
            description: "Direct aanvragen van inwoners en bedrijven uit Hoorn en omliggende plaatsen. Je adverteert gericht op Hoorn, Enkhuizen, Medemblik en heel West-Friesland en ziet direct resultaat.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Hoorn",
            description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Hoorn. Volledig geoptimaliseerd voor de lokale markt in West-Friesland en geschikt voor zowel locals als toeristen.",
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
        title="Hoorn groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN HOORN */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Hoorn</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Hoorn is het economische hart van West-Friesland met een bloeiende lokale economie en miljoenen toeristen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Economisch centrum</h3>
              <p className="text-gray-600">
                Hoorn is het grootste handelscentrum van West-Friesland. Met sterke lokale SEO bereik je zowel de 75.000 inwoners als bezoekers uit de hele regio die hier winkelen en zakendoen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Toeristische trekpleister</h3>
              <p className="text-gray-600">
                Jaarlijks bezoeken miljoenen toeristen Hoorn voor de historische binnenstad, musea en het IJsselmeer. Lokale SEO helpt je deze extra doelgroep te bereiken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sterke concurrentiepositie</h3>
              <p className="text-gray-600">
                In Hoorn en West-Friesland kun je met de juiste SEO-strategie snel marktleider worden in jouw sector. Minder concurrentie dan Amsterdam, meer kansen dan kleine dorpen.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Hoorn</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot retailer – ik help je bedrijf online groeien in Hoorn en West-Friesland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Hoorn */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Hoorn</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Hoorn en West-Friesland.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Hoorn</li>
                <li>✓ Content, autoriteit & linkbuilding</li>
                <li>✓ Klantbeoordelingen stimuleren</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Hoorn */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Hoorn ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Hoorn</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Hoorn en West-Friesland.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale advertenties & campagnes</li>
                <li>✓ Focus op Hoorn en West-Friesland</li>
                <li>✓ Continu geoptimaliseerd voor ROAS</li>
                <li>✓ Landing pages die converteren</li>
                <li>✓ Transparante rapportages</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt voor zowel locals als toeristen.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Website op maat voor Hoorn</li>
                <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Hoorn</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Hoorn.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Hoorn?</h3>
              <p className="text-gray-600">
                Hoorn is het economische centrum van West-Friesland met 75.000 inwoners plus miljoenen toeristen per jaar. Door je te richten op "SEO Hoorn" of "dienst Hoorn" trek je specifiek klanten aan die in jouw stad zoeken. Dit levert vaak veel hogere conversies op dan algemene SEO.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Hoorn zie je vaak al binnen 1-3 maanden eerste resultaten. Google Ads campagnes kunnen direct resultaat opleveren. De beste resultaten krijg je na 6-12 maanden consistent werken aan je online zichtbaarheid in West-Friesland.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook toeristen bereiken met lokale SEO?</h3>
              <p className="text-gray-600">
                Zeker! Hoorn trekt jaarlijks miljoenen toeristen. Met de juiste SEO-strategie bereik je zowel locals als bezoekers die zoeken naar restaurants, hotels, activiteiten en winkels in Hoorn. Dit geeft je een extra revenue stream naast je lokale klanten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Hoorn?</h3>
              <p className="text-gray-600">
                De kosten voor SEO in Hoorn verschillen per bedrijf en doelstelling. Ik werk met maandelijkse pakketten vanaf €750 per maand voor lokale SEO. Tijdens een gratis strategiegesprek bespreken we wat het beste bij jouw bedrijf past.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt online marketing ook voor B2B bedrijven in Hoorn?</h3>
              <p className="text-gray-600">
                Absoluut! Hoorn heeft een sterke zakelijke gemeenschap. Veel bedrijven zoeken naar "accountant Hoorn", "advocaat Hoorn" of "IT bedrijf Hoorn". Met de juiste B2B SEO strategie kun je deze professionele markt perfect bedienen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit heel West-Friesland?</h3>
              <p className="text-gray-600">
                Zeker! Naast Hoorn kunnen we je ook zichtbaar maken in Enkhuizen, Medemblik, Bovenkarspel, Grootebroek en andere plaatsen in West-Friesland. We passen de SEO-strategie aan op basis van waar jouw ideale klanten vandaan komen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER HOORN SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Hoorn</span> & West-Friesland
            </h2>
            <p className="text-xl text-gray-600">
              Hoorn combineert historische charme met moderne zakelijkheid - perfect voor groeiende ondernemers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Het commerciële hart van West-Friesland</h3>
              <p className="text-gray-600 mb-4">
                Hoorn is de grootste stad van West-Friesland en fungeert als economisch centrum voor de hele regio. Met de historische binnenstad, moderne bedrijventerreinen en strategische ligging tussen Amsterdam en de Afsluitdijk trekt Hoorn zowel locals als toeristen.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Hoorn help ik bedrijven om optimaal te profiteren van deze unieke positie: lokale zichtbaarheid voor de 75.000 inwoners én online bereik van de miljoenen toeristen die jaarlijks West-Friesland bezoeken.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 75.000 inwoners + miljoenen toeristen</li>
                <li>✓ Economisch centrum West-Friesland</li>
                <li>✓ Historische binnenstad met moderne economie</li>
                <li>✓ Strategische ligging aan het IJsselmeer</li>
                <li>✓ Bloeiende horeca & retail sector</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Hoorn:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Restaurants & cafés</div>
                <div>• Hotels & B&B's</div>
                <div>• Winkels & retail</div>
                <div>• Accountants & adviseurs</div>
                <div>• Tandartsen & artsen</div>
                <div>• Advocaten & notarissen</div>
                <div>• Kappers & schoonheid</div>
                <div>• Fysiotherapie & zorg</div>
                <div>• Aannemers & bouw</div>
                <div>• Automobielbedrijven</div>
                <div>• IT & technologie</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Hoorn</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Hoorn – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Hoorn - Online Marketing West-Friesland</h3>
            <p className="text-gray-600">
              Hoorn • Enkhuizen • Medemblik • Bovenkarspel • Grootebroek • Zwaag • Blokker • Warmenhuizen • West-Friesland
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}