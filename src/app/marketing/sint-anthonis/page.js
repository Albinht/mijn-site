import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SintAnthonisMarketing() {
  const dutchReviews = [
    {
      name: "Gerard van den Broek",
      company: "Agrarisch Bedrijf De Peelhoeve",
      text: "Dankzij Niblah bereiken we nu klanten in het hele Land van Cuijk. Onze biologische producten worden nu ook gevonden door mensen uit Boxmeer en Mill.",
      rating: 5,
      date: "2024-11-18",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Marieke Janssen",
      company: "Restaurant De Cuijkse Poort",
      text: "De lokale SEO heeft ons geholpen om meer gasten uit de regio aan te trekken. Vooral fietstoeristen die onderweg zijn naar de Maasdorpen vinden ons nu makkelijk.",
      rating: 5,
      date: "2024-10-25",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Peter Smulders",
      company: "Bouwbedrijf Smulders & Co",
      text: "Met de Google Ads campagnes krijgen we veel meer opdrachten binnen uit Sint-Anthonis en omliggende dorpen. De ROI is uitstekend.",
      rating: 5,
      date: "2024-10-10",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Linda van Opstal",
      company: "Dierenartspraktijk Peelvet",
      text: "Door de lokale zoekmachine-optimalisatie bereiken we nu huisdiereigenaren in heel het Peelgebied. Onze praktijk groeit gestaag.",
      rating: 5,
      date: "2024-09-28",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Johan Verhoeven",
      company: "Installatiebedrijf Verhoeven",
      text: "Niblah heeft onze online zichtbaarheid enorm verbeterd. We krijgen nu klanten uit Cuijk, Boxmeer en zelfs Grave. Fantastisch resultaat!",
      rating: 5,
      date: "2024-09-15",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Anouk Driessen",
      company: "Kapssalon Peelstijl",
      text: "De social media campagnes hebben ons geholpen om jonge klanten uit de hele regio te bereiken. Onze agenda zit nu vol!",
      rating: 5,
      date: "2024-08-30",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Ruud Martens",
      company: "Autogarage Martens",
      text: "Met de lokale SEO zijn we nu de eerste keuze voor autoreparaties in Sint-Anthonis en omgeving. Klanten vinden ons nu via Google.",
      rating: 5,
      date: "2024-08-12",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Sandra Hendrix",
      company: "Kinderdagverblijf De Peelkroost",
      text: "Door de gerichte online marketing bereiken we jonge gezinnen in de nieuwe woonwijken van Sint-Anthonis. Onze wachtlijst groeit.",
      rating: 5,
      date: "2024-07-28",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Frank Vullers",
      company: "Elektricienbedrijf Vullers",
      text: "Niblah heeft ons geholpen om klanten in heel het Land van Cuijk te bereiken. Van spoedreparaties tot nieuwbouwprojecten - we krijgen alles binnen.",
      rating: 5,
      date: "2024-07-15",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Carla Janssen",
      company: "Fysiotherapiepraktijk Peelfit",
      text: "De website optimalisatie heeft geleid tot veel meer online afspraken. Patiënten uit Oploo en Vierlingsbeek vinden ons nu ook.",
      rating: 5,
      date: "2024-06-20",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Hans van Dijk",
      company: "Tuincentrum De Peeltuin",
      text: "Met de seizoensgebonden Google Ads campagnes bereiken we klanten op het juiste moment. Vooral in het voorjaar zien we het verschil.",
      rating: 5,
      date: "2024-06-05",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Monique Kessels",
      company: "Nagelstudio Cuijks Nagels",
      text: "Door de lokale marketing krijgen we klanten uit heel Sint-Anthonis en omliggende dorpen. De online boekingen zijn verdubbeld.",
      rating: 5,
      date: "2024-05-22",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Sint-Anthonis - Online Marketing Bureau Land van Cuijk | Niblah</title>
        <meta name="description" content="SEO specialist in Sint-Anthonis, Land van Cuijk. Lokale expertise voor bedrijven in de Peelgemeenten. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
        <meta name="keywords" content="SEO specialist Sint-Anthonis, online marketing Land van Cuijk, digital marketing Peelgemeenten, website optimalisatie Sint-Anthonis, Google Ads Noord-Brabant, SEO bureau Sint-Anthonis" />
        <link rel="canonical" href="https://niblah.com/marketing/sint-anthonis" />
        <meta property="og:title" content="SEO Specialist Sint-Anthonis - Online Marketing Bureau Land van Cuijk" />
        <meta property="og:description" content="Specialist in SEO en online marketing voor bedrijven in Sint-Anthonis en het Land van Cuijk. Verhoog je online zichtbaarheid met lokale expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niblah.com/marketing/sint-anthonis" />
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Sint-Anthonis" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Niblah - SEO Specialist Sint-Anthonis",
            "image": "https://niblah.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sint-Anthonis",
              "addressRegion": "Noord-Brabant",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.6244,
              "longitude": 5.8856
            },
            "url": "https://niblah.com/marketing/sint-anthonis",
            "telephone": "+31-85-1234567",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 51.6244,
                "longitude": 5.8856
              },
              "geoRadius": 25000
            },
            "areaServed": ["Sint-Anthonis", "Oploo", "Vierlingsbeek", "Cuijk", "Boxmeer", "Mill", "Grave"],
            "priceRange": "€500-€5000"
          })}
        </script>
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Agency
              <span className="block text-blue-600">Sint-Anthonis</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Gelegen in het hart van het Land van Cuijk, waar de Peelgemeenten samenkomen met de Maasregio, 
              vormt Sint-Anthonis met haar ruim 11.500 inwoners een bruisende gemeenschap. De gemeente bestaat 
              uit de kernen Sint-Anthonis, Oploo en Vierlingsbeek, elk met hun eigen karakter maar verbonden 
              door sterke lokale ondernemingen die zowel de lokale bevolking als bezoekers uit de regio bedienen.
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

      {/* Features */}
      <FeatureSection 
        features={[
          {
            icon: "🎯",
            title: "Lokale SEO Land van Cuijk",
            description: "Gespecialiseerd in het bereiken van klanten in Sint-Anthonis, Oploo, Vierlingsbeek en de bredere regio. We kennen de lokale markt en weten hoe bedrijven in de Peelgemeenten het beste online zichtbaar worden voor hun doelgroep."
          },
          {
            icon: "📱",
            title: "Google Ads voor Noord-Brabant",
            description: "Effectieve advertentiecampagnes die inspelen op de unieke ligging tussen de Peel en de Maas. Of je nu lokale klanten wilt bereiken of bezoekers naar de regio wilt trekken - wij zorgen voor gerichte advertenties met meetbare resultaten."
          },
          {
            icon: "💻",
            title: "Website Optimalisatie Cuijk-regio",
            description: "Websites die perfect aansluiten bij de behoeften van bedrijven in het Land van Cuijk. Van lokale dienstverlening tot agrarische ondernemingen - wij maken websites die converteren en de lokale identiteit uitstralen."
          }
        ]}
      />

      {/* Reviews */}
      <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online Marketing voor Sint-Anthonis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van lokale zoekmachine-optimalisatie tot gerichte advertentiecampagnes - 
              wij helpen bedrijven in Sint-Anthonis en het Land van Cuijk hun online doelen te bereiken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lokale SEO Optimalisatie</h3>
              <p className="text-gray-600 mb-6">
                Speciaal afgestemd op het Land van Cuijk. Wij zorgen dat je bedrijf vindbaar is voor 
                zoekopdrachten zoals 'restaurant Sint-Anthonis' of 'installateur Oploo'.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Google My Business optimalisatie</li>
                <li>• Lokale zoekwoord research</li>
                <li>• Citations in Brabantse directories</li>
                <li>• Review management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Google Ads Campagnes</h3>
              <p className="text-gray-600 mb-6">
                Gerichte advertenties voor bedrijven die klanten willen bereiken in Noord-Brabant. 
                Perfect voor dienstverleners die de hele Cuijk-regio willen bestrijken.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Geografisch gerichte campagnes</li>
                <li>• Multi-locatie targeting</li>
                <li>• Lokale concurrent analyse</li>
                <li>• ROI-geoptimaliseerde budgetten</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Ontwikkeling</h3>
              <p className="text-gray-600 mb-6">
                Moderne websites die de authenticiteit van het Land van Cuijk uitstralen. 
                Professioneel maar toegankelijk, net zoals de ondernemers in de regio.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Responsieve designs</li>
                <li>• Snelle laadtijden</li>
                <li>• SEO-vriendelijke structuur</li>
                <li>• Lokale content integratie</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
              <p className="text-gray-600 mb-6">
                Bereik de lokale gemeenschap en daarbuiten via Facebook, Instagram en LinkedIn. 
                Ideaal voor het promoten van lokale events en community building.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Lokale content strategie</li>
                <li>• Community management</li>
                <li>• Event promotie</li>
                <li>• Regionale influencer partnerships</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Marketing</h3>
              <p className="text-gray-600 mb-6">
                Persoonlijke communicatie met klanten in de regio. Perfect voor nieuwsbrieven 
                over lokale aanbiedingen, evenementen en seizoensacties.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Nieuwsbrief campaigns</li>
                <li>• Geautomatiseerde flows</li>
                <li>• Segmentatie op locatie</li>
                <li>• A/B testing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-6">
                Inzicht in hoe je online marketing presteert in het Land van Cuijk. Transparante 
                rapportages over traffic, conversies en ROI.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Google Analytics setup</li>
                <li>• Maandelijkse rapportages</li>
                <li>• Conversie tracking</li>
                <li>• ROI berekeningen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-gray-600">
              Antwoorden op de meest gestelde vragen over online marketing in Sint-Anthonis
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wat kost SEO voor een bedrijf in Sint-Anthonis?
              </h3>
              <p className="text-gray-600">
                SEO-pakketten beginnen vanaf €750 per maand voor lokale bedrijven in Sint-Anthonis. 
                Dit omvat Google My Business optimalisatie, lokale zoekwoord research en 
                maandelijkse rapportages specifiek voor het Land van Cuijk.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hoe lang duurt het voordat ik resultaat zie?
              </h3>
              <p className="text-gray-600">
                Voor lokale SEO in Sint-Anthonis zien we meestal binnen 2-3 maanden de eerste 
                verbeteringen in Google My Business en lokale zoekresultaten. Volledige 
                SEO-resultaten zijn zichtbaar na 4-6 maanden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Welke bedrijven in de regio hebben het meeste baat bij SEO?
              </h3>
              <p className="text-gray-600">
                Vooral lokale dienstverleners (restaurants, kappers, installateurs), 
                zorgverleners, detailhandel en bedrijven die de bredere Cuijk-regio 
                willen bereiken profiteren van lokale SEO.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wat maakt het Land van Cuijk uniek voor online marketing?
              </h3>
              <p className="text-gray-600">
                Het Land van Cuijk heeft een sterke lokale gemeenschap met een mix van 
                traditionele en moderne bedrijven. De ligging tussen de Peel en de Maas 
                biedt kansen voor zowel lokale marketing als regionale uitbreiding naar 
                Boxmeer, Mill en Grave.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kan ik ook klanten buiten Sint-Anthonis bereiken?
              </h3>
              <p className="text-gray-600">
                Absoluut! Met gerichte SEO en Google Ads kunnen we je bereik uitbreiden naar 
                Cuijk, Boxmeer, Mill, Grave en andere gemeenten in Noord-Brabant. We passen 
                de strategie aan op basis van je doelgroep en service-gebied.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hoe belangrijk is Google My Business voor lokale bedrijven?
              </h3>
              <p className="text-gray-600">
                Cruciaal! Google My Business is vaak het eerste wat mensen zien bij lokale 
                zoekopdrachten. We optimaliseren je profiel met foto's, openingstijden, 
                reviews en lokale informatie om meer klanten aan te trekken.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hoe meet ik het succes van mijn online marketing?
              </h3>
              <p className="text-gray-600">
                We gebruiken tools zoals Google Analytics en Google My Business Insights 
                om websitebezoek, telefoontjes, routeaanvragen en conversies bij te houden. 
                Maandelijks krijg je een duidelijk rapport met alle belangrijke cijfers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wat is het verschil tussen lokale en regionale marketing?
              </h3>
              <p className="text-gray-600">
                Lokale marketing richt zich op Sint-Anthonis en directe omgeving, regionale 
                marketing bestrijkt het hele Land van Cuijk en soms verder. De strategie 
                hangt af van je doelgroep, service-gebied en concurrentie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Sint-Anthonis te verbeteren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in het Land van Cuijk. 
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