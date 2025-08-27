import Head from 'next/head'
import Header from '../../../components/header'
import Footer from '../../../components/Footer'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SintMichielsgestelMarketing() {
  const dutchReviews = [
    {
      name: "Marco van den Heuvel",
      company: "Haaren Automotive",
      text: "Door Niblah's lokale SEO bereiken we nu klanten uit heel de Meierij-regio. Van Den Bosch tot Tilburg - onze werkplaats zit vol!",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Petra Willems",
      company: "Restaurant De Meierijse Hoeve",
      text: "Geweldige resultaten met onze Google Ads! We trekken nu veel meer gasten aan die onderweg zijn tussen Eindhoven en Den Bosch.",
      rating: 5,
      date: "2024-11-05",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Kees Janssen",
      company: "Bouwbedrijf Janssen & Zonen",
      text: "Met de lokale marketing van Niblah krijgen we nu projecten uit Haaren, Oisterwijk en zelfs Boxtel. Top service!",
      rating: 5,
      date: "2024-10-18",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Ingrid van Schaik",
      company: "Wellness Centrum De Meierij",
      text: "De social media strategie heeft ons geholpen om klanten uit de gehele regio te bereiken. Vooral uit de nieuwe woonwijken.",
      rating: 5,
      date: "2024-10-02",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Rob Hendrix",
      company: "Elektrotechniek Hendrix",
      text: "Dankzij de lokale SEO zijn we de eerste keuze voor elektrotechnische installaties in Sint-Michielsgestel en omgeving.",
      rating: 5,
      date: "2024-09-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Marjan Peters",
      company: "Kinderdagverblijf De Meierijse Kinderen",
      text: "Door de gerichte online marketing bereiken we jonge gezinnen in heel de Meierij. Onze wachtlijst groeit gestaag.",
      rating: 5,
      date: "2024-09-10",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Frank van der Meer",
      company: "Tuincentrum De Meierijse Tuin",
      text: "Met de seizoensgebonden Google Ads campagnes bereiken we tuinliefhebbers uit de hele regio. Vooral in het voorjaar merken we het verschil.",
      rating: 5,
      date: "2024-08-28",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Nicole Smits",
      company: "Beauty Salon Haaren",
      text: "Onze online zichtbaarheid is enorm verbeterd. We krijgen nu klanten uit heel de Meierij-regio, van Den Dungen tot Oisterwijk.",
      rating: 5,
      date: "2024-08-15",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Paul Driessen",
      company: "Installatiebedrijf Driessen",
      text: "Niblah heeft ons geholpen om klanten in heel de Meierij te bereiken. Van spoedklussen tot nieuwbouwprojecten - alles komt binnen.",
      rating: 5,
      date: "2024-07-30",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Miranda van Oers",
      company: "Fysiotherapie Praktijk Meierij",
      text: "De website optimalisatie heeft geleid tot veel meer online afspraken. Patiënten uit Boxtel en Vught vinden ons nu ook.",
      rating: 5,
      date: "2024-07-18",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Erik van den Berg",
      company: "Advocatenkantoor Van den Berg",
      text: "Door de lokale marketing bereiken we cliënten uit de hele regio. Onze expertise wordt nu erkend van Den Bosch tot Tilburg.",
      rating: 5,
      date: "2024-06-25",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Carmen Kessels",
      company: "Nagelstudio Meierij Beauty",
      text: "Met de lokale SEO krijgen we klanten uit Sint-Michielsgestel en alle omliggende dorpen. De online boekingen zijn verdrievoudigd.",
      rating: 5,
      date: "2024-06-10",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Sint-Michielsgestel - Online Marketing Bureau Meierij | Niblah</title>
        <meta name="description" content="SEO specialist in Sint-Michielsgestel, Meierij-regio. Lokale expertise voor bedrijven tussen Den Bosch en Eindhoven. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
        <meta name="keywords" content="SEO specialist Sint-Michielsgestel, online marketing Meierij, digital marketing Haaren, website optimalisatie Sint-Michielsgestel, Google Ads Noord-Brabant, SEO bureau Sint-Michielsgestel" />
        <link rel="canonical" href="https://niblah.com/marketing/sint-michielsgestel" />
        <meta property="og:title" content="SEO Specialist Sint-Michielsgestel - Online Marketing Bureau Meierij" />
        <meta property="og:description" content="Specialist in SEO en online marketing voor bedrijven in Sint-Michielsgestel en de Meierij-regio. Verhoog je online zichtbaarheid met lokale expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niblah.com/marketing/sint-michielsgestel" />
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Sint-Michielsgestel" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Niblah - SEO Specialist Sint-Michielsgestel",
            "image": "https://niblah.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sint-Michielsgestel",
              "addressRegion": "Noord-Brabant",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.6406,
              "longitude": 5.3531
            },
            "url": "https://niblah.com/marketing/sint-michielsgestel",
            "telephone": "+31-85-1234567",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 51.6406,
                "longitude": 5.3531
              },
              "geoRadius": 25000
            },
            "areaServed": ["Sint-Michielsgestel", "Haaren", "Oisterwijk", "Boxtel", "Vught", "Den Dungen", "Berlicum"],
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
              <span className="block text-blue-600">Sint-Michielsgestel</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Strategisch gelegen in de Meierij-regio, tussen de bruisende steden Den Bosch en Eindhoven, 
              vormt Sint-Michielsgestel met haar ruim 29.000 inwoners een bloeiende gemeenschap. Bestaande uit 
              de kernen Sint-Michielsgestel, Haaren, Esch en Helvoirt, biedt deze gemeente een perfecte mix van 
              kleinschaligheid en bereikbaarheid - ideaal voor bedrijven die zowel lokaal geworteld als 
              regionaal ambitieus zijn.
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
            title: "Lokale SEO Meierij-regio",
            description: "Gespecialiseerd in het bereiken van klanten in Sint-Michielsgestel, Haaren, Helvoirt en de bredere Meierij. We kennen de lokale markt en weten hoe bedrijven in deze strategische regio het beste online zichtbaar worden."
          },
          {
            icon: "📱",
            title: "Google Ads tussen Den Bosch & Eindhoven",
            description: "Effectieve advertentiecampagnes die inspelen op de unieke ligging tussen twee belangrijke steden. Perfect voor bedrijven die zowel lokale klanten willen bereiken als profiteren van de doorstroom tussen beide steden."
          },
          {
            icon: "💻",
            title: "Website Optimalisatie Brabant",
            description: "Websites die de warme Brabantse mentaliteit uitstralen maar tegelijk professioneel overkomen. Perfect afgestemd op bedrijven die de balans zoeken tussen lokale authenticiteit en regionale ambitie."
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
              Online Marketing voor Sint-Michielsgestel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van lokale zoekmachine-optimalisatie tot regionale advertentiecampagnes - 
              wij helpen bedrijven in de Meierij-regio hun online doelen te bereiken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lokale SEO Optimalisatie</h3>
              <p className="text-gray-600 mb-6">
                Speciaal afgestemd op de Meierij-regio. Wij zorgen dat je bedrijf vindbaar is voor 
                zoekopdrachten zoals 'restaurant Haaren' of 'installateur Sint-Michielsgestel'.
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
                Gerichte advertenties voor bedrijven in de strategische ligging tussen Den Bosch en Eindhoven. 
                Perfect voor het aantrekken van klanten uit beide richtingen.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Geografisch gerichte campagnes</li>
                <li>• Multi-steden targeting</li>
                <li>• Regionale concurrent analyse</li>
                <li>• ROI-geoptimaliseerde budgetten</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Ontwikkeling</h3>
              <p className="text-gray-600 mb-6">
                Moderne websites die de Brabantse gezelligheid combineren met professionele uitstraling. 
                Perfect voor bedrijven die zowel lokaal als regionaal willen opereren.
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
                Bereik de lokale gemeenschap en de bredere regio via Facebook, Instagram en LinkedIn. 
                Perfect voor het bouwen van een sterke regionale aanwezigheid.
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
                Persoonlijke communicatie met klanten in de Meierij. Perfect voor nieuwsbrieven 
                over lokale events, seizoensaanbiedingen en regionale ontwikkelingen.
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
                Inzicht in hoe je online marketing presteert in de Meierij-regio. Transparante 
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
              Antwoorden op de meest gestelde vragen over online marketing in Sint-Michielsgestel
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wat kost SEO voor een bedrijf in Sint-Michielsgestel?
              </h3>
              <p className="text-gray-600">
                SEO-pakketten beginnen vanaf €800 per maand voor lokale bedrijven in Sint-Michielsgestel. 
                Dit omvat Google My Business optimalisatie, lokale zoekwoord research en 
                maandelijkse rapportages specifiek voor de Meierij-regio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hoe lang duurt het voordat ik resultaat zie?
              </h3>
              <p className="text-gray-600">
                Voor lokale SEO in de Meierij zien we meestal binnen 2-3 maanden de eerste 
                verbeteringen in Google My Business en lokale zoekresultaten. Volledige 
                SEO-resultaten zijn zichtbaar na 4-6 maanden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Welke bedrijven in de regio hebben het meeste baat bij SEO?
              </h3>
              <p className="text-gray-600">
                Vooral bedrijven die de bredere regio willen bereiken: restaurants, automotive, 
                zorgverleners, bouw & installatie, en retailers. De ligging tussen Den Bosch 
                en Eindhoven biedt veel mogelijkheden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wat maakt de Meierij-regio uniek voor online marketing?
              </h3>
              <p className="text-gray-600">
                De strategische ligging tussen Den Bosch en Eindhoven biedt unieke kansen. 
                Bedrijven kunnen profiteren van lokale binding én regionale bereikbaarheid. 
                Plus de sterke Brabantse gemeenschapszin die goed werkt in online marketing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kan ik zowel lokale als regionale klanten bereiken?
              </h3>
              <p className="text-gray-600">
                Absoluut! We maken een strategie die lokale SEO combineert met regionale 
                Google Ads. Zo bereik je zowel inwoners van Sint-Michielsgestel als 
                potentiële klanten uit Den Bosch, Eindhoven en omliggende gemeenten.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hoe belangrijk is lokale content voor SEO?
              </h3>
              <p className="text-gray-600">
                Zeer belangrijk! We maken content over lokale events, Brabantse tradities, 
                regionale economie en bedrijvenverhalen. Dit helpt bij ranking én 
                community building in de Meierij.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wat zijn de kosten voor Google Ads in deze regio?
              </h3>
              <p className="text-gray-600">
                Google Ads budgetten starten vanaf €500 per maand voor lokale campagnes. 
                Voor regionale campagnes die Den Bosch en Eindhoven includen, adviseren 
                we €1000-2500 per maand afhankelijk van je sector.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hoe meet ik het succes van mijn online marketing?
              </h3>
              <p className="text-gray-600">
                We gebruiken Google Analytics, Google My Business Insights en call tracking 
                om websitebezoek, telefoontjes, routeaanvragen en conversies bij te houden. 
                Maandelijks krijg je een duidelijk rapport met ROI-berekeningen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in de Meierij te verbeteren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in Sint-Michielsgestel en de bredere regio. 
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