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

export default function MarketingAssen() {
  // Lokale Assen reviews
  const dutchReviews = [
    { name: 'Hotel TT Circuit Assen', rating: 5, text: 'Dankzij Albin zijn we het best vindbare hotel tijdens TT week. Internationale bezoekers boeken nu direct online!' },
    { name: 'Restaurant Het Wapen van Assen', rating: 5, text: 'Onze zaak wordt perfect gevonden door locals en toeristen. Vooral rond TT-tijd zitten we helemaal vol!' },
    { name: 'Garage Motorsport Assen', rating: 5, text: 'Motorliefhebbers uit heel Nederland vinden ons nu voor onderhoud. De omzet is enorm gestegen!' },
    { name: 'Tandartspraktijk Assen Centrum', rating: 4.5, text: 'Patiënten uit Assen en omgeving maken nu makkelijk afspraken. Onze digitale zichtbaarheid is perfect.' },
    { name: 'Advocatenkantoor Drenthe Assen', rating: 5, text: 'Bedrijven en particulieren uit heel Drenthe vinden ons nu voor juridisch advies. Geweldige groei!' },
    { name: 'Bouwbedrijf Noord Assen', rating: 5, text: 'Projecten in Assen en omgeving komen regelmatig binnen. De website werkt als een magneet voor klanten.' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor Assen', rating: 5, text: 'Ondernemers in heel Drenthe kiezen ons nu voor hun administratie. De online zichtbaarheid heeft ons veel gebracht.' },
    { name: 'Fysiotherapie Praktijk Assen', rating: 5, text: 'Sporters en patiënten uit Assen en omgeving vinden ons perfect. Onze agenda zit vol met afspraken.' },
    { name: 'IT-bedrijf Drenthe Solutions', rating: 4.5, text: 'B2B klanten uit de hele provincie komen nu naar ons voor IT-oplossingen. Sterke groei dankzij SEO.' },
    { name: 'Juwelier Assen', rating: 5, text: 'Voor verlovingsringen en horloges worden we nu bovenaan gevonden. Klanten uit heel Drenthe komen naar ons.' },
    { name: 'Rijschool TT Assen', rating: 5, text: 'Jongeren uit Assen en omgeving schrijven zich massaal in voor rijlessen. De wachtlijst wordt steeds langer.' },
    { name: 'Dierenkliniek Assen', rating: 4.5, text: 'Huisdiereigenaren uit de regio vinden ons snel voor spoedhulp en controles. De praktijk loopt uitstekend.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Hoofdstad Assen: digitaal domineren in Drenthe</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">68.000 inwoners + TT Circuit wereldfaam</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Assen: waar de TT-traditie en moderne vooruitgang samenkomen.</strong><br />
            Met het wereldberoemde TT Circuit, als hoofdstad van Drenthe en centrum voor overheid, onderwijs en bedrijvigheid biedt Assen unieke kansen. Als <b>SEO specialist Assen</b> positioneer ik je tussen de internationale uitstraling, lokale gemeenschap en de sterke positie als bestuurlijk en economisch hart van Noord-Nederland.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Assen: topresultaten in Google</li>
            <li>✓ Google Ads: direct aanvragen uit Assen en Drenthe</li>
            <li>✓ Speciaal voor bedrijven, overheid en zzp'ers in Assen</li>
            <li>✓ <b>SEO Assen</b> met meetbaar resultaat</li>
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
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Assen & Drenthe</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Assen - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Assen" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Assen met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Assen",
            title: "SEO Specialist Assen",
            description: "Wil je echt groeien in Assen en Drenthe? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt, van TT-bezoekers tot lokale bewoners.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Assen",
            description: "Direct aanvragen van inwoners en bedrijven uit Assen en heel Drenthe. Perfect voor zowel lokale diensten als B2B in het bestuurlijke centrum van de provincie.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Assen",
            description: "Professionele websites voor bedrijven in Assen. Geoptimaliseerd voor de lokale markt en de unieke mix van overheidsinstellingen, onderwijs en bedrijvigheid.",
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
        title="Assen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN ASSEN */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Assen</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Assen is de hoofdstad van Drenthe met unieke voordelen voor lokale en regionale bedrijven.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Provinciale hoofdstad</h3>
              <p className="text-gray-600">
                Als hoofdstad van Drenthe is Assen het bestuurlijke en economische centrum. Lokale SEO helpt je deze centrale positie te benutten en klanten uit de hele provincie aan te trekken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏍️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">TT Circuit wereldfaam</h3>
              <p className="text-gray-600">
                Het TT Circuit brengt jaarlijks honderdduizenden internationale bezoekers naar Assen. Met de juiste SEO-strategie profiteer je van deze wereldwijde bekendheid en extra klantenstromen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Onderwijs & kenniscentrum</h3>
              <p className="text-gray-600">
                Met universiteiten, hogescholen en onderzoeksinstellingen heeft Assen een sterke kenniseconomie. Dit biedt unieke kansen voor B2B dienstverlening en specialistische bedrijven.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Assen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van overheidsleverancier tot lokale dienstverlener – ik help je bedrijf online groeien in Assen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Assen */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Assen</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Assen en heel Drenthe.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Assen</li>
                <li>✓ Provinciale en lokale SEO strategieën</li>
                <li>✓ Toerisme en evenementen SEO</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Assen */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Assen ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Assen</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Assen en Drenthe. Ook internationaal tijdens TT-periode.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale en provinciale campagnes</li>
                <li>✓ Seizoensgebonden TT-marketing</li>
                <li>✓ B2B en overheidstargetomg</li>
                <li>✓ Toerisme en evenementen</li>
                <li>✓ Transparante rapportages</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Jouw bedrijf groeit online met een converterende website en campagnes die werken voor de diverse markt in Assen.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Website op maat voor Assen</li>
                <li>✓ Multi-talig voor internationale gasten</li>
                <li>✓ Overheid en B2B geoptimaliseerd</li>
                <li>✓ Evenementen en seizoens-marketing</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Assen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Assen.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Assen?</h3>
              <p className="text-gray-600">
                Assen is de hoofdstad van Drenthe met 68.000 inwoners plus honderdduizenden TT-bezoekers. Door je te richten op "SEO Assen" trek je lokale klanten én profiteer je van de internationale uitstraling. Dit geeft unieke groei kansen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik profiteren van TT-bezoekers?</h3>
              <p className="text-gray-600">
                Zeker! Tijdens TT-week bezoeken honderdduizenden mensen Assen. Hotels, restaurants, winkels en zelfs dienstverleners kunnen hiervan profiteren met de juiste SEO-strategie en seizoensgebonden campagnes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt SEO ook voor B2B en overheidsopdrachten?</h3>
              <p className="text-gray-600">
                Absoluut! Assen heeft veel overheidsinstellingen, onderwijsorganisaties en bedrijven. B2B SEO helpt je gevonden te worden voor "leverancier Assen", "consultancy Drenthe" of specifieke overheidsopdrachten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Assen?</h3>
              <p className="text-gray-600">
                De kosten variëren per bedrijf en doelstelling. Lokale SEO pakketten starten vanaf €650 per maand, B2B en overheid SEO vanaf €900. Tijdens een gratis strategiegesprek bespreken we de beste aanpak.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Assen zie je vaak binnen 2-4 maanden eerste resultaten. B2B en overheidsmarketing kan langer duren maar levert meer waarde per klant. Google Ads campagnes werken direct.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit heel Drenthe?</h3>
              <p className="text-gray-600">
                Zeker! Als hoofdstad trekt Assen mensen uit heel Drenthe aan. We kunnen je zichtbaar maken in Hoogeveen, Emmen, Coevorden, Meppel en andere plaatsen waar mensen naar Assen komen voor diensten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER ASSEN SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Assen</span> & Drenthe
            </h2>
            <p className="text-xl text-gray-600">
              Assen combineert provinciale betekenis met internationale uitstraling - ideaal voor ambitieuze bedrijven.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hoofdstad met internationale allure</h3>
              <p className="text-gray-600 mb-4">
                Assen is meer dan alleen de hoofdstad van Drenthe. Met het wereldberoemde TT Circuit, grote onderwijsinstellingen, overheidskantoren en een groeiende bedrijvensector biedt de stad unieke voordelen voor ondernemers.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Assen help ik bedrijven om optimaal te profiteren van deze unieke mix: lokale zichtbaarheid voor de 68.000 inwoners, provinciale autoriteit voor heel Drenthe én internationale exposure tijdens evenementen als de TT.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 68.000 inwoners + internationale bezoekers</li>
                <li>✓ Hoofdstad van Drenthe</li>
                <li>✓ TT Circuit wereldfaam</li>
                <li>✓ Onderwijs en kenniscentrum</li>
                <li>✓ Overheid en bestuurlijke functies</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Assen:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Hotels & accommodaties</div>
                <div>• Restaurants & horeca</div>
                <div>• Overheidsleveranciers</div>
                <div>• Advies & consultancy</div>
                <div>• Tandartsen & zorg</div>
                <div>• Advocaten & notarissen</div>
                <div>• Accountants</div>
                <div>• IT-bedrijven</div>
                <div>• Bouw & techniek</div>
                <div>• Automotive</div>
                <div>• Onderwijs & training</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Assen</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Assen – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Assen - Online Marketing Drenthe</h3>
            <p className="text-gray-600">
              Assen • Hoogeveen • Emmen • Coevorden • Meppel • Westerbork • Roden • Beilen • Drenthe
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}