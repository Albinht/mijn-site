import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SoestMarketing() {
  const dutchReviews = [
    {
      name: "Marco van den Heuvel",
      company: "Eemland Business Solutions",
      text: "Door Niblah bereiken we bedrijven uit heel het Gooi en Eemland. Onze strategische ligging wordt perfect benut.",
      rating: 5,
      date: "2024-11-14",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Linda Bakker",
      company: "Restaurant De Soester Duinen",
      text: "Met de lokale SEO krijgen we gasten uit Amersfoort, Hilversum en heel Eemland. Geweldige resultaten!",
      rating: 5,
      date: "2024-10-28",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Henk Jansen",
      company: "Bouwbedrijf Jansen",
      text: "Onze online zichtbaarheid in Eemland is enorm verbeterd. We krijgen projecten uit heel de regio.",
      rating: 5,
      date: "2024-10-10",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Soest - Online Marketing Bureau Eemland | Niblah</title>
        <meta name="description" content="SEO specialist in Soest, Eemland tussen Amersfoort en Hilversum. Lokale expertise voor bedrijven in Utrecht. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Soest</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Strategisch gelegen tussen Amersfoort en Hilversum, midden in Eemland, ligt Soest 
              met haar ruim 46.000 inwoners. Deze gemeente combineert de rust van de Utrechtse 
              Heuvelrug met de bedrijvigheid van het Gooi, perfect voor ondernemingen die het beste 
              van beide werelden willen benutten.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection 
        features={[
          {
            icon: "🎯",
            title: "Lokale SEO Eemland & Gooi",
            description: "Gespecialiseerd in marketing voor bedrijven tussen Amersfoort en Hilversum. Bereik klanten in heel Eemland en het Gooi."
          },
          {
            icon: "📱",
            title: "Google Ads Utrecht & Noord-Holland",
            description: "Advertentiecampagnes die profiteren van de centrale ligging. Bereik klanten uit beide provincies."
          },
          {
            icon: "💻",
            title: "Website Optimalisatie Randstad",
            description: "Websites die inspelen op de zakelijke dynamiek tussen Utrecht en het Gooi. Perfect voor B2B bedrijven."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Soest te verbeteren?
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