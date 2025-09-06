import Head from 'next/head'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Klaas Sijbesma",
    business: "Sijbesma Sport & Mode",
    rating: 5,
    review: "Perfect voor onze sportwinkel in het centrum van Heerenveen! Dankzij Niblah krijgen we nu klanten uit heel Friesland en zelfs SC Heerenveen supporters die online naar sportartikelen zoeken. Onze voetbalshirts verkopen nu landelijk."
  },
  {
    name: "Sanne Visser",
    business: "Restaurant De Tjasker",
    rating: 5,
    review: "Geweldig voor onze horecazaak aan de Thialf! We krijgen nu veel meer gasten uit Heerenveen en toeristen die de Friese meren bezoeken. Onze terrasreserveringen zijn verdubbeld tijdens sportevenementen."
  },
  {
    name: "Piet van der Meer",
    business: "Van der Meer Agrarische Services",
    rating: 5,
    review: "Onze landbouwdienstverlening wordt nu gevonden door boeren in heel Friesland. Van Heerenveen tot Leeuwarden - we bedienen nu veel meer melkveebedrijven dankzij de Friese SEO strategie."
  },
  {
    name: "Marieke Bouma",
    business: "Fysiotherapie Bouma",
    rating: 5,
    review: "Als fysiotherapeut in de Sportstad was het lastig om nieuwe patiënten te krijgen buiten de reguliere doorverwijzingen. Nu word ik gevonden door sporters uit heel Friesland die behandeling zoeken."
  },
  {
    name: "Jan Hoekstra",
    business: "Hoekstra Bouw & Onderhoud",
    rating: 5,
    review: "Fantastische resultaten! Ons bouwbedrijf krijgt nu aanvragen uit Heerenveen, Drachten en het hele Friese platteland. De mix van traditionele vakmanschap en moderne marketing werkt perfect in Friesland."
  },
  {
    name: "Renske Dijkstra",
    business: "Dijkstra Beauty & Wellness",
    rating: 5,
    review: "Onze schoonheidssalon in het centrum van Heerenveen profiteert enorm van de online zichtbaarheid. Klanten uit heel de regio komen nu naar ons na ons online te hebben gevonden."
  }
]

const dutchMoreReviews = [
  {
    name: "Douwe Ferwerda",
    business: "Ferwerda Transport Friesland",
    rating: 5,
    review: "Perfect voor ons transportbedrijf! We krijgen nu lading uit heel Noord-Nederland en zelfs internationale transport naar Scandinavië. Onze vloot rijdt voller dan ooit dankzij online vindbaarheidNiblah."
  },
  {
    name: "Antje Bakker",
    business: "Bakker Administratie",
    rating: 5,
    review: "Geweldige impact voor onze accountancy praktijk! We helpen nu mkb bedrijven door heel Friesland met hun administratie en belastingen. Van Heerenveen tot de Waddeneilanden."
  },
  {
    name: "Kees van der Wal",
    business: "Van der Wal Installatietechniek",
    rating: 5,
    review: "Onze installatiefirma wordt nu gevonden voor CV, sanitair en duurzame energie projecten in heel de regio Heerenveen-Drachten. Vooral zonnepanelen zijn populair in Friesland."
  },
  {
    name: "Femke Veenstra",
    business: "Salon Veenstra",
    rating: 5,
    review: "Door de lokale SEO benadering boeken klanten uit Heerenveen en omgeving nu online hun behandelingen. Mijn agenda zit vol tot maanden vooruit, vooral rond voetbalwedstrijden."
  },
  {
    name: "Harm Posthumus",
    business: "Posthumus Tuinen & Landschap",
    rating: 5,
    review: "Ons hoveniersbedrijf profiteert enorm van de online zichtbaarheid. We realiseren nu tuinen door heel Friesland, van moderne villa's in Heerenveen tot landelijke erven op het platteland."
  },
  {
    name: "Ynske de Jong",
    business: "De Jong Juridisch Advies",
    rating: 5,
    review: "Als juridisch adviseur werd ik voorheen alleen via netwerken gevonden. Nu hebben particulieren en bedrijven uit heel Friesland mij online gevonden voor juridische ondersteuning."
  }
]

export default function HeerenveenPage() {
  const features = [
    {
      title: "Lokale SEO Heerenveen",
      description: "Gespecialiseerde SEO voor bedrijven in Heerenveen, de grootste stad van Friesland met 50.000+ inwoners. We zorgen dat je bedrijf gevonden wordt door klanten uit Drachten, Leeuwarden, Assen en heel de noordelijke provincies. Perfect voor bedrijven die willen profiteren van Heerenveen's centrale positie als handels- en sportcentrum."
    },
    {
      title: "Sportstad Marketing",
      description: "Unieke marketing strategie die aansluit bij Heerenveen's status als Sportstad van Nederland. Van Thialf ijsstadion tot SC Heerenveen voetbal - we helpen bedrijven profiteren van de sportieve energie en toeristische attracties die duizenden bezoekers naar de stad trekken."
    },
    {
      title: "Friese Regio Dekking",
      description: "Complete dekking van de Friese markt vanuit Heerenveen als uitvalsbasis. Bereik klanten in heel Friesland, van de Waddeneilanden tot Sneek, van Leeuwarden tot Emmen. Ideaal voor bedrijven die de gehele noordelijke regio willen bedienen."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Heerenveen kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke positie van Heerenveen als grootste stad van Friesland. Met 50.000+ inwoners, Thialf ijsstadion, SC Heerenveen en de centrale ligging is Heerenveen een belangrijke handels- en sportstad. Ik help bedrijven groeien met marketing die aansluit bij de dynamische en sportieve cultuur van de Sportstad."
    },
    {
      question: "Wat kost SEO in Heerenveen en Friesland?",
      answer: "SEO prijzen voor bedrijven in Heerenveen starten vanaf €750 per maand voor lokale SEO in de Sportstad. Voor bedrijven die heel Friesland willen bereiken of profiteren van toerisme/sport bieden we uitgebreidere pakketten vanaf €1.100 per maand. Altijd eerst een gratis analyse van je positie in de Friese markt."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie in Heerenveen?",
      answer: "In Heerenveen en Friesland zien we vaak binnen 2-3 maanden eerste verbeteringen omdat de lokale concurrentie beheersbaarder is dan in de Randstad. Voor dominantie in heel Friesland kan het 4-6 maanden duren. De sterke lokale gemeenschap en sportcultuur zorgen voor goede mond-tot-mond effecten."
    },
    {
      question: "Welke bedrijven in Heerenveen hebben SEO nodig?",
      answer: "Vooral sportgerelateerde bedrijven (sportscholen, voetbalscholen, sportartikelen), horecazaken rond Thialf/Abe Lenstra Stadion, retail in het centrum, zakelijke dienstverlening, agrarische services, en bedrijven die profiteren van toerisme naar Friesland. Ook mkb dat groei zoekt buiten de regio."
    },
    {
      question: "Hoe profiteer ik van Heerenveen's sportimago?",
      answer: "De Sportstad status biedt unieke marketingkansen! Veel toeristen bezoeken Thialf voor schaatsevenementen en SC Heerenveen wedstrijden. We helpen bedrijven zichtbaar te worden voor sporters, toeristen en bezoekers. Denk aan 'restaurant Thialf', 'hotel SC Heerenveen' of 'sportartikelen Heerenveen'."
    },
    {
      question: "Kan ik vanuit Heerenveen heel Friesland bereiken?",
      answer: "Absoluut! Heerenveen's centrale ligging maakt het perfect als uitvalsbasis voor heel Friesland. We helpen bedrijven klanten te bereiken van Leeuwarden tot Sneek, van Drachten tot de Waddeneilanden. Veel Friezen komen naar Heerenveen voor winkelen en diensten."
    },
    {
      question: "Hoe werkt Google Mijn Bedrijf in Heerenveen?",
      answer: "Google Mijn Bedrijf is cruciaal in Heerenveen! Veel mensen zoeken 'sportwinkel bij mij in de buurt', 'restaurant Heerenveen centrum' of 'garage Sportstad'. We optimaliseren je profiel voor lokale zoekopdrachten en zorgen voor authentieke recensies van tevreden klanten."
    },
    {
      question: "Wat maakt Heerenveen marketing uniek?",
      answer: "Heerenveen combineert Friese trots met sportieve ambitie en commerciële kansen. De stad trekt bezoekers voor sport (Thialf, SC Heerenveen), winkelen en cultuur. Succesvolle marketing hier benadrukt kwaliteit, sportiviteit en de unieke Friese identiteit in combinatie met moderne groeiambitie."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Heerenveen | Digital Marketing Bureau It Hearrenfean</title>
        <meta name="description" content="SEO specialist in Heerenveen, de grootste stad van Friesland. Verhoog je online zichtbaarheid in Friesland en noordelijke provincies. Lokale expertise voor sport, retail en zakelijke dienstverlening." />
        <meta name="keywords" content="SEO Heerenveen, marketing bureau Heerenveen, SEO specialist Friesland, online marketing It Hearrenfean, digital marketing Heerenveen" />
        <link rel="canonical" href="https://niblah.com/marketing/heerenveen" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Marketing Agency Heerenveen
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Specialist in online marketing voor bedrijven in Heerenveen, de bruisende Sportstad van Friesland. 
              Met 50.000+ inwoners, het iconische Thialf ijsstadion, SC Heerenveen voetbalclub en een sterke 
              commerciële sector biedt Heerenveen unieke kansen voor bedrijfsgroei. Als grootste stad van 
              Friesland trekt Heerenveen dagelijks bezoekers uit heel Noord-Nederland voor sport, winkelen 
              en zakelijke activiteiten.
            </p>
            <p className="text-lg mb-8">
              Of je nu een sportgerelateerd bedrijf bent dat wil profiteren van de Thialf en SC Heerenveen buzz, 
              een retailer in het centrum bent, of zakelijke dienstverlening aanbiedt aan het Friese mkb - 
              ik help je groeien met marketing die aansluit bij de dynamische en sportieve cultuur van onze 
              prachtige Sportstad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start je Groei in Heerenveen
              </a>
              <a 
                href="tel:+31640226899" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Bel Direct: 06-40226899
              </a>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection 
        title="Waarom Kiezen voor SEO in Heerenveen?"
        features={features}
      />

      <ReviewSlider reviews={dutchReviews.concat(dutchMoreReviews)} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Heerenveen Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Sportstad Expertise</h3>
                <p className="text-gray-700">
                  Diepe kennis van Heerenveen's unieke positie als Sportstad van Nederland. We begrijpen hoe 
                  bedrijven kunnen profiteren van Thialf ijsstadion, SC Heerenveen voetbalclub en de vele 
                  sportevenementen die duizenden bezoekers naar de stad trekken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Friese Regio Kennis</h3>
                <p className="text-gray-700">
                  Uitgebreide expertise in de Friese markt vanuit Heerenveen als centrale hub. Van Leeuwarden 
                  tot Sneek, van Drachten tot de Waddeneilanden - we weten hoe je je bereik uitbreidt naar 
                  alle hoeken van deze prachtige provincie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Commercieel Centrum Focus</h3>
                <p className="text-gray-700">
                  Begrip van Heerenveen's rol als belangrijkste handelscentrum van Friesland. We helpen 
                  bedrijven profiteren van de dagelijkse stroom winkelende en zakenbezoek uit heel de regio 
                  die naar het centrum van Heerenveen komen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Noord-Nederland Netwerk</h3>
                <p className="text-gray-700">
                  Expertise in het bereiken van klanten in heel Noord-Nederland vanuit Heerenveen. 
                  Strategische ligging tussen Groningen, Drenthe en Friesland biedt unieke groeikansen 
                  voor ambitieuze bedrijven.
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
              Complete Digital Marketing Services Heerenveen
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Lokale SEO Heerenveen</h3>
                <p className="text-gray-600">
                  Domineer lokale zoekopdrachten zoals "sportschool Heerenveen", "restaurant Thialf" 
                  en "garage Sportstad". Perfect voor bedrijven die lokale klanten willen aantrekken.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Google Ads Sportstad</h3>
                <p className="text-gray-600">
                  Gerichte advertentiecampagnes voor Heerenveen en omgeving. Bereik klanten die zoeken 
                  naar jouw diensten tijdens sportevenementen en drukte momenten.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h6a2 2 0 002-2V8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Social Media Friesland</h3>
                <p className="text-gray-600">
                  Social media marketing die aansluit bij de Friese trots en sportcultuur. 
                  Bouw een sterke online community van loyale Friese klanten.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Website Optimalisatie</h3>
                <p className="text-gray-600">
                  Snelle, mobiele websites geoptimaliseerd voor Heerenveen zoekopdrachten. 
                  Perfect voor het aantrekken van lokale klanten en toeristen.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
                <p className="text-gray-600">
                  Gerichte email campagnes voor Friese klanten. Informeer over aanbiedingen, 
                  evenementen en nieuws relevant voor de Heerenveen regio.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics & Rapportage</h3>
                <p className="text-gray-600">
                  Gedetailleerde rapportages over je online prestaties in Heerenveen en Friesland. 
                  Inzicht in klantgedrag en groei mogelijkheden.
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
              Veelgestelde Vragen SEO Heerenveen
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
        title="Start je Online Groei in de Sportstad"
        subtitle="Klaar om meer klanten te bereiken in Heerenveen en heel Friesland? Neem contact op voor een vrijblijvende analyse van je huidige positie in de Friese markt."
      />

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">SEO Specialist Heerenveen - Online Marketing Bureau</h2>
            <p className="text-gray-300 mb-6">
              Actief in Heerenveen en omliggende gemeenten: Drachten, Leeuwarden, Assen, Emmen, 
              Sneek, Joure, Oosterwolde en heel Friesland. Specialized service voor de grootste 
              stad van Friesland en de noordelijke provincies.
            </p>
            <p className="text-gray-400 text-sm">
              Niblah.com - Jouw partner voor succesvolle online marketing in de Sportstad Heerenveen
            </p>
          </div>
        </div>
      </footer>

    </>
  )
}