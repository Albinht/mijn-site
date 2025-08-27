'use client'

import { useState } from 'react'
import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SteenwijkMarketing() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const dutchReviews = [
    {
      name: "Bram van der Velde",
      company: "Van der Velde Watersport Verhuur",
      rating: 5,
      text: "Hun toerisme marketing heeft onze boot- en kanoverhuur enorm geholpen. Via Google vinden natuurliefhebbers uit heel Nederland ons als toegang tot Nationaal Park Weerribben-Wieden."
    },
    {
      name: "Marjan Kuiper",
      company: "Hotel Restaurant De Wieden",
      rating: 5,
      text: "Door hun digitale marketing strategie boeken we nu gasten uit de hele Randstad die op zoek zijn naar natuurvakanties. Onze bezettingsgraad is van 55% naar 80% gestegen."
    },
    {
      name: "Jan Wesseling",
      company: "Wesseling Agrarische Diensten",
      rating: 5,
      text: "Voor een bedrijf dat zowel lokale boeren als recreatieondernemers bedient, was online zichtbaarheid cruciaal. Hun gerichte campagnes bereiken precies de juiste doelgroepen."
    },
    {
      name: "Sandra de Boer",
      company: "De Boer Natuur Gidsservice",
      rating: 5,
      text: "Hun expertise in natuurtoerisme marketing heeft onze gidsservice landelijk bekend gemaakt. Vogelliefhebbers en natuurfotografen vinden ons nu via gerichte SEO."
    },
    {
      name: "Rob Meijer",
      company: "Meijer Bouw & Onderhoud",
      rating: 5,
      text: "Als lokaal bouwbedrijf profiteren we van hun lokale SEO. Huiseigenaren in Steenwijk en omliggende dorpen vinden ons nu gemakkelijk voor verbouwingen en onderhoud."
    },
    {
      name: "Linda Scholten",
      company: "Scholten Wellness & Verzorging",
      rating: 5,
      text: "Onze wellnessonderneming trekt door hun social media marketing nu klanten aan die de rust van Steenwijk combineren met ontspanning. Perfect voor stressvolle stadsmensen."
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Gerrit Postma",
      company: "Postma Fietsspeciaalzaak",
      rating: 5,
      text: "Hun seizoensgerichte campagnes zorgen ervoor dat fietstoeristen ons vinden voor verhuur en reparaties. Vooral tijdens het National Park seizoen loopt de winkel vol."
    },
    {
      name: "Elles van Dijk",
      company: "Van Dijk Streekproducten",
      rating: 5,
      text: "Door hun lokale content marketing verkopen we nu online streekproducten aan toeristen die thuis willen naproeven van hun Steenwijk ervaring."
    },
    {
      name: "Kees de Groot",
      company: "De Groot Transport & Logistiek",
      rating: 5,
      text: "Voor ons transportbedrijf was regionale zichtbaarheid belangrijk. Nu vinden bedrijven uit heel Overijssel en Drenthe ons voor hun logistieke behoeften."
    },
    {
      name: "Anke Visser",
      company: "Visser Kinderopvang Natuur",
      rating: 5,
      text: "Onze buitenkinderopvang trekt door hun marketing gezinnen aan die waarde hechten aan natuurlijke opvoeding. De wachtlijst groeit gestaag."
    },
    {
      name: "Peter Hendriks",
      company: "Hendriks Installatiebedrijf",
      rating: 5,
      text: "Hun technische SEO zorgt ervoor dat we gevonden worden voor zowel particuliere als zakelijke klanten in de regio. Van Steenwijk tot Meppel."
    },
    {
      name: "Joke Bakker",
      company: "Bakkerij De Weerribben",
      rating: 5,
      text: "Perfect gerichte marketing voor onze ambachtelijke bakkerij. Toeristen maken nu omwegen om onze lokale specialiteiten te proeven."
    }
  ]

  return (
    <>
      <Head>
        <title>Online Marketing Bureau Steenwijk | SEO & Google Ads Specialist</title>
        <meta name="description" content="Online marketing bureau Steenwijk helpt bedrijven in Overijssel met SEO, Google Ads, social media marketing en webdesign. ☎ Poort naar Weerribben-Wieden!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Marketing Agency Steenwijk
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Als poort tot Nationaal Park Weerribben-Wieden biedt Steenwijk unieke kansen voor ondernemers. 
                Met 25.000 inwoners en een perfecte ligging tussen natuur en stedelijke voorzieningen, helpen wij bedrijven 
                hun verhaal te vertellen aan zowel locals als natuurliefhebbers uit heel Nederland.
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
                Online Marketing Diensten voor Steenwijk
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van Zuidwesten tot de Kop van Overijssel, wij begrijpen hoe Steenwijkerlandse ondernemers 
                kunnen profiteren van natuurtoerisme, lokale commerce en regionale samenwerking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO voor Natuurtoerisme</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten voor 'Weerribben Wieden bezoeken', 'natuurvakanties Overijssel' en 'Steenwijk toerisme'. 
                  Onze lokale SEO strategie verbindt de unieke natuurlijke ligging met commerciële kansen.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Google Mijn Bedrijf voor toerisme</li>
                  <li>• Natuurgerichte content marketing</li>
                  <li>• Seizoensgebonden SEO optimalisatie</li>
                  <li>• Lokale zoekwoorden Steenwijkerland</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Steenwijk</h3>
                <p className="text-gray-600 mb-6">
                  Bereik natuurliefhebbers, fietstoeristen en stadse bezoekers met gerichte advertenties. 
                  Perfect voor horeca, accommodaties, recreatiebedrijven en alle ondernemers die profiteren van toerisme.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Natuurtoerisme Google Ads</li>
                  <li>• Geo-targeting recreatiegebieden</li>
                  <li>• Seizoensgerichte campagnes</li>
                  <li>• Conversie tracking voor bookings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Laat de natuurlijke schoonheid van Steenwijk en omgeving stralen op Instagram en Facebook. 
                  Van vogelfotografie tot waterrecreatie - wij vertellen uw verhaal visueel overtuigend.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Instagram voor natuurfotografie</li>
                  <li>• Facebook community building</li>
                  <li>• Visual storytelling natuur</li>
                  <li>• Influencer partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

        {/* Detailed Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Waarom Kiezen Steenwijkerlandse Ondernemers voor Ons?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Natuurtoerisme Expertise</h3>
                  <p className="text-gray-600 mb-6">
                    Met jaren ervaring in natuurtoerisme marketing begrijpen we hoe ondernemers in Steenwijk kunnen profiteren 
                    van de unieke ligging bij Nationaal Park Weerribben-Wieden. Van waterrecreatie tot natuurgidsdiensten, 
                    wij kennen uw markt.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Regionale Marktkennis</h3>
                  <p className="text-gray-600 mb-6">
                    Steenwijk bedient zowel de lokale gemeenschap als toeristen uit de Randstad. Onze campagnes zijn afgestemd 
                    op deze dubbele doelgroep en de seizoensgebonden vraag naar natuurervaringen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meetbare Toerisme Groei</h3>
                  <p className="text-gray-600 mb-6">
                    Onze Steenwijkse klanten zien gemiddeld 170% meer website traffic tijdens het natuurseizoen en 
                    95% meer online reserveringen. Van campings tot restaurants, wij leveren bewezen resultaten.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Seizoensgerichte Strategieën</h3>
                  <p className="text-gray-600 mb-6">
                    Van voorjaarsmigratietijd tot herfstfotografie - wij begrijpen de natuurcycli die uw bedrijf beïnvloeden. 
                    Onze campagnes anticiperen op piekperiodes en maken gebruik van elk seizoen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde Vragen - Marketing Steenwijk
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wat kost natuurtoerisme marketing voor bedrijven in Steenwijk?
                </h3>
                <p className="text-gray-600">
                  Voor toeristische bedrijven starten onze pakketten vanaf €850 per maand inclusief seizoensgebonden SEO en Google Ads. 
                  Accommodaties en grotere recreatiebedrijven investeren gemiddeld €1.600-2.800 per maand voor volledige online zichtbaarheid.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hoe bereiken we natuurliefhebbers uit de Randstad?
                </h3>
                <p className="text-gray-600">
                  We gebruiken gerichte geo-targeting op natuurgerelateerde zoekopdrachten, Instagram marketing voor natuurfotografie 
                  en partnerships met natuurorganisaties. Onze campagnes bereiken stadsmensen die op zoek zijn naar natuurervaringen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kunnen jullie helpen met marketing voor Nationaal Park Weerribben-Wieden?
                </h3>
                <p className="text-gray-600">
                  Absoluut! We hebben ervaring met bedrijven die fungeren als toegangspoort tot het National Park. 
                  Van botenverhuur tot natuurgidsdiensten, we weten hoe we de unieke natuurwaarde kunnen vertalen naar klanten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hoe meten jullie succes voor natuurtoerisme bedrijven?
                </h3>
                <p className="text-gray-600">
                  We tracken seizoensgebonden website traffic, reserveringen via online kanalen, social media engagement met natuurcontent 
                  en reviews van natuurliefhebbers. Onze rapportages tonen precies hoeveel extra bezoekers uw marketing genereert.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Werkt sociale media wel voor natuurtoerisme?
                </h3>
                <p className="text-gray-600">
                  Zeker! Instagram is perfect voor natuurfotografie en Facebook werkt uitstekend voor community building rond natuurliefhebbers. 
                  We creëren content die de seizoenen volgt en natuurervaringen deelt die mensen inspireren om te bezoeken.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kunnen lokale Steenwijkse bedrijven ook profiteren van toerisme marketing?
                </h3>
                <p className="text-gray-600">
                  Zeker! Van restaurants tot winkels - alle bedrijven kunnen profiteren van de toeristische stroom. 
                  We helpen lokale ondernemers hun diensten aan te bieden aan bezoekers zonder hun lokale klantenkring te vergeten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hoe belangrijk zijn seizoenen voor marketing in Steenwijk?
                </h3>
                <p className="text-gray-600">
                  Zeer belangrijk! Van voorjaarsmigratietijd tot zomervakantiegangers en herfstfotografie - elk seizoen brengt andere bezoekers. 
                  Onze campagnes anticiperen hierop en maximaliseren uw omzet tijdens alle seizoenen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wat zijn de beste online kanalen voor natuurtoerisme in Steenwijk?
                </h3>
                <p className="text-gray-600">
                  Instagram voor visuele natuurcontent, Google Ads voor directe zoekintentie, Facebook voor community's van natuurliefhebbers 
                  en TripAdvisor voor betrouwbaarheid. We stemmen de kanalen af op uw specifieke doelgroep en seizoen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om de Natuurlijke Kracht van Steenwijk te Benutten?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Laat uw Steenwijkse bedrijf profiteren van de unieke ligging bij Nationaal Park Weerribben-Wieden.
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