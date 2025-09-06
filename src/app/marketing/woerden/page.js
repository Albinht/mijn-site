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
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Klaas Kaasboer",
    business: "Kaasboerderij De Woerdense Wei",
    rating: 5,
    review: "Perfect voor onze kaasboerderij! Dankzij Niblah verkopen we nu onze biologische kazen aan klanten door heel Nederland. Onze webshop loopt als een trein en toeristen vinden onze boerderijwinkel."
  },
  {
    name: "Marieke van der Polder",
    business: "Restaurant Het Groene Hart",
    rating: 5,
    review: "Geweldig voor ons streekrestaurant! We krijgen veel meer gasten die authentiek Hollands eten zoeken. Onze kaasspecialiteiten en lokale producten trekken bezoekers uit de hele Randstad."
  },
  {
    name: "Henk Weidemolen",
    business: "Weidemolen Agrarische Diensten",
    rating: 5,
    review: "Fantastische resultaten voor onze loonwerkorganisatie! Boeren uit het hele Groene Hart vinden ons nu voor oogstwerk, grondbewerking en veevoer transport."
  },
  {
    name: "Sandra Poldergroen",
    business: "Poldergroen Tuincentrum",
    rating: 5,
    review: "Onze tuinderij en plantencentrum profiteert enorm van de online zichtbaarheid. Klanten uit Utrecht, Amsterdam en Den Haag komen voor onze kwaliteitsplanten en tuinadvies."
  },
  {
    name: "Rob van der Sloot",
    business: "Van der Sloot Melkveehouderij",
    rating: 5,
    review: "Door de digitale marketing kunnen we nu direct aan consumenten verkopen. Onze verse zuivelproducten worden besteld door gezinnen die kwaliteit en herkomst belangrijk vinden."
  },
  {
    name: "Anja Groeneweg",
    business: "Groeneweg B&B",
    rating: 5,
    review: "Onze bed & breakfast in het Groene Hart zit vol met stadsgangers die rust zoeken. Via online boekingen krijgen we gasten die de polderlandschappen en natuur willen ontdekken."
  }
]

const dutchMoreReviews = [
  {
    name: "Dirk Polderman",
    business: "Polderman Bouw & Onderhoud",
    rating: 5,
    review: "Perfect voor onze bouwfirma! We realiseren nu projecten van karakteristieke boerderijen tot moderne woningen door heel het Groene Hart en omstreken."
  },
  {
    name: "Linda Veenweide",
    business: "Veenweide Dierenarts",
    rating: 5,
    review: "Geweldige impact voor onze grote dieren praktijk! Veehouders door heel West-Nederland roepen ons nu in voor rundvee, paarden en schapengezondheidszorg."
  },
  {
    name: "Tom Landelijk",
    business: "Landelijk Technische Installaties",
    rating: 5,
    review: "Onze installatiefirma installeert nu duurzame systemen van boerderijen tot recreatieparken. Vooral zonnepanelen en warmtepompen zijn zeer populair in het Groene Hart."
  },
  {
    name: "Petra Weidebloem",
    business: "Weidebloem Evenementen",
    rating: 5,
    review: "We organiseren nu authentieke landelijke bruiloften en bedrijfsfeesten door heel het Groene Hart. Onze unieke locaties trekken stellen uit de hele Randstad aan."
  },
  {
    name: "Marcel Hoevezicht",
    business: "Hoevezicht Makelaardij",
    rating: 5,
    review: "Onze gespecialiseerde agrarische makelaardij helpt nu boeren en investeerders door heel Nederland. Van boerderijverkoop tot grondtransacties."
  },
  {
    name: "Annemieke Koeienwei",
    business: "Koeienwei Kinderopvang",
    rating: 5,
    review: "Perfect voor onze buitenschoolse opvang op de boerderij! Ouders uit steden rond het Groene Hart willen hun kinderen laten opgroeien tussen de dieren en natuur."
  }
]

export default function WoerdenPage() {
  const features = [
    {
      title: "Agrarische SEO Groene Hart",
      description: "Gespecialiseerde SEO voor agrarische bedrijven in Woerden en het Groene Hart. Van kaasboerderijen tot biologische kwekerijen - we zorgen dat je bedrijf gevonden wordt door consumenten die kwaliteit en herkomst waarderen. Perfect voor directe verkoop en agrarisch toerisme."
    },
    {
      title: "Streekproducten Marketing",
      description: "Marketing voor bedrijven die authentieke Hollandse streekproducten produceren of verkopen. Van kaas tot bloemen, van verse zuivel tot seizoensgroenten - we helpen je bereiken van klanten die lokale kwaliteit zoeken in heel West-Nederland."
    },
    {
      title: "Landelijke Dienstverlening SEO",
      description: "SEO strategie voor bedrijven die de agrarische sector bedienen in het Groene Hart. Van loonwerk tot veterinaire zorg - we zorgen dat boeren en tuinders je gemakkelijk kunnen vinden voor alle diensten die zij nodig hebben."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Woerden kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke positie van Woerden in het Groene Hart van Holland. Met circa 52.000 inwoners en gelegen tussen Utrecht, Alphen en Gouda combineert Woerden agrarische traditie met moderne voorzieningen. Ik help bedrijven groeien door in te spelen op zowel lokale gemeenschap als stedelijke klanten die kwaliteit zoeken."
    },
    {
      question: "Wat kost SEO voor agrarische bedrijven?",
      answer: "SEO prijzen voor Woerden starten vanaf €600 per maand voor lokale agrarische bedrijven. Voor boerderijen die directe verkoop willen opbouwen of agrarisch toerisme ontwikkelen bieden we pakketten vanaf €850 per maand. E-commerce voor streekproducten start vanaf €1100 per maand."
    },
    {
      question: "Hoe verkoop ik agrarische producten online?",
      answer: "We ontwikkelen e-commerce strategieën voor directe verkoop van boerderij naar consument. SEO voor 'biologische kaas online', 'verse melk bezorging' en 'lokale groenten bestellen'. Plus marketing die de verhalen en kwaliteit achter je producten benadrukt."
    },
    {
      question: "Werkt agrarisch toerisme marketing?",
      answer: "Absoluut! Veel stedelijke families zoeken authentieke ervaringen. We optimaliseren voor 'boerderij bezoeken', 'kaas maken workshop', 'kinderfeestje boerderij' en seizoensactiviteiten zoals lammetjes knuffelen of appels plukken."
    },
    {
      question: "Hoe bereik ik klanten in de Randstad?",
      answer: "Het Groene Hart ligt perfect tussen Amsterdam, Utrecht en Den Haag. We richten campagnes op stedelijke klanten die lokale kwaliteit zoeken: 'verse producten Utrecht', 'biologische leverancier Amsterdam', 'agrarisch uitje Den Haag'."
    },
    {
      question: "Kunnen jullie helpen met seizoensmarketing?",
      answer: "Ja, agrarische bedrijven hebben sterke seizoenspatronen. We plannen campagnes rond oogstperiodes, feestdagen (Pasen, kerst), schoolvakanties voor kinderactiviteiten, en seizoensproducten zoals asperges, aardbeien of kerstbomen."
    },
    {
      question: "Is Woerden groot genoeg voor online marketing?",
      answer: "Woerden ligt strategisch in het Groene Hart met uitstekende bereikbaarheid. Veel bedrijven hier bedienen klanten tot Utrecht, Alphen, Gouda en zelfs Amsterdam. Online marketing helpt je dit natuurlijke bereik optimaal benutten."
    },
    {
      question: "Wat maakt Groene Hart marketing bijzonder?",
      answer: "Het Groene Hart staat voor authentieke Nederlandse agrarische cultuur, kwaliteit en vakmanschap. Succesvolle marketing benadrukt herkomst, verhalen achter producten, duurzaamheid en de persoonlijke connectie tussen producent en consument."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Woerden | Online Marketing Bureau Groene Hart</title>
        <meta name="description" content="SEO specialist in Woerden en het Groene Hart. Verhoog je online zichtbaarheid voor kaas, landbouw en lokale bedrijven in West-Nederland." />
        <meta name="keywords" content="SEO Woerden, online marketing Woerden, SEO specialist Groene Hart, marketing bureau Woerden" />
        <link rel="canonical" href="https://niblah.com/marketing/woerden" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Woerden: Hart van het Groene Hart</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Agrarische traditie ontmoet digitale innovatie</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Woerden: waar authentieke Nederlandse agrarische cultuur en moderne ondernemerschap samenkomen in het hart van het Groene Hart.</strong><br />
              Met 52.000+ inwoners, strategische ligging tussen Utrecht, Alphen en Gouda, en sterke agrarische traditie biedt Woerden unieke kansen voor lokale ondernemers. Als <b>SEO specialist Woerden</b> help ik bedrijven groeien in deze prachtige stad waar kwaliteit en herkomst voorop staan.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Woerden: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Woerden</li>
              <li>✓ Speciaal voor agrarische bedrijven en lokale dienstverleners</li>
              <li>✓ <b>SEO Woerden</b> met meetbaar resultaat</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Woerden & Groene Hart</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Woerden - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Woerden" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Woerden met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie voor agrarische bedrijven"
          features={[
            {
              badge: "SEO Woerden",
              title: "SEO Specialist Woerden",
              description: "Wil je echt groeien in het Groene Hart? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Woerden",
              description: "Direct aanvragen van inwoners uit Woerden en omgeving. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Woerden",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet. Volledig geoptimaliseerd voor de agrarische markt.",
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
          title="Woerden groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Woerden Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Agrarische Expertise</h3>
                <p className="text-gray-700">
                  Diepe kennis van agrarische marketing en directe verkoop strategieën. We begrijpen de cyclussen, 
                  seizoenen en uitdagingen van boerderijbedrijven en helpen ze succesvol online te gaan.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Streekproducten Focus</h3>
                <p className="text-gray-700">
                  Specialistische ervaring met marketing voor authentieke lokale producten. Van kaas tot bloemen - 
                  we weten hoe je verhalen vertelt die stedelijke consumenten aanspreken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Groene Hart Positie</h3>
                <p className="text-gray-700">
                  Begrip van de strategische ligging tussen grote steden. We helpen bedrijven hun bereik uitbreiden 
                  naar Utrecht, Amsterdam, Den Haag en andere stedelijke markten die kwaliteit waarderen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Authentiek & Toegankelijk</h3>
                <p className="text-gray-700">
                  Expertise in het presenteren van traditionele bedrijven op moderne, toegankelijke wijze. 
                  We combineren authentieke verhalen met professionele online marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Veelgestelde Vragen SEO Woerden
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Woerden</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Woerden – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Woerden - Online Marketing Woerden & Groene Hart</h3>
              <p className="text-gray-600">
                Woerden Centrum • Het Groene Hart • En natuurlijk ook actief in: Utrecht • Gouda • Alphen aan den Rijn • Bodegraven • Nieuwegein
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}