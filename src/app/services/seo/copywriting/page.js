import ServicePageTemplate from '../../../../components/templates/ServicePageTemplate'
import SEOReviewSlider from '../../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../../components/SEOConsultSection'
import ProcessSlider from '../../../../components/ProcessSlider'
import Link from 'next/link'

export const metadata = {
  title: 'Copywriting Uitbesteden | Professionele SEO-teksten | Niblah',
  description: 'Copywriting uitbesteden aan ervaren specialisten. Verhoog je conversie met SEO-geoptimaliseerde webteksten die overtuigen en verkopen. Meer websitebezoekers en omzet!',
}

export default function CopywritingPage() {
  const heroData = {
    badge: 'Professionele copy die overtuigt én verkoopt',
    title: 'Copywriting uitbesteden',
    description: 'Wil jij hoger ranken in Google én je bezoekers vakkundig verleiden tot conversie? Dat lukt alleen met professionele copy. Besteed je copywriting uit en profiteer van meer websitebezoekers, hogere conversies en meetbare omzetgroei!',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* 90% van bedrijven laat groeikansen liggen met hun teksten',
    image: '/development-hero.png',
    imageAlt: 'Professional copywriting services dashboard'
  }

  const copywritingProcess = [
    {
      number: '01',
      title: 'Kennismaking en strategische briefing',
      description: 'We starten met een grondige intake om jouw projectdoelen helder te krijgen. Of je nu copywriting uitbesteden wilt voor een specifiek project of structureel elke maand teksten laat schrijven door een copywriter - we luisteren naar je ambities en vertalen deze naar een concrete contentstrategie die conversie en groei stimuleert.',
      showNext: true
    },
    {
      number: '02',
      title: 'Analyse van merkidentiteit en doelgroep',
      description: 'Onze copywriter duikt diep in jouw merkwereld: welke schrijfstijl past bij je merk, wie zijn je ideale klanten en wat drijft hen? We analyseren je branche, concurrentie en doelgroep om teksten te creëren die precies resoneren. Nog geen duidelijke tone of voice? We helpen je deze te ontwikkelen op basis van jouw unieke waarden.',
      showNext: true
    },
    {
      number: '03',
      title: 'Conceptfase en eerste draft',
      description: 'Nu begint het echte schrijfwerk! Onze copywriter verdiept zich in je onderwerp, bestudeert je doelgroep en craft wervende teksten die conversie stimuleren. Elke zin is geschreven met focus op zowel SEO-optimalisatie als overtuigingskracht. Je ontvangt een professionele eerste versie ter beoordeling.',
      showNext: true
    },
    {
      number: '04',
      title: 'Revisie op basis van jouw input',
      description: 'Jouw feedback is waardevol. We verwerken al je opmerkingen en wensen in een tweede ronde, waarbij de copywriter de teksten verfijnt en optimaliseert. Zo garanderen we dat het eindresultaat perfect aansluit bij jouw verwachtingen en doelstellingen.',
      showNext: true
    },
    {
      number: '05',
      title: 'Publicatie en doorlopende samenwerking',
      description: 'Bij goedkeuring kunnen de teksten live! Voor structurele copywritingprojecten bouwen we een efficiënte workflow op, waarbij we vanaf stap 3 maandelijks nieuwe content leveren. Zo groeit je website consistent met hoogwaardige teksten die ranken en converteren.',
      showNext: false
    }
  ]

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom copywriting uitbesteden - hoofdtekst */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">copywriting uitbesteden</span> slim is voor jouw bedrijf
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Hoeveel uren besteed jij aan het schrijven van teksten die uiteindelijk weinig opleveren? Teksten schrijven is één ding, maar copy creëren die daadwerkelijk conversie genereert is een specialisme. Als ondernemer wil je resultaat: meer websitebezoekers, hogere conversies en tastbare omzetgroei.
            </p>
            <p>
              Professionele copywriting combineert marketingstrategie, consumentenpsychologie en SEO-expertise. Een goede copywriter analyseert je doelgroep grondig, identificeert hun pijnpunten en schrijft teksten die overtuigen op het juiste moment. Daarnaast zorgt strategische inzet van zoekwoorden ervoor dat je vindbaar bent in Google.
            </p>
            <p className="font-semibold">
              Bedrijven die hun copywriting uitbesteden aan professionals zien concrete voordelen:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Teksten die converteren: ervaren copywriters kennen de psychologische triggers die websitebezoekers tot actie aanzetten</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Content die resoneert met je doelgroep: door diepgaand onderzoek ontstaan teksten die écht aansluiten bij behoeftes en vragen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Focus op je kernactiviteiten: terwijl professionals jouw content verzorgen, kun jij doen waar je goed in bent</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Waarom Niblah voor copywriting */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">copywriting uitbesteden</span> aan Niblah?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Bij Niblah krijg je meer dan alleen mooie teksten. Onze copywriters denken strategisch mee en focussen op wat echt telt: resultaat.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Resultaatgerichte aanpak */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                💹
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resultaatgerichte aanpak</h3>
              <p className="text-gray-600 mb-4">
                Bij ons draait alles om meetbare resultaten. Onze copywriters schrijven met één doel voor ogen: jouw conversiedoelstellingen behalen. Of het nu gaat om meer aanvragen, aankopen of inschrijvingen - elk woord is geschreven om websitebezoekers tot actie te bewegen en omzet te genereren.
              </p>
            </div>

            {/* Doelgroep expertise */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Doelgroep expertise</h3>
              <p className="text-gray-600 mb-4">
                We starten elk project met grondig doelgroeponderzoek. Wat beweegt jouw ideale klant? Welke vragen hebben ze? Waar liggen de obstakels? Door deze inzichten te vertalen naar overtuigende copy ontstaan teksten die resoneren, vertrouwen opbouwen en leads genereren.
              </p>
            </div>

            {/* Geïntegreerde marketingaanpak */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Geïntegreerde marketingaanpak</h3>
              <p className="text-gray-600 mb-4">
                Onze copywriters werken niet geïsoleerd. Ze maken deel uit van een multidisciplinair team met SEO-, SEA- en CRO-expertise. Hierdoor ontstaan teksten die perfect geoptimaliseerd zijn voor zoekmachines én conversie - een combinatie die maximale ROI oplevert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is copywriting */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Wat is <span className="bg-[#FFE500] px-2 rounded">copywriting</span> precies?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-4">
              Copywriting is het vakgebied dat zich richt op het creëren van overtuigende, commerciële teksten met als ultieme doel conversie te genereren. Het verschil met standaard contentcreatie? Een copywriter schrijft strategisch, met inzicht in marketingprincipes en consumentengedrag.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Effectieve copy vereist diepgaand begrip van je ideale klant: wat zijn hun uitdagingen, welke oplossing zoeken ze en welke bezwaren moeten worden overwonnen? Door deze kennis te combineren met overtuigingstechnieken en storytelling ontstaan teksten die leiden tot meer websitebezoekers, hogere conversies en omzetgroei.
            </p>
            <p className="text-gray-700 text-lg">
              Onze copywriting specialisten beheersen diverse disciplines: van SEO-geoptimaliseerde content die zorgt voor betere organische rankings, tot wervende landingspagina's, e-mailcampagnes, vacatureteksten en whitepapers. Elke tekstsoort met één gemeenschappelijk doel: jouw bedrijfsdoelstellingen realiseren.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Deze klanten <span className="bg-[#1795FF] text-white px-2 rounded">gingen je voor</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Echte resultaten van bedrijven die hun copywriting uitbesteden
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl">
                  VN
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">VitaNova Health</h3>
                  <p className="text-sm text-gray-600">Copywriting | SEO</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Complete website content herschreven met focus op conversie
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">215%</div>
                  <div className="text-sm text-gray-600">meer organisch verkeer</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">3.8x</div>
                  <div className="text-sm text-gray-600">hogere conversieratio</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">142%</div>
                  <div className="text-sm text-gray-600">meer aanvragen</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center font-bold text-white text-2xl">
                  BT
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">BeautyTrend</h3>
                  <p className="text-sm text-gray-600">Copywriting | Content | Social</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Maandelijkse content productie voor blog en social media
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">87%</div>
                  <div className="text-sm text-gray-600">hogere engagement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">4.2x</div>
                  <div className="text-sm text-gray-600">meer leadgeneratie</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">168%</div>
                  <div className="text-sm text-gray-600">ROI op content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat levert copywriting uitbesteden op */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Copywriting uitbesteden: <span className="bg-[#FFE500] px-2 rounded">dit is wat het je oplevert</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Waarom investeren succesvolle bedrijven in professionele copywriting? Simpel: omdat teksten die converteren een directe impact hebben op je bottom line. Dit zijn de concrete voordelen die onze klanten ervaren:
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-[#F5F5F5] border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000]">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-bold">Meetbare conversie-impact.</span> Professionele copywriters combineren psychologische triggers met SEO-expertise, resulterend in teksten die zowel hoger ranken als websitebezoekers effectief overtuigen tot actie.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-[#F5F5F5] border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000]">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-bold">Strategische doelgroep targeting.</span> Door diepgaand onderzoek naar behoeften, pijnpunten en koopgedrag ontstaat copy die precies resoneert met je ideale klant - resulterend in hogere betrokkenheid en sterkere klantrelaties.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-[#F5F5F5] border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000]">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-bold">Vrijgemaakte capaciteit voor groei.</span> Door copywriting uit te besteden focus jij op strategische zaken en kernactiviteiten waar jouw expertise het meeste waarde toevoegt, terwijl content professionals zorgen voor overtuigende teksten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De werkwijze - Process Slider */}
      <ProcessSlider 
        title="De werkwijze van een <highlight>copywriter</highlight>"
        subtitle="Hoe schrijven wij teksten? Een copywriter schrijft met als doel iets te verkopen. Maar dat schrijfwerk is slechts de output. Zo gaan onze copywriters te werk:"
        steps={copywritingProcess}
        bgColor="bg-[#F5F5F5]"
        titleHighlight="bg-[#1795FF] text-white"
      />

      {/* Reviews sectie */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Dit is wat <span className="bg-[#FFE500] px-2 rounded">onze klanten zeggen</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            De waarde van de relatie zegt ons zo veel meer dan de waarde van de transactie.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "De teksten die Niblah voor ons schrijft zorgen eindelijk voor conversie. Hun copywriter begrijpt precies wat onze doelgroep wil horen. Resultaat: meer aanvragen en hogere omzet!"
              </p>
              <p className="font-bold text-gray-900">Sophie Janssen</p>
            </div>

            {/* Review 2 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Copywriting uitbesteden was de beste beslissing voor ons bedrijf. De professionele webteksten zorgen voor betere rankings én hogere conversies. Top samenwerking!"
              </p>
              <p className="font-bold text-gray-900">Marco van der Berg</p>
            </div>

            {/* Review 3 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Eindelijk teksten die niet alleen mooi klinken, maar ook echt verkopen. De copywriter van Niblah heeft onze hele website getransformeerd. Aanrader!"
              </p>
              <p className="font-bold text-gray-900">Lisa Vermeulen</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-6 py-3 shadow-[4px_4px_0_0_#000]">
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-gray-900">Wij krijgen een 4.9 op Google uit 143 beoordelingen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wat doet een copywriter - Types teksten */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Wat doet een copywriter bij Niblah: <span className="bg-[#FFE500] px-2 rounded">de teksten die je laat schrijven</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Van SEO-teksten tot vacatureteksten: onze copywriters leveren alle soorten teksten die je nodig hebt voor online succes.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SEO-teksten */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl">
                  🔍
                </div>
                <h3 className="text-xl font-bold text-gray-900">SEO-teksten</h3>
              </div>
              <p className="text-gray-700">
                SEO-geoptimaliseerde content is essentieel voor organische groei. Of je nu blogartikelen, productbeschrijvingen of landingspagina's nodig hebt - onze copywriters creëren teksten die zowel Google als je doelgroep aanspreken. Door strategisch zoekwoordonderzoek te combineren met overtuigende copy ontstaan SEO-teksten die je website hoger laten ranken voor relevante zoektermen en tegelijkertijd websitebezoekers converteren naar klanten.
              </p>
            </div>

            {/* Wervende webteksten */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl">
                  ✍️
                </div>
                <h3 className="text-xl font-bold text-gray-900">Wervende webteksten</h3>
              </div>
              <p className="text-gray-700">
                Traffic genereren is stap één, conversie realiseren is waar het écht om draait. Onze copywriters creëren wervende webteksten die bezoekers verleiden tot actie. Van homepage copy die direct impact maakt tot about-pagina's die vertrouwen opbouwen en servicepagina's die overtuigen - elke tekst is geschreven met conversie als prioriteit. Het resultaat: hogere betrokkenheid, meer aanvragen en tastbare omzetgroei.
              </p>
            </div>

            {/* Vacatureteksten */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl">
                  👥
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vacatureteksten</h3>
              </div>
              <p className="text-gray-700">
                Top talent aantrekken begint bij overtuigende vacatureteksten. Een professionele copywriter weet precies welke toon en structuur werkt voor verschillende doelgroepen. We schrijven vacatures die niet alleen informeren maar ook inspireren, je employer brand versterken en gekwalificeerde kandidaten verleiden om te solliciteren. Het resultaat: meer relevante sollicitaties en sneller de juiste mensen aan boord.
              </p>
            </div>

            {/* E-mailteksten */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl">
                  📧
                </div>
                <h3 className="text-xl font-bold text-gray-900">E-mailteksten</h3>
              </div>
              <p className="text-gray-700">
                E-mailmarketing blijft één van de meest effectieve kanalen voor conversie. Onze copywriters schrijven e-mailteksten die openen, geklikt worden en conversie genereren. Van geautomatiseerde flows tot nieuwsbrieven en productlaunches - elke mail is geoptimaliseerd voor maximale impact. Door data-gedreven inzichten te combineren met psychologische triggers bereiken we consistent hogere open- en klikpercentages.
              </p>
            </div>

            {/* Whitepapers */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl">
                  📄
                </div>
                <h3 className="text-xl font-bold text-gray-900">Whitepapers</h3>
              </div>
              <p className="text-gray-700">
                Kwalitatieve leads genereren vereist waardevol content. Whitepapers zijn dé manier om expertise te tonen én contactgegevens te verzamelen. Onze copywriters ontwikkelen diepgaande, datagedreven documenten die je positie als thought leader versterken. Van research tot eindredactie - we creëren whitepapers die prospects overtuigen van jouw expertise en downloaders converteren naar gekwalificeerde leads voor je sales team.
              </p>
            </div>

            {/* Advertentieteksten */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl">
                  📢
                </div>
                <h3 className="text-xl font-bold text-gray-900">Advertentieteksten (SEA en social ads)</h3>
              </div>
              <p className="text-gray-700">
                Betaalde campagnes verdienen copy die converteert. Onze copywriters schrijven advertentieteksten voor Google Ads, Facebook, Instagram en LinkedIn die clicks genereren en conversies opleveren. Door A/B-testen en conversie-optimalisatie verfijnen we continu je ad copy voor maximale ROI. Terwijl jouw advertentie-specialist de technische kant beheert, zorgen wij voor pakkende headlines en beschrijvingen die uitnodigen tot actie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe worden SEO-teksten geschreven */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hoe worden goede <span className="bg-[#1795FF] text-white px-2 rounded">SEO-teksten geschreven?</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            SEO-content vereist een unieke aanpak waarbij technische optimalisatie en overtuigende copy samenkomen. Waar tone of voice en doelgroepkennis fundamenteel blijven, speelt strategische zoekwoordintegratie een cruciale rol. Ons gestructureerde proces voor SEO-geoptimaliseerde teksten:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <p className="text-gray-700 pt-1">
                Content strategieanalyse: onze SEO-specialist identificeert welke content jouw organische posities het meest versterkt, afgestemd op je overkoepelende SEO-roadmap en groeistrategie.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <p className="text-gray-700 pt-1">
                Diepgaand keyword research: via data-analyse ontdekken we zoektermen met optimaal zoekvolume, haalbare concurrentie en sterke conversie-intentie voor jouw niche.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <p className="text-gray-700 pt-1">
                Strategisch copywriting: onze copywriter integreert zoekwoorden natuurlijk in overtuigende teksten, geoptimaliseerd voor zowel algoritmes als leesbaarheid en conversie.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <p className="text-gray-700 pt-1">
                Review en refinement: jouw feedback wordt verwerkt om de content perfect af te stemmen op merkidentiteit en business objectives.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                5
              </div>
              <p className="text-gray-700 pt-1">
                Publicatie en tracking: na finale goedkeuring gaat de content live, waarna we performance monitoren en continu optimaliseren voor maximale impact.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold text-white text-base px-8 py-4 rounded-full bg-[#1795FF] hover:bg-[#0f7dd4] transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Vraag een groeiscan aan
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde <span className="bg-[#FFE500] px-2 rounded">vragen</span>
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Zijn jullie een copywriting bureau?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Wij zijn een full-service marketing bureau met copywriting als kernspecialisatie. Ons team bestaat uit professionele copywriters, SEO-experts, advertentiespecialisten en conversie-optimalisatie consultants. Deze multidisciplinaire aanpak stelt ons in staat complete contentstrategieën te ontwikkelen waarbij alle elementen naadloos op elkaar aansluiten voor maximale business impact.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat is het tarief van jullie copywriters?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Onze tarieven variëren afhankelijk van projectomvang, tekstcomplexiteit en samenwerkingsduur. Eenmalige projecten hebben een andere prijsstructuur dan continue content partnerships waarbij je maandelijks copywriting uitbesteedt. Tijdens een vrijblijvend kennismakingsgesprek analyseren we jouw behoeften en presenteren we een transparante, maatwerk offerte.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat levert copywriting uitbesteden op?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Investeren in professionele copy genereert directe business resultaten: verbeterde organische zichtbaarheid door SEO-geoptimaliseerde teksten, significant meer gekwalificeerd verkeer naar je website, verhoogde conversieratio's door overtuigende content en uiteindelijk substantiële omzetgroei. Daarnaast win je waardevolle tijd die je kunt investeren in strategische business ontwikkeling.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom zou ik copywriting uitbesteden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Effectieve copywriters beheersen de kunst van strategische communicatie: ze begrijpen consumentenpsychologie, kennen persuasie-technieken en weten hoe je messaging moet structureren voor verschillende doelgroepen. Daarnaast hebben ze expertise in technische SEO-optimalisatie en algoritme-requirements. Deze specialistische kennis ontwikkelen kost jaren - door uit te besteden krijg je direct toegang tot deze expertise.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom zou ik copywriting uitbesteden aan de copywriters van Niblah?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Onze unieke kracht ligt in geïntegreerde samenwerking: je werkt met een dedicated copywriter die direct toegang heeft tot SEO-strategen, advertentie-experts en data-analisten. Deze cross-functionele aanpak resulteert in content die niet geïsoleerd functioneert, maar onderdeel vormt van een holistische marketingstrategie. Het resultaat: exponentieel sterkere business resultaten dan standalone copywriting.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Kan ik mijn teksten ook laten schrijven door ChatGPT?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                AI-tools zoals ChatGPT bieden basisondersteuning, maar missen kritieke elementen voor commercieel succesvolle content: strategisch business inzicht, genuanceeerd begrip van doelgroep psychografie, en het vermogen om merkidentiteit authentiek te vertalen naar copy. Onze copywriters integreren AI waar nuttig, maar voegen de essentiële laag toe van strategisch denken, creatieve differentiatie en conversie-geoptimaliseerde structuur die machines (nog) niet kunnen leveren.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Gratis Groeiscan */}
      <SEOConsultSection />
    </ServicePageTemplate>
  )
}
