import Head from 'next/head'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function WestlandPage() {
  const dutchReviews = [
    {
      name: "Marcel van der Berg",
      company: "Greenhouse Solutions Naaldwijk",
      rating: 5,
      text: "Dankzij de lokale SEO expertise van dit team worden we nu veel beter gevonden door internationale kopers. Onze online omzet in de glastuinbouw is met 40% gestegen."
    },
    {
      name: "Sandra Koning",
      company: "Westlandse Groenten Export",
      rating: 5,
      text: "Geweldige resultaten voor onze exportactiviteiten. De website staat nu bovenaan voor belangrijke zoektermen in de groentesector. Professioneel en resultaatgericht."
    },
    {
      name: "Rob Vermeulen",
      company: "Tuincentrum De Lier",
      rating: 5,
      text: "Lokale klanten vinden ons nu veel makkelijker online. Het team begrijpt de dynamiek van het Westland perfect. Onze webshop draait uitstekend."
    },
    {
      name: "Linda Bakker",
      company: "Kwekerij Wateringen",
      rating: 5,
      text: "Fantastische service en duidelijke resultaten. Onze Google rankings zijn enorm verbeterd en we krijgen veel meer leads van potentiële afnemers."
    },
    {
      name: "Tom van Wijk",
      company: "Westland Logistics",
      rating: 5,
      text: "De SEO strategie heeft ons echt geholpen om meer zichtbaarheid te krijgen in de transport en logistiek sector. Aanrader voor elke Westlandse ondernemer."
    },
    {
      name: "Petra Scholten",
      company: "Glastuinbouw Innovatie",
      rating: 5,
      text: "Uitstekende kennis van de glastuinbouwsector. Onze website attraheert nu veel meer technische partners en leveranciers. Heel tevreden met de samenwerking."
    }
  ];

  const dutchMoreReviews = [
    {
      name: "Hans de Groot",
      company: "Westlandse Zadenhandel",
      rating: 5,
      text: "Perfect begrip van onze B2B markt. De website genereert nu kwalitatieve leads van professionele kwekers en tuincentra."
    },
    {
      name: "Marieke Jansen",
      company: "Hoveniersbedrijf Monster",
      rating: 5,
      text: "Lokale SEO expertise die werkt. We worden nu gevonden door klanten in heel Zuid-Holland die tuinaanleg zoeken."
    },
    {
      name: "Erik Hoekstra",
      company: "Techniek Voor Kassen",
      rating: 5,
      text: "Specialistische kennis van de kassenbouw sector. Onze online aanwezigheid is professioneler geworden en trekt meer opdrachten aan."
    },
    {
      name: "Nicole van Dam",
      company: "Westlandse Bloemisterij",
      rating: 5,
      text: "Geweldige resultaten voor onze bloemisterij. Zowel lokale als online verkoop is flink toegenomen door de betere vindbaarheid."
    },
    {
      name: "Paul Hendriks",
      company: "Agro Service Westland",
      rating: 5,
      text: "De website trekt nu veel meer agrariërs aan die onze dienstverlening nodig hebben. ROI is uitstekend."
    },
    {
      name: "Carla Mulder",
      company: "Verpakkingen Voor Groente",
      rating: 5,
      text: "Perfecte focus op de verpakkingsindustrie. We krijgen nu aanvragen van kwekers door heel Nederland dankzij de SEO optimalisatie."
    }
  ];

  return (
    <>
      <Head>
        <title>SEO Specialist Westland | Online Marketing Bureau Westland</title>
        <meta name="description" content="SEO specialist in Westland voor hogere Google rankings. Lokale expertise in Naaldwijk, Wateringen en De Lier. Meer klanten via lokale SEO." />
        <meta name="keywords" content="SEO specialist Westland, online marketing Westland, Google Ads Westland, website optimalisatie Naaldwijk, digital marketing De Lier" />
        <link rel="canonical" href="https://niblah.com/marketing/westland" />
        <meta property="og:title" content="SEO Specialist Westland | Online Marketing Bureau" />
        <meta property="og:description" content="SEO specialist in Westland voor hogere Google rankings. Lokale expertise in glastuinbouwgebied." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niblah.com/marketing/westland" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SEO Specialist Westland | Online Marketing Bureau" />
        <meta name="twitter:description" content="SEO specialist in Westland voor hogere Google rankings. Lokale expertise in glastuinbouwgebied." />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SEO Specialist Westland - Niblah",
          "description": "Professionele SEO diensten in Westland voor meer online zichtbaarheid",
          "url": "https://niblah.com/marketing/westland",
          "telephone": "+31-85-1234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Wateringen",
            "addressLocality": "Westland",
            "addressRegion": "Zuid-Holland",
            "postalCode": "2291",
            "addressCountry": "NL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.0284,
            "longitude": 4.2806
          },
          "openingHours": "Mo-Fr 09:00-17:00",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 52.0284,
              "longitude": 4.2806
            },
            "geoRadius": 25000
          }
        })}
        </script>
      </Head>


      <FeatureSection
        title="Waarom Kiezen Voor SEO in Westland?"
        features={[
          {
            title: "Glastuinbouw Expertise",
            description: "Gespecialiseerd in SEO voor glastuinbouw, exportbedrijven en agro-industrie. We begrijpen de unieke uitdagingen van kwekers, exporteurs en toeleveranciers in het Westland.",
            icon: "🌱"
          },
          {
            title: "Lokale Marktkennis",
            description: "Diepgaande kennis van de Westlandse bedrijfscultuur, van de internationale handelspositie tot lokale B2B netwerken. Effectieve targeting voor zowel nationale als internationale klanten.",
            icon: "🌍"
          },
          {
            title: "B2B Focus",
            description: "Expertise in B2B marketing voor technische dienstverlening, kassenbouw, transportbedrijven en groothandel. Gerichte content en SEO strategieën die leads genereren.",
            icon: "🏭"
          }
        ]}
      />

      <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Onze SEO Services in Westland</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Lokale SEO Westland</h3>
                <p className="text-gray-600 mb-4">
                  Optimaliseer uw vindbaarheid in Naaldwijk, Wateringen, De Lier en omliggende gemeenten. Perfect voor tuincentra, hoveniersbedrijven en lokale dienstverleners.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Google My Business optimalisatie</li>
                  <li>• Lokale keyword targeting</li>
                  <li>• Citations en online recensies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">E-commerce SEO</h3>
                <p className="text-gray-600 mb-4">
                  Verhoog de online verkoop van uw webshop. Ideaal voor tuincentra, zadenhandel en leveranciers in de glastuinbouw sector.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Productpagina optimalisatie</li>
                  <li>• Technische SEO audit</li>
                  <li>• Conversie optimalisatie</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">B2B SEO Strategieën</h3>
                <p className="text-gray-600 mb-4">
                  Speciaal ontwikkeld voor kassenbouw, technische dienstverlening en agro-industrie. Bereik professionele inkopers en beslissers.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Technische content marketing</li>
                  <li>• LinkedIn SEO integratie</li>
                  <li>• Lead generation focus</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Internationale SEO</h3>
                <p className="text-gray-600 mb-4">
                  Voor exportbedrijven die internationale markten willen bereiken. Meertalige SEO strategieën voor groente-export en technologie.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Hreflang implementatie</li>
                  <li>• Internationale keyword research</li>
                  <li>• Multi-regionale targeting</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Veelgestelde Vragen - SEO Westland</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Wat zijn de gemiddelde SEO kosten in Westland?</h4>
                  <p className="text-gray-600">SEO prijzen variëren van €800-2500 per maand, afhankelijk van uw sector en doelstellingen. Voor glastuinbouw bedrijven adviseren we vaak een investering van €1200-1800 voor effectieve resultaten in de competitieve agro-markt.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe lang duurt het voordat ik resultaat zie van SEO in Westland?</h4>
                  <p className="text-gray-600">Eerste resultaten zijn vaak zichtbaar binnen 3-4 maanden. Voor specialistische B2B sectoren zoals kassenbouw of agro-techniek kan het 6-8 maanden duren om substantiële resultaten te behalen in competitieve internationale markten.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Welke bedrijven in Westland hebben het meest baat bij SEO?</h4>
                  <p className="text-gray-600">Glastuinbouw kwekers, exportbedrijven, tuincentra, kassenbouw bedrijven, logistieke dienstverleners en agro-technische leveranciers profiteren het meest van gerichte SEO in dit gespecialiseerde ecosysteem.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe verhoog ik mijn lokale vindbaarheid in Naaldwijk en omgeving?</h4>
                  <p className="text-gray-600">Focus op Google My Business optimalisatie, lokale content over Westlandse activiteiten, en zorg voor consistente NAP (naam, adres, telefoonnummer) gegevens. Klantrecensies en lokale partnerships versterken uw autoriteit.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Kan SEO helpen bij internationale export vanuit Westland?</h4>
                  <p className="text-gray-600">Absoluut. Met meertalige SEO strategieën, internationale keyword targeting en hreflang implementatie helpen we Westlandse exporteurs om nieuwe markten te bereiken en internationale leads te genereren.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Welke SEO strategie werkt het best voor glastuinbouw bedrijven?</h4>
                  <p className="text-gray-600">Een combinatie van technische SEO, content marketing over innovaties, B2B gerichte keywords en internationale targeting. Focus op expertise, autoriteit en vertrouwen (E-A-T) in uw specifieke glastuinbouw niche.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe meet ik het succes van SEO voor mijn Westlandse bedrijf?</h4>
                  <p className="text-gray-600">Key metrics zijn organisch verkeer, keyword rankings voor relevante termen, leads uit organische zoekresultaten, en conversieverbeteringen. Voor B2B bedrijven focussen we op gekwalificeerde leads en aanvragen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar Om Te Groeien in Westland?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laat uw glastuinbouw bedrijf opvallen in het competitieve Westland. 
            Onze lokale SEO expertise zorgt voor meer zichtbaarheid en gekwalificeerde leads.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Start Uw SEO Traject
          </a>
        </div>
      </section>
    </>
  )
}