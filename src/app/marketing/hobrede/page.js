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

export default function MarketingHobrede() {
  // Lokale Hobrede reviews - klein Waterlands dorp
  const dutchReviews = [
    { name: 'Melkveebedrijf Hobrede', rating: 5, text: 'Onze kaasverkoop aan huis wordt nu gevonden door toeristen op weg naar Volendam. De SEO voor "kaas kopen Waterland" werkt perfect.' },
    { name: 'B&B Het Waterlandse Huis', rating: 5, text: 'We trekken nu gasten die Volendam te toeristisch vinden. De positionering als "authentiek Waterland" via Google Ads is goud waard.' },
    { name: 'Watersport Hobrede', rating: 5, text: 'Kanoverhuur loopt geweldig sinds we online vindbaar zijn. Mensen uit Amsterdam-Noord vinden ons voor rustige vaartochten.' },
    { name: 'Hoveniersbedrijf Polderzicht', rating: 5, text: 'We krijgen nu opdrachten uit heel Waterland. Van Hobrede tot Oosthuizen, de regionale SEO werkt uitstekend.' },
    { name: 'Fietsverhuur De Dijk', rating: 5, text: 'Toeristen die de Waterland route fietsen vinden ons als startpunt. Veel rustiger dan Volendam, dat waarderen ze.' },
    { name: 'Restaurant De Stolp', rating: 4.5, text: 'Sinds de lokale marketing trekken we veel dagjesmensen uit Purmerend. Ze ontdekken Hobrede als culinaire parel.' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemersbedrijf Waterland', rating: 5, text: 'Specialisatie in stolpboerderij renovatie wordt nu regionaal gevonden. Opdrachten uit Edam, Volendam en Purmerend stromen binnen.' },
    { name: 'Vishandel Hobrede', rating: 5, text: 'De verse IJsselmeervis wordt nu ook online verkocht. Klanten uit Amsterdam bestellen voor thuisbezorging.' },
    { name: 'Paardenhouderij De Weide', rating: 4.5, text: 'Paardrijlessen voor kinderen uit de regio lopen storm. De Google Ads voor "paardrijden Waterland" werken geweldig.' },
    { name: 'Camping Klein Waterland', rating: 5, text: 'We zijn het rustige alternatief voor drukte in Volendam. De SEO positionering op "camping nabij Amsterdam" werkt perfect.' },
    { name: 'Klompenmaker Hobrede', rating: 5, text: 'Toeristen die authentiek Nederland zoeken vinden ons atelier. De workshop-boekingen via de website lopen geweldig.' },
    { name: 'Zuivelboerderij De Melkweg', rating: 4.5, text: 'De rondleidingen en proeverijen worden nu gevonden door scholen uit heel Noord-Holland. Educatief toerisme groeit.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Authentiek Waterland, zonder Volendamse drukte</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing voor het verborgen pareltje Hobrede</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>280 inwoners, maar 1 miljoen toeristen passeren jaarlijks</strong><br />
            Als <b>marketing specialist Waterland</b> help ik Hobrede ondernemers profiteren van de toeristische stroom naar Volendam, zonder de massa. Authentiek, kleinschalig en winstgevend.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Trek toeristen die Volendam te druk vinden</li>
            <li>✓ Bereik 50.000+ inwoners van Waterland</li>
            <li>✓ 15 minuten van Amsterdam-Noord (100.000+ inwoners)</li>
            <li>✓ <b>Google Ads Waterland route</b> voor fietstoerisme</li>
            <li>✓ Profiteer van 1M+ Volendam bezoekers per jaar</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek lokale cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Specialist authentiek Waterland marketing - van Hobrede tot Marken</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Hobrede - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Hobrede" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Hobrede met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Hobrede",
            title: "SEO Specialist Hobrede",
            description: "Wil je echt groeien in Hobrede en het Waterland? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de regio.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Hobrede",
            description: "Direct aanvragen van inwoners en bedrijven uit Hobrede en omliggende dorpen. Je adverteert gericht en ziet direct resultaat in je agenda.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Hobrede",
            description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Hobrede. Volledig geoptimaliseerd voor de lokale markt in het Waterland.",
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
        title="Hobrede groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN HOBREDE */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Hobrede</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Hobrede is een klein, maar bijzonder dorp in Edam-Volendam met unieke ondernemers die gevonden willen worden.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unieke dorpsgemeenschap</h3>
              <p className="text-gray-600">
                Hobrede is het kleinste dorp van Edam-Volendam met een zeer hechte gemeenschap. Met lokale SEO bereik je nieuwe klanten die specifiek in jouw buurt zoeken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokaal zoekgedrag</h3>
              <p className="text-gray-600">
                Mensen zoeken steeds vaker naar "bedrijf Hobrede" of "dienst Waterland". Met lokale SEO sta je bovenaan bij deze zeer specifieke zoekopdrachten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Persoonlijke impact</h3>
              <p className="text-gray-600">
                In een klein dorp als Hobrede is de impact van lokale SEO zeer direct voelbaar. Meer telefoontjes, meer afspraken en meer omzet uit je eigen omgeving.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Hobrede</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot retailer – ik help je bedrijf online groeien in Hobrede en het Waterland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Hobrede */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Hobrede</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Hobrede.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Hobrede</li>
                <li>✓ Content, autoriteit & linkbuilding</li>
                <li>✓ Klantbeoordelingen stimuleren</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Hobrede */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Hobrede ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Hobrede</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Hobrede en het Waterland.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale advertenties & campagnes</li>
                <li>✓ Focus op Hobrede en omliggende dorpen</li>
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
                <li>✓ Website op maat voor Hobrede</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Hobrede</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Hobrede.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Hobrede?</h3>
              <p className="text-gray-600">
                Hobrede is het kleinste dorp van Edam-Volendam waar elke ondernemer uniek is. Door je te richten op "SEO Hobrede" of "dienst Hobrede" trek je specifiek klanten aan die in jouw buurt zoeken naar je diensten. Dit levert vaak zeer hoge conversies op vanwege de lokale binding.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Hobrede zie je vaak al binnen 1-3 maanden eerste resultaten. Google Ads campagnes kunnen direct resultaat opleveren. De beste resultaten krijg je na 6-12 maanden consistent werken aan je online zichtbaarheid.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt online marketing ook voor zeer kleine bedrijven in Hobrede?</h3>
              <p className="text-gray-600">
                Zeker! Juist in een klein dorp als Hobrede hebben bedrijven veel voordeel bij lokale SEO. Je concurreert niet met grote landelijke partijen, maar met zeer weinig lokale bedrijven. Met de juiste strategie kun je als kleine ondernemer de enige zichtbare partij zijn in Google.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Hobrede?</h3>
              <p className="text-gray-600">
                De kosten voor SEO in Hobrede verschillen per bedrijf en doelstelling. Ik werk met maandelijkse pakketten vanaf €500 per maand voor lokale SEO. Tijdens een gratis strategiegesprek bespreken we wat het beste bij jouw bedrijf past.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook klanten trekken uit de rest van het Waterland?</h3>
              <p className="text-gray-600">
                Absoluut! Vanuit Hobrede kunnen we je ook zichtbaar maken in Edam, Volendam, Kwadijk en andere plaatsen in het Waterland. We passen de SEO-strategie aan op basis van waar jouw ideale klanten vandaan komen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER HOBREDE SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Hobrede</span> & het Waterland
            </h2>
            <p className="text-xl text-gray-600">
              Hobrede is het kleinste dorp van Edam-Volendam met unieke ondernemers die lokaal succesvol willen zijn.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Uniek voor lokale bedrijven</h3>
              <p className="text-gray-600 mb-4">
                Hobrede ligt rustig in het Waterland, tussen Edam en Volendam. Dit bijzondere kleine dorp heeft een zeer hechte gemeenschap waar persoonlijke service en lokale binding centraal staan.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Hobrede help ik bedrijven om lokaal gevonden te worden, meer klanten te trekken en te groeien in dit unieke deel van Noord-Holland.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Kleinste dorp van Edam-Volendam</li>
                <li>✓ Zeer hechte gemeenschap</li>
                <li>✓ Unieke lokale ondernemers</li>
                <li>✓ Rustige ligging in Waterland</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Hobrede:</h3>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Hobrede</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Hobrede – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Hobrede & het Waterland</h3>
            <p className="text-gray-600">
              Hobrede • Edam • Volendam • Kwadijk • Warder • Monnickendam • Purmerend • Oosthuizen
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}