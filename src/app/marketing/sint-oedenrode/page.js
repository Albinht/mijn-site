import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SintOedenrodeMarketing() {
  const dutchReviews = [
    {
      name: "Jos van der Heijden",
      company: "Agrarisch Bedrijf De Dommelhoeve",
      text: "Dankzij Niblah bereiken we nu klanten in heel de Meierij. Onze biologische producten worden gevonden door mensen uit Eindhoven en Den Bosch.",
      rating: 5,
      date: "2024-11-22",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Anja Driessen",
      company: "Restaurant De Dommelpoort",
      text: "Met de lokale SEO krijgen we veel meer reserveringen van gasten uit de omgeving. Vooral fietsers op de Dommelroute vinden ons nu.",
      rating: 5,
      date: "2024-11-08",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Piet Janssen",
      company: "Bouwbedrijf Janssen",
      text: "Door de Google Ads campagnes krijgen we projecten uit heel de Dommelstreek. Van nieuwbouw tot renovaties - alles komt binnen.",
      rating: 5,
      date: "2024-10-25",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Maria van Oers",
      company: "Fysiotherapie Praktijk De Dommel",
      text: "Onze online zichtbaarheid is enorm verbeterd. We behandelen nu patiënten uit Schijndel, Veghel en zelfs Eindhoven.",
      rating: 5,
      date: "2024-10-10",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Rob Smulders",
      company: "Installatiebedrijf Smulders",
      text: "Met de lokale marketing bereiken we klanten in heel Sint-Oedenrode en omliggende dorpen. Fantastische resultaten!",
      rating: 5,
      date: "2024-09-28",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Sint-Oedenrode - Online Marketing Bureau Meierij | Niblah</title>
        <meta name="description" content="SEO specialist in Sint-Oedenrode, Meierij tussen Eindhoven en Den Bosch. Lokale expertise voor bedrijven in de Dommelstreek. Verhoog je online zichtbaarheid met bewezen strategieën." />
      </Head>

      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Sint-Oedenrode</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Midden in de Dommelstreek, strategisch gelegen tussen Eindhoven en Den Bosch, ligt Sint-Oedenrode 
              met haar ruim 18.000 inwoners. Deze gemeente vormde de basis voor vele succesvolle ondernemingen 
              en biedt een perfecte uitvalsbasis voor bedrijven die zowel lokaal verankerd willen zijn als 
              regionaal willen groeien in de Meierij.
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
            title: "Lokale SEO Dommelstreek",
            description: "Gespecialiseerd in het bereiken van klanten in Sint-Oedenrode en de Dommelstreek. Van lokale dienstverlening tot regionale uitbreiding naar Schijndel, Veghel en Boxtel."
          },
          {
            icon: "📱",
            title: "Google Ads Meierij-regio",
            description: "Effectieve advertentiecampagnes die inspelen op de centrale ligging tussen Eindhoven en Den Bosch. Perfect voor bedrijven die beide richtingen willen bereiken."
          },
          {
            icon: "💻",
            title: "Website Optimalisatie Brabant",
            description: "Websites die de Brabantse warmte uitstralen maar tegelijk professioneel overkomen bij klanten uit de hele Meierij-regio."
          }
        ]}
      />

      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Sint-Oedenrode te verbeteren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in de Dommelstreek en de Meierij. 
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