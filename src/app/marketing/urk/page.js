import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function UrkMarketing() {
  const dutchReviews = [
    {
      name: "Klaas Schipper",
      company: "Vishandel De Urker Haven",
      text: "Dankzij Niblah verkopen we onze verse Urker vis nu in heel Nederland. Onze online shop brengt de authentieke smaak van het IJsselmeer bij klanten thuis.",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jannie Bakker",
      company: "Museum Het Oude Raadhuis Urk",
      text: "Met de lokale SEO bereiken we veel meer bezoekers die de unieke cultuur van Urk willen ontdekken. Onze bezoekersaantallen groeien elk jaar!",
      rating: 5,
      date: "2024-11-05",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Pieter de Jong",
      company: "Watertaxi Urk",
      text: "Door de online marketing krijgen we veel toeristen die het IJsselmeer vanaf het water willen beleven. De verhalen over Urk's rijke geschiedenis doen het goed online.",
      rating: 5,
      date: "2024-10-22",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Grietje Visser",
      company: "Restaurant De Kade",
      text: "Onze Urker specialiteiten bereiken nu gasten uit heel Nederland. De authenticiteit van ons eilanddorp trekt veel nieuwsgierige bezoekers aan.",
      rating: 5,
      date: "2024-10-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jan Bouwman",
      company: "Rondvaarten Urker Verhalen",
      text: "Met de digitale marketing bereiken we mensen die op zoek zijn naar authentieke Nederlandse cultuur. Onze verhalen over het oude Urk fascineren veel bezoekers!",
      rating: 5,
      date: "2024-09-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Antje Dekker",
      company: "Urker Klederdracht Atelier",
      text: "Door de SEO vinden mensen die geïnteresseerd zijn in traditionele ambachten ons gemakkelijk. De unieke Urker cultuur spreekt veel mensen aan.",
      rating: 5,
      date: "2024-09-10",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Urk - Online Marketing Bureau Flevoland IJsselmeer | Niblah</title>
        <meta name="description" content="SEO specialist in Urk, authentiek eilanddorp aan het IJsselmeer. Lokale expertise voor visserij, toerisme en cultureel erfgoed. Verhoog je online zichtbaarheid op het voormalige eiland." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Urk</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Op wat ooit een eiland was in de Zuiderzee ligt het bijzondere Urk, met zijn 21.000 inwoners 
              en een van de meest authentieke culturen van Nederland. Dit voormalige eiland aan het IJsselmeer 
              heeft zijn eigen taal, tradities en sterke gemeenschapszin behouden. Van de eeuwenoude visserij 
              tot moderne haven activiteiten, van traditionele klederdracht tot eigentijdse ondernemers - 
              Urk biedt unieke zakelijke kansen voor wie deze bijzondere cultuur weet te waarderen en te benutten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Gratis Website Audit
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                Bekijk Onze Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "🐟",
            title: "Visserij & Maritieme Marketing",
            description: "Gespecialiseerd in marketing voor visserij, seafood en maritieme bedrijven. Breng de authentieke Urker visserstraditie online."
          },
          {
            icon: "⛵",
            title: "Cultuurtoerisme Marketing",
            description: "Promoot de unieke cultuur en geschiedenis van Urk. Van museumbezoeken tot authentieke ervaringen - trek cultureel geïnteresseerde bezoekers aan."
          },
          {
            icon: "🏛️",
            title: "Erfgoed & Tradities Online",
            description: "Breng eeuwenoude tradities en ambachten online. Perfect voor culturele ondernemingen en authentieke Urker producten."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom Kiezen voor Online Marketing in Urk?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Unieke Cultuur</h3>
                <p className="text-gray-600">
                  Urk's authentieke eilandcultuur is een sterke USP die online perfect uitgebuit kan worden. 
                  Toeristen zoeken steeds meer naar echte, onvervalste Nederlandse ervaringen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Maritieme Traditie</h3>
                <p className="text-gray-600">
                  De eeuwenoude visserij tradities en moderne havenactiviteiten bieden unieke 
                  marketingkansen voor maritieme bedrijven en toeleveranciers.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentieke Producten</h3>
                <p className="text-gray-600">
                  Van verse vis tot traditionele ambachten - Urker producten hebben een verhaal 
                  dat online goed verkoopt aan consumenten die waarde hechten aan herkomst.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Toeristische Interesse</h3>
                <p className="text-gray-600">
                  De groeiende interesse in cultuurtoerisme maakt Urk steeds populairder. 
                  Perfect voor horeca, musea en ervaringsgerichte ondernemers.
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
              Veelgestelde Vragen Marketing Urk
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe marketing ik de unieke cultuur van Urk online?</h3>
              <p className="text-gray-600">
                Door verhalen centraal te stellen en authenticiteit uit te stralen. Wij helpen bij het 
                creëren van content die de rijke geschiedenis en levende tradities van Urk laat zien.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wat kost marketing voor een visserijbedrijf in Urk?</h3>
              <p className="text-gray-600">
                Marketing pakketten voor visserij en maritieme bedrijven starten vanaf €500 per maand. 
                Voor e-commerce en landelijke distributie rekenen we €750-1.500 per maand.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kunnen jullie helpen met cultuurtoerisme marketing?</h3>
              <p className="text-gray-600">
                Absoluut! Wij begrijpen hoe belangrijk authentieke verhalen zijn voor cultuurtoerisme. 
                Van museummarketing tot culturele evenementen - wij kennen deze markt.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe bereik ik mensen die geïnteresseerd zijn in Nederlandse tradities?</h3>
              <p className="text-gray-600">
                Door te focussen op erfgoed, ambacht en authentieke ervaringen. Deze doelgroep zoekt 
                actief naar echte Nederlandse cultuur en is bereid te reizen voor unieke ervaringen.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Werkt online marketing ook voor kleine traditionele bedrijven?</h3>
              <p className="text-gray-600">
                Juist wel! Kleine, authentieke bedrijven hebben vaak de beste verhalen en kunnen 
                online perfect hun persoonlijke verhaal en vakmanschap laten zien.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Urk te verbeteren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om de unieke verhalen van Urk online te vertellen. 
            Start vandaag nog met een gratis website analyse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Gratis Website Analyse
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Plan een Gesprek
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}