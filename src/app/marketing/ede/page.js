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

export default function MarketingEde() {
  // Lokale Ede reviews
  const dutchReviews = [
    { name: 'Bistro Ede', rating: 5, text: 'Sinds Albin onze vindbaarheid regelt, zitten we bijna elk weekend vol. We krijgen veel nieuwe klanten via Google.' },
    { name: 'AutoService Ede', rating: 5, text: 'Onze advertenties leveren nu echt aanvragen op. Albin regelt alles en stuurt bij als het beter kan.' },
    { name: 'Salon Mooi Ede', rating: 5, text: 'Van een lege agenda naar vaste klanten uit Ede. De website werkt én scoort goed in Google.' },
    { name: 'FysioFit Ede', rating: 5, text: 'Lokale SEO laat ons uitblinken op “fysiotherapie Ede”. We staan bovenaan én krijgen meer telefoontjes.' },
    { name: 'Installatiebedrijf Ede', rating: 5, text: 'Online zichtbaar zijn is nu geen zorg meer. De investering in Google Ads levert wekelijks aanvragen op.' },
    { name: 'Tandartspraktijk de Veluwe', rating: 4.5, text: 'Meer recensies, meer aanvragen én een veel betere plek in de zoekresultaten. Zeer tevreden!' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf van de Pol', rating: 5, text: 'Albin kreeg ons in enkele maanden naar #1 op Google. Aanvragen uit Ede blijven binnenstromen.' },
    { name: 'Beauty Clinic Ede', rating: 5, text: 'Onze klantenkring is verdubbeld. Via Google boeken nu mensen uit heel Ede en omgeving.' },
    { name: 'Fietsspecialist Ede', rating: 4.5, text: 'We trekken meer lokale bezoekers dan ooit. En alles is meetbaar gemaakt.' },
    { name: 'Advocatenkantoor Edestad', rating: 5, text: 'Elke maand nieuwe cliënten uit Ede dankzij slimme Google Ads en een heldere strategie.' },
    { name: 'Tuincentrum Buitenhof', rating: 5, text: 'Onze online acties worden nu echt opgepikt door mensen uit Ede en omliggende dorpen.' },
    { name: 'Dierenkliniek Ede', rating: 4.5, text: 'Onze praktijk staat eindelijk bovenaan voor “dierenarts Ede”. De aanvragen blijven groeien.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Ede | Marketing Bureau & Online Marketing Ede</title>
        <meta
          name="description"
          content="SEO Specialist Ede nodig? Kies voor het marketing bureau dat bedrijven in Ede écht laat groeien. Haal meer uit je lokale online zichtbaarheid en krijg meer klanten."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/ede" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Meer klanten en aanvragen uit Ede?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Laat jouw bedrijf online domineren</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je als ondernemer in Ede écht het verschil maken?</strong><br />
              Ik help je met lokale online marketing die wérkt: <b>bovenaan in Google</b>, zichtbaar voor je doelgroep en een website die converteert.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Jouw bedrijf vindbaar maken in Ede (SEO & Google Maps)</li>
              <li>✓ Direct aanvragen met winstgevende Google Ads</li>
              <li>✓ Slimme strategie, op maat voor Ede en regio</li>
              <li>✓ <b>SEO Ede</b> voor zzp, mkb én lokale retail</li>
              <li>✓ Conversiegerichte website: méér omzet uit je bezoekers</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis groeigesprek plannen <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk resultaten in Ede
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Marketing bureau voor heel Ede en omgeving</p>
            <p className="mt-2 text-xs text-green-600">📞 Meteen sparren? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Ede - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Ede" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Wat kun jij bereiken met sterke online marketing in Ede?"
          subtitle="Het verschil maken met echte zichtbaarheid"
          features={[
            {
              badge: "SEO Ede",
              title: "Altijd bovenaan bij lokale zoekopdrachten",
              description: "Ik zorg dat jouw bedrijf in Ede bovenaan staat wanneer mensen zoeken naar jouw dienst. Zo krijg je structureel nieuwe klanten uit de regio.",
              visualTitle: "Lokale SEO",
              visualSubtitle: "Jouw plek in Google",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads voor ondernemers in Ede",
              description: "Met goed ingestelde campagnes ben je altijd zichtbaar voor je doelgroep en haal je maximaal rendement uit je advertentiebudget.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Meer aanvragen",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Groei",
              title: "Website die verkoopt",
              description: "Je krijgt geen standaard site, maar een website die écht omzet oplevert. Gericht op conversie, mobielvriendelijk en klaar voor groei in Ede.",
              visualTitle: "Conversie & Design",
              visualSubtitle: "Meer omzet",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ede groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>lokale SEO & Marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meer klanten via Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Ede</span>
              </h2>
              <p className="text-xl text-gray-600">
                Lokaal ondernemen? Dit zijn je groeimogelijkheden met slimme online marketing in Ede.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Ede */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Ede</h3>
                <p className="text-gray-600 mb-6">
                  Sta structureel bovenaan in Google op belangrijke zoektermen. Zo word je gevonden door nieuwe klanten uit Ede & omliggende plaatsen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Ede</li>
                  <li>✓ Autoriteit & lokale links</li>
                  <li>✓ Klantbeoordelingen verbeteren</li>
                </ul>
              </div>
              {/* Google Ads Ede */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Edese ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Ede</h3>
                <p className="text-gray-600 mb-6">
                  Snel in beeld bij mensen die nú zoeken. Elke klik is gericht op lokale groei, resultaat en rendement.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertentiecampagnes</li>
                  <li>✓ Focus op Ede en directe omgeving</li>
                  <li>✓ Slimme conversie optimalisatie</li>
                  <li>✓ Maandelijkse inzichten & rapportage</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Geen standaard oplossing, maar een website en online strategie die voor jóuw bedrijf in Ede werkt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Uniek ontwerp voor jouw merk</li>
                  <li>✓ Snel, veilig en mobiel proof</li>
                  <li>✓ Gericht op aanvragen & omzet</li>
                  <li>✓ Lokaal sterk zichtbaar</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kennis maken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Ede</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek waar jouw groeikansen liggen. Geen verkooppraatje, maar direct waardevolle tips voor ondernemers in Ede.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Vragen of direct aan de slag? Bel voor gratis advies.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stel je vraag snel via WhatsApp. Je krijgt altijd persoonlijk antwoord.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Ede & regio</h3>
              <p className="text-gray-600">
                Ede • Bennekom • Lunteren • Barneveld • Amersfoort • Wageningen • Veenendaal • Harskamp
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
