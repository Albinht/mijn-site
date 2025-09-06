import Head from 'next/head'
import Header from '../../../components/header'
import Hero from '../../../components/Hero'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Geert Hanzestad",
    business: "Hanzestad Bouwhistorie",
    rating: 5,
    review: "Perfect voor ons historisch bouwbedrijf! Dankzij Niblah restaureren we nu monumenten door heel Overijssel. Onze expertise in historische bouwkunde wordt gevonden door eigenaren van karakteristieke panden."
  },
  {
    name: "Marieke IJsselkade",
    business: "Restaurant De IJsselkade",
    rating: 5,
    review: "Geweldig voor ons restaurant aan de rivier! We krijgen veel meer toeristen die Kampen's Hanzesteden historie komen ontdekken. Onze IJssel-vis specialiteiten zijn een grote trekpleister."
  },
  {
    name: "Henk van der Kogge",
    business: "Van der Kogge Antiek",
    rating: 5,
    review: "Onze antiekhandel profiteert enorm van de online zichtbaarheid. Verzamelaars uit heel Nederland vinden nu onze authentieke Hanze-periode stukken en historische objecten."
  },
  {
    name: "Sandra Stadshaven",
    business: "B&B Stadshaven",
    rating: 5,
    review: "Door de sterke online aanwezigheid boeken cultuurtoeristen uit heel Nederland bij ons. Onze historische B&B in het centrum zit vol met geschiedenisliefhebbers."
  },
  {
    name: "Rob Koopman",
    business: "Koopman Scheepvaartdiensten",
    rating: 5,
    review: "Fantastische resultaten voor onze binnenvaart service! We bedienen nu schippers op de hele IJssel route en krijgen opdrachten voor onderhouds- en reparatiewerk."
  },
  {
    name: "Anja Stadspoort",
    business: "Stadspoort Reisgids",
    rating: 5,
    review: "Onze stadswandelingen en historische tours worden nu geboekt door bezoekers uit heel Nederland die Kampen's rijke Hanzegeschiedenis willen ontdekken."
  }
]

const dutchMoreReviews = [
  {
    name: "Dirk Windmolen",
    business: "Windmolen Timmerwerk",
    rating: 5,
    review: "Perfect voor ons traditionele timmerbedrijf! We maken nu historische kozijnen en restaureren houten gevels door heel de IJsselstreek en ver daarbuiten."
  },
  {
    name: "Linda Bovenkerk",
    business: "Bovenkerk Kunst & Cultuur",
    rating: 5,
    review: "Geweldige impact voor onze culturele activiteiten! Onze exposities over Kampen's historie en kunstenaars trekken nu bezoekers uit heel Oost-Nederland."
  },
  {
    name: "Tom Ijsselbrug",
    business: "IJsselbrug Techniek",
    rating: 5,
    review: "Onze technische diensten worden nu gevonden door bedrijven langs de hele IJssel. Van Kampen tot Deventer helpen we met installaties en onderhoud."
  },
  {
    name: "Petra Hanzegeest",
    business: "Hanzegeest Evenementen",
    rating: 5,
    review: "Door de online marketing organiseren we nu historische evenementen en Hanze-themed feesten voor klanten door heel Nederland die authentieke belevenissen zoeken."
  },
  {
    name: "Marcel Stadsmuur",
    business: "Stadsmuur Restauratie",
    rating: 5,
    review: "Ons gespecialiseerde restauratiebedrijf krijgt nu opdrachten voor historische gebouwen door heel Nederland. Onze expertise in monumentenzorg is zeer gewild."
  },
  {
    name: "Annemieke Koggeschip",
    business: "Koggeschip Consultancy",
    rating: 5,
    review: "Perfect voor mijn adviesbureau! Ik help nu gemeenten en organisaties door heel Nederland met cultureel erfgoed projecten en toerisme ontwikkeling."
  }
]

export default function KampenPage() {
  const features = [
    {
      title: "Historische Marketing Kampen",
      description: "Gespecialiseerde marketing voor bedrijven die profiteren van Kampen's rijke Hanzegeschiedenis. Van monumentenrestauratie tot cultureel toerisme - we helpen je zichtbaar worden voor klanten die authentieke Nederlandse geschiedenis waarderen en zoeken naar kwaliteit met traditie."
    },
    {
      title: "IJsselstreek SEO",
      description: "Regionale SEO strategie voor bedrijven langs de IJssel tussen Kampen en Deventer. We zorgen dat je bedrijf gevonden wordt door klanten in heel de IJsselstreek, van watersport tot zakelijke dienstverlening aan de rivier."
    },
    {
      title: "Cultuurtoerisme Marketing",
      description: "Marketing voor bedrijven die culturele en historische toeristen bedienen. Van hotels tot gidsen, van restaurants tot winkels - we helpen je profiteren van bezoekers die Kampen's Hanzesteden charme komen ontdekken."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Kampen kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke positie van Kampen als historische Hanzestad aan de IJssel. Met circa 54.000 inwoners en een rijke geschiedenis combineert Kampen cultureel erfgoed met moderne ondernemingszin. Ik help bedrijven groeien door in te spelen op zowel historische authenticiteit als hedendaagse marketing kansen."
    },
    {
      question: "Wat kost SEO in Kampen?",
      answer: "SEO prijzen voor Kampen starten vanaf €650 per maand voor lokale bedrijven. Voor bedrijven die regionale dekking zoeken in de IJsselstreek of zich richten op cultuurtoerisme bieden we pakketten vanaf €950 per maand. Gespecialiseerde historische bedrijven kunnen profiteren van niche marketing vanaf €850 per maand."
    },
    {
      question: "Hoe trek ik cultuurtoeristen aan naar Kampen?",
      answer: "We optimaliseren voor termen zoals 'Hanzestad bezoeken', 'historisch Kampen', 'cultuur IJsselstreek' en 'monumenten Nederland'. Plus seizoensgebonden content rond historische evenementen, Hanzedagen en culturele festiviteiten."
    },
    {
      question: "Welke bedrijven in Kampen hebben SEO nodig?",
      answer: "Vooral bedrijven die profiteren van toerisme (hotels, restaurants, gidsen), historisch gespecialiseerde diensten (restauratie, antiek, ambacht), watergebonden bedrijven (jachthavens, watersport), en lokale dienstverlening die regionale uitbreiding zoekt."
    },
    {
      question: "Werkt historische marketing online?",
      answer: "Absoluut! Mensen zoeken online naar 'historische stadjes Nederland', 'monumenten restauratie' en 'authentieke overnachting'. We combineren Kampen's rijke geschiedenis met moderne SEO technieken voor maximale zichtbaarheid."
    },
    {
      question: "Hoe belangrijk is seizoensmarketing?",
      answer: "Zeer belangrijk voor Kampen! Toerisme piekt in zomer en rond historische evenementen. We ontwikkelen seizoensgebonden campagnes die inspelen op Hanzedagen, cultuur evenementen en historische festiviteiten door het jaar heen."
    },
    {
      question: "Kunnen jullie helpen met regionale uitbreiding?",
      answer: "Ja, Kampen ligt strategisch aan de IJssel met goede verbindingen naar Zwolle en Apeldoorn. We helpen bedrijven hun bereik uitbreiden naar heel de IJsselstreek en Oost-Nederland door gerichte regionale SEO."
    },
    {
      question: "Wat maakt Kampen marketing uniek?",
      answer: "De combinatie van Hanzegeschiedenis, IJsselligging en authentieke Nederlandse cultuur maakt Kampen bijzonder. Succesvolle marketing hier benadrukt kwaliteit, traditie, vakmanschap en de unieke historische setting aan de rivier."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Kampen | Online Marketing Bureau Overijssel</title>
        <meta name="description" content="SEO specialist in Kampen en Overijssel. Verhoog je online zichtbaarheid voor historische stad aan de IJssel. Lokale expertise voor traditionele en moderne bedrijven." />
        <meta name="keywords" content="SEO Kampen, online marketing Kampen, SEO specialist Overijssel, marketing bureau Kampen" />
        <link rel="canonical" href="https://niblah.com/marketing/kampen" />
      </Head>
      
      <Header location="Kampen" />
      
      <Hero 
        title="Digital Marketing Agency Kampen"
        subtitle="Jouw online marketing partner aan de IJssel"
        description="Kampen, de prachtige Hanzestad met circa 54.000 inwoners aan de IJssel, staat symbool voor de rijke Nederlandse handelsgeschiedenis en architectonische schoonheid. Met haar imposante stadsgezicht, historische binnenstad en strategische ligging tussen Zwolle en het IJsselmeer biedt deze gemeente unieke kansen voor bedrijven die traditie willen combineren met moderne groei. Als specialist in digitale marketing voor historische steden begrijp ik hoe bedrijven in Kampen kunnen profiteren van zowel de sterke cultuurtoeristische aantrekkingskracht als de gunstige ligging aan de IJssel. Van monumentenrestaurateurs tot moderne dienstverleners - ik help jouw bedrijf groeien door slim in te spelen op de authentieke charme en rijke geschiedenis van deze bijzondere Hanzestad waar verleden en toekomst harmonieus samenvloeien."
        ctaText="Zet koers naar groei"
        ctaLink="#contact"
      />

      <FeatureSection 
        features={features}
        title="Online Marketing Diensten Kampen"
        subtitle="Gespecialiseerd in historische en culturele marketing"
      />

      <ReviewSlider reviews={dutchReviews.concat(dutchMoreReviews)} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Kampen Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Historische Expertise</h3>
                <p className="text-gray-700">
                  Diepe kennis van cultureel erfgoed marketing en historische bedrijven. We begrijpen hoe je de rijke 
                  Hanzegeschiedenis van Kampen inzet voor moderne marketing doeleinden zonder de authenticiteit te verliezen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Cultuurtoerisme Focus</h3>
                <p className="text-gray-700">
                  Specialistische ervaring met toerisme marketing voor historische bestemmingen. Van monumentenliefhebbers 
                  tot geschiedenisfans - we weten hoe je de juiste bezoekers naar Kampen trekt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">IJsselstreek Kennis</h3>
                <p className="text-gray-700">
                  Uitgebreide kennis van de IJsselstreek economie en water-gerelateerde bedrijven. Van binnenvaart 
                  tot watersport - we helpen bedrijven profiteren van de strategische rivierpositie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Authentiek & Modern</h3>
                <p className="text-gray-700">
                  Expertise in het combineren van authentieke Kamper tradities met moderne marketing technieken. 
                  We helpen bedrijven groeien zonder hun historische karakter en lokale identiteit te verliezen.
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
              Veelgestelde Vragen SEO Kampen
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

      <ContactForm 
        title="Zet Koers naar Online Groei in Kampen"
        subtitle="Klaar om te profiteren van Kampen's unieke historie en ligging? Neem contact op voor een vrijblijvende analyse van je groeimogelijkheden."
      />

      <Footer 
        location="Kampen"
        serviceArea="Actief in Kampen en omliggende gemeenten"
        areas={["Zwolle", "Dronten", "Elburg", "Oldebroek", "Hattem"]}
      />
    </>
  )
}