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
    name: "Patricia van der Meer",
    business: "Consultancy Van der Meer",
    rating: 5,
    review: "Perfect voor onze B2B consultancy in Rijswijk! We krijgen nu leads van overheidsorganisaties en internationale bedrijven uit de Den Haag regio. Onze LinkedIn en SEO strategie werkt uitstekend."
  },
  {
    name: "Robert Jansen",
    business: "Jansen Legal Services",
    rating: 5,
    review: "Als juridisch dienstverlener in de government sector was het lastig om online gevonden te worden. Nu staan we bovenaan bij zoekopdrachten naar 'juridisch advies overheid' en hebben veel meer klanten."
  },
  {
    name: "Monica Verhoeven",
    business: "International Business Center",
    rating: 5,
    review: "Onze business center trekt nu veel meer internationale bedrijven aan die zich in de Den Haag regio willen vestigen. De meertalige SEO aanpak werkt fantastisch voor onze doelgroep."
  },
  {
    name: "Thomas Bakker",
    business: "Bakker IT Solutions",
    rating: 5,
    review: "Geweldige resultaten voor onze IT dienstverlening! We bedienen nu overheidsorganisaties en internationale bedrijven in heel Zuid-Holland. B2B leads zijn verdrievoudigd."
  },
  {
    name: "Sabine de Wit",
    business: "Executive Search De Wit",
    rating: 5,
    review: "Onze recruitment firma wordt nu gevonden door zowel kandidaten als bedrijven in de government en internationale sector. Perfect voor onze niche in de Den Haag regio."
  },
  {
    name: "Marco Hendricks",
    business: "Hendricks Facility Management",
    rating: 5,
    review: "Door de lokale SEO focus krijgen we nu contracten van overheidsinstellingen en bedrijven in Rijswijk en Den Haag. Onze omzet is met 50% gestegen!"
  }
]

const dutchMoreReviews = [
  {
    name: "Elena Rodriguez",
    business: "International Tax Advisory",
    rating: 5,
    review: "Perfect voor onze belastingadvies firma! We helpen nu internationale bedrijven die zich vestigen in Nederland. De expertise in internationale SEO is onmisbaar."
  },
  {
    name: "Joost van Bergen",
    business: "Van Bergen Translations",
    rating: 5,
    review: "Onze vertaalservice wordt nu gevonden door overheidsorganisaties en internationale bedrijven. Vooral de focus op government sector heeft ons veel nieuwe klanten opgeleverd."
  },
  {
    name: "Linda Smits",
    business: "Corporate Training Solutions",
    rating: 5,
    review: "Geweldig! Onze trainingen voor overheid en bedrijfsleven worden nu veel beter gevonden online. We trainen nu teams door heel Zuid-Holland."
  },
  {
    name: "David Chen",
    business: "Chen Engineering Consultancy",
    rating: 5,
    review: "Als technisch adviseur krijg ik nu opdrachten van zowel overheid als private sector. De B2B SEO strategie heeft mijn klantenbestand enorm uitgebreid."
  },
  {
    name: "Natalie Broers",
    business: "Government Relations Broers",
    rating: 5,
    review: "Onze lobby- en relatieadvies firma staat nu bovenaan bij relevante zoekopdrachten. Perfect voor onze gespecialiseerde dienstverlening aan de government sector."
  },
  {
    name: "Alexander Kools",
    business: "Kools Security Services",
    rating: 5,
    review: "Uitstekende resultaten voor onze beveiligingsdiensten! We bedienen nu zowel overheidsinstellingen als internationale bedrijven in de Den Haag regio."
  }
]

export default function MarketingRijswijk() {

  const faqItems = [
    {
      question: "Waarom SEO specialist Rijswijk kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke business omgeving van Rijswijk in de Den Haag regio. Met circa 54.000 inwoners en strategisch gelegen naast Den Haag, is Rijswijk een belangrijke hub voor overheid, internationale organisaties en professionele dienstverlening. Ik help bedrijven zichtbaar worden in deze concurrentieke B2B markt."
    },
    {
      question: "Wat kost B2B SEO in Rijswijk?",
      answer: "B2B SEO voor Rijswijk start vanaf €1200 per maand vanwege de hoge waarde van government en international business leads. Voor bedrijven die internationale klanten willen bereiken of zich richten op overheidscontracten bieden we uitgebreidere pakketten vanaf €1850 per maand."
    },
    {
      question: "Hoe bereik ik overheidsorganisaties online?",
      answer: "We gebruiken een gespecialiseerde aanpak voor government marketing: optimalisatie voor overheid-specifieke zoektermen, LinkedIn B2B campaigns, en content die aansluit bij aanbesteding procedures. Plus lokale SEO voor Den Haag government district zichtbaarheid."
    },
    {
      question: "Welke bedrijven in Rijswijk hebben SEO nodig?",
      answer: "Vooral consultancy firms, juridische dienstverleners, IT-bedrijven, facility management, recruitment agencies, accounting firms, en alle bedrijven die government of international business bedienen. Ook startups die toegang zoeken tot de Den Haag business community."
    },
    {
      question: "Werkt LinkedIn marketing in Rijswijk?",
      answer: "Absoluut cruciaal! LinkedIn is essentieel voor B2B marketing in Rijswijk vanwege de hoge concentratie professionals, government officials en international business executives. We integreren LinkedIn Ads met SEO voor maximale business visibility."
    },
    {
      question: "Hoe belangrijk is content marketing voor B2B?",
      answer: "Zeer belangrijk in de Rijswijk/Den Haag business omgeving. We ontwikkelen thought leadership content, whitepapers en case studies die aansluiten bij government en international business needs. Content die vertrouwen opbouwt in professionele kringen."
    },
    {
      question: "Kunnen jullie helpen met internationale klanten?",
      answer: "Ja, we hebben uitgebreide ervaring met marketing voor de internationale business community in Den Haag regio. Meertalige SEO, cultural sensitive content, en targeting van specific international business segments en ambassades."
    },
    {
      question: "Wat maakt Rijswijk B2B marketing uniek?",
      answer: "De nabijheid van government institutions, international organizations, en de hoge concentratie professionals maakt Rijswijk uniek. We moeten marketing doen die aansluit bij professional standards, government procedures, en internationale business cultuur."
    }
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Rijswijk | Marketing Bureau & Online Marketing Rijswijk</title>
        <meta
          name="description"
          content="SEO Specialist Rijswijk voor B2B marketing. Verhoog online zichtbaarheid voor government sector en internationale bedrijven in Den Haag regio. Professional marketing diensten."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/rijswijk" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Rijswijk: Government & International Business Hub</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Waar overheid en business elkaar ontmoeten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Rijswijk: strategisch gelegen tussen Den Haag en Delft, het kloppend hart van government affairs en internationale business.</strong><br />
              Met 54.000+ inwoners, directe nabijheid van ministeries, ambassades en internationale hoofdkantoren biedt Rijswijk unieke kansen voor professionele dienstverleners. Als <b>SEO specialist Rijswijk</b> help ik bedrijven groeien in deze dynamische B2B markt waar government sector en international business samenkomen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ B2B SEO Rijswijk: bereik government organisaties</li>
              <li>✓ LinkedIn Marketing: connect met decision makers</li>
              <li>✓ Speciaal voor consultancy, legal en professional services</li>
              <li>✓ <b>SEO Rijswijk</b> met internationale en government focus</li>
              <li>✓ Websites die professionals overtuigen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis B2B strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk B2B cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Rijswijk & Den Haag government district</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Rijswijk - B2B Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Rijswijk" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer B2B klanten in Rijswijk met professionele marketing"
          subtitle="Government sector en internationale business marketing"
          features={[
            {
              badge: "B2B SEO Rijswijk",
              title: "SEO Specialist Rijswijk",
              description: "Wil je echt groeien in de Rijswijk B2B markt? Ik zorg dat je gevonden wordt door government organisaties, internationale bedrijven en professional services. Gespecialiseerde aanpak voor de Den Haag regio.",
              visualTitle: "Government zichtbaarheid",
              visualSubtitle: "Professional bereik",
              image: masterSeoImage
            },
            {
              badge: "LinkedIn & B2B Ads",
              title: "B2B Marketing Rijswijk",
              description: "Direct leads van government officials en international business executives. LinkedIn Ads en Google Ads gericht op decision makers in de Den Haag government en business community.",
              visualTitle: "Executive targeting",
              visualSubtitle: "Quality leads",
              image: keywordResearchImage
            },
            {
              badge: "Professional Webdesign",
              title: "Marketing Bureau Rijswijk",
              description: "Websites die vertrouwen uitstralen bij government sector en internationale klanten. Professioneel design, compliance-ready en geoptimaliseerd voor B2B conversies in de Rijswijk/Den Haag markt.",
              visualTitle: "Professional websites",
              visualSubtitle: "B2B conversies",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE B2B KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Rijswijk B2B bedrijven groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>Professional Marketing</span> door Albin"
        />

        {/* FAQ SECTION */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Veelgestelde Vragen B2B SEO Rijswijk
              </h2>
              <div className="space-y-6">
                {[
                  {
                    question: "Waarom SEO specialist Rijswijk kiezen voor B2B marketing?",
                    answer: "Als SEO specialist begrijp ik de unieke business omgeving van Rijswijk in de Den Haag regio. Met circa 54.000 inwoners en strategisch gelegen naast Den Haag, is Rijswijk een belangrijke hub voor overheid, internationale organisaties en professionele dienstverlening. Ik help bedrijven zichtbaar worden in deze concurrentieke B2B markt."
                  },
                  {
                    question: "Wat kost B2B SEO in Rijswijk?",
                    answer: "B2B SEO voor Rijswijk start vanaf €1200 per maand vanwege de hoge waarde van government en international business leads. Voor bedrijven die internationale klanten willen bereiken of zich richten op overheidscontracten bieden we uitgebreidere pakketten vanaf €1850 per maand."
                  },
                  {
                    question: "Hoe bereik ik overheidsorganisaties online?",
                    answer: "We gebruiken een gespecialiseerde aanpak voor government marketing: optimalisatie voor overheid-specifieke zoektermen, LinkedIn B2B campaigns, en content die aansluit bij aanbesteding procedures. Plus lokale SEO voor Den Haag government district zichtbaarheid."
                  },
                  {
                    question: "Welke bedrijven in Rijswijk hebben SEO nodig?",
                    answer: "Vooral consultancy firms, juridische dienstverleners, IT-bedrijven, facility management, recruitment agencies, accounting firms, en alle bedrijven die government of international business bedienen. Ook startups die toegang zoeken tot de Den Haag business community."
                  },
                  {
                    question: "Werkt LinkedIn marketing in Rijswijk?",
                    answer: "Absoluut cruciaal! LinkedIn is essentieel voor B2B marketing in Rijswijk vanwege de hoge concentratie professionals, government officials en international business executives. We integreren LinkedIn Ads met SEO voor maximale business visibility."
                  },
                  {
                    question: "Hoe belangrijk is content marketing voor B2B?",
                    answer: "Zeer belangrijk in de Rijswijk/Den Haag business omgeving. We ontwikkelen thought leadership content, whitepapers en case studies die aansluiten bij government en international business needs. Content die vertrouwen opbouwt in professionele kringen."
                  },
                  {
                    question: "Kunnen jullie helpen met internationale klanten?",
                    answer: "Ja, we hebben uitgebreide ervaring met marketing voor de internationale business community in Den Haag regio. Meertalige SEO, cultural sensitive content, en targeting van specific international business segments en ambassades."
                  },
                  {
                    question: "Wat maakt Rijswijk B2B marketing uniek?",
                    answer: "De nabijheid van government institutions, international organizations, en de hoge concentratie professionals maakt Rijswijk uniek. We moeten marketing doen die aansluit bij professional standards, government procedures, en internationale business cultuur."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">B2B SEO Specialist Rijswijk</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Rijswijk government en international business markt – altijd professioneel advies en directe communicatie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Voor een professioneel strategiegesprek over B2B marketing in Rijswijk.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp business</h3>
                <p className="text-gray-600 mb-4">Snel schakelen? Direct WhatsApp voor business communicatie.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Rijswijk - B2B Marketing Rijswijk & Den Haag Regio</h3>
              <p className="text-gray-600">
                Rijswijk Centrum • Government District • En natuurlijk ook actief in: Den Haag • Delft • Voorburg • Leidschendam • Wassenaar • Zuid-Holland business corridor
              </p>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}