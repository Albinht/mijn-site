'use client'

import { useState, useRef, useEffect } from 'react'

const SEOBenefitsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const benefits = [
    {
      number: 1,
      title: 'Regelmatig strategisch overleg',
      description: 'Bij Niblah doen we meer dan alleen uitvoeren - we denken actief mee als strategische partner. Naast maandelijkse updates plannen we elk kwartaal een diepgaand overleg waarin we samen jouw SEO-strategie, behaalde resultaten en toekomstige doelstellingen grondig bespreken.'
    },
    {
      number: 2,
      title: 'Bewezen reverse funnel strategie',
      description: 'In plaats van de traditionele customer journey gebruiken we een omgekeerde aanpak bij onze SEO-campagnes. Deze reverse funnel methodiek heeft zich keer op keer bewezen als effectiever voor langdurige resultaten in zoekmachineoptimalisatie.'
    },
    {
      number: 3,
      title: 'Complete openheid over resultaten',
      description: 'Geen vaag gepraat of onduidelijke rapporten. Bij Niblah werk je met volledige transparantie. Log in wanneer je wilt om je SEO-resultaten te bekijken en ontvang maandelijks gedetailleerde analyses die exact laten zien wat je investering oplevert en welke vooruitgang we boeken.'
    },
    {
      number: 4,
      title: 'Vrijblijvend en zonder verplichtingen',
      description: 'We richten ons op ondernemers die serieus willen groeien met SEO. Daarom werken we bij Niblah zonder langetermijncontracten. Mocht de samenwerking niet bevallen, dan kun je op elk moment stoppen zonder vervelende voorwaarden.'
    },
    {
      number: 5,
      title: 'Bewezen track record met tevreden opdrachtgevers',
      description: 'Onze aanpak spreekt voor zich. Met een gemiddelde beoordeling van 4,9 sterren op basis van 143+ reviews tonen we aan dat we niet alleen resultaten leveren, maar ook uitstekende service bieden aan onze SEO-klanten.'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  // Touch/Mouse events for mobile swipe
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    slider.addEventListener('mousedown', handleMouseDown)
    slider.addEventListener('mousemove', handleMouseMove)
    slider.addEventListener('mouseup', handleMouseUp)
    slider.addEventListener('mouseleave', handleMouseUp)
    slider.addEventListener('touchstart', handleTouchStart)
    slider.addEventListener('touchmove', handleTouchMove)
    slider.addEventListener('touchend', handleTouchEnd)

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      slider.removeEventListener('mousemove', handleMouseMove)
      slider.removeEventListener('mouseup', handleMouseUp)
      slider.removeEventListener('mouseleave', handleMouseUp)
      slider.removeEventListener('touchstart', handleTouchStart)
      slider.removeEventListener('touchmove', handleTouchMove)
      slider.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, startX, scrollLeft])

  // Scroll to current index
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current
      const cards = slider.children[0].children
      if (cards.length > 0) {
        const cardWidth = cards[0].offsetWidth
        const gap = 24 // gap between cards (6 * 4px = 24px on lg, 24px on md)
        slider.scrollTo({
          left: currentIndex * (cardWidth + gap),
          behavior: 'smooth'
        })
      }
    }
  }, [currentIndex])

  return (
    <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Waarom jouw zoekmachineoptimalisatie uitbesteden aan <span className="bg-[#FFE500] px-2 rounded">Niblah?</span>
        </h2>

        <div className="relative">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 bg-white border-2 border-black rounded-full items-center justify-center hover:bg-[#FFE500] transition-colors shadow-[4px_4px_0_0_#000]"
            aria-label="Vorige"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 bg-white border-2 border-black rounded-full items-center justify-center hover:bg-[#FFE500] transition-colors shadow-[4px_4px_0_0_#000]"
            aria-label="Volgende"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] snap-start"
                >
                  <div className="bg-white border-2 border-black rounded-xl p-8 h-full shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] transition-shadow">
                    <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                      {benefit.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-[#FFE500] transition-colors shadow-[4px_4px_0_0_#000]"
              aria-label="Vorige"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-[#FFE500] transition-colors shadow-[4px_4px_0_0_#000]"
              aria-label="Volgende"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#1795FF] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ga naar slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default SEOBenefitsSlider
