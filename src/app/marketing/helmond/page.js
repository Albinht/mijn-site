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

export default function MarketingHelmond() {
  // Lokale Helmond reviews - Industriestad in de Peel
  const dutchReviews = [
    { name: 'Automonteur Rijpelberg', rating: 5, text: 'In de wijk Rijpelberg veel gezinnen met auto\'s. Door lokale SEO krijgen we continu nieuwe klanten uit heel Helmond en omstreken!' },
    { name: 'Kapsalon Binnenstad', rating: 5, text: 'Het gezellige centrum van Helmond trekt veel bezoekers. Onze salon staat nu bovenaan in Google en is altijd vol geboekt.' },
    { name: 'Fysiotherapie Dierdonk', rating: 4.5, text: 'Dierdonk is een moderne wijk met veel sport en bewegen. Via online marketing bereiken we nu patiënten uit de hele regio Zuidoost-Brabant.' },
    { name: 'Bouwbedrijf Brouwhuis', rating: 5, text: 'Brouwhuis groeit nog steeds met nieuwbouwprojecten. We staan nu #1 voor "aannemer Helmond" en hebben meer werk dan we aankunnen!' },
    { name: 'Restaurant Warande', rating: 5, text: 'De Warande is het hart van Helmond. Dankzij Google Ads komen er nu gasten uit Eindhoven, \'s-Hertogenbosch en heel de Peel.' },
    { name: 'IT Bedrijf Centrum', rating: 5, text: 'Helmond heeft veel industrie en MKB. Door professionele marketing bereiken we nu bedrijven in heel de regio Helmond-Peel.' },
  ]
  const dutchMoreReviews = [
    { name: 'Tandarts Tolbrug', rating: 5, text: 'Tolbrug is perfect gelegen voor onze praktijk. Door lokale zichtbaarheid krijgen we nieuwe patiënten uit alle wijken van Helmond.' },
    { name: 'Sportschool Mierlo-Hout', rating: 4.5, text: 'Mierlo-Hout heeft veel sporters. Onze gym wordt nu gevonden door fitnessliefhebbers uit heel Helmond en de Peel - geweldige groei!' },
    { name: 'Schoonmaakbedrijf Helmond-West', rating: 5, text: 'West Helmond heeft veel bedrijventerreinen. Via Google Ads bereiken we nu alle ondernemers die schoonmaakdiensten nodig hebben.' },
    { name: 'Makelaar Helmond-Oost', rating: 5, text: 'Oost is een gewilde woonwijk. Door SEO staan we bovenaan voor woningzoekers in Helmond en krijgen we meer verkoopopdrachten.' },
    { name: 'Tuincentrum Peelland', rating: 5, text: 'De Peel rond Helmond heeft veel tuinliefhebbers. Online marketing brengt ons klanten uit Deurne, Geldrop en heel de regio.' },
    { name: 'Accountant Kasteel', rating: 4.5, text: 'Nabij het kasteel veel zakelijke dienstverlening. Ons kantoor wordt nu gevonden door ondernemers uit heel Zuidoost-Brabant.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Helmond | Marketing Bureau & Online Marketing Helmond</title>
        <meta
          name="description"
          content="SEO Specialist Helmond voor lokale bedrijven. Meer klanten in Helmond met gerichte SEO, Google Ads en professionele marketing in de Peel."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/helmond" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Helmond: Hart van de Peel</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">92.000 Helmonders ontdekken jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Helmond: waar industriële traditie en moderne innovatie elkaar versterken.</strong><br />
              Van het historische kasteel in het centrum tot moderne bedrijventerreinen, van gezellige wijken zoals Rijpelberg tot groeiende sectoren zoals Dierdonk en Brouwhuis - Helmond combineert eeuwenoude ambitie met eigentijdse ondernemingszin. Met 92.000+ inwoners en als grootste stad van de Peel biedt Helmond ondernemers de perfecte mix van industrie, innovatie en groei. Als <b>SEO specialist Helmond</b> help ik ambitieuze bedrijven de digitale kansen van deze dynamische Peelstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Helmond: zichtbaar in de Peel</li>
              <li>✓ Google Ads: direct bereik naar 92.000+ Helmonders</li>
              <li>✓ Speciaal voor ondernemers in Zuidoost-Brabant</li>
              <li>✓ <b>SEO Helmond</b> met focus op industriële regio</li>
              <li>✓ Websites die passen bij Helmond's ondernemersgeest</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Helmond cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Helmond & de Peel</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Helmond - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Helmond" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Helmond met doelgerichte marketing"
          subtitle="Digitale groei voor de Peel"
          features={[
            {
              badge: "SEO Helmond",
              title: "SEO Specialist Helmond",
              description: "Helmond heeft een sterke industriële basis en groeit als innovatiecentrum. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en structureel nieuwe klanten aan te trekken uit heel de Peel en daarbuiten.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Helmond",
              description: "Direct zichtbaar voor 92.000+ Helmonders en zakelijke bezoekers uit Eindhoven en de regio. Adverteer gericht in alle wijken van centrum tot Dierdonk en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Helmond",
              description: "Moderne, professionele websites die passen bij Helmond's mix van traditie en innovatie. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit heel Zuidoost-Brabant.",
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
          title="Helmond groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Helmond</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van traditionele industrie tot moderne innovatie – ik help ambitieuze ondernemers online groeien in de Peel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Helmond */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Helmond</h3>
                <p className="text-gray-600 mb-6">
                  In een industriestad als Helmond is lokale zichtbaarheid essentieel voor zowel B2B als B2C. Word gevonden door mensen die nú zoeken in alle Helmondse wijken en de Peel.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Helmond</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Helmond */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor industriële bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Helmond</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 92.000+ Helmonders en zakelijke bezoekers uit de regio met strategisch gerichte campagnes voor maximale impact in de Peel.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & bedrijvenzones</li>
                  <li>✓ Focus op lokale B2B en B2C</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Helmond's industriële karakter en moderne ambities, zorgen voor meer conversies uit heel de Peel.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern design voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Zuidoost-Brabant</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Helmond</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Helmond?</h3>
                <p className="text-gray-600">
                  Helmond is het economische hart van de Peel met sterke industriële traditie en groeiende innovatiesectoren. Met 92.000+ inwoners en als regionaal centrum is lokale zichtbaarheid cruciaal. Van het historische centrum tot moderne bedrijventerreinen - je wilt gevonden worden door zowel consumenten als zakelijke klanten uit heel Zuidoost-Brabant.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Helmond van andere steden?</h3>
                <p className="text-gray-600">
                  Helmond combineert industriële kracht met moderne innovatie. De stad heeft sterke B2B netwerken door de vele bedrijventerreinen, maar ook levendige woonwijken met gezinnen. Inwoners waarderen vakmanschap en betrouwbaarheid. Marketing moet daarom zowel professioneel zijn voor zakelijke klanten als toegankelijk voor consumenten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Helmond zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum rond het kasteel voor retail en dienstverlening, Rijpelberg voor gezinsbedrijven, Dierdonk voor moderne woningen en sport, Brouwhuis voor nieuwbouw, Mierlo-Hout voor groeipotentie, en de bedrijventerreinen voor B2B. Elke wijk heeft eigen karakteristieken waar je marketing slim op kunt inspelen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Helmond?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €750-1200 per maand, afhankelijk van concurrentie en doelstellingen. Google Ads beheer vanaf €400 per maand plus advertentiebudget. Websiteprojecten vanaf €2500. Helmond heeft sterke koopkracht en veel bedrijvigheid, waardoor de ROI uitstekend kan zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Helmond?</h3>
                <p className="text-gray-600">
                  Absoluut! Helmond is het centrum van de Peel en trekt bezoekers uit Deurne, Geldrop, Someren, Asten en omgeving. Veel Helmondse bedrijven bedienen heel Zuidoost-Brabant en delen van Limburg. De SEO strategie wordt aangepast om dit bredere verzorgingsgebied effectief te dekken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Helmond?</h3>
                <p className="text-gray-600">
                  Eerste verbeteringen zie je vaak binnen 2-3 maanden, significante groei binnen 4-6 maanden. Google Ads leveren directe zichtbaarheid. De concurrentie in Helmond is nog handzaam vergeleken met grote steden, waardoor resultaten vaak sneller zichtbaar zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Helmond?</h3>
                <p className="text-gray-600">
                  Industrie en techniek (sterke basis), bouw en installatie (veel nieuwbouw), automotive (carpool naar Eindhoven), zakelijke dienstverlening, gezondheidszorg, horeca en retail. Helmond's diverse economie met zowel B2B als B2C biedt kansen voor vrijwel elke branche.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Helmond?</h3>
                <p className="text-gray-600">
                  Google My Business en basis social media kun je zelf opstarten. Maar voor echte groei in een concurrerende markt als Helmond heb je expertise nodig. Lokale SEO, technische optimalisatie en conversie-verbetering vereisen ervaring. Ik help ook graag met coaching voor een hybride aanpak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Helmond</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Peel – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Helmond - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Helmond Centrum • Rijpelberg • Dierdonk • Brouwhuis • Mierlo-Hout • Tolbrug • Helmond-West • Helmond-Oost • Deurne • Geldrop • Someren • Asten • Nuenen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}