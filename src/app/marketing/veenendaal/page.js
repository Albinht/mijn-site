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

export default function MarketingVeenendaal() {
  // Lokale Veenendaal reviews
  const dutchReviews = [
    { name: 'Restaurant De Vallei Veenendaal', rating: 5, text: 'Onze reserveringen zijn verdubbeld sinds we beter vindbaar zijn in Veenendaal. Gasten komen uit heel de Gelderse Vallei!' },
    { name: 'Autogarage Centrum Veenendaal', rating: 5, text: 'Klanten uit Veenendaal en omgeving vinden ons nu direct voor onderhoud. De werkplaats zit vol met afspraken!' },
    { name: 'Tandartspraktijk Veenendaal', rating: 4.5, text: 'Veel meer patiëntenanmeldingen sinds onze website geoptimaliseerd is. We worden perfect gevonden in de Gelderse Vallei.' },
    { name: 'Kapsalon Modern Veenendaal', rating: 5, text: 'Onze agenda staat vol dankzij betere online zichtbaarheid. Klanten uit Veenendaal boeken nu makkelijk online.' },
    { name: 'Bouwbedrijf Vallei Veenendaal', rating: 5, text: 'Projecten in Veenendaal en omgeving komen regelmatig binnen. Onze website werkt als een klantenmagnet!' },
    { name: 'Fysiotherapie Veenendaal', rating: 5, text: 'Sporters en patiënten vinden ons nu veel beter. De praktijk draait uitstekend dankzij meer zichtbaarheid.' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor Veenendaal', rating: 5, text: 'MKB-ondernemers in de Gelderse Vallei kiezen ons nu vaker voor administratie en belastingadvies. Sterke groei!' },
    { name: 'IT-bedrijf Vallei Solutions', rating: 4.5, text: 'B2B klanten uit Veenendaal en omgeving vinden ons perfect voor IT-diensten. Online marketing werkt geweldig.' },
    { name: 'Interieurzaak Veenendaal', rating: 5, text: 'Klanten komen uit Ede, Wageningen en heel de vallei naar onze showroom. Omzet is flink gestegen!' },
    { name: 'Rijschool Veenendaal', rating: 5, text: 'Jongeren uit Veenendaal en omgeving schrijven zich massaal in. De wachtlijst wordt steeds langer!' },
    { name: 'Advocatenkantoor Veenendaal', rating: 4.5, text: 'Particulieren en bedrijven uit de regio vinden ons nu beter voor juridisch advies. Geweldige groei.' },
    { name: 'Dierenkliniek Gelderse Vallei', rating: 5, text: 'Huisdiereigenaren uit Veenendaal en omgeving maken nu makkelijk afspraken. De praktijk loopt uitstekend.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Groene Veenendaal: digitaal groeien in de Gelderse Vallei</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">67.000 inwoners + groen hart van Nederland</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Veenendaal: waar natuur en bedrijvigheid harmonieus samengaan.</strong><br />
            Met de Utrechtse Heuvelrug, het Groene Hart en strategische ligging tussen Utrecht, Arnhem en Ede biedt Veenendaal unieke kansen. Als <b>SEO specialist Veenendaal</b> positioneer ik je tussen de groene leefomgeving, sterke economie en de centrale positie in de Gelderse Vallei.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Veenendaal: topresultaten in Google</li>
            <li>✓ Google Ads: direct aanvragen uit Veenendaal en vallei</li>
            <li>✓ Speciaal voor bedrijven, retail en zzp'ers in Veenendaal</li>
            <li>✓ <b>SEO Veenendaal</b> met meetbaar resultaat</li>
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
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Veenendaal & de Gelderse Vallei</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Veenendaal - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Veenendaal" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Veenendaal met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Veenendaal",
            title: "SEO Specialist Veenendaal",
            description: "Wil je echt groeien in Veenendaal en de Gelderse Vallei? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit deze groene en welvarende regio.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Veenendaal",
            description: "Direct aanvragen van inwoners en bedrijven uit Veenendaal en de vallei. Perfect targeting voor deze welvarende regio tussen Utrecht en Arnhem.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Veenendaal",
            description: "Professionele websites voor bedrijven in Veenendaal. Geoptimaliseerd voor de lokale markt en de sterke economie in de Gelderse Vallei.",
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
        title="Veenendaal groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN VEENENDAAL */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Veenendaal</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Veenendaal is een welvarende stad in de Gelderse Vallei met sterke koopkracht en groeiende bedrijvigheid.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Groene welvaart</h3>
              <p className="text-gray-600">
                Veenendaal combineert groene leefkwaliteit met sterke economie. Lokale SEO helpt je deze welvarende doelgroep te bereiken die bewust kiest voor kwaliteit en service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛣️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Centrale ligging</h3>
              <p className="text-gray-600">
                Strategisch gelegen tussen Utrecht, Arnhem en Ede. Deze positie trekt klanten uit de hele Gelderse Vallei aan. Lokale SEO vergroot dit verzorgingsgebied nog verder.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sterke bedrijvigheid</h3>
              <p className="text-gray-600">
                Veenendaal heeft een gezonde mix van bedrijven, van lokale dienstverleners tot internationale hoofdkantoren. Dit biedt volop kansen voor B2B en B2C marketing.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Veenendaal</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot regionale speler – ik help je bedrijf online groeien in Veenendaal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Veenendaal */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Veenendaal</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Veenendaal en de Gelderse Vallei.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Veenendaal</li>
                <li>✓ Regionale SEO strategieën</li>
                <li>✓ Klantbeoordelingen stimuleren</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Veenendaal */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Veenendaal ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Veenendaal</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de welvarende doelgroep in Veenendaal met winstgevende Google Ads campagnes voor de Gelderse Vallei.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale en regionale campagnes</li>
                <li>✓ Focus op Veenendaal en omgeving</li>
                <li>✓ Doelgroep met hoge koopkracht</li>
                <li>✓ B2B en consumer targeting</li>
                <li>✓ Transparante rapportages</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Jouw bedrijf groeit online met een converterende website en campagnes die aansluiten bij de kwaliteitsbewuste markt in Veenendaal.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Website op maat voor Veenendaal</li>
                <li>✓ Kwaliteit en service geoptimaliseerd</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Veenendaal</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Veenendaal.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Veenendaal?</h3>
              <p className="text-gray-600">
                Veenendaal heeft 67.000 welvarende inwoners met sterke koopkracht. Door je te richten op "SEO Veenendaal" trek je lokale klanten aan die bereid zijn te investeren in kwaliteit. De concurrentie is overzichtelijk, waardoor je snel resultaat kunt boeken.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke bedrijven doen het goed in Veenendaal?</h3>
              <p className="text-gray-600">
                Veenendaal heeft een sterke dienstensector: van tandartsen en kappers tot accountants en advocaten. Ook retail, horeca en B2B dienstverlening floreren door de welvarende bevolking en centrale ligging in de Gelderse Vallei.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Veenendaal zie je vaak binnen 2-4 maanden eerste resultaten. De kwaliteitsbewuste doelgroep converteert goed, wat betekent dat elke extra bezoeker waardevol is. Google Ads werken direct.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Veenendaal?</h3>
              <p className="text-gray-600">
                De kosten variëren per bedrijf en ambitie. Lokale SEO pakketten starten vanaf €700 per maand. Door de hogere koopkracht in Veenendaal is de ROI vaak sterker dan in andere steden. We bespreken graag de mogelijkheden.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit de hele Gelderse Vallei?</h3>
              <p className="text-gray-600">
                Absoluut! Veenendaal ligt centraal tussen Utrecht, Ede, Wageningen en Arnhem. We kunnen je strategie uitbreiden naar de hele vallei, zodat je profiteert van de centrale ligging en het grote verzorgingsgebied.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe zit het met de concurrentie in Veenendaal?</h3>
              <p className="text-gray-600">
                Veenendaal heeft minder concurrentie dan grote steden, maar wel een koopkrachtige doelgroep. Dit maakt het ideaal voor lokale SEO: je kunt snel marktleider worden en profiteren van de sterke lokale economie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER VEENENDAAL SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Veenendaal</span> & de Gelderse Vallei
            </h2>
            <p className="text-xl text-gray-600">
              Veenendaal combineert groene leefkwaliteit met economische kracht - perfect voor ambitieuze ondernemers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Groene stad met economische kracht</h3>
              <p className="text-gray-600 mb-4">
                Veenendaal ligt in de Gelderse Vallei, omgeven door de Utrechtse Heuvelrug en het Groene Hart. Deze unieke ligging combineert groene leefkwaliteit met economische voordelen. De stad trekt zowel bewoners als bedrijven die kwaliteit en duurzaamheid waarderen.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Veenendaal help ik bedrijven om optimaal te profiteren van deze unieke positie: lokale zichtbaarheid bij welvarende inwoners én regionale uitstraling naar de hele Gelderse Vallei.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 67.000 welvarende inwoners</li>
                <li>✓ Centrale ligging Gelderse Vallei</li>
                <li>✓ Groene leefkwaliteit</li>
                <li>✓ Sterke koopkracht</li>
                <li>✓ Gevarieerde bedrijvigheid</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Veenendaal:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Restaurants & horeca</div>
                <div>• Wellness & beauty</div>
                <div>• Tandartsen & zorg</div>
                <div>• Accountants & advies</div>
                <div>• Advocaten & notarissen</div>
                <div>• Bouw & aannemers</div>
                <div>• Auto & mobiliteit</div>
                <div>• Retail & lifestyle</div>
                <div>• IT & technologie</div>
                <div>• Onderwijs & training</div>
                <div>• Vastgoed & finance</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Veenendaal</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Veenendaal – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Veenendaal - Online Marketing Gelderse Vallei</h3>
            <p className="text-gray-600">
              Veenendaal • Ede • Wageningen • Rhenen • Renswoude • Scherpenzeel • Woudenberg • Gelderse Vallei
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}