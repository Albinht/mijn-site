import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function TielMarketing() {
  const dutchReviews = [
    {
      name: "Peter van der Laan",
      company: "Fruithandel Betuwe",
      text: "Dankzij Niblah bereiken we groothandels in heel Europa. Onze Betuwse appels en peren staan nu digitaal op de internationale kaart.",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Marianne Snippe",
      company: "Hotel De Betuwe",
      text: "Met de lokale SEO trekken we gasten aan die de fruitstreek willen ontdekken. Vooral tijdens de bloesemtijd zien we fantastische resultaten.",
      rating: 5,
      date: "2024-11-05",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jos Kluiver",
      company: "Transport Waalkade",
      text: "Door de online marketing krijgen we opdrachten van fruitbedrijven uit heel de regio. De logistieke positie aan de Waal werkt perfect mee.",
      rating: 5,
      date: "2024-10-22",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Anja Dekkers",
      company: "Fruitwinkel De Betuwe",
      text: "Klanten komen nu vanuit heel Gelderland voor onze verse seizoensfruit. De online zichtbaarheid heeft ons bereik enorm vergroot.",
      rating: 5,
      date: "2024-10-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Henk Mulder",
      company: "Bootjes Varen Waal",
      text: "Met de digitale marketing bereiken we toeristen die de Betuwe per boot willen ontdekken. Onze rondvaarten zitten nu vol!",
      rating: 5,
      date: "2024-09-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Sandra Verhoeven",
      company: "Restaurant De Fruitkorf",
      text: "Door de SEO voor toerisme krijgen we gasten die speciaal komen voor onze streekspecialiteiten. De Betuwse keuken is een echte trekker!",
      rating: 5,
      date: "2024-09-10",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Tiel - Online Marketing Bureau Betuwe | Niblah</title>
        <meta name="description" content="SEO specialist in Tiel, hart van de Betuwe fruitstreek. Lokale expertise voor agrarische bedrijven, toerisme en handel. Verhoog je online zichtbaarheid aan de Waal." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-green-600">Tiel</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              In het groene hart van de Betuwe, aan de oevers van de machtige Waal, ligt de fruitstad 
              Tiel met haar 42.000 inwoners. Als centrum van Nederland's grootste fruitteeltgebied 
              combineert Tiel eeuwenoude tradities met moderne agrarische innovatie. Van bloesemtoerisme 
              in het voorjaar tot oogstfeesten in de herfst - deze stad ademt de rijkdom van de vruchtbare 
              Betuwse bodem en biedt ondernemers kansen in landbouw, toerisme en handel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                Gratis Website Audit
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
                Bekijk Onze Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "🍎",
            title: "Agrarische & Food Marketing",
            description: "Gespecialiseerd in marketing voor fruitteelt, agrarische bedrijven en voedingsindustrie in de vruchtbare Betuwe regio."
          },
          {
            icon: "🌸",
            title: "Bloesem & Seizoenstoerisme",
            description: "Marketing die inspeelt op de seizoenen. Van bloesemtijd tot oogstperiode - bereik toeristen wanneer het voor jou het beste uitkomt."
          },
          {
            icon: "🚢",
            title: "Waal Corridor Marketing",
            description: "Profiteer van de strategische ligging aan de Waal. Marketing voor transport, logistiek en industrie langs deze belangrijke vaarroute."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom Kiezen voor Online Marketing in Tiel?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fruitteelt Centrum</h3>
                <p className="text-gray-600">
                  Als hart van Nederland's fruitteelt heeft Tiel een sterke agrarische sector. Perfect 
                  voor B2B marketing gericht op leveranciers, afnemers en kennisuitwisseling.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seizoensgebonden Toerisme</h3>
                <p className="text-gray-600">
                  De Betuwe trekt jaarlijks duizenden toeristen voor bloesem, fruit plukken en 
                  streekproducten. Online marketing kan dit seizoensverkeer optimaal benutten.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Logistieke Positie</h3>
                <p className="text-gray-600">
                  Door de ligging aan de Waal heeft Tiel uitstekende verbindingen met de Randstad 
                  en Duitsland. Ideaal voor transport- en handelsbedrijven.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regionale Hub</h3>
                <p className="text-gray-600">
                  Als grootste stad van de Betuwe fungeert Tiel als centrum voor de hele regio. 
                  Perfect om klanten uit omliggende fruitdorpen en steden te bereiken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Veelgestelde Vragen Marketing Tiel
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe marketing ik mijn fruitbedrijf in Tiel?</h3>
              <p className="text-gray-600">
                Door in te spelen op seizoenen, B2B relaties en lokale specialiteiten. Wij creëren 
                marketing die zowel groothandels als consumenten aanspreekt, met focus op kwaliteit en herkomst.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wat kost SEO voor een agrarisch bedrijf?</h3>
              <p className="text-gray-600">
                SEO-pakketten voor agrarische bedrijven starten vanaf €400 per maand. Voor seizoensgebonden 
                campagnes en B2B marketing rekenen we €600-1.200 per maand.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kunnen jullie helpen met bloesemtoerisme marketing?</h3>
              <p className="text-gray-600">
                Absoluut! Wij hebben ervaring met seizoensgebonden marketing voor toerisme. Van bloesemroutes 
                tot fruitplukactiviteiten - wij maken jouw aanbod zichtbaar voor toeristen.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe bereik ik klanten in heel de Betuwe?</h3>
              <p className="text-gray-600">
                Door regionale SEO die zich richt op de hele Betuwe-streek. Wij optimaliseren voor 
                zoektermen die mensen uit Geldermalsen, Culemborg, Kesteren en andere fruitdorpen gebruiken.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Werkt online marketing ook voor traditionele fruitbedrijven?</h3>
              <p className="text-gray-600">
                Zeker! Juist traditionele bedrijven kunnen profiteren van online marketing door hun 
                authenticiteit en vakmanschap online te tonen. Dit spreekt zowel B2B klanten als consumenten aan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in de Betuwe te verbeteren?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in Tiel en de fruitstreek. 
            Start vandaag nog met een gratis website analyse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Gratis Website Analyse
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Plan een Gesprek
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}