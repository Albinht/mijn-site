import Head from 'next/head'
import Header from '../../../components/header'
import Hero from '../../../components/Hero'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'
import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

const dutchReviews = [
  {
    name: "Captain Marina Visser",
    business: "Visser Maritime Services",
    rating: 5,
    review: "Perfect voor ons maritiem bedrijf! Dankzij Niblah krijgen we nu klanten uit de hele scheepvaartsector. Van rederijen tot offshore bedrijven - onze expertise wordt gevonden door heel Nederland."
  },
  {
    name: "Kees van der Haven",
    business: "Restaurant De Zeemeeuw",
    rating: 5,
    review: "Geweldig voor ons visrestaurant aan de haven! We krijgen nu toeristen uit heel Nederland die Den Helder bezoeken. Onze verse vis en havenpanorama trekken veel meer gasten aan."
  },
  {
    name: "Linda Noordzee",
    business: "Hotel Noordzee Comfort",
    rating: 5,
    review: "Onze hotelkamer reserveringen zijn verdubbeld! Gasten die Texel bezoeken of de marine bezichtigen boeken nu gemakkelijk online bij ons. De kustlocatie marketing werkt fantastisch."
  },
  {
    name: "Rob Scheepmaker",
    business: "Scheepmaker Marine Techniek",
    rating: 5,
    review: "Fantastische resultaten voor ons marine techniek bedrijf! We onderhouden nu schepen door heel Noord-Holland en krijgen opdrachten van commerciële vloot tot particuliere jachten."
  },
  {
    name: "Anja Kustlijn",
    business: "Kustlijn Reisbureau",
    rating: 5,
    review: "Door de online marketing boeken veel meer mensen Waddenzeereizen en Texel trips bij ons. We organiseren nu excursies voor gasten uit heel Nederland die de kust willen ontdekken."
  },
  {
    name: "Henk Havenmeester",
    business: "Havenmeester Watersport",
    rating: 5,
    review: "Onze watersportschool profiteert enorm van de kustgerichte SEO. We geven nu zeil- en surfles aan bezoekers uit Amsterdam, Utrecht en heel de Randstad die naar de kust komen."
  }
]

const dutchMoreReviews = [
  {
    name: "Petra Vuurtoren",
    business: "Vuurtoren B&B",
    rating: 5,
    review: "Perfect voor onze bed & breakfast! Gasten vinden ons online wanneer ze een authentieke kustervaring zoeken. Onze kamers zitten vol met natuurliefhebbers en cultuurtoeristen."
  },
  {
    name: "Marco Dok",
    business: "Dok Scheepsreparatie",
    rating: 5,
    review: "Geweldige impact voor onze scheepswerf! We repareren nu schepen van rederijen door heel Nederland en krijgen zelfs internationale klanten via onze online aanwezigheid."
  },
  {
    name: "Sandra Noordkant",
    business: "Noordkant Fysiotherapie",
    rating: 5,
    review: "Veel marine personeel en havenwerkers komen nu naar onze praktijk voor behandeling. De militaire en maritieme sector in Den Helder zorgt voor een stabiele patiëntenstroom."
  },
  {
    name: "Dirk Veerboot",
    business: "Veerboot Catering",
    rating: 5,
    review: "Onze cateringservice voor maritieme evenementen en bedrijfsfeesten groeit snel. Van scheepsdopen tot havenfeesten - we cateren door heel Noord-Holland Noord."
  },
  {
    name: "Elisabeth Zeewind",
    business: "Zeewind Kunst & Cultuur",
    rating: 5,
    review: "Onze galerie en cultuurcentrum trekken nu kunstliefhebbers uit heel Nederland. Vooral onze maritieme kunst collectie en kustcultuur exposities zijn populair online."
  },
  {
    name: "Jan Willem Anker",
    business: "Anker Technische Diensten",
    rating: 5,
    review: "Perfect voor ons installatiebedrijf! We werken nu aan projecten voor de marine, rederijen en hotels door heel de kuststreek van Noord-Holland."
  }
]

export default function DenHelderPage() {
  const features = [
    {
      title: "Maritieme SEO Den Helder",
      description: "Gespecialiseerde SEO voor maritieme bedrijven in Den Helder en omgeving. We zorgen dat je bedrijf gevonden wordt door rederijen, scheepswerven, offshore bedrijven en maritime dienstverleners. Perfect voor bedrijven die de strategische haven- en marinefunctie van Den Helder willen benutten."
    },
    {
      title: "Kusttoerisme Marketing",
      description: "Marketing voor toeristische bedrijven aan de Noord-Hollandse kust. Van hotels tot restaurants, van watersportscholen tot excursieboot - we helpen je profiteren van bezoekers die naar Den Helder komen voor kust, cultuur en de oversteek naar Texel."
    },
    {
      title: "Marine & Defense Marketing",
      description: "Specialistische marketing voor bedrijven die samenwerken met de Koninklijke Marine en defensie gerelateerde organisaties. Van leveranciers tot dienstverleners - we begrijpen de unieke B2B dynamiek van de marine sector in Den Helder."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Den Helder kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke positie van Den Helder als belangrijkste marinehaven van Nederland. Met circa 56.000 inwoners en thuisbasis van de Koninklijke Marine combineert Den Helder maritieme industrie, defensie en kusttoerisme. Ik help bedrijven groeien door in te spelen op deze diverse maar gespecialiseerde economische sectoren."
    },
    {
      question: "Wat kost SEO voor maritieme bedrijven?",
      answer: "SEO prijzen voor Den Helder starten vanaf €800 per maand voor lokale maritieme bedrijven. Voor bedrijven die landelijke maritime klanten willen bereiken of internationale scheepvaart bedienen bieden we pakketten vanaf €1300 per maand. Defense contractors en gespecialiseerde B2B diensten starten vanaf €1600 per maand."
    },
    {
      question: "Hoe bereik ik toeristen die naar Texel gaan?",
      answer: "We optimaliseren voor zoekopdrachten zoals 'hotel voor Texel vertrek', 'restaurant Den Helder haven' en 'parkeren Texel veerboot'. Veel Texel bezoekers overnachten in Den Helder of dineren er, dus we richten ons op deze transitmomente."
    },
    {
      question: "Werkt B2B marketing voor marine sector?",
      answer: "Absoluut! De marine en maritime industrie zoeken online naar gespecialiseerde diensten. Van 'scheepsonderhoud Nederland' tot 'marine leverancier' - we ontwikkelen B2B strategieën die aansluiten bij procurement processen en defense contracten."
    },
    {
      question: "Kunnen jullie helpen met seizoenstoerisme?",
      answer: "Ja, Den Helder heeft duidelijke seizoenspieken rond zomer (Texel verkeer) en marine evenementen. We ontwikkelen campagnes die inspelen op Vlootdagen, zomertoerisme en culturele evenementen rond maritime historie."
    },
    {
      question: "Hoe belangrijk is lokale zichtbaarheid?",
      answer: "Zeer belangrijk! Den Helder heeft een sterke lokale economie rond de marine basis. Google Mijn Bedrijf optimalisatie voor 'restaurant Den Helder', 'hotel bij marine' en 'technische diensten marine' is cruciaal voor lokale klanten en marine personeel."
    },
    {
      question: "Wat maakt Den Helder marketing uniek?",
      answer: "De combinatie van maritime industrie, marine basis, kusttoerisme en Texel gateway maakt Den Helder uniek. Succesvolle marketing hier moet rekening houden met B2B maritime klanten, defense sector, toeristen en lokale gemeenschap."
    },
    {
      question: "Helpen jullie ook met internationale maritime klanten?",
      answer: "Ja, Den Helder trekt internationale scheepvaart en offshore bedrijven aan. We ontwikkelen meertalige SEO en content die aansluit bij internationale maritime standards en procurement processen."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Den Helder | Online Marketing Bureau Noord-Holland Kust</title>
        <meta name="description" content="SEO specialist in Den Helder en Noord-Holland kust. Verhoog je online zichtbaarheid voor maritieme, marine en toeristische bedrijven aan de Noordzee." />
        <meta name="keywords" content="SEO Den Helder, online marketing Den Helder, SEO specialist Noord-Holland, marketing bureau Den Helder" />
        <link rel="canonical" href="https://niblah.com/marketing/den-helder" />
      </Head>
      
      <Header location="Den Helder" />
      
      <Hero 
        title="Digital Marketing Agency Den Helder"
        subtitle="Jouw online marketing partner aan de Noordzeekust"
        description="Den Helder, Nederlands belangrijkste marinehaven met circa 56.000 inwoners, staat symbool voor de unieke combinatie van maritieme kracht, militaire trots en kustschoonheid. Als thuisbasis van de Koninklijke Marine en poort naar het UNESCO Werelderfgoed Waddenzee biedt deze stad aan de noordpunt van Noord-Holland uitzonderlijke kansen voor bedrijven in maritime sectoren, defensie-gerelateerde industrie en kusttoerisme. Als specialist in digitale marketing voor de maritime en kusteconomie begrijp ik hoe bedrijven in Den Helder kunnen groeien door slim in te spelen op de strategische havenfunctie, marine aanwezigheid en doorlopende stroom Texel-gangers. Van scheepsbouw tot strandtentjes - ik help jouw bedrijf varen op de digitale golven van deze unieke Nederlandse havenstad."
        ctaText="Zet koers naar groei"
        ctaLink="#contact"
      />

      <FeatureSection 
        features={features}
        title="Online Marketing Diensten Den Helder"
        subtitle="Gespecialiseerd in maritieme en kusteconomie"
      />

      <ReviewSlider reviews={dutchReviews.concat(dutchMoreReviews)} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Den Helder Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Maritime Expertise</h3>
                <p className="text-gray-700">
                  Diepgaande kennis van de maritime industrie en scheepvaartsector. We begrijpen hoe rederijen, 
                  scheepswerven en maritime dienstverleners online zoeken en opereren in internationale markten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Defense & Marine Sector</h3>
                <p className="text-gray-700">
                  Specialistische ervaring met marketing voor de defensie sector en marine gerelateerde bedrijven. 
                  Begrip van procurement processen, security requirements en B2B dynamics in de defense industrie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Kusttoerisme Kennis</h3>
                <p className="text-gray-700">
                  Ervaring met toerisme marketing voor kusttbestemmingen. Van Texel-transitverkeer tot maritieme 
                  cultuurtoerisme - we weten hoe je profiteert van de unieke ligging aan zee en Waddenzee.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Strategische Havenligging</h3>
                <p className="text-gray-700">
                  Begrip van de strategische waarde van Den Helder als noordelijke haven. We helpen bedrijven 
                  profiteren van maritime logistiek, offshore wind sector en internationale scheepvaartroutes.
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
              Veelgestelde Vragen SEO Den Helder
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
        title="Zet Koers naar Online Groei"
        subtitle="Klaar om meer klanten te bereiken in de maritime en kusteconomie? Neem contact op voor een vrijblijvende analyse van je digitale koers."
      />

      <Footer 
        location="Den Helder"
        serviceArea="Actief in Den Helder en omliggende gemeenten"
        areas={["Texel", "Schagen", "Anna Paulowna", "Wieringen", "Hollands Kroon"]}
      />
    </>
  )
}