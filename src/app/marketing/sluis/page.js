import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SluisMarketing() {
  const dutchReviews = [
    {
      name: "Johan Verstraeten",
      company: "Hotel De Zeeuws-Vlaamse Poort",
      text: "Dankzij Niblah bereiken we toeristen uit Nederland en België. Onze grensligging wordt nu optimaal benut online.",
      rating: 5,
      date: "2024-11-16",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Marie van der Meer",
      company: "Restaurant Het Zwin",
      text: "Met de lokale SEO krijgen we gasten uit Brugge, Knokke en heel Zeeuws-Vlaanderen. Fantastische resultaten!",
      rating: 5,
      date: "2024-10-30",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Piet Janssens",
      company: "Fietshandel Sluis",
      text: "Door de online marketing bereiken we fietsliefhebbers uit België en Nederland. Perfect voor onze grenslocatie.",
      rating: 5,
      date: "2024-10-12",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Sluis - Online Marketing Bureau Zeeuws-Vlaanderen | Niblah</title>
        <meta name="description" content="SEO specialist in Sluis, Zeeuws-Vlaanderen grensstad. Lokale expertise voor bedrijven in Zeeland. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Sluis</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Aan de Belgische grens, midden in het prachtige Zeeuws-Vlaanderen, ligt Sluis met 
              haar ruim 23.000 inwoners. Deze historische vestingstad trekt jaarlijks duizenden 
              toeristen uit Nederland en België, en biedt unieke kansen voor bedrijven die beide 
              markten willen bedienen.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "🎯",
            title: "Grensoverschrijdende SEO",
            description: "Gespecialiseerd in marketing voor bedrijven aan de Nederlands-Belgische grens. Bereik klanten uit beide landen."
          },
          {
            icon: "📱",
            title: "Toerisme Google Ads",
            description: "Advertentiecampagnes gericht op toeristen uit Nederland en België. Perfect voor horeca en recreatie."
          },
          {
            icon: "💻",
            title: "Meertalige Website Optimalisatie",
            description: "Websites geoptimaliseerd voor Nederlandse en Belgische bezoekers in deze unieke grensregio."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Sluis te verbeteren?
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