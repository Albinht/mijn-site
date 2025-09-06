import Head from 'next/head'
import Header from '../../../components/header'
import Hero from '../../../components/Hero'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Jan Ruesink",
    business: "Ruesink Machinebouw",
    rating: 5,
    review: "Perfect voor ons familiebedrijf in de Achterhoek! Dankzij Niblah krijgen we nu klanten uit heel Oost-Gelderland en zelfs uit Duitsland. Onze traditionele machinebouw combineert nu met moderne online marketing."
  },
  {
    name: "Mariska Wolbers",
    business: "Café Restaurant De Kruisberg",
    rating: 5,
    review: "Geweldig voor onze horecazaak! We krijgen nu veel meer gasten uit Doetinchem en toeristen die de Achterhoek bezoeken. Onze terrasreserveringen zijn verdubbeld sinds we online beter vindbaar zijn."
  },
  {
    name: "Henk van Beek",
    business: "Van Beek Agrarische Diensten",
    rating: 5,
    review: "Onze landbouwdienstverlening wordt nu gevonden door boeren in de hele regio. Van Doetinchem tot Winterswijk - we bedienen nu veel meer klanten dankzij de lokale SEO strategie."
  },
  {
    name: "Sandra Groot Kormelink",
    business: "Praktijk Groot Kormelink",
    rating: 5,
    review: "Als fysiotherapeut in Doetinchem was het lastig om nieuwe patiënten te krijgen. Nu word ik gevonden door mensen uit heel de Achterhoek die behandeling zoeken."
  },
  {
    name: "Rob Dijkman",
    business: "Dijkman Bouw & Renovatie",
    rating: 5,
    review: "Fantastische resultaten! Ons bouwbedrijf krijgt nu aanvragen uit Doetinchem, Winterswijk en omliggende dorpen. De mix van traditionele ambacht en moderne marketing werkt perfect."
  },
  {
    name: "Annemieke Bosma",
    business: "Bosma Mode & Lifestyle",
    rating: 5,
    review: "Onze kledingwinkel in het centrum profiteert enorm van de online zichtbaarheid. Klanten uit heel de Achterhoek komen nu naar onze winkel na ons online te hebben gevonden."
  }
]

const dutchMoreReviews = [
  {
    name: "Bert Scholten",
    business: "Scholten Transport",
    rating: 5,
    review: "Perfect voor ons transportbedrijf! We krijgen nu lading uit heel Oost-Nederland en zelfs grensoverschrijdend transport naar Duitsland. Onze vloot rijdt voller dan ooit."
  },
  {
    name: "Liesbeth Kampman",
    business: "Kampman Accountancy",
    rating: 5,
    review: "Geweldige impact voor onze accountancy praktijk! We helpen nu mkb bedrijven door de hele Achterhoek met hun administratie en belastingen."
  },
  {
    name: "Gert Jan Hulshof",
    business: "Hulshof Installatietechniek",
    rating: 5,
    review: "Onze installatie firma wordt nu gevonden voor CV, sanitair en duurzame energie projecten in heel de regio Doetinchem-Winterswijk."
  },
  {
    name: "Petra Mentink",
    business: "Beautysalon Mentink",
    rating: 5,
    review: "Door de lokale SEO benadering boeken klanten uit Doetinchem en omgeving nu online hun behandelingen. Mijn agenda zit vol tot maanden vooruit."
  },
  {
    name: "Dennis Oude Vrielink",
    business: "Oude Vrielink Tuinen",
    rating: 5,
    review: "Ons hoveniersbedrijf profiteert enorm van de online zichtbaarheid. We realiseren nu tuinen door heel de Achterhoek, van moderne tot landelijke stijlen."
  },
  {
    name: "Inge Berendsen",
    business: "Berendsen Juridisch Advies",
    rating: 5,
    review: "Als juridisch adviseur werd ik voorheen alleen via mond-tot-mond marketing gevonden. Nu hebben particulieren en bedrijven uit heel de Achterhoek mij online gevonden."
  }
]

export default function DoetinchemPage() {
  const features = [
    {
      title: "Lokale SEO Doetinchem",
      description: "Gespecialiseerde SEO voor bedrijven in Doetinchem en de Achterhoek. We zorgen dat je bedrijf gevonden wordt door klanten uit Winterswijk, Groenlo, Zelhem en omliggende gemeenten. Perfect voor bedrijven die de charme van traditioneel vakmanschap combineren met moderne marketing."
    },
    {
      title: "Achterhoek Marketing",
      description: "Regionale marketing strategie die aansluit bij de unieke cultuur van de Achterhoek. Van traditionele ambachtelijke bedrijven tot moderne dienstverleners - we helpen je groeien met respect voor lokale waarden en gemeenschapszin."
    },
    {
      title: "Grensoverschrijdende Groei",
      description: "Profiteer van de nabijheid van de Duitse grens met marketing die ook Duitse klanten bereikt. Ideaal voor bedrijven in Doetinchem die hun markt willen uitbreiden naar het Duitse achterland en grensgebieden."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Doetinchem kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke cultuur van Doetinchem en de Achterhoek. Met circa 58.000 inwoners en een sterke traditie van ambacht en ondernemerschap combineert Doetinchem lokale waarden met moderne ontwikkelingen. Ik help bedrijven groeien met marketing die aansluit bij de authentieke Achterhoekse mentaliteit."
    },
    {
      question: "Wat kost SEO in de Achterhoek?",
      answer: "SEO prijzen voor bedrijven in Doetinchem en de Achterhoek starten vanaf €650 per maand voor lokale SEO. Voor bedrijven die ook Duitse klanten willen bereiken of regionale dekking zoeken bieden we uitgebreidere pakketten vanaf €950 per maand. Altijd eerst een gratis lokale marktanalyse."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie in Doetinchem?",
      answer: "In de Achterhoek zien we vaak binnen 2-3 maanden eerste verbeteringen omdat de lokale concurrentie minder hevig is dan in de Randstad. Voor regionale dominantie richting Winterswijk en Zelhem kan het 4-5 maanden duren. De hechte gemeenschap zorgt voor sterke mond-tot-mond effecten."
    },
    {
      question: "Welke bedrijven in Doetinchem hebben SEO nodig?",
      answer: "Vooral lokale dienstverlening (garages, kappers, restaurants), ambachtelijke bedrijven (bouw, machinebouw), agrarische dienstverlening, detailhandel, en bedrijven die willen profiteren van toerisme naar de Achterhoek. Ook modern mkb dat groei zoekt buiten de regio."
    },
    {
      question: "Werkt online marketing wel in een traditionele regio?",
      answer: "Absoluut! Juist in de Achterhoek zoeken mensen online naar lokale diensten. 'Garage Doetinchem', 'restaurant Achterhoek' en 'bouw Winterswijk' zijn populaire zoekopdrachten. We combineren moderne SEO met respect voor lokale tradities en gemeenschapszin."
    },
    {
      question: "Kunnen jullie helpen met Duitse klanten?",
      answer: "Ja, de ligging nabij de Duitse grens biedt kansen voor grensoverschrijdende marketing. We helpen bedrijven in Doetinchem Duitse klanten te bereiken met meertalige SEO en Google Ads campagnes gericht op Duitse grensgebieden."
    },
    {
      question: "Hoe werkt Google Mijn Bedrijf in Doetinchem?",
      answer: "Google Mijn Bedrijf is cruciaal voor lokale bedrijven in Doetinchem. We optimaliseren je profiel voor zoekopdrachten zoals 'restaurant bij mij in de buurt' en 'garage Doetinchem'. Inclusief het verzamelen van authentieke lokale recensies."
    },
    {
      question: "Wat maakt Achterhoek marketing uniek?",
      answer: "De Achterhoek heeft een sterke identiteit en hechte gemeenschappen. Succesvolle marketing hier respecteert lokale waarden, benadrukt kwaliteit en vakmanschap, en bouwt op vertrouwen en lange termijn relaties. We combineren dit met moderne digital marketing technieken."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Doetinchem | Online Marketing Bureau Achterhoek</title>
        <meta name="description" content="SEO specialist in Doetinchem en de Achterhoek. Verhoog je online zichtbaarheid in Oost-Gelderland. Lokale expertise voor traditionele en moderne bedrijven." />
        <meta name="keywords" content="SEO Doetinchem, online marketing Doetinchem, SEO specialist Achterhoek, marketing bureau Doetinchem" />
        <link rel="canonical" href="https://niblah.com/marketing/doetinchem" />
      </Head>
      
      <Header location="Doetinchem" />
      
      <Hero 
        title="Digital Marketing Agency Doetinchem"
        subtitle="Jouw online marketing partner in de Achterhoek"
        description="Doetinchem, de levendige hoofdstad van de Achterhoek met circa 58.000 inwoners, verenigt de charme van traditionele Nederlandse waarden met moderne ondernemingszin. Gelegen in het prachtige oosten van Gelderland, nabij de Duitse grens, biedt deze stad unieke kansen voor bedrijven die lokale authenticiteit willen combineren met groei en innovatie. Als specialist in digitale marketing voor de Achterhoek begrijp ik hoe bedrijven in Doetinchem kunnen groeien door respect te tonen voor lokale tradities terwijl ze moderne marketing technieken omarmen. Van ambachtelijke familiebedrijven tot innovatieve startups - ik help jouw bedrijf bloeien in deze unieke regio waar vakmanschap, gemeenschapszin en ondernemerschap hand in hand gaan."
        ctaText="Start je groei in Doetinchem"
        ctaLink="#contact"
      />

      <FeatureSection 
        features={features}
        title="Online Marketing Diensten Doetinchem"
        subtitle="Gespecialiseerd in de Achterhoekse markt"
      />

      <ReviewSlider reviews={dutchReviews.concat(dutchMoreReviews)} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Doetinchem Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Achterhoekse Mentaliteit</h3>
                <p className="text-gray-700">
                  Diepe waardering voor de unieke cultuur en waarden van de Achterhoek. We begrijpen dat succesvolle 
                  marketing hier draait om vertrouwen, kwaliteit en langdurige relaties - niet alleen om snelle clicks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Traditioneel & Modern</h3>
                <p className="text-gray-700">
                  Expertise in het combineren van traditionele bedrijfsvoering met moderne online marketing. 
                  Perfect voor familiebedrijven en ambachtelijke ondernemingen die willen groeien zonder hun roots te verliezen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Regionale Dekking</h3>
                <p className="text-gray-700">
                  Uitgebreide kennis van de Achterhoek regio - van Doetinchem tot Winterswijk, van Groenlo tot Zelhem. 
                  We weten hoe je je bereik uitbreidt naar alle hoeken van deze prachtige regio.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Grenshandel Kansen</h3>
                <p className="text-gray-700">
                  Kennis van de mogelijkheden voor grensoverschrijdende handel met Duitsland. 
                  We helpen bedrijven hun markt uit te breiden naar Duitse klanten in aangrenzende gebieden.
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
              Veelgestelde Vragen SEO Doetinchem
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
        title="Start je Online Groei in de Achterhoek"
        subtitle="Klaar om meer klanten te bereiken in Doetinchem en omgeving? Neem contact op voor een vrijblijvende analyse van je huidige positie in de Achterhoek."
      />

      <Footer 
        location="Doetinchem"
        serviceArea="Actief in Doetinchem en omliggende gemeenten"
        areas={["Winterswijk", "Groenlo", "Zelhem", "Terborg", "Gaanderen"]}
      />
    </>
  )
}