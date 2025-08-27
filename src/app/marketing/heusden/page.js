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

export default function MarketingHeusden() {
  // Lokale Heusden reviews - historische vestingstad met toerisme focus
  const dutchReviews = [
    { name: 'Hotel Restaurant De Witte Zwaan', rating: 5, text: 'Ons historische hotel aan de Vismarkt profiteert enorm van de lokale SEO. Gasten vinden ons via "hotel Heusden centrum" en "overnachten vestingstad". Bezetting significant gestegen!' },
    { name: 'Restaurant De Klokkentoren', rating: 5, text: 'Met uitzicht op de Hervormde Kerk trekken we veel toeristen, maar de lokale marketing heeft onze bereik naar omliggende dorpen versterkt. Reserveringen uit Drunen, Nieuwkuijk en Vlijmen.' },
    { name: 'Boutique Hotel Munnikenhof', rating: 5, text: 'Voor ons karakteristieke hotel in het hart van de vestingstad was online zichtbaarheid cruciaal. Nu staan we bovenaan voor toeristische zoekopdrachten. Perfecte samenwerking!' },
    { name: 'Café Restaurant In Den Bonten Os', rating: 5, text: 'Als horecaonderneming aan de Pelsestraat bereiken we nu zowel toeristen als lokale bezoekers. De Google Ads campagnes werken uitstekend voor evenementen en diners.' },
    { name: 'Juwelier Edelstenen Heusden', rating: 4.5, text: 'Onze winkel in het monumentale centrum krijgt nu ook klanten uit Waalwijk en Drunen. De investering in lokale SEO levert structureel meer bezoekers op.' },
    { name: 'Kunstgalerie Fort Asperen', rating: 5, text: 'Voor onze galerie nabij Fort Asperen was toeristische marketing essentieel. Nu worden we gevonden door kunstliefhebbers uit heel Noord-Brabant. Geweldige resultaten!' },
  ]
  const dutchMoreReviews = [
    { name: 'Bed & Breakfast De Vesting', rating: 5, text: 'Ons B&B in de historische binnenstad heeft nu constante bezetting door betere online vindbaarheid. Gasten komen uit heel Nederland voor ons authentieke karakter.' },
    { name: 'Rondvaartbedrijf Heusden Vaart', rating: 5, text: 'Voor onze rondvaarten op de Bergse Maas was seizoensgebonden marketing cruciaal. Nu boeken families en groepen uit de hele regio bij ons. Fantastische groei!' },
    { name: 'Cadeauwinkel Het Tolhuis', rating: 4.5, text: 'Onze souvenirwinkel bij de stadsmuren profiteert van de toeristische SEO. Bezoekers vinden ons via "cadeaus Heusden" en "souvenirs vestingstad". Omzet verdubbeld!' },
    { name: 'Fysiotherapie Praktijk Centrum', rating: 5, text: 'Voor onze praktijk in het centrum was lokale bereikbaarheid belangrijk. Nu krijgen we patiënten uit heel Heusden en omliggende kernen via Google.' },
    { name: 'Boekhandel De Leestrommel', rating: 5, text: 'Onze gezellige boekhandel aan de Putterstraat trekt nu zowel toeristen als lokale lezers. De online marketing heeft ons klantenbereik enorm vergroot.' },
    { name: 'Restaurant Het Gouvernement', rating: 4.5, text: 'Met onze ligging tegenover het Gouverneurshuis bereiken we nu gasten uit Den Bosch, Tilburg en Waalwijk. Reserveringen via online kanalen gegroeid met 70%!' },
    { name: 'Fietsenverhuur Vestingstad', rating: 5, text: 'Voor onze fietsverhuur bij de stadsmuren was toeristische zichtbaarheid essentieel. Nu reserveren gezinnen en groepen online voor hun Heusden-bezoek.' },
    { name: 'Kleding Atelier De Voorstraat', rating: 5, text: 'Onze boutique in de pittoreske Voorstraat krijgt nu klanten uit de hele regio. De lokale SEO heeft onze naamsbekendheid buiten Heusden enorm vergroot.' },
    { name: 'Wellness Centrum Fort', rating: 4.5, text: 'Voor onze wellness praktijk nabij de vestingwerken was regionale uitstraling belangrijk. Nu komen gasten uit heel Midden-Brabant voor onze behandelingen.' },
    { name: 'Antiekzaak De Gouverneur', rating: 5, text: 'Onze antiekwinkel in het monumentale centrum heeft nu landelijke zichtbaarheid. Verzamelaars vinden ons via "antiek Heusden" en bezoeken speciaal onze winkel.' },
    { name: 'Rondleidingen Gidsen Heusden', rating: 5, text: 'Voor onze historische stadswandelingen was online boekbaarheid cruciaal. Nu reserveren groepen uit heel Nederland via onze website voor rondleidingen.' },
    { name: 'IJssalon De Vesting', rating: 4.5, text: 'Ons ijssalon aan de haven profiteert enorm van toeristische zoekopdrachten. Bezoekers vinden ons via "ijs Heusden" en komen speciaal voor onze lokale smaken.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Heusden | Marketing Bureau & Online Marketing Heusden</title>
        <meta
          name="description"
          content="SEO Specialist Heusden inschakelen? Kies voor hét marketing bureau in Heusden. Meer toeristen en klanten met lokale SEO, Google Ads en een moderne website voor uw bedrijf."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/heusden" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Heusden: Van vestingwerken tot online succes</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">45.000 Heusdenaars en duizenden toeristen bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Heusden: waar geschiedenis en ondernemerschap elkaar ontmoeten.</strong><br />
              Van de gerestaureerde vestingwerken tot de pittoreske haven, van hotels aan de Vismarkt tot restaurants met uitzicht op de Bergse Maas - Heusden biedt unieke kansen. Als <b>SEO specialist Heusden</b> help ik bedrijven in deze toeristische hotspot om zowel bezoekers als lokale klanten te bereiken. Of je nu een hotel, restaurant, winkel of dienstverlener bent: ik zorg dat je wordt gevonden.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Heusden: topresultaten voor toerisme & lokale diensten</li>
              <li>✓ Google Ads: direct aanvragen uit Heusden en omliggende kernen</li>
              <li>✓ Speciaal voor hotels, restaurants, winkels en dienstverleners</li>
              <li>✓ <b>SEO Heusden</b> met meetbaar resultaat voor toeristische sector</li>
              <li>✓ Websites die bezoekers omzetten naar boekingen en klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk toerisme cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Heusden & regio Midden-Brabant</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Heusden - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Heusden" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten en toeristen in Heusden met slimme marketing"
          subtitle="Van vestingstad tot online succes"
          features={[
            {
              badge: "SEO Heusden",
              title: "SEO Specialist Heusden",
              description: "Wil je groeien in de toeristische markt van Heusden? Ik zorg dat je lokaal en regionaal wordt gevonden door zowel toeristen als lokale klanten.",
              visualTitle: "Lokaal & Toeristisch",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Heusden",
              description: "Direct boekingen van hotelgasten, restaurantreserveringen en winkelbezoeken uit Heusden en omliggende plaatsen. Perfect voor seizoensgebonden bedrijven.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Meer bezoekers",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Toerisme Marketing",
              title: "Marketing Bureau Heusden",
              description: "Professionele websites die zorgen voor meer boekingen en omzet in de toeristische sector. Volledig geoptimaliseerd voor Heusden's unieke markt.",
              visualTitle: "Website & Boekingen",
              visualSubtitle: "Meer reserveringen",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Heusden groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Heusden</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van hoteluitbater tot winkel in de vestingstad – ik help je bedrijf online groeien in Heusden.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Heusden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Heusden</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale en toeristische SEO sta jij bovenaan bij relevante zoekopdrachten. Perfect voor de unieke markt van Heusden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel voor toerisme</li>
                  <li>✓ Zoekwoordenonderzoek Heusden & regio</li>
                  <li>✓ Content voor historie & moderne diensten</li>
                  <li>✓ Beoordelingen van toeristen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Heusden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Heusdense ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Heusden</h3>
                <p className="text-gray-600 mb-6">
                  Bereik toeristen en lokale klanten met gerichte advertenties voor de historische vestingstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Toeristische en lokale campagnes</li>
                  <li>✓ Focus op Heusden, Drunen, Nieuwkuijk</li>
                  <li>✓ Seizoensgebonden optimalisatie</li>
                  <li>✓ Meetbaar resultaat & ROI</li>
                </ul>
              </div>
              {/* Website & Toerisme Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Toerisme Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites met boekingssystemen en marketing die perfect aansluit bij Heusden's toeristische karakter.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Websites voor hotels & restaurants</li>
                  <li>✓ Online boekingssystemen</li>
                  <li>✓ Mobiele optimalisatie voor toeristen</li>
                  <li>✓ Meertalige content mogelijk</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION SPECIFIEK VOOR HEUSDEN */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">marketing in Heusden</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hoe zorg ik dat mijn hotel/restaurant wordt gevonden door toeristen?</h3>
                <p className="text-gray-700">
                  Voor toeristische bedrijven in Heusden focus ik op zoektermen zoals "hotel Heusden", "restaurant vestingstad" en "overnachten historisch Heusden". Daarnaast optimaliseer ik voor seizoensgebonden zoekopdrachten en zorg ik voor sterke Google Bedrijfsprofiel met prachtige foto's van de historische locatie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wat kost SEO en marketing voor een bedrijf in Heusden?</h3>
                <p className="text-gray-700">
                  Voor lokale bedrijven in Heusden start lokale SEO vanaf €800 per maand, inclusief Google Bedrijfsprofiel optimalisatie, lokale content en recensiemanagement. Google Ads campagnes beginnen vaak vanaf €500-1000 budget per maand, afhankelijk van seizoen en doelgroep (toeristen vs lokale klanten).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie in Heusden?</h3>
                <p className="text-gray-700">
                  Google Bedrijfsprofiel optimalisatie in Heusden toont vaak binnen 2-4 weken resultaat. Lokale SEO voor toeristische bedrijven heeft meestal 2-4 maanden nodig voor significante groei. Google Ads kunnen direct starten en binnen een week eerste boekingen/aanvragen genereren, vooral in het toeristenseizoen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bereik ik ook klanten uit Drunen, Nieuwkuijk en Vlijmen?</h3>
                <p className="text-gray-700">
                  Absoluut! Heusden ligt strategisch tussen deze kernen en veel inwoners bezoeken Heusden voor dining, shopping en diensten. Ik optimaliseer specifiek voor "nabij Drunen", "restaurant bij Nieuwkuijk" en andere regionale zoekopdrachten. Zo trek je zowel toeristen als regionale klanten aan.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Helpt online marketing ook met seizoensschommelingen?</h3>
                <p className="text-gray-700">
                  Zeker! Voor toeristische bedrijven in Heusden ontwikkel ik seizoensspecifieke strategieën: zomerpromoties voor terrassen aan de haven, winteracties voor gezellige indoor dining, en voorjaars-/najaarscampagnes voor wandelaars en cultuurliefhebbers. Ook focus op zakentoerisme en weekendtrips helpt seizoensschommelingen te verkleinen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kan ik online boekingen integreren voor mijn Heusden bedrijf?</h3>
                <p className="text-gray-700">
                  Ja, ik help met moderne boekingssystemen voor hotels, restaurants en activiteiten in Heusden. Van simpele reserveringsformulieren tot volledige online booking engines. Ook integreer ik met populaire platforms zoals Booking.com en OpenTable, zodat gasten je gemakkelijk kunnen vinden en reserveren.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Moet ik mijn website in meerdere talen aanbieden?</h3>
                <p className="text-gray-700">
                  Voor toeristische bedrijven in Heusden kan een Engelstalige versie waardevol zijn, gezien de internationale bezoekers. Ik adviseer eerst de Nederlandse markt goed te bedienen, dan uit te breiden naar Engels. Duitse bezoekers zijn ook een interessante doelgroep voor Heusden. We analyseren je huidige gastenbestand om de beste strategie te bepalen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Heusden</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in historisch Heusden – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Heusden - Online Marketing Heusden & Omgeving</h3>
              <p className="text-gray-600">
                Actief in Heusden • Drunen • Nieuwkuijk • Vlijmen • Waalwijk • Loon op Zand • Den Bosch • Tilburg • Kaatsheuvel • Oosterhout • Geertruidenberg • Raamsdonksveer • Waspik
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}