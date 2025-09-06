import Head from 'next/head'
import Header from '../../../components/header'
import Hero from '../../../components/Hero'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Gerrit van der Berg",
    business: "Van der Berg Agrarische Diensten",
    rating: 5,
    review: "Perfect voor ons agrarisch bedrijf! Dankzij Niblah krijgen we nu klanten uit heel Drenthe en zelfs uit Groningen. Boeren vinden ons online voor loonwerk en machineonderhoud."
  },
  {
    name: "Anje Hulshof",
    business: "Restaurant De Drentse Kamer",
    rating: 5,
    review: "Geweldig voor ons restaurant! We krijgen nu veel meer toeristen die de natuur van Drenthe komen bezoeken. Onze streekgerechten en gezellige sfeer trekken gasten aan via online zoeken."
  },
  {
    name: "Jan Willem Smit",
    business: "Smit Bouw & Renovatie",
    rating: 5,
    review: "Onze bouwfirma profiteert enorm van de regionale SEO. We bouwen nu huizen en renoveren boerderijen door heel Zuidwest-Drenthe. Van Hoogeveen tot Meppel."
  },
  {
    name: "Mariska Wolters",
    business: "Natuurgids Drenthe",
    rating: 5,
    review: "Door de online marketing boeken veel meer mensen wandel- en fietstochten door de Drentse natuur. Mijn agenda staat vol met natuurliefhebbers uit heel Nederland."
  },
  {
    name: "Henk Brouwer",
    business: "Brouwer Technische Installaties",
    rating: 5,
    review: "Fantastische resultaten! Ons installatiebedrijf installeert nu duurzame energie systemen door heel Drenthe. Vooral zonnepanelen en warmtepompen lopen als een trein."
  },
  {
    name: "Sandra Koolhaas",
    business: "Koolhaas Dierenspeciaalzaak",
    rating: 5,
    review: "Onze dierenwinkel in Hoogeveen trekt nu klanten uit heel de regio. Van voer voor boerderijdieren tot luxe hondenartikelen - we bedienen stad en platteland."
  }
]

const dutchMoreReviews = [
  {
    name: "Dirk Jansen",
    business: "Jansen Grondverzet",
    rating: 5,
    review: "Perfect voor ons grondverzetbedrijf! We werken nu aan projecten door heel Drenthe - van landbouwprojecten tot natuurherstel. Onze machines staan niet stil."
  },
  {
    name: "Linda Veldhuis",
    business: "Veldhuis Administratie",
    rating: 5,
    review: "Geweldige impact voor mijn administratiekantoor! Ik help nu boeren en kleine bedrijven door heel Zuidwest-Drenthe met hun boekhouding en subsidies."
  },
  {
    name: "Rob Meijer",
    business: "Meijer Machinehandel",
    rating: 5,
    review: "Onze landbouwmachines worden nu gevonden door boeren uit Drenthe, Groningen en Friesland. Zowel nieuwe als tweedehands machines gaan als warme broodjes over de toonbank."
  },
  {
    name: "Petra Huisman",
    business: "Huisman Hoveniersdiensten",
    rating: 5,
    review: "Door de sterke online aanwezigheid ontwerp ik nu tuinen door heel Drenthe. Van boerderij tuinen tot moderne stadse tuinen in Hoogeveen zelf."
  },
  {
    name: "Marcel Wessels",
    business: "Wessels Veevoeding",
    rating: 5,
    review: "Ons veevoederbedrijf bedient nu veehouders door heel Drenthe en Groningen. Online bestellen ze nu onze kwaliteitsvoeding en krijgen snelle levering."
  },
  {
    name: "Annemarie Roos",
    business: "Roos Fysiotherapie",
    rating: 5,
    review: "Perfect voor mijn praktijk! Ik behandel nu patiënten uit Hoogeveen, Meppel en omliggende dorpen. Vooral sporters en mensen met fysiek buitenwerk vinden mij online."
  }
]

export default function HoogeveenPage() {
  const features = [
    {
      title: "Agrarische SEO Drenthe",
      description: "Gespecialiseerde SEO voor agrarische bedrijven in Hoogeveen en heel Drenthe. We zorgen dat je bedrijf gevonden wordt door boeren, veehouders en loonwerkers uit de hele provincie. Perfect voor bedrijven die de agrarische sector bedienen met kennis van seizoenen en landbouwcycli."
    },
    {
      title: "Natuur & Toerisme Marketing",
      description: "Marketing voor toeristische bedrijven die profiteren van de prachtige Drentse natuur. Van B&B's tot natuurgidsen - we helpen je bezoekers trekken die Drenthe's unieke landschappen willen ontdekken. Focus op seizoensgebonden campagnes en natuurtoerisme."
    },
    {
      title: "Platteland naar Online",
      description: "Expertise in het online brengen van traditionele plattelandsbedrijven. Van lokale dienstverlening tot ambachtelijke producten - we helpen Drentse ondernemers hun bereik uitbreiden zonder hun authentieke karakter te verliezen."
    }
  ]

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
      <Head>
        <title>SEO Specialist Hoogeveen | Online Marketing Bureau Drenthe</title>
        <meta name="description" content="SEO specialist in Hoogeveen en Drenthe. Verhoog je online zichtbaarheid in natuur en agrarische sector. Lokale expertise voor ondernemend Drenthe." />
        <meta name="keywords" content="SEO Hoogeveen, online marketing Hoogeveen, SEO specialist Drenthe, marketing bureau Hoogeveen" />
        <link rel="canonical" href="https://niblah.com/marketing/hoogeveen" />
      </Head>
      
      <Header location="Hoogeveen" />
      
      <Hero 
        title="Digital Marketing Agency Hoogeveen"
        subtitle="Jouw online marketing partner in het hart van Drenthe"
        description="Hoogeveen, het economische centrum van Zuidwest-Drenthe met circa 55.000 inwoners, verenigt de rust en natuurschoon van het Drentse landschap met moderne voorzieningen en ondernemingszin. Gelegen te midden van uitgestrekte natuurgebieden, bossen en agrarisch land, biedt deze stad unieke kansen voor bedrijven die authentiek Drenthe willen combineren met groei en innovatie. Als specialist in digitale marketing voor Drenthe begrijp ik hoe bedrijven kunnen profiteren van zowel de sterke agrarische economie als het groeiende natuurtoerisme. Van landbouwgerelateerde diensten tot natuurgerichte recreatie - ik help jouw bedrijf groeien door strategieën die aansluiten bij de rust, kwaliteit en natuurverbondenheid die Drenthe zo bijzonder maken."
        ctaText="Groei mee met Drenthe"
        ctaLink="#contact"
      />

      <FeatureSection 
        features={features}
        title="Online Marketing Diensten Hoogeveen"
        subtitle="Gespecialiseerd in agrarische en toeristische markten"
      />

      <ReviewSlider reviews={dutchReviews.concat(dutchMoreReviews)} />

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

      <ContactForm 
        title="Start je Online Groei in Drenthe"
        subtitle="Klaar om meer klanten te bereiken in het hart van Drenthe? Neem contact op voor een vrijblijvende analyse van je mogelijkheden in de agrarische en toeristische sector."
      />

      <Footer 
        location="Hoogeveen"
        serviceArea="Actief in Hoogeveen en omliggende gemeenten"
        areas={["Meppel", "Coevorden", "Emmen", "De Wijk", "Ruinerwold"]}
      />
    </>
  )
}