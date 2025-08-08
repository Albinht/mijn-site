'use client'

import { useState, useEffect, useRef } from 'react'

export default function AnimationPreview({ logo, animation, settings, onExport, onReset }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playCount, setPlayCount] = useState(0)
  const logoRef = useRef(null)

  // Auto-play animation when settings change
  useEffect(() => {
    if (logo && animation) {
      playAnimation()
    }
  }, [logo, animation, settings])

  const playAnimation = () => {
    if (!logoRef.current || !animation) return

    setIsPlaying(true)
    
    // Remove any existing animation classes
    logoRef.current.className = 'animation-preview-logo'
    logoRef.current.style.animation = 'none'
    
    // Force reflow to ensure the animation reset
    logoRef.current.offsetHeight 
    
    // Build animation string
    const iterationCount = settings.loop ? 'infinite' : '1'
    const animationName = animation.id
    const animationString = `${animationName} ${settings.duration}s ${settings.easing} ${settings.delay}s ${settings.direction} ${iterationCount} forwards`
    
    // Apply animation
    logoRef.current.style.animation = animationString
    
    // Update state
    if (!settings.loop) {
      setTimeout(() => {
        setIsPlaying(false)
        setPlayCount(prev => prev + 1)
      }, (settings.duration + settings.delay) * 1000)
    } else {
      // For looping animations, we stay in playing state
    }
  }

  const stopAnimation = () => {
    if (logoRef.current) {
      logoRef.current.style.animation = 'none'
      setIsPlaying(false)
    }
  }

  const generateCSS = () => {
    if (!animation) return ''

    const className = settings.customClassName || `logo-${animation.id}`
    
    return `/* ${animation.name} Animation */
${animation.keyframes}

.${className} {
  animation: ${animation.id} ${settings.duration}s ${settings.easing} ${settings.delay}s ${settings.direction} ${settings.loop ? 'infinite' : '1'} forwards;
}

/* Voor dynamische controle met CSS variabelen */
.${className}-dynamic {
  animation: ${animation.id} var(--duration, ${settings.duration}s) var(--easing, ${settings.easing}) var(--delay, ${settings.delay}s) var(--direction, ${settings.direction}) var(--iteration-count, ${settings.loop ? 'infinite' : '1'}) forwards;
}`
  }

  const backgroundPatterns = [
    { name: 'Wit', value: 'bg-white', class: 'bg-white' },
    { name: 'Licht grijs', value: 'bg-gray-100', class: 'bg-gray-100' },
    { name: 'Donker grijs', value: 'bg-gray-800', class: 'bg-gray-800' },
    { name: 'Zwart', value: 'bg-black', class: 'bg-black' },
    { name: 'Blauw', value: 'bg-blue-500', class: 'bg-blue-500' },
    { name: 'Patroon', value: 'bg-pattern', class: 'bg-gray-100' }
  ]

  const [selectedBackground, setSelectedBackground] = useState('bg-white')

  const getBackgroundStyle = () => {
    if (selectedBackground === 'bg-pattern') {
      return {
        backgroundColor: '#f3f4f6',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }
    }
    return {}
  }

  if (!logo) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Preview je animatie</h3>
          <p className="text-gray-600">Upload eerst een logo om de animatie preview te zien.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Preview Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {animation ? `${animation.name} Preview` : 'Logo Preview'}
          </h3>
          <div className="flex items-center space-x-2">
            {animation && (
              <>
                <button
                  onClick={playAnimation}
                  disabled={isPlaying}
                  className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  {isPlaying ? 'Playing...' : 'Play'}
                </button>
                {(isPlaying || settings.loop) && (
                  <button
                    onClick={stopAnimation}
                    className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 012 0v6a1 1 0 11-2 0V7zM12 7a1 1 0 012 0v6a1 1 0 11-2 0V7z" clipRule="evenodd" />
                    </svg>
                    Stop
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Background Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Achtergrond:
          </label>
          <div className="flex flex-wrap gap-2">
            {backgroundPatterns.map((bg) => (
              <button
                key={bg.value}
                onClick={() => setSelectedBackground(bg.value)}
                className={`px-3 py-1 text-xs rounded-lg border transition-colors ${
                  selectedBackground === bg.value
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {bg.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div 
        className={`h-80 flex items-center justify-center relative ${
          backgroundPatterns.find(bg => bg.value === selectedBackground)?.class || 'bg-white'
        }`}
        style={getBackgroundStyle()}
      >
        <img
          ref={logoRef}
          src={logo.url}
          alt="Logo preview"
          className="max-w-32 max-h-32 object-contain animation-preview-logo"
          style={{
            filter: selectedBackground === 'bg-black' ? 'brightness(0) invert(1)' : 'none'
          }}
        />
        
        {/* Animation Status Indicator */}
        {isPlaying && (
          <div className="absolute top-4 left-4 flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            Playing
          </div>
        )}

        {/* Play Count */}
        {playCount > 0 && !settings.loop && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            {playCount} keer afgespeeld
          </div>
        )}
      </div>

      {/* Animation Info & Controls */}
      {animation && (
        <div className="p-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Duur:</span>
              <span className="ml-2 text-gray-600">{settings.duration}s</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Vertraging:</span>
              <span className="ml-2 text-gray-600">{settings.delay}s</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Type:</span>
              <span className="ml-2 text-gray-600">{settings.easing}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Herhaling:</span>
              <span className="ml-2 text-gray-600">{settings.loop ? 'Continu' : 'Eenmaal'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Export Buttons */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onExport}
            disabled={!animation}
            className="flex-1 min-w-[120px] bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            📥 Exporteer
          </button>
          <button
            onClick={() => {
              if (animation && logo) {
                const css = generateCSS()
                navigator.clipboard.writeText(css).then(() => {
                  alert('CSS code gekopieerd naar klembord!')
                })
              }
            }}
            disabled={!animation}
            className="flex-1 min-w-[120px] bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            📋 CSS Kopiëren
          </button>
        </div>
        
        <button
          onClick={onReset}
          className="w-full text-gray-600 hover:text-gray-800 py-2 text-sm font-medium transition-colors"
        >
          🔄 Opnieuw beginnen
        </button>
      </div>

      {/* Tips */}
      <div className="p-4 bg-yellow-50 border-t border-yellow-200">
        <p className="text-xs text-yellow-800">
          💡 <strong>Tips:</strong> Probeer verschillende achtergronden om te zien hoe je animatie eruitziet op verschillende websites. 
          {animation && ' Klik op "Exporteer" voor meer opties zoals GIF en video bestanden.'}
        </p>
      </div>
    </div>
  )
}