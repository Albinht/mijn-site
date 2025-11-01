'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '../../../components/Button'

const ANCHOR_TEXT_TYPES = {
  exact_match: {
    name: 'Exact Match',
    description: 'Precies je doelkeyword',
    percentage: '5-10%',
    risk: 'Hoog'
  },
  partial_match: {
    name: 'Partial Match',
    description: 'Keyword + extra woorden',
    percentage: '15-20%',
    risk: 'Medium'
  },
  branded: {
    name: 'Branded',
    description: 'Merknaam of website naam',
    percentage: '20-30%',
    risk: 'Laag'
  },
  naked_url: {
    name: 'Naked URL',
    description: 'Volledige website URL',
    percentage: '10-15%',
    risk: 'Laag'
  },
  generic: {
    name: 'Generic',
    description: 'Algemene link teksten',
    percentage: '20-30%',
    risk: 'Laag'
  },
  long_tail: {
    name: 'Long-tail',
    description: 'Langere, natuurlijke zinnen',
    percentage: '10-20%',
    risk: 'Laag'
  }
}

const GENERIC_ANCHORS = [
  'klik hier', 'lees meer', 'bekijk hier', 'meer informatie', 'deze pagina',
  'deze gids', 'dit artikel', 'deze bron', 'hier', 'meer details',
  'volledige uitleg', 'complete gids', 'uitgebreide info', 'deze link'
]

const PARTIAL_MODIFIERS = [
  'beste', 'complete', 'ultieme', 'gratis', 'professionele', 'expert',
  'geavanceerde', 'eenvoudige', 'snelle', 'effectieve', 'bewezen', 'top',
  'nieuwe', 'moderne', 'praktische', 'handige', 'nuttige', 'populaire'
]

const LONG_TAIL_PATTERNS = [
  'alles over {}',
  'hoe {} werkt',
  'waarom {} belangrijk is',
  'tips voor {}',
  'gids voor {}',
  '{}strategie uitgelegd',
  'meer over {}',
  'informatie over {}',
  'handleiding voor {}',
  'voorbeelden van {}'
]

export default function AnchorTextGenerator() {
  const [anchorTexts, setAnchorTexts] = useState('')
  const [brandName, setBrandName] = useState('Niblah')
  const [targetUrl, setTargetUrl] = useState('')
  const [generatedAnchors, setGeneratedAnchors] = useState([])
  const [selectedTypes, setSelectedTypes] = useState(['partial_match', 'branded', 'generic'])
  const [isLoading, setIsLoading] = useState(false)

  const generateAnchorTexts = () => {
    if (!anchorTexts.trim()) {
      return
    }

    setIsLoading(true)
    
    setTimeout(() => {
      const inputAnchors = anchorTexts.split(',').map(text => text.trim()).filter(text => text.length > 0)
      const generated = []

      inputAnchors.forEach(anchor => {
        // Generate different types based on selection
        selectedTypes.forEach(type => {
          const variations = generateVariationsByType(anchor, type)
          variations.forEach(variation => {
            generated.push({
              text: variation,
              type: type,
              typeName: ANCHOR_TEXT_TYPES[type].name,
              risk: ANCHOR_TEXT_TYPES[type].risk,
              original: anchor
            })
          })
        })
      })

      // Remove duplicates and shuffle
      const uniqueGenerated = generated.filter((item, index, self) => 
        index === self.findIndex(t => t.text.toLowerCase() === item.text.toLowerCase())
      )
      
      // Sort by risk level (low risk first)
      const sortedGenerated = uniqueGenerated.sort((a, b) => {
        const riskOrder = { 'Laag': 0, 'Medium': 1, 'Hoog': 2 }
        return riskOrder[a.risk] - riskOrder[b.risk]
      })

      setGeneratedAnchors(sortedGenerated)
      setIsLoading(false)
    }, 1000)
  }

  const generateVariationsByType = (anchor, type) => {
    const variations = []
    
    switch (type) {
      case 'exact_match':
        variations.push(anchor)
        break
        
      case 'partial_match':
        // Add modifiers before and after
        PARTIAL_MODIFIERS.slice(0, 3).forEach(modifier => {
          variations.push(`${modifier} ${anchor}`)
          variations.push(`${anchor} ${modifier === 'beste' ? 'tips' : modifier === 'complete' ? 'gids' : 'strategie'}`)
        })
        break
        
      case 'branded':
        variations.push(brandName)
        variations.push(`${brandName}.com`)
        variations.push(`${brandName} website`)
        if (targetUrl) {
          const domain = extractDomain(targetUrl)
          if (domain) variations.push(domain)
        }
        break
        
      case 'naked_url':
        if (targetUrl) {
          variations.push(targetUrl)
          const domain = extractDomain(targetUrl)
          if (domain) {
            variations.push(domain)
            variations.push(`www.${domain}`)
          }
        } else {
          variations.push(`${brandName.toLowerCase()}.com`)
          variations.push(`www.${brandName.toLowerCase()}.com`)
        }
        break
        
      case 'generic':
        // Mix generic anchors
        GENERIC_ANCHORS.slice(0, 5).forEach(generic => {
          variations.push(generic)
        })
        break
        
      case 'long_tail':
        // Use patterns with the anchor
        LONG_TAIL_PATTERNS.slice(0, 3).forEach(pattern => {
          variations.push(pattern.replace('{}', anchor + ' '))
        })
        break
    }
    
    return variations.filter(v => v.length > 0)
  }

  const extractDomain = (url) => {
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`)
      return urlObj.hostname.replace('www.', '')
    } catch {
      return null
    }
  }

  const copyAnchor = (text) => {
    navigator.clipboard.writeText(text)
  }

  const copyAllAnchors = () => {
    const allTexts = generatedAnchors.map(item => item.text).join('\n')
    navigator.clipboard.writeText(allTexts)
  }

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Laag': return 'bg-green-50 text-green-800 border-green-200'
      case 'Medium': return 'bg-yellow-50 text-yellow-800 border-yellow-200'
      case 'Hoog': return 'bg-red-50 text-red-800 border-red-200'
      default: return 'bg-gray-50 text-gray-800 border-gray-200'
    }
  }

  const getTypeStats = () => {
    const stats = {}
    generatedAnchors.forEach(item => {
      stats[item.type] = (stats[item.type] || 0) + 1
    })
    return stats
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Anchor Text Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Genereer natuurlijke anchor text variaties voor veilige link building en betere SEO zonder over-optimalisatie penalties.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Anchor Text Invoer</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="anchor-texts" className="block text-sm font-medium text-gray-700 mb-2">
              Anchor Text
            </label>
            <textarea
              id="anchor-texts"
              value={anchorTexts}
              onChange={(e) => setAnchorTexts(e.target.value)}
              placeholder="Write your anchor text here&#10;Separate each anchor text with comma"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">
              Voer je basis anchor texts in, gescheiden door komma's
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="brand-name" className="block text-sm font-medium text-gray-700 mb-2">
                Merknaam
              </label>
              <input
                id="brand-name"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Je merknaam"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="target-url" className="block text-sm font-medium text-gray-700 mb-2">
                Doel URL (optioneel)
              </label>
              <input
                id="target-url"
                type="text"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="https://example.com/pagina"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Anchor Text Types Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Gewenste Anchor Text Types
            </label>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(ANCHOR_TEXT_TYPES).map(([key, type]) => (
                <label key={key} className="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-purple-300">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(key)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTypes([...selectedTypes, key])
                      } else {
                        setSelectedTypes(selectedTypes.filter(t => t !== key))
                      }
                    }}
                    className="mt-1 mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{type.name}</div>
                    <div className="text-sm text-gray-600">{type.description}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Aanbevolen: {type.percentage} | Risico: {type.risk}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <Button
            onClick={generateAnchorTexts}
            disabled={isLoading || !anchorTexts.trim()}
            className="w-full md:w-auto"
          >
            {isLoading ? 'Aan het genereren...' : 'Generate'}
          </Button>
        </div>
      </div>

      {/* Generated Anchors */}
      {generatedAnchors.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Gegenereerde Anchor Texts ({generatedAnchors.length})
            </h2>
            <Button onClick={copyAllAnchors} variant="outline" size="sm">
              Kopieer Alles
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
            {Object.entries(getTypeStats()).map(([type, count]) => (
              <div key={type} className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-gray-700">{count}</div>
                <div className="text-xs text-gray-600">{ANCHOR_TEXT_TYPES[type]?.name}</div>
              </div>
            ))}
          </div>

          {/* Anchor Text List */}
          <div className="space-y-3">
            {generatedAnchors.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-gray-800 mb-1">{item.text}</div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getRiskColor(item.risk)}`}>
                      {item.typeName}
                    </span>
                    <span className="text-xs text-gray-500">
                      Risico: {item.risk}
                    </span>
                    {item.original && (
                      <span className="text-xs text-gray-400">
                        van: "{item.original}"
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => copyAnchor(item.text)}
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium ml-4"
                >
                  Kopieer
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Anchor Text Strategy Guide */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Anchor Text Strategie</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Aanbevolen Distributie</h3>
            <div className="space-y-3">
              {Object.entries(ANCHOR_TEXT_TYPES).map(([key, type]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium text-gray-700">{type.name}</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-800">{type.percentage}</div>
                    <div className={`text-xs ${type.risk === 'Laag' ? 'text-green-600' : type.risk === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                      {type.risk} risico
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Best Practices</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Varieer anchor texts natuurlijk
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Gebruik voornamelijk low-risk anchors
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Beperk exact match tot 5-10%
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">✗</span>
                Vermijd keyword stuffing
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">✗</span>
                Gebruik niet teveel exact match
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">✗</span>
                Herhaal anchors niet te vaak
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional SEO Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Anchor Text Generator voor Link Building</h2>
        
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            Deze anchor text generator helpt je een natuurlijk link profiel te bouwen. Door meerdere anchor text variaties te creëren vermijd je over-optimalisatie en Google penalties. Of je nu backlinks opbouwt, interne links optimaliseert, of guest posts schrijft—diverse anchor texts zijn essentieel voor succesvolle link building.
          </p>

          <p>
            De tool genereert verschillende anchor text types: exact match voor precisie, partial match voor relevantie, branded voor natuurlijkheid, en generic voor diversiteit. Gebruik deze anchor text generator om je complete link strategie te plannen voordat je begint met outreach. Mix low-risk anchors (branded, generic) met medium-risk (partial match) en beperk high-risk (exact match) anchors tot 5-10%.
          </p>

          <p>
            Optimaliseer ook je <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword research</Link> en <Link href="/tools/url-slug-generator" className="text-blue-600 hover:underline">URL slugs</Link> voor complete SEO strategie.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibent text-gray-800 mb-6">Veelgestelde Vragen</h2>
        
        <div className="space-y-4">
          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Wat is een anchor text en waarom is variatie belangrijk?
            </summary>
            <p className="mt-2 text-gray-600">
              Anchor text is de klikbare tekst in een hyperlink. Variatie is cruciaal omdat Google over-geoptimaliseerde anchor texts als spam kan zien. Een natuurlijk link profiel bevat diverse anchor text types.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Hoeveel exact match anchor texts kan ik veilig gebruiken?
            </summary>
            <p className="mt-2 text-gray-600">
              Beperk exact match anchor texts tot maximaal 5-10% van je totale link profiel. Te veel exact match anchors kunnen leiden tot Google penalties.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Welke anchor text types zijn het veiligst?
            </summary>
            <p className="mt-2 text-gray-600">
              Branded anchors, generic anchors ("klik hier", "lees meer") en long-tail variaties zijn het veiligst. Deze lijken het meest natuurlijk en hebben het laagste risico op penalties.
            </p>
          </details>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Hulp nodig met Link Building?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Niblah helpt je met professionele link building strategieën en natuurlijke anchor text optimalisatie voor betere SEO.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary">
            Gratis Link Building Audit
          </Button>
          <Button href="/services/link-building" variant="outline">
            Meer over Link Building
          </Button>
        </div>
      </div>
    </div>
  )
}