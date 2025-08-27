'use client'

import { useState } from 'react'
import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'
import ReviewSlider from '../../../components/ReviewSlider'

export default function StrijenMarketing() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const dutchReviews = [
    {
      name: "Kees van der Berg",
      company: "Van der Berg Agrarische Services",
      rating: 5,
      text: "Door hun lokale SEO vinden boeren uit heel de Hoeksche Waard ons voor machines en dienstverlening. Onze omzet is met 160% gestegen sinds we online zichtbaar zijn."
    },
    {
      name: "Marieke Visser",
      company: "Visser B&B Hoeksche Waard",
      rating: 5,
      text: "Hun toerisme marketing heeft onze bed & breakfast gevuld met gasten uit de Randstad die de rust van het platteland zoeken. Perfecte bezettingsgraad!"
    },
    {
      name: "Jan Dekker",
      company: "Dekker Transport & Logistiek",
      rating: 5,
      text: "Voor ons transportbedrijf was regionale zichtbaarheid cruciaal. Nu vinden bedrijven uit heel Zuid-Holland en Noord-Brabant ons via Google."
    },
    {
      name: "Sandra Molen",
      company: "De Molen Streekproducten",
      rating: 5,
      text: "Hun e-commerce expertise heeft onze lokale producten landelijk bekend gemaakt. Klanten uit heel Nederland bestellen nu onze Hoeksche specialiteiten."
    },
    {
      name: "Rob Jacobs",
      company: "Jacobs Bouw & Onderhoud",
      rating: 5,
      text: "De Google Ads campagnes zorgen voor constante aanvoer van klanten die willen verbouwen. Perfect afgestemd op onze regio in de Hoeksche Waard."
    },
    {
      name: "Linda Postma",
      company: "Postma Wellness Praktijk",
      rating: 5,
      text: "Social media marketing heeft onze praktijk bekend gemaakt bij stressvolle stedelingen die rust zoeken. Klanten komen uit Rotterdam en omgeving."
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Peter Schouten",
      company: "Schouten Mechanisatie",
      rating: 5,
      text: "Hun expertise in agrarische marketing heeft ons bedrijf nieuwe klanten opgeleverd. Boeren vinden ons nu voor machines en onderhoud."
    },
    {
      name: "Anny de Wit",
      company: "De Wit Kinderopvang",
      rating: 5,
      text: "Perfect gerichte campagnes voor jonge gezinnen die naar het platteland verhuizen. Onze wachtlijst groeit gestaag."
    },
    {
      name: "Gerard Hendriks",
      company: "Hendriks Installatiebedrijf",
      rating: 5,
      text: "Door hun lokale SEO vinden zowel particulieren als bedrijven ons voor installaties. Van Strijen tot Dordrecht."
    },
    {
      name: "Joke van Dijk",
      company: "Restaurant De Hoeksche Taverne",
      rating: 5,
      text: "Hun marketing heeft ons restaurant op de kaart gezet voor dagjestoeristen. We zitten nu vol met bezoekers die de Hoeksche rust zoeken."
    },
    {
      name: "Willem Bakker",
      company: "Bakker Groenvoorziening",
      rating: 5,
      text: "Uitstekende online marketing voor ons hoveniersbedrijf. Particulieren en bedrijven uit de hele regio vinden ons voor tuinaanleg."
    },
    {
      name: "Riet Mulder",
      company: "Mulder Therapeutische Massages",
      rating: 5,
      text: "Hun digitale aanpak heeft mijn praktijk gevuld met klanten die echte ontspanning zoeken. De rustige Hoeksche omgeving is ons verkoopargument."
    }
  ]

  return (
    <>
      <Head>
        <title>Online Marketing Bureau Strijen | SEO & Google Ads Specialist</title>
        <meta name="description" content="Online marketing bureau Strijen helpt bedrijven in Hoeksche Waard met SEO, Google Ads, social media marketing en webdesign. ☎ Voor lokaal succes!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Marketing Agency Strijen
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                In het hart van de Hoeksche Waard, waar agrarische traditie en moderne ondernemingszin samenkomen, 
                helpen wij bedrijven hun verhaal te vertellen. Met ruim 9.000 inwoners en een strategische ligging 
                tussen Rotterdam en Dordrecht, biedt Strijen unieke kansen voor groei en bereik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Start Gratis Consult
                </button>
                <a href="tel:+31612345678" className="flex items-center text-blue-100 hover:text-white">
                  <span className="mr-2">📞</span>
                  Direct bellen: 06-12345678
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Online Marketing Diensten voor Strijen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van het Oudeland tot aan de moderne bedrijventerreinen, wij begrijpen hoe Hoeksche ondernemers 
                kunnen profiteren van hun unieke ligging en sterke gemeenschapszin.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO voor Hoeksche Waard</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten voor 'bedrijf Strijen', 'diensten Hoeksche Waard' en trek klanten aan 
                  uit Dordrecht, Rotterdam en heel Zuid-Holland. Onze lokale SEO verbindt de rust van het platteland met stedelijke marktkansen.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Google Mijn Bedrijf optimalisatie</li>
                  <li>• Lokale zoekwoorden Hoeksche Waard</li>
                  <li>• Agrarische SEO specialisatie</li>
                  <li>• Regionale content marketing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Strijen</h3>
                <p className="text-gray-600 mb-6">
                  Bereik klanten in de regio met gerichte advertenties die de waarden van de Hoeksche Waard uitstralen. 
                  Perfect voor agrarische bedrijven, lokale dienstverleners en ondernemers die stad en platteland verbinden.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Regionale Google Ads campagnes</li>
                  <li>• Agrarische sector targeting</li>
                  <li>• Lokale dienstverlening focus</li>
                  <li>• ROI optimalisatie voor mkb</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Laat de authentieke Hoeksche sfeer tot leven komen op Instagram en Facebook. 
                  Van weidse landschappen tot lokale ambacht - wij vertellen uw verhaal op een manier die mensen raakt.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Authentieke plattelandsmarketing</li>
                  <li>• Community building Hoeksche Waard</li>
                  <li>• Visual storytelling agrarisch</li>
                  <li>• Lokale engagement strategieën</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om Uw Strijense Bedrijf te Laten Groeien?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Laat de kracht van de Hoeksche Waard werken voor uw online succes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Plan Gratis Strategiegesprek
              </button>
              <a href="tel:+31612345678" className="flex items-center text-blue-100 hover:text-white">
                <span className="mr-2">📞</span>
                Of bel direct: 06-12345678
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)} 
        />
      )}
    </>
  )
}