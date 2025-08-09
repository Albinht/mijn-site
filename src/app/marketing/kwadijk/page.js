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

export default function MarketingKwadijk() {
  // Lokale Kwadijk reviews
  const dutchReviews = [
    { name: 'Café De Kwadijker Kwadijk', rating: 5, text: 'Sinds we werken met Albin zijn we het best vindbare café in Kwadijk. Iedere week nieuwe gasten uit het Waterland!' },
    { name: 'Bakkerij Waterland Kwadijk', rating: 5, text: 'De marketingstrategie zorgt voor een gestage stroom aan klanten uit Kwadijk en Edam-Volendam. Onze omzet is flink gestegen.' },
    { name: 'Kapsalon Stijl Kwadijk', rating: 5, text: 'Sinds de website is aangepakt krijgen we veel meer afspraken. We zijn goed zichtbaar in lokale zoekresultaten.' },
    { name: 'Fysiotherapie Praktijk Kwadijk', rating: 5, text: 'Onze praktijk wordt nu structureel gevonden door mensen uit Kwadijk. De agenda is voller dan ooit.' },
    { name: 'Installatiebedrijf Kwadijk', rating: 5, text: 'Lokale SEO levert elke week aanvragen uit Kwadijk en het Waterland op. De investering betaalt zich terug.' },
    { name: 'Huisartsenpraktijk Kwadijk', rating: 4.5, text: 'Meer patiënten, betere reviews en veel meer zichtbaarheid in Kwadijk. Super tevreden met de samenwerking!' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemer Waterland Kwadijk', rating: 5, text: 'Onze projecten komen nu rechtstreeks via Google binnen. Binnen een half jaar bovenaan voor onze zoekwoorden.' },
    { name: 'Schoonheidssalon Bella Kwadijk', rating: 5, text: 'Dankzij de lokale focus boeken klanten uit Kwadijk nu direct via Google. Onze omzet is flink gestegen.' },
    { name: 'Fietsenwinkel Kwadijk', rating: 4.5, text: 'Onze naamsbekendheid in Kwadijk groeit snel dankzij slimme online marketing en lokale SEO.' },
    { name: 'Tandartspraktijk Kwadijk', rating: 5, text: 'Toppositie in Google voor "tandarts Kwadijk" en een duidelijke groei in aanvragen uit Edam-Volendam.' },
    { name: 'Restaurant Het Waterland Kwadijk', rating: 5, text: 'Onze seizoensacties zijn nu veel beter zichtbaar bij inwoners van Kwadijk en omliggende dorpen.' },
    { name: 'Dierenkliniek Kwadijk', rating: 4.5, text: 'Veel meer lokale klanten dankzij sterke zichtbaarheid voor "dierenarts Kwadijk" in Google.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Marketing Bureau of SEO Specialist in Kwadijk nodig?</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">Groei jouw bedrijf met lokale marketing</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Klaar voor échte resultaten in Kwadijk?</strong><br />
            Als <b>SEO specialist Kwadijk</b> zorg ik ervoor dat jouw bedrijf bovenaan staat op lokale zoektermen, meer aanvragen binnenhaalt en sterker wordt in het prachtige Waterland.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Kwadijk: topresultaten in Google</li>
            <li>✓ Google Ads: direct aanvragen uit Kwadijk en Waterland</li>
            <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Kwadijk</li>
            <li>✓ <b>SEO Kwadijk</b> met meetbaar resultaat</li>
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
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Kwadijk & het Waterland</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Kwadijk - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Kwadijk" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Kwadijk met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Kwadijk",
            title: "SEO Specialist Kwadijk",
            description: "Wil je echt groeien in Kwadijk en het Waterland? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de regio.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Kwadijk",
            description: "Direct aanvragen van inwoners en bedrijven uit Kwadijk en omliggende dorpen. Je adverteert gericht en ziet direct resultaat in je agenda.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Kwadijk",
            description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Kwadijk. Volledig geoptimaliseerd voor de lokale markt in het Waterland.",
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
        title="Kwadijk groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN KWADIJK */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Kwadijk</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Kwadijk is een levendig dorp in Edam-Volendam met veel lokale ondernemers die gevonden willen worden.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Actieve dorpsgemeenschap</h3>
              <p className="text-gray-600">
                Kwadijk heeft een levendige gemeenschap waar lokale bedrijven belangrijk zijn. Met lokale SEO bereik je nieuwe klanten die specifiek in jouw dorp zoeken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waterland zoekgedrag</h3>
              <p className="text-gray-600">
                Mensen zoeken steeds vaker naar "bedrijf Kwadijk" of "dienst Waterland". Met lokale SEO sta je bovenaan bij deze specifieke zoekopdrachten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meetbare groei</h3>
              <p className="text-gray-600">
                Lokale SEO in Kwadijk levert snel resultaat op. Meer telefoontjes, meer afspraken en meer omzet uit je eigen dorp en regio.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Kwadijk</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot retailer – ik help je bedrijf online groeien in Kwadijk en het Waterland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Kwadijk */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Kwadijk</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Kwadijk.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Kwadijk</li>
                <li>✓ Content, autoriteit & linkbuilding</li>
                <li>✓ Klantbeoordelingen stimuleren</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Kwadijk */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Kwadijk ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Kwadijk</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Kwadijk en het Waterland.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale advertenties & campagnes</li>
                <li>✓ Focus op Kwadijk en omliggende dorpen</li>
                <li>✓ Continu geoptimaliseerd voor ROAS</li>
                <li>✓ Landing pages die converteren</li>
                <li>✓ Transparante rapportages</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Website op maat voor Kwadijk</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Kwadijk</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Kwadijk.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Kwadijk?</h3>
              <p className="text-gray-600">
                Kwadijk is een levendig dorp in Edam-Volendam waar lokale bedrijven belangrijk zijn. Door je te richten op "SEO Kwadijk" of "dienst Kwadijk" trek je specifiek klanten aan die in jouw dorp zoeken naar je diensten. Dit levert vaak veel hogere conversies op dan algemene SEO.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Kwadijk zie je vaak al binnen 1-3 maanden eerste resultaten. Google Ads campagnes kunnen direct resultaat opleveren. De beste resultaten krijg je na 6-12 maanden consistent werken aan je online zichtbaarheid.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt online marketing ook voor kleine bedrijven in Kwadijk?</h3>
              <p className="text-gray-600">
                Zeker! Juist kleine bedrijven in Kwadijk hebben veel voordeel bij lokale SEO. Je concurreert niet met grote landelijke partijen, maar met lokale bedrijven. Met de juiste strategie kun je als kleine ondernemer bovenaan staan in Google.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Kwadijk?</h3>
              <p className="text-gray-600">
                De kosten voor SEO in Kwadijk verschillen per bedrijf en doelstelling. Ik werk met maandelijkse pakketten vanaf €500 per maand voor lokale SEO. Tijdens een gratis strategiegesprek bespreken we wat het beste bij jouw bedrijf past.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook klanten trekken uit de rest van het Waterland?</h3>
              <p className="text-gray-600">
                Absoluut! Naast Kwadijk kunnen we je ook zichtbaar maken in Edam, Volendam, Warder en andere plaatsen in het Waterland. We passen de SEO-strategie aan op basis van waar jouw ideale klanten vandaan komen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER KWADIJK SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Kwadijk</span> & het Waterland
            </h2>
            <p className="text-xl text-gray-600">
              Kwadijk is een levendig dorp met veel ondernemers die lokaal succesvol willen zijn.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor lokale bedrijven</h3>
              <p className="text-gray-600 mb-4">
                Kwadijk ligt strategisch in het Waterland, tussen Edam en Volendam. Dit actieve dorp heeft een sterke lokale gemeenschap met veel ondernemers die hun klanten persoonlijk kennen.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Kwadijk help ik bedrijven om lokaal gevonden te worden, meer klanten te trekken en te groeien in dit mooie deel van Noord-Holland.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Actieve dorpsgemeenschap</li>
                <li>✓ Toerisme door ligging in Waterland</li>
                <li>✓ Veel lokale ondernemers</li>
                <li>✓ Strategische ligging nabij Edam</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Kwadijk:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Cafés & restaurants</div>
                <div>• Kappers & schoonheid</div>
                <div>• Bakkerijen</div>
                <div>• Huisartsen</div>
                <div>• Fysiotherapie</div>
                <div>• Aannemers</div>
                <div>• Installatiebedrijven</div>
                <div>• Fietswinkels</div>
                <div>• Dierenkliniek</div>
                <div>• Tandartsen</div>
                <div>• B&B's</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Kwadijk</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Kwadijk – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Kwadijk & het Waterland</h3>
            <p className="text-gray-600">
              Kwadijk • Edam • Volendam • Warder • Monnickendam • Purmerend • Broek in Waterland • Oosthuizen
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}