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
    name: "Gerrit van der Berg",
    business: "Van der Berg Agrarische Diensten",
    rating: 5,
    text: "Perfect voor ons agrarisch bedrijf! Dankzij Niblah krijgen we nu klanten uit heel Drenthe en zelfs uit Groningen. Boeren vinden ons online voor loonwerk en machineonderhoud."
  },
  {
    name: "Anje Hulshof",
    business: "Restaurant De Drentse Kamer",
    rating: 5,
    text: "Geweldig voor ons restaurant! We krijgen nu veel meer toeristen die de natuur van Drenthe komen bezoeken. Onze streekgerechten en gezellige sfeer trekken gasten aan via online zoeken."
  },
  {
    name: "Jan Willem Smit",
    business: "Smit Bouw & Renovatie",
    rating: 5,
    text: "Onze bouwfirma profiteert enorm van de regionale SEO. We bouwen nu huizen en renoveren boerderijen door heel Zuidwest-Drenthe. Van Hoogeveen tot Meppel."
  },
  {
    name: "Mariska Wolters",
    business: "Natuurgids Drenthe",
    rating: 5,
    text: "Door de online marketing boeken veel meer mensen wandel- en fietstochten door de Drentse natuur. Mijn agenda staat vol met natuurliefhebbers uit heel Nederland."
  },
  {
    name: "Henk Brouwer",
    business: "Brouwer Technische Installaties",
    rating: 5,
    text: "Fantastische resultaten! Ons installatiebedrijf installeert nu duurzame energie systemen door heel Drenthe. Vooral zonnepanelen en warmtepompen lopen als een trein."
  },
  {
    name: "Sandra Koolhaas",
    business: "Koolhaas Dierenspeciaalzaak",
    rating: 5,
    text: "Onze dierenwinkel in Hoogeveen trekt nu klanten uit heel de regio. Van voer voor boerderijdieren tot luxe hondenartikelen - we bedienen stad en platteland."
  }
]

const dutchMoreReviews = [
  {
    name: "Dirk Jansen",
    business: "Jansen Grondverzet",
    rating: 5,
    text: "Perfect voor ons grondverzetbedrijf! We werken nu aan projecten door heel Drenthe - van landbouwprojecten tot natuurherstel. Onze machines staan niet stil."
  },
  {
    name: "Linda Veldhuis",
    business: "Veldhuis Administratie",
    rating: 5,
    text: "Geweldige impact voor mijn administratiekantoor! Ik help nu boeren en kleine bedrijven door heel Zuidwest-Drenthe met hun boekhouding en subsidies."
  },
  {
    name: "Rob Meijer",
    business: "Meijer Machinehandel",
    rating: 5,
    text: "Onze landbouwmachines worden nu gevonden door boeren uit Drenthe, Groningen en Friesland. Zowel nieuwe als tweedehands machines gaan als warme broodjes over de toonbank."
  },
  {
    name: "Petra Huisman",
    business: "Huisman Hoveniersdiensten",
    rating: 5,
    text: "Door de sterke online aanwezigheid ontwerp ik nu tuinen door heel Drenthe. Van boerderij tuinen tot moderne stadse tuinen in Hoogeveen zelf."
  },
  {
    name: "Marcel Wessels",
    business: "Wessels Veevoeding",
    rating: 5,
    text: "Ons veevoederbedrijf bedient nu veehouders door heel Drenthe en Groningen. Online bestellen ze nu onze kwaliteitsvoeding en krijgen snelle levering."
  },
  {
    name: "Annemarie Roos",
    business: "Roos Fysiotherapie",
    rating: 5,
    text: "Perfect voor mijn praktijk! Ik behandel nu patiënten uit Hoogeveen, Meppel en omliggende dorpen. Vooral sporters en mensen met fysiek buitenwerk vinden mij online."
  }
]

export default function HoogeveenPage() {
  const faqItems = [
    {
      question: "Waarom SEO specialist Hoogeveen kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke economie van Hoogeveen en Drenthe. Met circa 55.000 inwoners en een sterke agrarische en toeristische sector combineert Hoogeveen moderne voorzieningen met traditionele Drentse waarden. Ik help bedrijven groeien door slim in te spelen op zowel de lokale markt als bezoekers uit heel Nederland."
    },
    {
      question: "Wat kost SEO voor bedrijven in Drenthe?",
      answer: "SEO prijzen voor Hoogeveen en Drenthe starten vanaf €600 per maand voor lokale optimalisatie. Voor bedrijven in de agrarische sector of toerisme die regionale dekking willen bieden we pakketten vanaf €900 per maand. Seizoensgebonden campagnes voor toerisme starten vanaf €1200 per maand."
    },
    {
      question: "Werkt online marketing voor agrarische bedrijven?",
      answer: "Absoluut! Moderne boeren zoeken online naar 'loonwerk Drenthe', 'veevoer Hoogeveen' of 'landbouwmachines'. We ontwikkelen strategieën die aansluiten bij landbouwcycli en seizoenen, zodat je zichtbaar bent wanneer boeren je diensten het meest nodig hebben."
    },
    {
      question: "Hoe trek ik toeristen aan naar Drenthe?",
      answer: "We richten ons op natuurtoerisme en authentieke Drentse ervaringen. SEO voor termen zoals 'natuurvakantie Drenthe', 'wandelen Hoogeveen' en 'authentiek overnachten'. Plus seizoensgebonden content die inspeelt op verschillende natuuractiviteiten door het jaar heen."
    },
    {
      question: "Kunnen jullie helpen met seizoensgebonden marketing?",
      answer: "Ja, zowel voor agrarische bedrijven (zaai-, groei- en oogstperiodes) als toerisme (lente wandelingen, zomer fietsen, herfst paddenstoelen). We plannen campagnes die aansluiten bij natuurlijke cycli en bezoekerspatronen in Drenthe."
    },
    {
      question: "Is Hoogeveen groot genoeg voor online marketing?",
      answer: "Hoogeveen is de tweede stad van Drenthe en een belangrijke diensten hub voor de hele regio. Veel bedrijven hier bedienen klanten tot Meppel, Emmen en zelfs Groningen. Online marketing helpt je deze natuurlijke reikwijdte optimaal benutten."
    },
    {
      question: "Hoe werkt Google Mijn Bedrijf voor plattelandsbedrijven?",
      answer: "Zeer belangrijk voor lokale zichtbaarheid. We optimaliseren voor zowel lokale zoekopdrachten ('garage Hoogeveen') als regionale ('loonwerk Drenthe'). Plus speciale aandacht voor mobiel zoeken, omdat veel mensen onderweg naar het platteland zoeken."
    },
    {
      question: "Wat maakt Drenthe marketing uniek?",
      answer: "Drenthe heeft een sterke identiteit rond natuur, authenticiteit en rust. Succesvolle marketing respecteert deze waarden en benadrukt kwaliteit, traditie en natuurverbondenheid. We combineren dit met moderne online technieken voor maximaal bereik."
    }
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Hoogeveen | Online Marketing Bureau Drenthe</title>
        <meta name="description" content="SEO specialist in Hoogeveen en Drenthe. Verhoog je online zichtbaarheid in natuur en agrarische sector. Lokale expertise voor ondernemend Drenthe." />
        <meta name="keywords" content="SEO Hoogeveen, online marketing Hoogeveen, SEO specialist Drenthe, marketing bureau Hoogeveen" />
        <link rel="canonical" href="https://niblah.com/marketing/hoogeveen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Hoogeveen: Drenthe's Regionale Motor</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Waar traditionele waarden moderne groei ontmoeten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Hoogeveen: het kloppende hart van Zuidwest-Drenthe en economische motor van de regio.</strong><br />
              Met 55.000+ inwoners, strategische ligging tussen natuur en voorzieningen, sterke agrarische basis en groeiende toeristische sector biedt Hoogeveen uitstekende kansen voor ondernemers. Als <b>SEO specialist Hoogeveen</b> help ik bedrijven profiteren van Drenthe's unieke combinatie van authentieke plattelandseconomie en moderne mogelijkheden.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Hoogeveen: topresultaten in hele regio Drenthe</li>
              <li>✓ Google Ads: directe klanten uit agrarische en toeristische sector</li>
              <li>✓ Specialisatie in plattelandsbedrijven en natuurtoerisme</li>
              <li>✓ <b>SEO Hoogeveen</b> met focus op seizoenspatronen</li>
              <li>✓ Websites die Drentse authenticiteit uitstralen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Drentse cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Hoogeveen & heel Drenthe</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Hoogeveen - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Hoogeveen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Drenthe met authentieke marketing"
          subtitle="Regionale groei die aansluit bij Drentse waarden"
          features={[
            {
              badge: "Agrarische SEO",
              title: "SEO Specialist Agrarische Sector",
              description: "Gespecialiseerde SEO voor agrarische bedrijven in Hoogeveen en heel Drenthe. We zorgen dat je bedrijf gevonden wordt door boeren, veehouders en loonwerkers uit de hele provincie, afgestemd op landbouwcycli en seizoenen.",
              visualTitle: "Agrarisch bovenaan",
              visualSubtitle: "Heel Drenthe bereiken",
              image: masterSeoImage
            },
            {
              badge: "Natuur Marketing",
              title: "Toerisme & Natuurbeleving Marketing",
              description: "Marketing voor bedrijven die profiteren van Drenthe's prachtige natuur. Van B&B's tot natuurgidsen - we helpen je bezoekers trekken die authentieke Drentse landschappen willen ontdekken.",
              visualTitle: "Natuurtoerisme boost",
              visualSubtitle: "Seizoensmarketing",
              image: keywordResearchImage
            },
            {
              badge: "Authentiek Online",
              title: "Platteland naar Online Succes",
              description: "Expertise in het online brengen van traditionele plattelandsbedrijven zonder verlies van authenticiteit. We helpen Drentse ondernemers hun bereik uitbreiden met respect voor lokale waarden.",
              visualTitle: "Tradities + Tech",
              visualSubtitle: "Authentiek groeien",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Hoogeveen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>authentieke SEO & Marketing</span>"
        />

        {/* WHY CHOOSE SECTION */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Waarom Bedrijven in Hoogeveen Kiezen voor Niblah
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Agrarische Expertise</h3>
                  <p className="text-gray-700">
                    Diepe kennis van de agrarische sector in Drenthe. We begrijpen landbouwcycli, seizoenspatronen 
                    en hoe boeren online zoeken naar diensten. Van loonwerk tot veevoer - we weten hoe je agrarische klanten bereikt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Natuurtoerisme Focus</h3>
                  <p className="text-gray-700">
                    Specialistische kennis van natuurtoerisme en recreatie in Drenthe. We helpen bedrijven profiteren 
                    van bezoekers die de authentieke Drentse natuur en rust opzoeken.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Authentiek Drenthe</h3>
                  <p className="text-gray-700">
                    Begrip van de Drentse mentaliteit en waarden: kwaliteit, betrouwbaarheid en natuurverbondenheid. 
                    We ontwikkelen marketing die authentiek aanvoelt en respecteert wat Drenthe bijzonder maakt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Platteland Digitalisering</h3>
                  <p className="text-gray-700">
                    Expertise in het digitaliseren van traditionele plattelandsbedrijven zonder verlies van authenticiteit. 
                    We combineren moderne online marketing met respect voor tradities en lokale waarden.
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
                Veelgestelde Vragen SEO Hoogeveen
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Hoogeveen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in het hart van Drenthe – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Hoogeveen - Online Marketing Hoogeveen & Omgeving</h3>
              <p className="text-gray-600">
                Actief in Hoogeveen en omliggende gemeenten • Meppel • Emmen • Assen • Coevorden • De Wolden • Westerveld • Heel Drenthe
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}