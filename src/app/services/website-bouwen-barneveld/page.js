import Link from 'next/link'
import Image from 'next/image'
import Button from '../../../components/Button'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'

export const metadata = {
  title: 'Website Laten Maken Barneveld | WordPress & Shopify Specialist | Niblah',
  description: 'Professionele website laten maken in Barneveld? ✓ WordPress websites ✓ Shopify webshops ✓ Op maat gemaakt ✓ Lokale service. Bel 06 48728828 voor gratis adviesgesprek!',
  keywords: 'website laten maken barneveld, webdesign barneveld, wordpress website barneveld, shopify webshop barneveld, website bouwen barneveld, webbureau barneveld',
  openGraph: {
    title: 'Website Laten Maken in Barneveld - WordPress & Shopify Specialist',
    description: 'Professionele websites en webshops die écht resultaat opleveren. WordPress, Shopify en maatwerk voor bedrijven in Barneveld en omgeving.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function WebsiteBouwenBarneveld() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO HEADER */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Website Laten Maken in Barneveld
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                Professionele websites en webshops die écht resultaat opleveren voor jouw bedrijf.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Van concept tot lancering: WordPress websites, Shopify webshops en complete online marketing voor bedrijven in Barneveld en omgeving.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">WordPress & Shopify specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Lokale service in Barneveld en regio</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Websites die converteren naar klanten</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button as="a" href="tel:+31648728828">
                  Bel Direct: 06 48728828 <span>→</span>
                </Button>
                <Button as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer" variant="secondary">
                  WhatsApp
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Gratis adviesgesprek • Geen verplichtingen
              </p>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <Image 
                    src={graphImage} 
                    alt="Website resultaten Barneveld" 
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image 
                    src={avatarImage} 
                    alt="Website specialist Barneveld" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="mt-12">
                <p className="text-gray-700 text-sm mb-4">
                  "Professionele website opgeleverd voor ons bedrijf in Barneveld. Precies wat we nodig hadden!"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://pbs.twimg.com/profile_images/1694966386957938688/PtayrF_x_400x400.jpg" 
                    alt="Klant foto" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-bold text-sm text-gray-900">Jan de Vries</p>
                      <p className="text-xs text-gray-600">Lokaal bedrijf in Barneveld</p>
                    </div>
                    <img 
                      src="https://gemarts.nl/wp-content/uploads/2024/11/trustpilot-rating.svg" 
                      alt="5 sterren" 
                      className="h-3 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-4xl mx-auto px-6 py-16">

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 mt-8">Welkom bij Niblah – Website Laten Maken in Barneveld</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Ben je op zoek naar een betrouwbaar webbureau voor het laten maken van je website in Barneveld? Bij Niblah krijg je professionele websites die resultaten opleveren. Met onze expertise in webdesign en ontwikkeling zorgen we ervoor dat jouw website niet alleen er goed uitziet, maar ook functioneel en gebruiksvriendelijk is.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Bij Niblah begeleiden we je door het hele proces - van de eerste schets tot de lancering van je website. We staan voor je klaar om jouw digitale aanwezigheid te versterken met een website die indruk maakt en meetbare resultaten oplevert voor je bedrijf in Barneveld.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Versterk Je Bedrijf in Barneveld met een Professionele Website</h2>

          <p>
            Een sterke website vergroot je online zichtbaarheid aanzienlijk. Door professioneel online aanwezig te zijn, kunnen potentiële klanten je gemakkelijk vinden en direct contact met je opnemen. Je website fungeert als een belangrijk platform waar je jouw merkidentiteit kunt uitdragen, je verhaal kunt delen en je producten of diensten kunt presenteren.
          </p>

          <p>
            Met de juiste optimalisatietechnieken wordt je website een krachtig instrument om hoger te ranken in zoekresultaten. Dit leidt tot meer bezoekers op je site en uiteindelijk tot meer opdrachten en omzet voor je bedrijf in Barneveld en omgeving.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Waarom Heb Je een Goede Website Nodig?</h3>

          <p>
            Een website is tegenwoordig essentieel voor elk bedrijf, ongeacht de omvang of sector. Je website is het digitale visitekaartje van je merk, waar je volledige controle hebt over hoe je informatie presenteert en communiceert met je doelgroep.
          </p>

          <ul>
            <li>Vergroot je zichtbaarheid en bereik in Barneveld</li>
            <li>Trek nieuwe klanten aan uit de regio</li>
            <li>Verhoog je omzet en winst</li>
            <li>24/7 toegankelijk voor potentiële klanten</li>
            <li>Toon professionaliteit en geloofwaardigheid van jouw bedrijf</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">De Beste Website voor Jouw Bedrijf in Barneveld</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">WordPress Websites</h3>
          <p>
            Ons team is gespecialiseerd in het bouwen van WordPress websites die visueel aantrekkelijk zijn én geoptimaliseerd voor zoekmachines. Ervaar de flexibiliteit en kracht van WordPress als contentmanagementsysteem. Wil je ook snel een mooie WordPress website die makkelijk te beheren is? <Link href="/marketing/barneveld" className="text-[#8C2891] underline">Bekijk ook onze marketing diensten</Link> voor complete ondersteuning.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Shopify Webshops</h3>
          <p>
            Laat je bedrijf online groeien met een professionele Shopify webshop. Wij zijn experts in het bouwen van Shopify websites met focus op conversies en een optimale klantbeleving. Onze Shopify webshops bieden een stabiel platform dat eenvoudig te beheren is, veilig is en vol zit met functies om jouw online verkoop te stimuleren.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Website op Maat</h3>
          <p>
            Wij zijn gespecialiseerd in het creëren van websites op maat die jouw merk niet alleen onderscheiden, maar ook resultaten opleveren. Ons team combineert creativiteit met technische precisie om een website te bouwen die precies past bij jouw unieke bedrijfsbehoeften in Barneveld.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Webshop Laten Maken</h3>
          <p>
            Wij begrijpen de unieke uitdagingen van e-commerce en zetten ons in om een webshop te bouwen die naadloos aansluit bij jouw merk en de behoeften van je klanten. Onze experts bouwen gebruiksvriendelijke, SEO-geoptimaliseerde webshops, waardoor je jouw producten in de spotlight kunt zetten en gemakkelijk je online verkopen kunt verhogen.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Waarom Kiezen voor Niblah als Je Webbureau?</h2>

          <p>
            Een website is niet langer optioneel voor bedrijven die willen groeien - het is essentieel. Bij Niblah begrijpen we dat een sterke online aanwezigheid het verschil kan maken tussen stilstaan en groeien. Daarom bieden wij niet zomaar webdesign; wij leveren een compleet digitaal ecosysteem speciaal ontworpen voor jouw behoeften.
          </p>

          <ul>
            <li><strong>Expertise:</strong> Ons team heeft bewezen resultaten geleverd voor diverse klanten in Barneveld</li>
            <li><strong>Maatwerk:</strong> We ontwikkelen strategieën afgestemd op jouw specifieke behoeften en doelen</li>
            <li><strong>Transparantie:</strong> We geloven in open communicatie bij elke stap van het proces</li>
            <li><strong>Resultaatgericht:</strong> Ons doel is meetbare resultaten die bijdragen aan jouw groei</li>
          </ul>

          <p>
            Dat klinkt goed, toch? Zodra we samen aan de slag gaan, ben je verzekerd van een samenwerking met een betrouwbare partner die je begeleidt en ondersteunt. <Link href="/marketing/barneveld" className="text-[#8C2891] underline">Combineer je website met onze marketing diensten</Link> voor maximaal resultaat in Barneveld en omgeving.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Veelgestelde Vragen over Website Laten Maken in Barneveld</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6">Wat kost het om een website te laten maken in Barneveld?</h3>
          <p>
            De kosten voor een website variëren per project. Elk bedrijf heeft andere wensen en doelen. Tijdens een vrijblijvend gesprek bespreken we jouw situatie en geven we een realistische inschatting van de investering.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">Hoe lang duurt het om een website te ontwikkelen?</h3>
          <p>
            Een gemiddelde website is binnen 4-8 weken gereed. Voor een eenvoudige WordPress website rekenen we op 4-6 weken, terwijl een uitgebreide Shopify webshop 6-8 weken in beslag kan nemen.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">Kan ik mijn website zelf bijwerken na oplevering?</h3>
          <p>
            Ja, zeker. We ontwikkelen websites in WordPress en Shopify die je volledig zelf kunt beheren. Na oplevering krijg je training en documentatie zodat je zelfstandig content kunt aanpassen.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">Bieden jullie ook onderhoud voor mijn website?</h3>
          <p>
            Ja, we bieden complete onderhoudscontracten voor websites. Dit omvat updates, backups, beveiliging en technische support. Zo blijft je website altijd up-to-date en veilig.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">Helpen jullie ook met online marketing?</h3>
          <p>
            Absoluut. Naast websiteontwikkeling bieden we complete <Link href="/marketing/barneveld" className="text-[#8C2891] underline">online marketing diensten in Barneveld</Link>, zoals lokale SEO en Google Ads campagnes om meer klanten te bereiken.
          </p>
        </div>

        <footer className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vraag naar de Mogelijkheden</h2>
          <p className="text-gray-600 mb-6">Klaar om jouw website te laten maken? Neem vrijblijvend contact op.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button as="a" href="tel:+31648728828">
              Bel: +31 6 48728828 <span>→</span>
            </Button>
            <Button as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer" variant="secondary">
              WhatsApp
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">Actief in Barneveld, Voorthuizen, Nijkerk, Putten en omgeving</p>
        </footer>
      </article>
    </main>
  )
}
