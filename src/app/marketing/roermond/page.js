import Head from 'next/head'
import Header from '../../../components/header'
import Hero from '../../../components/Hero'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Frank Janssen",
    business: "Mode Outlet Roermond",
    rating: 5,
    review: "Dankzij de SEO strategie van Niblah krijgen we nu klanten uit heel Nederland én Duitsland. Onze online outlet verkoop is met 80% gestegen sinds we op pagina 1 staan!"
  },
  {
    name: "Marlies Schmitz",
    business: "Restaurant De Roerkust",
    rating: 5,
    review: "Perfect voor ons restaurant aan de Maas! We krijgen nu veel meer Duitse toeristen die ons online vinden. De meertalige SEO aanpak werkt fantastisch voor grensregio's."
  },
  {
    name: "Tom van den Broek",
    business: "Autohandel Van den Broek",
    rating: 5,
    review: "Onze autohandel profiteert enorm van de internationale SEO aanpak. Duitse klanten vinden ons nu gemakkelijk online en onze export is verdubbeld!"
  },
  {
    name: "Anja Peters",
    business: "Peters Juwelier",
    rating: 5,
    review: "Als juwelier in het centrum van Roermond was het lastig om op te vallen tussen alle outlets. Nu staan we bovenaan bij 'juwelier Roermond' en hebben veel meer klanten."
  },
  {
    name: "Stefan Müller",
    business: "Hotel Maasduinen",
    rating: 5,
    review: "Geweldige resultaten! Ons hotel wordt nu gevonden door gasten uit Nederland én Duitsland. Onze bezettingsgraad is met 45% gestegen dankzij de sterke online zichtbaarheid."
  },
  {
    name: "Miranda Cop",
    business: "Schoonheidssalon Limburg",
    rating: 5,
    review: "Door de lokale SEO focus krijg ik klanten uit heel Midden-Limburg. Van Roermond tot Sittard - mijn agenda zit vol met behandelingen."
  }
]

const dutchMoreReviews = [
  {
    name: "Dirk Houben",
    business: "Houben Bouwmaterialen",
    rating: 5,
    review: "Onze bouwmaterialenhandel bedient nu klanten uit Nederland en Duitsland. De grensoverschrijdende SEO strategie heeft onze omzet met 60% laten groeien."
  },
  {
    name: "Lisa Reintjes",
    business: "Cafe Central Roermond",
    rating: 5,
    review: "Ons café in de binnenstad trekt nu veel meer toeristen aan. Zowel Nederlandse shoppers als Duitse bezoekers vinden ons gemakkelijk online."
  },
  {
    name: "Hans Smeets",
    business: "Smeets Techniek",
    rating: 5,
    review: "Als technisch bedrijf krijgen we nu opdrachten uit heel Limburg en zelfs uit Duitsland. De B2B SEO aanpak werkt uitstekend voor onze sector."
  },
  {
    name: "Carmen Rodriguez",
    business: "Spanish Flavors Restaurant",
    rating: 5,
    review: "Ons Spaanse restaurant wordt nu gevonden door internationale bezoekers die Roermond bezoeken. Google toont ons bij zoekopdrachten in meerdere talen."
  },
  {
    name: "Jeroen Vullings",
    business: "Makelaardij Vullings",
    rating: 5,
    review: "Perfect voor de Roermond vastgoedmarkt! We helpen nu zowel Nederlandse als Duitse kopers die in de regio willen wonen. Meer leads dan ooit tevoren."
  },
  {
    name: "Sabine Weber",
    business: "Weber Fysiotherapie",
    rating: 5,
    review: "Onze praktijk trekt patiënten aan uit Roermond, Venlo en zelfs Duitse grenssteden. De meertalige website en lokale SEO werken perfect samen."
  }
]

export default function RoermondPage() {
  const features = [
    {
      title: "Retail & Outlet SEO Roermond",
      description: "Gespecialiseerde SEO voor retail en outlet winkels in Roermond. We zorgen dat jouw winkel gevonden wordt door shoppers uit Nederland én Duitsland die naar het beroemde Designer Outlet komen of in de historische binnenstad winkelen. Focus op seizoensgebonden campagnes en internationale bezoekers."
    },
    {
      title: "Grensoverschrijdende Google Ads",
      description: "Internationale advertentiecampagnes die zowel Nederlandse als Duitse klanten bereiken. Perfect voor bedrijven in Roermond die willen profiteren van de sterke grenshandel en toerisme uit beide landen. Meertalige campagnes met lokale targeting."
    },
    {
      title: "Hospitality & Toerisme Marketing",
      description: "Specialistische marketing voor hotels, restaurants en toeristische attracties in Roermond. Van Maasplassen recreatie tot Designer Outlet shopping - we helpen hospitality bedrijven meer gasten te trekken uit Nederland, Duitsland en daarbuiten."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Roermond kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke positie van Roermond als internationale shopping bestemming en grensstad. Met circa 58.000 inwoners en miljoenen jaarlijkse bezoekers aan het Designer Outlet combineert Roermond lokale business met internationale handel. Ik help bedrijven profiteren van zowel lokale klanten als de sterke Duitse markt."
    },
    {
      question: "Wat kost SEO voor retail bedrijven in Roermond?",
      answer: "SEO voor retail in Roermond start vanaf €950 per maand vanwege de hoge concurrentie rond shopping gerelateerde zoektermen. Voor internationale campagnes die Duitse klanten bereiken rekenen we vanaf €1450 per maand. Designer Outlet retailers kunnen profiteren van speciale pakketten vanaf €1750 per maand."
    },
    {
      question: "Hoe bereik ik Duitse klanten vanuit Roermond?",
      answer: "We gebruiken een meertalige SEO aanpak met Duitse content optimalisatie, local SEO voor Duitse steden nabij de grens, en geotargeted Google Ads. Speciale focus op zoektermen zoals 'outlet shopping Nederland' in het Duits en seizoensgebonden campagnes rondom Duitse feestdagen."
    },
    {
      question: "Welke bedrijven in Roermond hebben SEO nodig?",
      answer: "Vooral retail en outlet winkels, restaurants en cafés, hotels en B&B's, toeristische attracties, autohandel (veel Duitse kopers), en lokale dienstverlening die wil profiteren van de internationale bezoekersstroom. Ook B2B bedrijven die grenshandel bedrijven."
    },
    {
      question: "Hoe belangrijk is Google Mijn Bedrijf voor Roermond?",
      answer: "Extreem belangrijk! Google Mijn Bedrijf optimalisatie is cruciaal voor bedrijven in Roermond vanwege de vele toeristen die lokaal zoeken naar 'restaurant near me', 'hotel Roermond' of 'shopping center'. We optimaliseren voor zowel Nederlandse als Duitse zoekopdrachten."
    },
    {
      question: "Kunnen jullie helpen met seizoensmarketing?",
      answer: "Absoluut! Roermond heeft sterke seizoenspieken rondom Duitse en Nederlandse feestdagen, zomervakantie en kerst shopping. We ontwikkelen seizoensspecifieke SEO en Google Ads campagnes die inspelen op deze pieken, inclusief Duitse feestdagen en schoolvakanties."
    },
    {
      question: "Wat maakt Roermond SEO anders dan andere steden?",
      answer: "De internationale dimensie maakt Roermond uniek. We moeten rekening houden met Nederlandse én Duitse zoekgedrag, verschillende seizoenen en feestdagen, wisselkoersen, en culturele verschillen. Plus de hoge concurrentie in retail en hospitality door het Designer Outlet."
    },
    {
      question: "Werken jullie samen met het Designer Outlet?",
      answer: "We werken samen met individuele retailers in en rond het Designer Outlet, maar zijn niet officieel verbonden aan het centrum zelf. We helpen winkels binnen het outlet hun online zichtbaarheid te verbeteren en meer van de internationale bezoekersstroom te profiteren."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Roermond | Online Marketing Bureau Limburg</title>
        <meta name="description" content="SEO specialist in Roermond en Limburg. Verhoog je online zichtbaarheid voor Nederlandse en Duitse klanten. Gespecialiseerd in retail, outlet en grenshandel marketing." />
        <meta name="keywords" content="SEO Roermond, online marketing Roermond, SEO specialist Limburg, marketing bureau Roermond" />
        <link rel="canonical" href="https://niblah.com/marketing/roermond" />
      </Head>
      
      <Header location="Roermond" />
      
      <Hero 
        title="Digital Marketing Agency Roermond"
        subtitle="Jouw online marketing partner aan de Maas"
        description="Roermond, de internationale shopping hoofdstad van Limburg met circa 58.000 inwoners, trekt jaarlijks miljoenen bezoekers naar het wereldberoemde Designer Outlet en historische binnenstad. Gelegen strategisch aan de Duitse grens biedt deze stad unieke kansen voor bedrijven die zowel Nederlandse als internationale klanten willen bereiken. Als specialist in grensoverschrijdende digitale marketing begrijp ik hoe bedrijven in Roermond kunnen profiteren van de sterke retail sector, internationale toerisme en Duitse grenshandel. Van outlet retailers tot lokale restaurants - ik help jouw bedrijf groeien door slimme marketing die inspeelt op de kosmopolitische aard van deze bruisende handelsstad aan de Maas."
        ctaText="Start je groei in Roermond"
        ctaLink="#contact"
      />

      <FeatureSection 
        features={features}
        title="Online Marketing Diensten Roermond"
        subtitle="Gespecialiseerd in internationale handel en retail"
      />

      <ReviewSlider reviews={dutchReviews.concat(dutchMoreReviews)} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Roermond Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Internationale Expertise</h3>
                <p className="text-gray-700">
                  Unieke ervaring met grensoverschrijdende marketing voor bedrijven die Nederlandse én Duitse klanten bedienen. 
                  Van meertalige SEO tot internationale Google Ads - we begrijpen de dynamiek van de Roermond markt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Retail & Outlet Focus</h3>
                <p className="text-gray-700">
                  Gespecialiseerde kennis van de retail sector in Roermond, van Designer Outlet marketing tot lokale winkelstraten. 
                  We weten hoe je opvalt in een competitieve markt met internationale bezoekers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Seizoensmarketing</h3>
                <p className="text-gray-700">
                  Expertise in seizoensgebonden campagnes die inspelen op Nederlandse én Duitse feestdagen, vakanties en shopping periodes. 
                  Maximaal profijt van piekperiodes zoals kerst, zomer en Duitse vakantieweken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Hospitality Kennis</h3>
                <p className="text-gray-700">
                  Diepe ervaring met hotel-, restaurant- en toerisme marketing in Roermond. We helpen hospitality bedrijven 
                  meer te profiteren van de sterke internationale bezoekersstroom naar de stad.
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
              Veelgestelde Vragen SEO Roermond
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
        title="Start je Online Groei in Roermond"
        subtitle="Klaar om meer Nederlandse én Duitse klanten te bereiken? Neem contact op voor een vrijblijvende analyse van je huidige internationale positie."
      />

      <Footer 
        location="Roermond"
        serviceArea="Actief in Roermond en omliggende gemeenten"
        areas={["Venlo", "Weert", "Sittard", "Maasbracht", "Stevensweert"]}
      />
    </>
  )
}