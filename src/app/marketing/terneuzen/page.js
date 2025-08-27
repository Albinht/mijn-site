import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function TerneuzenMarketing() {
  const dutchReviews = [
    {
      name: "Willem Schoonderwoerd",
      company: "Chemie Transport Zeeland",
      text: "Dankzij Niblah bereiken we klanten in heel Europa. Onze specialistische diensten voor de chemische industrie staan nu online op de kaart.",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Anja van der Meer",
      company: "Hotel Zeeuwse Kust",
      text: "Met de lokale SEO krijgen we gasten uit heel Nederland en België. De maritieme charme van Terneuzen trekt steeds meer toeristen.",
      rating: 5,
      date: "2024-11-05",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Kees Janse",
      company: "Maritiem Adviesbureau",
      text: "Door de online marketing bereiken we havenbedrijven en scheepvaartmaatschappijen internationaal. Perfect voor onze B2B diensten.",
      rating: 5,
      date: "2024-10-22",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Maria Janssens",
      company: "Restaurant Zeeuwse Mosselen",
      text: "Onze zichtbaarheid voor toeristen is geweldig verbeterd. Gasten komen nu uit heel België en Nederland voor onze specialiteiten.",
      rating: 5,
      date: "2024-10-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jan Pieters",
      company: "Nautische Winkel Westerschelde",
      text: "Met de online marketing bereiken we zowel recreatievaart als commerciële scheepvaart. Onze omzet is flink gestegen!",
      rating: 5,
      date: "2024-09-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Els Vermeulen",
      company: "Havenrondvaarten Terneuzen",
      text: "Door de lokale SEO boeken we veel meer groepen en individuele gasten. De interesse in onze haven blijkt veel groter dan gedacht!",
      rating: 5,
      date: "2024-09-10",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Terneuzen - Online Marketing Bureau Zeeuws-Vlaanderen | Niblah</title>
        <meta name="description" content="SEO specialist in Terneuzen, havenstad Zeeuws-Vlaanderen. Lokale expertise voor industrie, scheepvaart en toerisme. Verhoog je online zichtbaarheid aan de Westerschelde." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-cyan-600">Terneuzen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Aan de oevers van de imposante Westerschelde ligt Terneuzen, de grootste havenstad van 
              Zeeuws-Vlaanderen met bijna 55.000 inwoners. Als belangrijke doorvoerhaven met een van 
              Europa's grootste chemische clusters biedt Terneuzen unieke zakelijke kansen. Van maritieme 
              dienstverlening tot internationale handel, van toerisme tot zware industrie - deze dynamische 
              havenstad combineert Zeeuwse tradities met wereldwijde connecties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300">
                Gratis Website Audit
              </button>
              <button className="border border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition duration-300">
                Bekijk Onze Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "⚓",
            title: "Maritieme & Industriële SEO",
            description: "Gespecialiseerd in marketing voor havenbedrijven, chemische industrie en maritieme dienstverlening in de Westerschelde regio."
          },
          {
            icon: "🌊",
            title: "Internationale B2B Marketing",
            description: "Bereik zakelijke klanten wereldwijd. Van scheepvaartmaatschappijen tot industriële toeleveranciers - wij kennen jouw markt."
          },
          {
            icon: "🏛️",
            title: "Zeeuwse Toerisme Marketing",
            description: "Promoot de unieke charme van Zeeuws-Vlaanderen. Van havenrondvaarten tot cultureel erfgoed - trek bezoekers naar jouw bedrijf."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom Kiezen voor Online Marketing in Terneuzen?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategische Havenligging</h3>
                <p className="text-gray-600">
                  Door de directe toegang tot de Noordzee en het Europese achterland via de Westerschelde 
                  kunnen bedrijven vanuit Terneuzen internationale markten bedienen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemisch Cluster</h3>
                <p className="text-gray-600">
                  Als onderdeel van een van Europa's grootste chemische clusters biedt Terneuzen unieke 
                  kansen voor B2B marketing in de proces- en chemische industrie.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Zeeuwse Identiteit</h3>
                <p className="text-gray-600">
                  Zeeuws-Vlaanderen heeft een rijke maritieme cultuur die steeds meer toeristen trekt. 
                  Perfect voor horeca, rondvaarten en culturele ondernemingen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Grensoverschrijdend</h3>
                <p className="text-gray-600">
                  Door de nabijheid van België kunnen bedrijven gemakkelijk beide markten bedienen. 
                  Onze marketing strategieën richten zich op deze grensoverschrijdende kansen.
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
              Veelgestelde Vragen Marketing Terneuzen
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe bereik ik internationale klanten vanuit Terneuzen?</h3>
              <p className="text-gray-600">
                Door meertalige SEO en internationale B2B marketing. Wij optimaliseren voor verschillende 
                landen en maken gebruik van branche-specifieke platforms voor maritieme en chemische industrie.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wat kost B2B marketing voor industriële bedrijven?</h3>
              <p className="text-gray-600">
                B2B marketing pakketten starten vanaf €750 per maand. Voor internationale campagnes en 
                specialistische industrieën rekenen we €1.000-2.500 per maand, afhankelijk van de complexiteit.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kunnen jullie ons helpen met maritieme marketing?</h3>
              <p className="text-gray-600">
                Absoluut! Wij hebben uitgebreide ervaring met marketing voor havenbedrijven, scheepvaart, 
                maritieme dienstverlening en offshore industrie. Van lokaal tot wereldwijd.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe marketing ik mijn Zeeuwse toerismebedrijf?</h3>
              <p className="text-gray-600">
                Door in te spelen op de unieke Zeeuwse cultuur en maritieme erfgoed. Wij creëren content 
                die de authenticiteit van Zeeuws-Vlaanderen uitstraalt en toeristen aantrekt.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Werken jullie met havenbedrijven in Terneuzen?</h3>
              <p className="text-gray-600">
                Ja, wij hebben ervaring met marketing voor terminals, logistiek bedrijven, maritieme 
                dienstverleners en industriële bedrijven in het havengebied van Terneuzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Terneuzen te verbeteren?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in Zeeuws-Vlaanderen en daarbuiten. 
            Start vandaag nog met een gratis website analyse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Gratis Website Analyse
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300">
              Plan een Gesprek
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}