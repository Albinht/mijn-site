'use client'

import { useState } from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SpakenburgMarketing() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const dutchReviews = [
    {
      name: "Klaas van der Meer",
      company: "Visserij Van der Meer",
      rating: 5,
      text: "Door hun digitale marketing vinden toeristen ons familiebedrijf nu gemakkelijk via Google. Onze verse vis verkoop is met 140% gestegen sinds we online zichtbaar zijn voor 'verse vis Spakenburg'."
    },
    {
      name: "Marieke Postma",
      company: "Postma Klederdracht Atelier",
      rating: 5,
      text: "Hun expertise in toerisme marketing heeft ons atelier internationaal op de kaart gezet. Via sociale media bereiken we nu cultuurliefhebbers uit heel Europa die geïnteresseerd zijn in de Spakenburger dracht."
    },
    {
      name: "Jaap Huisman",
      company: "Huisman Botenverhuur Eemmeer",
      rating: 5,
      text: "Met hun Google Ads campagnes trekken we watersporters aan uit Amsterdam, Utrecht en heel de Randstad. Onze verhuur loopt nu van maart tot oktober op volle toeren."
    },
    {
      name: "Petra van Wijk",
      company: "Restaurant De Eemhof",
      rating: 5,
      text: "Hun lokale SEO heeft ons restaurant een vaste plek gegeven op de toeristische route. Dagjestoeristen vinden ons nu automatisch wanneer ze zoeken naar 'restaurant Spakenburg Eemmeer'."
    },
    {
      name: "Gerrit Visser",
      company: "Visser Watersport",
      rating: 5,
      text: "De social media campagnes tonen perfect de unieke sfeer van Spakenburg. Zowel locals als toeristen waarderen onze authentieke aanpak en maritieme expertise."
    },
    {
      name: "Anna Koornstra",
      company: "Koornstra Souvenirs & Gifts",
      rating: 5,
      text: "Hun e-commerce oplossingen hebben onze souvenirshop ook online gebracht. Nu kunnen toeristen thuis nog nagenieten met echte Spakenburger producten."
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Hendrik Bakker",
      company: "Bakkerij De Haven",
      rating: 5,
      text: "Perfect gerichte content marketing voor onze traditionele bakkerij. Toeristen komen nu speciaal voor onze ambachtelijke visbroodjes en lokale specialiteiten."
    },
    {
      name: "Lisa Verhoef",
      company: "Verhoef B&B aan het Water",
      rating: 5,
      text: "Dankzij hun toerisme marketing strategie hebben we een constante stroom internationale gasten. Onze waterkant locatie wordt nu wereldwijd gevonden."
    },
    {
      name: "Piet de Jong",
      company: "De Jong Scheepswerf",
      rating: 5,
      text: "Hun digitale aanpak heeft onze traditionele scheepswerf nieuwe klanten opgeleverd. Eigenaren van historische schepen vinden ons nu via gerichte zoekopdrachten."
    },
    {
      name: "Ria Schouten",
      company: "Schouten Mode & Lifestyle",
      rating: 5,
      text: "De Instagram marketing laat de authentieke Spakenburger sfeer perfect zien. Bezoekers komen nu speciaal naar onze boetiek voor unieke maritime mode."
    },
    {
      name: "Willem van Dijk",
      company: "Sloep Service Spakenburg",
      rating: 5,
      text: "Hun lokale SEO zorgt ervoor dat booteigenaren uit heel Nederland ons vinden voor onderhoud en reparaties. De Eemmeer expertise spreekt voor zich."
    },
    {
      name: "Joke Mulder",
      company: "Mulder Therapeutische Praktijk",
      rating: 5,
      text: "Voor een gezondheidsvoorziening in een toeristische plaats is betrouwbare online aanwezigheid cruciaal. Hun aanpak trekt zowel locals als vakantiegangers."
    }
  ]

  return (
    <>
      <Head>
        <title>Online Marketing Bureau Spakenburg | SEO & Google Ads Specialist</title>
        <meta name="description" content="Online marketing bureau Spakenburg helpt bedrijven aan het Eemmeer met SEO, Google Ads, social media marketing en webdesign. ☎ Voor visserij tot toerisme!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Marketing Agency Spakenburg
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Waar authentieke visserijtraditie en modern toerisme elkaar ontmoeten, daar helpen wij ondernemers hun verhaal te delen. 
                Met ruim 18.000 inwoners aan het pittoreske Eemmeer verbinden wij de unieke Spakenburger identiteit met digitale kansen 
                die bezoekers uit heel Nederland aantrekken.
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
                Online Marketing Diensten voor Spakenburg
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van de historische haven tot aan de moderne jachthaven, wij begrijpen hoe Spakenburger ondernemers 
                het beste kunnen profiteren van toerisme, watersport en lokale traditie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO voor Toerisme & Visserij</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten voor 'Spakenburg bezoeken', 'verse vis Eemmeer' en 'watersport Utrecht'. 
                  Onze lokale SEO strategie combineert de authentieke visserijcultuur met moderne toeristische behoeften.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Google Mijn Bedrijf voor toeristische bedrijven</li>
                  <li>• Seizoensgebonden SEO strategie</li>
                  <li>• Maritime content marketing</li>
                  <li>• Lokale zoekoptimalisatie Eemmeer</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Spakenburg</h3>
                <p className="text-gray-600 mb-6">
                  Trek dagjestoeristen uit Amsterdam, Utrecht en heel de Randstad met gerichte advertenties. 
                  Perfect voor horeca, watersport, klederdracht ateliers en alle bedrijven die profiteren van toerisme.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Toeristische Google Ads campagnes</li>
                  <li>• Seizoensgerichte advertenties</li>
                  <li>• Geo-targeting Randstad</li>
                  <li>• Conversie tracking voor bookings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Laat de unieke Spakenburger sfeer tot leven komen op Instagram en Facebook. 
                  Van authentieke visserijbeelden tot klederdracht fotografie - wij vertellen uw verhaal visueel.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Instagram marketing voor toerisme</li>
                  <li>• Facebook campagnes cultuurliefhebbers</li>
                  <li>• Visual storytelling Eemmeer</li>
                  <li>• Influencer samenwerking</li>
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
                Waarom Kiezen Spakenburger Ondernemers voor Ons?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Toerisme Marketing Expertise</h3>
                  <p className="text-gray-600 mb-6">
                    Met diepgaande ervaring in toerisme marketing begrijpen we hoe we de unieke Spakenburger cultuur 
                    kunnen vertalen naar digitale campagnes die bezoekers aantrekken. Van visserijtraditie tot klederdracht, 
                    wij weten hoe we uw verhaal vertellen.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Seizoensgerichte Aanpak</h3>
                  <p className="text-gray-600 mb-6">
                    Uw business draait om de seizoenen en toeristische pieken. Onze campagnes zijn afgestemd op 
                    Spakenburger Dagen, zomertoerisme en winterse rust, zodat u maximaal profiteert van elk seizoen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale Cultuur & Tradities</h3>
                  <p className="text-gray-600 mb-6">
                    Van de authentieke visserij tot de traditionele klederdracht, wij begrijpen wat Spakenburg uniek maakt. 
                    Deze culturele kennis vertalen we naar marketing die zowel locals als toeristen aanspreekt.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meetbare Toerisme Groei</h3>
                  <p className="text-gray-600 mb-6">
                    Onze Spakenburger klanten zien gemiddeld 200% meer website bezoekers tijdens het hoogseizoen 
                    en 85% meer reserveringen via online kanalen. Van restaurants tot B&B's, wij leveren resultaat.
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
              Veelgestelde Vragen - Marketing Spakenburg
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wat kost toerisme marketing voor een bedrijf in Spakenburg?
                </h3>
                <p className="text-gray-600">
                  Voor toeristische bedrijven in Spakenburg starten onze pakketten vanaf €900 per maand inclusief seizoensgerichte SEO en Google Ads. 
                  Grotere horeca en accommodaties investeren gemiddeld €1.800-3.000 per maand voor complete online zichtbaarheid.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hoe bereiken we toeristen buiten het hoogseizoen?
                </h3>
                <p className="text-gray-600">
                  We ontwikkelen jaar-rond content die de unieke winterse charme van Spakenburg benadrukt. Denk aan gezellige havenrestaurants, 
                  culturele evenementen en de rust van het Eemmeer buiten de drukte. Zo blijven bezoekers ook in de rustiger maanden komen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kunnen jullie helpen met internationale toeristen?
                </h3>
                <p className="text-gray-600">
                  Absoluut! Spakenburg trekt veel Duitse en Belgische toeristen. We creëren meertalige content, optimaliseren voor internationale zoekopdrachten 
                  en zetten social media in om de authentieke Nederlandse visserscultuur internationaal te promoten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hoe meten jullie het succes van toerisme marketing?
                </h3>
                <p className="text-gray-600">
                  We tracken website bezoekers uit toeristische regio's, reserveringen via online kanalen, Google Reviews van bezoekers 
                  en seizoensgebonden pieken in online activiteit. Onze dashboards tonen precies hoeveel extra toeristen uw marketing oplevert.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Werkt online marketing wel voor traditionele bedrijven zoals visserij?
                </h3>
                <p className="text-gray-600">
                  Zeker! Juist authentieke, traditionele bedrijven doen het goed online. Toeristen zoeken naar 'echte' ervaringen. 
                  We helpen visserijen, ateliers en ambachtelijke bedrijven hun verhaal te vertellen aan mensen die waarde hechten aan traditie.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kunnen jullie ook helpen met evenementen zoals Spakenburger Dagen?
                </h3>
                <p className="text-gray-600">
                  Ja! We creëren campagnes rond lokale evenementen en festiviteiten. Van Spakenburger Dagen tot havenfeesten, 
                  we zorgen ervoor dat uw bedrijf maximaal profiteert van de extra bezoekers tijdens speciale gelegenheden.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hoe belangrijk is fotografie voor Spakenburger bedrijven?
                </h3>
                <p className="text-gray-600">
                  Zeer belangrijk! De visuele kracht van Spakenburg - van kleurrijke vissersbootjes tot traditionele klederdracht - 
                  is uw grootste marketingwapen. We helpen met professionele fotografie en beeldrichtlijnen die uw unieke sfeer vastleggen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wat zijn de beste online kanalen voor Spakenburger toerisme?
                </h3>
                <p className="text-gray-600">
                  Instagram is cruciaal voor visuele storytelling, Facebook voor community building, Google Ads voor directe bookings 
                  en TripAdvisor/Google Reviews voor vertrouwen. We stemmen de kanalenmix af op uw doelgroep en type bedrijf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om Meer Bezoekers naar Spakenburg te Lokken?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Laat de unieke charme van uw Spakenburger bedrijf stralen via digitale marketing die écht werkt voor toerisme.
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