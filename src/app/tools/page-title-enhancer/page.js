'use client'

import { useState, useEffect } from 'react'
import Button from '../../../components/Button'

const TITLE_FORMULAS = [
  {
    name: 'Problem + Solution',
    pattern: 'Hoe [keyword] oplossen – [Oplossing] | [Brand]',
    example: 'Hoe WordPress SEO optimaliseren – Complete Gids 2024 | Niblah'
  },
  {
    name: 'Number + Benefit',
    pattern: '[Aantal] [keyword] tips voor [resultaat]',
    example: '7 WordPress SEO tips voor betere Google rankings'
  },
  {
    name: 'Ultimate Guide',
    pattern: 'Ultimate [keyword] gids – [Jaar] editie',
    example: 'Ultimate WordPress SEO gids – 2024 editie'
  },
  {
    name: 'Question Format',
    pattern: 'Wat is [keyword]? [Korte uitleg]',
    example: 'Wat is WordPress SEO? Complete uitleg voor beginners'
  },
  {
    name: 'Best/Top List',
    pattern: 'Beste [keyword] [tools/tips] in [jaar]',
    example: 'Beste WordPress SEO plugins in 2024'
  },
  {
    name: 'Step-by-step',
    pattern: '[keyword] in [aantal] stappen – [resultaat]',
    example: 'WordPress SEO in 5 stappen – Hoger ranken in Google'
  }
]

const POWER_WORDS = [
  'Ultimate', 'Complete', 'Definitieve', 'Gratis', 'Bewezen', 'Gegarandeerd',
  'Geheim', 'Exclusief', 'Premium', 'Professional', 'Expert', 'Geavanceerd',
  'Eenvoudig', 'Snel', 'Instant', 'Onmiddellijk', 'Revolutionair', 'Innovatief',
  'Essentieel', 'Kritiek', 'Belangrijk', 'Noodzakelijk', 'Krachtig', 'Effectief'
]

const EMOTIONAL_TRIGGERS = [
  'Verbazingwekkend', 'Ongelofelijk', 'Schokkend', 'Verrassend', 'Fantastisch',
  'Geweldig', 'Prachtig', 'Perfect', 'Ideaal', 'Briljant', 'Slim', 'Genius'
]

export default function PageTitleEnhancer() {
  const [title, setTitle] = useState('')
  const [keyword, setKeyword] = useState('')
  const [targetLength, setTargetLength] = useState(60)
  const [brandName, setBrandName] = useState('Niblah')
  const [generatedTitles, setGeneratedTitles] = useState([])
  const [selectedFormula, setSelectedFormula] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [titleAnalysis, setTitleAnalysis] = useState(null)

  useEffect(() => {
    if (title) {
      analyzeTitleSEO()
    }
  }, [title, keyword])

  const analyzeTitleSEO = () => {
    const analysis = {
      length: title.length,
      wordCount: title.split(' ').length,
      keywordPresent: keyword && title.toLowerCase().includes(keyword.toLowerCase()),
      keywordPosition: keyword ? title.toLowerCase().indexOf(keyword.toLowerCase()) : -1,
      hasNumbers: /\d/.test(title),
      hasPowerWords: POWER_WORDS.some(word => title.toLowerCase().includes(word.toLowerCase())),
      hasEmotionalTriggers: EMOTIONAL_TRIGGERS.some(word => title.toLowerCase().includes(word.toLowerCase())),
      startsWithKeyword: keyword && title.toLowerCase().startsWith(keyword.toLowerCase()),
      hasBrand: brandName && title.toLowerCase().includes(brandName.toLowerCase()),
      score: 0
    }

    // Calculate SEO score
    let score = 0
    if (analysis.length >= 30 && analysis.length <= 60) score += 25
    else if (analysis.length >= 50 && analysis.length <= 70) score += 15
    
    if (analysis.keywordPresent) score += 25
    if (analysis.keywordPosition <= 10) score += 15
    if (analysis.hasNumbers) score += 10
    if (analysis.hasPowerWords) score += 10
    if (analysis.hasEmotionalTriggers) score += 10
    if (analysis.hasBrand) score += 5

    analysis.score = Math.min(score, 100)
    setTitleAnalysis(analysis)
  }

  const generateTitles = () => {
    if (!title && !keyword) {
      return
    }

    setIsLoading(true)
    
    setTimeout(() => {
      const generated = []
      const baseContent = title || keyword
      const currentYear = new Date().getFullYear()

      // Generate titles based on formulas
      TITLE_FORMULAS.forEach(formula => {
        let generatedTitle = formula.pattern
          .replace('[keyword]', keyword || baseContent)
          .replace('[Brand]', brandName)
          .replace('[jaar]', currentYear.toString())
          .replace('[Jaar]', currentYear.toString())
          .replace('[Aantal]', Math.floor(Math.random() * 10) + 3)
          .replace('[aantal]', Math.floor(Math.random() * 10) + 3)
          .replace('[Oplossing]', getRandomSolution())
          .replace('[resultaat]', getRandomResult())
          .replace('[Korte uitleg]', 'Alles wat je moet weten')
          .replace('[tools/tips]', Math.random() > 0.5 ? 'tools' : 'tips')

        // Trim to target length if too long
        if (generatedTitle.length > targetLength) {
          generatedTitle = generatedTitle.substring(0, targetLength - 3) + '...'
        }

        generated.push({
          title: generatedTitle,
          formula: formula.name,
          length: generatedTitle.length,
          score: calculateTitleScore(generatedTitle)
        })
      })

      // Generate additional variations with power words
      const variations = generateVariations(baseContent)
      generated.push(...variations)

      // Sort by score
      generated.sort((a, b) => b.score - a.score)
      
      setGeneratedTitles(generated.slice(0, 12))
      setIsLoading(false)
    }, 1000)
  }

  const generateVariations = (baseContent) => {
    const variations = []
    const currentYear = new Date().getFullYear()
    
    // Add power words variations
    POWER_WORDS.slice(0, 6).forEach(powerWord => {
      const variation = `${powerWord} ${baseContent} Gids ${currentYear} | ${brandName}`
      if (variation.length <= targetLength + 10) {
        variations.push({
          title: variation,
          formula: 'Power Word Formula',
          length: variation.length,
          score: calculateTitleScore(variation)
        })
      }
    })

    // Add number-based variations
    for (let i = 5; i <= 20; i += 5) {
      const variation = `${i} ${baseContent} Tips voor Betere Resultaten`
      if (variation.length <= targetLength + 10) {
        variations.push({
          title: variation,
          formula: 'Numbered List',
          length: variation.length,
          score: calculateTitleScore(variation)
        })
      }
    }

    return variations
  }

  const calculateTitleScore = (titleText) => {
    let score = 0
    
    // Length optimization
    if (titleText.length >= 30 && titleText.length <= 60) score += 25
    else if (titleText.length >= 50 && titleText.length <= 70) score += 15
    
    // Keyword presence
    if (keyword && titleText.toLowerCase().includes(keyword.toLowerCase())) {
      score += 25
      if (titleText.toLowerCase().indexOf(keyword.toLowerCase()) <= 10) score += 15
    }
    
    // Power words and numbers
    if (/\d/.test(titleText)) score += 10
    if (POWER_WORDS.some(word => titleText.toLowerCase().includes(word.toLowerCase()))) score += 10
    if (EMOTIONAL_TRIGGERS.some(word => titleText.toLowerCase().includes(word.toLowerCase()))) score += 10
    
    // Brand presence
    if (brandName && titleText.toLowerCase().includes(brandName.toLowerCase())) score += 5
    
    return Math.min(score, 100)
  }

  const getRandomSolution = () => {
    const solutions = ['Complete Gids', 'Praktische Tips', 'Expert Advies', 'Stap-voor-Stap Plan', 'Bewezen Strategie']
    return solutions[Math.floor(Math.random() * solutions.length)]
  }

  const getRandomResult = () => {
    const results = ['Betere Rankings', 'Meer Traffic', 'Hoger Succes', 'Betere Resultaten', 'Meer Conversies']
    return results[Math.floor(Math.random() * results.length)]
  }

  const copyTitle = (titleText) => {
    navigator.clipboard.writeText(titleText)
    // Could add a toast notification here
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-50'
    if (score >= 60) return 'text-yellow-600 bg-yellow-50'
    return 'text-red-600 bg-red-50'
  }

  const getLengthColor = (length) => {
    if (length >= 30 && length <= 60) return 'text-green-600'
    if (length >= 50 && length <= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Title Enhancer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Genereer perfecte SEO page titles met optimale lengte en keywords voor betere Google rankings en hogere CTR.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Title Invoer</h2>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Huidige Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Je huidige page title hier"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                Hoofdkeyword
              </label>
              <input
                id="keyword"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Je hoofdkeyword hier"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-2">
                Gewenste Lengte (tekens)
              </label>
              <input
                id="length"
                type="number"
                value={targetLength}
                onChange={(e) => setTargetLength(parseInt(e.target.value) || 60)}
                min="30"
                max="100"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-sm text-gray-500 mt-1">Aanbevolen: 30-60 tekens</p>
            </div>

            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                Merknaam (optioneel)
              </label>
              <input
                id="brand"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Je merknaam"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="formula" className="block text-sm font-medium text-gray-700 mb-2">
                Title Formule (optioneel)
              </label>
              <select
                id="formula"
                value={selectedFormula}
                onChange={(e) => setSelectedFormula(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Alle formules</option>
                {TITLE_FORMULAS.map(formula => (
                  <option key={formula.name} value={formula.name}>{formula.name}</option>
                ))}
              </select>
            </div>
          </div>

          <Button
            onClick={generateTitles}
            disabled={isLoading || (!title && !keyword)}
            className="w-full md:w-auto"
          >
            {isLoading ? 'Aan het genereren...' : 'Genereer Titles'}
          </Button>
        </div>
      </div>

      {/* Current Title Analysis */}
      {title && titleAnalysis && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Huidige Title Analyse</h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold ${getLengthColor(titleAnalysis.length)}`}>
                {titleAnalysis.length}
              </div>
              <div className="text-sm text-gray-600">Tekens</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-700">{titleAnalysis.wordCount}</div>
              <div className="text-sm text-gray-600">Woorden</div>
            </div>
            <div className={`rounded-lg p-4 text-center ${getScoreColor(titleAnalysis.score)}`}>
              <div className="text-2xl font-bold">{titleAnalysis.score}</div>
              <div className="text-sm">SEO Score</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold ${titleAnalysis.keywordPresent ? 'text-green-600' : 'text-red-600'}`}>
                {titleAnalysis.keywordPresent ? '✓' : '✗'}
              </div>
              <div className="text-sm text-gray-600">Keyword</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Positieve Punten:</h3>
              <ul className="space-y-1">
                {titleAnalysis.keywordPresent && (
                  <li className="text-sm text-green-600 flex items-center">
                    <span className="mr-2">✓</span>Hoofdkeyword aanwezig
                  </li>
                )}
                {titleAnalysis.keywordPosition <= 10 && titleAnalysis.keywordPresent && (
                  <li className="text-sm text-green-600 flex items-center">
                    <span className="mr-2">✓</span>Keyword staat vooraan
                  </li>
                )}
                {titleAnalysis.hasNumbers && (
                  <li className="text-sm text-green-600 flex items-center">
                    <span className="mr-2">✓</span>Bevat cijfers
                  </li>
                )}
                {titleAnalysis.hasPowerWords && (
                  <li className="text-sm text-green-600 flex items-center">
                    <span className="mr-2">✓</span>Bevat krachtige woorden
                  </li>
                )}
                {titleAnalysis.length >= 30 && titleAnalysis.length <= 60 && (
                  <li className="text-sm text-green-600 flex items-center">
                    <span className="mr-2">✓</span>Optimale lengte
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Verbeterpunten:</h3>
              <ul className="space-y-1">
                {!titleAnalysis.keywordPresent && keyword && (
                  <li className="text-sm text-red-600 flex items-center">
                    <span className="mr-2">✗</span>Hoofdkeyword ontbreekt
                  </li>
                )}
                {titleAnalysis.length < 30 && (
                  <li className="text-sm text-red-600 flex items-center">
                    <span className="mr-2">✗</span>Te kort (min. 30 tekens)
                  </li>
                )}
                {titleAnalysis.length > 60 && (
                  <li className="text-sm text-red-600 flex items-center">
                    <span className="mr-2">✗</span>Te lang (max. 60 tekens)
                  </li>
                )}
                {!titleAnalysis.hasNumbers && (
                  <li className="text-sm text-yellow-600 flex items-center">
                    <span className="mr-2">!</span>Overweeg cijfers toe te voegen
                  </li>
                )}
                {!titleAnalysis.hasPowerWords && (
                  <li className="text-sm text-yellow-600 flex items-center">
                    <span className="mr-2">!</span>Voeg krachtige woorden toe
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Generated Titles */}
      {generatedTitles.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Gegenereerde Titles</h2>
          
          <div className="space-y-4">
            {generatedTitles.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.formula}</p>
                  </div>
                  <div className="flex items-center space-x-3 ml-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreColor(item.score)}`}>
                      {item.score}/100
                    </span>
                    <span className={`text-sm font-medium ${getLengthColor(item.length)}`}>
                      {item.length} chars
                    </span>
                    <button
                      onClick={() => copyTitle(item.title)}
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                    >
                      Kopieer
                    </button>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className={`h-1 rounded-full ${item.score >= 80 ? 'bg-green-500' : item.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(item.length / targetLength * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Title Formulas */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bewezen Title Formules</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {TITLE_FORMULAS.map((formula, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">{formula.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Patroon: {formula.pattern}</p>
              <p className="text-xs text-gray-500">Voorbeeld: {formula.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">SEO Title Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Lengte Optimalisatie</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 30-60 tekens voor optimale weergave</li>
              <li>• Google toont ongeveer 50-60 tekens</li>
              <li>• Mobiel: vaak korter weergegeven</li>
              <li>• Vermijd afgekapte titles</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Keyword Plaatsing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Plaats hoofdkeyword vooraan</li>
              <li>• Gebruik natuurlijke woordvolgorde</li>
              <li>• Vermijd keyword stuffing</li>
              <li>• 1-2 keywords per title</li>
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
              Wat is de ideale lengte voor een page title?
            </summary>
            <p className="mt-2 text-gray-600">
              De ideale lengte is 30-60 tekens. Google toont meestal 50-60 tekens in zoekresultaten, afhankelijk van de breedte van letters. Zorg dat je belangrijkste informatie binnen deze limiet valt.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Waar moet ik mijn hoofdkeyword plaatsen?
            </summary>
            <p className="mt-2 text-gray-600">
              Plaats je hoofdkeyword bij voorkeur aan het begin van de title. Dit geeft meer SEO waarde en zorgt ervoor dat het keyword zichtbaar blijft, zelfs als de title wordt afgekapt.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Hoe kan ik mijn CTR verbeteren met page titles?
            </summary>
            <p className="mt-2 text-gray-600">
              Gebruik krachtige woorden, cijfers, emotionele triggers en maak een belofte die je pagina waarmaakt. Titels met "Beste", "Ultieme", "2024" en cijfers presteren vaak beter.
            </p>
          </details>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Hulp nodig met SEO Optimalisatie?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Niblah helpt je met complete SEO optimalisatie, van technische SEO tot content strategie voor betere rankings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary">
            Gratis SEO Audit
          </Button>
          <Button href="/services/seo-optimalisatie" variant="outline">
            Meer over SEO Services
          </Button>
        </div>
      </div>
    </div>
  )
}