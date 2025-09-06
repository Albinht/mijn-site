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

export default function MarketingPurmerend() {
  // Lokale Purmerend reviews - Poorstad van het Waterland
  const dutchReviews = [
    { name: 'Tandarts Gors', rating: 5, text: 'In de wijk Gors veel gezinnen met kinderen. Door lokale SEO krijgen we continu nieuwe patiënten uit heel Purmerend en Waterland!' },
    { name: 'Restaurant Centrum', rating: 5, text: 'Het gezellige centrum van Purmerend trekt veel bezoekers. Onze zaak staat nu bovenaan in Google en zit elke avond vol.' },
    { name: 'Sportschool Overwhere', rating: 4.5, text: 'Overwhere is een sportieve wijk. Via online marketing bereiken we nu leden uit Purmerend, Volendam en heel Noord-Holland Noord.' },
    { name: 'Bouwbedrijf Wheermolen', rating: 5, text: 'Wheermolen heeft veel nieuwbouw en renovaties. We staan nu #1 voor "aannemer Purmerend" en hebben maandenlang vooruit werk!' },
    { name: 'Kapsalon Koemarkt', rating: 5, text: 'De Koemarkt is het hart van Purmerend. Dankzij Google Ads komen er klanten uit Amsterdam Noord, Edam en heel Waterland.' },
    { name: 'Autogarage Purmerbuurt', rating: 5, text: 'Purmerbuurt heeft veel werkende inwoners. Door professionele marketing bereiken we nu automobilisten uit de hele regio Noord-Holland.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fysiotherapie Molenkoog', rating: 5, text: 'Molenkoog is perfect voor onze praktijk. Door lokale zichtbaarheid krijgen we patiënten uit alle wijken van Purmerend en omgeving.' },
    { name: 'Installatiebedrijf Purmer-Noord', rating: 4.5, text: 'Noord Purmerend groeit snel. Onze diensten worden nu gevonden door huiseigenaren uit heel de regio - fantastische groei!' },
    { name: 'Accountant Centrum', rating: 5, text: 'Het centrum heeft veel ondernemers. Via Google Ads bereiken we nu alle MKB bedrijven die fiscale hulp nodig hebben in Waterland.' },
    { name: 'Schoonheidssalon Gunterstein', rating: 5, text: 'Gunterstein is een geliefde woonwijk. Door SEO vinden klanten ons gemakkelijk en zijn we altijd goed geboekt voor behandelingen.' },
    { name: 'Tuinontwerp Waterland', rating: 5, text: 'Het Waterland heeft prachtige huizen met grote tuinen. Online marketing brengt ons opdrachten uit Edam, Volendam en omgeving.' },
    { name: 'Makelaar Weidevenne', rating: 4.5, text: 'Weidevenne is een gewilde locatie. Ons kantoor wordt nu gevonden door woningzoekers uit Amsterdam die rust zoeken in Purmerend.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Purmerend | Marketing Bureau & Online Marketing Purmerend</title>
        <meta
          name="description"
          content="SEO Specialist Purmerend voor lokale bedrijven. Meer klanten in Purmerend met gerichte SEO, Google Ads en professionele marketing in de Waterland."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/purmerend" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Purmerend: Poorstad van Waterland</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">82.000 Purmerenders bereiken jouw bedrijf</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Purmerend: waar Waterland traditie en moderne levendigheid samenkomen.</strong><br />
              Van het historische centrum rond de Koemarkt tot moderne woonwijken zoals Overwhere en Wheermolen, van het pittoreske Waterland tot de drukte van forensenverkeer naar Amsterdam - Purmerend combineert dorpsgezelligheid met stadsgemak. Met 82.000+ inwoners en als poort naar het Waterland biedt Purmerend ondernemers de perfecte mix van rust, ruimte en bereikbaarheid. Als <b>SEO specialist Purmerend</b> help ik ambitieuze bedrijven de digitale kansen van deze charminante Waterlandstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Purmerend: zichtbaar in Waterland</li>
              <li>✓ Google Ads: direct bereik naar 82.000+ Purmerenders</li>
              <li>✓ Speciaal voor ondernemers in Noord-Holland Noord</li>
              <li>✓ <b>SEO Purmerend</b> met focus op Waterland regio</li>
              <li>✓ Websites die passen bij Purmerend's charme</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Purmerend cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Purmerend & Waterland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Purmerend - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Purmerend" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Purmerend met doelgerichte marketing"
          subtitle="Digitale groei voor Waterland"
          features={[
            {
              badge: "SEO Purmerend",
              title: "SEO Specialist Purmerend",
              description: "Purmerend heeft een unieke positie als poort naar het Waterland met veel forensenverkeer naar Amsterdam. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en nieuwe klanten aan te trekken uit heel Noord-Holland Noord.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Purmerend",
              description: "Direct zichtbaar voor 82.000+ Purmerenders en forensbezoekers richting Amsterdam. Adverteer gericht in alle wijken van centrum tot Overwhere en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Purmerend",
              description: "Moderne, professionele websites die passen bij Purmerend's mix van gezelligheid en professionaliteit. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit heel Waterland.",
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
          title="Purmerend groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Purmerend</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale ondernemers tot regionale spelers – ik help ambitieuze bedrijven online groeien in Waterland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Purmerend */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Purmerend</h3>
                <p className="text-gray-600 mb-6">
                  In een groeiende forensenstad als Purmerend is lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken in alle wijken en bereik ook Amsterdam forensen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Purmerend</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Purmerend */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor forensensteden
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Purmerend</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 82.000+ Purmerenders en dagelijkse forensen naar Amsterdam met strategisch gerichte campagnes voor maximale impact in Waterland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & forensroutes</li>
                  <li>✓ Focus op lokale en regionale klanten</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Purmerend's mix van dorpsgezelligheid en moderne professionaliteit, zorgen voor meer conversies uit Waterland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern design voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Noord-Holland Noord</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Purmerend</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Purmerend?</h3>
                <p className="text-gray-600">
                  Purmerend is de poort naar het Waterland en een belangrijke forensenstad naar Amsterdam. Met 82.000+ inwoners plus duizenden dagelijkse forensen is lokale zichtbaarheid cruciaal. Van het gezellige centrum tot moderne woonwijken - je wilt gevonden worden door zowel lokale bewoners als doorstromende bezoekers uit heel Noord-Holland Noord.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Purmerend van andere steden?</h3>
                <p className="text-gray-600">
                  Purmerend combineert Waterland traditie met moderne forensmentaliteit. Veel inwoners werken in Amsterdam maar wonen hier voor de rust en ruimte. Ze waarderen zowel lokale gezelligheid als professionele dienstverlening. Marketing moet daarom authentiek lokaal zijn maar ook aansluiten bij de kosmopolitische levensstijl van forensen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Purmerend zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum rond de Koemarkt voor retail en horeca, Gors voor gezinsgerichte diensten, Overwhere voor moderne bewoners, Wheermolen voor nieuwbouw, Molenkoog voor groeiende gezinnen, en Gunterstein voor gevestigde inwoners. Elke wijk heeft eigen karakteristieken die aansluiten bij verschillende doelgroepen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Purmerend?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €700-1100 per maand, afhankelijk van concurrentie en ambities. Google Ads beheer vanaf €400 per maand plus advertentiebudget. Websiteprojecten vanaf €2400. Purmerend heeft goede koopkracht door forensverkeer en de ROI is uitstekend door de combinatie van lokale en regionale klanten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Purmerend?</h3>
                <p className="text-gray-600">
                  Zeker! Purmerend is het centrum van Waterland en trekt bezoekers uit Volendam, Edam, Monnickendam, Marken en omgeving. Veel Purmerendse bedrijven bedienen heel Noord-Holland Noord en delen van Amsterdam Noord. De strategie wordt aangepast om dit bredere verzorgingsgebied effectief te dekken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Purmerend?</h3>
                <p className="text-gray-600">
                  Eerste verbeteringen zie je vaak binnen 2-3 maanden, significante groei binnen 4-6 maanden. Google Ads leveren directe zichtbaarheid. De concurrentie in Purmerend is nog overzichtelijk, waardoor resultaten vaak sneller zichtbaar zijn dan in grote steden zoals Amsterdam of Utrecht.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Purmerend?</h3>
                <p className="text-gray-600">
                  Dienstverlening voor forensen (kinderopvang, onderhoud, schoonmaak), horeca en retail (lokale beleving), gezondheidszorg en wellness, bouw en wonen (veel renovaties), en automotive (forensmobiliteit). Purmerend's forensenkarakter biedt unieke kansen voor diverse branches.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Purmerend?</h3>
                <p className="text-gray-600">
                  Google My Business en social media kun je zelf opstarten voor basis zichtbaarheid. Maar voor echte groei in een forensenmarkt als Purmerend heb je expertise nodig. Lokale SEO, doelgroepsegmentatie en conversie-optimalisatie vereisen ervaring. Ik begeleid ook graag bij een hybride aanpak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Purmerend</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Waterland – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Purmerend - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Purmerend Centrum • Gors • Overwhere • Wheermolen • Molenkoog • Gunterstein • Purmer-Noord • Weidevenne • Volendam • Edam • Monnickendam • Marken
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}