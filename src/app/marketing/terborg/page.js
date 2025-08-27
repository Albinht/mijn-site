import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function TerborgMarketing() {
  const dutchReviews = [
    {
      name: "Henk Jansen",
      company: "Bouwbedrijf Achterhoek",
      text: "Door Niblah bereiken we klanten tot ver over de Duitse grens. Onze projecten in grensstreek lopen uitstekend dankzij de lokale SEO.",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Marieke Wolbers",
      company: "Pension De Achterhoekse Poort",
      text: "Duitse gasten vinden ons nu gemakkelijk online. De marketing voor grenstoerisme werkt perfect voor onze doelgroep.",
      rating: 5,
      date: "2024-11-05",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jan Willem Kroeze",
      company: "Fietsenmaker Terborg",
      text: "Met de online marketing krijgen we veel Duitse fietstoeristen. Vooral tijdens de grensoverschrijdende fietstochten zien we het effect.",
      rating: 5,
      date: "2024-10-22",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Gerda Beunkens",
      company: "Café Restaurant De Grens",
      text: "Onze zichtbaarheid in beide landen is enorm verbeterd. We krijgen gasten uit zowel Nederland als Duitsland.",
      rating: 5,
      date: "2024-10-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Hans Groothuis",
      company: "Hoveniersbedrijf Grensland",
      text: "Door de lokale SEO krijgen we opdrachten uit heel de Achterhoek en delen van Duitsland. Fantastische resultaten!",
      rating: 5,
      date: "2024-09-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Sandra Rövekamp",
      company: "Kapsalon Grenzstyle",
      text: "Klanten komen nu vanuit Doetinchem, Emmerich en andere plaatsen in de regio. De online aanwezigheid maakt het verschil.",
      rating: 5,
      date: "2024-09-10",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Terborg - Online Marketing Bureau Achterhoek | Niblah</title>
        <meta name="description" content="SEO specialist in Terborg, grensstreek Achterhoek. Lokale expertise voor Nederlandse en Duitse klanten. Verhoog je online zichtbaarheid in Oude IJsselstreek." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-green-600">Terborg</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              In het hart van de Achterhoek, op slechts 5 kilometer van de Duitse grens, ligt het 
              karakteristieke Terborg met zo'n 4.600 inwoners. Als onderdeel van gemeente Oude IJsselstreek 
              biedt deze unieke grenslocatie bedrijven geweldige kansen om zowel de Nederlandse als Duitse 
              markt te bedienen. Met prachtige natuur, historische kernen en een sterke grensoverschrijdende 
              economie is Terborg ideaal voor ondernemers die verder kijken dan alleen hun eigen dorp.
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
            icon: "🌍",
            title: "Grensoverschrijdende SEO Marketing",
            description: "Bereik klanten in zowel Nederland als Duitsland. Gespecialiseerd in marketing voor de grensstreek Achterhoek-Niederrhein."
          },
          {
            icon: "🚴‍♂️",
            title: "Toerisme & Recreatie Marketing",
            description: "Perfect voor fietsroutes, natuurgebieden en grenstoerisme. Marketing die inspeeelt op de unieke ligging tussen twee landen."
          },
          {
            icon: "🏘️",
            title: "Lokale Bedrijven Achterhoek",
            description: "Van Terborg tot Doetinchem, van ambachtelijke bedrijven tot moderne dienstverlening. Wij kennen de Achterhoekse mentaliteit."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom Kiezen voor Online Marketing in Terborg?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Grensoverschrijdende Kansen</h3>
                <p className="text-gray-600">
                  Door de nabijheid van Duitsland kunnen bedrijven in Terborg een veel groter marktgebied bedienen. 
                  Onze SEO-strategieën richten zich op beide markten en culturen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Achterhoekse Identiteit</h3>
                <p className="text-gray-600">
                  De Achterhoek heeft een sterke regionale identiteit. Wij zorgen ervoor dat jouw marketing 
                  aansluit bij de lokale cultuur en waarden van deze bijzondere streek.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Natuur & Recreatie</h3>
                <p className="text-gray-600">
                  Met prachtige fietsroutes en natuurgebieden trekt de regio veel toeristen. Perfect voor 
                  bedrijven in horeca, recreatie en toerisme om hun bereik te vergroten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sterke Gemeenschap</h3>
                <p className="text-gray-600">
                  Terborg heeft een hechte gemeenschap waarbij mond-tot-mond reclame belangrijk is. 
                  Online marketing versterkt deze lokale netwerken en bereikt nieuwe doelgroepen.
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
              Veelgestelde Vragen Marketing Terborg
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe bereik ik Duitse klanten vanuit Terborg?</h3>
              <p className="text-gray-600">
                Door tweetalige SEO en gerichte advertenties op Duitse zoektermen. Wij optimaliseren voor zowel 
                Nederlandse als Duitse zoekmachines en maken gebruik van lokale Duitse directories.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wat kost SEO voor een bedrijf in Terborg?</h3>
              <p className="text-gray-600">
                SEO-pakketten starten vanaf €350 per maand. Voor grensoverschrijdende marketing rekenen we 
                €500-750 per maand, afhankelijk van de complexiteit en doelstellingen.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Werkt online marketing ook in kleine Achterhoekse plaatsen?</h3>
              <p className="text-gray-600">
                Absoluut! Juist in kleinere plaatsen zoals Terborg is online marketing effectief omdat je 
                snel kunt uitbreiden naar omliggende dorpen en steden zoals Doetinchem en Emmerich.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe lang duurt het voordat ik resultaat zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in de Achterhoek zie je vaak al na 2-3 maanden eerste resultaten. 
                Voor grensoverschrijdende marketing kan dit 3-6 maanden duren vanwege de complexiteit.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kunnen jullie mij helpen met Duitse website content?</h3>
              <p className="text-gray-600">
                Ja, wij hebben ervaring met tweetalige websites en kunnen Duitse content creëren die 
                aansluit bij de lokale cultuur en zoekgewoonten van onze oosterburen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in de Achterhoek te verbeteren?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in Terborg en omgeving. 
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