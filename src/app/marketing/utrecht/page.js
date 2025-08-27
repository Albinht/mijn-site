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

export default function MarketingUtrecht() {
  // Lokale Utrecht reviews - historische universiteitstad en centraal gelegen transportknooppunt
  const dutchReviews = [
    { name: 'Restaurant Dom Under', rating: 5, text: 'Ons restaurant in de schaduw van de Domtoren krijgt nu bezoekers uit heel Nederland. De lokale SEO heeft onze zichtbaarheid verdrievoudigd!' },
    { name: 'Advocatenkantoor Neude', rating: 5, text: 'Vanaf ons kantoor aan de Neude bereiken we nu de hele Randstad. Structurele groei dankzij strategische marketing voor Utrecht.' },
    { name: 'Fietsenmaker Lombok', rating: 5, text: 'In de diverse wijk Lombok is onze reparatieservice nu de best gevonden. Google Ads werkt perfect voor lokaal ondernemen!' },
    { name: 'Consultancy Papendorp', rating: 5, text: 'Vanuit bedrijventerrein Papendorp bedienen we heel Midden-Nederland. De digitale strategie heeft ons naar een hoger niveau gebracht.' },
    { name: 'Tandarts Wittevrouwen', rating: 4.5, text: 'In de chique wijk Wittevrouwen was concurrentie hevig, maar we staan nu bovenaan voor "tandarts Utrecht". Agenda vol!' },
    { name: 'Yogastudio Oudwijk', rating: 5, text: 'Onze studio in Oudwijk trekt nu studenten van de hele universiteit. Perfecte match tussen online marketing en lokale gemeenschap.' },
  ]
  const dutchMoreReviews = [
    { name: 'Tech Startup Leidsche Rijn', rating: 5, text: 'Vanuit nieuwbouwwijk Leidsche Rijn hebben we nu landelijke klanten. Utrecht als tech-hub echt goed uitgebuit dankzij SEO!' },
    { name: 'Café Oudegracht', rating: 5, text: 'Ons café aan de beroemde werfkelders krijgt nu toeristen uit de hele wereld. Internationale SEO heeft ons bereik enorm vergroot.' },
    { name: 'Boekwinkel Drift', rating: 4.5, text: 'In de bruisende Drift, tussen alle studenten, staan we nu bovenaan. Universitaire markt perfect aangeboord met gerichte marketing.' },
    { name: 'Kapperszaak Overvecht', rating: 5, text: 'In multiculturele wijk Overvecht bereiken we alle gemeenschappen. Lokale inclusiviteit heeft onze klantenkring verbreed.' },
    { name: 'Fysiotherapie Science Park', rating: 5, text: 'Op het wetenschapspark behandelen we nu academici uit heel Utrecht. B2B marketing voor zorgverleners werkt uitstekend!' },
    { name: 'Restaurant Kanaleneiland', rating: 4.5, text: 'In de opkomende wijk Kanaleneiland zijn we uitgegroeid tot culinaire hotspot. Online reputatie perfect opgebouwd.' },
    { name: 'Notariskantoor Centrum', rating: 5, text: 'Vanuit het historische centrum bedienen we de hele regio Utrecht. Zakelijke dienstverlening optimaal gepositioneerd online.' },
    { name: 'Sportschool Zuilen', rating: 4.5, text: 'In Noord-Utrecht trekken we nu leden uit alle wijken. Sportmarketing in studentenstad is een specialiteit geworden!' },
    { name: 'Design Bureau Nieuwegein', rating: 5, text: 'Hoewel in Nieuwegein gevestigd, bereiken we via Utrecht-marketing de hele creatieve sector. Perfecte regionale strategie.' },
    { name: 'Reisbureau Centraal Station', rating: 5, text: 'Bij het drukste treinstation van Nederland vangen we nu alle reizigers. Locatie-gebaseerde marketing werkt perfect!' },
    { name: 'Muziekles Conservatorium', rating: 5, text: 'In de buurt van het Conservatorium hebben we nu wachtlijsten. Culturele marketing in Utrecht vraagt om specialistische aanpak.' },
    { name: 'Elektriciën Vleuten', rating: 4.5, text: 'Vanuit het groene Vleuten dekken we heel West-Utrecht af. Technische dienstverlening perfect gepositioneerd voor groeiende wijken.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Utrecht | Marketing Bureau & Online Marketing Utrecht</title>
        <meta
          name="description"
          content="SEO Specialist Utrecht inschakelen? Kies voor hét marketing bureau in Utrecht. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/utrecht" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Van Domtoren tot Science Park: heel Utrecht digitaal domineren</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">360.000 Utrechters + 70.000 studenten wachten op jouw expertise</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Utrecht: het kloppende hart van Nederland waar historie, universiteit en innovatie samenkomen.</strong><br />
              Met de iconische Domtoren, de oudste universiteit van Nederland (1636), moderne wijken als Leidsche Rijn (100.000+ inwoners) en bruisende buurten als Lombok en Wittevrouwen biedt Utrecht ongeëvenaarde mogelijkheden. Als <b>SEO specialist Utrecht</b> positioneer ik je tussen de 20.000+ bedrijven - van startup bij de Uithof tot corporate in het Central Business District.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Utrecht: bovenaan voor je vakgebied</li>
              <li>✓ Google Ads: directe leads uit Utrecht en omgeving</li>
              <li>✓ Universitaire markt: 70.000 studenten en 8.000 medewerkers</li>
              <li>✓ <b>SEO Utrecht</b> met aantoonbare ROI</li>
              <li>✓ Websites die drukke Utrechters overtuigen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Utrecht cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Digital Marketing Agency Utrecht - Actief in Utrecht en regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct spreken? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Utrecht - Marketing Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Utrecht" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Utrecht met gerichte marketing"
          subtitle="Lokale expertise voor de veelzijdigste stad van Nederland"
          features={[
            {
              badge: "SEO Utrecht",
              title: "SEO Specialist Utrecht",
              description: "Van historisch centrum tot moderne Science Park - ik positioneer je bedrijf waar Utrechters écht zoeken. Lokale autoriteit opbouwen in een stad met zoveel diversiteit.",
              visualTitle: "Lokaal zichtbaar",
              visualSubtitle: "Altijd vindbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Utrecht",
              description: "Direct zichtbaar voor 360.000 inwoners, 70.000 studenten én forensen uit de Randstad. Adverteren waar het ertoe doet: in het centrum van Nederland.",
              visualTitle: "Directe zichtbaarheid",
              visualSubtitle: "Maximum bereik",
              image: keywordResearchImage
            },
            {
              badge: "Marketing Bureau",
              title: "Online Marketing Utrecht",
              description: "Professionele websites en campagnes die werken in Utrecht's unieke markt. Van B2B voor corporates tot B2C voor lokale ondernemers - altijd maatwerk.",
              visualTitle: "Website & Strategie",
              visualSubtitle: "Meer conversies",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Utrecht onderneemt <span class='bg-[#F7D8FA] px-2 rounded italic'>succesvoller online</span> met Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Utrecht</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van studentenstad tot corporate centrum - ik help je bedrijf online groeien in Nederland's veelzijdigste stad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Utrecht */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Utrecht</h3>
                <p className="text-gray-600 mb-6">
                  Lokale SEO die werkt in Utrecht's complexe markt. Van universitaire wijk tot zakencentrum - overal zichtbaar zijn waar het telt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel voor Utrecht</li>
                  <li>✓ Wijkgerichte SEO-strategieën</li>
                  <li>✓ Universitaire en corporate targeting</li>
                  <li>✓ Reputatiemanagement voor diverse markt</li>
                </ul>
              </div>
              {/* Google Ads Utrecht */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor Utrecht's veelzijdige markt
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Utrecht</h3>
                <p className="text-gray-600 mb-6">
                  Strategische advertenties die werken in Utrecht's unieke ecosysteem. Van student tot CEO - iedereen bereiken met de juiste boodschap.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Locatie-gebaseerde campagnes per wijk</li>
                  <li>✓ Universitaire en zakelijke targeting</li>
                  <li>✓ Randstad-brede bereik vanuit Utrecht</li>
                  <li>✓ Data-gedreven optimalisatie</li>
                </ul>
              </div>
              {/* Website & Marketing Bureau */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Marketing Bureau</h3>
                <p className="text-gray-600 mb-6">
                  Websites en marketing die aansluiten bij Utrecht's dynamiek. Van culturele sector tot tech - altijd de juiste tone of voice.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Responsive design voor alle devices</li>
                  <li>✓ Cultureel en zakelijk geschikt</li>
                  <li>✓ Snelle laadtijden voor mobiele Utrechters</li>
                  <li>✓ Conversie-geoptimaliseerde user experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UTRECHT SPECIFIEKE FAQ SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO & Marketing in Utrecht</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik studenten én zakelijke klanten in Utrecht?</h3>
                <p className="text-gray-600">Utrecht's unieke mix van 70.000 studenten en duizenden bedrijven vraagt om een gesegmenteerde aanpak. Ik ontwikkel campagnes die both markets bedienen - van studentvriendelijke content tot corporate B2B-strategieën, elk met eigen tone of voice en kanalen.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor een Utrecht bedrijf?</h3>
                <p className="text-gray-600">SEO in Utrecht start vanaf €800 per maand, afhankelijk van je sector en doelen. De universitaire markt vraagt om andere strategieën dan de corporate sector rond Papendorp. Na een gratis analyse krijg je een transparante prijsopgave gebaseerd op je specifieke Utrecht-doelstellingen.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Utrecht zijn het interessantst voor online marketing?</h3>
                <p className="text-gray-600">Elke wijk heeft zijn eigen karakter: het centrum trekt toeristen en cultuurliefhebbers, Leidsche Rijn jong en koopkrachtig, Lombok divers en creatief, Wittevrouwen exclusief. Ik stem je marketing af op de specifieke demografische kenmerken per gebied voor maximaal resultaat.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe onderscheid ik mij van andere bedrijven in Utrecht?</h3>
                <p className="text-gray-600">Met 20.000+ bedrijven is differentiatie cruciaal. Ik help je een unieke propositie ontwikkelen die past bij Utrecht's cultuur. Denk aan universiteitspartnerschappen, culturele sponsoring, of duurzaamheid - waarden die resoneren met de progressieve Utrechtse mentaliteit.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe belangrijk is de Randstad-connectie voor Utrecht marketing?</h3>
                <p className="text-gray-600">Essentieel! Utrecht's centrale ligging maakt het de poort tot Amsterdam, Den Haag en Rotterdam. Veel Utrechters werken elders en vice versa. Je marketing moet rekening houden met dit forensenverkeer en de Randstad als geheel benaderen vanuit je Utrecht-basis.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik vanuit Utrecht landelijk opereren?</h3>
                <p className="text-gray-600">Absoluut! Utrecht's positie als knooppunt van Nederland geeft je een natuurlijk voordeel voor landelijke expansie. Ik ontwikkel strategieën die starten met sterke lokale aanwezigheid en geleidelijk uitbreiden naar andere provincies, waarbij Utrecht's reputatie als kennisstad wordt uitgebuit.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe zit het met seizoensgebonden marketing in Utrecht?</h3>
                <p className="text-gray-600">Utrecht kent duidelijke seizoenen: drukke studentenperiodes (september/februari), zomerfestivals, culturele evenementen en de levendige winterperiode. Je marketing moet hierop anticiperen met bijvoorbeeld studentgerichte campagnes in augustus of toeristenmarketing rond de Domtoren in zomermaanden.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke resultaten kan ik verwachten in de eerste 6 maanden?</h3>
                <p className="text-gray-600">Utrecht's competitieve markt vereist realistische verwachtingen. In 3 maanden zie je eerste verbeteringen in lokale vindbaarheid, na 6 maanden significante groei in organisch verkeer. Google Ads leveren sneller resultaat - binnen weken leads uit verschillende Utrecht wijken. Elk resultaat wordt transparant gerapporteerd.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Utrecht te veroveren</span> met slimme marketing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf laat groeien in Nederland's meest veelzijdige stad - altijd strategisch advies en concrete resultaten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Meer weten over marketing in Utrecht? Bel voor een vrijblijvend strategiegesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel schakelen zoals een echte Utrechter? Start direct het gesprek via WhatsApp.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Utrecht - Online Marketing Bureau & Omgeving</h3>
              <p className="text-gray-600">
                Actief in: Centrum • Oudegracht • Neude • Domtoren • Lombok • Wittevrouwen • Oudwijk • Overvecht • Kanaleneiland • Zuilen • Leidsche Rijn • Vleuten-De Meern • Science Park • Uithof • Nieuwegein • Zeist • Houten • IJsselstein • Vianen • De Bilt • Bunnik • Maarssen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}