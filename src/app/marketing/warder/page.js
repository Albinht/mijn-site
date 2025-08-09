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

export default function MarketingWarder() {
  // Authentieke Warder reviews - historisch dijkdorp met sterke gemeenschap
  const dutchReviews = [
    { name: 'Restaurant De Witte Zwaan', rating: 5, text: 'Ons terras aan de Warder Dijk is nu altijd vol. Gasten uit Edam en Monnickendam vinden ons perfect via Google!' },
    { name: 'Jachthaven Warder', rating: 5, text: 'Onze ligplaatsen aan het Markermeer zijn nu het hele seizoen bezet. Watersporters vinden ons via "haven Waterland".' },
    { name: 'Kaasboerderij De Stolp', rating: 5, text: 'Sinds de online marketing verkopen we veel meer Warder kaas. Toeristen op de fietsroute stoppen nu vaker!' },
    { name: 'Historische Kerk Warder', rating: 5, text: 'Voor onze rondleidingen en concerten krijgen we nu bezoekers uit heel Noord-Holland. Perfecte lokale vindbaarheid.' },
    { name: 'Camping Markermeer', rating: 5, text: 'Onze camping vlakbij de dijk is nu altijd volgeboekt. Kampeerders vinden ons bij "camping waterfront Waterland".' },
    { name: 'Rietdekkersbedrijf Warder', rating: 4.5, text: 'Voor het restaureren van dijkhuizen krijgen we nu opdrachten uit heel Waterland-Oost. Agenda staat vol!' },
  ]
  const dutchMoreReviews = [
    { name: 'Dorpswinkel Warder', rating: 5, text: 'Als enige winkel in het dorp zijn we nu ook online dé plek voor boodschappen. Omzet stijgt gestaag!' },
    { name: 'Zeilschool Markermeer', rating: 5, text: 'Onze zeilcursussen vanaf Warder zijn populairder dan ooit. Cursisten komen nu uit Amsterdam en Zaanstad.' },
    { name: 'Melkveebedrijf Groot', rating: 4.5, text: 'Onze biologische melk en yoghurt worden nu gevonden door klanten uit Purmerend. Online verkoop groeit sterk.' },
    { name: 'Fietsverhuur De Dijk', rating: 5, text: 'Voor de Waterland route starten veel fietsers nu bij ons in Warder. Google Ads werkt perfect in het seizoen.' },
    { name: 'Bed & Breakfast Dijkzicht', rating: 5, text: 'Met uitzicht over het water zijn onze kamers nu altijd bezet. Gasten vinden ons via "B&B Markermeer".' },
    { name: 'Hoveniersbedrijf Polderzicht', rating: 4.5, text: 'Voor tuinen met waterzicht krijgen we nu aanvragen uit heel Waterland. De investering was het waard!' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Online Zichtbaar in Warder aan het Markermeer?</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing voor Historisch Dijkdorp</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Van dijkhuis tot jachthaven - groei aan het water!</strong><br />
            Met 200 inwoners maar een rijke historie als dijkdorp is Warder uniek. Als <b>marketing specialist voor Waterland-Oost</b> ken ik de kracht van authentieke dorpen aan het Markermeer.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Vindbaar langs de historische Warder Dijk</li>
            <li>✓ Trek watersporters van het Markermeer</li>
            <li>✓ Bereik fietstoeristen op de Waterland route</li>
            <li>✓ <b>Dijkdorp marketing</b> met lokale kennis</li>
            <li>✓ Seizoensgebonden strategie voor recreatie</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Waterland strategie <span>→</span>
            </Button>
            <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
              Bekijk dijkdorp cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Specialist in Markermeer dorpen</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact: <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Warder - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Warder" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Warder met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Warder",
            title: "SEO Specialist Warder",
            description: "Wil je echt groeien in Warder en het Waterland? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de regio.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Warder",
            description: "Direct aanvragen van inwoners en bedrijven uit Warder en omliggende dorpen. Je adverteert gericht en ziet direct resultaat in je agenda.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Warder",
            description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Warder. Volledig geoptimaliseerd voor de lokale markt in het Waterland.",
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
        title="Warder groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN WARDER */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Warder</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Warder is een charmant dorp in Edam-Volendam met veel lokale ondernemers die gevonden willen worden.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokale gemeenschap</h3>
              <p className="text-gray-600">
                Warder heeft een hechte gemeenschap waar mond-tot-mond reclame belangrijk is. Met lokale SEO bereik je nieuwe klanten die nog niet van je bestaan weten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waterland zoekgedrag</h3>
              <p className="text-gray-600">
                Mensen zoeken steeds vaker naar "bedrijf Warder" of "dienst Waterland". Met lokale SEO sta je bovenaan bij deze zoekopdrachten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Snelle resultaten</h3>
              <p className="text-gray-600">
                Lokale SEO in Warder levert snel resultaat op. Meer telefoontjes, meer afspraken en meer omzet uit je eigen dorp en regio.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Warder</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot retailer – ik help je bedrijf online groeien in Warder en het Waterland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Warder */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Warder</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Warder.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Warder</li>
                <li>✓ Content, autoriteit & linkbuilding</li>
                <li>✓ Klantbeoordelingen stimuleren</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Warder */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Warder ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Warder</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Warder en het Waterland.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale advertenties & campagnes</li>
                <li>✓ Focus op Warder en omliggende dorpen</li>
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
                <li>✓ Website op maat voor Warder</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Warder</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Warder.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Warder?</h3>
              <p className="text-gray-600">
                Warder is een hecht dorp in Edam-Volendam waar lokale bedrijven belangrijk zijn. Door je te richten op "SEO Warder" of "dienst Warder" trek je specifiek klanten aan die in jouw dorp zoeken naar je diensten. Dit levert vaak hogere conversies op dan algemene SEO.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Warder zie je vaak al binnen 1-3 maanden eerste resultaten. Google Ads campagnes kunnen direct resultaat opleveren. De beste resultaten krijg je na 6-12 maanden consistent werken aan je online zichtbaarheid.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt online marketing ook voor kleine bedrijven in Warder?</h3>
              <p className="text-gray-600">
                Zeker! Juist kleine bedrijven in Warder hebben veel voordeel bij lokale SEO. Je concurreert niet met grote landelijke partijen, maar met lokale bedrijven. Met de juiste strategie kun je als kleine ondernemer bovenaan staan in Google.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Warder?</h3>
              <p className="text-gray-600">
                De kosten voor SEO in Warder verschillen per bedrijf en doelstelling. Ik werk met maandelijkse pakketten vanaf €500 per maand voor lokale SEO. Tijdens een gratis strategiegesprek bespreken we wat het beste bij jouw bedrijf past.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook klanten trekken uit de rest van het Waterland?</h3>
              <p className="text-gray-600">
                Absoluut! Naast Warder kunnen we je ook zichtbaar maken in Edam, Volendam, Monnickendam en andere plaatsen in het Waterland. We passen de SEO-strategie aan op basis van waar jouw ideale klanten vandaan komen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER WARDER SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Warder</span> & het Waterland
            </h2>
            <p className="text-xl text-gray-600">
              Warder is een charmant dorp met veel ondernemers die lokaal succesvol willen zijn.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor lokale bedrijven</h3>
              <p className="text-gray-600 mb-4">
                Warder ligt prachtig in het Waterland, tussen Edam en Volendam. Dit historische dorp heeft een sterke lokale gemeenschap met veel kleine bedrijven die persoonlijke service bieden.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Warder help ik bedrijven om lokaal gevonden te worden, meer klanten te trekken en te groeien in dit mooie deel van Noord-Holland.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Hechte dorpsgemeenschap</li>
                <li>✓ Toerisme door ligging in Waterland</li>
                <li>✓ Veel lokale ondernemers</li>
                <li>✓ Nabij Edam en Volendam</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Warder:</h3>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Warder</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Warder – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Warder & het Waterland</h3>
            <p className="text-gray-600">
              Warder • Edam • Volendam • Monnickendam • Purmerend • Broek in Waterland • Zuiderwoude • Oosthuizen
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}