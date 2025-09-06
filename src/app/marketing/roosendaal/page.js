import Head from 'next/head'
import HeroSection from '../../../components/HeroSection'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function RoosendaalPage() {
  const dutchReviews = [
    {
      name: "Piet van Bergen",
      company: "Bouwbedrijf West-Brabant",
      rating: 5,
      text: "Uitstekende SEO resultaten voor ons bouwbedrijf. We krijgen nu klanten uit heel West-Brabant, van Roosendaal tot Bergen op Zoom. Online zichtbaarheid enorm verbeterd."
    },
    {
      name: "Marieke Janssen",
      company: "Tandartspraktijk Roosendaal",
      rating: 5,
      text: "Geweldige lokale SEO voor onze praktijk. Nieuwe patiënten uit Roosendaal, Etten-Leur en Breda vinden ons nu makkelijk online."
    },
    {
      name: "Rob Smits",
      company: "Autogarage Brabantse Service",
      rating: 5,
      text: "Professionele aanpak en meetbare resultaten. Website staat bovenaan voor autogarage Roosendaal en we krijgen klanten uit de hele regio."
    },
    {
      name: "Sandra de Wit",
      company: "Advocatenkantoor West-Brabant",
      rating: 5,
      text: "Perfecte SEO strategie voor juridische dienstverlening. We trekken gekwalificeerde cliënten aan uit heel West-Brabant."
    },
    {
      name: "Michel Peeters",
      company: "Restaurant De Brabantse Tafel",
      rating: 5,
      text: "Lokale vindbaarheid fantastisch verbeterd. Zowel locals als bezoekers uit België vinden ons nu gemakkelijk online."
    },
    {
      name: "Linda van Eck",
      company: "Kapsalon Beauty Roosendaal",
      rating: 5,
      text: "SEO expertise die werkt! Google rankings omhooggeschoten en veel meer online boekingen van klanten uit de regio."
    }
  ];

  const dutchMoreReviews = [
    {
      name: "Hans Vermeer",
      company: "Installatiebedrijf Brabant",
      rating: 5,
      text: "Geweldige resultaten voor onze technische dienstverlening. Website trekt klanten aan uit Roosendaal, Etten-Leur en Bergen op Zoom."
    },
    {
      name: "Carla Driessen",
      company: "Boekhouder Roosendaal",
      rating: 5,
      text: "Lokale expertise in West-Brabant. Nieuwe mkb klanten vinden ons nu via Google in plaats van alleen doorverwijzingen."
    },
    {
      name: "Peter van Dijk",
      company: "Tuincentrum Roosendaal",
      rating: 5,
      text: "Website staat bovenaan voor tuincentrum West-Brabant. Krijgen klanten uit Nederland en België."
    },
    {
      name: "Nicole Bakker",
      company: "Fysiotherapie Centrum",
      rating: 5,
      text: "Uitstekende lokale SEO. Patiënten uit Roosendaal en omliggende gemeenten vinden ons nu veel makkelijker."
    },
    {
      name: "Tom Hendriks",
      company: "IT Support West-Brabant",
      rating: 5,
      text: "Perfect begrip van regionale B2B markt. Onze IT diensten worden gevonden door bedrijven in heel West-Brabant."
    },
    {
      name: "Anita Mollen",
      company: "Webshop Brabantse Producten",
      rating: 5,
      text: "E-commerce SEO die resultaat levert! Online verkoop van streekproducten groeit internationaal."
    }
  ];

  return (
    <>
      <Head>
        <title>SEO Specialist Roosendaal | Online Marketing Bureau Roosendaal</title>
        <meta name="description" content="SEO specialist in Roosendaal voor hogere Google rankings. Lokale expertise in West-Brabant. Meer klanten via professionele SEO strategieën." />
        <meta name="keywords" content="SEO specialist Roosendaal, online marketing Roosendaal, Google Ads Roosendaal, website optimalisatie West-Brabant, digital marketing Bergen op Zoom" />
        <link rel="canonical" href="https://niblah.com/marketing/roosendaal" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SEO Specialist Roosendaal - Niblah",
          "description": "Professionele SEO diensten in Roosendaal voor meer online zichtbaarheid",
          "url": "https://niblah.com/marketing/roosendaal",
          "telephone": "+31-85-1234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Centrum",
            "addressLocality": "Roosendaal",
            "addressRegion": "Noord-Brabant",
            "postalCode": "4701",
            "addressCountry": "NL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.5308,
            "longitude": 4.4653
          }
        })}
        </script>
      </Head>

      <HeroSection
        title="SEO Specialist Roosendaal"
        subtitle="Digital Marketing Agency Roosendaal"
        description="Roosendaal, met 77.000 inwoners strategisch gelegen aan de Belgische grens, is het hart van West-Brabant en een belangrijke schakel tussen Nederland en België. Van het bruisende stadscentrum tot de moderne bedrijventerreinen aan de A17 - deze grensstad biedt unieke kansen voor ondernemers die zowel Nederlandse als Belgische klanten willen bereiken. Wij helpen lokale bedrijven om online te groeien en te profiteren van deze grensoverschrijdende mogelijkheden."
        ctaText="Vraag SEO Advies Aan"
        ctaLink="/contact"
        imageSrc="/assets/hero-seo.jpg"
        imageAlt="SEO Specialist Roosendaal - Online Marketing"
      />

      <FeatureSection
        title="Waarom Kiezen Voor SEO in Roosendaal?"
        features={[
          {
            title: "Grensregio Expertise",
            description: "Gespecialiseerd in cross-border marketing tussen Nederland en België. Ideaal voor bedrijven die klanten willen bereiken in beide landen en profiteren van de unieke ligging.",
            icon: "🌍"
          },
          {
            title: "West-Brabant Kennis",
            description: "Diepgaande expertise in de West-Brabantse markt. Van Roosendaal tot Bergen op Zoom, Etten-Leur en Breda - we weten hoe ondernemers in deze regio denken en zoeken.",
            icon: "🏘️"
          },
          {
            title: "Strategische Ligging",
            description: "Profiteer van Roosendaal's positie als knooppunt tussen Nederland en België. Onze SEO strategieën benutten deze geografische voordelen voor maximale bereik.",
            icon: "🚀"
          }
        ]}
      />

      <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Onze SEO Services in Roosendaal</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Lokale SEO Roosendaal</h3>
                <p className="text-gray-600 mb-4">
                  Optimaliseer uw vindbaarheid in Roosendaal, Bergen op Zoom, Etten-Leur en heel West-Brabant.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Google My Business optimalisatie</li>
                  <li>• Lokale keyword targeting</li>
                  <li>• Citations en online recensies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Cross-Border SEO</h3>
                <p className="text-gray-600 mb-4">
                  Speciaal voor bedrijven die klanten willen bereiken in zowel Nederland als België. Meertalige strategieën en grensoverschrijdende targeting.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Nederlandse en Vlaamse SEO</li>
                  <li>• Internationale targeting</li>
                  <li>• Cross-border marketing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">E-commerce SEO</h3>
                <p className="text-gray-600 mb-4">
                  Verhoog online verkoop met focus op zowel Nederlandse als Belgische klanten. Perfect voor webshops die grensoverschrijdend verkopen.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Productpagina optimalisatie</li>
                  <li>• Internationale webshop SEO</li>
                  <li>• Conversie optimalisatie</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Professionele Diensten</h3>
                <p className="text-gray-600 mb-4">
                  Voor advocaten, tandartsen, consultants en andere professionals die cliënten zoeken in West-Brabant en de grensregio.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Expertise content marketing</li>
                  <li>• Vertrouwen opbouwende SEO</li>
                  <li>• Regionale lead generation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar Om Te Groeien in Roosendaal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Profiteer van Roosendaal's unieke positie aan de Nederlandse-Belgische grens. 
            Onze lokale SEO expertise zorgt voor meer zichtbaarheid in beide landen.
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