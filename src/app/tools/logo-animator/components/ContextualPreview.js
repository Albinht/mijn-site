'use client'

import { useState, useEffect, useRef } from 'react'
import { USE_CASE_TEMPLATES } from '../templates/use-cases'

// Main contextual preview component
export default function ContextualPreview({ 
  useCase, 
  animation, 
  logo, 
  settings,
  onPlay,
  onReset,
  onExport
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [previewMode, setPreviewMode] = useState('desktop')

  // Debug: log all received props
  useEffect(() => {
    console.log('ContextualPreview props:', { useCase, animation, logo, settings })
  }, [useCase, animation, logo, settings])

  // Auto-play animation when animation or logo changes
  useEffect(() => {
    if (animation && logo) {
      console.log('Auto-playing animation:', animation.id)
      setIsPlaying(true)
      onPlay?.()
    }
  }, [animation?.id, logo?.url])
  
  // Force trigger animation after component mount
  useEffect(() => {
    if (animation && logo) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        setIsPlaying(true)
      }, 300)
    }
  }, [])

  const useCaseTemplate = USE_CASE_TEMPLATES[useCase]
  if (!useCaseTemplate) {
    return <DefaultPreview animation={animation} logo={logo} settings={settings} />
  }

  const PreviewComponent = getPreviewComponent(useCaseTemplate.preview.context)

  return (
    <div className="contextual-preview bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Preview Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{useCaseTemplate.icon}</span>
            <div>
              <h3 className="font-semibold text-gray-900">{useCaseTemplate.name}</h3>
              <p className="text-sm text-gray-500">{useCaseTemplate.description}</p>
            </div>
          </div>
          
          {/* Preview Mode Toggle */}
          {useCaseTemplate.preview.mobilePreview && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`px-3 py-1 text-sm rounded ${
                  previewMode === 'desktop' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                🖥️ Desktop
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`px-3 py-1 text-sm rounded ${
                  previewMode === 'mobile' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                📱 Mobile
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Preview Content */}
      <div className="p-6" style={{ backgroundColor: useCaseTemplate.preview.background }}>
        <PreviewComponent
          logo={logo}
          animation={animation}
          settings={settings}
          template={useCaseTemplate}
          mode={previewMode}
          isPlaying={isPlaying}
          onPlay={() => {
            setIsPlaying(true)
            onPlay?.()
          }}
          onReset={() => {
            setIsPlaying(false)
            onReset?.()
          }}
        />
      </div>

      {/* Preview Controls */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                console.log('Manual play button clicked. Animation:', animation, 'Logo:', logo)
                setIsPlaying(true)
                onPlay?.()
              }}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>▶️</span>
              <span>Afspelen {animation ? `(${animation.id})` : '(fallback: fade-in)'}</span>
            </button>
            
            <button
              onClick={() => {
                setIsPlaying(false)
                onReset?.()
              }}
              className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span>🔄</span>
              <span>Reset</span>
            </button>
            
            {animation && (
              <button
                onClick={() => onExport?.()}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>📤</span>
                <span>Exporteer</span>
              </button>
            )}
          </div>
          
          <div className="text-sm text-gray-500">
            {useCaseTemplate.dimensions.width} × {useCaseTemplate.dimensions.height}px
            {settings.duration && ` • ${settings.duration}s`}
          </div>
        </div>
      </div>
    </div>
  )
}

// Email signature preview
function EmailSignaturePreview({ logo, animation, settings, template, isPlaying, onPlay, onReset }) {
  const logoRef = useRef(null)

  useEffect(() => {
    if (isPlaying && logoRef.current && animation) {
      playAnimation()
    }
  }, [isPlaying, animation])

  const playAnimation = () => {
    if (!logoRef.current || !animation) return

    // Reset animation
    logoRef.current.style.animation = 'none'
    logoRef.current.offsetHeight // Trigger reflow
    
    // Set initial opacity for animations that need it
    logoRef.current.style.opacity = '0'
    
    // Apply CSS variables for dynamic animation control
    logoRef.current.style.setProperty('--duration', `${settings.duration || 2}s`)
    logoRef.current.style.setProperty('--easing', settings.easing || 'ease-out')
    logoRef.current.style.setProperty('--delay', `${settings.delay || 0}s`)
    
    // Apply animation class
    setTimeout(() => {
      const animationClass = `animate-${animation.id}`
      logoRef.current.className = `w-full h-full object-contain ${animationClass}`
    }, 50)
  }

  return (
    <div className="max-w-md mx-auto">
      {/* Email client mockup */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm">
        {/* Email header */}
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 text-sm">
          <div className="font-medium">Van: johndoe@bedrijf.nl</div>
          <div className="text-gray-600">Onderwerp: Bedankt voor je interesse!</div>
        </div>
        
        {/* Email body */}
        <div className="p-4">
          <div className="mb-4 text-sm text-gray-700">
            Beste klant,
            <br /><br />
            Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.
            <br /><br />
            Met vriendelijke groet,
          </div>
          
          {/* Signature with animated logo */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-3">
              {logo && (
                <div className="flex-shrink-0" style={{ width: '60px', height: '40px' }}>
                  <img
                    ref={logoRef}
                    src={logo.url}
                    alt="Logo"
                    className="w-full h-full object-contain"
                    style={{ opacity: animation && !isPlaying ? 0 : 1 }}
                  />
                </div>
              )}
              <div className="text-sm">
                <div className="font-medium text-gray-900">John Doe</div>
                <div className="text-gray-600">Marketing Manager</div>
                <div className="text-gray-600">+31 6 12345678</div>
                <div className="text-blue-600">www.bedrijf.nl</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Social media feed preview
function SocialFeedPreview({ logo, animation, settings, template, mode, isPlaying, onPlay, onReset }) {
  const logoRef = useRef(null)

  useEffect(() => {
    if (isPlaying && logoRef.current && animation) {
      playAnimation()
    }
  }, [isPlaying, animation])

  const playAnimation = () => {
    if (!logoRef.current || !animation) return

    // Reset animation
    logoRef.current.style.animation = 'none'
    logoRef.current.offsetHeight
    
    // Set initial state
    logoRef.current.style.opacity = '0'
    
    // Apply CSS variables
    logoRef.current.style.setProperty('--duration', `${settings.duration || 3}s`)
    logoRef.current.style.setProperty('--easing', settings.easing || 'ease-in-out')
    logoRef.current.style.setProperty('--delay', `${settings.delay || 0}s`)
    logoRef.current.style.setProperty('--iteration', settings.loop ? 'infinite' : '1')
    
    // Apply animation class
    setTimeout(() => {
      const animationClass = `animate-${animation.id}`
      logoRef.current.className = `w-32 h-32 object-contain ${animationClass}`
    }, 50)
  }

  const containerClass = mode === 'mobile' 
    ? 'max-w-sm mx-auto' 
    : 'max-w-md mx-auto'

  return (
    <div className={containerClass}>
      {/* Social media post mockup */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Post header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div>
              <div className="font-medium text-sm">mijn_bedrijf</div>
              <div className="text-gray-500 text-xs">2 min geleden</div>
            </div>
          </div>
          <button className="text-gray-500">⋯</button>
        </div>
        
        {/* Post content with animated logo */}
        <div className="p-4">
          <div className="aspect-square bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg flex items-center justify-center mb-3">
            {logo && (
              <img
                ref={logoRef}
                src={logo.url}
                alt="Logo"
                className="w-32 h-32 object-contain"
              />
            )}
          </div>
          
          <div className="text-sm text-gray-700 mb-2">
            🚀 Nieuwe website gelanceerd! Wat vinden jullie van ons nieuwe logo? #branding #design
          </div>
        </div>
        
        {/* Post actions */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600">
              <span>❤️</span>
              <span className="text-sm">127</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600">
              <span>💬</span>
              <span className="text-sm">23</span>
            </button>
            <button className="text-gray-600">
              <span>📤</span>
            </button>
          </div>
          <button className="text-gray-600">
            <span>🔖</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Video timeline preview
function VideoTimelinePreview({ logo, animation, settings, template, isPlaying, onPlay, onReset }) {
  const logoRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    if (isPlaying && logoRef.current && animation) {
      playAnimation()
      
      // Simulate timeline progress
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= (settings.duration || 5)) {
            clearInterval(interval)
            return settings.duration || 5
          }
          return prev + 0.1
        })
      }, 100)
      
      return () => clearInterval(interval)
    } else {
      setCurrentTime(0)
    }
  }, [isPlaying, animation])

  const playAnimation = () => {
    if (!logoRef.current || !animation) return

    logoRef.current.style.animation = 'none'
    logoRef.current.offsetHeight
    
    const animationString = `${animation.id} ${settings.duration || 5}s ${settings.easing || 'cubic-bezier(0.25, 0.1, 0.25, 1)'} ${settings.delay || 0}s forwards`
    logoRef.current.style.animation = animationString
  }

  const duration = settings.duration || 5

  return (
    <div className="max-w-4xl mx-auto">
      {/* Video preview */}
      <div className="bg-black rounded-lg aspect-video flex items-center justify-center mb-4 relative overflow-hidden">
        {logo && (
          <img
            ref={logoRef}
            src={logo.url}
            alt="Logo"
            className="w-48 h-48 object-contain"
          />
        )}
        
        {/* Video overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
              {Math.floor(currentTime * 10) / 10}s / {duration}s
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex items-center space-x-4 mb-2">
          <span className="text-white text-sm font-medium">Video Timeline</span>
          <div className="flex-1 bg-gray-700 rounded-full h-2 relative">
            <div 
              className="bg-blue-500 h-full rounded-full transition-all duration-100"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <span className="text-gray-300 text-sm">{duration}s</span>
        </div>
        
        {/* Track */}
        <div className="bg-gray-700 rounded p-2 text-white text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Logo Intro Animation</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Website header preview
function WebsiteHeaderPreview({ logo, animation, settings, template, mode, isPlaying, onPlay, onReset }) {
  const logoRef = useRef(null)

  // Start animation when component mounts or animation changes
  useEffect(() => {
    if (logoRef.current && animation && logo) {
      console.log('Starting animation:', animation.id, 'for logo:', logo.name)
      playAnimation()
    }
  }, [animation, logo])

  // Also trigger on isPlaying change
  useEffect(() => {
    if (isPlaying && logoRef.current && animation) {
      playAnimation()
    }
  }, [isPlaying])

  const playAnimation = () => {
    if (!logoRef.current) {
      console.log('Cannot play animation - missing ref')
      return
    }

    // Fallback animation if none provided
    const animationToUse = animation || { id: 'fade-in', name: 'Fade In' }
    console.log('Using animation:', animationToUse)

    console.log('Playing animation:', animationToUse.id, 'with settings:', settings)

    const element = logoRef.current

    // Remove any existing animation classes
    element.className = 'w-full h-full object-contain'
    element.style.animation = 'none'
    element.style.opacity = '0'
    element.style.transform = ''
    
    // Force reflow
    element.offsetHeight

    // Set CSS variables
    element.style.setProperty('--duration', `${settings.duration || 2.5}s`)
    element.style.setProperty('--easing', settings.easing || 'ease-out')  
    element.style.setProperty('--delay', `${settings.delay || 0.3}s`)

    // Apply animation class immediately
    const animationClass = `animate-${animationToUse.id}`
    element.classList.add(animationClass)
    
    // HARDCODED TEST: Force fade-in animation
    element.style.animation = 'fadeIn 2s ease-out forwards'
    
    console.log('Applied animation class:', animationClass, 'to element:', element)
    console.log('Hardcoded animation style:', element.style.animation)
    
    // Debug: log the computed style after a moment
    setTimeout(() => {
      if (element) {
        const computedStyle = window.getComputedStyle(element)
        console.log('Element animation after apply:', computedStyle.animation)
        console.log('Element opacity after apply:', computedStyle.opacity)
      }
    }, 100)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Website mockup */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Navigation header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {logo && (
                <div className="flex-shrink-0" style={{ width: '120px', height: '40px' }}>
                  <img
                    ref={logoRef}
                    src={logo.url}
                    alt="Logo"
                    className="w-full h-full object-contain"
                    style={{ opacity: 0 }}
                    onLoad={() => {
                      // Trigger animation when image loads
                      if (animation && logoRef.current) {
                        setTimeout(() => playAnimation(), 200)
                      } else if (logoRef.current) {
                        // No animation, just show the logo
                        logoRef.current.style.opacity = '1'
                      }
                    }}
                  />
                </div>
              )}
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Over Ons</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
              </nav>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Contact
            </button>
          </nav>
        </header>
        
        {/* Hero section */}
        <div className="px-6 py-12 bg-gradient-to-r from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welkom bij ons bedrijf
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wij helpen bedrijven groeien met innovatieve oplossingen
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">
              Meer Weten
            </button>
          </div>
        </div>
        
        {/* Content preview */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-100 rounded-lg p-4 h-24"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Default preview for unsupported contexts
function DefaultPreview({ logo, animation, settings }) {
  const logoRef = useRef(null)

  return (
    <div className="flex items-center justify-center min-h-64 bg-gray-50 rounded-lg">
      {logo && (
        <img
          ref={logoRef}
          src={logo.url}
          alt="Logo"
          className="w-32 h-32 object-contain"
        />
      )}
    </div>
  )
}

// Helper function to get the right preview component
function getPreviewComponent(context) {
  const components = {
    'email-client': EmailSignaturePreview,
    'social-feed': SocialFeedPreview,
    'video-timeline': VideoTimelinePreview,
    'website-mockup': WebsiteHeaderPreview
  }
  
  return components[context] || DefaultPreview
}