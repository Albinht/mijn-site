import Image from 'next/image'
import Button from '../../components/Button'
import ReviewSlider from '../../components/ReviewSlider'
import avatarImage from '../../assets/avatar.png'
import graphImage from '../../assets/graph.png'
import { getServerLocale } from '@/lib/locale'
import { getWorkWithMeCopy } from '@/i18n/work-with-me'

export default async function WorkWithMe() {
  const locale = await getServerLocale()
  const copy = getWorkWithMeCopy(locale)

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT SECTION */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {copy.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              {copy.hero.title.prefix}{' '}
              <span className="bg-[#F7D8FA] px-2 rounded italic">{copy.hero.title.highlight}</span>
              {copy.hero.title.suffix ? ` ${copy.hero.title.suffix}` : ''}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {copy.hero.description}
            </p>
            <div className="space-y-4 mb-8">
              {copy.hero.bullets.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button as="a" href="#calendly-section">
                {copy.hero.cta}
              </Button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt={copy.images.graphAlt}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={avatarImage}
                alt={copy.images.avatarAlt}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
              {copy.services.title.prefix}{' '}
              <span className="bg-[#F7D8FA] px-2 rounded italic">{copy.services.title.highlight}</span>
              {copy.services.title.suffix ? ` ${copy.services.title.suffix}` : ''}
            </h2>
            <p className="text-xl text-gray-600">{copy.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {copy.services.cards.map((card) => (
              <div
                key={card.title}
                className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow${card.badge ? ' border-2' : ''}`}
                style={card.badge ? { borderColor: '#8C2891' } : undefined}
              >
                {card.badge && (
                  <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {card.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{card.price}</span>
                  {card.priceSuffix ? <span className="text-gray-600 ml-1">{card.priceSuffix}</span> : null}
                </div>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  {card.bullets.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <ReviewSlider
        customReviews={copy.reviewSlider.reviews}
        customMoreReviews={copy.reviewSlider.moreReviews}
        title={copy.reviewSlider.title}
      />

      {/* CTA SECTION */}
      <section id="calendly-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {copy.cta.title.prefix}{' '}
            <span className="bg-[#F7D8FA] px-2 rounded italic">{copy.cta.title.highlight}</span>
            {copy.cta.title.suffix ? ` ${copy.cta.title.suffix}` : ''}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {copy.cta.description}
          </p>
          
          {/* Calendly Embed */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <iframe
              src="https://calendly.com/niblah/30min"
              width="100%"
              height="600"
              frameBorder="0"
              title={copy.cta.iframeTitle}
            ></iframe>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-gray-600">{copy.cta.urgentLabel}</p>
            <a 
              href="https://wa.me/31648728828" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:text-green-700 flex items-center gap-2"
            >
              <span>📱</span> {copy.cta.whatsappLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
