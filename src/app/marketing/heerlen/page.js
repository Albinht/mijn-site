import Head from 'next/head'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function HeerlenPage() {
  const dutchReviews = [
    {
      name: "Frank Janssen",
      company: "Bouwbedrijf Heerlen",
      rating: 5,
      text: "Geweldige resultaten voor ons bouwbedrijf in Parkstad. We worden nu veel beter gevonden door klanten in heel Zuid-Limburg. Online aanvragen zijn verdubbeld."
    },
    {
      name: "Maria Peeters",
      company: "Tandartspraktijk Centrum Heerlen",
      rating: 5,
      text: "Lokale SEO expertise die echt werkt. Nieuwe patiënten vinden ons nu makkelijker online. De website staat bovenaan voor tandarts Heerlen."
    },
    {
      name: "Rob Klomp",
      company: "Autogarage Zuid-Limburg",
      rating: 5,
      text: "Perfecte kennis van de lokale markt. Onze garage krijgt nu klanten uit Kerkrade, Brunssum en omliggende plaatsen. Professioneel advies."
    },
    {
      name: "Sandra Willems",
      company: "Advocatenkantoor Heerlen",
      rating: 5,
      text: "Uitstekende SEO strategie voor juridische dienstverlening. We trekken nu gekwalificeerde cliënten aan uit heel Parkstad Limburg."
    },
    {
      name: "Michel Dreessen",
      company: "Restaurant De Heerlense Poort",
      rating: 5,
      text: "Lokale vindbaarheid enorm verbeterd. Toeristen en locals vinden ons nu gemakkelijk online. Reserveringen via internet zijn flink gestegen."
    },
    {
      name: "Linda Hermans",
      company: "Kapsalon Beauty Heerlen",
      rating: 5,
      text: "Fantastische service! Google rankings zijn omhooggeschoten en we krijgen veel meer boekingen via onze website. Aanrader voor elke lokale ondernemer."
    }
  ];

  const dutchMoreReviews = [
    {
      name: "Peter van Gaal",
      company: "Installatiebedrijf Parkstad",
      rating: 5,
      text: "SEO strategie perfect afgestemd op technische dienstverlening. We krijgen nu opdrachten van bedrijven door heel Zuid-Limburg."
    },
    {
      name: "Carla Meulen",
      company: "Boekhouder Heerlen",
      rating: 5,
      text: "Professionele aanpak en meetbare resultaten. Nieuwe klanten vinden ons nu via Google in plaats van alleen via doorverwijzingen."
    },
    {
      name: "Hans Bosmans",
      company: "Schildersbedrijf Limburg",
      rating: 5,
      text: "Lokale expertise die het verschil maakt. Website staat nu bovenaan voor schilder Heerlen en we krijgen wekelijks nieuwe klanten."
    },
    {
      name: "Nicole Rademakers",
      company: "Fysiotherapie Centrum",
      rating: 5,
      text: "Geweldige resultaten voor onze praktijk. Patiënten uit Heerlen en omgeving vinden ons nu veel makkelijker via zoekmachines."
    },
    {
      name: "Tom Geraedts",
      company: "IT Support Parkstad",
      rating: 5,
      text: "Perfect begrip van B2B marketing in Zuid-Limburg. Onze IT diensten worden nu gevonden door MKB bedrijven in de hele regio."
    },
    {
      name: "Anita Wolters",
      company: "Webshop Limburgse Specialiteiten",
      rating: 5,
      text: "E-commerce SEO die werkt! Online verkoop van streekproducten is explosief gegroeid. Klanten uit heel Nederland bestellen nu bij ons."
    }
  ];

  return (
    <>
      <Head>
        <title>SEO Specialist Heerlen | Online Marketing Bureau Heerlen</title>
        <meta name="description" content="SEO specialist in Heerlen voor hogere Google rankings. Lokale expertise in Zuid-Limburg. Meer klanten via professionele SEO en online marketing." />
        <meta name="keywords" content="SEO specialist Heerlen, online marketing Heerlen, Google Ads Heerlen, website optimalisatie Zuid-Limburg, digital marketing Parkstad" />
        <link rel="canonical" href="https://niblah.com/marketing/heerlen" />
        <meta property="og:title" content="SEO Specialist Heerlen | Online Marketing Bureau" />
        <meta property="og:description" content="SEO specialist in Heerlen voor hogere Google rankings. Lokale expertise in Zuid-Limburg." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niblah.com/marketing/heerlen" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SEO Specialist Heerlen | Online Marketing Bureau" />
        <meta name="twitter:description" content="SEO specialist in Heerlen voor hogere Google rankings. Lokale expertise in Zuid-Limburg." />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SEO Specialist Heerlen - Niblah",
          "description": "Professionele SEO diensten in Heerlen voor meer online zichtbaarheid",
          "url": "https://niblah.com/marketing/heerlen",
          "telephone": "+31-85-1234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Centrum",
            "addressLocality": "Heerlen",
            "addressRegion": "Limburg",
            "postalCode": "6411",
            "addressCountry": "NL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.8833,
            "longitude": 5.9833
          },
          "openingHours": "Mo-Fr 09:00-17:00",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 50.8833,
              "longitude": 5.9833
            },
            "geoRadius": 25000
          }
        })}
        </script>
      </Head>


      <FeatureSection
        title="Waarom Kiezen Voor SEO in Heerlen?"
        features={[
          {
            title: "Lokale Marktkennis",
            description: "Diepe expertise in de Parkstad regio, van Heerlen centrum tot Kerkrade, Brunssum en Landgraaf. We begrijpen de lokale bedrijfsdynamiek en consumentengedrag in Zuid-Limburg.",
            icon: "🌍"
          },
          {
            title: "Grensregio Expertise",
            description: "Unieke kennis van cross-border marketing richting Duitsland en België. Ideaal voor bedrijven die klanten willen aantrekken uit Aken, Luik en de Euregio.",
            icon: "🌐"
          },
          {
            title: "Diverse Sectorfocus",
            description: "Ervaring met verschillende sectoren: van gezondheidszorg en juridische diensten tot retail, horeca en technische dienstverlening in de transformerende Limburgse economie.",
            icon: "🏢"
          }
        ]}
      />

      <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Onze SEO Services in Heerlen</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Lokale SEO Heerlen</h3>
                <p className="text-gray-600 mb-4">
                  Optimaliseer uw vindbaarheid in Heerlen, Kerkrade, Brunssum en heel Parkstad Limburg. Perfect voor lokale dienstverleners en retailers.
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
                  Verhoog de online verkoop van uw webshop. Bereik klanten in Zuid-Limburg en de grensregio met gerichte e-commerce SEO strategieën.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Productpagina optimalisatie</li>
                  <li>• Technische SEO audit</li>
                  <li>• Conversie optimalisatie</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Professionele Diensten SEO</h3>
                <p className="text-gray-600 mb-4">
                  Speciaal voor advocaten, tandartsen, accountants en consultants. Bereik gekwalificeerde cliënten in Heerlen en omgeving.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Expertise content marketing</li>
                  <li>• Vertrouwen opbouwende SEO</li>
                  <li>• Lead generation focus</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Cross-Border SEO</h3>
                <p className="text-gray-600 mb-4">
                  Voor bedrijven die klanten willen bereiken in de Euregio. Meertalige SEO strategieën voor Duitse en Belgische markten.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Duitse en Engelse SEO</li>
                  <li>• Internationale targeting</li>
                  <li>• Cross-border marketing</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Veelgestelde Vragen - SEO Heerlen</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Wat kosten SEO diensten in Heerlen?</h4>
                  <p className="text-gray-600">SEO prijzen in Heerlen variëren tussen €600-2000 per maand, afhankelijk van uw doelstellingen en concurrentie. Voor lokale bedrijven adviseren we vaak €800-1200 voor effectieve lokale SEO in Zuid-Limburg.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe lang duurt het om resultaten te zien van SEO in Heerlen?</h4>
                  <p className="text-gray-600">Eerste verbeteringen zijn meestal zichtbaar binnen 2-3 maanden. Voor significante resultaten in competitieve sectoren rekenen we op 4-6 maanden. Lokale SEO toont vaak sneller resultaat dan nationale targeting.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Welke bedrijven in Heerlen profiteren het meest van SEO?</h4>
                  <p className="text-gray-600">Lokale dienstverleners (tandartsen, advocaten, garages), retailers, restaurants, bouwbedrijven en consultants zien vaak de grootste impact. Ook e-commerce bedrijven die regionaal of cross-border verkopen.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Kan ik met SEO klanten uit Duitsland en België bereiken?</h4>
                  <p className="text-gray-600">Ja, met gerichte cross-border SEO strategieën kunt u klanten bereiken in Aken, Luik en andere Euregio steden. Dit vereist meertalige content en specifieke technische implementatie.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe verbeter ik mijn lokale vindbaarheid in Parkstad?</h4>
                  <p className="text-gray-600">Focus op Google My Business, lokale content over Heerlense gebeurtenissen, en zorg voor consistente bedrijfsgegevens online. Klantrecensies en lokale partnerships versterken uw lokale autoriteit.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Wat is de beste SEO strategie voor Heerlense webshops?</h4>
                  <p className="text-gray-600">Combineer lokale SEO met e-commerce optimalisatie. Focus op 'bij mij in de buurt' zoekopdrachten, snelle laadtijden, en productpagina's die lokale voorraad en bezorging benadrukken.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe meet ik het succes van mijn SEO inspanningen?</h4>
                  <p className="text-gray-600">Belangrijke metrics zijn stijging in organisch verkeer, verbetering van keyword rankings, toename van lokale zoekopdrachten, en uiteindelijk meer leads of verkopen via uw website.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar Om Te Groeien in Heerlen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laat uw bedrijf opvallen in Parkstad Limburg. 
            Onze lokale SEO expertise zorgt voor meer zichtbaarheid en klanten uit de hele regio.
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