import Head from 'next/head'
import Header from '/Users/al/mijn-site/src/components/Header'
import Footer from '/Users/al/mijn-site/src/components/Footer'
import FeatureSection from '/Users/al/mijn-site/src/components/FeatureSection'
import ReviewSlider from '/Users/al/mijn-site/src/components/ReviewSlider'

export default function SevenumMarketing() {
  const dutchReviews = [
    {
      name: "Mark van den Berg",
      company: "Peel Metaalwerken Sevenum",
      text: "Door de lokale aanpak van Niblah zijn we veel beter vindbaar geworden voor klanten uit de Peel-regio. Onze offerte-aanvragen zijn met 40% gestegen.",
      rating: 5,
      date: "2024-11-15",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Linda Janssen",
      company: "Horeca Centrum Sevenum",
      text: "Geweldige resultaten met onze Google Ads campagnes! We trekken nu veel meer toeristen aan die onderweg zijn naar de Venlose bossen.",
      rating: 5,
      date: "2024-10-28",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Henk Driessen",
      company: "Agrarisch Bedrijf De Peelse Hoeve",
      text: "Met de SEO-expertise van Niblah bereiken we nu klanten in heel Noord-Limburg. Onze directverkoop is flink gegroeid.",
      rating: 5,
      date: "2024-10-12",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Anja Smits",
      company: "Wellness Studio Sevenum",
      text: "De social media strategie heeft ons geholpen om meer lokale klanten te bereiken. Vooral jonge gezinnen uit de regio vinden ons nu makkelijk online.",
      rating: 5,
      date: "2024-09-30",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Tom Peters",
      company: "Bouwbedrijf Peters & Zonen",
      text: "Dankzij de lokale SEO zijn we nu de eerste keuze voor verbouwingen in Sevenum en omliggende dorpen zoals Kronenberg en Evertsoord.",
      rating: 5,
      date: "2024-09-18",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Sandra Thijssen",
      company: "Kapsalon De Peelse Kroon",
      text: "Onze online zichtbaarheid is enorm verbeterd. We krijgen nu klanten uit heel de Peel-regio, van Horst tot Venray.",
      rating: 5,
      date: "2024-08-22",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const dutchMoreReviews = [
    {
      name: "Paul Hendrix",
      company: "Fietshandel Sevenum",
      text: "Met de nieuwe website en SEO-optimalisatie verkopen we nu fietsen aan recreanten die naar De Maasduinen komen. Top service!",
      rating: 5,
      date: "2024-08-08",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Marieke van Dijk",
      company: "Kinderdagverblijf De Kleine Peel",
      text: "Door de lokale marketing bereiken we jonge ouders in heel Sevenum en de nieuwe woonwijken. Onze wachtlijst groeit gestaag.",
      rating: 5,
      date: "2024-07-25",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69bb00b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Rob Jacobs",
      company: "Accountantskantoor Jacobs",
      text: "Niblah heeft ons geholpen om MKB-bedrijven in de hele Peel-regio te bereiken. Onze klantenkring is flink uitgebreid.",
      rating: 5,
      date: "2024-07-10",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Els Verhoeven",
      company: "Tuincentrum De Peelse Tuin",
      text: "Door de seizoensgebonden SEO-campagnes bereiken we klanten op het juiste moment. Vooral in het voorjaar merken we het verschil.",
      rating: 5,
      date: "2024-06-28",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jan Kessels",
      company: "Installatiebedrijf Kessels",
      text: "Met de Google Ads campagnes krijgen we veel meer spoedklussen binnen. Vooral in nieuwbouwwijken rond Sevenum.",
      rating: 5,
      date: "2024-06-15",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Carla Mullenders",
      company: "Praktijk voor Fysiotherapie",
      text: "De lokale SEO zorgt ervoor dat we patiënten uit heel Noord-Limburg aantrekken. Onze praktijk draait nu op volle capaciteit.",
      rating: 5,
      date: "2024-05-30",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SEO Specialist Sevenum - Online Marketing Bureau Noord-Limburg | Niblah</title>
        <meta name="description" content="SEO specialist in Sevenum, Noord-Limburg. Lokale expertise voor bedrijven in de Peel-regio. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën." />
        <meta name="keywords" content="SEO specialist Sevenum, online marketing Noord-Limburg, digital marketing Peel, website optimalisatie Sevenum, Google Ads Limburg, SEO bureau Sevenum" />
        <link rel="canonical" href="https://niblah.com/marketing/sevenum" />
        <meta property="og:title" content="SEO Specialist Sevenum - Online Marketing Bureau Noord-Limburg" />
        <meta property="og:description" content="Specialist in SEO en online marketing voor bedrijven in Sevenum en de Peel-regio. Verhoog je online zichtbaarheid met lokale expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niblah.com/marketing/sevenum" />
        <meta name="geo.region" content="NL-LI" />
        <meta name="geo.placename" content="Sevenum" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Niblah - SEO Specialist Sevenum",
            "image": "https://niblah.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sevenum",
              "addressRegion": "Noord-Limburg",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.4089,
              "longitude": 6.0367
            },
            "url": "https://niblah.com/marketing/sevenum",
            "telephone": "+31-85-1234567",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 51.4089,
                "longitude": 6.0367
              },
              "geoRadius": 25000
            },
            "areaServed": ["Sevenum", "Kronenberg", "Evertsoord", "Horst", "Venray", "Arcen", "Grubbenvorst"],
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
              <span className="block text-blue-600">Sevenum</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              In het hart van Noord-Limburg, waar de Peel-regio overloopt in natuurgebieden zoals De Maasduinen, 
              ligt Sevenum - een gemeente met een rijke geschiedenis en een bloeiende lokale economie. Met ruim 
              7.800 inwoners vormt Sevenum een belangrijke schakel tussen Venray en Horst, ideaal gelegen voor 
              bedrijven die zowel de lokale gemeenschap als de bredere regio willen bereiken.
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
            title: "Lokale SEO Sevenum & Peel-regio",
            description: "Gespecialiseerd in het bereiken van klanten in Sevenum, Kronenberg, Evertsoord en omliggende dorpen. Wij kennen de lokale markt en weten hoe bedrijven in de Peel-regio het beste online zichtbaar worden voor hun doelgroep."
          },
          {
            icon: "📱",
            title: "Google Ads voor Noord-Limburg",
            description: "Effectieve advertentiecampagnes die inspelen op de unieke geografische ligging van Sevenum. Of je nu toeristen naar De Maasduinen wilt trekken of lokale klanten wilt bereiken - wij zorgen voor gerichte advertenties met meetbare resultaten."
          },
          {
            icon: "💻",
            title: "Website Optimalisatie Peel-gebied",
            description: "Websites die niet alleen mooi zijn, maar ook perfect aansluiten bij de behoeften van bedrijven in de Peel-regio. Van agrarische ondernemingen tot toeristische voorzieningen - wij maken websites die converteren."
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
              Online Marketing voor Sevenum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van lokale zoekmachine-optimalisatie tot gerichte advertentiecampagnes - 
              wij helpen bedrijven in Sevenum en de Peel-regio hun online doelen te bereiken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lokale SEO Optimalisatie</h3>
              <p className="text-gray-600 mb-6">
                Speciaal afgestemd op de Peel-regio. Wij zorgen dat je bedrijf vindbaar is voor 
                zoekopdrachten zoals 'tuincentrum Sevenum' of 'restaurant bij Maasduinen'.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Google My Business optimalisatie</li>
                <li>• Lokale zoekwoord research</li>
                <li>• Citations in Limburgse directories</li>
                <li>• Review management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Google Ads Campagnes</h3>
              <p className="text-gray-600 mb-6">
                Gerichte advertenties voor bedrijven die klanten willen bereiken in Noord-Limburg. 
                Perfect voor seizoensgebonden bedrijven en toeristische ondernemingen.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Geografisch gerichte campagnes</li>
                <li>• Seizoen-specifieke advertenties</li>
                <li>• Toerisme & recreatie focus</li>
                <li>• ROI-geoptimaliseerde budgetten</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Ontwikkeling</h3>
              <p className="text-gray-600 mb-6">
                Moderne websites die de charme van de Peel-regio uitstralen en tegelijk 
                professioneel overkomen bij klanten uit de hele regio.
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
                Bereik jong en oud in Sevenum en omgeving via Facebook, Instagram en LinkedIn. 
                Ideaal voor lokale events en community building.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Lokale content strategie</li>
                <li>• Community management</li>
                <li>• Event promotie</li>
                <li>• Influencer partnerships</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Marketing</h3>
              <p className="text-gray-600 mb-6">
                Persoonlijke communicatie met klanten in de regio. Perfect voor nieuwsbrieven 
                over seizoensaanbiedingen of lokale evenementen.
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
                Inzicht in hoe je online marketing presteert in de Peel-regio. Transparante 
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
              Antwoorden op de meest gestelde vragen over online marketing in Sevenum
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wat kost SEO voor een bedrijf in Sevenum?
              </h3>
              <p className="text-gray-600">
                SEO-pakketten beginnen vanaf €750 per maand voor lokale bedrijven in Sevenum. 
                Dit omvat Google My Business optimalisatie, lokale zoekwoord research en 
                maandelijkse rapportages specifiek voor de Peel-regio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hoe lang duurt het voordat ik resultaat zie?
              </h3>
              <p className="text-gray-600">
                Voor lokale SEO in Sevenum zien we meestal binnen 2-3 maanden de eerste 
                verbeteringen in Google My Business en lokale zoekresultaten. Volledige 
                SEO-resultaten zijn zichtbaar na 4-6 maanden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Welke bedrijven in Sevenum hebben het meeste baat bij SEO?
              </h3>
              <p className="text-gray-600">
                Vooral lokale dienstverleners (restaurants, kappers, installateurs), 
                toeristische bedrijven (hotels, recreatie), en detailhandel profiteren 
                van lokale SEO in de Peel-regio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wat maakt Sevenum uniek voor online marketing?
              </h3>
              <p className="text-gray-600">
                Sevenum ligt strategisch tussen grote steden en natuurgebieden zoals De Maasduinen. 
                Dit biedt kansen voor zowel lokale marketing als toerisme-gerichte campagnes. 
                De mix van agrarische bedrijven en recreatieve voorzieningen vraagt om een 
                gevarieerde aanpak.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kan ik ook klanten buiten Sevenum bereiken?
              </h3>
              <p className="text-gray-600">
                Absoluut! Met gerichte SEO en Google Ads kunnen we je bereik uitbreiden naar 
                Horst, Venray, Arcen en andere gemeenten in Noord-Limburg. We passen de 
                strategie aan op basis van je doelgroep en service-gebied.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Werken jullie ook met seizoensgebonden bedrijven?
              </h3>
              <p className="text-gray-600">
                Ja, we hebben veel ervaring met seizoensgebonden marketing. Denk aan 
                tuincentra in het voorjaar, recreatiebedrijven in de zomer, of 
                schaatsverhuur in de winter. We passen onze campagnes aan op de seizoenen.
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
                Wat is het verschil tussen SEO en Google Ads?
              </h3>
              <p className="text-gray-600">
                SEO is gratis verkeer via organische zoekresultaten (duurt langer, maar is 
                duurzamer), Google Ads zijn betaalde advertenties (direct resultaat, maar 
                kost per klik). Voor bedrijven in Sevenum adviseren we vaak een combinatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je online zichtbaarheid in Sevenum te verbeteren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat ons je helpen om meer klanten te bereiken in de Peel-regio. 
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