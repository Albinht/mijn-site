import Head from 'next/head'
import Header from '/Users/al/mijn-site/src/components/Header'
import Footer from '/Users/al/mijn-site/src/components/Footer'
import FeatureSection from '/Users/al/mijn-site/src/components/FeatureSection'
import ReviewSlider from '/Users/al/mijn-site/src/components/ReviewSlider'

export default function SittardMarketing() {
  const dutchReviews = [
    {
      name: "Marcel Beckers",
      company: "Parkstad Automotive",
      text: "Door Niblah's SEO bereiken we nu klanten uit heel Parkstad Limburg. Van Heerlen tot Kerkrade - onze werkplaats zit vol!",
      rating: 5,
      date: "2024-11-25",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Petra Sijben",
      company: "Restaurant De Limburgse Tafel",
      text: "Geweldige resultaten! We krijgen nu gasten uit Duitsland en heel Zuid-Limburg dankzij onze verbeterde online zichtbaarheid.",
      rating: 5,
      date: "2024-11-10",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Hans Vroemen",
      company: "Bouwbedrijf Vroemen",
      text: "Met de Google Ads campagnes krijgen we projecten uit heel Parkstad. De grensligging biedt veel kansen die we nu benutten.",
      rating: 5,
      date: "2024-10-28",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Monique Daniels",
      company: "Wellness Centrum Parkstad",
      text: "Onze online zichtbaarheid is enorm verbeterd. We behandelen klanten uit Heerlen, Geleen en zelfs over de grens.",
      rating: 5,
      date: "2024-10-15",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Paul Geraedts",
      company: "Installatiebedrijf Geraedts",
      text: "Door de lokale marketing bereiken we klanten in heel Zuid-Limburg. Van spoedklussen tot grote projecten.",
      rating: 5,
      date: "2024-09-30",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Sittard - Online Marketing Bureau Parkstad Limburg | Niblah</title>
        <meta name="description" content="SEO specialist in Sittard, Parkstad Limburg. Lokale expertise voor bedrijven in Zuid-Limburg. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Sittard</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              In het hart van Parkstad Limburg, strategisch gelegen aan de Duitse grens, ligt Sittard 
              met haar ruim 47.000 inwoners. Als onderdeel van de gemeente Sittard-Geleen vormt deze 
              stad het economische centrum van Zuid-Limburg, met unieke kansen voor bedrijven die zowel 
              de Nederlandse markt als de Duitse grensregio willen bedienen.
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
            title: "Lokale SEO Parkstad Limburg",
            description: "Gespecialiseerd in het bereiken van klanten in Sittard, Geleen, Heerlen en omgeving. Ook grensoverschrijdende marketing naar Duitsland."
          },
          {
            icon: "📱",
            title: "Google Ads Zuid-Limburg & Duitsland",
            description: "Effectieve advertentiecampagnes die profiteren van de grensligging. Bereik klanten in Nederland én over de grens."
          },
          {
            icon: "💻",
            title: "Meertalige Website Optimalisatie",
            description: "Websites geoptimaliseerd voor zowel Nederlandse als Duitse bezoekers, perfect voor bedrijven in de Euregio."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Sittard te verbeteren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in Parkstad Limburg en de grensregio. 
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