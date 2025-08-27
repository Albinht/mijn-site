import Head from 'next/head'
import Header from '/Users/al/mijn-site/src/components/Header'
import Footer from '/Users/al/mijn-site/src/components/Footer'
import FeatureSection from '/Users/al/mijn-site/src/components/FeatureSection'
import ReviewSlider from '/Users/al/mijn-site/src/components/ReviewSlider'

export default function TubbergenMarketing() {
  const dutchReviews = [
    {
      name: "Herman Holterman",
      company: "Twents Landschap Tours",
      text: "Dankzij Niblah vinden natuurliefhebbers ons gemakkelijk online. Onze wandel- en fietstochten door de Twents-Overijsselse natuur worden steeds populairder.",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Gerdien Besselink",
      company: "Bed & Breakfast De Koppel",
      text: "Met de lokale SEO bereiken we gasten uit heel Nederland die de rust van Overijssel zoeken. Onze bezettingsgraad is fantastisch!",
      rating: 5,
      date: "2024-11-05",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jan Lubbers",
      company: "Timmerbedrijf Twente",
      text: "Door de online marketing krijgen we opdrachten uit heel Oost-Nederland. Onze ambachtelijke Twentse kwaliteit spreekt aan!",
      rating: 5,
      date: "2024-10-22",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Marlies Olthof",
      company: "Natuurwinkel De Boekel",
      text: "Onze biologische streekproducten bereiken nu klanten tot ver buiten Tubbergen. De online zichtbaarheid heeft ons geholpen groeien.",
      rating: 5,
      date: "2024-10-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Henk Rietman",
      company: "Camping Het Twentse Woud",
      text: "Met de digitale marketing trekken we campinggasten uit heel Europa. De prachtige natuur van Overijssel is een echte troef online!",
      rating: 5,
      date: "2024-09-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Anja Bruggink",
      company: "Restaurant De Twentse Kamer",
      text: "Door de SEO krijgen we gasten die speciaal komen voor onze Twentse specialiteiten. De authentieke sfeer trekt veel toeristen aan.",
      rating: 5,
      date: "2024-09-10",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Tubbergen - Online Marketing Bureau Twente Overijssel | Niblah</title>
        <meta name="description" content="SEO specialist in Tubbergen, groene gemeente Twente. Lokale expertise voor toerisme, natuur en ambachtelijke bedrijven. Verhoog je online zichtbaarheid in Oost-Nederland." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-emerald-600">Tubbergen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Te midden van de groene heuvels en uitgestrekte bossen van Oost-Overijssel ligt de 
              natuurrijke gemeente Tubbergen met haar 21.000 inwoners. Grenzeloos groen landschap, 
              karakteristieke Twentse boerderijen en een sterke gemeenschapszin maken dit gebied tot 
              een waar paradijs voor natuur- en rustliefhebbers. Voor ondernemers biedt Tubbergen 
              unieke kansen in toerisme, ambacht en duurzame bedrijfsvoering in harmonie met de prachtige 
              Twentse natuur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300">
                Gratis Website Audit
              </button>
              <button className="border border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition duration-300">
                Bekijk Onze Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "🌲",
            title: "Natuur & Recreatie Marketing",
            description: "Gespecialiseerd in marketing voor natuurgebieden, recreatieparken en buitenactiviteiten in het groene hart van Twente."
          },
          {
            icon: "🏡",
            title: "Twentse Gastvrijheid Online",
            description: "Breng de warme Twentse cultuur online over. Perfect voor B&B's, restaurants en lokale ondernemers die authenticiteit uitstralen."
          },
          {
            icon: "🚴‍♀️",
            title: "Actieve Vakanties Marketing",
            description: "Marketing gericht op wandel-, fiets- en natuurtoerisme. Bereik actieve vakantiegangers die de Twentse landschappen willen ontdekken."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom Kiezen voor Online Marketing in Tubbergen?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Natuurrijk Toerisme</h3>
                <p className="text-gray-600">
                  Tubbergen trekt steeds meer natuurtoeristen die op zoek zijn naar rust en authentieke 
                  ervaringen. Perfect voor accommodaties, horeca en natuuractiviteiten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Twentse Identiteit</h3>
                <p className="text-gray-600">
                  De sterke Twentse cultuur en gastvrijheid zijn unieke verkoopargumenten die online 
                  goed tot hun recht komen en bezoekers uit heel Nederland aantrekken.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Duurzaam Ondernemen</h3>
                <p className="text-gray-600">
                  Het groene karakter van Tubbergen past perfect bij de trend naar duurzaam toerisme 
                  en verantwoord ondernemen - sterke online verkoopargumenten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategische Ligging</h3>
                <p className="text-gray-600">
                  Tussen de Randstad en Duitsland gelegen, met goede bereikbaarheid vanuit beide 
                  richtingen. Ideaal voor het aantrekken van diverse doelgroepen.
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
              Veelgestelde Vragen Marketing Tubbergen
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe marketing ik mijn natuurtoerisme bedrijf in Tubbergen?</h3>
              <p className="text-gray-600">
                Door in te spelen op de unieke natuurlijke omgeving en Twentse cultuur. Wij creëren 
                content die de rust, ruimte en authenticiteit van Tubbergen perfect weergeeft.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wat kost SEO voor een recreatiebedrijf in Twente?</h3>
              <p className="text-gray-600">
                SEO-pakketten voor recreatie en toerisme starten vanaf €450 per maand. Voor seizoensgebonden 
                campagnes en regionale marketing rekenen we €600-1.000 per maand.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kunnen jullie ons helpen Duitse toeristen te bereiken?</h3>
              <p className="text-gray-600">
                Absoluut! Door de nabijheid van de Duitse grens hebben veel natuurgebieden in Tubbergen 
                Duitse bezoekers. Wij maken tweetalige marketing strategieën.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hoe bereik ik gasten die zoeken naar rust en natuur?</h3>
              <p className="text-gray-600">
                Door te focussen op zoektermen rondom natuurvakanties, digitale detox, en authentieke 
                ervaringen. Wij kennen de specifieke wensen van deze doelgroep.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Werkt online marketing ook voor kleine lokale bedrijven?</h3>
              <p className="text-gray-600">
                Zeker! Juist kleine, authentieke bedrijven kunnen online goed uitkomen door hun 
                persoonlijke verhaal en lokale kennis. Dit spreekt veel toeristen aan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Tubbergen te verbeteren?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in het groene hart van Twente. 
            Start vandaag nog met een gratis website analyse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Gratis Website Analyse
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300">
              Plan een Gesprek
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}