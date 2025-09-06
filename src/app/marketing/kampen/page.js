'use client'

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
    name: "Geert Hanzestad",
    business: "Hanzestad Bouwhistorie",
    rating: 5,
    review: "Perfect voor ons historisch bouwbedrijf! Dankzij Niblah restaureren we nu monumenten door heel Overijssel. Onze expertise in historische bouwkunde wordt gevonden door eigenaren van karakteristieke panden."
  },
  {
    name: "Marieke IJsselkade",
    business: "Restaurant De IJsselkade",
    rating: 5,
    review: "Geweldig voor ons restaurant aan de rivier! We krijgen veel meer toeristen die Kampen's Hanzesteden historie komen ontdekken. Onze IJssel-vis specialiteiten zijn een grote trekpleister."
  },
  {
    name: "Henk van der Kogge",
    business: "Van der Kogge Antiek",
    rating: 5,
    review: "Onze antiekhandel profiteert enorm van de online zichtbaarheid. Verzamelaars uit heel Nederland vinden nu onze authentieke Hanze-periode stukken en historische objecten."
  },
  {
    name: "Sandra Stadshaven",
    business: "B&B Stadshaven",
    rating: 5,
    review: "Door de sterke online aanwezigheid boeken cultuurtoeristen uit heel Nederland bij ons. Onze historische B&B in het centrum zit vol met geschiedenisliefhebbers."
  },
  {
    name: "Rob Koopman",
    business: "Koopman Scheepvaartdiensten",
    rating: 5,
    review: "Fantastische resultaten voor onze binnenvaart service! We bedienen nu schippers op de hele IJssel route en krijgen opdrachten voor onderhouds- en reparatiewerk."
  },
  {
    name: "Anja Stadspoort",
    business: "Stadspoort Reisgids",
    rating: 5,
    review: "Onze stadswandelingen en historische tours worden nu geboekt door bezoekers uit heel Nederland die Kampen's rijke Hanzegeschiedenis willen ontdekken."
  }
]

const dutchMoreReviews = [
  {
    name: "Dirk Windmolen",
    business: "Windmolen Timmerwerk",
    rating: 5,
    review: "Perfect voor ons traditionele timmerbedrijf! We maken nu historische kozijnen en restaureren houten gevels door heel de IJsselstreek en ver daarbuiten."
  },
  {
    name: "Linda Bovenkerk",
    business: "Bovenkerk Kunst & Cultuur",
    rating: 5,
    review: "Geweldige impact voor onze culturele activiteiten! Onze exposities over Kampen's historie en kunstenaars trekken nu bezoekers uit heel Oost-Nederland."
  },
  {
    name: "Tom Ijsselbrug",
    business: "IJsselbrug Techniek",
    rating: 5,
    review: "Onze technische diensten worden nu gevonden door bedrijven langs de hele IJssel. Van Kampen tot Deventer helpen we met installaties en onderhoud."
  },
  {
    name: "Petra Hanzegeest",
    business: "Hanzegeest Evenementen",
    rating: 5,
    review: "Door de online marketing organiseren we nu historische evenementen en Hanze-themed feesten voor klanten door heel Nederland die authentieke belevenissen zoeken."
  },
  {
    name: "Marcel Stadsmuur",
    business: "Stadsmuur Restauratie",
    rating: 5,
    review: "Ons gespecialiseerde restauratiebedrijf krijgt nu opdrachten voor historische gebouwen door heel Nederland. Onze expertise in monumentenzorg is zeer gewild."
  },
  {
    name: "Annemieke Koggeschip",
    business: "Koggeschip Consultancy",
    rating: 5,
    review: "Perfect voor mijn adviesbureau! Ik help nu gemeenten en organisaties door heel Nederland met cultureel erfgoed projecten en toerisme ontwikkeling."
  }
]

export default function MarketingKampen() {
  const faqItems = [
    {
      question: "Waarom SEO specialist Kampen kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke positie van Kampen als historische Hanzestad aan de IJssel. Met circa 54.000 inwoners en een rijke geschiedenis combineert Kampen cultureel erfgoed met moderne ondernemingszin. Ik help bedrijven groeien door in te spelen op zowel historische authenticiteit als hedendaagse marketing kansen."
    },
    {
      question: "Wat kost SEO in Kampen?",
      answer: "SEO prijzen voor Kampen starten vanaf €650 per maand voor lokale bedrijven. Voor bedrijven die regionale dekking zoeken in de IJsselstreek of zich richten op cultuurtoerisme bieden we pakketten vanaf €950 per maand. Gespecialiseerde historische bedrijven kunnen profiteren van niche marketing vanaf €850 per maand."
    },
    {
      question: "Hoe trek ik cultuurtoeristen aan naar Kampen?",
      answer: "We optimaliseren voor termen zoals 'Hanzestad bezoeken', 'historisch Kampen', 'cultuur IJsselstreek' en 'monumenten Nederland'. Plus seizoensgebonden content rond historische evenementen, Hanzedagen en culturele festiviteiten."
    },
    {
      question: "Welke bedrijven in Kampen hebben SEO nodig?",
      answer: "Vooral bedrijven die profiteren van toerisme (hotels, restaurants, gidsen), historisch gespecialiseerde diensten (restauratie, antiek, ambacht), watergebonden bedrijven (jachthavens, watersport), en lokale dienstverlening die regionale uitbreiding zoekt."
    },
    {
      question: "Werkt historische marketing online?",
      answer: "Absoluut! Mensen zoeken online naar 'historische stadjes Nederland', 'monumenten restauratie' en 'authentieke overnachting'. We combineren Kampen's rijke geschiedenis met moderne SEO technieken voor maximale zichtbaarheid."
    },
    {
      question: "Hoe belangrijk is seizoensmarketing?",
      answer: "Zeer belangrijk voor Kampen! Toerisme piekt in zomer en rond historische evenementen. We ontwikkelen seizoensgebonden campagnes die inspelen op Hanzedagen, cultuur evenementen en historische festiviteiten door het jaar heen."
    },
    {
      question: "Kunnen jullie helpen met regionale uitbreiding?",
      answer: "Ja, Kampen ligt strategisch aan de IJssel met goede verbindingen naar Zwolle en Apeldoorn. We helpen bedrijven hun bereik uitbreiden naar heel de IJsselstreek en Oost-Nederland door gerichte regionale SEO."
    },
    {
      question: "Wat maakt Kampen marketing uniek?",
      answer: "De combinatie van Hanzegeschiedenis, IJsselligging en authentieke Nederlandse cultuur maakt Kampen bijzonder. Succesvolle marketing hier benadrukt kwaliteit, traditie, vakmanschap en de unieke historische setting aan de rivier."
    }
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Kampen: Hanzestad aan de IJssel</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">Waar geschiedenis en moderne marketing samenkomen</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Kampen: eeuwenoude Hanzestad met 54.000 inwoners aan de IJssel, waar traditie en innovatie elkaar versterken.</strong><br />
            Als historische handelsstad combineert Kampen rijk cultureel erfgoed met moderne ondernemingszin. Gelegen aan de monding van de IJssel biedt Kampen unieke kansen voor bedrijven die authentiek vakmanschap waarderen. Als <b>SEO specialist Kampen</b> help ik ondernemers groeien in deze karakteristieke stad waar kwaliteit, geschiedenis en persoonlijke service voorop staan.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Kampen: topresultaten voor Hanzestad</li>
            <li>✓ Google Ads: direct klanten uit IJsselstreek</li>
            <li>✓ Cultuurtoerisme marketing voor historische bedrijven</li>
            <li>✓ <b>SEO Kampen</b> met meetbare groei</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
              Ontdek historische cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Kampen & IJsselstreek</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Kampen - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Kampen" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Kampen met historische marketing expertise"
        subtitle="Hanzestad charme ontmoet digitale groei"
        features={[
          {
            badge: "SEO Kampen",
            title: "SEO Specialist Kampen",
            description: "Wil je groeien in deze historische IJsselstad? Ik zorg dat je lokaal wordt gevonden door klanten die authentiek vakmanschap en kwaliteit waarderen.",
            visualTitle: "Hanzestad bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Kampen",
            description: "Direct aanvragen van cultuurtoeristen en lokale klanten. Je adverteert gericht en ziet direct resultaat in je agenda uit heel de IJsselstreek.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Cultuurtoerisme Marketing",
            title: "Historische Marketing Bureau",
            description: "Professionele websites die Kampen's rijke historie inzetten voor meer klanten. Volledig geoptimaliseerd voor cultuurtoerisme en lokale bedrijven.",
            visualTitle: "Historie & Groei",
            visualSubtitle: "Meer aanvragen",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Kampen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KAMPEN SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Waarom Bedrijven in Kampen Kiezen voor Niblah
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Historische Expertise</h3>
                <p className="text-gray-700">
                  Diepe kennis van cultureel erfgoed marketing en historische bedrijven. We begrijpen hoe je de rijke 
                  Hanzegeschiedenis van Kampen inzet voor moderne marketing doeleinden zonder de authenticiteit te verliezen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Cultuurtoerisme Focus</h3>
                <p className="text-gray-700">
                  Specialistische ervaring met toerisme marketing voor historische bestemmingen. Van monumentenliefhebbers 
                  tot geschiedenisfans - we weten hoe je de juiste bezoekers naar Kampen trekt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">IJsselstreek Kennis</h3>
                <p className="text-gray-700">
                  Uitgebreide kennis van de IJsselstreek economie en water-gerelateerde bedrijven. Van binnenvaart 
                  tot watersport - we helpen bedrijven profiteren van de strategische rivierpositie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Authentiek & Modern</h3>
                <p className="text-gray-700">
                  Expertise in het combineren van authentieke Kamper tradities met moderne marketing technieken. 
                  We helpen bedrijven groeien zonder hun historische karakter en lokale identiteit te verliezen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Veelgestelde Vragen SEO Kampen
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Kampen</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in de Hanzestad – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Kampen - Online Marketing Kampen & Omgeving</h3>
            <p className="text-gray-600">
              Kampen Binnenstad • IJsselkade • Historisch Centrum • En natuurlijk ook actief in: Zwolle • Deventer • Apeldoorn • IJsselmuiden • Dronten • IJsselstreek
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}