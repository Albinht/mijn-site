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

export default function MarketingKatwijk() {
  // Lokale Katwijk reviews
  const dutchReviews = [
    { name: 'Restaurant de Zuidpier Katwijk', rating: 5, text: 'Zeevruchten en visspecialiteiten trekken nu gasten van heel de kust naar Katwijk. Authentieke visserstraditie loont!' },
    { name: 'Strandpaviljoen Katwijk', rating: 5, text: 'Zomergangers uit Den Haag, Leiden en regio boeken nu online tafels. Het Katwijkse strand is populairder dan ooit!' },
    { name: 'Tandartspraktijk Katwijk Dorp', rating: 4.5, text: 'Patiënten uit Katwijk en omliggende dorpen vinden ons perfect. De lokale gemeenschap vertrouwt op onze zorg.' },
    { name: 'Kapsalon Boulevard Katwijk', rating: 5, text: 'Toeristen én locals komen voor kwaliteit knippen. Katwijk aan Zee kent ons als dé salon!' },
    { name: 'Bouwbedrijf Kust Katwijk', rating: 5, text: 'Renovaties in Katwijk en kustdorpen stromen binnen. Lokale expertise in duinbebouwing wordt gewaardeerd!' },
    { name: 'Fysiotherapie SportKatwijk', rating: 5, text: 'Sporters van hockey tot surfen vinden ons makkelijk. Katwijk sporters kiezen voor lokale kwaliteit!' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor Katwijk', rating: 5, text: 'MKB uit vissersdorp en kustgebied kiest ons voor administratie. Lokale ondernemers waarderen persoonlijke service!' },
    { name: 'IT-bedrijf Katwijk Tech', rating: 4.5, text: 'Bedrijven uit Katwijk en omgeving komen voor IT-ondersteuning. Van vishandel tot horeca - we helpen iedereen digitaal!' },
    { name: 'Interieurzaak Zee & Duin', rating: 5, text: 'Kustbewoners uit Katwijk en omgeving kiezen voor maritiem interieur. Showroom aan boulevard trekt veel bezoekers!' },
    { name: 'Rijschool Katwijk Kust', rating: 5, text: 'Jongeren uit Katwijk en kustdorpen leren hier rijden. Vertrouwd en lokaal - precies wat ouders willen!' },
    { name: 'Advocatenkantoor Katwijk', rating: 4.5, text: 'Particulieren en bedrijven uit vissersgemeenschap vinden ons voor juridisch advies. Lokale expertise loont!' },
    { name: 'Dierenkliniek Katwijk', rating: 5, text: 'Huisdiereigenaren uit kustgebied maken online afspraken. Van Katwijk tot Noordwijk - iedereen vindt ons!' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Authentiek Katwijk: visserstraditie meets digitale kansen</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">65.000 inwoners + kustparel aan zee</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Katwijk: waar eeuwenoude visserstraditie digitale groei omarmt.</strong><br />
            Met authentieke visserscultuur, populair strand, boulevard en sterke lokale gemeenschap biedt Katwijk unieke marktkansen. Als <b>SEO specialist Katwijk</b> help ik je profiteren van de toeristische stroom, lokale trots en de bijzondere kustcultuur.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Katwijk: zichtbaar aan zee en in dorp</li>
            <li>✓ Google Ads: doelgroep toeristen en authentieke locals</li>
            <li>✓ Speciaal voor bedrijven in Katwijk aan Zee en Dorp</li>
            <li>✓ <b>SEO Katwijk</b> met focus op visserstraditie en kust</li>
            <li>✓ Websites die strandgangers en locals converteren</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek kust cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Katwijk aan Zee & Katwijk Dorp</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Katwijk - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Katwijk" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Katwijk met visser marketing"
        subtitle="Van Zuidpier tot Dorp - overal vindbaar"
        features={[
          {
            badge: "SEO Katwijk",
            title: "SEO Specialist Katwijk",
            description: "Wil je groeien in het authentieke Katwijk? Ik zorg dat je wordt gevonden door toeristen die het echte Katwijk zoeken én locals die trouw zijn aan kwaliteit in hun eigen vissersdorp.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Zee tot dorp",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Katwijk",
            description: "Direct bereik van strandgangers, toeristen én trouwe Katwijkers. Perfect targeting voor deze unieke mix van authentic local en populaire kustbestemming.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Kust tot kern",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Katwijk",
            description: "Authentieke websites voor Katwijk bedrijven. Geoptimaliseerd voor de unieke cultuur: van visserstraditie tot moderne kustbeleving.",
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
        title="Katwijk groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN KATWIJK */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Katwijk</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Katwijk combineert authentieke visserscultuur met populair toerisme - unieke positie aan de Nederlandse kust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visserstraditie</h3>
              <p className="text-gray-600">
                Katwijk heeft een authentieke visserscultuur die toeristen trekt. Deze unieke identiteit geeft lokale bedrijven een verhaal en onderscheidend karakter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Populaire kust</h3>
              <p className="text-gray-600">
                Breed strand, boulevard en Zuidpier trekken bezoekers uit heel de regio. Deze toeristische stroom biedt structurele kansen voor lokale ondernemers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sterke gemeenschap</h3>
              <p className="text-gray-600">
                Katwijkers zijn trouw aan lokale bedrijven. Deze gemeenschapszin plus toerisme geeft bedrijven een stabiele dubbelmarkt.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Katwijk</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale vishandel tot strandpaviljoen – ik help je bedrijf online groeien in authentiek Katwijk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Katwijk */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Katwijk</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij bovenaan bij zoekopdrachten naar Katwijkse bedrijven. Bereik zowel toeristen als trouwe locals effectief.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek visser + kust</li>
                <li>✓ Authentieke content strategie</li>
                <li>✓ Reviews van locals stimuleren</li>
                <li>✓ Seizoen optimalisatie toerisme</li>
              </ul>
            </div>
            {/* Google Ads Katwijk */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Katwijk ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Katwijk</h3>
              <p className="text-gray-600 mb-6">
                Bereik direct strandgangers, toeristen én locals met gerichte Google Ads campagnes voor de unieke Katwijkse markt.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Toerisme en seizoen campagnes</li>
                <li>✓ Lokale community targeting</li>
                <li>✓ Strand en boulevard focus</li>
                <li>✓ Visser en cultuur keywords</li>
                <li>✓ Dubbelmarkt optimalisatie</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Authentieke websites die het echte Katwijk uitstralen. Van visserstraditie tot moderne kustbeleving - elk verhaal verteld.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Authentieke Katwijk storytelling</li>
                <li>✓ Dual targeting locals + toeristen</li>
                <li>✓ Seizoen geoptimaliseerd design</li>
                <li>✓ Mobile-first voor strandgangers</li>
                <li>✓ Booking integratie horeca</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Katwijk</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in vissersdorp Katwijk.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Katwijk?</h3>
              <p className="text-gray-600">
                Katwijk heeft 65.000 inwoners plus vele toeristen die naar authentiek Nederland zoeken. Door je te richten op 'SEO Katwijk' trek je beide doelgroepen aan die waarderen wat het vissersdorp uniek maakt.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke bedrijven doen het goed in Katwijk?</h3>
              <p className="text-gray-600">
                Horeca (vooral vis en zeevruchten), strandpaviljoens, accommodaties, retail met lokaal karakter, wellness en sport. Ook lokale dienstverlening profiteert van de sterke gemeenschapszin.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe zit het met seizoensinvloeden?</h3>
              <p className="text-gray-600">
                Katwijk heeft een duidelijk toeristenseizoen (april-oktober), maar de lokale markt blijft jaar rond actief. We balanceren strategieën om beide periodes optimaal te benutten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Katwijk?</h3>
              <p className="text-gray-600">
                Lokale SEO pakketten starten vanaf €700 per maand. Door Katwijk's dubbelmarkt (locals + toeristen) zie je vaak sneller resultaat dan in zuivere toeristische plaatsen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit de hele kuststreek?</h3>
              <p className="text-gray-600">
                Absoluut! Katwijk ligt strategisch tussen Den Haag en Leiden, met Noordwijk als buur. We kunnen je bereik uitbreiden naar de hele Zuid-Hollandse kust.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe belangrijk is de visserstraditie voor marketing?</h3>
              <p className="text-gray-600">
                Zeer belangrijk! Katwijk's authentieke karakter onderscheidt het van andere kustplaatsen. Deze unieke identiteit is een krachtig marketinginstrument dat toeristen en locals aanspreekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER KATWIJK SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Katwijk</span> & kustgebied
            </h2>
            <p className="text-xl text-gray-600">
              Katwijk combineert eeuwenoude visserstraditie met moderne kusttoerisme - authentiek Nederland aan zee.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vissersdorp met moderne ambities</h3>
              <p className="text-gray-600 mb-4">
                Katwijk aan Zee en Katwijk Dorp vormen samen een unieke kustgemeenschap. De authentieke visserscultuur, zichtbaar in de Zuidpier en visafslag, trekt bezoekers die het 'echte' Nederland zoeken.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Katwijk help ik bedrijven om te profiteren van deze unieke positie: authentiek genoeg voor locals, interessant genoeg voor toeristen, en toegankelijk genoeg voor beide markten.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 65.000 inwoners met sterke lokale trots</li>
                <li>✓ Eeuwenoude visserstraditie</li>
                <li>✓ Populair breed strand</li>
                <li>✓ Authentieke cultuur en gemeenschap</li>
                <li>✓ Toegankelijk vanuit randstad</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Katwijk:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Vishandel & zeevruchten</div>
                <div>• Horeca & restaurants</div>
                <div>• Strandpaviljoens</div>
                <div>• Hotels & B&B's</div>
                <div>• Retail & souvenirs</div>
                <div>• Wellness & beauty</div>
                <div>• Sport & recreatie</div>
                <div>• Tandartsen & zorg</div>
                <div>• Bouw & onderhoud</div>
                <div>• Advocaten & notarissen</div>
                <div>• Accountants & administratie</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Katwijk</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in authentiek Katwijk – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Katwijk - Online Marketing Kust & Omgeving</h3>
            <p className="text-gray-600">
              Katwijk aan Zee • Katwijk Dorp • Noordwijk • Rijnsburg • Oegstgeest • Wassenaar • Kustgebied
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}