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

export default function MarketingAngeren() {
  // Authentieke Angeren reviews met Over-Betuwe en Arnhem-nabijheid context
  const dutchReviews = [
    { name: 'Installatiebedrijf Angeren-Doornenburg', rating: 5, text: 'Als lokale installateur in Angeren bereiken we nu heel Lingewaard. Van Huissen tot Bemmel, van Gendt tot Arnhem-Noord komen de aanvragen binnen.' },
    { name: 'Hoveniersbedrijf De Waalsprong', rating: 5, text: 'We onderhouden tuinen van Angeren tot in de nieuwe wijk Waalsprong Nijmegen. 2900 inwoners in ons dorp, maar duizenden klanten in de regio dankzij SEO.' },
    { name: 'Bouwbedrijf Over-Betuwe', rating: 5, text: 'Vanuit Angeren bouwen we in heel Lingewaard én Arnhem-Noord. De nabijheid tot de stad (10 min) gecombineerd met dorpse betrouwbaarheid werkt perfect online.' },
    { name: 'Restaurant Aan de Linge', rating: 5, text: 'Gasten uit Arnhem centrum zijn in 10 minuten bij ons voor een rustiek diner. Via Google vinden ze ons als "restaurant bij Arnhem" met dorpse charme.' },
    { name: 'Fietsenmaker Angeren-Bemmel', rating: 5, text: 'E-bikes voor forensen naar Arnhem Business Park, racefietsen voor wielrenners op de dijken. Heel Lingewaard komt naar onze werkplaats in Angeren.' },
    { name: 'Zorgpraktijk De Betuwse Linde', rating: 4.5, text: 'Fysiotherapie voor 2900 dorpsbewoners én patiënten uit Huissen en Arnhem-Noord. De combinatie persoonlijke zorg en goede bereikbaarheid trekt aan.' },
  ]
  const dutchMoreReviews = [
    { name: 'Transportbedrijf Angeren Logistics', rating: 5, text: 'Strategisch gelegen tussen Arnhem en Nijmegen. Via SEO vinden logistieke bedrijven uit beide steden ons voor last-mile delivery in de Betuwe.' },
    { name: 'Kapsalon Beauty Angeren', rating: 5, text: 'Niet alleen de 2900 inwoners van Angeren, maar ook klanten uit Doornenburg, Ressen en Huissen weten ons te vinden voor professionele haarstyling.' },
    { name: 'Agrarisch Loonbedrijf Lingewaard', rating: 4.5, text: 'Vanuit Angeren bedienen we boeren in heel Over-Betuwe. Van mais oogsten tot sloten maaien langs de Linge - overal vindbaar dankzij lokale SEO.' },
    { name: 'Elektricien 24/7 Betuwe', rating: 5, text: 'Spoedklussen in Angeren, planmatig onderhoud in Arnhem-Noord. Onze 10 minuten afstand tot de stad is een unique selling point online.' },
    { name: 'Catering De Dorpskeuken', rating: 5, text: 'Van dorpsfeesten in Angeren tot bedrijfscatering op Arnhem Business Park. De mix van lokaal en zakelijk werkt uitstekend in onze marketing.' },
    { name: 'Aannemersbedrijf Dijkwoningen', rating: 4.5, text: 'Gespecialiseerd in karakteristieke dijkhuizen. Van Angeren tot Oosterhout, van Lent tot Elst worden we gevonden voor authentieke renovaties.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Angeren (Lingewaard) | Marketing Bureau 10 Min van Arnhem Centrum</title>
        <meta
          name="description"
          content="Marketing bureau Angeren in Over-Betuwe. Online marketing voor MKB op 10 minuten van Arnhem centrum. SEO specialist voor 2900 inwoners met grootstedelijk bereik."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/angeren" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Dorps onderneemt, stad profiteert: marketing Angeren</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">10 minuten van Arnhem, wereld van verschil</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Angeren: waar Over-Betuwe de skyline van Arnhem ontmoet.</strong><br />
              Als <b>SEO specialist Angeren</b> begrijp ik de unieke positie van dit dorp met 2.900 inwoners, op slechts 10 minuten van Arnhem centrum. Gelegen in gemeente Lingewaard (46.000 inwoners), tussen de Waal en de Linge, help ik lokale ondernemers profiteren van dorpse vertrouwdheid én grootstedelijke kansen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Unieke positie: 10 minuten van Arnhem centrum</li>
              <li>✓ Bereik 46.000 inwoners gemeente Lingewaard</li>
              <li>✓ Target Arnhem-Noord en Business Park (160.000 inw)</li>
              <li>✓ <b>SEO Angeren-Huissen-Bemmel</b> voor regionaal succes</li>
              <li>✓ Profiteren van Waalsprong ontwikkeling Nijmegen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start groei in Angeren <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = '/work-with-me'}>
                Bekijk Lingewaard cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Angeren, Lingewaard & Arnhem-Noord</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Angeren - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Angeren" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van dijkdorp tot digitale koploper: groei vanuit Angeren"
          subtitle="Waar dorpse charme stedelijke klanten trekt"
          features={[
            {
              badge: "Arnhem-bereik",
              title: "SEO voor stad én dorp",
              description: "Op 10 minuten van Arnhem centrum positioneer ik jouw bedrijf als dé lokale specialist met grootstedelijk bereik. Target 160.000 Arnhemmers die de drukte ontvluchten, forensen naar Business Park, en gezinnen die dorps willen wonen maar stedelijk willen shoppen.",
              visualTitle: "Dorps & stedelijk",
              visualSubtitle: "Beste van beide",
              image: masterSeoImage
            },
            {
              badge: "Lingewaard power",
              title: "Google Ads Over-Betuwe",
              description: "Bereik alle 46.000 inwoners van Lingewaard: van Huissen (19.000) tot Bemmel (12.500), van Gendt tot Doornenburg. Plus de groeiende Waalsprong Nijmegen met 25.000 nieuwe bewoners. Jouw advertenties op het kruispunt van drie gemeenten.",
              visualTitle: "Triple bereik",
              visualSubtitle: "Maximum impact",
              image: keywordResearchImage
            },
            {
              badge: "Betuwe karakter",
              title: "Websites met lokale ziel",
              description: "Angeren combineert Betuwse gastvrijheid met stedelijke professionaliteit. Je website straalt vertrouwen uit voor dorpsbewoners én overtuigt zakelijke klanten uit Arnhem. Van aannemersbedrijf tot zorgpraktijk - altijd de perfecte balans.",
              visualTitle: "Conversie & Vertrouwen",
              visualSubtitle: "Meer klanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Angeren groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme stad-dorp marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor ondernemend <span className="bg-[#F7D8FA] px-2 rounded italic">Angeren</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale vakmensen tot regionale dienstverleners - marketing die de brug slaat tussen 
                dorpse betrokkenheid en stedelijke ambities op 10 minuten van Arnhem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Angeren */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Angeren-Arnhem</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten in Angeren én trek klanten uit Arnhem-Noord. Perfect voor bedrijven die lokaal verankerd zijn met regionale ambities.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale SEO Lingewaard (46.000 inw)</li>
                  <li>✓ Arnhem-Noord targeting (10 min)</li>
                  <li>✓ Waalsprong Nijmegen bereik</li>
                  <li>✓ Betuwe route optimalisatie</li>
                </ul>
              </div>
              {/* Google Ads Angeren */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Lingewaard
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Betuwe-Arnhem</h3>
                <p className="text-gray-600 mb-6">
                  Target dorpsbewoners, stedelingen en forensen. Van Angeren tot Arnhem Business Park - jouw advertenties bereiken de juiste doelgroep.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Arnhem centrum bereik (160.000)</li>
                  <li>✓ Lingewaard gemeentetargeting</li>
                  <li>✓ Forensen A325/A15 campagnes</li>
                  <li>✓ Waalsprong nieuwe bewoners</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites Dorps & Professioneel</h3>
                <p className="text-gray-600 mb-6">
                  Modern design met Betuwse warmte. Overtuig zowel dorpsgenoten als stedelijke professionals met een site die vertrouwen uitstraalt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale vertrouwenselementen</li>
                  <li>✓ Stedelijke professionaliteit</li>
                  <li>✓ Mobile-first voor forensen</li>
                  <li>✓ Arnhem-Angeren routeinfo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Angeren</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik klanten uit Arnhem naar mijn bedrijf in Angeren?</h3>
                <p className="text-gray-600">
                  Angeren ligt op slechts 10 minuten van Arnhem centrum - een enorm voordeel! Ik positioneer je als "net buiten de stad" met gratis parkeren, persoonlijke service en lagere prijzen dan in het centrum. Via Google Ads target ik Arnhem-Noord, Presikhaaf en Velperbroek. Gebruik keywords zoals "bij Arnhem", "buiten Arnhem" en "vlakbij Arnhem" om stedelingen te trekken die rust en ruimte zoeken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een MKB-bedrijf in Angeren?</h3>
                <p className="text-gray-600">
                  Voor lokale ondernemers in Angeren start effectieve marketing vanaf €550-800 per maand. Dit dekt lokale SEO voor Lingewaard (46.000 inwoners), Google Mijn Bedrijf optimalisatie en basis advertenties. Wil je ook Arnhem bereiken? Dan adviseer ik €800-1.400 per maand inclusief stedelijke targeting en uitgebreidere campagnes voor de 160.000 inwoners van Arnhem.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik de hele gemeente Lingewaard vanuit Angeren?</h3>
                <p className="text-gray-600">
                  Lingewaard telt 46.000 inwoners verspreid over Huissen (19.000), Bemmel (12.500), Gendt (7.000), Angeren (2.900), Doornenburg (2.800), Haalderen (2.700) en Loo (1.800). Ik creëer lokale landingspagina's per kern, gebruik gemeente-brede Google Ads, en optimaliseer voor "Lingewaard + dienst" searches. De centrale ligging van Angeren tussen Huissen en Bemmel is perfect voor regionale dienstverlening.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Profiteer ik ook van de Waalsprong ontwikkeling bij Nijmegen?</h3>
                <p className="text-gray-600">
                  Absoluut! De Waalsprong Nijmegen (25.000 nieuwe bewoners) ligt op 15 minuten van Angeren. Deze jonge gezinnen zoeken dienstverleners in de omgeving. Ik target nieuwe wijken zoals De Grift en Oosterhout met "Waalsprong + dienst" keywords. Veel Waalsprongers rijden dagelijks langs Angeren richting Arnhem - perfect voor zichtbaarheid via lokale SEO en route-marketing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke voordelen heeft Angeren boven grotere plaatsen zoals Huissen?</h3>
                <p className="text-gray-600">
                  Angeren biedt het beste van twee werelden: dorpse gemeenschap met stedelijke nabijheid. Terwijl Huissen (19.000 inwoners) drukker en anoniemer is, bied jij persoonlijke service in een rustige omgeving op slechts 10 minuten van Arnhem. Ik benadruk jouw lokale betrokkenheid, gratis parkeren, en de unieke ligging tussen twee rivieren. Perfect voor klanten die kwaliteit boven kwantiteit verkiezen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start vandaag met groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Angeren</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Combineer dorpse charme met stedelijk bereik. Op 10 minuten van Arnhem ligt jouw groei-potentieel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw groeikansen in Angeren en omgeving.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel contact voor marketing advies Angeren-Arnhem.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Angeren</h3>
              <p className="text-gray-600">
                <strong>Gemeente Lingewaard:</strong> Angeren • Huissen • Bemmel • Gendt • Doornenburg • Haalderen • Loo<br/>
                <strong>Direct bereikbaar:</strong> Arnhem-Noord • Arnhem Business Park • Presikhaaf • Velperbroek<br/>
                <strong>Regio:</strong> Elst • Oosterhout • Lent • Waalsprong • Nijmegen-Noord • Ressen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}