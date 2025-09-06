import Head from 'next/head'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function GoudaPage() {
  const dutchReviews = [
    {
      name: "Jan van der Kaas",
      company: "Kaashandel Gouda Centrum",
      rating: 5,
      text: "Perfecte SEO voor onze kaasspeciaalzaak. Toeristen en locals vinden ons nu gemakkelijk online. Online bestellingen zijn explosief gegroeid."
    },
    {
      name: "Maria Scholten",
      company: "Tandartspraktijk Gouda Zuid",
      rating: 5,
      text: "Geweldige lokale SEO resultaten. Nieuwe patiënten uit Gouda en omliggende dorpen vinden ons nu makkelijk via Google."
    },
    {
      name: "Rob Wetering",
      company: "Installatiebedrijf Groene Hart",
      rating: 5,
      text: "Professionele aanpak voor ons technisch bedrijf. Online zichtbaarheid enorm verbeterd in heel Zuid-Holland."
    },
    {
      name: "Sandra Bos",
      company: "Advocatenkantoor Gouda",
      rating: 5,
      text: "Uitstekende SEO strategie voor juridische dienstverlening. We trekken gekwalificeerde cliënten aan uit de hele regio."
    },
    {
      name: "Michel van Dam",
      company: "Restaurant De Goudse Waag",
      rating: 5,
      text: "Lokale vindbaarheid fantastisch verbeterd. Zowel toeristen als locals reserveren nu online. Geweldige resultaten."
    },
    {
      name: "Linda Polder",
      company: "Schoonheidssalon Gouda",
      rating: 5,
      text: "SEO expertise die echt werkt! Google rankings omhooggeschoten en veel meer online boekingen van klanten uit de streek."
    }
  ];

  const dutchMoreReviews = [
    {
      name: "Hans Visser",
      company: "Bouwbedrijf Groene Hart",
      rating: 5,
      text: "Geweldige resultaten voor onze bouwprojecten. Website trekt klanten aan uit Alphen, Waddinxveen en omgeving."
    },
    {
      name: "Carla Dekker",
      company: "Boekhouder Gouda",
      rating: 5,
      text: "Lokale expertise in het Groene Hart gebied. Nieuwe mkb klanten vinden ons nu via Google in plaats van alleen doorverwijzingen."
    },
    {
      name: "Peter Jansen",
      company: "Autogarage Gouda Service",
      rating: 5,
      text: "Website staat bovenaan voor autogarage Gouda. Krijgen klanten uit heel Midden-Nederland."
    },
    {
      name: "Nicole Mulder",
      company: "Fysiotherapie Centrum",
      rating: 5,
      text: "Uitstekende lokale SEO. Patiënten uit Gouda, Bodegraven en Reeuwijk vinden ons nu veel makkelijker online."
    },
    {
      name: "Tom Hoekstra",
      company: "IT Support Groene Hart",
      rating: 5,
      text: "Perfect begrip van lokale B2B markt. Onze IT diensten worden nu gevonden door bedrijven in de hele streek."
    },
    {
      name: "Anita van Wijk",
      company: "Webshop Goudse Specialiteiten",
      rating: 5,
      text: "E-commerce SEO die werkt! Online verkoop van streekproducten groeit nationaal. Klanten uit heel Nederland bestellen."
    }
  ];

  return (
    <>
      <Head>
        <title>SEO Specialist Gouda | Online Marketing Bureau Gouda</title>
        <meta name="description" content="SEO specialist in Gouda voor hogere Google rankings. Lokale expertise in Zuid-Holland. Meer klanten via professionele SEO strategieën." />
        <meta name="keywords" content="SEO specialist Gouda, online marketing Gouda, Google Ads Gouda, website optimalisatie Zuid-Holland, digital marketing Bodegraven" />
        <link rel="canonical" href="https://niblah.com/marketing/gouda" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SEO Specialist Gouda - Niblah",
          "description": "Professionele SEO diensten in Gouda voor meer online zichtbaarheid",
          "url": "https://niblah.com/marketing/gouda",
          "telephone": "+31-85-1234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Markt",
            "addressLocality": "Gouda",
            "addressRegion": "Zuid-Holland",
            "postalCode": "2801",
            "addressCountry": "NL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.0115,
            "longitude": 4.7104
          }
        })}
        </script>
      </Head>


      <FeatureSection
        title="Waarom Kiezen Voor SEO in Gouda?"
        features={[
          {
            title: "Toerisme & Lokaal Expertise",
            description: "Gespecialiseerd in SEO strategieën die zowel toeristen als lokale klanten aantrekken. Van kaasspeciaalzaken tot restaurants - we weten hoe Gouda's unieke karakter online te benutten.",
            icon: "🧀"
          },
          {
            title: "Groene Hart Regio",
            description: "Diepgaande kennis van het Groene Hart gebied. Van Gouda tot Alphen aan den Rijn, Bodegraven en Woerden - we bereiken klanten in de hele streek.",
            icon: "🌿"
          },
          {
            title: "Historie & Moderniteit",
            description: "Expertise in het combineren van Gouda's historische charme met moderne digitale marketing. Ideaal voor zowel traditionele als innovative bedrijven.",
            icon: "🏛️"
          }
        ]}
      />

      <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Onze SEO Services in Gouda</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Lokale SEO Gouda</h3>
                <p className="text-gray-600 mb-4">
                  Optimaliseer uw vindbaarheid in Gouda, Alphen aan den Rijn, Bodegraven en het hele Groene Hart gebied.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Google My Business optimalisatie</li>
                  <li>• Lokale keyword targeting</li>
                  <li>• Citations en online recensies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Toerisme & Horeca SEO</h3>
                <p className="text-gray-600 mb-4">
                  Speciaal voor restaurants, hotels, winkels en attracties die toeristen willen bereiken. Profiteer van Gouda's toeristische aantrekkingskracht.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Toeristische keyword targeting</li>
                  <li>• Seizoensgebonden optimalisatie</li>
                  <li>• Multi-channel marketing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">E-commerce SEO</h3>
                <p className="text-gray-600 mb-4">
                  Verhoog online verkoop van lokale producten en specialiteiten. Perfect voor Goudse kaas, streekproducten en ambachtelijke goederen.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Productpagina optimalisatie</li>
                  <li>• Streekproduct SEO</li>
                  <li>• Conversie optimalisatie</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Professionele Diensten</h3>
                <p className="text-gray-600 mb-4">
                  Voor advocaten, tandartsen, accountants en consultants die cliënten zoeken in Zuid-Holland en het Groene Hart.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Expertise content marketing</li>
                  <li>• Vertrouwen opbouwende SEO</li>
                  <li>• Regionale lead generation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Veelgestelde Vragen - SEO Gouda</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Wat kosten SEO diensten in Gouda?</h4>
                  <p className="text-gray-600">SEO prijzen variëren tussen €600-1600 per maand. Voor horeca/toerisme €800-1200, lokale dienstverleners €600-1000, afhankelijk van seizoenaliteit en concurrentie.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe lang duurt het om resultaat te zien?</h4>
                  <p className="text-gray-600">Eerste verbeteringen zijn vaak zichtbaar binnen 2-3 maanden. Voor toeristische bedrijven kan seizoenaliteit invloed hebben op de timing van resultaten.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Welke bedrijven in Gouda profiteren het meest van SEO?</h4>
                  <p className="text-gray-600">Horeca, hotels, kaasspeciaalzaken, toeristische attracties, lokale retail, professionele dienstverleners en ambachtelijke bedrijven zien vaak de grootste impact.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Kan ik zowel toeristen als locals bereiken met SEO?</h4>
                  <p className="text-gray-600">Absoluut! We ontwikkelen strategieën die verschillende zoekintentions bedienen - van 'kaas kopen Gouda' tot 'restaurant Gouda centrum' voor toeristen.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe optimaliseer ik voor toeristische seizoenen?</h4>
                  <p className="text-gray-600">Met seizoensgebonden content, tijdelijke promoties en aangepaste keyword focus. We bereiden uw website voor op drukke periodes zoals kaasmarkten en feestdagen.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Werkt SEO voor traditionele Goudse bedrijven?</h4>
                  <p className="text-gray-600">Zeker! Traditionele bedrijven kunnen enorm profiteren van online zichtbaarheid. We combineren erfgoed-marketing met moderne SEO technieken.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe meet ik succes van SEO voor mijn Goudse bedrijf?</h4>
                  <p className="text-gray-600">Focus op lokale rankings, website bezoekers uit de regio, online reserveringen/bestellingen en seizoensgebonden groei patronen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar Om Te Groeien in Gouda?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Profiteer van Gouda's unieke charme en toeristische aantrekkingskracht. 
            Onze lokale SEO expertise zorgt voor meer zichtbaarheid bij locals en toeristen.
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