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

export default function MarketingAlphenAanDenRijn() {
  // Lokale Alphen aan den Rijn reviews - Groene Hart tussen Leiden en Utrecht
  const dutchReviews = [
    { name: 'Tandarts Centrum', rating: 5, text: 'Het centrum van Alphen is levendig met veel gezinnen. Door lokale SEO krijgen we continu nieuwe patiënten uit heel Alphen en omstreken!' },
    { name: 'Restaurant Rijnhaven', rating: 5, text: 'De Rijnhaven is het hart van Alphen. Onze zaak staat nu bovenaan in Google en trekt bezoekers uit Leiden, Utrecht en heel het Groene Hart.' },
    { name: 'Sportschool Ridderkerk', rating: 4.5, text: 'Ridderkerk heeft veel sportieve bewoners. Via online marketing bereiken we nu leden uit alle wijken van Alphen en de regio Rijnstreek.' },
    { name: 'Bouwbedrijf Kerk en Zanen', rating: 5, text: 'Kerk en Zanen groeit snel met nieuwbouw. We staan nu #1 voor "aannemer Alphen" en hebben maandenlang vooruit werk!' },
    { name: 'IT Bedrijf Hazerswoude', rating: 5, text: 'Hazerswoude combineert landelijk met zakelijk. Dankzij Google Ads bereiken we nu bedrijven uit heel Zuid-Holland voor IT-diensten.' },
    { name: 'Kapsalon Zwammerdam', rating: 5, text: 'Zwammerdam heeft een eigen karakter langs de Oude Rijn. Door professionele marketing komen er klanten uit heel de Rijnstreek.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fysiotherapie Nieuwkoop', rating: 5, text: 'Nieuwkoop ligt mooi in het Groene Hart. Door lokale zichtbaarheid krijgen we patiënten die rust en kwaliteit zoeken uit heel de regio.' },
    { name: 'Autogarage Boskoop', rating: 4.5, text: 'Boskoop heeft veel tuinbouwers en forenzen. Onze garage wordt nu gevonden door automobilisten uit de hele Rijnstreek en Randstad.' },
    { name: 'Makelaar Ter Aar', rating: 5, text: 'Ter Aar wordt ontdekt door woningzoekers uit de Randstad. Via Google Ads bereiken we mensen die rust zoeken in het Groene Hart.' },
    { name: 'Accountant Alphen Zuid', rating: 5, text: 'Alphen-Zuid heeft veel ondernemers. Door SEO vinden MKB bedrijven ons voor fiscale diensten uit heel de Rijnstreek.' },
    { name: 'Schoonmaakbedrijf Benthuizen', rating: 5, text: 'Benthuizen ligt strategisch tussen grote steden. Online marketing brengt ons opdrachten van kantoren uit Alphen, Leiden en Utrecht.' },
    { name: 'Tuincentrum Aarlanderveen', rating: 4.5, text: 'Aarlanderveen in het Groene Hart heeft veel tuinliefhebbers. Ons centrum wordt gevonden door mensen uit heel Zuid-Holland.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Alphen aan den Rijn | Marketing Bureau & Online Marketing Alphen aan den Rijn</title>
        <meta
          name="description"
          content="SEO Specialist Alphen aan den Rijn voor lokale bedrijven. Meer klanten in Alphen met gerichte SEO, Google Ads en professionele marketing in het Groene Hart."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/alphen-aan-den-rijn" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Alphen aan den Rijn: Hart van de Rijnstreek</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">112.000 Alphenaren ontdekken jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Alphen aan den Rijn: waar het Groene Hart en stedelijke dynamiek samenkomen.</strong><br />
              Van het bruisende centrum met de gezellige Rijnhaven tot groene dorpjes zoals Zwammerdam en Hazerswoude, van moderne woonwijken tot pittoreske plekjes langs de Oude Rijn - Alphen combineert rust en ruimte met stedelijke voorzieningen. Met 112.000+ inwoners en als centrum van de Rijnstreek biedt Alphen ondernemers de perfecte mix van bereikbaarheid, groei en kwaliteit van leven. Als <b>SEO specialist Alphen aan den Rijn</b> help ik ambitieuze bedrijven de digitale kansen van deze aantrekkelijke gemeente in het hart van Zuid-Holland optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Alphen: zichtbaar in de Rijnstreek</li>
              <li>✓ Google Ads: direct bereik naar 112.000+ Alphenaren</li>
              <li>✓ Speciaal voor bedrijven in het Groene Hart</li>
              <li>✓ <b>SEO Alphen</b> met focus op regionale dominantie</li>
              <li>✓ Websites die passen bij Alphen's karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Alphen cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Alphen & de Rijnstreek</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Alphen aan den Rijn - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Alphen aan den Rijn" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Alphen met doelgerichte marketing"
          subtitle="Digitale groei voor de Rijnstreek"
          features={[
            {
              badge: "SEO Alphen",
              title: "SEO Specialist Alphen aan den Rijn",
              description: "Alphen heeft een strategische ligging tussen Leiden en Utrecht in het Groene Hart. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en structureel nieuwe klanten aan te trekken uit heel de Rijnstreek.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Alphen aan den Rijn",
              description: "Direct zichtbaar voor 112.000+ Alphenaren en bezoekers uit Leiden, Utrecht en het Groene Hart. Adverteer gericht in alle wijken van centrum tot Hazerswoude en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Alphen aan den Rijn",
              description: "Moderne, professionele websites die passen bij Alphen's mix van stedelijke voorzieningen en groene omgeving. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit heel Zuid-Holland.",
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
          title="Alphen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Alphen aan den Rijn</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van centrum tot dorpskern – ik help ambitieuze bedrijven online groeien in de Rijnstreek en het Groene Hart.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Alphen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Alphen aan den Rijn</h3>
                <p className="text-gray-600 mb-6">
                  In een groeiende gemeente als Alphen is lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken in alle wijken en bereik ook de regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Alphen</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Alphen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor Groene Hart bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Alphen aan den Rijn</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 112.000+ Alphenaren en bezoekers uit de regio met strategisch gerichte campagnes voor maximale impact in de Rijnstreek.
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
                  Professionele websites die passen bij Alphen's mix van stedelijke dynamiek en groene rust, zorgen voor meer conversies uit heel de Rijnstreek.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern design voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Zuid-Holland</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Alphen aan den Rijn</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Alphen aan den Rijn?</h3>
                <p className="text-gray-600">
                  Alphen ligt strategisch in het hart van Zuid-Holland tussen grote steden als Leiden en Utrecht. Met 112.000+ inwoners en als centrum van de Rijnstreek is lokale zichtbaarheid cruciaal. Van het bruisende centrum tot pittoreske dorpjes - je wilt gevonden worden door zowel lokale klanten als bezoekers uit heel het Groene Hart.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Alphen van andere steden?</h3>
                <p className="text-gray-600">
                  Alphen combineert stedelijke voorzieningen met de rust van het Groene Hart. Inwoners waarderen zowel moderne gemakken als groene leefomgeving. Veel forenzen naar Leiden, Utrecht en Amsterdam. Marketing moet daarom professioneel zijn maar ook aansluiten bij de waarden van rust, ruimte en kwaliteit van leven.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Alphen zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum met de Rijnhaven voor retail en horeca, Ridderkerk voor sportieve gezinnen, Kerk en Zanen voor nieuwbouw, Hazerswoude voor landelijk wonen, Zwammerdam voor rust en karakter, en Nieuwkoop voor natuurliefhebbers. Ook kernen zoals Ter Aar en Aarlanderveen bieden specifieke kansen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Alphen aan den Rijn?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €700-1150 per maand, afhankelijk van concurrentie en doelstellingen. Google Ads beheer vanaf €400 per maand plus advertentiebudget. Websiteprojecten vanaf €2600. Alphen heeft goede koopkracht en groeit, waardoor de ROI uitstekend kan zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Alphen aan den Rijn?</h3>
                <p className="text-gray-600">
                  Zeker! Alphen is het centrum van de Rijnstreek en trekt bezoekers uit Leiden, Utrecht, Gouda en heel het Groene Hart. Veel bedrijven bedienen de hele regio Zuid-Holland. De strategie wordt aangepast om dit bredere verzorgingsgebied effectief te dekken, inclusief forensenverkeer.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Alphen aan den Rijn?</h3>
                <p className="text-gray-600">
                  Eerste verbeteringen zie je vaak binnen 2-3 maanden, significante groei binnen 4-6 maanden. Google Ads leveren directe zichtbaarheid. De concurrentie in Alphen is nog overzichtelijk vergeleken met grote steden, waardoor resultaten vaak sneller zichtbaar zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Alphen aan den Rijn?</h3>
                <p className="text-gray-600">
                  Dienstverlening voor forenzen, bouw en wonen (veel nieuwbouw), horeca en leisure (Groene Hart toerisme), gezondheidszorg en wellness, retail en lokale diensten, en tuinbouw-gerelateerde bedrijven. Alphen's groei en ligging bieden kansen voor diverse sectoren.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Alphen aan den Rijn?</h3>
                <p className="text-gray-600">
                  Google My Business en social media kun je zelf opstarten voor basis zichtbaarheid. Maar voor echte groei in een concurrerende markt als Alphen heb je expertise nodig. Lokale SEO, regionale targeting en conversie-optimalisatie vereisen ervaring. Ik begeleid ook graag bij een hybride aanpak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Alphen aan den Rijn</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Rijnstreek – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Alphen aan den Rijn - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Alphen Centrum • Ridderkerk • Kerk en Zanen • Hazerswoude • Zwammerdam • Nieuwkoop • Ter Aar • Aarlanderveen • Leiden • Utrecht • Gouda
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}