'use client'

import { useState } from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SomerenMarketing() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const dutchReviews = [
    {
      name: "Patricia van der Berg",
      company: "Berg Tuincentrum Someren",
      rating: 5,
      text: "Door de SEO-expertise van Niblah komen tuinliefhebbers uit heel De Peel naar onze kwekerij. Onze online verkoop is met 180% gestegen sinds we zichtbaar zijn voor zoektermen als 'tuinplanten Someren'."
    },
    {
      name: "Marco Janssen",
      company: "Janssen Agrarisch Loonwerk",
      rating: 5,
      text: "Het online marketing bureau heeft ons geholpen onze dienstverlening uit te breiden naar heel Noord-Brabant. Via Google Ads bereiken we nu akkerbouwers tot in Uden en Helmond."
    },
    {
      name: "Sandra Vermeulen",
      company: "De Peelse Hoeve B&B",
      rating: 5,
      text: "Dankzij de lokale SEO-strategie boeken we nu gasten uit heel Nederland die op zoek zijn naar rust in De Peel. Onze bezettingsgraad is van 40% naar 85% gestegen."
    },
    {
      name: "Henk Driessen",
      company: "Driessen Metaalbewerking",
      rating: 5,
      text: "Voor een mkb-bedrijf in Someren is online zichtbaarheid cruciaal. Hun social media campagnes hebben ons nieuwe klanten opgeleverd in de hele regio De Peel."
    },
    {
      name: "Linda Schouten",
      company: "Schouten Accounting",
      rating: 5,
      text: "Hun lokale aanpak werkt perfect voor een accountantskantoor in een kleine plaats. We trekken nu ondernemers aan uit Asten, Deurne en omliggende dorpen."
    },
    {
      name: "Rob Keijsers",
      company: "Keijsers Bouw & Renovatie",
      rating: 5,
      text: "De Google Ads campagnes zijn spot-on afgestemd op onze doelgroep in De Peel. We krijgen nu kwalitatieve leads van huiseigenaren die echt willen verbouwen."
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Anita Meulendijks",
      company: "Meulendijks Mode",
      rating: 5,
      text: "Hun webdesign heeft onze kledingzaak een moderne uitstraling gegeven. Online shoppers uit de hele regio vinden ons nu gemakkelijk."
    },
    {
      name: "Frank van Dijk",
      company: "Van Dijk Installaties",
      rating: 5,
      text: "Perfect afgestemde content marketing voor de technische sector. Klanten waarderen onze expertise, wat resulteert in meer opdrachten."
    },
    {
      name: "Marloes Peters",
      company: "Peters Kinderopvang",
      rating: 5,
      text: "De Facebook en Instagram campagnes bereiken precies de juiste doelgroep: jonge ouders in Someren en omgeving die opvang zoeken."
    },
    {
      name: "Gerard Lemmens",
      company: "Lemmens Autoschade",
      rating: 5,
      text: "Hun lokale SEO zorgt ervoor dat wij als eerste verschijnen wanneer mensen in De Peel zoeken naar 'autoschade reparatie'. Meer klanten dan ooit."
    },
    {
      name: "Inge Klaassen",
      company: "Klaassen Wellness",
      rating: 5,
      text: "De social media strategie heeft ons wellnesscentrum op de kaart gezet. We hebben nu klanten uit heel Noord-Brabant die naar Someren komen."
    },
    {
      name: "Paul Hendrix",
      company: "Hendrix Transport",
      rating: 5,
      text: "Voor een transportbedrijf is online vertrouwen essentiaal. Hun reputatiemanagement heeft onze online reviews en klantvertrouwen enorm verbeterd."
    }
  ]

  return (
    <>
      <Head>
        <title>Online Marketing Bureau Someren | SEO & Google Ads Specialist</title>
        <meta name="description" content="Online marketing bureau Someren helpt bedrijven in De Peel met SEO, Google Ads, social media marketing en webdesign. ☎ Voor lokaal succes!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Marketing Agency Someren
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Het hart van De Peel verdient een marketingpartner die de unieke charme van Someren begrijpt. 
                Met 13.500 inwoners en een sterke agrarische identiteit, helpen wij lokale ondernemers hun verhaal te vertellen 
                aan klanten in heel Noord-Brabant en daarbuiten.
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
                Online Marketing Diensten voor Someren
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van de Lieropse Heide tot aan de Milheeze, wij kennen De Peel en haar ondernemers. 
                Onze marketing oplossingen zijn afgestemd op de lokale markt en regionale kansen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO voor De Peel</h3>
                <p className="text-gray-600 mb-6">
                  Domineer de zoekresultaten voor 'bedrijf Someren' en trek klanten aan uit Asten, Deurne, en heel de regio. 
                  Onze lokale SEO strategie zorgt ervoor dat uw Somerense bedrijf wordt gevonden door mensen die uw diensten nodig hebben.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Google Mijn Bedrijf optimalisatie voor Someren</li>
                  <li>• Lokale zoekwoorden voor De Peel</li>
                  <li>• Content marketing met regionale focus</li>
                  <li>• Technische SEO voor betere vindbaarheid</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Someren</h3>
                <p className="text-gray-600 mb-6">
                  Bereik potentiële klanten in Someren, Lierop, en heel Noord-Brabant met gerichte Google Ads campagnes. 
                  Perfect voor agrarische bedrijven, lokale dienstverleners en retailers die hun bereik willen uitbreiden.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Lokaal gerichte advertenties</li>
                  <li>• Optimalisatie voor Peelse zoekwoorden</li>
                  <li>• Budget management voor mkb</li>
                  <li>• Conversie tracking en rapportage</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Versterk uw online aanwezigheid op Facebook en Instagram met content die de Somerense gemeenschapsgeest uitstraalt. 
                  Ideaal voor horeca, retail en dienstverleners die de lokale verbondenheid willen benadrukken.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Facebook Business optimalisatie</li>
                  <li>• Instagram marketing voor lokale bedrijven</li>
                  <li>• Content planning en creatie</li>
                  <li>• Community management</li>
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
                Waarom Kiezen Somerense Ondernemers voor Ons?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale Kennis van De Peel</h3>
                  <p className="text-gray-600 mb-6">
                    Met onze diepgaande kennis van Someren en De Peel begrijpen we de unieke uitdagingen en kansen 
                    voor bedrijven in deze regio. Van agrarische ondernemingen tot lokale dienstverleners, 
                    wij weten hoe we uw doelgroep bereiken.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Bewezen Resultaten</h3>
                  <p className="text-gray-600 mb-6">
                    Onze Somerense klanten zien gemiddeld 150% meer website bezoekers en 89% meer leads 
                    binnen 6 maanden. Van tuincentra tot bouwbedrijven, wij leveren meetbare groei.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Persoonlijke Aanpak</h3>
                  <p className="text-gray-600 mb-6">
                    Geen generieke oplossingen, maar maatwerk dat past bij uw bedrijf en de Somerense markt. 
                    We werken nauw samen om uw unieke verhaal te vertellen aan de juiste mensen.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparante Communicatie</h3>
                  <p className="text-gray-600 mb-6">
                    Maandelijkse rapportages in begrijpelijke taal, regelmatige updates over uw campagnes 
                    en altijd bereikbaar voor vragen. Zo werkt een betrouwbare partner uit De Peel.
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
              Veelgestelde Vragen - Marketing Someren
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wat kost online marketing voor een bedrijf in Someren?
                </h3>
                <p className="text-gray-600">
                  Voor mkb-bedrijven in Someren starten onze pakketten vanaf €750 per maand voor basis SEO en Google Ads management. 
                  Grotere bedrijven die heel De Peel willen bedienen investeren gemiddeld €1.500-2.500 per maand voor een complete aanpak.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hoe snel zie ik resultaten van SEO in Someren?
                </h3>
                <p className="text-gray-600">
                  Voor lokale zoektermen zoals 'restaurant Someren' of 'kapper De Peel' zien we vaak binnen 2-3 maanden verbeteringen. 
                  Voor competitieve termen die heel Noord-Brabant bestrijken kan het 4-6 maanden duren voor significante stijgingen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Werken jullie alleen met grote bedrijven?
                </h3>
                <p className="text-gray-600">
                  Absoluut niet! Veel van onze klanten zijn lokale Somerense ondernemers: van eenmanszaken tot familiebedrijven. 
                  We hebben oplossingen voor elk budget en iedere ambitie, aangepast aan de schaal van De Peel.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kunnen jullie helpen met Google Mijn Bedrijf voor Someren?
                </h3>
                <p className="text-gray-600">
                  Zeker! Google Mijn Bedrijf is cruciaal voor lokale zichtbaarheid in Someren. We optimaliseren uw profiel, 
                  beheren reviews en zorgen ervoor dat uw bedrijf prominent verschijnt bij zoekacties naar 'bedrijf in de buurt van mij'.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wat maakt jullie anders dan andere marketing bureaus?
                </h3>
                <p className="text-gray-600">
                  Onze focus op De Peel en begrip van de lokale marktdynamiek. We begrijpen de seizoensgebonden aspecten van agrarische bedrijven, 
                  de gemeenschapszin van Someren en hoe we toeristen kunnen aantrekken naar de natuurrijke omgeving.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Doen jullie ook webdesign voor bedrijven in Someren?
                </h3>
                <p className="text-gray-600">
                  Ja, we ontwerpen moderne, mobile-friendly websites die perfect aansluiten bij de Somerense identiteit. 
                  Van responsive design tot e-commerce oplossingen, we zorgen dat uw website uw bedrijf goed vertegenwoordigt.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hoe zit het met social media marketing in een kleine plaats als Someren?
                </h3>
                <p className="text-gray-600">
                  Social media werkt juist heel goed in hechte gemeenschappen zoals Someren! We creëren content die de lokale verbondenheid 
                  benadrukt en zorgen voor organic reach via community engagement en lokale hashtags zoals #SomerenOnderneemt.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Welke resultaten kunnen we verwachten?
                </h3>
                <p className="text-gray-600">
                  Onze Somerense klanten zien gemiddeld 180% meer organisch verkeer, 65% meer telefoontjes en 
                  45% meer online conversies binnen het eerste jaar. Natuurlijk afhankelijk van sector, concurrentie en investering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om Uw Somerense Bedrijf Online te Laten Groeien?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Sluit u aan bij de groeiende lijst van succesvolle ondernemers in De Peel die kiezen voor gerichte online marketing.
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