'use client'

import { useState, useRef, useEffect } from 'react'

const ProcessSlider = ({ 
  title, 
  subtitle, 
  steps,
  bgColor = 'bg-[#F5F5F5]',
  titleHighlight = 'bg-[#1795FF] text-white'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length)
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
        const gap = 24
        slider.scrollTo({
          left: currentIndex * (cardWidth + gap),
          behavior: 'smooth'
        })
      }
    }
  }, [currentIndex])

  // Get color for step number badge
  const getStepColor = (index) => {
    return index % 2 === 0 ? 'bg-[#1795FF] text-white' : 'bg-[#FFE500] text-black'
  }

  return (
    <section className={`py-16 md:py-24 px-6 ${bgColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          {title.includes('<highlight>') ? (
            <>
              {title.split('<highlight>')[0]}
              <span className={`${titleHighlight} px-2 rounded`}>
                {title.split('<highlight>')[1].split('</highlight>')[0]}
              </span>
              {title.split('</highlight>')[1]}
            </>
          ) : (
            title
          )}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

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
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] snap-start"
                >
                  <div className="bg-white border-2 border-black rounded-xl p-8 h-full shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] transition-shadow">
                    <div className={`w-12 h-12 ${getStepColor(index)} rounded-full flex items-center justify-center font-bold text-xl mb-4 border-2 border-black`}>
                      {step.number || index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    {step.showNext && index < steps.length - 1 && (
                      <div className="text-[#1795FF] font-semibold">→ Volgende stap</div>
                    )}
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
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#1795FF] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ga naar stap ${index + 1}`}
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

export default ProcessSlider
