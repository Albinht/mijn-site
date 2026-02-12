'use client'

import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'
import ContactForm from '../../../components/ContactForm'

export default function MarketingDenHaag() {
  // Lokale Den Haag reviews - hofstad met internationale uitstraling
  const dutchReviews = [
    {
      name: 'Hotel Des Indes Lange Voorhout',
      rating: 5,
      text: 'Ons luxe hotel op het prestigieuze Lange Voorhout wordt nu perfect gevonden door internationale gasten. Fantastische stijging in directe boekingen!',
    },
    {
      name: 'Restaurant Binnenhof',
      rating: 5,
      text: 'In het hart van de hofstad, nabij het Binnenhof, krijgen we nu politici en diplomaten als gasten. De lokale SEO heeft ons op de kaart gezet.',
    },
    {
      name: 'Advocatenkantoor Bezuidenhout',
      rating: 5,
      text: 'Vanuit het diplomatieke Bezuidenhout bedienen we nu internationale rechtszaken. Google Ads levert structureel kwalitatieve leads op.',
    },
    {
      name: 'Consultancy Vredespaleis',
      rating: 5,
      text: 'In de buurt van het Vredespaleis was sterke online aanwezigheid cruciaal voor internationale cliënten. Perfect resultaat met lokale marketing.',
    },
    {
      name: 'Café Scheveningen Boulevard',
      rating: 4.5,
      text: 'Aan de bruisende Scheveningse Boulevard hebben we nu constant bezoekers uit heel Europa. Excellent voor ons seizoensgebonden bedrijf.',
    },
    {
      name: 'IT-Bureau Haagse Bos',
      rating: 5,
      text: 'In het groene Haagse Bos waren we onzichtbaar online, nu staan we bovenaan voor tech-diensten in Den Haag. Geweldige groei!',
    },
  ]

  const dutchMoreReviews = [
    {
      name: 'Tandartspraktijk Statenkwartier',
      rating: 5,
      text: 'Vanuit het chique Statenkwartier bereiken we nu patiënten uit heel Den Haag. Structurele groei in nieuwe aanmeldingen via Google.',
    },
    {
      name: 'Notariskantoor Centrum',
      rating: 5,
      text: 'Voor zakelijke dienstverlening in het centrum was sterke digitale aanwezigheid essentieel. Excellent resultaat met gerichte SEO strategie.',
    },
    {
      name: 'Sportschool Laak',
      rating: 4.5,
      text: 'In de multiculturele wijk Laak krijgen we nu leden uit heel Den Haag-Oost. Perfect bereik dankzij lokale marketing campagnes.',
    },
    {
      name: 'Kapsalon Noordeinde',
      rating: 5,
      text: 'Op het koninklijke Noordeinde is concurrentie groot, maar we staan nu bovenaan. Agenda vol met klanten uit de hele hofstad!',
    },
    {
      name: 'Juridisch Advies Malieveld',
      rating: 5,
      text: 'Nabij het Malieveld bedienen we nu overheidsmedewerkers en diplomaten uit heel Den Haag. De SEO investering betaalt zich dubbel terug.',
    },
    {
      name: 'Bouwbedrijf Loosduinen',
      rating: 4.5,
      text: 'Voor projecten in opkomende wijken als Loosduinen en Segbroek zijn we nu de eerste keuze. Constant nieuwe opdrachten via online kanalen.',
    },
    {
      name: 'Design Studio Zeeheldenkwartier',
      rating: 5,
      text: 'In het trendy Zeeheldenkwartier bereiken we nu creatieve opdrachten uit heel de Randstad. Fantastische online zichtbaarheid!',
    },
    {
      name: 'Consultancy International Zone',
      rating: 4.5,
      text: 'Onze business services in de International Zone worden nu gevonden door internationale organisaties. Top resultaat voor B2B marketing!',
    },
    {
      name: 'Restaurant Pier Scheveningen',
      rating: 5,
      text: 'Op de iconische pier van Scheveningen krijgen we nu gasten van over heel Europa. De marketing strategie heeft ons internationaal zichtbaar gemaakt.',
    },
    {
      name: 'Accountantskantoor Ypenburg',
      rating: 5,
      text: 'Vanuit modern Ypenburg bedienen we nu ondernemers uit heel groot Den Haag. Prachtige groei in onze zakelijke klantenportefeuille.',
    },
    {
      name: 'Fitnessstudio Transvaal',
      rating: 4.5,
      text: 'In deze multiculturele wijk zijn we nu dé fitnessstudio voor ambitieuze Hagenaars. Ledenaantal verdubbeld dankzij lokale SEO!',
    },
    {
      name: 'Tech Startup International Campus',
      rating: 5,
      text: 'Op de International Campus The Hague bereiken we nu tech-investeerders uit heel Europa. Excellent resultaat met gerichte online marketing.',
    },
  ]

  const faqColumns = [
    [
      {
        q: 'Wat kost SEO in Den Haag?',
        a: 'Dat hangt af van je markt, concurrentie en ambitie. Voor MKB start SEO vaak rond €850 p/m. Voor competitieve niches (juridisch, B2B, internationaal) ligt het vaak hoger. Je krijgt altijd een plan met prioriteiten en concrete deliverables.',
      },
      {
        q: 'Wat doet een SEO specialist in Den Haag precies?',
        a: 'Een SEO specialist zorgt dat je website (en Google Maps-profiel) beter gevonden wordt door mensen in Den Haag die nu op zoek zijn naar jouw dienst. Dat betekent: techniek op orde, content die aansluit op zoekintentie, en autoriteit via links/mentions + lokale signalen.',
      },
      {
        q: 'Hoe snel zie ik resultaat met SEO Den Haag?',
        a: 'Lokale verbeteringen (Maps, on-page, interne links) zie je vaak binnen 4–8 weken. Voor zwaardere zoekwoorden duurt het meestal 3–6 maanden. We sturen op duurzame groei: geen korte pieken, wél een stijgende lijn.',
      },
      {
        q: 'Wat maakt lokale SEO in Den Haag zo waardevol?',
        a: 'Veel zoekopdrachten hebben lokale intentie. Als je in het Map Pack komt (de kaartresultaten), krijg je vaak direct telefoontjes en aanvragen. Daarom combineren we SEO altijd met Google Bedrijfsprofiel, reviews, citaties en lokale autoriteit.',
      },
      {
        q: 'Doen jullie ook Google Bedrijfsprofiel (Google Mijn Bedrijf)?',
        a: 'Ja. We optimaliseren je Google Bedrijfsprofiel met de juiste categorieën, services, foto’s, posts en een review-werkwijze. Dit vergroot je kans op zichtbaarheid in Den Haag binnen Google Maps.',
      },
    ],
    [
      {
        q: 'Wat is het verschil tussen een SEO bureau Den Haag en een SEO specialist?',
        a: 'In de praktijk gaat het om hetzelfde doel: meer relevante bezoekers en leads. Het verschil zit meestal in teamgrootte en werkwijze. Bij Niblah krijg je een specialistische aanpak met duidelijke deliverables, snelle communicatie en focus op omzet.',
      },
      {
        q: 'Kan ik concurreren met grotere kantoren/bureaus in Den Haag?',
        a: 'Ja. Grote spelers winnen op budget, maar jij kunt winnen op focus: niche, lokale autoriteit en content die exact aansluit op zoekintentie. Dat is vaak de snelste route naar pagina 1.',
      },
      {
        q: 'Doen jullie ook linkbuilding voor Den Haag?',
        a: 'Ja. Linkbuilding doen we kwaliteit-gedreven: relevante websites, echte mentions en een natuurlijk anchor-profiel. Zo bouw je autoriteit op die blijft staan (en voorkom je risico’s).',
      },
      {
        q: 'Hoe meet je succes?',
        a: 'We sturen op KPI’s die ertoe doen: groei in relevante zoekwoorden, traffic uit Den Haag/regio, leads, conversies en omzet. Je krijgt maandelijkse updates met wat er gedaan is en wat de volgende sprint is.',
      },
      {
        q: 'Moet ik een vast contract afsluiten?',
        a: 'Nee. Je blijft omdat het werkt. We werken met duidelijke afspraken, transparantie en maandelijkse deliverables.',
      },
    ],
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqColumns
      .flat()
      .map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      {/* HERO */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Den Haag</span>
            <br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">Van Binnenhof tot Scheveningen: meer leads uit de hofstad</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            <strong>Den Haag is een unieke markt.</strong> Je concurreert met sterke dienstverleners in overheid, juridisch en internationaal,
            maar óók met lokale spelers in horeca, zorg en MKB.
            <br />
            Als jouw doelgroep in Den Haag zoekt, wil je zichtbaar zijn op <b>pagina 1</b> én in <b>Google Maps</b>.
            Wij helpen je met SEO die draait om omzet: techniek, content, autoriteit en lokale signalen.
          </p>

          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO (Maps): Google Bedrijfsprofiel + reviews + citaties</li>
            <li>✓ Technische SEO: indexatie, snelheid, interne linkstructuur en structured data</li>
            <li>✓ SEO-content: landingspagina’s + topic clusters die verkeer én leads opleveren</li>
            <li>✓ Linkbuilding: kwaliteit boven kwantiteit (autoriteit die blijft staan)</li>
            <li>✓ Geen vast contract, wél maandelijkse deliverables en duidelijke rapportage</li>
          </ul>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0_0_#000]">
              <p className="font-bold text-gray-900">30+ jaar ervaring</p>
              <p className="text-sm text-gray-600">gecombineerd in één familie</p>
            </div>
            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0_0_#000]">
              <p className="font-bold text-gray-900">Duurzame groei</p>
              <p className="text-sm text-gray-600">geen trucjes, wel structuur</p>
            </div>
            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0_0_#000]">
              <p className="font-bold text-gray-900">Geen lang contract</p>
              <p className="text-sm text-gray-600">je blijft omdat het werkt</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <Button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" onClick={() => (window.location.href = '/work-with-me')}>
              Bekijk cases
            </Button>
            <Link href="/services/seo" className="text-sm font-semibold text-[#1795FF] hover:underline">
              Bekijk onze SEO dienstverlening →
            </Link>
          </div>

          <p className="mt-2 text-sm text-gray-500">Werkzaam in Den Haag & regio (o.a. Rijswijk, Delft, Zoetermeer)</p>
          <p className="mt-2 text-xs text-green-600">
            📞 Direct contact? Bel <b>+31 6 48728828</b>
          </p>
        </div>

        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Den Haag - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Niblah SEO Specialist Den Haag" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* SEO UITBESTEDEN DEN HAAG */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SEO uitbesteden in <span className="bg-[#F7D8FA] px-2 rounded italic">Den Haag</span>: zo werken we
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Als je een <strong>SEO specialist in Den Haag</strong> inschakelt, wil je weten wat er elke maand gebeurt en waarom.
            Daarom werken we in fases: eerst zekerheid (techniek + data), daarna groei (content + autoriteit), dan schalen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fase 1: Analyse & nulmeting</h3>
              <p className="text-gray-600">
                We starten met een audit (crawl/indexatie), concurrentie in Den Haag, keyword mapping en prioriteiten.
                Je krijgt een plan dat uitvoerbaar is — geen rapport om in een la te leggen.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fase 2: Fundament (techniek + conversie)</h3>
              <p className="text-gray-600">
                We fixen de blockers: indexatie, interne links, snelheid, templates en tracking.
                Dit is de basis waarop content en linkbuilding pas echt rendement gaan geven.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fase 3: Content die wint</h3>
              <p className="text-gray-600">
                We bouwen landingspagina’s en topic clusters die aansluiten op zoekintentie in Den Haag.
                Denk: dienst + bewijs + FAQ’s + duidelijke CTA’s (zodat verkeer ook leads wordt).
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fase 4: Autoriteit & opschalen</h3>
              <p className="text-gray-600">
                We bouwen autoriteit via kwalitatieve links/mentions en versterken je merk.
                Met maandelijkse iteraties pakken we steeds meer keywords (en vaak ook Google Maps).
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Vraag een gratis SEO check aan <span>→</span>
            </Button>
            <Link href="/services/seo" className="text-sm font-semibold text-[#1795FF] hover:underline">
              Lees hoe onze SEO service werkt →
            </Link>
          </div>
        </div>
      </section>

      {/* SEO AANPAK */}
      <FeatureSection
        title="SEO Den Haag: zo bouwen we aan structurele zichtbaarheid"
        subtitle="Techniek, content en autoriteit (plus lokale Maps)"
        features={[
          {
            badge: 'Technische SEO',
            title: 'Technische SEO Den Haag (indexatie + performance)',
            description:
              'We zorgen dat Google je site kan crawlen en vertrouwen: goede indexatie, canonicals, interne links, snelheid, Core Web Vitals en structured data. Zeker in competitieve markten (juridisch/overheid) maakt techniek vaak het verschil.',
            visualTitle: 'Technische SEO',
            visualSubtitle: 'Indexatie & snelheid',
            image: masterSeoImage,
          },
          {
            badge: 'SEO-content',
            title: 'Content die rankt én converteert',
            description:
              'We maken landingspagina’s en clusters die aansluiten op zoekintentie in Den Haag. Niet “meer tekst”, maar de juiste pagina’s: diensten, locaties, cases en FAQ’s die bezoekers naar contact of offerte sturen.',
            visualTitle: 'SEO-content',
            visualSubtitle: 'Intentie & conversie',
            image: contentRanksImage,
          },
          {
            badge: 'Autoriteit',
            title: 'Linkbuilding & lokale autoriteit in Den Haag',
            description:
              'Autoriteit win je met relevante mentions en links. We bouwen kwalitatieve backlinks, versterken je interne linkstructuur en zetten lokale signalen (reviews, citaties, partners) zo neer dat je vaker in het Map Pack en organisch bovenaan komt.',
            visualTitle: 'Autoriteit',
            visualSubtitle: 'Links & lokale signalen',
            image: keywordResearchImage,
          },
        ]}
      />

      {/* LOKALE SEO DEN HAAG (MAPS) */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lokale SEO Den Haag: hoger in <span className="bg-[#F7D8FA] px-2 rounded italic">Google Maps</span>
              </h2>
              <p className="text-lg text-gray-700">
                Voor veel bedrijven in Den Haag is Google Maps het snelste kanaal naar aanvragen.
                Als jij verschijnt in het <strong>Local Pack</strong> (de kaart met 3 resultaten), win je vaak de klik.
              </p>

              <ul className="mt-6 space-y-2 text-gray-800">
                <li>✓ Google Bedrijfsprofiel (categorieën, services, posts, foto’s)</li>
                <li>✓ Reviews: volume + kwaliteit + snelheid + respond rate</li>
                <li>✓ Lokale citaties (NAP consistent) en relevante vermeldingen</li>
                <li>✓ Locatiepagina’s en interne links per dienst/wijk (waar relevant)</li>
                <li>✓ Lokale linkbuilding (partners, verenigingen, media, niche sites)</li>
              </ul>

              <p className="mt-6 text-gray-600">
                Tip: lokale SEO werkt het best in combinatie met sterke pagina’s op je site.
                Daarom pakken we <strong>Maps + organisch</strong> samen aan.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maps checklist (snelle winst)</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Primair keyword in je services (niet in de naam)</li>
                <li>✓ Minstens 10–20 foto’s (echt, geen stock)</li>
                <li>✓ Reviews elke maand (niet 1x per jaar)</li>
                <li>✓ Servicegebied + openingstijden volledig</li>
                <li>✓ Lokale landingspagina’s met duidelijke CTA</li>
              </ul>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  Laat ons je Maps checken <span>→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 30-DAGEN PLAN */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wat je krijgt in de <span className="bg-[#F7D8FA] px-2 rounded italic">eerste 30 dagen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Geen vage beloftes — je krijgt deliverables die je positie én leads in Den Haag vooruit helpen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Week 1: Nulmeting & kansen</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Technische audit (crawl/index/UX)</li>
                <li>✓ Concurrentie- & SERP-analyse (Den Haag)</li>
                <li>✓ Zoekwoordenmap + contentplan</li>
                <li>✓ Prioriteitenlijst (impact vs effort)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Week 2–4: Implementatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Quick wins: titles/meta/headers + interne links</li>
                <li>✓ Google Bedrijfsprofiel optimalisatie (Maps)</li>
                <li>✓ 1–3 sterke landingspagina’s (high intent)</li>
                <li>✓ Start autoriteit: eerste kwalitatieve links/mentions</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Check of je business past (gratis) <span>→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voor wie is een <span className="bg-[#F7D8FA] px-2 rounded italic">SEO specialist Den Haag</span> ideaal?
            </h2>
            <p className="text-xl text-gray-600">
              Als je meer aanvragen wilt uit Den Haag (en je niet afhankelijk wilt zijn van alleen ads), dan is SEO de meest duurzame groeibasis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Lokale dienstverleners</h3>
              <p className="text-gray-600 text-sm">Zorg, juridisch, bouw, installaties, advies — alles waar lokale intentie telt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">B2B in Den Haag</h3>
              <p className="text-gray-600 text-sm">Meer kwalitatieve leads via content + autoriteit in je niche.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">E-commerce</h3>
              <p className="text-gray-600 text-sm">Categorie- en productpagina’s die winnen + linkbuilding voor autoriteit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Internationaal</h3>
              <p className="text-gray-600 text-sm">Meertalige SEO (hreflang) en content voor internationale doelgroepen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Den Haag groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO</span> door Niblah"
      />

      {/* WAT DOEN WE CONCREET */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waar werkt een <span className="bg-[#F7D8FA] px-2 rounded italic">SEO specialist in Den Haag</span> aan?
            </h2>
            <p className="text-xl text-gray-600">
              SEO is geen één ding. Wij combineren techniek, content en autoriteit — precies de onderdelen die Google gebruikt om winnaars te kiezen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technische SEO</h3>
              <p className="text-gray-600 mb-6">Zichtbaar worden begint bij een site die Google begrijpt en vertrouwt.</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Crawlbaarheid & indexatie</li>
                <li>✓ Core Web Vitals / snelheid</li>
                <li>✓ Structured data (schema)</li>
                <li>✓ Interne linkstructuur & orphan pages</li>
              </ul>
              <p className="text-sm text-gray-600">
                Bekijk ook: <Link href="/services/seo/technical-seo" className="text-[#1795FF] hover:underline">Technische SEO</Link>
              </p>
            </div>

            <div
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2"
              style={{ borderColor: '#8C2891' }}
            >
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Grootste hefboom
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO-content</h3>
              <p className="text-gray-600 mb-6">Content die inspeelt op zoekintentie in Den Haag en bezoekers naar contact stuurt.</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Zoekwoordenonderzoek + mapping</li>
                <li>✓ Landingspagina’s met conversiefocus</li>
                <li>✓ Topic clusters & interne links</li>
                <li>✓ FAQ’s die long-tail verkeer pakken</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Linkbuilding & autoriteit</h3>
              <p className="text-gray-600 mb-6">Autoriteit maakt het verschil in competitieve niches. We bouwen kwaliteit, niet ruis.</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Kwalitatieve backlinks</li>
                <li>✓ Lokale mentions/citaties</li>
                <li>✓ Review-strategie (Maps)</li>
                <li>✓ Brand authority + topical authority</li>
              </ul>
              <p className="text-sm text-gray-600">
                Bekijk ook: <Link href="/services/seo/linkbuilding" className="text-[#1795FF] hover:underline">Linkbuilding</Link>
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Sneller resultaat nodig terwijl SEO opbouwt? Combineer met{' '}
              <Link href="/services/google-ads" className="text-[#1795FF] hover:underline font-semibold">Google Ads</Link>.
            </p>
            <Button
              variant="secondary"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Bespreek je groeiplan <span>→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* WERKGEBIED / CLUSTER */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Ook actief rondom Den Haag</h2>
          <p className="text-gray-600 mb-6">
            Veel Den Haag-trajecten lopen door in de regio. We helpen ook bedrijven in omliggende plaatsen.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/marketing/rijswijk" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Rijswijk</Link>
            <Link href="/marketing/delft" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Delft</Link>
            <Link href="/marketing/zoetermeer" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Zoetermeer</Link>
            <Link href="/marketing/leiden" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Leiden</Link>
            <Link href="/marketing/leidschendam-voorburg" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Leidschendam-Voorburg</Link>
            <Link href="/marketing/rotterdam" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Rotterdam</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Den Haag</span>
            </h2>
            <p className="text-xl text-gray-600">Kort, concreet en gericht op jouw situatie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqColumns.map((col, colIndex) => (
              <div key={colIndex} className="space-y-6">
                {col.map((item) => (
                  <div key={item.q} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM (anchors from FeatureSection point here) */}
      <ContactForm />

      {/* EXTRA CONTACT OPTIONS */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Liever direct schakelen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Den Haag</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-8">Bel of WhatsApp — dan prikken we snel een strategiegesprek.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
              <p className="text-gray-600 mb-4">Gratis sparren over jouw situatie in Den Haag.</p>
              <a
                href="tel:+31648728828"
                className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📞 +31 6 48728828
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Snel een vraag? Stuur direct een bericht.</p>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Den Haag – actief in wijken & regio</h3>
            <p className="text-gray-600">
              Centrum • Scheveningen • Bezuidenhout • Statenkwartier • Haagse Bos • Zeeheldenkwartier • Laak • Loosduinen •
              Ypenburg • Mariahoeve • Bouwlust • Transvaal • Schilderswijk • Rijswijk • Delft • Zoetermeer • Leidschendam-Voorburg
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
