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
    name: "Jan Ruesink",
    business: "Ruesink Machinebouw",
    rating: 5,
    review: "Perfect voor ons familiebedrijf in de Achterhoek! Dankzij Niblah krijgen we nu klanten uit heel Oost-Gelderland en zelfs uit Duitsland. Onze traditionele machinebouw combineert nu met moderne online marketing."
  },
  {
    name: "Mariska Wolbers",
    business: "Café Restaurant De Kruisberg",
    rating: 5,
    review: "Geweldig voor onze horecazaak! We krijgen nu veel meer gasten uit Doetinchem en toeristen die de Achterhoek bezoeken. Onze terrasreserveringen zijn verdubbeld sinds we online beter vindbaar zijn."
  },
  {
    name: "Henk van Beek",
    business: "Van Beek Agrarische Diensten",
    rating: 5,
    review: "Onze landbouwdienstverlening wordt nu gevonden door boeren in de hele regio. Van Doetinchem tot Winterswijk - we bedienen nu veel meer klanten dankzij de lokale SEO strategie."
  },
  {
    name: "Sandra Groot Kormelink",
    business: "Praktijk Groot Kormelink",
    rating: 5,
    review: "Als fysiotherapeut in Doetinchem was het lastig om nieuwe patiënten te krijgen. Nu word ik gevonden door mensen uit heel de Achterhoek die behandeling zoeken."
  },
  {
    name: "Rob Dijkman",
    business: "Dijkman Bouw & Renovatie",
    rating: 5,
    review: "Fantastische resultaten! Ons bouwbedrijf krijgt nu aanvragen uit Doetinchem, Winterswijk en omliggende dorpen. De mix van traditionele ambacht en moderne marketing werkt perfect."
  },
  {
    name: "Annemieke Bosma",
    business: "Bosma Mode & Lifestyle",
    rating: 5,
    review: "Onze kledingwinkel in het centrum profiteert enorm van de online zichtbaarheid. Klanten uit heel de Achterhoek komen nu naar onze winkel na ons online te hebben gevonden."
  }
]

const dutchMoreReviews = [
  {
    name: "Bert Scholten",
    business: "Scholten Transport",
    rating: 5,
    review: "Perfect voor ons transportbedrijf! We krijgen nu lading uit heel Oost-Nederland en zelfs grensoverschrijdend transport naar Duitsland. Onze vloot rijdt voller dan ooit."
  },
  {
    name: "Liesbeth Kampman",
    business: "Kampman Accountancy",
    rating: 5,
    review: "Geweldige impact voor onze accountancy praktijk! We helpen nu mkb bedrijven door de hele Achterhoek met hun administratie en belastingen."
  },
  {
    name: "Gert Jan Hulshof",
    business: "Hulshof Installatietechniek",
    rating: 5,
    review: "Onze installatie firma wordt nu gevonden voor CV, sanitair en duurzame energie projecten in heel de regio Doetinchem-Winterswijk."
  },
  {
    name: "Petra Mentink",
    business: "Beautysalon Mentink",
    rating: 5,
    review: "Door de lokale SEO benadering boeken klanten uit Doetinchem en omgeving nu online hun behandelingen. Mijn agenda zit vol tot maanden vooruit."
  },
  {
    name: "Dennis Oude Vrielink",
    business: "Oude Vrielink Tuinen",
    rating: 5,
    review: "Ons hoveniersbedrijf profiteert enorm van de online zichtbaarheid. We realiseren nu tuinen door heel de Achterhoek, van moderne tot landelijke stijlen."
  },
  {
    name: "Inge Berendsen",
    business: "Berendsen Juridisch Advies",
    rating: 5,
    review: "Als juridisch adviseur werd ik voorheen alleen via mond-tot-mond marketing gevonden. Nu hebben particulieren en bedrijven uit heel de Achterhoek mij online gevonden."
  }
]

export default function MarketingDoetinchem() {

  const faqItems = [
    {
      question: "Waarom SEO specialist Doetinchem kiezen?",
      answer: "Als SEO specialist begrijp ik de unieke cultuur van Doetinchem en de Achterhoek. Met circa 58.000 inwoners en een sterke traditie van ambacht en ondernemerschap combineert Doetinchem lokale waarden met moderne ontwikkelingen. Ik help bedrijven groeien met marketing die aansluit bij de authentieke Achterhoekse mentaliteit."
    },
    {
      question: "Wat kost SEO in de Achterhoek?",
      answer: "SEO prijzen voor bedrijven in Doetinchem en de Achterhoek starten vanaf €650 per maand voor lokale SEO. Voor bedrijven die ook Duitse klanten willen bereiken of regionale dekking zoeken bieden we uitgebreidere pakketten vanaf €950 per maand. Altijd eerst een gratis lokale marktanalyse."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie in Doetinchem?",
      answer: "In de Achterhoek zien we vaak binnen 2-3 maanden eerste verbeteringen omdat de lokale concurrentie minder hevig is dan in de Randstad. Voor regionale dominantie richting Winterswijk en Zelhem kan het 4-5 maanden duren. De hechte gemeenschap zorgt voor sterke mond-tot-mond effecten."
    },
    {
      question: "Welke bedrijven in Doetinchem hebben SEO nodig?",
      answer: "Vooral lokale dienstverlening (garages, kappers, restaurants), ambachtelijke bedrijven (bouw, machinebouw), agrarische dienstverlening, detailhandel, en bedrijven die willen profiteren van toerisme naar de Achterhoek. Ook modern mkb dat groei zoekt buiten de regio."
    },
    {
      question: "Werkt online marketing wel in een traditionele regio?",
      answer: "Absoluut! Juist in de Achterhoek zoeken mensen online naar lokale diensten. 'Garage Doetinchem', 'restaurant Achterhoek' en 'bouw Winterswijk' zijn populaire zoekopdrachten. We combineren moderne SEO met respect voor lokale tradities en gemeenschapszin."
    },
    {
      question: "Kunnen jullie helpen met Duitse klanten?",
      answer: "Ja, de ligging nabij de Duitse grens biedt kansen voor grensoverschrijdende marketing. We helpen bedrijven in Doetinchem Duitse klanten te bereiken met meertalige SEO en Google Ads campagnes gericht op Duitse grensgebieden."
    },
    {
      question: "Hoe werkt Google Mijn Bedrijf in Doetinchem?",
      answer: "Google Mijn Bedrijf is cruciaal voor lokale bedrijven in Doetinchem. We optimaliseren je profiel voor zoekopdrachten zoals 'restaurant bij mij in de buurt' en 'garage Doetinchem'. Inclusief het verzamelen van authentieke lokale recensies."
    },
    {
      question: "Wat maakt Achterhoek marketing uniek?",
      answer: "De Achterhoek heeft een sterke identiteit en hechte gemeenschappen. Succesvolle marketing hier respecteert lokale waarden, benadrukt kwaliteit en vakmanschap, en bouwt op vertrouwen en lange termijn relaties. We combineren dit met moderne digital marketing technieken."
    }
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Doetinchem | Marketing Bureau & Online Marketing Achterhoek</title>
        <meta
          name="description"
          content="SEO Specialist Doetinchem inschakelen? Kies voor hét marketing bureau in de Achterhoek. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/doetinchem" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Doetinchem: Achterhoekse Kracht</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Traditioneel vakmanschap ontmoet digitale groei</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Doetinchem: waar Achterhoekse betrouwbaarheid en moderne ondernemersgeest elkaar versterken in een bloeiende gemeente.</strong><br />
              Met 58.000+ inwoners, strategische ligging nabij de Duitse grens, sterke industriële basis en rijke traditie van ambachtelijk vakmanschap biedt Doetinchem uitstekende kansen voor ondernemers. Als <b>SEO specialist Doetinchem</b> help ik bedrijven groeien in deze authentieke Achterhoekse stad waar kwaliteit, vertrouwen en lange termijn relaties voorop staan.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Doetinchem: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit de Achterhoek</li>
              <li>✓ Speciaal voor ambachtelijke & moderne bedrijven</li>
              <li>✓ <b>SEO Doetinchem</b> met meetbaar resultaat</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Doetinchem & de Achterhoek</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Doetinchem - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Doetinchem" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in de Achterhoek met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Doetinchem",
              title: "SEO Specialist Doetinchem",
              description: "Wil je echt groeien in de Achterhoek? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit Doetinchem en omgeving.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Doetinchem",
              description: "Direct aanvragen van ondernemers uit de Achterhoek. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Achterhoek",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit de Achterhoek. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Doetinchem groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* WHY CHOOSE SECTION */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Waarom Bedrijven in Doetinchem Kiezen voor Niblah
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Achterhoekse Mentaliteit</h3>
                  <p className="text-gray-700">
                    Diepe waardering voor de unieke cultuur en waarden van de Achterhoek. We begrijpen dat succesvolle 
                    marketing hier draait om vertrouwen, kwaliteit en langdurige relaties - niet alleen om snelle clicks.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Traditioneel & Modern</h3>
                  <p className="text-gray-700">
                    Expertise in het combineren van traditionele bedrijfsvoering met moderne online marketing. 
                    Perfect voor familiebedrijven en ambachtelijke ondernemingen die willen groeien zonder hun roots te verliezen.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Regionale Dekking</h3>
                  <p className="text-gray-700">
                    Uitgebreide kennis van de Achterhoek regio - van Doetinchem tot Winterswijk, van Groenlo tot Zelhem. 
                    We weten hoe je je bereik uitbreidt naar alle hoeken van deze prachtige regio.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Grenshandel Kansen</h3>
                  <p className="text-gray-700">
                    Kennis van de mogelijkheden voor grensoverschrijdende handel met Duitsland. 
                    We helpen bedrijven hun markt uit te breiden naar Duitse klanten in aangrenzende gebieden.
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
                Veelgestelde Vragen SEO Doetinchem
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Doetinchem</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Achterhoek – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Doetinchem - Online Marketing Achterhoek & Omgeving</h3>
              <p className="text-gray-600">
                Doetinchem Centrum • Industriegebieden • En natuurlijk ook actief in: Winterswijk • Groenlo • Zelhem • Terborg • Gaanderen • Wehl • Achterhoek regio
              </p>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}