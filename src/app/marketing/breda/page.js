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

export default function MarketingBreda() {
  // Lokale Breda reviews - De Parel van het Zuiden
  const dutchReviews = [
    { name: 'Restaurant Grote Markt Breda', rating: 5, text: 'Vlak bij de iconische Grote Kerk zijn we nu beter vindbaar voor toeristen en locals. De horeca omzet is flink gegroeid!' },
    { name: 'Fysiotherapie Hazeldonk', rating: 5, text: 'Vanuit onze praktijk in de wijk Hazeldonk bereiken we nu heel West-Brabant. Patiëntenstroom is verdubbeld door lokale SEO.' },
    { name: 'Bouwbedrijf Ginneken', rating: 5, text: 'In het historische Ginneken veel karakteristieke woningen. Onze restauratieprojecten worden nu veel beter gevonden online.' },
    { name: 'Kapsalon Brabantpark', rating: 4.5, text: 'De wijk Brabantpark bruist van het leven. Door Google Ads krijgen we continu nieuwe klanten uit heel Breda-Noord.' },
    { name: 'Tandarts Prinsenbeek', rating: 5, text: 'Prinsenbeek heeft een eigen identiteit, maar hoort bij Breda. We bedienen nu patiënten uit beide gemeenschappen dankzij SEO.' },
    { name: 'Advocaat Breda Centrum', rating: 5, text: 'Kantoor vlak bij het Kasteel van Breda. De lokale zichtbaarheid heeft geleid tot meer cliënten uit heel Midden-Brabant.' },
  ]
  const dutchMoreReviews = [
    { name: 'Installateur Tuinzigt', rating: 5, text: 'In de moderne wijk Tuinzigt veel nieuwbouw. We staan nu bovenaan voor "installateur Breda" en krijgen wekelijks aanvragen!' },
    { name: 'Sportschool Heuvel', rating: 4.5, text: 'De Heuvel is het bruisende studentencentrum. Onze fitness krijgt nu veel meer studenten door gerichte online marketing.' },
    { name: 'Autogarage Teteringen', rating: 5, text: 'Teteringen is een groeiende deelgemeente van Breda. Lokale SEO zorgt ervoor dat we klanten uit heel de regio aantrekken.' },
    { name: 'Schoonheidssalon Boeimeer', rating: 5, text: 'Boeimeer is een rustige wijk met veel gezinnen. Perfect voor onze salon - nu worden we gevonden door klanten uit heel Breda-West.' },
    { name: 'IT Bedrijf Wisselaar', rating: 5, text: 'In de zakenwijk nabij de A16 gevestigd. Door SEO bereiken we nu bedrijven in heel Noord-Brabant en Zuid-Holland.' },
    { name: 'Makelaar Belcrum', rating: 4.5, text: 'Belcrum is een gewilde woonwijk. Onze woningverkopen zijn toegenomen omdat we beter gevonden worden door kopers.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Breda | Marketing Bureau & Online Marketing Breda</title>
        <meta
          name="description"
          content="SEO Specialist Breda inschakelen? Kies voor hét marketing bureau in Breda. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/breda" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Breda: de Parel van het Zuiden</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">185.000 Bredanaars wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Breda: waar geschiedenis en moderniteit elkaar ontmoeten.</strong><br />
              Van de majestueuze Grote Kerk tot het bruisende uitgaansleven op de Grote Markt, van de historische wijken Ginneken en Prinsenbeek tot moderne bedrijventerreinen zoals Minervum - Breda biedt ondernemers de perfecte mix van traditie en innovatie. Met 185.000+ inwoners en een strategische ligging tussen Rotterdam, Amsterdam en Antwerpen is Breda het kloppende hart van West-Brabant. Als <b>SEO specialist Breda</b> help ik ambitieuze bedrijven de digitale kansen van deze dynamische stad te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Breda: zichtbaar in de Parel van het Zuiden</li>
              <li>✓ Google Ads: direct bereik naar 185.000+ Bredanaars</li>
              <li>✓ Speciaal voor ambitieuze bedrijven in West-Brabant</li>
              <li>✓ <b>SEO Breda</b> met focus op lokale dominantie</li>
              <li>✓ Websites die passen bij Breda's authentieke karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Breda cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Breda & West-Brabant</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Breda - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Breda" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Breda met doelgerichte marketing"
          subtitle="Digitale groei voor de Parel van het Zuiden"
          features={[
            {
              badge: "SEO Breda",
              title: "SEO Specialist Breda",
              description: "Breda is een concurrerende markt met veel gevestigde bedrijven. Ik zorg dat jouw bedrijf opvalt door lokaal bovenaan te staan op relevante zoektermen en structureel nieuwe klanten aan te trekken uit heel West-Brabant.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Breda",
              description: "Direct zichtbaar voor 185.000+ Bredanaars en bezoekers uit heel Nederland en België. Adverteer gericht in alle wijken van centrum tot Hazeldonk en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Breda",
              description: "Moderne, professionele websites die passen bij Breda's ambitieuze ondernemersgeest en zorgen voor meer aanvragen uit heel Midden-Brabant. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Breda groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Breda</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startkende ondernemers tot gevestigde bedrijven – ik help ambitieuze ondernemers online groeien in de Parel van het Zuiden.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Breda */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Breda</h3>
                <p className="text-gray-600 mb-6">
                  In een concurrerende stad als Breda is lokale zichtbaarheid cruciaal. Word gevonden door mensen die nú zoeken in alle Bredase wijken en omliggende plaatsen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Breda</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Breda */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor groeiende bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Breda</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 185.000+ Bredanaars en bezoekers uit heel Nederland en België met strategisch gerichte campagnes voor maximale impact.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & districten</li>
                  <li>✓ Focus op lokale concurrentie</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Breda's ambitieuze ondernemersgeest en zorgen voor meer conversies uit heel West-Brabant.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Authentiek design voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik West-Brabant</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Breda</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Breda?</h3>
                <p className="text-gray-600">
                  Breda heeft een sterke lokale identiteit en veel gevestigde concurrentie. Met 185.000+ inwoners plus duizenden dagelijkse bezoekers wil je dat mensen jou vinden wanneer ze lokale diensten zoeken. Van het centrum rond de Grote Markt tot wijken zoals Hazeldonk en Ginneken - lokale zichtbaarheid is cruciaal om je marktaandeel te behouden en uit te breiden in West-Brabant.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Breda van andere steden?</h3>
                <p className="text-gray-600">
                  Breda is uniek: een historische stad met een sterke lokale trots en veel toerisme, gecombineerd met moderne bedrijvigheid. De inwoners waarderen authenticiteit en kwaliteit. De strategische ligging tussen Nederland en België biedt extra kansen. Dit betekent dat je marketing zowel lokaal vertrouwen moet opbouwen als gebruik moet maken van de internationale bereikbaarheid.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Breda zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Grote Markt, Heuvel) voor retail en horeca, Hazeldonk voor gezinnen met kinderen, Ginneken voor luxe diensten, Prinsenbeek voor lokale gemeenschap, en bedrijventerreinen zoals Minervum voor B2B. Elke wijk heeft zijn eigen karakter en doelgroep. Een goede SEO strategie houdt rekening met deze verschillen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Breda?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €900-1500 per maand, afhankelijk van je ambities en concurrentie. Google Ads beheer vanaf €500 per maand plus advertentiebudget. Websiteprojecten vanaf €3500. Breda heeft veel gevestigde bedrijven, dus de concurrentie kan hoog zijn, maar de koopkracht is ook hoger waardoor de ROI uitstekend kan zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Breda?</h3>
                <p className="text-gray-600">
                  Absoluut! Breda ligt strategisch tussen Rotterdam, Amsterdam en Antwerpen. Veel Bredase bedrijven bedienen heel West-Brabant (Tilburg, Roosendaal, Bergen op Zoom) en delen van Zuid-Holland. De SEO strategie kan worden aangepast om dit bredere gebied te dekken, inclusief Belgische klanten die vaak naar Breda komen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Breda?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 3-4 maanden, significante verbetering binnen 6-9 maanden. Google Ads geven directe zichtbaarheid. De concurrentie in Breda is steviger dan in kleinere steden, maar de koopkracht en het zakelijke volume zijn ook hoger, waardoor de resultaten zeer de moeite waard zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Breda?</h3>
                <p className="text-gray-600">
                  Horeca en retail (veel toerisme), zakelijke dienstverlening (advocaten, accountants), gezondheidszorg en wellness, bouw en renovatie (veel monumenten), automotive, en moderne diensten zoals IT en marketing. Breda's diverse economie biedt kansen voor bijna elke branche.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Breda?</h3>
                <p className="text-gray-600">
                  Basis Google My Business en social media kun je zelf doen. Maar voor echte groei in een competitieve markt als Breda heb je expertise nodig. Technische SEO, lokale concurrentieanalyse, en conversie-optimalisatie vereisen ervaring. Ik begeleid ook graag bij een hybride aanpak waarbij jij bepaalde taken overneemt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Breda</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Parel van het Zuiden – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Breda - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Breda Centrum • Hazeldonk • Ginneken • Prinsenbeek • Teteringen • Boeimeer • Brabantpark • Tuinzigt • Belcrum • Wisselaar • Minervum • Oosterhout • Tilburg • Roosendaal • Bergen op Zoom • Etten-Leur
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}