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

export default function MarketingNieuwegein() {
  // Lokale Nieuwegein reviews
  const dutchReviews = [
    { name: 'Restaurant Nieuwegein Centrum', rating: 5, text: 'Gezinnen en stellen uit Nieuwegein boeken nu online tafels. City Plaza en omgeving kennen ons als de beste!' },
    { name: 'Autogarage Nieuwegein Zuid', rating: 5, text: 'APK en onderhoud uit alle wijken van Nieuwegein. Dorpscentra en moderne buurten - iedereen vindt ons!' },
    { name: 'Tandartspraktijk Nieuwegein', rating: 4.5, text: 'Patiënten uit Batau, Fokkesteeg en hele stad maken afspraken. Nieuwegein vertrouwt op onze moderne zorg!' },
    { name: 'Kapsalon Modern Nieuwegein', rating: 5, text: 'Trendbewuste klanten uit centrum en wijken boeken online. Nieuwegein waardeert kwaliteit en stijl!' },
    { name: 'Bouwbedrijf Nieuwegein', rating: 5, text: 'Renovaties in oude en nieuwe wijken stromen binnen. Van Jutphaas tot Galecop - heel Nieuwegein kent ons!' },
    { name: 'Fysiotherapie Nieuwegein Sport', rating: 5, text: 'Sporters van alle leeftijden vinden ons perfect. Nieuwegein sport en beweegt graag!' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor Nieuwegein', rating: 5, text: 'MKB uit Nieuwegein kiest ons voor administratie. Van startups tot gevestigde bedrijven - we helpen iedereen!' },
    { name: 'IT-bedrijf Nieuwegein Tech', rating: 4.5, text: 'Moderne bedrijven uit Nieuwegein komen voor IT-oplossingen. Deze digitale stad begrijpt technologie!' },
    { name: 'Interieurzaak Design Nieuwegein', rating: 5, text: 'Trendbewuste bewoners kiezen voor modern interieur. Showroom in City Plaza trekt veel bezoekers!' },
    { name: 'Rijschool Nieuwegein', rating: 5, text: 'Jongeren uit alle wijken leren hier rijden. Van Batau tot Galecop - heel Nieuwegein rijdt met ons!' },
    { name: 'Advocatenkantoor Nieuwegein', rating: 4.5, text: 'Particulieren en bedrijven uit regio Utrecht vinden ons voor juridisch advies. Centrale ligging werkt perfect!' },
    { name: 'Dierenkliniek Nieuwegein', rating: 5, text: 'Huisdiereigenaren uit stad en omgeving maken online afspraken. Van stadshonden tot gezinskatten!' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Modern Nieuwegein: digitale stad vol mogelijkheden</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">63.000 inwoners + Utrechtse stadsregio</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Nieuwegein: waar moderne planning ontmoet digitale vooruitgang.</strong><br />
            Met planmatige wijkindeling, City Plaza, sterke economie en directe verbinding met Utrecht biedt Nieuwegein unieke marktkansen. Als <b>SEO specialist Nieuwegein</b> help ik je profiteren van de moderne infrastruur, koopkrachtige bewoners en de strategische ligging in de Utrechtse stadsregio.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Nieuwegein: zichtbaar in alle wijken</li>
            <li>✓ Google Ads: doelgroep moderne families en professionals</li>
            <li>✓ Speciaal voor bedrijven in centrum en wijken</li>
            <li>✓ <b>SEO Nieuwegein</b> met focus op stadsregio Utrecht</li>
            <li>✓ Websites die Nieuwegeiners overtuigen</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek stad cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Nieuwegein & Utrechtse regio</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Nieuwegein - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Nieuwegein" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Nieuwegein met moderne marketing"
        subtitle="Van City Plaza tot wijken - overal vindbaar"
        features={[
          {
            badge: "SEO Nieuwegein",
            title: "SEO Specialist Nieuwegein",
            description: "Wil je groeien in modern Nieuwegein? Ik zorg dat je wordt gevonden door koopkrachtige gezinnen, professionals en moderne ondernemers in deze goed georganiseerde stad bij Utrecht.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Alle wijken",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Nieuwegein",
            description: "Direct bereik van moderne families, professionals en ondernemers. Perfect targeting voor deze welvarende stad met sterke koopkracht en digitale kennis.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Hele stad",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Nieuwegein",
            description: "Moderne websites voor Nieuwegein bedrijven. Geoptimaliseerd voor de digitaal savvy bewoners en de professionele bedrijvigheid in de stadsregio.",
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
        title="Nieuwegein groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN NIEUWEGEIN */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Nieuwegein</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Nieuwegein combineert moderne stedelijke planning met sterke koopkracht en digitale vooruitgang.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Moderne stad</h3>
              <p className="text-gray-600">
                Nieuwegein is planmatig ontwikkeld met goede infrastructuur, City Plaza en moderne voorzieningen. Deze organisatie maakt het gemakkelijk om alle doelgroepen te bereiken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Koopkrachtige gezinnen</h3>
              <p className="text-gray-600">
                Nieuwegein trekt families met goede inkomens die investeren in kwaliteit. Deze welvarende doelgroep is bereid te betalen voor goede producten en diensten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategische ligging</h3>
              <p className="text-gray-600">
                Direct verbonden met Utrecht en goed bereikbaar vanuit heel Nederland. Deze positie vergroot je potentiële markt aanzienlijk.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Nieuwegein</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot regionale speler – ik help je bedrijf online groeien in moderne Nieuwegein.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Nieuwegein */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Nieuwegein</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij bovenaan bij zoekopdrachten in Nieuwegein en omgeving. Bereik moderne families en professionals effectief.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek alle wijken</li>
                <li>✓ Moderne SEO strategieën</li>
                <li>✓ Reviews van tevrede klanten</li>
                <li>✓ Stadsregio targeting</li>
              </ul>
            </div>
            {/* Google Ads Nieuwegein */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Nieuwegein ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Nieuwegein</h3>
              <p className="text-gray-600 mb-6">
                Bereik direct koopkrachtige families en moderne professionals met gerichte Google Ads campagnes voor Nieuwegein.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Gezin en familie targeting</li>
                <li>✓ Professional en zakelijk focus</li>
                <li>✓ Wijkspecifieke campagnes</li>
                <li>✓ Stadsregio Utrecht bereik</li>
                <li>✓ Moderne doelgroep optimalisatie</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Moderne websites die aansluiten bij Nieuwegein's digitaal savvy bewoners. Van gezinsservices tot zakelijke oplossingen.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Modern en gebruiksvriendelijk design</li>
                <li>✓ Mobile-first voor actieve gezinnen</li>
                <li>✓ Snelle laadtijden</li>
                <li>✓ Conversie geoptimaliseerd</li>
                <li>✓ Online afspraak systemen</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Nieuwegein</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in moderne Nieuwegein.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Nieuwegein?</h3>
              <p className="text-gray-600">
                Nieuwegein heeft 63.000 koopkrachtige inwoners die digitaal actief zijn. Door je te richten op 'SEO Nieuwegein' trek je gezinnen aan die bereid zijn te investeren in kwaliteitsproducten en -diensten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke bedrijven doen het goed in Nieuwegein?</h3>
              <p className="text-gray-600">
                Gezinsgerichte diensten (tandartsen, kappers, sport), retail in City Plaza, horeca, wellness, onderwijs en zakelijke dienstverlening. Ook B2B services profiteren van de centrale ligging.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Nieuwegein zie je vaak binnen 2-3 maanden resultaten. De digitaal savvy bewoners zoeken actief online en converteren goed.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Nieuwegein?</h3>
              <p className="text-gray-600">
                Lokale SEO pakketten starten vanaf €700 per maand. Door Nieuwegein's sterke koopkracht en digitale gedrag is de ROI vaak hoger dan in traditionelere steden.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit heel de Utrechtse regio?</h3>
              <p className="text-gray-600">
                Absoluut! Nieuwegein ligt strategisch tussen Utrecht, Woerden en IJsselstein. We kunnen je bereik uitbreiden naar de hele Utrechtse stadsregio.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik de verschillende wijken in Nieuwegein?</h3>
              <p className="text-gray-600">
                Nieuwegein heeft duidelijke wijken zoals Batau, Fokkesteeg, Galecop en Jutphaas. We ontwikkelen strategieën die alle wijken effectief bereiken via gerichte lokale SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER NIEUWEGEIN SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Nieuwegein</span> & regio
            </h2>
            <p className="text-xl text-gray-600">
              Nieuwegein combineert moderne stedelijke planning met sterke economie en digitale vooruitgang.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Planmatige stad vol kansen</h3>
              <p className="text-gray-600 mb-4">
                Nieuwegein is vanaf de jaren 60 planmatig ontwikkeld als moderne woonstad bij Utrecht. Deze doordachte aanpak resulteerde in goed georganiseerde wijken, uitstekende voorzieningen en een sterke economische basis.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Nieuwegein help ik bedrijven om te profiteren van deze moderne infrastructuur: bereik koopkrachtige gezinnen, profiteer van de centrale ligging en tap in op de digitaal actieve gemeenschap.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 63.000 inwoners met sterke koopkracht</li>
                <li>✓ Planmatige wijkindeling en organisatie</li>
                <li>✓ City Plaza als commercieel centrum</li>
                <li>✓ Directe verbinding met Utrecht</li>
                <li>✓ Moderne digitale infrastructuur</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Nieuwegein:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Gezinsgerichte diensten</div>
                <div>• Tandartsen & zorgverleners</div>
                <div>• Kappers & wellness</div>
                <div>• Horeca & restaurants</div>
                <div>• Retail & winkels</div>
                <div>• Sport & fitness</div>
                <div>• Onderwijs & training</div>
                <div>• IT & technologie</div>
                <div>• Accountants & administratie</div>
                <div>• Advocaten & juridisch</div>
                <div>• Bouw & onderhoud</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Nieuwegein</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in moderne Nieuwegein – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Nieuwegein - Online Marketing Utrechtse Regio</h3>
            <p className="text-gray-600">
              Nieuwegein • Utrecht • IJsselstein • Woerden • Houten • Vianen • Utrechtse Stadsregio
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}