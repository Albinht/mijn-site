import Head from 'next/head'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Peter van den Berg",
    company: "Bossche Bouwmaterialen",
    location: "Den Bosch",
    text: "Door lokale SEO staan we nu bovenaan voor 'bouwmaterialen Den Bosch'. Klanten uit Vught en Rosmalen vinden ons veel beter!",
    rating: 5,
    service: "Lokale SEO"
  },
  {
    name: "Maria Hendrix", 
    company: "Restaurant De Peperbus",
    location: "Den Bosch Centrum",
    text: "Perfecte Google Ads campagne! Onze reserveringen uit Den Bosch en omliggende plaatsen zijn met 250% gestegen tijdens Jazz in Duketown.",
    rating: 5,
    service: "Google Ads & Evenement Marketing"
  },
  {
    name: "Johan Smits",
    company: "Advocatenkantoor Smits", 
    location: "Den Bosch",
    text: "SEO-optimalisatie heeft ons kantoor echt op de kaart gezet in Brabant. We krijgen nu klanten uit heel 's-Hertogenbosch en omstreken.",
    rating: 5,
    service: "SEO voor Dienstverlening"
  },
  {
    name: "Lisa de Jong",
    company: "Schoonheidssalon Bella",
    location: "Den Bosch",
    text: "Social media marketing heeft onze bekendheid in de Bossche gemeenschap enorm vergroot. Instagram campagnes lopen fantastisch!",
    rating: 5,
    service: "Social Media Marketing"
  },
  {
    name: "Kees Janssen",
    company: "Garage Central Den Bosch",
    location: "Den Bosch",
    text: "Website optimalisatie heeft geleid tot meer klanten uit Den Bosch, Vught en Rosmalen. ROI van onze marketing is verdrievoudigd!",
    rating: 5,
    service: "Website Optimalisatie"
  },
  {
    name: "Sandra Vermeulen",
    company: "Boetiek Mode & Zo",
    location: "Den Bosch Centrum",
    text: "Dankzij e-commerce SEO verkopen we nu ook online aan klanten uit heel Noord-Brabant. Omzet gestegen met 180%!",
    rating: 5,
    service: "E-commerce SEO"
  }
]

const dutchMoreReviews = [
  {
    name: "Rob Cornelissen",
    company: "Cornelissen Installaties",
    location: "Den Bosch",
    text: "Top resultaten met lokale SEO. Staan nu op positie 1 voor 'loodgieter Den Bosch' en krijgen veel meer klanten.",
    rating: 5,
    service: "Lokale SEO"
  },
  {
    name: "Inge van der Meer",
    company: "Kapsalon Hair Affairs",
    location: "Den Bosch", 
    text: "Facebook marketing heeft ons veel nieuwe klanten opgeleverd uit de hele regio. Zeer tevreden!",
    rating: 5,
    service: "Social Media"
  },
  {
    name: "Marcel Driessen",
    company: "Driessen Administratie",
    location: "Den Bosch",
    text: "Professionele aanpak van onze online marketing. Meer mkb-klanten uit Den Bosch en omgeving dan ooit.",
    rating: 5,
    service: "B2B Marketing"
  },
  {
    name: "Annemarie Peters",
    company: "Wellness Center De Bossche Bron",
    location: "Den Bosch",
    text: "Google Ads voor wellnessdiensten loopt uitstekend. Veel meer boekingen van klanten uit heel Brabant.",
    rating: 5,
    service: "Google Ads"
  },
  {
    name: "Tim Coolen",
    company: "Coolen Marketing Support",
    location: "Den Bosch",
    text: "Website redesign en SEO hebben onze online zichtbaarheid in Den Bosch enorm verbeterd. Aanrader!",
    rating: 5,
    service: "Website & SEO"
  },
  {
    name: "Esther van Gestel",
    company: "Kinderopvang De Bossche Bengels",
    location: "Den Bosch",
    text: "Lokale online marketing heeft onze wachtlijst voor kinderopvang flink laten groeien in de regio.",
    rating: 5,
    service: "Lokale Marketing"
  }
]

export default function DenBoschPage() {
  const features = [
    {
      title: "SEO Den Bosch - Domineer Noord-Brabant",
      description: "Zorg dat jouw bedrijf bovenaan staat wanneer inwoners van 's-Hertogenbosch, Vught, Rosmalen en heel Noord-Brabant zoeken naar jouw diensten. Van het historische centrum rond de Sint-Jan tot de moderne bedrijventerreinen, we optimaliseren voor alle belangrijke zoektermen in de Bossche regio."
    },
    {
      title: "Google Ads Brabant - Gerichte Campagnes",
      description: "Bereik potentiële klanten in Den Bosch en omliggende gemeenten zoals Vught, Rosmalen, Berlicum en Oss met strategische advertentiecampagnes. We richten ons op de lokale markt, van bezoekers van het Noordbrabants Museum tot ondernemers in de Brabantse Ontwikkelingsmaatschappij."
    },
    {
      title: "Social Media Marketing voor Bossche Bedrijven", 
      description: "Versterk jouw online aanwezigheid op Facebook en Instagram met content die aanslaat bij de Brabantse gemeenschap. Van evenementen zoals Jazz in Duketown tot het bruisende nachtleven in de Korte Putstraat, we weten hoe we jouw doelgroep in Den Bosch bereiken."
    }
  ]

  const faqItems = [
    {
      question: "Waarom kiezen voor een SEO specialist in Den Bosch?",
      answer: "Als hoofdstad van Noord-Brabant heeft Den Bosch een unieke positie met rijke historie, sterke economie en een mix van toerisme en zakelijke activiteiten. Onze lokale kennis van wijken zoals De Muntel, Maaspoort en het centrum helpt ons jouw SEO-strategie perfect af te stemmen op de Brabantse markt."
    },
    {
      question: "Wat zijn de kosten voor SEO in Den Bosch?",
      answer: "SEO in Den Bosch start vanaf €750 per maand, afhankelijk van de concurrentie in jouw sector en de gewenste zoektermen. Voor lokale bedrijven die vooral Den Bosch en omliggende gemeenten bedienen, hebben we ook kosteffectieve pakketten vanaf €500."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie in Brabant?",
      answer: "Voor lokale zoektermen zoals 'bedrijfsnaam Den Bosch' zie je vaak binnen 2-3 maanden verbetering. Voor competitieve termen in de Brabantse markt kan het 4-6 maanden duren. We monitoren voortgang via rankings voor belangrijke Den Bosch-gerelateerde zoektermen."
    },
    {
      question: "Welke voordelen heeft lokale SEO in Noord-Brabant?",
      answer: "Lokale SEO in Noord-Brabant zorgt ervoor dat je vindbaar bent voor zoektermen zoals 'dienst Den Bosch', 'bedrijf Vught' of 'specialist Brabant'. Dit is cruciaal voor bedrijven die hun klantenkring willen uitbreiden in de hele provincie, van Tilburg tot Oss."
    },
    {
      question: "Hoe meet je succes van online marketing in Den Bosch?",
      answer: "We meten succes aan de hand van lokale rankings, website bezoekers uit Brabant, telefoontjes en e-mails van potentiële klanten uit Den Bosch en omgeving. Daarnaast monitoren we conversies en ROI van Google Ads campagnes gericht op de Brabantse markt, inclusief toeristische periodes."
    },
    {
      question: "Wat maakt Den Bosch uniek voor online marketing?",
      answer: "Den Bosch combineert historische charme met moderne economie. De stad trekt veel toeristen (Hieronymus Bosch, Sint-Jan) en heeft een sterke zakelijke sector. Dit biedt unieke kansen voor zowel B2C als B2B marketing, van horeca tot professionele dienstverlening."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Den Bosch - Online Marketing Bureau Noord-Brabant | Niblah</title>
        <meta name="description" content="SEO specialist Den Bosch ✓ Lokale online marketing Noord-Brabant ✓ Meer klanten uit 's-Hertogenbosch & Brabant ✓ Gratis SEO-analyse" />
        <meta name="keywords" content="seo specialist den bosch, online marketing brabant, google ads den bosch, website optimalisatie hertogenbosch" />
        <meta property="og:title" content="SEO Specialist Den Bosch - Online Marketing Bureau Noord-Brabant" />
        <meta property="og:description" content="Professionele SEO en online marketing diensten in Den Bosch. Vergroot jouw online zichtbaarheid in Noord-Brabant met bewezen strategieën." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SEO Specialist Den Bosch - Online Marketing Bureau Noord-Brabant" />
        <meta name="twitter:description" content="Professionele SEO en online marketing diensten in Den Bosch. Vergroot jouw online zichtbaarheid in Noord-Brabant." />
        <link rel="canonical" href="https://niblah.com/marketing/den-bosch" />
      </Head>

      <div className="min-h-screen bg-white">
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Digital Marketing Agency Den Bosch
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                SEO Specialist & Online Marketing Bureau Noord-Brabant
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Versterk jouw online aanwezigheid in 's-Hertogenbosch en heel Noord-Brabant. Van het historische centrum met de imposante Sint-Jan tot de moderne bedrijventerreinen - wij zorgen dat jouw bedrijf vindbaar is waar het ertoe doet. Met 155.000+ inwoners, een rijke geschiedenis en als economisch centrum van Brabant biedt Den Bosch enorme kansen voor ondernemers die weten hoe ze online zichtbaar moeten zijn.
              </p>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Gratis SEO-Analyse Den Bosch
              </a>
            </div>
          </div>
        </section>

        <FeatureSection 
          features={features}
          title="Online Marketing Diensten Den Bosch"
          subtitle="Bewezen strategieën voor Brabantse ondernemers"
        />

        <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Waarom Kiezen Voor Online Marketing in Den Bosch?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Lokale Marktkennis Brabant</h3>
                  <p className="text-gray-600">
                    We kennen de Brabantse markt door en door. Van de historische binnenstad met haar vele toeristen tot de zakelijke centra 
                    en bedrijventerreinen, we weten precies hoe we jouw doelgroep in Den Bosch en omliggende gemeenten zoals Vught, Rosmalen en Oss kunnen bereiken.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Historische Stad, Moderne Marketing</h3>
                  <p className="text-gray-600">
                    Den Bosch combineert rijke geschiedenis met moderne economie. We helpen zowel traditionele bedrijven als innovatieve startups 
                    om hun online aanwezigheid te versterken en te profiteren van zowel lokale klanten als de vele toeristen die de stad bezoeken.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Strategische Locatie in Brabant</h3>
                  <p className="text-gray-600">
                    Als hoofdstad van Noord-Brabant heeft Den Bosch een strategische positie. We optimaliseren niet alleen voor lokale zoektermen, 
                    maar ook voor provinciale termen, zodat je klanten trekt uit heel Brabant, van Tilburg tot Eindhoven.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Meetbare Resultaten</h3>
                  <p className="text-gray-600">
                    We leveren concrete resultaten: meer websitebezoekers uit Den Bosch en omgeving, hogere rankings voor Brabantse zoektermen, 
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
                Veelgestelde Vragen - SEO Den Bosch
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
          title="Klaar om te groeien in Den Bosch?"
          subtitle="Ontvang een gratis SEO-analyse van jouw website en ontdek hoe je meer klanten uit Noord-Brabant kunt aantrekken."
          ctaButtonText="Vraag Gratis SEO-Analyse Aan"
        />
      </div>
    </>
  )
}