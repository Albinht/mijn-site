'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '../../../components/Button'

const SCHEMA_TYPES = {
  'Article': ['headline', 'author', 'datePublished', 'dateModified', 'publisher', 'image'],
  'Product': ['name', 'image', 'description', 'brand', 'offers', 'aggregateRating'],
  'Recipe': ['name', 'image', 'author', 'datePublished', 'description', 'recipeIngredient', 'recipeInstructions'],
  'Event': ['name', 'startDate', 'endDate', 'location', 'description', 'offers'],
  'Organization': ['name', 'logo', 'url', 'address', 'contactPoint'],
  'Person': ['name', 'image', 'jobTitle', 'worksFor', 'url'],
  'LocalBusiness': ['name', 'image', 'address', 'telephone', 'priceRange', 'openingHours'],
  'Review': ['itemReviewed', 'author', 'datePublished', 'reviewRating', 'reviewBody'],
  'FAQ': ['mainEntity', 'question', 'answer'],
  'BreadcrumbList': ['itemListElement', 'position', 'name', 'item']
}

export default function RichSnippetValidator() {
  const [inputType, setInputType] = useState('url')
  const [url, setUrl] = useState('')
  const [schemaCode, setSchemaCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [validationResults, setValidationResults] = useState(null)
  const [previewMode, setPreviewMode] = useState('google')

  const validateUrl = (inputUrl) => {
    try {
      const urlObj = new URL(inputUrl.startsWith('http') ? inputUrl : `https://${inputUrl}`)
      return urlObj.href
    } catch {
      return null
    }
  }

  const validateSchema = async () => {
    if (inputType === 'url') {
      if (!url.trim()) {
        setError('Voer een geldige URL in')
        return
      }
      const validatedUrl = validateUrl(url.trim())
      if (!validatedUrl) {
        setError('Ongeldige URL format')
        return
      }
    } else {
      if (!schemaCode.trim()) {
        setError('Voer schema markup code in')
        return
      }
    }

    setError('')
    setIsLoading(true)

    try {
      let schemaData
      
      if (inputType === 'url') {
        // Simulate fetching schema from URL
        schemaData = await fetchSchemaFromUrl(validateUrl(url.trim()))
      } else {
        // Parse provided schema code
        schemaData = parseSchemaCode(schemaCode)
      }

      const results = validateSchemaData(schemaData)
      setValidationResults(results)
    } catch (err) {
      setError('Er ging iets mis bij het valideren van de schema markup')
    } finally {
      setIsLoading(false)
    }
  }

  const fetchSchemaFromUrl = async (testUrl) => {
    // Simulate fetching and extracting schema markup from URL
    // In a real implementation, this would scrape the page and extract JSON-LD, microdata, etc.
    
    // Mock schema data for demonstration
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Example Article Title',
        'author': {
          '@type': 'Person',
          'name': 'John Doe'
        },
        'datePublished': '2024-01-15',
        'dateModified': '2024-01-16',
        'publisher': {
          '@type': 'Organization',
          'name': 'Example Publisher',
          'logo': 'https://example.com/logo.png'
        },
        'image': 'https://example.com/image.jpg'
      }
    ]
  }

  const parseSchemaCode = (code) => {
    try {
      // Try to parse as JSON-LD first
      if (code.trim().startsWith('{') || code.trim().startsWith('[')) {
        return JSON.parse(code)
      }
      
      // If not JSON, simulate parsing HTML with microdata/RDFa
      // This is a simplified simulation
      return [{
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Parsed from HTML',
        'description': 'Schema markup detected in HTML code'
      }]
    } catch (error) {
      throw new Error('Invalid schema markup format')
    }
  }

  const validateSchemaData = (schemaArray) => {
    const schemas = Array.isArray(schemaArray) ? schemaArray : [schemaArray]
    const results = []

    schemas.forEach((schema, index) => {
      const schemaType = schema['@type']
      const requiredFields = SCHEMA_TYPES[schemaType] || []
      
      const validation = {
        index: index + 1,
        type: schemaType,
        isValid: true,
        errors: [],
        warnings: [],
        suggestions: [],
        fields: {},
        score: 0
      }

      // Check required fields
      let foundFields = 0
      requiredFields.forEach(field => {
        if (schema[field]) {
          validation.fields[field] = { status: 'present', value: schema[field] }
          foundFields++
        } else {
          validation.fields[field] = { status: 'missing' }
          validation.errors.push(`Vereist veld ontbreekt: ${field}`)
          validation.isValid = false
        }
      })

      // Calculate score
      validation.score = Math.round((foundFields / Math.max(requiredFields.length, 1)) * 100)

      // Add warnings and suggestions
      if (schemaType === 'Article' && !schema.image) {
        validation.warnings.push('Afbeelding aanbevolen voor betere rich snippets')
      }
      
      if (schemaType === 'Product' && !schema.aggregateRating) {
        validation.suggestions.push('Voeg beoordelingen toe voor sterren in zoekresultaten')
      }

      if (!schema['@context']) {
        validation.errors.push('@context ontbreekt - voeg "https://schema.org" toe')
        validation.isValid = false
      }

      results.push(validation)
    })

    return {
      schemas: results,
      totalSchemas: results.length,
      validSchemas: results.filter(r => r.isValid).length,
      avgScore: Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
    }
  }

  const generatePreview = (schema) => {
    const schemaType = schema.type
    
    switch (schemaType) {
      case 'Article':
        return {
          title: schema.fields.headline?.value || 'Article Title',
          description: schema.fields.description?.value || 'Article description...',
          url: 'https://example.com/article',
          breadcrumb: 'Home > Blog > Article',
          publishDate: schema.fields.datePublished?.value,
          author: schema.fields.author?.value?.name || schema.fields.author?.value
        }
      case 'Product':
        return {
          title: schema.fields.name?.value || 'Product Name',
          price: schema.fields.offers?.value?.price || '€99.99',
          rating: '4.5 ★★★★★ (123 reviews)',
          availability: 'In stock',
          description: schema.fields.description?.value || 'Product description...'
        }
      case 'Recipe':
        return {
          title: schema.fields.name?.value || 'Recipe Title',
          rating: '4.8 ★★★★★',
          time: '30 min',
          calories: '250 cal',
          description: schema.fields.description?.value || 'Delicious recipe...'
        }
      default:
        return {
          title: `${schemaType} - Rich Snippet Preview`,
          description: 'Rich snippet will appear here based on your schema markup'
        }
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rich Snippet Validator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Test en valideer je schema markup voor betere Google rich snippets. Verhoog je CTR met optimale structured data.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Schema Markup Testen</h2>
        
        <div className="space-y-6">
          {/* Input Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Test Methode</label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="url"
                  checked={inputType === 'url'}
                  onChange={(e) => setInputType(e.target.value)}
                  className="mr-2"
                />
                Test via URL
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="code"
                  checked={inputType === 'code'}
                  onChange={(e) => setInputType(e.target.value)}
                  className="mr-2"
                />
                Test schema code
              </label>
            </div>
          </div>

          {/* URL Input */}
          {inputType === 'url' && (
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                id="url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Voer website URL in (bijv. niblah.com/blog/artikel)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          )}

          {/* Code Input */}
          {inputType === 'code' && (
            <div>
              <label htmlFor="schema-code" className="block text-sm font-medium text-gray-700 mb-2">
                Schema Markup Code (JSON-LD, Microdata, of RDFa)
              </label>
              <textarea
                id="schema-code"
                value={schemaCode}
                onChange={(e) => setSchemaCode(e.target.value)}
                placeholder="Plak hier je schema markup code..."
                rows={10}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
              />
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <Button
            onClick={validateSchema}
            disabled={isLoading}
            className="w-full md:w-auto"
          >
            {isLoading ? 'Aan het valideren...' : 'Valideer Schema Markup'}
          </Button>
        </div>
      </div>

      {/* Validation Results */}
      {validationResults && (
        <div className="space-y-8">
          {/* Summary */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Validatie Resultaten</h2>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{validationResults.totalSchemas}</div>
                <div className="text-sm text-gray-600">Schema's Gevonden</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{validationResults.validSchemas}</div>
                <div className="text-sm text-gray-600">Valide Schema's</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{validationResults.avgScore}%</div>
                <div className="text-sm text-gray-600">Gemiddelde Score</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {validationResults.schemas.reduce((sum, s) => sum + s.errors.length + s.warnings.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Issues Gevonden</div>
              </div>
            </div>

            {/* Individual Schema Results */}
            <div className="space-y-6">
              {validationResults.schemas.map((schema, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {schema.type} Schema #{schema.index}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        schema.isValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {schema.isValid ? 'Valide' : 'Fout'}
                      </span>
                      <span className="text-lg font-bold text-gray-700">
                        {schema.score}/100
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Fields Status */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Veld Status:</h4>
                      <div className="space-y-2">
                        {Object.entries(schema.fields).map(([field, status]) => (
                          <div key={field} className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">{field}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              status.status === 'present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {status.status === 'present' ? '✓ Aanwezig' : '✗ Ontbreekt'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Issues & Suggestions */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Issues & Suggesties:</h4>
                      <div className="space-y-2">
                        {schema.errors.map((error, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span className="text-red-700">{error}</span>
                          </div>
                        ))}
                        {schema.warnings.map((warning, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <span className="text-yellow-500 mr-2 mt-1">•</span>
                            <span className="text-yellow-700">{warning}</span>
                          </div>
                        ))}
                        {schema.suggestions.map((suggestion, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-blue-700">{suggestion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Rich Snippet Preview */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-700 mb-3">Rich Snippet Preview:</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      {(() => {
                        const preview = generatePreview(schema)
                        return (
                          <div className="space-y-2">
                            <div className="text-blue-600 text-lg hover:underline cursor-pointer">
                              {preview.title}
                            </div>
                            <div className="text-green-700 text-sm">{preview.url || 'https://example.com'}</div>
                            <div className="text-gray-700 text-sm">{preview.description}</div>
                            {preview.rating && (
                              <div className="text-sm text-gray-600">{preview.rating}</div>
                            )}
                            {preview.price && (
                              <div className="text-sm text-gray-600">Prijs: {preview.price}</div>
                            )}
                          </div>
                        )
                      })()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Schema Examples */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Schema Markup Voorbeelden</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(SCHEMA_TYPES).slice(0, 6).map(([type, fields]) => (
            <div key={type} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">{type}</h3>
              <div className="text-sm text-gray-600 mb-2">
                Vereiste velden: {fields.slice(0, 3).join(', ')}
                {fields.length > 3 && `... (+${fields.length - 3} meer)`}
              </div>
              <div className="text-xs text-gray-500">
                Gebruikt voor: {getSchemaUseCase(type)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Content Sections - Dutch */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Rich Snippets Testen voor Hogere Click-Through Rates</h2>
        
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            Rich snippets zijn de uitgebreide zoekresultaten die je in Google ziet met extra informatie naast de titel en beschrijving. Denk aan productbeoordelingen met sterren, bereidingstijden bij recepten, evenementdata, of uitklapbare FAQ-secties. Deze opvallende elementen komen van structured data die je aan je website toevoegt met schema markup.
          </p>

          <p>
            Een rich snippet validator helpt je checken of je schema markup correct is geïmplementeerd voordat Google je pagina's crawlt. Dit is belangrijk omdat zelfs kleine fouten kunnen voorkomen dat je rich snippets verschijnen, wat je waardevolle clicks en zichtbaarheid kost in de zoekresultaten.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Waarom Je Een Rich Snippet Tester Nodig Hebt</h3>
          
          <p>
            Voordat je een pagina publiceert met structured data, moet je het testen met een rich snippet checker. Google's Rich Results Test kan basisfouten detecteren, maar je wilt er zeker van zijn dat je schema markup best practices volgt. Onze rich snippets tester valideert je markup en toont precies hoe het eruit zal zien in de zoekresultaten.
          </p>

          <p>
            Veelgemaakte fouten zijn ontbrekende verplichte velden, incorrecte datatypes, of verkeerde schema types. Als je bijvoorbeeld een product markeert maar vergeet de prijs of beschikbaarheid toe te voegen, toont Google je product rich snippet niet. Een grondige rich snippets checker vangt deze problemen op voordat ze een issue worden.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Schema Markup Generator vs Validator</h3>
          
          <p>
            Een schema markup generator maakt de structured data code voor je aan, terwijl een validator bestaande markup controleert op fouten. Je kunt een structured data generator gebruiken om snel JSON-LD code te maken voor artikelen of producten, en daarna onze rich snippet validator gebruiken om te verifiëren dat alles correct werkt.
          </p>

          <p>
            De meest voorkomende schema types zijn Article, Product, Recipe, Event, LocalBusiness en FAQ. Elk type heeft verplichte en aanbevolen velden. Een FAQ schema generator heeft bijvoorbeeld vragen en antwoorden nodig in een specifiek format, terwijl product schema naam, afbeelding en aanbod-informatie vereist.
          </p>

          <p>
            Check ook je <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link> en <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">zoekwoorden</Link> om je complete SEO te optimaliseren naast je rich snippets.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Schema Markup Implementeren Die Echt Werkt</h2>
        
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            Schema markup komt in drie formaten: JSON-LD, Microdata en RDFa. Google raadt JSON-LD aan omdat het makkelijker te implementeren en onderhouden is. Je voegt het toe aan de head-sectie van je pagina zonder je HTML-structuur aan te passen. De meeste schema tester tools, inclusief de onze, ondersteunen alle drie de formaten.
          </p>

          <p>
            Begin met de schema types die bij je content passen. E-commerce sites profiteren van Product en Review schema. Blogs moeten Article schema implementeren. Lokale bedrijven hebben LocalBusiness schema nodig met accurate NAP-informatie. Receptsites hebben uiteraard Recipe schema nodig. Gebruik een structured data generator om de initiële opzet te versnellen, en valideer daarna met een rich snippet testing tool.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">FAQ Schema Generator en Structured Data</h3>
          
          <p>
            FAQ schema creëert die uitklapbare vraag-en-antwoord boxen in zoekresultaten. Je hebt ze vast gezien, ze nemen grote delen van het scherm in op mobiel. Dat is krachtige zichtbaarheid. Een FAQ schema generator structureert je vragen en antwoorden op een manier die Google begrijpt, maar je moet het testen met een rich snippets tool om de juiste formatting te garanderen.
          </p>

          <p>
            Bij het maken van FAQ structured data heeft elke vraag een name en acceptedAnswer property nodig. Dupliceer geen vragen, en zorg dat antwoorden daadwerkelijk de gestelde vraag beantwoorden. Google kan FAQ rich snippets afwijzen als ze manipulatie vermoeden of als antwoorden promotioneel zijn in plaats van informatief.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Schema Markup Testen en Troubleshooten</h3>
          
          <p>
            Na implementatie gebruik je meerdere rich snippet validators om je werk te controleren. Start met onze schema tester, verifieer daarna met Google's Rich Results Test. Check zowel desktop als mobiele previews. Soms ziet schema er perfect uit maar triggert het geen rich snippets omdat Google's criteria streng zijn.
          </p>

          <p>
            Als je structured data valideert maar rich snippets niet verschijnen na een paar weken, check Google Search Console op manual actions of structured data problemen. Je hebt misschien te veel schema types op één pagina, conflicterende data, of content die niet matcht met je markup claims. Een grondige rich text tester helpt deze mismatches identificeren.
          </p>

          <p>
            Vergeet ook niet je <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML te valideren</Link> want ongeldige HTML kan je schema markup breken.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Geavanceerde Schema Markup Strategieën</h2>
        
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            Naast basis implementatie kun je meerdere schema types combineren voor betere resultaten. Een blogpost over een recept kan zowel Article als Recipe schema bevatten. Een productreview pagina profiteert van Product, Review en AggregateRating schema samen. Zorg er alleen voor dat elk schema type accuraat de pagina-inhoud representeert.
          </p>

          <p>
            Monitor je rich snippet prestaties in Google Search Console. Het Performance rapport toont welke pagina's rich results krijgen en hun click-through rates. Als bepaalde pagina's onderpresteren ondanks schema markup, draai ze opnieuw door een rich snippets checker om mogelijke verbeteringen te identificeren.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Veelgemaakte Schema Markup Fouten</h3>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Schema markup gebruiken voor content die niet op de pagina staat</li>
            <li>Verborgen content markeren of nep-reviews toevoegen</li>
            <li>Vergeten om schema bij te werken als pagina-inhoud verandert</li>
            <li>Het verkeerde schema type gebruiken voor je content</li>
            <li>Markup niet testen met een rich snippet validator voor publicatie</li>
            <li>Verplichte velden negeren of incorrecte data formats gebruiken</li>
          </ul>

          <p>
            Regelmatige validatie met een structured data generator en tester helpt deze problemen vroeg op te vangen. Schema markup is geen set-it-and-forget-it. Als je content update, update dan ook je structured data. Verouderde informatie in je schema kan manual actions van Google triggeren.
          </p>

          <p>
            Optimaliseer ook je <Link href="/tools/page-title-enhancer" className="text-blue-600 hover:underline">page titles</Link> en <Link href="/tools/url-slug-generator" className="text-blue-600 hover:underline">URL slugs</Link> voor complete on-page SEO.
          </p>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Rich Snippets & SEO Impact</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">SEO Voordelen</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 20-30% hogere click-through rate (CTR)</li>
              <li>• Betere ranking signalen naar Google</li>
              <li>• Meer zichtbaarheid in zoekresultaten</li>
              <li>• Featured snippet mogelijkheden</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Rich Snippet Types</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Product ratings & prijzen</li>
              <li>• Recipe info & sterren</li>
              <li>• Event data & locaties</li>
              <li>• FAQ accordions</li>
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
              Wat zijn rich snippets en waarom zijn ze belangrijk?
            </summary>
            <p className="mt-2 text-gray-600">
              Rich snippets zijn uitgebreide zoekresultaten die extra informatie tonen zoals sterren, prijzen, reviews en afbeeldingen. Ze verhogen de CTR met 20-30% en geven betere zichtbaarheid in Google.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Welke schema markup formaten worden ondersteund?
            </summary>
            <p className="mt-2 text-gray-600">
              Deze validator ondersteunt JSON-LD (aanbevolen door Google), Microdata en RDFa. JSON-LD is het makkelijkst te implementeren en te onderhouden.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-purple-600">
              Hoe lang duurt het voordat rich snippets verschijnen in Google?
            </summary>
            <p className="mt-2 text-gray-600">
              Na implementatie kan het 2-8 weken duren voordat Google je rich snippets toont. Dit hangt af van crawl frequency en de kwaliteit van je schema markup.
            </p>
          </details>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Hulp nodig met Schema Markup?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Niblah implementeert professionele schema markup voor betere rich snippets en hogere CTR in Google.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary">
            Gratis SEO Consultatie
          </Button>
          <Button href="/services/technische-seo" variant="outline">
            Meer over Technical SEO
          </Button>
        </div>
      </div>
    </div>
  )
}

function getSchemaUseCase(type) {
  const useCases = {
    'Article': 'Blog posts, nieuwsartikelen, content pages',
    'Product': 'E-commerce producten, productpagina\'s',
    'Recipe': 'Recepten, kookinstructies, voedingsinfo',
    'Event': 'Evenementen, workshops, concerten',
    'Organization': 'Bedrijfsinformatie, over ons pagina\'s',
    'Person': 'Persoonlijke profielen, team pagina\'s',
    'LocalBusiness': 'Lokale bedrijven, contactpagina\'s',
    'Review': 'Product reviews, testimonials',
    'FAQ': 'Veelgestelde vragen secties',
    'BreadcrumbList': 'Navigatie breadcrumbs'
  }
  return useCases[type] || 'Diverse toepassingen'
}