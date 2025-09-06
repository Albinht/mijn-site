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

export default function MarketingEmmen() {
  // Lokale Emmen reviews - Poort naar Drenthe
  const dutchReviews = [
    { name: 'Restaurant Centrum Emmen', rating: 5, text: 'In het hart van Emmen veel locals en bezoekers van de Dierentuin. De horeca omzet is flink gestegen door online zichtbaarheid!' },
    { name: 'Dierenarts Emmermeer', rating: 5, text: 'In de wijk Emmermeer bedienen we huisdieren uit heel Zuidoost-Drenthe. Door SEO vinden eigenaren ons snel voor spoedgevallen.' },
    { name: 'Tandarts Bargeres', rating: 5, text: 'Bargeres is een rustige woonwijk. Door lokale SEO krijgen we patiënten uit alle delen van Emmen en omliggende dorpen.' },
    { name: 'Bouwbedrijf Noordbarge', rating: 4.5, text: 'Noordbarge groeit met veel nieuwbouw. We staan bovenaan voor "aannemer Emmen" en krijgen opdrachten uit heel Drenthe!' },
    { name: 'IT Bedrijf Parc Sandur', rating: 5, text: 'Op het bedrijventerrein bedienen we mkb-bedrijven uit Emmen en omgeving. B2B marketing werkt excellent in deze regio.' },
    { name: 'Autogarage Angelslo', rating: 5, text: 'Angelslo ligt strategisch aan de rondweg. We trekken nu klanten uit Emmen, Coevorden en heel Zuidoost-Drenthe.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Rietlanden', rating: 5, text: 'Rietlanden is een moderne wijk met veel gezinnen. Onze salon wordt nu gevonden door klanten uit heel de regio.' },
    { name: 'Fysiotherapie Delftlanden', rating: 4.5, text: 'In Delftlanden een diverse gemeenschap. Onze praktijk wordt nu beter gevonden door patiënten die kwaliteit zoeken.' },
    { name: 'Makelaar Emmerhout', rating: 5, text: 'Emmerhout heeft veel karakter en groen. Door marketing zijn onze woningverkopen gestegen - mensen vinden de rust hier!' },
    { name: 'Schoonheidssalon Klazienaveen', rating: 5, text: 'Klazienaveen heeft een eigen identiteit. Onze salon wordt nu gevonden door klanten uit heel Emmen en omliggende gemeenten.' },
    { name: 'Installatiebedrijf Schoonebeek', rating: 4.5, text: 'Schoonebeek ligt aan de Duitse grens. Door SEO krijgen we opdrachten van particulieren en bedrijven uit beide landen.' },
    { name: 'Sportschool Foxhol', rating: 5, text: 'In deze actieve wijk hebben we leden uit heel de regio. Lokale marketing en community-opbouw werken perfect samen.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Emmen | Marketing Bureau & Online Marketing Emmen</title>
        <meta
          name="description"
          content="SEO Specialist Emmen inschakelen? Kies voor hét marketing bureau in Emmen. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/emmen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Emmen: Poort naar Drenthe</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">110.000 Emmenaren wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Emmen: waar Drentse gezelligheid en moderne vooruitgang elkaar ontmoeten.</strong><br />
              Van de wereldberoemde Dierentuin Emmen tot groene woonwijken zoals Emmermeer, van het historische centrum tot moderne bedrijventerreinen - Emmen combineert natuurlijke rust met ondernemende energie. Met 110.000+ inwoners als grootste stad van Drenthe biedt Emmen ondernemers unieke kansen in een hechte, loyale gemeenschap. Als <b>SEO specialist Emmen</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze gastvrije stad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Emmen: zichtbaar in Drenthe's hoofdstad</li>
              <li>✓ Google Ads: regionaal bereik naar 110.000+ Emmenaren</li>
              <li>✓ Speciaal voor ambitieuze bedrijven in Zuidoost-Drenthe</li>
              <li>✓ <b>SEO Emmen</b> met focus op lokale gemeenschap</li>
              <li>✓ Websites die passen bij Emmen's ondernemende karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Emmen cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Emmen & Zuidoost-Drenthe</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Emmen - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Emmen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Emmen met doelgerichte marketing"
          subtitle="Digitale groei voor de grootste stad van Drenthe"
          features={[
            {
              badge: "SEO Emmen",
              title: "SEO Specialist Emmen",
              description: "Emmen heeft een sterke lokale gemeenschap en hechte banden. Ik zorg dat jouw bedrijf opvalt in deze loyale markt door lokaal bovenaan te staan en structureel nieuwe klanten aan te trekken uit heel Zuidoost-Drenthe en aangrenzende gebieden.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Regionaal sterk",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Emmen",
              description: "Direct zichtbaar voor 110.000+ Emmenaren en bezoekers van de Dierentuin uit heel Nederland en Duitsland. Adverteer gericht in alle wijken en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Regionaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Emmen",
              description: "Gastvrije, professionele websites die passen bij Emmen's Drentse karakter en moderne ambities. Volledig geoptimaliseerd voor de lokale markt en toerisme.",
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
          title="Emmen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Emmen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startende ondernemers tot gevestigde bedrijven – ik help ambitieuze ondernemers online groeien in de grootste stad van Drenthe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Emmen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Emmen</h3>
                <p className="text-gray-600 mb-6">
                  In een hechte gemeenschap als Emmen is betrouwbare lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken in alle wijken van Drenthe's grootste stad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Emmen</li>
                  <li>✓ Drentse zoekwoordenstrategie</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews in lokale gemeenschap</li>
                </ul>
              </div>
              {/* Google Ads Emmen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor lokale bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Emmen</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 110.000+ Emmenaren plus toeristen uit heel Nederland en Duitsland met strategisch gerichte campagnes voor maximale lokale impact.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Toerisme & lokaal gerichte advertenties</li>
                  <li>✓ Focus op regionale concurrentie</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Duidelijk meetbare groei</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Gastvrije, professionele websites die passen bij Emmen's Drentse karakter en zorgen voor meer conversies uit heel Zuidoost-Drenthe en daarbuiten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Drentse gezelligheid in modern design</li>
                  <li>✓ Toerismevriendelijk & lokaal</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal regionaal bereik</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Emmen</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Emmen?</h3>
                <p className="text-gray-600">
                  Emmen heeft een sterke lokale identiteit en hechte gemeenschap. Met 110.000+ inwoners plus duizenden toeristen voor de Dierentuin is lokale zichtbaarheid cruciaal. Emmenaren zijn loyaal aan bedrijven die ze kennen en vertrouwen - goede SEO helpt die vertrouwensrelatie op te bouwen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Emmen van andere steden?</h3>
                <p className="text-gray-600">
                  Emmen combineert Drentse gezelligheid met moderne voorzieningen. De stad heeft toerisme (Dierentuin), loyale locals, en grensverkeer met Duitsland. Marketing moet daarom authentiek, betrouwbaar en gastvrij zijn - Emmenaren waarderen persoonlijke service en lokale verbinding boven flashy campagnes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Emmen zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum voor retail en horeca, Emmermeer voor gezinnen, Bargeres voor rust en groen, Noordbarge voor nieuwbouw, Angelslo voor bereikbaarheid, en bedrijventerreinen voor B2B. Elke wijk heeft eigen karakter - van toeristische hotspots tot rustige woonwijken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Emmen?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €650-1100 per maand, afhankelijk van je doelgroep. Google Ads beheer vanaf €400 per maand plus advertentiebudget. Websiteprojecten vanaf €2200. Emmen heeft lagere concurrentie dan grote steden maar sterke loyaliteit, waardoor marketing zeer effectief kan zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Emmen?</h3>
                <p className="text-gray-600">
                  Zeker! Emmen trekt bezoekers uit heel Noord-Nederland en Duitsland. Veel bedrijven bedienen Zuidoost-Drenthe (Coevorden, Hoogeveen, Assen) en grensgebieden. SEO kan worden geoptimaliseerd voor dit bredere gebied, inclusief Duitse toeristen en zakelijke bezoekers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Emmen?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 4-5 maanden. Google Ads geven directe zichtbaarheid. Emmen heeft minder concurrentie en sterke mond-tot-mond cultuur, waardoor organische groei sneller kan opbouwen dan in grote steden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Emmen?</h3>
                <p className="text-gray-600">
                  Toerisme en horeca (Dierentuin), gezondheidszorg en wellness, bouw en renovatie, automotive en transport, zakelijke dienstverlening, en retail. Emmen's mix van toerisme, lokale gemeenschap en Duitse grensligging biedt kansen voor diverse branches.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Emmen?</h3>
                <p className="text-gray-600">
                  Basis social media en Google My Business kun je zelf doen. Maar voor echte groei in Emmen's unieke markt (toerisme + lokaal + grensverkeer) heb je ervaring nodig met regionale SEO en doelgroepsegmentatie. Ik begeleid graag bij een aanpak die past bij jouw bedrijf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Emmen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de grootste stad van Drenthe – altijd eerlijk advies en lokale expertise.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Emmen - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Emmen Centrum • Emmermeer • Bargeres • Noordbarge • Angelslo • Rietlanden • Delftlanden • Emmerhout • Klazienaveen • Schoonebeek • Foxhol • Coevorden • Hoogeveen • Assen • Meppen (DE)
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}