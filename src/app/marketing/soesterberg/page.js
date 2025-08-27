import Head from 'next/head'
import Header from '/Users/al/mijn-site/src/components/Header'
import Footer from '/Users/al/mijn-site/src/components/Footer'
import FeatureSection from '/Users/al/mijn-site/src/components/FeatureSection'
import ReviewSlider from '/Users/al/mijn-site/src/components/ReviewSlider'

export default function SoesterbergMarketing() {
  const dutchReviews = [
    {
      name: "Peter van Leeuwen",
      company: "Defensie Consultancy Services",
      text: "Dankzij Niblah bereiken we klanten uit heel Nederland. Onze expertise in de defensiesector wordt nu landelijk erkend.",
      rating: 5,
      date: "2024-11-12",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Sandra Prins",
      company: "Restaurant De Vliegbasis",
      text: "Met de lokale SEO krijgen we bezoekers van vliegbasis Soesterberg en toeristen uit heel Eemland.",
      rating: 5,
      date: "2024-10-26",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Rob Verhagen",
      company: "Historisch Museum Militaire Luchtvaart",
      text: "Onze online zichtbaarheid is fantastisch verbeterd. We trekken bezoekers uit heel Nederland aan.",
      rating: 5,
      date: "2024-10-08",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Soesterberg - Online Marketing Bureau Gemeente Soest | Niblah</title>
        <meta name="description" content="SEO specialist in Soesterberg, gemeente Soest met militaire geschiedenis. Lokale expertise voor bedrijven in Utrecht. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Soesterberg</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bekend om de voormalige vliegbasis en het Nationaal Militair Museum, ligt Soesterberg 
              als een unieke gemeenschap binnen Soest. Met een rijke militaire geschiedenis en een 
              strategische ligging in Eemland biedt Soesterberg interessante kansen voor bedrijven 
              die zowel lokaal als nationaal willen opereren.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "🎯",
            title: "Historische & Lokale SEO",
            description: "Gespecialiseerd in marketing voor bedrijven rond militaire geschiedenis en lokale dienstverlening in Soesterberg."
          },
          {
            icon: "📱",
            title: "Toerisme & Defensie Marketing",
            description: "Advertentiecampagnes gericht op museumbezoekers en defensiegerelateerde bedrijven."
          },
          {
            icon: "💻",
            title: "Niche Website Optimalisatie",
            description: "Websites voor specialistische bedrijven en toeristische attracties in Soesterberg."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Soesterberg te verbeteren?
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