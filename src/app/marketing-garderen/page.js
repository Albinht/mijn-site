'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../assets/graph.png'
import avatarImage from '../../assets/avatar.png'
import masterSeoImage from '../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../assets/Keyword_research.png'
import contentRanksImage from '../../assets/content that ranks.png'
import Button from '../../components/Button'
import ReviewSlider from '../../components/ReviewSlider'
import FeatureSection from '../../components/FeatureSection'

export default function MarketingGarderen() {
  // Lokale Garderen reviews
  const dutchReviews = [
    { name: 'Hotel de Garderense Heide', rating: 5, text: 'Met Albin als SEO specialist staan we op #1 in Google voor "hotel Garderen". Onze bezetting is zichtbaar toegenomen!' },
    { name: 'Garage Veluwse Service', rating: 5, text: 'Dankzij het marketing bureau uit Garderen krijgen we nu wekelijks nieuwe klanten uit de regio. De Google Ads draaien perfect!' },
    { name: 'Restaurant Het Boshuis', rating: 5, text: 'Onze reserveringen zijn verdrievoudigd sinds de nieuwe SEO strategie. De website is professioneel én effectief.' },
    { name: 'Kapsalon Stijlvol Garderen', rating: 5, text: 'We worden nu gevonden op “kapper Garderen” – en dat merken we aan een overvolle agenda!' },
    { name: 'Installatiebedrijf Technisch', rating: 5, text: 'De lokale online zichtbaarheid is enorm verbeterd. De investering in SEO en marketing was het dubbel en dwars waard.' },
    { name: 'Tandartspraktijk Garderen', rating: 4.5, text: 'Albin heeft snel voor meetbaar resultaat gezorgd. Onze praktijk wordt nu lokaal goed gevonden.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Garderen BV', rating: 5, text: 'Binnen vier maanden naar de eerste plek in Google. Lokale SEO werkt écht voor bedrijven in Garderen.' },
    { name: 'Schoonheidssalon Natuurlijk', rating: 5, text: 'Meer aanvragen en meer boekingen uit de regio Garderen. De nieuwe website en SEO maken het verschil.' },
    { name: 'Fietsenwinkel Garderen', rating: 4.5, text: 'We trekken meer klanten uit Voorthuizen en Barneveld dankzij een slimme marketingstrategie.' },
    { name: 'Advocatenkantoor Garderen', rating: 5, text: 'Dankzij de online marketing staan we nu bovenaan bij de juiste zoekopdrachten. Meer nieuwe cliënten uit Garderen.' },
    { name: 'Tuincentrum Garderense Groen', rating: 5, text: 'Onze tuinartikelen zijn lokaal veel zichtbaarder geworden. Vooral in het seizoen merken we dit in onze omzet.' },
    { name: 'Dierenarts Garderen', rating: 4.5, text: 'Onze praktijk is online de nummer één in Garderen. Zeer tevreden over het resultaat!' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Garderen | Marketing Bureau Garderen | SEO & Marketing bedrijf</title>
        <meta
          name="description"
          content="Op zoek naar een SEO specialist in Garderen? Kies voor hét marketing bureau Garderen. Meer klanten uit Garderen dankzij sterke SEO, Google Ads en slimme websites. Gratis advies!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-garderen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">SEO Specialist Garderen</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing bureau Garderen</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Jouw bedrijf ook bovenaan in Google?</strong><br />
              Als <b>SEO specialist Garderen</b> en <b>marketing bedrijf Garderen</b> help ik ondernemers lokaal groeien met resultaatgerichte SEO, krachtige Google Ads en converterende websites. Alles gericht op meer klanten uit Garderen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ SEO Garderen: beter gevonden door lokale klanten</li>
              <li>✓ Google Ads die direct leads en omzet opleveren</li>
              <li>✓ Websites die voor jouw bedrijf werken</li>
              <li>✓ Meer zichtbaarheid in Garderen en omgeving</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="a" href="tel:+31648728828">
                Bel direct: +31 6 48728828 <span>→</span>
              </Button>
              <Button variant="secondary" as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mt-2 sm:mt-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Direct beschikbaar
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">100+ bedrijven uit Garderen en omgeving gingen je voor</p>
            <p className="mt-4 text-sm text-green-700">Ook spoed? WhatsApp direct: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Garderen - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing bedrijf Garderen: resultaat, groei en lokale impact"
          subtitle="Jouw zichtbaarheid en omzet lokaal vergroten."
          features={[
            {
              badge: "SEO specialist Garderen",
              title: "Lokale SEO voor ondernemers in Garderen",
              description: "Met een slimme SEO strategie scoort jouw bedrijf op zoektermen als 'jouw dienst Garderen'. Meer zichtbaarheid en concrete aanvragen uit de regio.",
              visualTitle: "SEO Plan Garderen",
              visualSubtitle: "Hoger in Google",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads voor Garderen",
              description: "Meer leads en aanvragen uit Garderen? Met Google Ads bereik je direct nieuwe klanten. Altijd gericht op jouw ideale doelgroep.",
              visualTitle: "Lokale klanten",
              visualSubtitle: "Direct resultaat",
              image: keywordResearchImage
            },
            {
              badge: "Conversiegerichte websites",
              title: "Websites & Online Marketing",
              description: "Wij bouwen snelle, mobiele en vindbare websites die gericht zijn op conversie. Lokaal succes gegarandeerd.",
              visualTitle: "Webdesign Garderen",
              visualSubtitle: "Meer aanvragen",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS SECTIE */}
        <ReviewSlider
          reviews={dutchReviews}
          moreReviews={dutchMoreReviews}
          title="Garderen kiest voor <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> van Albin"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing bedrijf in <span className="bg-[#F7D8FA] px-2 rounded italic">Garderen</span>
              </h2>
              <p className="text-lg text-gray-600">
                Jouw complete marketing bureau Garderen – voor lokale ondernemers, MKB en ZZP.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* SEO Garderen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Garderen</h3>
                <p className="text-gray-600 mb-6">
                  Wil je met je bedrijf hoger scoren in Google? Als SEO specialist in Garderen zorg ik voor vindbaarheid en groei – lokaal én regionaal.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale zoekwoorden & content Garderen</li>
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Autoriteit & review management</li>
                  <li>✓ Lokale linkbuilding strategie</li>
                </ul>
              </div>
              {/* Google Ads Garderen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen dienst in Garderen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Bureau Garderen</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer aanvragen en klanten? Met Google Ads bereik je direct jouw doelgroep in Garderen en omgeving.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Maatwerk campagnes</li>
                  <li>✓ Lokale targeting voor Garderen</li>
                  <li>✓ Conversie optimalisatie</li>
                  <li>✓ Maandelijkse rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing Garderen</h3>
                <p className="text-gray-600 mb-6">
                  Van conversiegerichte websites tot slimme online marketing voor bedrijven in Garderen. Meer lokale aanvragen, meer groei.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website design op maat</li>
                  <li>✓ Mobielvriendelijk & snel</li>
                  <li>✓ SEO-proof & lokaal geoptimaliseerd</li>
                  <li>✓ Gericht op meer omzet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO specialist Garderen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek wat mijn marketing bureau Garderen voor jouw bedrijf kan betekenen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Snel contact? Bel als je wilt sparren over SEO of marketing voor jouw bedrijf in Garderen.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stuur direct een WhatsApp voor een snelle reactie of korte vraag.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Garderen &amp; regio</h3>
              <p className="text-gray-600">
                Voorthuizen • Kootwijkerbroek • Barneveld • Nijkerk • Ede • Amersfoort • Leusden • Bennekom
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
