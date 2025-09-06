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
    name: "Frank Janssen",
    business: "Mode Outlet Roermond",
    rating: 5,
    review: "Dankzij de SEO strategie van Niblah krijgen we nu klanten uit heel Nederland én Duitsland. Onze online outlet verkoop is met 80% gestegen sinds we op pagina 1 staan!"
  },
  {
    name: "Marlies Schmitz",
    business: "Restaurant De Roerkust",
    rating: 5,
    review: "Perfect voor ons restaurant aan de Maas! We krijgen nu veel meer Duitse toeristen die ons online vinden. De meertalige SEO aanpak werkt fantastisch voor grensregio's."
  },
  {
    name: "Tom van den Broek",
    business: "Autohandel Van den Broek",
    rating: 5,
    review: "Onze autohandel profiteert enorm van de internationale SEO aanpak. Duitse klanten vinden ons nu gemakkelijk online en onze export is verdubbeld!"
  },
  {
    name: "Anja Peters",
    business: "Peters Juwelier",
    rating: 5,
    review: "Als juwelier in het centrum van Roermond was het lastig om op te vallen tussen alle outlets. Nu staan we bovenaan bij 'juwelier Roermond' en hebben veel meer klanten."
  },
  {
    name: "Stefan Müller",
    business: "Hotel Maasduinen",
    rating: 5,
    review: "Geweldige resultaten! Ons hotel wordt nu gevonden door gasten uit Nederland én Duitsland. Onze bezettingsgraad is met 45% gestegen dankzij de sterke online zichtbaarheid."
  },
  {
    name: "Miranda Cop",
    business: "Schoonheidssalon Limburg",
    rating: 5,
    review: "Door de lokale SEO focus krijg ik klanten uit heel Midden-Limburg. Van Roermond tot Sittard - mijn agenda zit vol met behandelingen."
  }
]

const dutchMoreReviews = [
  {
    name: "Dirk Houben",
    business: "Houben Bouwmaterialen",
    rating: 5,
    review: "Onze bouwmaterialenhandel bedient nu klanten uit Nederland en Duitsland. De grensoverschrijdende SEO strategie heeft onze omzet met 60% laten groeien."
  },
  {
    name: "Lisa Reintjes",
    business: "Cafe Central Roermond",
    rating: 5,
    review: "Ons café in de binnenstad trekt nu veel meer toeristen aan. Zowel Nederlandse shoppers als Duitse bezoekers vinden ons gemakkelijk online."
  },
  {
    name: "Hans Smeets",
    business: "Smeets Techniek",
    rating: 5,
    review: "Als technisch bedrijf krijgen we nu opdrachten uit heel Limburg en zelfs uit Duitsland. De B2B SEO aanpak werkt uitstekend voor onze sector."
  },
  {
    name: "Carmen Rodriguez",
    business: "Spanish Flavors Restaurant",
    rating: 5,
    review: "Ons Spaanse restaurant wordt nu gevonden door internationale bezoekers die Roermond bezoeken. Google toont ons bij zoekopdrachten in meerdere talen."
  },
  {
    name: "Jeroen Vullings",
    business: "Makelaardij Vullings",
    rating: 5,
    review: "Perfect voor de Roermond vastgoedmarkt! We helpen nu zowel Nederlandse als Duitse kopers die in de regio willen wonen. Meer leads dan ooit tevoren."
  },
  {
    name: "Sabine Weber",
    business: "Weber Fysiotherapie",
    rating: 5,
    review: "Onze praktijk trekt patiënten aan uit Roermond, Venlo en zelfs Duitse grenssteden. De meertalige website en lokale SEO werken perfect samen."
  }
]

export default function RoermondPage() {
  const features = [
    {
      title: "Retail & Outlet SEO Roermond",
      description: "Gespecialiseerde SEO voor retail en outlet winkels in Roermond. We zorgen dat jouw winkel gevonden wordt door shoppers uit Nederland én Duitsland die naar het beroemde Designer Outlet komen of in de historische binnenstad winkelen. Focus op seizoensgebonden campagnes en internationale bezoekers."
    },
    {
      title: "Grensoverschrijdende Google Ads",
      description: "Internationale advertentiecampagnes die zowel Nederlandse als Duitse klanten bereiken. Perfect voor bedrijven in Roermond die willen profiteren van de sterke grenshandel en toerisme uit beide landen. Meertalige campagnes met lokale targeting."
    },
    {
      title: "Hospitality & Toerisme Marketing",
      description: "Specialistische marketing voor hotels, restaurants en toeristische attracties in Roermond. Van Maasplassen recreatie tot Designer Outlet shopping - we helpen hospitality bedrijven meer gasten te trekken uit Nederland, Duitsland en daarbuiten."
    }
  ]

  const faqItems = [
    {
      question: "Waarom SEO specialist Roermond kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke positie van Roermond als internationale shopping bestemming en grensstad. Met circa 58.000 inwoners en miljoenen jaarlijkse bezoekers aan het Designer Outlet combineert Roermond lokale business met internationale handel. Ik help bedrijven profiteren van zowel lokale klanten als de sterke Duitse markt."
    },
    {
      question: "Wat kost SEO voor retail bedrijven in Roermond?",
      answer: "SEO voor retail in Roermond start vanaf €950 per maand vanwege de hoge concurrentie rond shopping gerelateerde zoektermen. Voor internationale campagnes die Duitse klanten bereiken rekenen we vanaf €1450 per maand. Designer Outlet retailers kunnen profiteren van speciale pakketten vanaf €1750 per maand."
    },
    {
      question: "Hoe bereik ik Duitse klanten vanuit Roermond?",
      answer: "We gebruiken een meertalige SEO aanpak met Duitse content optimalisatie, local SEO voor Duitse steden nabij de grens, en geotargeted Google Ads. Speciale focus op zoektermen zoals 'outlet shopping Nederland' in het Duits en seizoensgebonden campagnes rondom Duitse feestdagen."
    },
    {
      question: "Welke bedrijven in Roermond hebben SEO nodig?",
      answer: "Vooral retail en outlet winkels, restaurants en cafés, hotels en B&B's, toeristische attracties, autohandel (veel Duitse kopers), en lokale dienstverlening die wil profiteren van de internationale bezoekersstroom. Ook B2B bedrijven die grenshandel bedrijven."
    },
    {
      question: "Hoe belangrijk is Google Mijn Bedrijf voor Roermond?",
      answer: "Extreem belangrijk! Google Mijn Bedrijf optimalisatie is cruciaal voor bedrijven in Roermond vanwege de vele toeristen die lokaal zoeken naar 'restaurant near me', 'hotel Roermond' of 'shopping center'. We optimaliseren voor zowel Nederlandse als Duitse zoekopdrachten."
    },
    {
      question: "Kunnen jullie helpen met seizoensmarketing?",
      answer: "Absoluut! Roermond heeft sterke seizoenspieken rondom Duitse en Nederlandse feestdagen, zomervakantie en kerst shopping. We ontwikkelen seizoensspecifieke SEO en Google Ads campagnes die inspelen op deze pieken, inclusief Duitse feestdagen en schoolvakanties."
    },
    {
      question: "Wat maakt Roermond SEO anders dan andere steden?",
      answer: "De internationale dimensie maakt Roermond uniek. We moeten rekening houden met Nederlandse én Duitse zoekgedrag, verschillende seizoenen en feestdagen, wisselkoersen, en culturele verschillen. Plus de hoge concurrentie in retail en hospitality door het Designer Outlet."
    },
    {
      question: "Werken jullie samen met het Designer Outlet?",
      answer: "We werken samen met individuele retailers in en rond het Designer Outlet, maar zijn niet officieel verbonden aan het centrum zelf. We helpen winkels binnen het outlet hun online zichtbaarheid te verbeteren en meer van de internationale bezoekersstroom te profiteren."
    }
  ]

  return (
    <>
      <Head>
        <title>SEO Specialist Roermond | Online Marketing Bureau Limburg</title>
        <meta name="description" content="SEO specialist in Roermond en Limburg. Verhoog je online zichtbaarheid voor Nederlandse en Duitse klanten. Gespecialiseerd in retail, outlet en grenshandel marketing." />
        <meta name="keywords" content="SEO Roermond, online marketing Roermond, SEO specialist Limburg, marketing bureau Roermond" />
        <link rel="canonical" href="https://niblah.com/marketing/roermond" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Roermond: Internationale Grensstad</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Nederlandse en Duitse klanten bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Roermond: waar Nederlandse ondernemerschap en Duitse markt samenkomen in een unieke internationale handelsstad.</strong><br />
              Met 58.000+ inwoners, het beroemde Designer Outlet, en miljoenen internationale bezoekers jaarlijks biedt Roermond ongeëvenaarde kansen voor lokale ondernemers. Als <b>SEO specialist Roermond</b> help ik bedrijven groeien in deze dynamische grensstad waar kwaliteit en internationale uitstraling voorop staan.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Roermond: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Nederland én Duitsland</li>
              <li>✓ Speciaal voor retail, horeca en internationale handel</li>
              <li>✓ <b>SEO Roermond</b> met meetbaar resultaat</li>
              <li>✓ Meertalige websites voor internationale klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek internationale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Roermond & Midden-Limburg</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Roermond - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Roermond" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Roermond met internationale marketing"
          subtitle="Lokale vindbaarheid en internationale conversie"
          features={[
            {
              badge: "SEO Roermond",
              title: "SEO Specialist Roermond",
              description: "Wil je echt groeien in de internationale markt? Ik zorg dat je lokaal en internationaal wordt gevonden en structureel nieuwe klanten aantrekt.",
              visualTitle: "Internationaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Roermond",
              description: "Direct aanvragen van Nederlandse en Duitse klanten. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Roermond",
              description: "Professionele, meertalige websites die zorgen voor meer aanvragen en omzet. Volledig geoptimaliseerd voor de internationale markt.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer aanvragen",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Roermond groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>Internationale SEO & Marketing</span> door Albin"
        />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Roermond Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Internationale Expertise</h3>
                <p className="text-gray-700">
                  Unieke ervaring met grensoverschrijdende marketing voor bedrijven die Nederlandse én Duitse klanten bedienen. 
                  Van meertalige SEO tot internationale Google Ads - we begrijpen de dynamiek van de Roermond markt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Retail & Outlet Focus</h3>
                <p className="text-gray-700">
                  Gespecialiseerde kennis van de retail sector in Roermond, van Designer Outlet marketing tot lokale winkelstraten. 
                  We weten hoe je opvalt in een competitieve markt met internationale bezoekers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Seizoensmarketing</h3>
                <p className="text-gray-700">
                  Expertise in seizoensgebonden campagnes die inspelen op Nederlandse én Duitse feestdagen, vakanties en shopping periodes. 
                  Maximaal profijt van piekperiodes zoals kerst, zomer en Duitse vakantieweken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Hospitality Kennis</h3>
                <p className="text-gray-700">
                  Diepe ervaring met hotel-, restaurant- en toerisme marketing in Roermond. We helpen hospitality bedrijven 
                  meer te profiteren van de sterke internationale bezoekersstroom naar de stad.
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
              Veelgestelde Vragen SEO Roermond
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

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Roermond</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Roermond – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Roermond - Online Marketing Roermond & Midden-Limburg</h3>
              <p className="text-gray-600">
                Roermond Centrum • Designer Outlet • En natuurlijk ook actief in: Venlo • Sittard • Weert • Echt-Susteren • Midden-Limburg regio
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}