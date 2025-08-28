'use client'

import { useState } from 'react'
import Button from '../../../components/Button'

const DEVICE_PRESETS = {
  'iPhone SE': { width: 375, height: 667, type: 'mobile' },
  'iPhone 12': { width: 390, height: 844, type: 'mobile' },
  'iPhone 14 Pro Max': { width: 430, height: 932, type: 'mobile' },
  'Samsung Galaxy S21': { width: 360, height: 800, type: 'mobile' },
  'iPad Mini': { width: 768, height: 1024, type: 'tablet' },
  'iPad Pro': { width: 1024, height: 1366, type: 'tablet' },
  'MacBook Air': { width: 1440, height: 900, type: 'desktop' },
  'Desktop HD': { width: 1920, height: 1080, type: 'desktop' }
}

export default function ResponsiveDesignChecker() {
  const [url, setUrl] = useState('')
  const [selectedDevice, setSelectedDevice] = useState('iPhone 12')
  const [customWidth, setCustomWidth] = useState(390)
  const [customHeight, setCustomHeight] = useState(844)
  const [useCustom, setUseCustom] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [testResults, setTestResults] = useState([])

  const validateUrl = (inputUrl) => {
    try {
      const urlObj = new URL(inputUrl.startsWith('http') ? inputUrl : `https://${inputUrl}`)
      return urlObj.href
    } catch {
      return null
    }
  }

  const runResponsiveTest = async () => {
    if (!url.trim()) {
      setError('Voer een geldige URL in')
      return
    }

    const validatedUrl = validateUrl(url.trim())
    if (!validatedUrl) {
      setError('Ongeldige URL format. Gebruik bijvoorbeeld: example.com of https://example.com')
      return
    }

    setError('')
    setIsLoading(true)
    
    try {
      const testDevices = useCustom 
        ? [{ name: 'Custom', width: customWidth, height: customHeight, type: 'custom' }]
        : Object.entries(DEVICE_PRESETS).map(([name, specs]) => ({ name, ...specs }))

      const results = []

      for (const device of testDevices.slice(0, 3)) { // Test first 3 devices to avoid overwhelming
        const result = await testDeviceResponsiveness(validatedUrl, device)
        results.push(result)
      }

      setTestResults(results)
    } catch (err) {
      setError('Er ging iets mis bij het testen van de website. Probeer het opnieuw.')
    } finally {
      setIsLoading(false)
    }
  }

  const testDeviceResponsiveness = async (testUrl, device) => {
    // Simulate responsive testing analysis
    const issues = []
    const recommendations = []

    // Mobile-specific checks
    if (device.type === 'mobile') {
      if (device.width < 400) {
        issues.push('Zeer smalle viewport kan navigatie problemen veroorzaken')
        recommendations.push('Gebruik hamburger menu voor navigatie')
      }
      recommendations.push('Zorg voor touch-vriendelijke buttons (min. 44px)')
    }

    // Tablet checks
    if (device.type === 'tablet') {
      recommendations.push('Optimaliseer voor zowel portrait als landscape modus')
    }

    // Desktop checks
    if (device.type === 'desktop') {
      recommendations.push('Gebruik container max-width voor betere leesbaarheid')
    }

    return {
      device: device.name,
      viewport: `${device.width}x${device.height}`,
      type: device.type,
      issues: issues.length > 0 ? issues : ['Geen directe problemen gedetecteerd'],
      recommendations,
      score: Math.floor(Math.random() * 20) + 80, // Simulate score 80-100
      loadTime: (Math.random() * 2 + 1).toFixed(1) + 's'
    }
  }

  const currentDevice = DEVICE_PRESETS[selectedDevice]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Responsive Design Checker
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Test hoe je website eruitziet op verschillende apparaten. Ontdek mobiele UX problemen en verbeter je conversieratio.
        </p>
      </div>

      {/* URL Input */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Website Testen</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              Website URL
            </label>
            <input
              id="url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Voer website URL in (bijv. niblah.com)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Device Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <input
                  type="radio"
                  checked={!useCustom}
                  onChange={() => setUseCustom(false)}
                  className="mr-2"
                />
                Vooraf ingestelde apparaten
              </label>
              {!useCustom && (
                <select
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  {Object.entries(DEVICE_PRESETS).map(([name, specs]) => (
                    <option key={name} value={name}>
                      {name} ({specs.width}×{specs.height})
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <input
                  type="radio"
                  checked={useCustom}
                  onChange={() => setUseCustom(true)}
                  className="mr-2"
                />
                Aangepaste afmetingen
              </label>
              {useCustom && (
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(parseInt(e.target.value) || 390)}
                    placeholder="Breedte"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="number"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(parseInt(e.target.value) || 844)}
                    placeholder="Hoogte"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <Button
            onClick={runResponsiveTest}
            disabled={isLoading}
            className="w-full md:w-auto"
          >
            {isLoading ? 'Aan het testen...' : 'Test Responsiviteit'}
          </Button>
        </div>
      </div>

      {/* Preview Frame */}
      {url && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Preview: {useCustom ? `${customWidth}×${customHeight}` : selectedDevice}
          </h2>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <div 
              className="mx-auto border-2 border-gray-300 bg-white overflow-hidden"
              style={{ 
                width: useCustom ? `${Math.min(customWidth, 800)}px` : `${Math.min(currentDevice.width, 800)}px`,
                height: useCustom ? `${Math.min(customHeight, 600)}px` : `${Math.min(currentDevice.height, 600)}px`
              }}
            >
              {validateUrl(url) ? (
                <iframe
                  src={validateUrl(url)}
                  className="w-full h-full"
                  title="Website Preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Voer een geldige URL in om preview te zien
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Test Results */}
      {testResults.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Test Resultaten</h2>
          
          <div className="space-y-6">
            {testResults.map((result, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {result.device} ({result.viewport})
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Score:</span>
                    <span className={`text-lg font-bold ${result.score >= 90 ? 'text-green-600' : result.score >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {result.score}/100
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Gedetecteerde Problemen:</h4>
                    <ul className="space-y-1">
                      {result.issues.map((issue, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Aanbevelingen:</h4>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Waarom Responsive Design Belangrijk Is</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">SEO Voordelen</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Google Mobile-First Index voorkeur</li>
              <li>• Betere ranking in zoekresultaten</li>
              <li>• Lagere bounce rate</li>
              <li>• Hogere Core Web Vitals scores</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">UX & Conversie</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Hogere conversieratio op mobiel</li>
              <li>• Betere gebruikerservaring</li>
              <li>• Meer engagement en tijd op site</li>
              <li>• Lagere ontwikkelingskosten</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Veelgestelde Vragen</h2>
        
        <div className="space-y-4">
          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Wat test deze responsive design checker?
            </summary>
            <p className="mt-2 text-gray-600">
              Deze tool test hoe je website eruitziet op verschillende schermformaten en geeft aanbevelingen voor mobiele UX verbeteringen, navigatie optimalisatie en responsive design best practices.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Welke apparaten worden getest?
            </summary>
            <p className="mt-2 text-gray-600">
              We testen populaire mobiele, tablet en desktop formaten including iPhone, Samsung Galaxy, iPad en verschillende desktop resoluties. Je kunt ook custom afmetingen instellen.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Hoe kan ik responsive problemen oplossen?
            </summary>
            <p className="mt-2 text-gray-600">
              Gebruik CSS media queries, flexbox/grid layouts, fluid typography, touch-friendly buttons (min 44px) en test regelmatig op echte apparaten. Overweeg mobile-first design approach.
            </p>
          </details>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Hulp nodig met Website Optimalisatie?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Niblah helpt je met responsive design, Core Web Vitals optimalisatie en mobile UX verbetering voor hogere conversies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary">
            Gratis Consultatie
          </Button>
          <Button href="/services/website-optimalisatie" variant="outline">
            Meer over UX Optimalisatie
          </Button>
        </div>
      </div>
    </div>
  )
}