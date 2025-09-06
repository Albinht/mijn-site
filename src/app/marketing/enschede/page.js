import Head from 'next/head'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Mark Jansen",
    company: "TechnoTwente BV",
    location: "Enschede",
    text: "Dankzij de SEO-aanpak zijn we nu vindbaar voor 'automatisering Enschede'. Onze online aanvragen uit Twente zijn met 180% gestegen.",
    rating: 5,
    service: "SEO & Online Marketing"
  },
  {
    name: "Linda Scholten", 
    company: "Mode Boutique Enschede",
    location: "Enschede Centrum",
    text: "Perfect advies voor onze webshop! De Google Ads campagne voor Enschede en omgeving heeft onze verkoop verdriedubbeld.",
    rating: 5,
    service: "Google Ads & E-commerce"
  },
  {
    name: "Pieter Hendriks",
    company: "Twentse Bouwgroep", 
    location: "Enschede",
    text: "Lokale SEO heeft ons bedrijf in Enschede echt op de kaart gezet. We krijgen nu regelmatig klanten uit heel Twente.",
    rating: 5,
    service: "Lokale SEO"
  },
  {
    name: "Sandra de Vries",
    company: "Restaurant Het Koetshuis",
    location: "Enschede Centrum",
    text: "Social media marketing heeft onze reserveringen uit Enschede en omliggende gemeenten enorm verhoogd. Topresultaat!",
    rating: 5,
    service: "Social Media Marketing"
  },
  {
    name: "Tom Wessels",
    company: "Fitness First Enschede",
    location: "Enschede",
    text: "Dankzij de marketing strategie hebben we veel nieuwe leden uit Twente kunnen aantrekken. ROI van 320% behaald!",
    rating: 5,
    service: "Performance Marketing"
  },
  {
    name: "Anja Bos",
    company: "Schoonheidssalon Twente",
    location: "Enschede",
    text: "De website optimalisatie en lokale SEO hebben geleid tot 40% meer klanten uit Enschede en Hengelo.",
    rating: 5,
    service: "Website Optimalisatie"
  }
]

const dutchMoreReviews = [
  {
    name: "Rob van der Berg",
    company: "Twentse Installatiedienst",
    location: "Enschede",
    text: "Uitstekende begeleiding bij online marketing. Zitten nu op pagina 1 voor 'installateur Enschede'.",
    rating: 5,
    service: "SEO"
  },
  {
    name: "Els Kamps",
    company: "Kapsalon Trendy",
    location: "Enschede Centrum", 
    text: "Facebook en Instagram marketing heeft ons veel nieuwe klanten opgeleverd uit heel Twente.",
    rating: 5,
    service: "Social Media"
  },
  {
    name: "Jan Mollema",
    company: "Mollema Advocaten",
    location: "Enschede",
    text: "Professionele aanpak van onze online zichtbaarheid. Meer cliënten uit Enschede en omgeving.",
    rating: 5,
    service: "Online Marketing"
  },
  {
    name: "Kim Janssen",
    company: "Beauty Center Twente",
    location: "Enschede",
    text: "Google Ads campagne loopt perfect. Veel meer afspraken van klanten uit Enschede en Oldenzaal.",
    rating: 5,
    service: "Google Ads"
  },
  {
    name: "Paul Rietman",
    company: "Garage Rietman",
    location: "Enschede",
    text: "Website staat nu hoger in Google voor 'autogarage Enschede'. Meer klanten dan ooit!",
    rating: 5,
    service: "Lokale SEO"
  },
  {
    name: "Marie Dijkstra",
    company: "Twentse Cateringservice",
    location: "Enschede",
    text: "Online marketing heeft onze bekendheid in Enschede en omliggende dorpen enorm vergroot.",
    rating: 5,
    service: "Digital Marketing"
  }
]

export default function EnschedePage() {
  const features = [
    {
      title: "SEO Enschede - Domineer de Twentse Markt",
      description: "Zorg dat jouw bedrijf bovenaan staat wanneer inwoners van Enschede, Oldenzaal en heel Twente zoeken naar jouw diensten. Van het bruisende centrum rond de Oude Markt tot de innovatieve bedrijven op het Kennispark, we optimaliseren voor alle belangrijke zoektermen in de regio."
    },
    {
      title: "Google Ads Twente - Gerichte Campagnes",
      description: "Bereik potentiële klanten in Enschede en omliggende gemeenten zoals Hengelo, Almelo en Oldenzaal met strategische advertentiecampagnes. We richten ons op de lokale markt, van studenten aan de Universiteit Twente tot ondernemers in de TechniekPact-regio."
    },
    {
      title: "Social Media Marketing voor Twentse Bedrijven", 
      description: "Versterk jouw online aanwezigheid op Facebook en Instagram met content die aanslaat bij de Twentse gemeenschap. Van culturele evenementen in het Muziekcentrum Enschede tot bedrijfsnetwerken op de UT campus, we weten hoe we jouw doelgroep bereiken."
    }
  ]

  const faqItems = [
    {
      question: "Waarom kiezen voor een SEO specialist in Enschede?",
      answer: "Als grootste stad van Twente heeft Enschede een unieke markt met zowel studenten, ondernemers als innovatieve tech-bedrijven. Onze lokale kennis van wijken zoals Pathmos, Deppenbroek en het centrum helpt ons jouw SEO-strategie perfect af te stemmen op de Twentse markt."
    },
    {
      question: "Wat zijn de kosten voor SEO in Enschede?",
      answer: "SEO in Enschede start vanaf €800 per maand, afhankelijk van de concurrentie in jouw sector en de gewenste zoektermen. Voor lokale bedrijven die vooral Enschede en omliggende gemeenten bedienen, hebben we ook kosteffectieve pakketten vanaf €500."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie?",
      answer: "Voor lokale zoektermen zoals 'bedrijfsnaam Enschede' zie je vaak binnen 2-3 maanden verbetering. Voor competitieve termen in de Twentse markt kan het 4-6 maanden duren. We monitoren voortgang via rankings voor belangrijke Enschede-gerelateerde zoektermen."
    },
    {
      question: "Welke voordelen heeft lokale SEO in Twente?",
      answer: "Lokale SEO in Twente zorgt ervoor dat je vindbaar bent voor zoektermen zoals 'dienst Enschede', 'bedrijf Hengelo' of 'specialist Twente'. Dit is cruciaal voor bedrijven die hun klantenkring willen uitbreiden in de hele regio, van Oldenzaal tot Almelo."
    },
    {
      question: "Hoe meet je succes van online marketing in Enschede?",
      answer: "We meten succes aan de hand van lokale rankings, website bezoekers uit Twente, telefoontjes en e-mails van potentiële klanten uit Enschede en omgeving. Daarnaast monitoren we conversies en ROI van Google Ads campagnes gericht op de Twentse markt."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Enschede - Online Marketing Bureau Twente | Niblah</title>
        <meta name="description" content="SEO specialist Enschede ✓ Lokale online marketing voor Twentse bedrijven ✓ Meer klanten uit Enschede, Hengelo & Twente ✓ Gratis SEO-scan" />
        <meta name="keywords" content="seo specialist enschede, online marketing twente, google ads enschede, website optimalisatie enschede" />
        <meta property="og:title" content="SEO Specialist Enschede - Online Marketing Bureau Twente" />
        <meta property="og:description" content="Professionele SEO en online marketing diensten in Enschede. Vergroot jouw online zichtbaarheid in Twente met bewezen strategieën." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SEO Specialist Enschede - Online Marketing Bureau Twente" />
        <meta name="twitter:description" content="Professionele SEO en online marketing diensten in Enschede. Vergroot jouw online zichtbaarheid in Twente." />
        <link rel="canonical" href="https://niblah.com/marketing/enschede" />
      </Head>

      <div className="min-h-screen bg-white">
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Digital Marketing Agency Enschede
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                SEO Specialist & Online Marketing Bureau Twente
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Versterk jouw online aanwezigheid in Enschede en heel Twente. Van het innovatieve Kennispark tot het historische centrum - wij zorgen dat jouw bedrijf vindbaar is waar het ertoe doet. Met 160.000+ inwoners en een bloeiende tech-sector biedt Enschede enorme kansen voor ondernemers die weten hoe ze online zichtbaar moeten zijn.
              </p>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Gratis SEO-Analyse Enschede
              </a>
            </div>
          </div>
        </section>

        <FeatureSection 
          features={features}
          title="Online Marketing Diensten Enschede"
          subtitle="Bewezen strategieën voor Twentse ondernemers"
        />

        <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Waarom Kiezen Voor Online Marketing in Enschede?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Lokale Marktkennis Twente</h3>
                  <p className="text-gray-600">
                    We kennen de Twentse markt door en door. Van de studentenpopulatie aan de UT tot de innovatieve bedrijven op Kennispark Twente, 
                    we weten precies hoe we jouw doelgroep in Enschede en omliggende gemeenten zoals Hengelo, Oldenzaal en Almelo kunnen bereiken.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Gerichte SEO Strategieën</h3>
                  <p className="text-gray-600">
                    Onze SEO-aanpak is specifiek afgestemd op de Enschedese markt. We optimaliseren voor lokale zoektermen en zorgen dat je vindbaar 
                    bent voor klanten uit alle wijken: van Pathmos tot Deppenbroek, van het centrum tot Roombeek.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Tech & Innovatie Hub</h3>
                  <p className="text-gray-600">
                    Enschede staat bekend als innovatiestad met sterke tech-sector. We helpen zowel traditionele bedrijven als innovative startups 
                    om hun online aanwezigheid te versterken en deel te nemen aan de digitale economie van Twente.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Meetbare Resultaten</h3>
                  <p className="text-gray-600">
                    We leveren concrete resultaten: meer websitebezoekers uit Enschede, hogere rankings voor Twentse zoektermen, 
                    en uiteindelijk meer klanten en omzet voor jouw bedrijf in de regio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Veelgestelde Vragen - SEO Enschede
              </h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactForm 
          title="Klaar om te groeien in Enschede?"
          subtitle="Ontvang een gratis SEO-analyse van jouw website en ontdek hoe je meer klanten uit Twente kunt aantrekken."
          ctaButtonText="Vraag Gratis SEO-Analyse Aan"
        />
      </div>
    </>
  )
}