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

export default function MarketingStichtseVecht() {
  // Lokale Stichtse Vecht reviews
  const dutchReviews = [
    { name: 'Restaurant De Vechtstreek Maarssen', rating: 5, text: 'Dankzij lokale SEO krijgen we gasten uit heel Stichtse Vecht. Reserveringen uit Breukelen en Loenen stijgen!' },
    { name: 'Tandartspraktijk Smile Breukelen', rating: 5, text: 'Top positie voor "tandarts Breukelen" en "tandarts Stichtse Vecht". Patiënten uit alle kernen vinden ons.' },
    { name: 'Autogarage Vecht Motors Maarssen', rating: 4.5, text: 'Google Ads campagne werkt perfect. Klanten uit Breukelen, Loenen en heel Stichtse Vecht.' },
    { name: 'Kapsalon Beauty Breukelen', rating: 5, text: 'Lokale zichtbaarheid heeft ons klantenbestand enorm uitgebreid. Online boekingen uit alle kernen!' },
    { name: 'Fysiotherapie Actief Maarssen', rating: 5, text: 'Onze praktijk zit vol dankzij lokale SEO. Patiënten uit heel Stichtse Vecht boeken online.' },
    { name: 'Installatiebedrijf Vecht Service', rating: 4.5, text: 'Meer opdrachten dan ooit uit alle kernen van Stichtse Vecht dankzij slimme marketing.' },
  ]
  const dutchMoreReviews = [
    { name: 'Watersportbedrijf Vecht Yachting', rating: 5, text: 'Perfect seizoensmarketing voor watersport. Klanten uit Amsterdam en Utrecht komen naar Stichtse Vecht.' },
    { name: 'Schoonheidssalon Pure Maarssen', rating: 4.5, text: 'Online agenda staat vol dankzij lokale SEO. Klanten uit Breukelen, Loenen en Utrecht komen.' },
    { name: 'Accountantskantoor Finance Breukelen', rating: 5, text: 'Uitstekende zakelijke marketing. ZZPers en bedrijven uit heel Stichtse Vecht kiezen voor ons.' },
    { name: 'Dierenartspraktijk Animal Care Loenen', rating: 5, text: 'Google My Business werkt fantastisch. Huisdiereigenaren uit alle kernen vinden ons snel.' },
    { name: 'Tuincentrum Groen Stichtse Vecht', rating: 4.5, text: 'Seizoensgebonden campagnes brengen klanten uit Utrecht, Amsterdam en heel de Vechtstreek.' },
    { name: 'B&B Aan de Vecht Loenen', rating: 5, text: 'Toeristen uit heel Nederland boeken nu online. Lokale SEO gecombineerd met toerisme werkt perfect.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Stichtse Vecht: Groei in de pittoreske Vechtstreek</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">64.000 inwoners + watersport & toerisme</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Stichtse Vecht: waar historische kernen en moderne leefgemeenschappen samenvloeien.</strong><br />
            Van het bruisende Maarssen tot het charmante Breukelen en pittoreske Loenen - Stichtse Vecht biedt unieke kansen. Als <b>SEO specialist Stichtse Vecht</b> help ik bedrijven groeien tussen de watersport, groene omgeving en strategische ligging tussen Amsterdam en Utrecht.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO alle kernen: Maarssen, Breukelen, Loenen</li>
            <li>✓ Google Ads: bereik 64K inwoners + toeristen</li>
            <li>✓ Specialisatie in watersport, toerisme en lokale diensten</li>
            <li>✓ <b>SEO Stichtse Vecht</b> met bewezen groeiresultaten</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Bekijk Vechtstreek cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in hele Stichtse Vecht & Vechtstreek</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Stichtse Vecht - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Stichtse Vecht" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Stichtse Vecht met gerichte marketing"
        subtitle="Van Maarssen tot Loenen: alle kernen, één sterke strategie"
        features={[
          {
            badge: "SEO Stichtse Vecht",
            title: "SEO Specialist Stichtse Vecht",
            description: "Domineer de lokale zoekresultaten in alle kernen van Stichtse Vecht. Van Maarssen centrum tot Loenen aan de Vecht - ik zorg dat je bedrijf wordt gevonden door klanten uit de hele gemeente.",
            visualTitle: "Alle kernen",
            visualSubtitle: "64K bereik",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Stichtse Vecht",
            description: "Bereik 64.000 inwoners plus duizenden toeristen met slimme advertenties. Focus op één kern, alle kernen of heel de Vechtstreek - altijd maximale return on investment.",
            visualTitle: "64K+ toeristen",
            visualSubtitle: "Vechtstreek",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Marketing",
            title: "Marketing Bureau Stichtse Vecht",
            description: "Complete online marketing voor Vechtstreek bedrijven. Van watersport tot lokale dienstverlening - websites en campagnes die perfect aansluiten bij jouw doelgroep.",
            visualTitle: "Vecht sterk",
            visualSubtitle: "Toerisme plus",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Stichtse Vecht groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Stichtse Vecht</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Stichtse Vecht combineert lokale charme met toeristische aantrekkingskracht tussen Amsterdam en Utrecht.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⛵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Watersport hub</h3>
              <p className="text-gray-600">
                De Vecht is een belangrijke watersport-as. Bedrijven in watersport, jachtbouw, verhuur en marine services vinden hier een uitstekende doelgroep uit heel Nederland.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏞️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Toeristische magneet</h3>
              <p className="text-gray-600">
                Historische kernen en prachtige natuur trekken veel toeristen. Horeca, B&B's, attracties en recreatiebedrijven profiteren van lokale SEO gecombineerd met toerisme-marketing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sterke kernen</h3>
              <p className="text-gray-600">
                Elk kern (Maarssen, Breukelen, Loenen) heeft eigen karakter en klantenkring. Met lokale SEO bereik je alle kernen effectief en bouw je merk-loyaliteit op.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Stichtse Vecht</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van watersport tot toerisme en lokale dienstverlening - ik help je bedrijf groeien in alle kernen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Stichtse Vecht */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Stichtse Vecht</h3>
              <p className="text-gray-600 mb-6">
                Domineer de zoekresultaten in alle kernen van Stichtse Vecht. Van "bedrijf Maarssen" tot "watersport Breukelen" - topposities in alle kernen.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Multi-kern SEO strategie</li>
                <li>✓ Watersport & toerisme SEO</li>
                <li>✓ Google Bedrijfsprofiel alle locaties</li>
                <li>✓ Seizoensgebonden optimalisatie</li>
                <li>✓ Lokale citaties & partnerships</li>
              </ul>
            </div>
            {/* Google Ads Stichtse Vecht */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Vechtstreek ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Stichtse Vecht</h3>
              <p className="text-gray-600 mb-6">
                Bereik klanten in alle kernen plus toeristen uit Amsterdam en Utrecht met slimme advertenties. Van watersport tot lokale diensten.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Multi-kern geo-targeting</li>
                <li>✓ Seizoensgebonden toerisme ads</li>
                <li>✓ Watersport & recreatie campagnes</li>
                <li>✓ Lokale diensten advertenties</li>
                <li>✓ Transparante ROI alle kernen</li>
              </ul>
            </div>
            {/* Website & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites voor Vechtstreek bedrijven. Van watersport portals tot lokale dienstverleners - altijd gericht op conversie.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Responsive design alle apparaten</li>
                <li>✓ Boekingssystemen watersport</li>
                <li>✓ Toeristische websites & SEO</li>
                <li>✓ Multi-locatie integraties</li>
                <li>✓ Seizoensgebonden content management</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Stichtse Vecht</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Stichtse Vecht.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Moet ik kiezen tussen Maarssen, Breukelen of Loenen voor mijn SEO?</h3>
              <p className="text-gray-600">
                Helemaal niet! We optimaliseren voor alle kernen tegelijk. We creëren content voor "bedrijf Maarssen", "dienst Breukelen" én "watersport Loenen" zoektermen. Hierdoor bereik je klanten uit heel Stichtse Vecht en vergroot je je markt aanzienlijk.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt SEO voor watersportbedrijven in Stichtse Vecht?</h3>
              <p className="text-gray-600">
                Absoluut! De Vecht is een belangrijke vaarroute en Stichtse Vecht trekt veel watersporters. We optimaliseren voor zoektermen zoals "jachthaven Stichtse Vecht", "bootje huren Vecht" en "watersport Breukelen". Seizoensgebonden SEO en Google Ads werken hier perfect.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Stichtse Vecht zie je binnen 1-3 maanden eerste verbeteringen per kern. Google Ads leveren direct resultaat op. Voor optimale multi-kern SEO resultaten duurt het 6-12 maanden om in alle kernen dominant te worden.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is toerisme marketing geschikt voor mijn lokale bedrijf?</h3>
              <p className="text-gray-600">
                Zeker! Stichtse Vecht trekt veel toeristen door historische kernen en de Vecht. Hotels, restaurants, attracties, verhuur en gidsdiensten profiteren enorm van toerisme SEO gecombineerd met lokale optimalisatie. We richten ons op beide doelgroepen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor alle kernen van Stichtse Vecht?</h3>
              <p className="text-gray-600">
                Multi-kern SEO voor Stichtse Vecht start vanaf €750 per maand. Voor watersport/toerisme bedrijven met seizoenspieken is dit €900-1400 per maand. Je bereikt hiermee alle kernen plus toeristen uit Amsterdam/Utrecht - zeer rendabel.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kunnen we ook klanten uit Amsterdam en Utrecht bereiken?</h3>
              <p className="text-gray-600">
                Absoluut! Door de centrale ligging tussen Amsterdam en Utrecht kun je met slimme SEO klanten uit beide steden bereiken. Perfect voor watersport, toerisme, horeca en diensten die bezoekers uit de Randstad aantrekken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER STICHTSE VECHT SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Stichtse Vecht</span> & Vechtstreek
            </h2>
            <p className="text-xl text-gray-600">
              Stichtse Vecht: waar historische charme en watersport elkaar versterken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor diverse ondernemers</h3>
              <p className="text-gray-600 mb-4">
                Stichtse Vecht combineert historische kernen (Breukelen, Maarssen, Loenen) met moderne woonkwaliteit en toeristische aantrekkingskracht. De Vecht als centrale waterweg trekt watersporters uit heel Nederland, terwijl de lokale gemeenschappen zorgen voor sterke klantenloyaliteit.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Stichtse Vecht help ik bedrijven profiteren van alle kernen, watersport mogelijkheden, toeristische stromen en de strategische ligging tussen Amsterdam en Utrecht voor maximale bereik en groei.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 64.000 inwoners verdeeld over sterke kernen</li>
                <li>✓ Watersport & toerisme hub</li>
                <li>✓ Tussen Amsterdam & Utrecht</li>
                <li>✓ Historische aantrekkingskracht</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Stichtse Vecht:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Watersport & jachtbouw</div>
                <div>• Hotels & B&B's</div>
                <div>• Horeca & restaurants</div>
                <div>• Toeristische attracties</div>
                <div>• Bootverhuur & charters</div>
                <div>• Detailhandel</div>
                <div>• Zorg & welzijn</div>
                <div>• Bouw & installatie</div>
                <div>• Zakelijke dienstverlening</div>
                <div>• Marine services</div>
                <div>• Recreatiebedrijven</div>
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
            Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Stichtse Vecht</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in alle kernen van de Vechtstreek - altijd eerlijk advies.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Stichtse Vecht - Alle kernen & Vechtstreek</h3>
            <p className="text-gray-600">
              Maarssen • Breukelen • Loenen • + omliggende gemeenten: Utrecht • Amsterdam • Nieuwegein • Woerden
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}