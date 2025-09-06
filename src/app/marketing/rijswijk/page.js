import Head from 'next/head'
import Header from '../../../components/header'
import Hero from '../../../components/Hero'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Patricia van der Meer",
    business: "Consultancy Van der Meer",
    rating: 5,
    review: "Perfect voor onze B2B consultancy in Rijswijk! We krijgen nu leads van overheidsorganisaties en internationale bedrijven uit de Den Haag regio. Onze LinkedIn en SEO strategie werkt uitstekend."
  },
  {
    name: "Robert Jansen",
    business: "Jansen Legal Services",
    rating: 5,
    review: "Als juridisch dienstverlener in de government sector was het lastig om online gevonden te worden. Nu staan we bovenaan bij zoekopdrachten naar 'juridisch advies overheid' en hebben veel meer klanten."
  },
  {
    name: "Monica Verhoeven",
    business: "International Business Center",
    rating: 5,
    review: "Onze business center trekt nu veel meer internationale bedrijven aan die zich in de Den Haag regio willen vestigen. De meertalige SEO aanpak werkt fantastisch voor onze doelgroep."
  },
  {
    name: "Thomas Bakker",
    business: "Bakker IT Solutions",
    rating: 5,
    review: "Geweldige resultaten voor onze IT dienstverlening! We bedienen nu overheidsorganisaties en internationale bedrijven in heel Zuid-Holland. B2B leads zijn verdrievoudigd."
  },
  {
    name: "Sabine de Wit",
    business: "Executive Search De Wit",
    rating: 5,
    review: "Onze recruitment firma wordt nu gevonden door zowel kandidaten als bedrijven in de government en internationale sector. Perfect voor onze niche in de Den Haag regio."
  },
  {
    name: "Marco Hendricks",
    business: "Hendricks Facility Management",
    rating: 5,
    review: "Door de lokale SEO focus krijgen we nu contracten van overheidsinstellingen en bedrijven in Rijswijk en Den Haag. Onze omzet is met 50% gestegen!"
  }
]

const dutchMoreReviews = [
  {
    name: "Elena Rodriguez",
    business: "International Tax Advisory",
    rating: 5,
    review: "Perfect voor onze belastingadvies firma! We helpen nu internationale bedrijven die zich vestigen in Nederland. De expertise in internationale SEO is onmisbaar."
  },
  {
    name: "Joost van Bergen",
    business: "Van Bergen Translations",
    rating: 5,
    review: "Onze vertaalservice wordt nu gevonden door overheidsorganisaties en internationale bedrijven. Vooral de focus op government sector heeft ons veel nieuwe klanten opgeleverd."
  },
  {
    name: "Linda Smits",
    business: "Corporate Training Solutions",
    rating: 5,
    review: "Geweldig! Onze trainingen voor overheid en bedrijfsleven worden nu veel beter gevonden online. We trainen nu teams door heel Zuid-Holland."
  },
  {
    name: "David Chen",
    business: "Chen Engineering Consultancy",
    rating: 5,
    review: "Als technisch adviseur krijg ik nu opdrachten van zowel overheid als private sector. De B2B SEO strategie heeft mijn klantenbestand enorm uitgebreid."
  },
  {
    name: "Natalie Broers",
    business: "Government Relations Broers",
    rating: 5,
    review: "Onze lobby- en relatieadvies firma staat nu bovenaan bij relevante zoekopdrachten. Perfect voor onze gespecialiseerde dienstverlening aan de government sector."
  },
  {
    name: "Alexander Kools",
    business: "Kools Security Services",
    rating: 5,
    review: "Uitstekende resultaten voor onze beveiligingsdiensten! We bedienen nu zowel overheidsinstellingen als internationale bedrijven in de Den Haag regio."
  }
]

export default function RijswijkPage() {
  const features = [
    {
      title: "B2B SEO Rijswijk",
      description: "Gespecialiseerde B2B SEO voor professionele dienstverleners in Rijswijk en de Den Haag regio. We zorgen dat jouw bedrijf gevonden wordt door overheidsorganisaties, internationale bedrijven en multinationals. Focus op LinkedIn integratie en professional networking."
    },
    {
      title: "Government Sector Marketing",
      description: "Expertise in marketing voor bedrijven die de overheid bedienen. Van consultancy tot IT-diensten - we begrijpen hoe je zichtbaar wordt voor government organisaties in Den Haag, Rijswijk en omgeving. Inclusief tender en aanbesteding optimalisatie."
    },
    {
      title: "International Business SEO",
      description: "Meertalige SEO voor bedrijven die internationale organisaties bedienen in de Den Haag regio. Van ambassades tot multinationals - we helpen je bereiken van de diverse internationale business community rond Rijswijk en Den Haag."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Rijswijk kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke business omgeving van Rijswijk in de Den Haag regio. Met circa 54.000 inwoners en strategisch gelegen naast Den Haag, is Rijswijk een belangrijke hub voor overheid, internationale organisaties en professionele dienstverlening. Ik help bedrijven zichtbaar worden in deze concurrentieke B2B markt."
    },
    {
      question: "Wat kost B2B SEO in Rijswijk?",
      answer: "B2B SEO voor Rijswijk start vanaf €1200 per maand vanwege de hoge waarde van government en international business leads. Voor bedrijven die internationale klanten willen bereiken of zich richten op overheidscontracten bieden we uitgebreidere pakketten vanaf €1850 per maand."
    },
    {
      question: "Hoe bereik ik overheidsorganisaties online?",
      answer: "We gebruiken een gespecialiseerde aanpak voor government marketing: optimalisatie voor overheid-specifieke zoektermen, LinkedIn B2B campaigns, en content die aansluit bij aanbesteding procedures. Plus lokale SEO voor Den Haag government district zichtbaarheid."
    },
    {
      question: "Welke bedrijven in Rijswijk hebben SEO nodig?",
      answer: "Vooral consultancy firms, juridische dienstverleners, IT-bedrijven, facility management, recruitment agencies, accounting firms, en alle bedrijven die government of international business bedienen. Ook startups die toegang zoeken tot de Den Haag business community."
    },
    {
      question: "Werkt LinkedIn marketing in Rijswijk?",
      answer: "Absoluut cruciaal! LinkedIn is essentieel voor B2B marketing in Rijswijk vanwege de hoge concentratie professionals, government officials en international business executives. We integreren LinkedIn Ads met SEO voor maximale business visibility."
    },
    {
      question: "Hoe belangrijk is content marketing voor B2B?",
      answer: "Zeer belangrijk in de Rijswijk/Den Haag business omgeving. We ontwikkelen thought leadership content, whitepapers en case studies die aansluiten bij government en international business needs. Content die vertrouwen opbouwt in professionele kringen."
    },
    {
      question: "Kunnen jullie helpen met internationale klanten?",
      answer: "Ja, we hebben uitgebreide ervaring met marketing voor de internationale business community in Den Haag regio. Meertalige SEO, cultural sensitive content, en targeting van specific international business segments en ambassades."
    },
    {
      question: "Wat maakt Rijswijk B2B marketing uniek?",
      answer: "De nabijheid van government institutions, international organizations, en de hoge concentratie professionals maakt Rijswijk uniek. We moeten marketing doen die aansluit bij professional standards, government procedures, en internationale business cultuur."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Rijswijk | Online Marketing Bureau Den Haag Regio</title>
        <meta name="description" content="SEO specialist in Rijswijk en Den Haag regio. Verhoog je online zichtbaarheid voor government, business en internationale organisaties. B2B marketing expertise." />
        <meta name="keywords" content="SEO Rijswijk, online marketing Rijswijk, SEO specialist Den Haag, marketing bureau Rijswijk" />
        <link rel="canonical" href="https://niblah.com/marketing/rijswijk" />
      </Head>
      
      <Header location="Rijswijk" />
      
      <Hero 
        title="Digital Marketing Agency Rijswijk"
        subtitle="Jouw B2B marketing partner in de Den Haag regio"
        description="Rijswijk, strategisch gelegen in het hart van de Den Haag regio met circa 54.000 inwoners, vormt een belangrijke schakel tussen de regering, internationale organisaties en het Nederlandse bedrijfsleven. Deze moderne gemeente herbergt een unieke mix van overheidsorganisaties, multinationals, professionele dienstverleners en internationale bedrijven die profiteren van de nabijheid van het regeringscentrum. Als specialist in B2B digitale marketing voor de government en business sector begrijp ik hoe bedrijven in Rijswijk zichtbaar kunnen worden voor hun professionele doelgroepen. Van consultancy firms tot IT-bedrijven - ik help jouw bedrijf groeien door strategische marketing die aansluit bij de professionele standaarden van deze dynamische business community."
        ctaText="Versterk je B2B positie"
        ctaLink="#contact"
      />

      <FeatureSection 
        features={features}
        title="Online Marketing Diensten Rijswijk"
        subtitle="Gespecialiseerd in B2B en government marketing"
      />

      <ReviewSlider reviews={dutchReviews.concat(dutchMoreReviews)} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Rijswijk Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Government Sector Expertise</h3>
                <p className="text-gray-700">
                  Diepgaande kennis van overheidsmarketing en aanbesteding processen. We begrijpen hoe bedrijven 
                  zichtbaar worden voor government organisaties en overheidsopdrachten in de Den Haag regio.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">B2B Marketing Focus</h3>
                <p className="text-gray-700">
                  Gespecialiseerd in business-to-business marketing met focus op professional services, consultancy, 
                  en corporate dienstverlening. LinkedIn integratie en thought leadership content development.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">International Business Kennis</h3>
                <p className="text-gray-700">
                  Ervaring met marketing voor internationale bedrijven en organisaties in de Den Haag regio. 
                  Meertalige content en cultureel sensitive marketing approaches voor diverse business communities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Network Understanding</h3>
                <p className="text-gray-700">
                  Begrip van professional networking en business development in de Rijswijk/Den Haag omgeving. 
                  Strategies die aansluiten bij high-level business decision making en professional standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Veelgestelde Vragen SEO Rijswijk
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        title="Versterk je B2B Positie in Rijswijk"
        subtitle="Klaar om zichtbaarder te worden voor government en international business? Neem contact op voor een professionele analyse van je huidige B2B marketing positie."
      />

      <Footer 
        location="Rijswijk"
        serviceArea="Actief in Rijswijk en omliggende gemeenten"
        areas={["Den Haag", "Delft", "Voorburg", "Leidschendam", "Wassenaar"]}
      />
    </>
  )
}