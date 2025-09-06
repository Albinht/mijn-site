'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingDelft() {
  // Lokale Delft reviews - Prinsenstad met TU Delft
  const dutchReviews = [
    { name: 'Restaurant Markt Delft', rating: 5, text: 'Op de historische Markt met het iconische stadhuis krijgen we nu veel meer studenten en toeristen. De omzet is flink gestegen!' },
    { name: 'Tech Startup TU Delft Campus', rating: 5, text: 'Op de TU campus bedienen we de internationale tech-gemeenschap. Onze B2B marketing trekt klanten uit heel Europa!' },
    { name: 'Tandarts Tanthof', rating: 5, text: 'In de moderne wijk Tanthof veel jonge professionals en studenten. Door lokale SEO krijgen we continu nieuwe patiënten.' },
    { name: 'Advocaat Phoenixstraat', rating: 4.5, text: 'In het centrum van Delft bedienen we de juridische behoeften van studenten, expats en bedrijven. Perfecte combinatie!' },
    { name: 'IT Consultancy YES!Delft', rating: 5, text: 'Als onderdeel van de innovatieve YES!Delft incubator bedienen we tech-startups uit de hele Randstad.' },
    { name: 'Bouwbedrijf Vrijenban', rating: 5, text: 'Vrijenban groeit snel met veel nieuwbouw. We staan bovenaan voor "aannemer Delft" en krijgen opdrachten uit heel de regio!' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Nieuwe Kerk', rating: 5, text: 'Vlak bij de beroemde Nieuwe Kerk veel toeristen en locals. Onze salon profiteert van de historische ligging.' },
    { name: 'Fysiotherapie Buitenhof', rating: 4.5, text: 'Buitenhof is een groene woonwijk. Onze praktijk wordt nu gevonden door patiënten die kwaliteit en rust zoeken.' },
    { name: 'Makelaar Voorhof', rating: 5, text: 'Voorhof heeft veel karakter en studentenhuisvesting. Door marketing zijn onze verhuur- en verkoopcijfers gestegen.' },
    { name: 'Autogarage Schieweg', rating: 5, text: 'De Schieweg verbindt Delft met Den Haag. We trekken nu klanten uit beide steden voor onze specialistische services.' },
    { name: 'Schoonheidssalon Wippolder', rating: 4.5, text: 'Wippolder is een rustige wijk. Onze salon wordt nu beter gevonden door klanten die premium behandelingen zoeken.' },
    { name: 'Installatiebedrijf Harnaschpolder', rating: 5, text: 'In deze industriële wijk veel bedrijvigheid. Door B2B SEO krijgen we opdrachten van tech-bedrijven en industrie.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Delft | Marketing Bureau & Online Marketing Delft</title>
        <meta
          name="description"
          content="SEO Specialist Delft inschakelen? Kies voor hét marketing bureau in Delft. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/delft" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Delft: Prinsenstad met Technische Universiteit</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">105.000 Delftenaren wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Delft: waar eeuwenoude porceleintradicie en baanbrekende technologie samenkomen.</strong><br />
              Van de historische Markt met het iconische stadhuis tot de wereldberoemde TU Delft campus, van het Koninklijk Delftsblauw tot moderne tech-incubators zoals YES!Delft - Delft combineert rijke Nederlandse cultuur met internationale innovatie. Met 105.000+ inwoners, waaronder duizenden studenten en internationale onderzoekers, biedt Delft ondernemers unieke kansen in een dynamische kenniseconomie. Als <b>SEO specialist Delft</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze inspirerende Prinsenstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Delft: zichtbaar in de Prinsenstad</li>
              <li>✓ Google Ads: internationaal bereik naar 105.000+ inwoners</li>
              <li>✓ Speciaal voor tech-bedrijven en innovatieve ondernemers</li>
              <li>✓ <b>SEO Delft</b> met focus op kenniseconomie</li>
              <li>✓ Websites die passen bij Delft's innovatieve karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Delft cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Delft & de TU gemeenschap</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Delft - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Delft" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Delft met doelgerichte marketing"
          subtitle="Digitale groei voor de innovatieve Prinsenstad"
          features={[
            {
              badge: "SEO Delft",
              title: "SEO Specialist Delft",
              description: "Delft heeft een unieke mix van historie, studenten en tech-innovatie. Ik zorg dat jouw bedrijf opvalt tussen lokale concurrentie én internationale tech-bedrijven door strategisch bovenaan te staan en klanten aan te trekken uit de kenniseconomie.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Tech-gericht",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Delft",
              description: "Direct zichtbaar voor 105.000+ Delftenaren, duizenden TU studenten en internationale tech-professionals. Adverteer gericht van centrum tot campus en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Internationaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Delft",
              description: "Innovatieve, professionele websites die passen bij Delft's mix van traditie en technologie. Volledig geoptimaliseerd voor de lokale markt en internationale tech-gemeenschap.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Tech-innovatie",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Delft groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Delft</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van tech-startups tot gevestigde bedrijven – ik help ambitieuze ondernemers online groeien in de innovatieve Prinsenstad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Delft */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Delft</h3>
                <p className="text-gray-600 mb-6">
                  In een innovatieve stad als Delft is strategische zichtbaarheid essentieel. Word gevonden door studenten, tech-professionals en locals in alle wijken van de Prinsenstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Delft</li>
                  <li>✓ Tech & studentgerichte SEO</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews in internationale gemeenschap</li>
                </ul>
              </div>
              {/* Google Ads Delft */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor tech-bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Delft</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 105.000+ Delftenaren, TU studenten en internationale tech-professionals met strategisch gerichte campagnes voor maximale impact.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Tech-gerichte advertentiecampagnes</li>
                  <li>✓ Student & expat targeting</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ B2B & B2C resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Innovatieve, professionele websites die passen bij Delft's tech-karakter en zorgen voor meer conversies uit de kenniseconomie en lokale markt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Tech-geïnspireerd modern design</li>
                  <li>✓ Internationaal toegankelijk</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik tech-gemeenschap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Delft</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Delft?</h3>
                <p className="text-gray-600">
                  Delft heeft een unieke mix van studenten, tech-professionals en locals. Met 105.000+ inwoners plus duizenden internationale studenten en onderzoekers is lokale zichtbaarheid cruciaal. Van het historische centrum tot de TU campus - verschillende doelgroepen zoeken op verschillende manieren.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Delft van andere steden?</h3>
                <p className="text-gray-600">
                  Delft combineert Nederlandse traditie met internationale innovatie. De stad heeft veel studenten, tech-startups, en een internationale gemeenschap. Marketing moet daarom zowel lokaal authentiek zijn als tech-savvy en internationaal aantrekkelijk - een balans tussen historie en toekomst.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Delft zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Markt, Nieuwe Kerk) voor retail en cultuur, TU campus voor tech en innovatie, Tanthof voor moderne woonwijken, Vrijenban voor gezinnen, en YES!Delft voor startups. Elke wijk heeft eigen karakteristieken en doelgroepen - van studenten tot families tot tech-professionals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Delft?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €800-1400 per maand, afhankelijk van doelgroep. Google Ads beheer vanaf €500 per maand plus advertentiebudget. Websiteprojecten vanaf €3200. Delft heeft veel tech-bedrijven en internationale klanten, waardoor investeringen in professionele marketing excellent renderen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook de internationale gemeenschap?</h3>
                <p className="text-gray-600">
                  Zeker! Delft heeft duizenden internationale studenten, onderzoekers en tech-professionals. SEO kan worden geoptimaliseerd voor Engelstalige zoekopdrachten, internationale doelgroepen, en meertalige content. Perfect voor bedrijven die zowel lokaal als internationaal willen groeien.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Delft?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 4-6 maanden. Google Ads geven directe zichtbaarheid. Delft's tech-gemeenschap is online actief en snelle adoptors, waardoor digitale marketing hier vaak sneller resultaat oplevert dan elders.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Delft?</h3>
                <p className="text-gray-600">
                  Tech en IT, studentenvoorzieningen, onderzoek en ontwikkeling, gezondheidszorg en wellness, onderwijs en training, cultuur en toerisme, en moderne retail. Delft's mix van historie, technologie en internationale gemeenschap biedt kansen voor innovatieve diensten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Delft?</h3>
                <p className="text-gray-600">
                  Basis social media kun je zelf doen, maar Delft's diverse doelgroepen (studenten, expats, locals, tech-professionals) vereisen specifieke expertise. Voor echte groei in deze unieke markt heb je kennis nodig van zowel lokale SEO als internationale targeting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Delft</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de innovatieve Prinsenstad – altijd eerlijk advies en tech-savvy aanpak.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Delft - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Delft Centrum • TU Campus • Tanthof • Vrijenban • Buitenhof • Voorhof • Wippolder • Harnaschpolder • Schieweg • YES!Delft • Den Haag • Rotterdam • Leiden • Westland
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}