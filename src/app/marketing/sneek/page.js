import Head from 'next/head'
import Header from '/Users/al/mijn-site/src/components/Header'
import Footer from '/Users/al/mijn-site/src/components/Footer'
import FeatureSection from '/Users/al/mijn-site/src/components/FeatureSection'
import ReviewSlider from '/Users/al/mijn-site/src/components/ReviewSlider'

export default function SneekMarketing() {
  const dutchReviews = [
    {
      name: "Wiebe van der Meer",
      company: "Jachtwerf Sneekermeer",
      text: "Dankzij Niblah bereiken we watersporters uit heel Nederland. Onze online zichtbaarheid tijdens het zeilseizoen is fantastisch!",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Anke Dijkstra",
      company: "Hotel Waterfront Sneek",
      text: "Met de lokale SEO krijgen we veel meer boekingen van watersportliefhebbers. Vooral tijdens de Sneekweek zien we het verschil.",
      rating: 5,
      date: "2024-11-05",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jan Postma",
      company: "Watersportwinkel Friese Meren",
      text: "Door de Google Ads campagnes bereiken we zowel lokale klanten als toeristen. Perfect voor ons seizoensgebonden bedrijf.",
      rating: 5,
      date: "2024-10-22",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Sietske Visser",
      company: "Restaurant De Walrus",
      text: "Onze online zichtbaarheid is enorm verbeterd. We krijgen gasten uit heel Friesland en ver daarbuiten.",
      rating: 5,
      date: "2024-10-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Klaas Boersma",
      company: "Zeilschool Sneek",
      text: "Met de online marketing bereiken we cursisten uit heel Nederland. Onze zeilcursussen zitten nu vol!",
      rating: 5,
      date: "2024-09-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Sneek - Online Marketing Bureau Friese Meren | Niblah</title>
        <meta name="description" content="SEO specialist in Sneek, Friese Meren watersportcentrum. Lokale expertise voor bedrijven in Friesland. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Sneek</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Aan de oevers van het prachtige Sneekermeer, midden in het hart van de Friese Meren, ligt 
              Sneek met haar ruim 33.000 inwoners. Als dé watersportstad van Nederland trekt Sneek jaarlijks 
              duizenden bezoekers voor zeilwedstrijden, watersport en recreatie. Voor bedrijven biedt dit 
              unieke kansen om zowel de lokale gemeenschap als de vele toeristen te bereiken.
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
            icon: "🎯",
            title: "Watersport SEO Friese Meren",
            description: "Gespecialiseerd in marketing voor watersportbedrijven, horeca en toerisme in Sneek en omgeving. Van jachtwerven tot zeilscholen."
          },
          {
            icon: "📱",
            title: "Seizoensgebonden Google Ads",
            description: "Advertentiecampagnes die inspelen op het zeilseizoen en toeristische pieken. Maximale zichtbaarheid tijdens Sneekweek en zomermaanden."
          },
          {
            icon: "💻",
            title: "Toerisme Website Optimalisatie",
            description: "Websites die de unieke charme van Sneek en de Friese Meren uitstralen. Perfect voor het aantrekken van watersportliefhebbers."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Sneek te verbeteren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in de Friese Meren. 
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