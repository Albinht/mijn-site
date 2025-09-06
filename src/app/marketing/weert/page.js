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

export default function MarketingWeert() {
  // Lokale Weert reviews - Grensstad met industriële historie
  const dutchReviews = [
    { name: 'Textielbedrijf Centrum', rating: 5, text: 'Weert heeft rijke textieltraditie en veel industriële bedrijven. Door lokale SEO bereiken we nu klanten uit heel Limburg en België!' },
    { name: 'Restaurant De Herberg', rating: 5, text: 'Het centrum van Weert bruist met horeca en winkels. Onze zaak staat nu bovenaan voor "restaurant Weert" en we zitten elke avond vol!' },
    { name: 'Autogarage Boshoven', rating: 4.5, text: 'Boshoven is een groeiende wijk in Weert. Via online marketing krijgen we klanten uit Nederweert, Budel en hele grensregio.' },
    { name: 'Fysiotherapie Fatima', rating: 5, text: 'Fatimawijk heeft veel gezinnen met kinderen. Door Google Ads bereiken we nu patiënten uit alle wijken van Weert en omstreken!' },
    { name: 'Bouwbedrijf De Leuvert', rating: 5, text: 'De Leuvert is een populaire woonwijk. We staan nu #1 voor "aannemer Weert" en hebben meer projecten dan we aankunnen!' },
    { name: 'IT Consultant Kemp', rating: 5, text: 'Kemp ligt strategisch bij de grens. Door professionele marketing helpen we nu bedrijven in heel de grensregio Weert-België.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapperszaak Molenakker', rating: 5, text: 'Molenakker is een gezellige buurt in Weert. Door lokale zichtbaarheid krijgen we klanten uit alle wijken van de stad - geweldige groei!' },
    { name: 'Schoonheidssalon Blije', rating: 4.5, text: 'Blije heeft veel jonge gezinnen. Onze salon wordt nu gevonden door vrouwen uit Weert, Nederweert en hele regio Cranendonck!' },
    { name: 'Tuincentrum Laar', rating: 5, text: 'Laar ligt mooi groen bij Weert. Via Google Ads bereiken we tuinliefhebbers uit Limburg en Noord-Brabant - fantastische resultaten!' },
    { name: 'Accountant Moesel', rating: 5, text: 'Moesel heeft veel bedrijvigheid. Door SEO staan we bovenaan voor ondernemers in Weert die boekhoudkundige hulp zoeken.' },
    { name: 'Sportschool Tungelroy', rating: 4.5, text: 'Tungelroy heeft veel sporters. Onze gym wordt nu gevonden door fitnessliefhebbers uit heel Weert en de grensstreek!' },
    { name: 'Makelaar Stramproy', rating: 5, text: 'Stramproy is een gewilde locatie. Door marketing bereiken we woningzoekers uit België, Duitsland en heel de grensregio.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Weert | Marketing Bureau & Online Marketing Weert Limburg</title>
        <meta
          name="description"
          content="SEO Specialist Weert voor lokale bedrijven in Limburg. Meer klanten in de grensregio met gerichte SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/weert" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Weert: Poort naar de Grensregio</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">50.000 Weertenaars ontdekken jouw bedrijf</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Weert: waar Limburgse traditie en grenshandel elkaar versterken.</strong><br />
              Van het historische centrum met eeuwenoude textielerfenis tot moderne bedrijventerreinen, van gezellige wijken zoals Fatima en Boshoven tot de strategische ligging bij België - Weert combineert industriële kracht met internationale kansen. Met 50.000+ inwoners en als belangrijke grensstad biedt Weert ondernemers unieke mogelijkheden in een grensoverschrijdende markt. Als <b>SEO specialist Weert</b> help ik ambitieuze bedrijven de digitale kansen van deze dynamische Limburgse grensstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Weert: zichtbaar in de grensregio</li>
              <li>✓ Google Ads: bereik 50.000+ Weertenaars en België</li>
              <li>✓ Speciaal voor ondernemers in Limburg</li>
              <li>✓ <b>SEO Weert</b> met focus op grenshandel</li>
              <li>✓ Websites die passen bij Weert's internationale ambitie</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Weert cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Weert & de grensregio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Weert - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Weert" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Weert met doelgerichte marketing"
          subtitle="Digitale groei voor de grensregio"
          features={[
            {
              badge: "SEO Weert",
              title: "SEO Specialist Weert",
              description: "Weert profiteert van zijn strategische ligging aan de Belgische grens en rijke industriële traditie. Ik zorg dat jouw bedrijf opvalt in de lokale markt en structureel nieuwe klanten aantrekt uit heel de grensregio en internationale bezoekers.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Grensoverschrijdend bereik",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Weert",
              description: "Direct zichtbaar voor 50.000+ Weertenaars en grensgangers uit België. Adverteer gericht in alle wijken van Fatima tot Boshoven en zie direct resultaat in je agenda dankzij de unieke positie van Weert.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Internationale kansen",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Weert",
              description: "Moderne, professionele websites die passen bij Weert's mix van textieltraditie en moderne industrie. Volledig geoptimaliseerd voor de grensregio en zorgen voor meer aanvragen uit heel Limburg en daarbuiten.",
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
          title="Weert groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Weert</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van textieltraditie tot moderne industrie – ik help ambitieuze ondernemers online groeien in de grensregio.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Weert */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Weert</h3>
                <p className="text-gray-600 mb-6">
                  In een grensstad als Weert is lokale zichtbaarheid cruciaal voor zowel lokale klanten als internationale bezoekers. Word gevonden door mensen die nú zoeken in alle Weertse wijken en de grensregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Weert</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in grensmarkt</li>
                </ul>
              </div>
              {/* Google Ads Weert */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor grensbedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Weert</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 50.000+ Weertenaars en grensgangers uit België met strategisch gerichte campagnes voor maximale impact in de unieke grensregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & industriezones</li>
                  <li>✓ Focus op lokale en internationale klanten</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & grensoverschrijdende resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Weert's industriële erfgoed en moderne ambities, zorgen voor meer conversies uit heel de grensregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern design voor grensmarkt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Limburg & België</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Weert</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Weert?</h3>
                <p className="text-gray-600">
                  Weert ligt strategisch aan de Belgische grens en heeft een rijke industriële traditie in textiel en moderne productie. Met 50.000+ inwoners en internationale grensverkeer is lokale zichtbaarheid essentieel. Je wilt gevonden worden door zowel lokale klanten als grensgangers uit België die in Weert winkelen of zaken doen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Weert van andere Limburgse steden?</h3>
                <p className="text-gray-600">
                  Weert profiteert van zijn grensligging en heeft een unieke mix van lokale Limburgse cultuur en internationale handel. De stad heeft sterke industriële wortels in textiel, maar ook moderne bedrijvigheid. Marketing moet daarom zowel lokale tradities respecteren als internationale kansen benutten, vooral richting België.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Weert zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum voor retail en horeca, Fatima voor gezinsbedrijven, Boshoven voor groeiende woningmarkt, De Leuvert voor moderne woningen, Kemp strategisch bij de grens, en de industrieterreinen voor B2B. Elke wijk heeft eigen karakteristieken waar je marketing slim op kunt inspelen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Weert?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €650-1000 per maand, afhankelijk van concurrentie en doelstellingen. Google Ads beheer vanaf €350 per maand plus advertentiebudget. Websiteprojecten vanaf €2200. Weert's grensligging biedt extra kansen voor internationale klanten, waardoor de ROI uitstekend kan zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Weert?</h3>
                <p className="text-gray-600">
                  Absoluut! Weert is een regionale hub die klanten trekt uit Nederweert, Budel, Cranendonck en omgeving. Veel Weertse bedrijven bedienen ook België en hebben internationale klanten. De SEO strategie wordt aangepast om dit bredere, grensoverschrijdende verzorgingsgebied effectief te dekken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Weert?</h3>
                <p className="text-gray-600">
                  Eerste verbeteringen zie je vaak binnen 2-3 maanden, significante groei binnen 4-6 maanden. Google Ads leveren directe zichtbaarheid. De concurrentie in Weert is nog overzichtelijk vergeleken met grote steden, waardoor resultaten vaak sneller zichtbaar zijn, vooral in nichemarkten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Weert?</h3>
                <p className="text-gray-600">
                  Industrie en productie (textielerfenis), bouw en installatie, automotive en transport (grensligging), zakelijke dienstverlening, gezondheidszorg, horeca en retail. Weert's grensligging en industriële basis bieden kansen voor vrijwel elke branche, vooral die gericht op B2B en internationale handel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Weert?</h3>
                <p className="text-gray-600">
                  Google My Business en basis social media kun je zelf opstarten. Maar voor echte groei in een concurrerende grensmarkt als Weert heb je expertise nodig. Lokale SEO, internationale targeting en conversie-verbetering vereisen ervaring. Ik help ook graag met coaching voor een hybride aanpak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Weert</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de grensregio – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Weert - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Weert Centrum • Fatima • Boshoven • De Leuvert • Kemp • Molenakker • Blije • Laar • Moesel • Tungelroy • Stramproy • Nederweert • Budel • Cranendonck • België grensregio
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}