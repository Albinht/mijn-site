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

export default function MarketingSittard() {
  // Lokale Sittard reviews - industriestad aan Duitse grens
  const dutchReviews = [
    { name: 'Chemie Consultant Sittard', rating: 5, text: 'Als adviseur voor de chemische industrie bereiken we nu bedrijven in het hele Chemelot complex. Internationale klanten via lokale SEO!' },
    { name: 'Restaurant Limburgse Tafel', rating: 5, text: 'Ons restaurant in het centrum wordt nu gevonden door zowel Sittardenaren als Duitse bezoekers. Grenstoerisme loont!' },
    { name: 'Hotel Sittard Business', rating: 4.5, text: 'Voor zakenreizigers naar Chemelot industriepark zijn we nu eerste keuze. Occupancy is gestegen dankzij sterke online aanwezigheid.' },
    { name: 'Tandartspraktijk Sittard', rating: 5, text: 'Onze moderne praktijk trekt nu patiënten uit Sittard-Geleen en omliggende Duitse gemeentes. Perfect grensoverschrijdend resultaat.' },
    { name: 'Advocaat Sittard', rating: 4.5, text: 'Voor juridische zaken in de grensstreek bereiken we klanten uit Nederland en Duitsland. Specialisatie in internationale contracten loont.' },
    { name: 'Autogarage Sittard', rating: 5, text: 'Voor onderhoud van bedrijfsauto\'s bij Chemelot en particuliere wagens staan we lokaal bovenaan. Duitse klanten waarderen onze service.' },
  ]
  const dutchMoreReviews = [
    { name: 'Technisch Uitzendbureau Sittard', rating: 5, text: 'Voor specialisten in de chemische industrie zijn we nu het eerste resultaat. Chemelot bedrijven vragen regelmatig naar onze mensen.' },
    { name: 'Fysiotherapie Sittard Centrum', rating: 4.5, text: 'Onze praktijk behandelt veel werknemers uit de industrie. Lokale SEO zorgt voor continue aanmeldingen uit heel Sittard-Geleen.' },
    { name: 'Accountant Sittard', rating: 5, text: 'Voor financiële diensten aan industriële bedrijven bereiken we nu het hele Parkstad Limburg gebied. Geweldige uitbreiding!' },
    { name: 'Catering Sittard', rating: 4.5, text: 'Voor bedrijfscatering bij Chemelot en events in Sittard krijgen we nu opdrachten uit heel Zuid-Limburg. Perfect resultaat.' },
    { name: 'IT Support Sittard', rating: 5, text: 'Voor technische ondersteuning aan industriële bedrijven worden we nu regionaal gevonden. Duitse klanten waarderen onze expertise.' },
    { name: 'Makelaardij Sittard', rating: 4.5, text: 'Voor woningverkoop in Sittard-Geleen staan we bovenaan. Veel werknemers uit de chemische industrie zoeken huizen hier.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Sittard | Marketing Bureau & Online Marketing Sittard</title>
        <meta
          name="description"
          content="SEO Specialist Sittard inschakelen? Kies voor hét marketing bureau in Sittard. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/sittard" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Sittard: Chemische Reacties in Online Groei</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Industriestad aan de Duitse grens</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Sittard: waar Nederlandse industrie en Duitse efficiëntie elkaar ontmoeten in een bloeiende economie.</strong><br />
              Met 48.000+ inwoners, het wereldberoemde Chemelot industriepark, strategische ligging aan de Duitse grens en sterke economische basis biedt Sittard uitstekende kansen voor B2B en grenshandel. Als <b>SEO specialist Sittard</b> help ik ondernemers profiteren van zowel de lokale markt als internationale mogelijkheden.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Sittard: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Sittard</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Sittard</li>
              <li>✓ <b>SEO Sittard</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Sittard & Parkstad Limburg</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Sittard - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Sittard" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Sittard met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Sittard",
              title: "SEO Specialist Sittard",
              description: "Wil je echt groeien in Sittard? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Sittard",
              description: "Direct aanvragen van inwoners en bedrijven uit Sittard. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Sittard",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Sittard. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Sittard groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Sittard</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van industriële dienstverlening tot grenshandel – ik help je bedrijf online groeien in Sittard.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Sittard */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Sittard</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Sittard.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Sittard</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Sittard */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Sittardse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Sittard</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Sittard.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Sittard en grensstreek</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Resultaat dat telt</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Sittard</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke lokale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Sittard</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Waarom lokale SEO in Sittard?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Sittard combineert industriële B2B kansen met lokale dienstverlening en grenshandel. Lokale SEO helpt je alle markten bereiken - van Chemelot bedrijven tot Duitse consumenten.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Wat kost SEO voor een bedrijf in Sittard?</summary>
                <div className="mt-4 text-gray-600">
                  <p>SEO projecten starten vanaf €800 per maand. Voor Sittardse ondernemers bied ik maatwerk: van lokale dienstverlening tot industriële B2B marketing. Duitse markt vereist soms aparte aanpak.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Werk je met bedrijven uit de chemische industrie?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Ja, Sittard's Chemelot industriepark biedt unieke B2B kansen. Van toeleveranciers tot dienstverleners voor de chemische industrie - ik help je de juiste klanten bereiken.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Bereik ik ook Duitse klanten?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Zeker! Sittard's grensligging maakt grenshandel mogelijk. We kunnen Nederlandse SEO combineren met Duitse zoekmachine optimalisatie voor maximaal internationaal bereik.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe werkt Google Ads voor Sittard?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Google Ads zijn effectief voor Sittard's diverse economie. Lokaal adverteren vanaf €400/maand, voor B2B industriële marketing en Duitse markt vanaf €600-1000/maand.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe lang duurt het voor ik resultaat zie?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Eerste verbeteringen binnen 4-8 weken. Voor Sittard werkt lokale SEO goed, internationale B2B marketing kan 3-6 maanden duren. Google Ads leveren direct resultaat.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Sittard</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Sittard – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Sittard - Online Marketing Sittard & Omgeving</h3>
              <p className="text-gray-600">
                Sittard Centrum • Chemelot Industriepark • Sittard-Geleen • En natuurlijk ook actief in: Parkstad Limburg • Heerlen • Maastricht • Roermond • Aken (Duitsland) • Heinsberg (Duitsland)
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}