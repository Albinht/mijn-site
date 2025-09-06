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

const dutchReviews = [
  {
    name: "Piet van Gestel",
    business: "Van Gestel Metaalbewerking",
    rating: 5,
    text: "Perfect voor ons metaalbedrijf in Oosterhout! We krijgen nu opdrachten uit heel Noord-Brabant. Van Breda tot Den Bosch - onze werkplaats draait op volle toeren dankzij de online zichtbaarheid."
  },
  {
    name: "Marlies Coolen",
    business: "Restaurant De Brabantse Tafel",
    rating: 5,
    text: "Geweldig! Ons restaurant wordt nu gevonden door gasten uit Tilburg, Breda en zelfs Eindhoven. Vooral onze Brabantse specialiteiten trekken veel bezoekers aan via online zoeken."
  },
  {
    name: "Joris Vermeulen",
    business: "Vermeulen Bouw & Onderhoud",
    rating: 5,
    text: "Onze bouwfirma profiteert enorm van de regionale SEO aanpak. We realiseren nu projecten door heel Midden-Brabant en hebben een volle planning tot ver in het jaar."
  },
  {
    name: "Sandra van den Heuvel",
    business: "Schoonheidsstudio Van den Heuvel",
    rating: 5,
    text: "Door de lokale marketing komen klanten uit Oosterhout, Waalwijk en Tilburg voor behandelingen. Mijn studio zit vol en ik kan me focussen op wat ik het liefst doe."
  },
  {
    name: "Henk Janssen",
    business: "Janssen Technische Installaties",
    rating: 5,
    text: "Fantastische resultaten voor onze installatiefirma! We installeren nu CV, airco en duurzame energie systemen door heel de regio tussen Breda en Den Bosch."
  },
  {
    name: "Inge Kamps",
    business: "Kamps Mode & Lifestyle",
    rating: 5,
    text: "Onze boetiek in Oosterhout trekt nu klanten uit heel Noord-Brabant. Online vinden ze ons, offline komen ze genieten van onze persoonlijke service en unieke collectie."
  }
]

const dutchMoreReviews = [
  {
    name: "Tom van Boxtel",
    business: "Van Boxtel Transport",
    rating: 5,
    text: "Perfect voor ons transportbedrijf! We rijden nu lading door heel Nederland en krijgen vrachten via online aanvragen. Onze vloot is optimaal benut."
  },
  {
    name: "Linda Driessen",
    business: "Driessen Administratie & Advies",
    rating: 5,
    text: "Geweldige impact voor mijn administratiekantoor! Ik help nu mkb ondernemers door heel Midden-Brabant met hun boekhouding en belastingzaken."
  },
  {
    name: "Rick van Mierlo",
    business: "Van Mierlo Autoservice",
    rating: 5,
    text: "Onze garage staat nu bovenaan bij 'APK Oosterhout' en 'autogarage Noord-Brabant'. We hebben meer klanten dan ooit en onze service wordt zeer gewaardeerd."
  },
  {
    name: "Petra Willems",
    business: "Fysiotherapie Willems",
    rating: 5,
    text: "Door de sterke online aanwezigheid krijg ik patiënten uit Oosterhout, Waalwijk en Tilburg. Mijn praktijk zit vol en ik kan me specialiseren in sportfysiotherapie."
  },
  {
    name: "Marcel de Bruin",
    business: "De Bruin Tuinontwerp",
    rating: 5,
    text: "Ons tuinbedrijf realiseert nu droomtuinen door heel Noord-Brabant. Van moderne strakke tuinen tot natuurlijke landschapstuin - we hebben voor elk wat wils."
  },
  {
    name: "Annemiek Rovers",
    business: "Rovers Juridisch Advies",
    rating: 5,
    text: "Perfect voor mijn advocatenpraktijk! Ik help nu particulieren en bedrijven door heel de regio met juridische vraagstukken en ben goed vindbaar online."
  }
]

export default function MarketingOosterhout() {
  const faqItems = [
    {
      question: "Waarom SEO specialist Oosterhout kiezen?",
      answer: "Als SEO specialist begrijp ik de strategische positie van Oosterhout in Noord-Brabant. Met circa 55.000 inwoners en gelegen tussen grote steden zoals Breda, Tilburg en Den Bosch, biedt Oosterhout unieke kansen voor bedrijven die regionale groei zoeken. Ik help bedrijven profiteren van deze gunstige ligging."
    },
    {
      question: "Wat kost SEO in Oosterhout en omgeving?",
      answer: "SEO prijzen voor bedrijven in Oosterhout starten vanaf €700 per maand voor lokale optimalisatie. Voor regionale campagnes die Noord-Brabant dekken rekenen we vanaf €1100 per maand. Bedrijven die zich richten op zowel lokale als regionale markten kunnen profiteren van hybride pakketten vanaf €950 per maand."
    },
    {
      question: "Hoe profiteer ik van de ligging tussen grote steden?",
      answer: "We ontwikkelen strategieën die inspelen op de voordelen van Oosterhout: minder concurrentie dan in grote steden, maar wel toegang tot grote markten. Klanten uit Breda, Tilburg en Den Bosch zoeken bewust naar kwaliteit in kleinere plaatsen voor persoonlijke service."
    },
    {
      question: "Welke bedrijven in Oosterhout hebben SEO nodig?",
      answer: "Vooral dienstverlening die regionale klanten bedient: bouw, installatie, zakelijke dienstverlening, groothandel, en specialistische retail. Ook horeca en wellness bedrijven die bezoekers uit de regio willen trekken, en bedrijven die willen groeien buiten Oosterhout."
    },
    {
      question: "Hoe werkt regionale marketing vanuit Oosterhout?",
      answer: "We combineren lokale SEO voor Oosterhout met regionale optimalisatie voor Noord-Brabant. Dit betekent zichtbaarheid voor 'dienst Oosterhout' én 'dienst Noord-Brabant', plus targeting van omliggende steden met Google Ads campagnes."
    },
    {
      question: "Is Oosterhout groot genoeg voor online marketing?",
      answer: "Absoluut! Oosterhout heeft een sterke lokale economie en ligt perfect voor regionale uitbreiding. Veel bedrijven hier bedienen klanten tot Breda, Tilburg en Den Bosch. Online marketing helpt je deze natuurlijke reikwijdte optimaal te benutten."
    },
    {
      question: "Hoe belangrijk is Google Mijn Bedrijf voor Oosterhout?",
      answer: "Zeer belangrijk! Google Mijn Bedrijf helpt je gevonden te worden voor lokale zoekopdrachten zoals 'restaurant Oosterhout' maar ook regionale zoekopdrachten zoals 'bouw Noord-Brabant'. We optimaliseren voor beide niveaus."
    },
    {
      question: "Wat maakt marketing in Noord-Brabant bijzonder?",
      answer: "De Brabantse mentaliteit waardeert persoonlijke relaties, kwaliteit en betrouwbaarheid. Succesvolle marketing hier combineert professionele uitstraling met de warme, toegankelijke Brabantse cultuur. We integreren deze waarden in alle online activiteiten."
    }
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Oosterhout | Online Marketing Bureau Noord-Brabant</title>
        <meta name="description" content="SEO specialist in Oosterhout en Noord-Brabant. Verhoog je online zichtbaarheid tussen Breda en Den Bosch. Lokale expertise voor groeiende bedrijven." />
        <meta name="keywords" content="SEO Oosterhout, online marketing Oosterhout, SEO specialist Noord-Brabant, marketing bureau Oosterhout" />
        <link rel="canonical" href="https://niblah.com/marketing/oosterhout" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Oosterhout: Tussen Steden, Bovenaan</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Brabantse ondernemerszin digitaal vertaald</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Oosterhout: waar strategische ligging en Brabantse ondernemerszin elkaar versterken.</strong><br />
              Met 55.000+ inwoners, perfect gelegen tussen Breda, Tilburg en Den Bosch, en een sterke mix van industrie, handel en dienstverlening biedt Oosterhout unieke groeikansen voor ambitieuze bedrijven. Als <b>SEO specialist Oosterhout</b> help ik ondernemers profiteren van deze strategische positie in Noord-Brabant.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Regionale SEO Noord-Brabant: topresultaten van Breda tot Den Bosch</li>
              <li>✓ Google Ads: direct klanten uit heel de regio</li>
              <li>✓ Speciaal voor ambitieuze bedrijven in Oosterhout</li>
              <li>✓ <b>SEO Oosterhout</b> met meetbare regionale groei</li>
              <li>✓ Websites die bezoekers uit heel Noord-Brabant omzetten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis regionale analyse <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Brabantse cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Oosterhout & heel Noord-Brabant</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Oosterhout - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Oosterhout" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Noord-Brabant met regionale marketing"
          subtitle="Van lokale zichtbaarheid tot provinciale groei"
          features={[
            {
              badge: "Regionale SEO",
              title: "SEO Specialist Oosterhout & Noord-Brabant",
              description: "Strategische SEO voor bedrijven in Oosterhout die willen groeien in Noord-Brabant. We zorgen dat je bedrijf gevonden wordt door klanten uit Breda, Tilburg, Den Bosch en alle plaatsen daartussen.",
              visualTitle: "Regionaal bovenaan",
              visualSubtitle: "Noord-Brabant dekking",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Tussen-steden Marketing",
              description: "Unieke positie tussen grote steden biedt kansen voor bedrijven in Oosterhout. We helpen je profiteren van klanten die bewust kiezen voor lokale dienstverlening buiten de drukte.",
              visualTitle: "Strategisch voordeel",
              visualSubtitle: "Minder concurrentie",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Cultuur",
              title: "Brabantse Business Cultuur",
              description: "Marketing die aansluit bij de warme, ondernemende Brabantse cultuur. Van familiebedrijven tot moderne startups - we begrijpen hoe je verbinding maakt met Noord-Brabant.",
              visualTitle: "Brabantse waarden",
              visualSubtitle: "Authentieke connectie",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Oosterhout groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>Regionale SEO</span> door Albin"
        />

        {/* WAAROM BEDRIJVEN KIEZEN VOOR NIBLAH */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Waarom Bedrijven in Oosterhout Kiezen voor Niblah
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Strategische Ligging</h3>
                  <p className="text-gray-700">
                    Diep begrip van de unieke positie van Oosterhout tussen Breda, Tilburg en Den Bosch. 
                    We helpen bedrijven maximaal profiteren van toegang tot grote markten zonder de hoge kosten en concurrentie.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Brabantse Cultuur</h3>
                  <p className="text-gray-700">
                    Kennis van de warme, ondernemende Brabantse mentaliteit. We ontwikkelen marketing die aansluit 
                    bij lokale waarden: persoonlijke service, betrouwbaarheid en kwaliteit boven kwantiteit.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Regionale Expertise</h3>
                  <p className="text-gray-700">
                    Specialistische kennis van marketing in Noord-Brabant. Van lokale SEO tot regionale campagnes - 
                    we weten hoe je groeit van Oosterhout naar heel de provincie.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Tussen-steden Voordeel</h3>
                  <p className="text-gray-700">
                    Unieke expertise in het benutten van de voordelen van ligging tussen grote steden. 
                    Minder concurrentie, lagere kosten, maar wel toegang tot grote klantenkring door slimme marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Veelgestelde Vragen SEO Oosterhout
              </h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Versterk je Positie in <span className="bg-[#F7D8FA] px-2 rounded italic">Noord-Brabant</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Klaar om te groeien vanuit Oosterhout naar heel Noord-Brabant? Neem contact op voor een vrijblijvende analyse van je regionale groeimogelijkheden.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Oosterhout - Online Marketing Noord-Brabant & Omgeving</h3>
              <p className="text-gray-600">
                Oosterhout Centrum • Kerkdriel • Oosteind • Dorst • En natuurlijk ook actief in: Breda • Tilburg • Den Bosch • Waalwijk • Kaatsheuvel • Noord-Brabant regio
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}