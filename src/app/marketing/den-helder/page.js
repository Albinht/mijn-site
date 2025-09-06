'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

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

export default function MarketingDenHelder() {
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
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Den Helder | Marketing Bureau & Online Marketing Den Helder</title>
        <meta
          name="description"
          content="SEO Specialist Den Helder inschakelen? Kies voor hét marketing bureau in Den Helder. Meer klanten en zichtbaarheid met maritime SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/den-helder" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Den Helder: Maritieme Metropool</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Waar zee, marine en toerisme samenkomen</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Den Helder: Nederland's noordelijkste stad waar maritime historie, Koninklijke Marine en kusttoerisme een unieke economie vormen.</strong><br />
              Met 56.000+ inwoners, als thuisbasis van de marine, poort naar Texel en belangrijke Noordzeehaven biedt Den Helder uitstekende kansen voor maritieme bedrijven en kustondernemers. Als <b>SEO specialist Den Helder</b> help ik bedrijven groeien in deze strategische havenstad waar traditie en innovatie elkaar ontmoeten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Maritime SEO Den Helder: topresultaten voor scheepvaart</li>
              <li>✓ Google Ads: direct klanten uit marine en toerisme</li>
              <li>✓ Speciaal voor rederijen, hotels en kustwinkels in Den Helder</li>
              <li>✓ <b>SEO Den Helder</b> met meetbaar maritiem resultaat</li>
              <li>✓ Websites die bezoekers omzetten naar boekingen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek maritime cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Den Helder & Noord-Holland Noord</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Den Helder - Maritime Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Den Helder" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Den Helder met maritime marketing"
          subtitle="Kustlocatie vindbaarheid en conversie voor zee en marine"
          features={[
            {
              badge: "Maritime SEO",
              title: "SEO Specialist Den Helder",
              description: "Wil je echt groeien in de maritime sector? Ik zorg dat je bedrijf wordt gevonden door rederijen, marine leveranciers en internationale scheepvaart.",
              visualTitle: "Maritime zichtbaar",
              visualSubtitle: "Internationale reach",
              image: masterSeoImage
            },
            {
              badge: "Kusttoerisme Ads",
              title: "Google Ads Den Helder",
              description: "Direct boekingen van Texel-bezoekers en kusttoeristen. Je adverteert gericht op transitverkeer en marine evenementen.",
              visualTitle: "Direct boekingen",
              visualSubtitle: "Maximaal kustbereik",
              image: keywordResearchImage
            },
            {
              badge: "Marine & Webdesign",
              title: "Marketing Bureau Den Helder",
              description: "Professionele, maritime websites die zorgen voor meer opdrachten uit scheepvaart en defensie. Volledig geoptimaliseerd voor B2B en toerisme.",
              visualTitle: "Website & Maritime Groei",
              visualSubtitle: "Meer opdrachten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Den Helder groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>Maritime SEO & Marketing</span> door Albin"
        />


        {/* VEELGESTELDE VRAGEN */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Veelgestelde Vragen SEO Den Helder
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Den Helder</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw maritime bedrijf kan laten groeien in Den Helder – altijd eerlijk advies en snelle reactie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Meer weten? Bel vrijblijvend voor een gratis strategiegesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel schakelen? Stuur direct een WhatsApp voor snel contact.</p>
                <a
                  href="https://wa.me/31648728828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Den Helder - Online Marketing Den Helder & Noord-Holland Noord</h3>
              <p className="text-gray-600">
                Den Helder Centrum • Haven & Marine • Texel Gateway • En natuurlijk ook actief in: Alkmaar • Hoorn • Enkhuizen • Schagen • Heerhugowaard • Heel Noord-Holland Noord
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}