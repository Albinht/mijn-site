import Head from 'next/head'
import Header from '../../../components/header'
import Hero from '../../../components/Hero'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Marieke van den Berg",
    business: "Groene Hart Catering",
    rating: 5,
    review: "Dankzij de SEO expertise van Niblah krijgen we nu veel meer aanvragen uit Hardenberg en omliggende dorpen. Onze cateringservice staat nu bovenaan bij lokale zoekopdrachten!"
  },
  {
    name: "Henk Wolters",
    business: "Technisch Installatiebedrijf Wolters",
    rating: 5,
    review: "Perfect! Als installatiebedrijf in de regio Hardenberg-Ommen was het lastig om online gevonden te worden. Nu staan we op pagina 1 en hebben 40% meer klanten."
  },
  {
    name: "Sandra Kamps",
    business: "Wellness Studio Oost",
    rating: 5,
    review: "De lokale SEO aanpak werkt fantastisch. Veel meer klanten uit Hardenberg, Ommen en Gramsbergen boeken nu online behandelingen bij onze wellness studio."
  },
  {
    name: "Rob Dijkstra",
    business: "Bouwbedrijf Dijkstra & Zonen",
    rating: 5,
    review: "Met 25 jaar ervaring in de bouw wisten we veel van klussen, maar weinig van online marketing. Dankzij Niblah krijgen we nu wekelijks nieuwe projecten binnen uit heel Oost-Nederland."
  },
  {
    name: "Lisa Bruins",
    business: "Regio Mode Hardenberg",
    rating: 5,
    review: "Onze kledingwinkel was alleen lokaal bekend. Nu verkopen we ook online en krijgen klanten uit Emmen, Zwolle en zelfs uit Duitsland. Omzet is met 60% gestegen!"
  },
  {
    name: "Dirk van der Meer",
    business: "Hoveniersbedrijf Van der Meer",
    rating: 5,
    review: "Door de slimme SEO strategie krijg ik nu klanten uit de hele Vechtstreek. Van tuinaanleg tot onderhoud - mijn agenda is maanden vooruit volgeboekt."
  }
]

const dutchMoreReviews = [
  {
    name: "Anja Scholten",
    business: "Fysiotherapie Centrum Hardenberg",
    rating: 5,
    review: "Geweldige resultaten! Meer patiënten uit Hardenberg en omgeving vinden nu onze praktijk online. De Google Ads campagne werkt perfect voor fysio zoekopdrachten."
  },
  {
    name: "Gert-Jan Bakker",
    business: "Bakkerij Hardenberg",
    rating: 5,
    review: "Onze ambachtelijke bakkerij heeft nu een sterke online aanwezigheid. Mensen uit Ommen, Dedemsvaart en Gramsbergen bestellen nu ook onze producten."
  },
  {
    name: "Petra Jansen",
    business: "Jansen Accountancy",
    rating: 5,
    review: "Als ZZP-accountant was het moeilijk om klanten te vinden. Nu word ik gevonden door mkb bedrijven in hele regio Hardenberg-Coevorden."
  },
  {
    name: "Michel Roos",
    business: "Autogarage De Vechtstreek",
    rating: 5,
    review: "Meer klanten dan ooit! Onze garage staat nu bovenaan bij zoekopdrachten naar 'APK Hardenberg' en 'auto reparatie Oost-Nederland'."
  },
  {
    name: "Ellen Brink",
    business: "Beautysalon Pure Hardenberg",
    rating: 5,
    review: "Door de lokale SEO strategie boeken klanten uit Hardenberg, Ommen en zelfs Emmen nu online afspraken. Mijn agenda zit vol en ik kan me focussen op wat ik het liefst doe."
  },
  {
    name: "Jan Willem Smit",
    business: "Smit Schilderwerken",
    rating: 5,
    review: "Eindelijk gevonden worden! Mijn schildersbedrijf krijgt nu opdrachten uit de hele regio. Van woningen in Hardenberg tot bedrijfspanden in Dedemsvaart."
  }
]

export default function HardenbergPage() {
  const features = [
    {
      title: "Lokale SEO voor Hardenberg",
      description: "Speciaal afgestemde SEO strategie voor bedrijven in Hardenberg en de Vechtstreek. We zorgen dat je bedrijf gevonden wordt door klanten in Ommen, Gramsbergen, Dedemsvaart en omliggende gemeenten, met focus op de unieke marktdynamiek van Oost-Nederland."
    },
    {
      title: "Google Ads Hardenberg",
      description: "Effectieve advertentiecampagnes gericht op de lokale markt in Hardenberg en regio. Of je nu toeristen wilt bereiken die de natuurgebieden bezoeken of lokale bedrijven zoekt - we creëren campagnes die converteren met focus op industrie, natuur en grenshandel."
    },
    {
      title: "Website Optimalisatie",
      description: "Complete website optimalisatie voor betere prestaties in Hardenberg en Oost-Nederland. We verbeteren laadtijden, gebruikerservaring en conversie, afgestemd op het gedrag van bezoekers uit de regio tussen natuur en industrie."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Hardenberg kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke positie van Hardenberg in Oost-Nederland. De stad ligt strategisch tussen de natuurgebieden van Nationaal Park De Weerribben-Wieden en de industriële centra. Met circa 60.000 inwoners en een sterke mix van toerisme, industrie en grenshandel bied ik gespecialiseerde kennis om jouw bedrijf online zichtbaar te maken voor deze diverse doelgroepen."
    },
    {
      question: "Wat kost SEO in Hardenberg en omgeving?",
      answer: "SEO prijzen voor bedrijven in Hardenberg starten vanaf €750 per maand voor lokale SEO. Voor bedrijven die ook Duitse klanten willen bereiken of zich richten op toerisme in de natuurgebieden bieden we uitgebreidere pakketten vanaf €1250 per maand. We maken altijd eerst een gratis analyse van je huidige positie in de regio."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie?",
      answer: "In de Hardenberg regio zien we vaak binnen 2-3 maanden eerste verbeteringen in lokale zoekopdrachten. Voor concurrentie met bedrijven uit Zwolle of Emmen kan het 4-6 maanden duren. De unieke positie tussen Nederland en Duitsland biedt vaak snellere kansen voor grensoverschrijdende markten."
    },
    {
      question: "Welke bedrijven in Hardenberg hebben SEO nodig?",
      answer: "Vooral toeristische bedrijven (hotels, restaurants, natuurgidsen), industriële dienstverleners, detailhandel die van grensverkeer profiteert, en lokale dienstverlening zoals garages, kappers en medische praktijken. De mix van natuur, industrie en grensligging biedt veel online kansen."
    },
    {
      question: "Helpen jullie ook met Google Mijn Bedrijf?",
      answer: "Absoluut! Google Mijn Bedrijf optimalisatie is cruciaal in Hardenberg. We zorgen dat je bedrijf goed vindbaar is voor lokale zoekopdrachten zoals 'restaurant Hardenberg', 'hotel Vechtstreek' of 'technisch bedrijf Oost-Nederland'. Inclusief recensie management en lokale content strategie."
    },
    {
      question: "Kunnen jullie helpen met Duitse klanten bereiken?",
      answer: "Ja, dankzij de ligging nabij de Duitse grens helpen we bedrijven in Hardenberg graag om ook Duitse klanten te bereiken. We optimaliseren voor zowel Nederlandse als Duitse zoekopdrachten en richten Google Ads campagnes in op grensoverschrijdende doelgroepen."
    },
    {
      question: "Wat maakt jullie SEO aanpak uniek voor Hardenberg?",
      answer: "We begrijpen de lokale markt: van toeristen die de natuur opzoeken tot industriële bedrijven die internationale klanten bedienen. Onze strategie combineert lokale SEO voor de directe omgeving met regionale optimalisatie voor Oost-Nederland en grensoverschrijdende mogelijkheden."
    },
    {
      question: "Bieden jullie ook website ontwikkeling aan?",
      answer: "Ja, we ontwikkelen websites geoptimaliseerd voor de Hardenberg markt. Denk aan meertalige sites voor grenshandel, toerisme-websites die de natuurschoon benadrukken, of industriële sites die internationale klanten aanspreken. Altijd met SEO ingebouwd vanaf dag één."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Hardenberg | Online Marketing Bureau Oost-Nederland</title>
        <meta name="description" content="SEO specialist in Hardenberg en omgeving. Boost je online zichtbaarheid in Oost-Nederland met professionele SEO diensten. Lokale expertise voor maximaal resultaat." />
        <meta name="keywords" content="SEO Hardenberg, online marketing Hardenberg, SEO specialist Oost-Nederland, marketing bureau Hardenberg" />
        <link rel="canonical" href="https://niblah.com/marketing/hardenberg" />
      </Head>
      
      <Header location="Hardenberg" />
      
      <Hero 
        title="Digital Marketing Agency Hardenberg"
        subtitle="Jouw online marketing partner in het hart van Oost-Nederland"
        description="Hardenberg, strategisch gelegen in de Vechtstreek met circa 60.000 inwoners, biedt unieke kansen voor bedrijven die zowel de lokale markt als het grensgebied met Duitsland willen bedienen. Als specialist in digitale marketing voor de regio Hardenberg-Ommen begrijp ik hoe bedrijven profiteren van de mix tussen natuurtoerisme rond De Weerribben-Wieden, industriële ontwikkeling en grenshandel. Van lokale dienstverleners tot toeristische ondernemingen - ik help jouw bedrijf groeien door slimme online strategieën die aansluiten bij de economische diversiteit van deze regio tussen natuur en industrie."
        ctaText="Start je groei in Hardenberg"
        ctaLink="#contact"
      />

      <FeatureSection 
        features={features}
        title="Online Marketing Diensten Hardenberg"
        subtitle="Gespecialiseerd in de Oost-Nederlandse markt"
      />

      <ReviewSlider reviews={dutchReviews.concat(dutchMoreReviews)} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Hardenberg Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Lokale Marktkennis</h3>
                <p className="text-gray-700">
                  Diepe kennis van de Hardenberg regio, van natuurtoerisme in De Weerribben-Wieden tot industriële ontwikkelingen. 
                  We begrijpen hoe bedrijven in de Vechtstreek optimaal profiteren van lokale én grensoverschrijdende kansen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Grensoverschrijdende Expertise</h3>
                <p className="text-gray-700">
                  Unieke ervaring met marketing voor bedrijven die ook Duitse klanten willen bereiken. 
                  Van meertalige SEO tot internationale Google Ads - we helpen je over grenzen heen groeien.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Toerisme & Industrie Focus</h3>
                <p className="text-gray-700">
                  Gespecialiseerde strategieën voor zowel toeristische bedrijven die profiteren van natuurgebieden als 
                  industriële bedrijven in de regio tussen Zwolle en Emmen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Meetbare Resultaten</h3>
                <p className="text-gray-700">
                  Transparante rapportage met duidelijke KPI's. Van meer bezoekers uit de regio Hardenberg-Ommen 
                  tot hogere conversies - je ziet precies wat onze marketing strategie oplevert.
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
              Veelgestelde Vragen SEO Hardenberg
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
        title="Start je Online Groei in Hardenberg"
        subtitle="Klaar om meer klanten te bereiken in Oost-Nederland? Neem contact op voor een vrijblijvende analyse van je huidige online positie."
      />

      <Footer 
        location="Hardenberg"
        serviceArea="Actief in Hardenberg en omliggende gemeenten"
        areas={["Ommen", "Gramsbergen", "Dedemsvaart", "Coevorden", "Mariënberg"]}
      />
    </>
  )
}