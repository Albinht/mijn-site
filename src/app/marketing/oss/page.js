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

export default function MarketingOss() {
  // Lokale Oss reviews - Historische stad in het Land van Maas en Waal
  const dutchReviews = [
    { name: 'Restaurant Centrum', rating: 5, text: 'Het historische centrum van Oss trekt veel bezoekers voor cultuur en historie. Onze zaak staat nu bovenaan in Google en is altijd vol!' },
    { name: 'Tandarts Berghem', rating: 5, text: 'In Berghem veel gezinnen en oudere bewoners. Door lokale SEO krijgen we continu nieuwe patiënten uit heel Oss en omstreken.' },
    { name: 'Bouwbedrijf Horzak', rating: 4.5, text: 'Horzak heeft veel nieuwbouw en renovatieprojecten. Via online marketing bereiken we nu opdrachtgevers uit het hele Land van Maas en Waal.' },
    { name: 'IT Bedrijf Lith', rating: 5, text: 'Lith ligt strategisch aan de Maas. We staan nu #1 voor "IT diensten Oss" en bedienen bedrijven tot in \'s-Hertogenbosch!' },
    { name: 'Sportschool Ruwaard', rating: 5, text: 'Ruwaard is een sportieve wijk. Dankzij Google Ads komen er leden uit Uden, Veghel en heel Noord-Brabant naar onze gym.' },
    { name: 'Kapsalon Oost', rating: 5, text: 'Oss-Oost heeft een eigen karakter. Door professionele marketing bereiken we nu klanten uit alle wijken van Oss en de regio.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fysiotherapie Schaijk', rating: 5, text: 'Schaijk is een hechte gemeenschap. Door lokale zichtbaarheid krijgen we patiënten die persoonlijke zorg waarderen uit heel de regio.' },
    { name: 'Autogarage Megen', rating: 4.5, text: 'Megen ligt mooi aan de Maas. Onze garage wordt nu gevonden door automobilisten uit Oss, Uden en heel Noord-Brabant.' },
    { name: 'Makelaar West', rating: 5, text: 'Oss-West groeit met nieuwe wijken. Via Google Ads bereiken we woningzoekers die de charme van Oss ontdekken vanuit de Randstad.' },
    { name: 'Accountant Centrum', rating: 5, text: 'Het centrum heeft veel ondernemers. Door SEO vinden MKB bedrijven ons voor fiscale diensten uit heel het Land van Maas en Waal.' },
    { name: 'Schoonmaakbedrijf Macharen', rating: 5, text: 'Macharen heeft veel bedrijvigheid. Online marketing brengt ons opdrachten van kantoren en bedrijven uit de hele regio Noord-Brabant.' },
    { name: 'Tuincentrum Ravenstein', rating: 4.5, text: 'Ravenstein heeft veel landelijk wonen. Ons centrum wordt nu gevonden door tuinliefhebbers uit Oss, Uden en omliggende dorpen.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Oss | Marketing Bureau & Online Marketing Oss</title>
        <meta
          name="description"
          content="SEO Specialist Oss voor lokale bedrijven. Meer klanten in Oss met gerichte SEO, Google Ads en professionele marketing in het Land van Maas en Waal."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/oss" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Oss: Hart van Maas en Waal</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">91.000 Ossenaren ontdekken jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Oss: waar rijke geschiedenis en moderne vooruitgang elkaar ontmoeten.</strong><br />
              Van het karakteristieke centrum met eeuwenoude tradities tot groeiende wijken zoals Ruwaard en moderne bedrijventerreinen, van pittoreske Maasdorpjes zoals Lith tot industriële erfenis - Oss combineert Brabantse gezelligheid met strategische ligging tussen Nijmegen en Den Bosch. Met 91.000+ inwoners en als centrum van het Land van Maas en Waal biedt Oss ondernemers de perfecte mix van historie, natuur en economische kansen. Als <b>SEO specialist Oss</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze veelzijdige gemeente optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Oss: zichtbaar in Maas en Waal</li>
              <li>✓ Google Ads: direct bereik naar 91.000+ Ossenaren</li>
              <li>✓ Speciaal voor ondernemers in Noord-Brabant</li>
              <li>✓ <b>SEO Oss</b> met focus op regionale dominantie</li>
              <li>✓ Websites die passen bij Oss's karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Oss cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Oss & het Land van Maas en Waal</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Oss - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Oss" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Oss met doelgerichte marketing"
          subtitle="Digitale groei voor het Land van Maas en Waal"
          features={[
            {
              badge: "SEO Oss",
              title: "SEO Specialist Oss",
              description: "Oss heeft een strategische ligging tussen grote steden en een rijke industriële geschiedenis. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en structureel nieuwe klanten aan te trekken uit heel Noord-Brabant.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Oss",
              description: "Direct zichtbaar voor 91.000+ Ossenaren en bezoekers uit Uden, Veghel en de regio. Adverteer gericht in alle wijken van centrum tot Ruwaard en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Oss",
              description: "Moderne, professionele websites die passen bij Oss's mix van traditie en vernieuwing. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit het hele Land van Maas en Waal.",
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
          title="Oss groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Oss</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van historische ondernemers tot moderne innovators – ik help ambitieuze bedrijven online groeien in het Land van Maas en Waal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Oss */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Oss</h3>
                <p className="text-gray-600 mb-6">
                  In een historische maar groeiende stad als Oss is lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken in alle wijken en bereik ook de regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Oss</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Oss */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor regionale bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Oss</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 91.000+ Ossenaren en bezoekers uit de regio met strategisch gerichte campagnes voor maximale impact in het Land van Maas en Waal.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & dorpen</li>
                  <li>✓ Focus op lokale en regionale klanten</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Oss's mix van geschiedenis en moderne ambities, zorgen voor meer conversies uit heel Noord-Brabant.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Karaktervol design voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Noord-Brabant</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Oss</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Oss?</h3>
                <p className="text-gray-600">
                  Oss is het centrum van het Land van Maas en Waal met een strategische ligging tussen Nijmegen en Den Bosch. Met 91.000+ inwoners en als regionaal centrum is lokale zichtbaarheid cruciaal. Van het historische centrum tot moderne wijken - je wilt gevonden worden door zowel lokale klanten als bezoekers uit heel Noord-Brabant.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Oss van andere steden?</h3>
                <p className="text-gray-600">
                  Oss combineert rijke geschiedenis met moderne vooruitgang en heeft sterke Brabantse waarden. Inwoners waarderen authenticiteit, betrouwbaarheid en persoonlijke service. Ze hebben trots op hun stad en regio. Marketing moet daarom eerlijk, persoonlijk en verbonden zijn met de lokale gemeenschap en tradities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Oss zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum voor retail en historisch toerisme, Berghem voor gezinnen, Horzak voor nieuwbouw, Ruwaard voor moderne bewoners, Lith aan de Maas voor leisure, en Oss-Oost voor industriële activiteit. Ook de kernen zoals Schaijk, Megen en Ravenstein bieden specifieke kansen voor lokale bedrijven.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Oss?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €650-1000 per maand, afhankelijk van concurrentie en doelstellingen. Google Ads beheer vanaf €350 per maand plus advertentiebudget. Websiteprojecten vanaf €2200. Oss heeft stabiele economie en goede koopkracht, waardoor de ROI uitstekend kan zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Oss?</h3>
                <p className="text-gray-600">
                  Absoluut! Oss is het centrum van het Land van Maas en Waal en trekt bezoekers uit Uden, Veghel, Wijchen, en omgeving. Veel Osser bedrijven bedienen heel Noord-Brabant en delen van Gelderland. De strategie wordt aangepast om dit bredere verzorgingsgebied effectief te dekken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Oss?</h3>
                <p className="text-gray-600">
                  Eerste verbeteringen zie je vaak binnen 2-3 maanden, significante groei binnen 4-6 maanden. Google Ads leveren directe zichtbaarheid. De concurrentie in Oss is nog overzichtelijk vergeleken met grote steden, waardoor resultaten vaak sneller zichtbaar zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Oss?</h3>
                <p className="text-gray-600">
                  Bouw en techniek (sterke basis), agribusiness (landelijke omgeving), toerisme en recreatie (Maas en historie), zakelijke dienstverlening, gezondheidszorg, horeca en retail. Oss's diverse economie en strategische ligging bieden kansen voor verschillende sectoren.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Oss?</h3>
                <p className="text-gray-600">
                  Google My Business en social media kun je zelf opstarten voor basis zichtbaarheid. Maar voor echte groei in een regionale markt als Oss heb je expertise nodig. Lokale SEO, concurrentieanalyse en conversie-optimalisatie vereisen ervaring. Ik begeleid ook graag bij een hybride aanpak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Oss</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in het Land van Maas en Waal – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Oss - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Oss Centrum • Berghem • Horzak • Ruwaard • Lith • Oss-Oost • Schaijk • Megen • Ravenstein • Uden • Veghel • Wijchen • Grave
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}