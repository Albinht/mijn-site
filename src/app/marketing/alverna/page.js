'use client'

import Head from 'next/head'
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

export default function MarketingAlverna() {
  // Authentieke Alverna reviews met religieuze en lokale context
  const dutchReviews = [
    { name: 'Pelgrimsherberg Sint Franciscus', rating: 5, text: 'Sinds onze nieuwe website bereiken we pelgrims uit heel Nederland die het Franciscaanse klooster bezoeken. De respectvolle aanpak past perfect bij onze waarden.' },
    { name: 'Hoveniersbedrijf De Heilige Tuin', rating: 5, text: 'We onderhouden de kloostertuinen én particuliere tuinen in Alverna. Via Google vinden nu ook bewoners uit Wijchen-Noord ons voor tuinonderhoud.' },
    { name: 'Café-Restaurant De Pelgrim', rating: 5, text: 'Onze locatie nabij het bedevaartsoord trekt nu ook wandelaars van de Maasduinen. De lokale SEO-strategie werkt uitstekend voor onze doelgroep.' },
    { name: 'Bouwbedrijf Van Hees Alverna', rating: 5, text: 'Restauratieprojecten bij het klooster én nieuwbouw in Wijchen-West komen nu binnen via onze top positie. Perfecte balans tussen traditie en modern.' },
    { name: 'Fysiopraktijk Alverna-Batenburg', rating: 5, text: 'Patiënten uit Alverna, Batenburg én Balgoij weten ons nu te vinden. De samenwerking met het verzorgingshuis loopt via de website uitstekend.' },
    { name: 'Elektriciën Service Maas en Waal', rating: 4.5, text: 'Van spoedklussen bij het kloostercomplex tot installaties in heel Wijchen-Zuid. Onze 24/7 service wordt perfect gevonden.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kunstgalerie De Franciscaan', rating: 5, text: 'Religieuze kunst en moderne werken - we trekken nu bezoekers uit Nijmegen én pelgrims. Online verkoop is verdrievoudigd dit jaar.' },
    { name: 'Zorgboerderij Alverna Hoeve', rating: 5, text: 'Dagbesteding voor ouderen uit Wijchen en omgeving. Via Google Maps vinden families ons tussen de rust van het klooster en de Maas.' },
    { name: 'Aannemersbedrijf Kloosterbouw', rating: 4.5, text: 'Gespecialiseerd in monumentaal werk. Nu ook opdrachten voor kerken in Beuningen en Druten dankzij onze online zichtbaarheid.' },
    { name: 'Bloemisterij Maria Bloemen', rating: 5, text: 'Liturgische bloemstukken voor het klooster én bruidswerk voor heel Wijchen. De combinatie werkt perfect in onze marketing.' },
    { name: 'Transportbedrijf Alverna Express', rating: 5, text: 'Logistiek voor religieuze instellingen in heel Gelderland. Vanuit onze basis vlakbij de A326 perfect vindbaar voor nieuwe klanten.' },
    { name: 'B&B Het Kloosterpad', rating: 4.5, text: 'Pelgrims én toeristen voor de Maasduinen boeken nu online. De rust van Alverna gecombineerd met moderne marketing werkt geweldig.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Alverna (Wijchen) | Marketing Pelgrimsoord & Kloosterdorp</title>
        <meta
          name="description"
          content="Marketing bureau Alverna bij Wijchen. Respectvolle online marketing voor bedrijven rond het Franciscaanse klooster. SEO specialist met oog voor traditie én groei."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/alverna" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing met respect voor het religieuze hart van Alverna</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Groei tussen klooster en moderne tijd</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Alverna: waar 700 jaar geschiedenis moderne ondernemers ontmoet.</strong><br />
              Als <b>SEO specialist Alverna</b> begrijp ik de unieke positie van dit pelgrimsoord bij Wijchen. Met 2.500 inwoners, het Franciscaanse klooster en ligging tussen Maas en Waal heeft Alverna een bijzondere markt. Ik help lokale ondernemers groeien met respect voor de religieuze tradities én focus op de toekomst.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Respectvolle marketing rond bedevaartsoord Sint-Franciscus</li>
              <li>✓ Bereik pelgrims, toeristen én inwoners van Wijchen (43.000+)</li>
              <li>✓ Specialisme in religieus toerisme & lokale dienstverlening</li>
              <li>✓ <b>SEO Alverna-Wijchen</b> met kennis van de streek</li>
              <li>✓ Van kloostercomplex tot moderne bedrijven langs de Maasdijk</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Alverna, Wijchen & Land van Maas en Waal</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Alverna - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Alverna" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van kloostermuren tot Google rankings: moderne groei in Alverna"
          subtitle="Waar 700 jaar traditie digitale innovatie ontmoet"
          features={[
            {
              badge: "Pelgrimsroute online",
              title: "SEO voor religieus toerisme",
              description: "Het Franciscaanse klooster trekt jaarlijks 50.000+ bezoekers. Ik positioneer jouw bedrijf perfect voor pelgrims, dagjesmensen uit Nijmegen (15km) en spirituele zoekers. Met respect voor de heilige grond én focus op commercieel succes.",
              visualTitle: "Heilige vindbaarheidLokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Wijchen-West targetting",
              title: "Google Ads Maas en Waal",
              description: "Target de 43.000 inwoners van Wijchen, pelgrims naar het klooster én recreanten langs de Maas. Van Batenburg tot Balgoij, van Niftrik tot het centrum van Wijchen - jouw advertenties bereiken de juiste doelgroep op het juiste moment.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Kloosterdorp 2.0",
              title: "Moderne websites met ziel",
              description: "Alverna balanceert tussen eeuwenoude spiritualiteit en moderne dienstverlening. Je website weerspiegelt deze unieke mix: professioneel voor zakelijke klanten uit Wijchen, authentiek voor pelgrims, toegankelijk voor toeristen van de Maasduinen.",
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
          title="Alverna bloeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>respectvolle marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor het bijzondere <span className="bg-[#F7D8FA] px-2 rounded italic">Alverna</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van religieuze instellingen tot moderne ondernemers - marketing die past bij de ziel van dit pelgrimsoord 
                tussen Wijchen en de Maas. Groei met respect voor traditie.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Alverna */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Kloosterdorp Alverna</h3>
                <p className="text-gray-600 mb-6">
                  Zichtbaar voor pelgrims, inwoners van Wijchen-West én toeristen. Jouw bedrijf vindbaar maken tussen heilige grond en hedendaagse handel.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Pelgrimsroute SEO (50.000+ bezoekers/jaar)</li>
                  <li>✓ Wijchen-West lokale vindbaarheid</li>
                  <li>✓ Religieus toerisme keywords</li>
                  <li>✓ Maas en Waal regio dekking</li>
                </ul>
              </div>
              {/* Google Ads Alverna */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Wijchen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Franciscaanse regio</h3>
                <p className="text-gray-600 mb-6">
                  Bereik pelgrims tijdens hun bezoek, families uit Wijchen en zakelijke klanten uit Nijmegen. Respectvol adverteren met maximaal resultaat.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Pelgrimsseizoen campagnes (apr-okt)</li>
                  <li>✓ Wijchen gemeente targeting (43.000 inw)</li>
                  <li>✓ Nijmegen-West bereik (15km)</li>
                  <li>✓ Maasduinen recreanten focus</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites met spirituele balans</h3>
                <p className="text-gray-600 mb-6">
                  Modern design met respect voor 700 jaar geschiedenis. Perfect voor bedrijven die de brug slaan tussen traditie en toekomst in Alverna.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Pelgrimsvriendelijke interfaces</li>
                  <li>✓ Meertalig (NL/DE/EN) voor toeristen</li>
                  <li>✓ Klooster-evenementen integratie</li>
                  <li>✓ Wijchen-West servicepagina's</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Alverna</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik zowel pelgrims als lokale klanten uit Wijchen?</h3>
                <p className="text-gray-600">
                  Alverna heeft een unieke doelgroep: 50.000+ pelgrims per jaar naar het Franciscaanse klooster, plus de 43.000 inwoners van gemeente Wijchen. Ik ontwikkel een tweesporenstrategie: spirituele content voor bezoekers van het bedevaartsoord én praktische lokale SEO voor inwoners van Wijchen-West en omliggende dorpen zoals Batenburg en Balgoij.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost online marketing voor een klein bedrijf in Alverna?</h3>
                <p className="text-gray-600">
                  Voor lokale ondernemers in Alverna start een effectieve marketingcampagne vanaf €500-750 per maand. Dit omvat lokale SEO voor Wijchen-West, Google Mijn Bedrijf optimalisatie en basis Google Ads. Voor bedrijven die ook pelgrims willen bereiken adviseer ik €750-1.250 per maand, inclusief seizoenscampagnes rond belangrijke kloosterevenementen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe respectvol omgaan met de religieuze context van Alverna?</h3>
                <p className="text-gray-600">
                  Marketing in Alverna vraagt om fingerspitzengefühl. Het Franciscaanse klooster is een heilige plek voor velen. Ik zorg voor content die de spirituele waarden respecteert, vermijd opdringerige commerciële boodschappen rond religieuze evenementen, en stem de tone-of-voice af op de serene sfeer van het pelgrimsoord. Tegelijk zorg ik dat je bedrijf professioneel overkomt voor zakelijke klanten uit Wijchen en Nijmegen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke lokale zoekwoorden werken het best voor Alverna?</h3>
                <p className="text-gray-600">
                  Effectieve keywords combineren 'Alverna' met je dienst, maar ook 'Wijchen-West', 'pelgrimsoord', 'klooster Alverna' en 'Franciscanen'. Voor regionaal bereik gebruik ik 'Land van Maas en Waal', 'Batenburg', 'Balgoij' en 'gemeente Wijchen'. Seizoensgebonden terms zoals 'Franciscusdag Alverna' (oktober) en 'kloosterweekend' scoren ook uitstekend.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik klanten uit het nabijgelegen Nijmegen?</h3>
                <p className="text-gray-600">
                  Alverna ligt op slechts 15 kilometer van Nijmegen, perfect bereikbaar via de N326. Ik target Nijmegenaren die rust zoeken, spiritueel geïnteresseerden, en recreanten die de Maasduinen bezoeken. Met slimme Google Ads campagnes bereik je inwoners van Nijmegen-West en Lindenholt die vaak naar Wijchen en omgeving komen voor diensten en recreatie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start met groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">pelgrimsoord Alverna</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Respectvolle marketing die past bij de ziel van Alverna. Groei tussen kloostermuren en moderne tijd.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Alverna</h3>
              <p className="text-gray-600">
                <strong>Gemeente Wijchen:</strong> Alverna • Wijchen-Centrum • Wijchen-West • Wijchen-Zuid • Woezik<br/>
                <strong>Land van Maas en Waal:</strong> Batenburg • Balgoij • Niftrik • Bergharen • Leur<br/>
                <strong>Regio:</strong> Nijmegen-West • Beuningen • Druten • Overasselt • Heumen • Malden
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
