import Head from 'next/head'
import Header from '/Users/al/mijn-site/src/components/Header'
import Footer from '/Users/al/mijn-site/src/components/Footer'
import FeatureSection from '/Users/al/mijn-site/src/components/FeatureSection'
import ReviewSlider from '/Users/al/mijn-site/src/components/ReviewSlider'

export default function SliedrechtMarketing() {
  const dutchReviews = [
    {
      name: "Kees van der Vliet",
      company: "Scheepsbouw Sliedrecht",
      text: "Door Niblah bereiken we klanten uit heel de rivierstreek. Onze online zichtbaarheid in de maritieme sector is fantastisch gegroeid.",
      rating: 5,
      date: "2024-11-18",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Anja Korteweg",
      company: "Restaurant De Rivier",
      text: "Met de lokale SEO krijgen we veel meer gasten uit Dordrecht en omgeving. Perfect voor ons restaurant aan de rivieroevers.",
      rating: 5,
      date: "2024-11-03",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Piet Molenaar",
      company: "Installatiebedrijf Molenaar",
      text: "Onze online zichtbaarheid in de Alblasserwaard is enorm verbeterd. We krijgen klanten uit heel de regio.",
      rating: 5,
      date: "2024-10-15",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Sliedrecht - Online Marketing Bureau Alblasserwaard | Niblah</title>
        <meta name="description" content="SEO specialist in Sliedrecht, Alblasserwaard riviergemeente. Lokale expertise voor bedrijven in Zuid-Holland. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Sliedrecht</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Aan de oevers van de Beneden-Merwede, in het hart van de Alblasserwaard, ligt Sliedrecht 
              met haar ruim 26.000 inwoners. Deze 'Dredging City' staat wereldwijd bekend om haar 
              maritieme industrie en baggerbedrijven, maar biedt ook vele kansen voor lokale 
              ondernemingen die de regio willen bedienen.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "🎯",
            title: "Lokale SEO Alblasserwaard",
            description: "Gespecialiseerd in het bereiken van klanten in Sliedrecht en de Alblasserwaard. Van maritieme bedrijven tot lokale dienstverlening."
          },
          {
            icon: "📱",
            title: "Google Ads Zuid-Holland",
            description: "Effectieve advertentiecampagnes voor bedrijven in de rivierstreek. Bereik klanten in Dordrecht, Papendrecht en omgeving."
          },
          {
            icon: "💻",
            title: "Maritiem Website Optimalisatie",
            description: "Websites geoptimaliseerd voor de unieke maritieme sector van Sliedrecht, maar ook voor lokale dienstverleners."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Sliedrecht te verbeteren?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Gratis Website Analyse
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}