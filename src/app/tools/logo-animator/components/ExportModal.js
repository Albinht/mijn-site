'use client'

import { useState } from 'react'

export default function ExportModal({ logo, animation, settings, onClose }) {
  const [activeTab, setActiveTab] = useState('css')
  const [isGenerating, setIsGenerating] = useState(false)
  const [emailForPremium, setEmailForPremium] = useState('')
  const [showEmailForm, setShowEmailForm] = useState(false)

  const generateCSS = () => {
    if (!animation) return ''

    const className = settings.customClassName || `logo-${animation.id}`
    
    return `/* ${animation.name} Animation CSS */
${animation.keyframes}

.${className} {
  animation: ${animation.id} ${settings.duration}s ${settings.easing} ${settings.delay}s ${settings.direction} ${settings.loop ? 'infinite' : '1'} forwards;
}

/* Voor gebruik met CSS Custom Properties */
.${className}-dynamic {
  --animation-duration: ${settings.duration}s;
  --animation-delay: ${settings.delay}s;
  --animation-easing: ${settings.easing};
  --animation-direction: ${settings.direction};
  --animation-iteration: ${settings.loop ? 'infinite' : '1'};
  
  animation: ${animation.id} 
    var(--animation-duration, ${settings.duration}s) 
    var(--animation-easing, ${settings.easing}) 
    var(--animation-delay, ${settings.delay}s) 
    var(--animation-direction, ${settings.direction}) 
    var(--animation-iteration, ${settings.loop ? 'infinite' : '1'}) 
    forwards;
}`
  }

  const generateHTMLExample = () => {
    const className = settings.customClassName || `logo-${animation.id}`
    return `<!-- Voeg dit toe aan je HTML -->
<img src="jouw-logo.png" alt="Logo" class="${className}" />

<!-- Of met een div wrapper -->
<div class="${className}">
  <img src="jouw-logo.png" alt="Logo" />
</div>

<!-- Voor dynamische controle -->
<img src="jouw-logo.png" alt="Logo" class="${className}-dynamic" 
     style="--animation-duration: 2s; --animation-delay: 0.5s;" />`
  }

  const generateReactExample = () => {
    const className = settings.customClassName || `logo-${animation.id}`
    return `import React from 'react';
import './logo-animations.css'; // CSS bestand met animaties

function AnimatedLogo() {
  return (
    <img 
      src="/path/to/your/logo.png" 
      alt="Logo" 
      className="${className}"
    />
  );
}

// Met dynamic styling
function DynamicAnimatedLogo() {
  const animationSettings = {
    '--animation-duration': '${settings.duration}s',
    '--animation-delay': '${settings.delay}s',
    '--animation-easing': '${settings.easing}'
  };

  return (
    <img 
      src="/path/to/your/logo.png" 
      alt="Logo" 
      className="${className}-dynamic"
      style={animationSettings}
    />
  );
}

export default AnimatedLogo;`
  }

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code gekopieerd naar klembord!')
    }).catch(err => {
      console.error('Kon niet kopiëren naar klembord: ', err)
    })
  }

  const handleDownloadCSS = () => {
    const css = generateCSS()
    const blob = new Blob([css], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${settings.customClassName || `logo-${animation.id}`}-animation.css`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleGIFGeneration = async () => {
    setIsGenerating(true)
    try {
      // For demo purposes - in real implementation you'd use gif.js or canvas
      alert('GIF generatie is beschikbaar in de premium versie! Laat je email achter voor toegang.')
      setShowEmailForm(true)
    } catch (error) {
      alert('Er ging iets mis bij het genereren van de GIF')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleVideoGeneration = async () => {
    setIsGenerating(true)
    try {
      // For demo purposes - in real implementation you'd use MediaRecorder API
      alert('Video export is beschikbaar in de premium versie! Laat je email achter voor toegang.')
      setShowEmailForm(true)
    } catch (error) {
      alert('Er ging iets mis bij het genereren van de video')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleEmailSubmit = async () => {
    if (!emailForPremium) return
    
    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/logo-animator-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailForPremium,
          animationType: animation?.name || 'unknown',
          feature: 'premium-features',
          settings: settings
        })
      })

      const data = await response.json()

      if (response.ok) {
        alert(`🎉 Welkom ${emailForPremium}! \n\nJe krijgt binnen 5 minuten een email met:\n✅ Premium toegang tot GIF/Video export\n✅ Geavanceerde animation features\n✅ Persoonlijk advies voor je marketing\n\nCheck ook je spam folder!`)
        setShowEmailForm(false)
        setEmailForPremium('')
        
        // Optional: Unlock premium features immediately for better UX
        // setPremiumUnlocked(true)
      } else {
        throw new Error(data.error || 'Er ging iets mis')
      }
    } catch (error) {
      console.error('Email submit error:', error)
      alert(`Er ging iets mis bij het aanmelden. Probeer het opnieuw of bel direct: +31 6 48728828`)
    } finally {
      setIsGenerating(false)
    }
  }

  const tabs = [
    { id: 'css', name: 'CSS Code', icon: '🎨', description: 'Voor developers' },
    { id: 'html', name: 'HTML Voorbeeld', icon: '📄', description: 'Plug & play' },
    { id: 'react', name: 'React Code', icon: '⚛️', description: 'Voor React apps' },
    { id: 'files', name: 'Bestanden', icon: '📁', description: 'GIF, MP4, CSS' }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Exporteer je animatie
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
                <span className="ml-2 text-xs text-gray-400">({tab.description})</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {/* CSS Tab */}
          {activeTab === 'css' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">CSS Animatie Code</h3>
                <div className="space-x-2">
                  <button
                    onClick={() => handleCopyToClipboard(generateCSS())}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition-colors"
                  >
                    📋 Kopiëren
                  </button>
                  <button
                    onClick={handleDownloadCSS}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm hover:bg-green-200 transition-colors"
                  >
                    💾 Download
                  </button>
                </div>
              </div>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{generateCSS()}</code>
              </pre>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 <strong>Tip:</strong> Kopieer deze CSS naar je stylesheet en voeg de class toe aan je logo element.
                </p>
              </div>
            </div>
          )}

          {/* HTML Tab */}
          {activeTab === 'html' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">HTML Implementatie</h3>
                <button
                  onClick={() => handleCopyToClipboard(generateHTMLExample())}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition-colors"
                >
                  📋 Kopiëren
                </button>
              </div>
              <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{generateHTMLExample()}</code>
              </pre>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  📄 <strong>Stap voor stap:</strong>
                </p>
                <ol className="text-sm text-yellow-800 mt-2 ml-4 list-decimal">
                  <li>Voeg de CSS toe aan je stylesheet</li>
                  <li>Upload je logo naar je website</li>
                  <li>Voeg de HTML code toe waar je logo moet staan</li>
                  <li>Pas het pad naar je logo aan</li>
                </ol>
              </div>
            </div>
          )}

          {/* React Tab */}
          {activeTab === 'react' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">React Component</h3>
                <button
                  onClick={() => handleCopyToClipboard(generateReactExample())}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition-colors"
                >
                  📋 Kopiëren
                </button>
              </div>
              <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{generateReactExample()}</code>
              </pre>
              <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-sm text-purple-800">
                  ⚛️ <strong>React implementatie:</strong>
                </p>
                <ol className="text-sm text-purple-800 mt-2 ml-4 list-decimal">
                  <li>Maak een CSS bestand met de animatie</li>
                  <li>Importeer de CSS in je component</li>
                  <li>Gebruik de component in je app</li>
                  <li>Optioneel: gebruik CSS variabelen voor dynamische controle</li>
                </ol>
              </div>
            </div>
          )}

          {/* Files Tab */}
          {activeTab === 'files' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Bestanden</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CSS File */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-mono text-sm">CSS</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">CSS Bestand</h4>
                      <p className="text-sm text-gray-500">Ready-to-use stylesheet</p>
                    </div>
                  </div>
                  <button
                    onClick={handleDownloadCSS}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    💾 Download CSS
                  </button>
                </div>

                {/* GIF File */}
                <div className="border border-gray-200 rounded-lg p-4 relative">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-600 font-mono text-sm">GIF</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Geanimeerde GIF</h4>
                      <p className="text-sm text-gray-500">Voor social media & email</p>
                    </div>
                  </div>
                  <button
                    onClick={handleGIFGeneration}
                    disabled={isGenerating}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 transition-colors"
                  >
                    {isGenerating ? '⏳ Genereren...' : '🎬 Genereer GIF'}
                  </button>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Premium
                  </div>
                </div>

                {/* MP4 File */}
                <div className="border border-gray-200 rounded-lg p-4 relative">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-mono text-sm">MP4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Video Bestand</h4>
                      <p className="text-sm text-gray-500">Hoge kwaliteit voor web</p>
                    </div>
                  </div>
                  <button
                    onClick={handleVideoGeneration}
                    disabled={isGenerating}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 transition-colors"
                  >
                    {isGenerating ? '⏳ Genereren...' : '🎥 Genereer Video'}
                  </button>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Premium
                  </div>
                </div>

                {/* WEBM File */}
                <div className="border border-gray-200 rounded-lg p-4 relative">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-indigo-600 font-mono text-xs">WEBM</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">WEBM Video</h4>
                      <p className="text-sm text-gray-500">Geoptimaliseerd voor web</p>
                    </div>
                  </div>
                  <button
                    onClick={handleVideoGeneration}
                    disabled={isGenerating}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                  >
                    {isGenerating ? '⏳ Genereren...' : '⚡ Genereer WEBM'}
                  </button>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Premium
                  </div>
                </div>
              </div>

              {/* Premium Email Form */}
              {showEmailForm && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">🌟 Unlock Premium Features</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Krijg toegang tot GIF en video export, plus advanced animaties en batch processing.
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={emailForPremium}
                      onChange={(e) => setEmailForPremium(e.target.value)}
                      placeholder="jouw@email.com"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleEmailSubmit}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Gratis Toegang
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Animatie: <span className="font-medium">{animation?.name}</span> | 
              Duur: <span className="font-medium">{settings.duration}s</span>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}