import Head from 'next/head'
import Header from '/Users/al/mijn-site/src/components/Header'
import Footer from '/Users/al/mijn-site/src/components/Footer'
import FeatureSection from '/Users/al/mijn-site/src/components/FeatureSection'
import ReviewSlider from '/Users/al/mijn-site/src/components/ReviewSlider'

export default function UdenMarketing() {
  const dutchReviews = [
    {
      name: "Rob van Dijk",
      company: "Logistiek Brabant",
      text: "Dankzij Niblah bereiken we transportklanten in heel Nederland. Onze strategische positie bij de A50 komt perfect tot uiting in onze online marketing.",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Miranda Hendriks",
      company: "Hotel De Brabantse Kust",
      text: "Met de lokale SEO trekken we bezoekers aan die het Land van Cuijk willen ontdekken. Onze ligging tussen stad en natuur is een echte troef.",
      rating: 5,
      date: "2024-11-05",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Piet Jacobs",
      company: "Installatiebedrijf Noord-Brabant",
      text: "Door de online marketing krijgen we klanten uit heel de regio. Van Oss tot Nijmegen - onze dekking is enorm verbeterd!",
      rating: 5,
      date: "2024-10-22",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Sandra van Beers",
      company: "Brasserie De Cuijkse Poort",
      text: "Onze Brabantse specialiteiten bereiken nu gasten uit heel Nederland. De gezellige sfeer van Uden spreekt online echt aan!",
      rating: 5,
      date: "2024-10-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jan Verstappen",
      company: "Fietsenwinkel Brabantse Routes",
      text: "Met de digitale marketing bereiken we fietsliefhebbers die de mooie routes rond Uden willen ontdekken. Geweldige resultaten!",
      rating: 5,
      date: "2024-09-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Marieke Peters",
      company: "Wellness Centrum Het Bruggenhoofd",
      text: "Door de SEO vinden klanten uit de hele regio ons gemakkelijk. De rust van het Land van Cuijk trekt veel stressgeplagde stadsmensen.",
      rating: 5,
      date: "2024-09-10",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Uden - Online Marketing Bureau Land van Cuijk | Niblah</title>
        <meta name="description" content="SEO specialist in Uden, centrum van het Land van Cuijk in Noord-Brabant. Lokale expertise voor industrie, logistiek en toerisme. Verhoog je online zichtbaarheid tussen Oss en Nijmegen." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-orange-600">Uden</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              In het hart van het Land van Cuijk, strategisch gelegen tussen Oss en Nijmegen, ligt 
              Uden met haar ruim 42.000 inwoners. Deze dynamische Brabantse gemeente combineert moderne 
              industrie met groene natuurgebieden en een rijke geschiedenis. Met uitstekende 
              verkeersverbindingen via de A50 en A73, en de gezellige Brabantse mentaliteit, biedt 
              Uden ondernemers de perfecte balans tussen zakelijke kansen en levenskwaliteit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition duration-300">
                Gratis Website Audit
              </button>
              <button className="border border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition duration-300">
                Bekijk Onze Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "🚛",
            title: "Logistiek & Transport Marketing",
            description: "Profiteer van Uden's strategische ligging aan A50/A73. Gespecialiseerd in marketing voor logistiek, transport en distributie."
          },
          {
            icon: "🏭",
            title: "Industriële B2B Marketing",
            description: "Bereik zakelijke klanten in de regio Noord-Brabant en Gelderland. Van productie tot technische dienstverlening."
          },
          {
            icon: "🍺",
            title: "Brabantse Gastvrijheid Online",
            description: "Breng de warme Brabantse cultuur online over. Perfect voor horeca, evenementen en lokale ondernemers."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom Kiezen voor Online Marketing in Uden?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategische Ligging</h3>
                <p className="text-gray-600">
                  Uden ligt centraal tussen de Randstad, Duitsland en België. Perfect voor logistieke 
                  bedrijven en ondernemers die een breed geografisch gebied willen bedienen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Groeiende Industrie</h3>
                <p className="text-gray-600">
                  Het bedrijventerrein van Uden groeit snel met moderne industrie en dienstverlening. 
                  Ideaal voor B2B marketing en netwerken.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Brabantse Cultuur</h3>
                <p className="text-gray-600">
                  De warme Brabantse mentaliteit en gezelligheid zijn sterke verkoopargumenten die 
                  online goed overkomen en klanten aantrekken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regionale Hub</h3>
                <p className="text-gray-600">
                  Als centrum van het Land van Cuijk bedient Uden een grote regio. Perfect voor 
                  bedrijven die klanten uit heel Noord-Brabant willen aantrekken.
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
              Veelgestelde Vragen Marketing Uden
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe kan online marketing mijn logistieke bedrijf in Uden helpen?</h3>
              <p className="text-gray-600">
                Door gebruik te maken van Uden's strategische ligging en uitstekende bereikbaarheid. 
                Wij positioneren jouw bedrijf als de logistieke partner voor heel Nederland.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wat kost B2B marketing voor industriële bedrijven in Uden?</h3>
              <p className="text-gray-600">
                B2B marketing pakketten starten vanaf €600 per maand. Voor uitgebreide campagnes gericht 
                op meerdere regio's rekenen we €800-1.500 per maand.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kunnen jullie ons helpen klanten te bereiken in heel Noord-Brabant?</h3>
              <p className="text-gray-600">
                Absoluut! Wij kennen de Brabantse markt goed en weten hoe we bedrijven van Uden tot 
                Eindhoven en van Oss tot Tilburg kunnen bereiken.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe marketing ik de Brabantse cultuur van mijn bedrijf?</h3>
              <p className="text-gray-600">
                Door authenticiteit en persoonlijke verhalen centraal te stellen. De Brabantse gastvrijheid 
                en no-nonsense mentaliteit spreken veel klanten aan.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wat zijn de voordelen van marketing vanuit Uden?</h3>
              <p className="text-gray-600">
                Centrale ligging, lagere kosten dan de Randstad, en de mogelijkheid om zowel noordelijke 
                als zuidelijke markten te bedienen. Perfect voor groeiende bedrijven.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Uden te verbeteren?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in het Land van Cuijk en daarbuiten. 
            Start vandaag nog met een gratis website analyse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Gratis Website Analyse
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition duration-300">
              Plan een Gesprek
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}