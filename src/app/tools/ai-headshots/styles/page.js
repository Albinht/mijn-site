'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Button from '../../../../components/Button'
import { getOutfitsForPlan, OUTFIT_CATEGORIES } from '../data/outfits'
import { getBackdropsForPlan, BACKDROP_CATEGORIES } from '../data/backdrops'

// Framing options
const FRAMING_OPTIONS = {
  crop: {
    'head-shoulders': { name: 'Head & Shoulders', description: 'Close-up professional headshot' },
    'torso': { name: 'Torso Shot', description: 'Upper body business photo' }
  },
  orientation: {
    'portrait': { name: 'Portrait', description: 'Vertical orientation (LinkedIn)' },
    'landscape': { name: 'Landscape', description: 'Horizontal orientation (websites)' },
    'square': { name: 'Square', description: 'Square format (social media)' }
  }
}

function StylesPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get job details from URL
  const jobId = searchParams.get('jobId')
  const planId = searchParams.get('plan')
  const userEmail = searchParams.get('email')

  // State management
  const [selectedOutfits, setSelectedOutfits] = useState([])
  const [selectedBackdrops, setSelectedBackdrops] = useState([])
  const [selectedFraming, setSelectedFraming] = useState({
    crop: 'head-shoulders',
    orientation: 'portrait'
  })
  const [jobData, setJobData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [outfitFilter, setOutfitFilter] = useState('all')
  const [backdropFilter, setBackdropFilter] = useState('all')
  const [availableOutfits, setAvailableOutfits] = useState([])
  const [availableBackdrops, setAvailableBackdrops] = useState([])
  const [previewCache, setPreviewCache] = useState({ outfits: {}, backdrops: {} })

  // Load job data
  useEffect(() => {
    if (!jobId || !planId || !userEmail) {
      router.push('/tools/ai-headshots')
      return
    }

    // Mock job data based on plan
    const planDetails = {
      basic: { name: 'Basic', maxCombos: 4 },
      professional: { name: 'Professional', maxCombos: 10 },
      executive: { name: 'Executive', maxCombos: 15 }
    }

    setJobData({
      id: jobId,
      planId: planId,
      planName: planDetails[planId]?.name || planId,
      maxCombos: planDetails[planId]?.maxCombos || 4,
      userEmail: userEmail
    })

    // Load available outfits and backdrops based on plan
    const planOutfits = getOutfitsForPlan(planId)
    const planBackdrops = getBackdropsForPlan(planId)
    
    setAvailableOutfits(planOutfits)
    setAvailableBackdrops(planBackdrops)

    // Load preview cache
    loadPreviewCache()

    setLoading(false)
  }, [jobId, planId, userEmail, router])

  // Load preview cache from API
  const loadPreviewCache = async () => {
    try {
      const response = await fetch('/api/headshots/preview-cache')
      const data = await response.json()
      
      if (data.success) {
        setPreviewCache(data.cache)
        console.log('📸 Loaded preview cache:', data.cache.stats)
      }
    } catch (error) {
      console.error('Failed to load preview cache:', error)
    }
  }

  // Toggle outfit selection
  const toggleOutfit = (outfitId) => {
    setSelectedOutfits(prev => 
      prev.includes(outfitId)
        ? prev.filter(id => id !== outfitId)
        : [...prev, outfitId]
    )
  }

  // Toggle backdrop selection
  const toggleBackdrop = (backdropId) => {
    setSelectedBackdrops(prev =>
      prev.includes(backdropId)
        ? prev.filter(id => id !== backdropId)
        : [...prev, backdropId]
    )
  }

  // Get filtered outfits and backdrops
  const getFilteredOutfits = () => {
    if (outfitFilter === 'all') return availableOutfits
    return availableOutfits.filter(outfit => outfit.category === outfitFilter)
  }

  const getFilteredBackdrops = () => {
    if (backdropFilter === 'all') return availableBackdrops
    return availableBackdrops.filter(backdrop => backdrop.category === backdropFilter)
  }

  // Calculate total combinations
  const totalCombinations = selectedOutfits.length * selectedBackdrops.length
  const canProceed = totalCombinations > 0 && totalCombinations <= jobData?.maxCombos

  // Handle proceed to payment
  const handleProceedToPayment = async () => {
    if (!canProceed) return

    try {
      // Save style selections to job
      const response = await fetch('/api/headshots/jobs', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobId,
          updates: {
            styleSelections: {
              outfits: selectedOutfits,
              backdrops: selectedBackdrops,
              combinations: totalCombinations,
              framing: selectedFraming
            }
          }
        })
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to payment
        const params = new URLSearchParams({
          jobId,
          plan: planId,
          email: userEmail
        })
        
        router.push(`/tools/ai-headshots/payment?${params.toString()}`)
      } else {
        console.error('Failed to save styles:', data.error)
        alert('Failed to save selections. Please try again.')
      }
    } catch (error) {
      console.error('Error saving styles:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading styles...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="bg-[#F7D8FA] px-2 rounded italic">Styles</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Step 2 of 4 • <strong>{jobData.planName}</strong> Package • {jobData.userEmail}
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: '50%' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className="text-blue-600">Upload</span>
              <span className="text-blue-600 font-medium">Styles</span>
              <span>Payment</span>
              <span>Processing</span>
            </div>
          </div>
        </div>

        {/* Selection Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Style Combinations</h3>
            <div className="text-3xl font-bold mb-2">
              <span className={totalCombinations > jobData.maxCombos ? 'text-red-600' : 'text-green-600'}>
                {totalCombinations}
              </span>
              <span className="text-gray-400"> / {jobData.maxCombos}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              {selectedOutfits.length} outfit{selectedOutfits.length !== 1 ? 's' : ''} × {selectedBackdrops.length} backdrop{selectedBackdrops.length !== 1 ? 's' : ''} = {totalCombinations} combination{totalCombinations !== 1 ? 's' : ''}
            </p>
            
            {totalCombinations > jobData.maxCombos && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">
                  Too many combinations! Please reduce your selections to {jobData.maxCombos} or fewer.
                </p>
              </div>
            )}
            
            {totalCombinations === 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  Please select at least one outfit and one backdrop to continue.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Framing Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Photo Framing Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Crop Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Crop Style</h3>
              <div className="space-y-2">
                {Object.entries(FRAMING_OPTIONS.crop).map(([key, option]) => (
                  <label key={key} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="crop"
                      value={key}
                      checked={selectedFraming.crop === key}
                      onChange={(e) => setSelectedFraming(prev => ({ ...prev, crop: e.target.value }))}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{option.name}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Orientation Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Orientation</h3>
              <div className="space-y-2">
                {Object.entries(FRAMING_OPTIONS.orientation).map(([key, option]) => (
                  <label key={key} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="orientation"
                      value={key}
                      checked={selectedFraming.orientation === key}
                      onChange={(e) => setSelectedFraming(prev => ({ ...prev, orientation: e.target.value }))}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{option.name}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Outfits Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Choose Outfits</h2>
              <span className="text-sm text-gray-500">{selectedOutfits.length} selected</span>
            </div>
            
            {/* Outfit Category Filter */}
            <div className="mb-4">
              <select
                value={outfitFilter}
                onChange={(e) => setOutfitFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All Categories ({availableOutfits.length})</option>
                {Object.entries(OUTFIT_CATEGORIES).map(([key, category]) => {
                  const count = availableOutfits.filter(o => o.category === key).length
                  return count > 0 ? (
                    <option key={key} value={key}>{category.name} ({count})</option>
                  ) : null
                })}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {getFilteredOutfits().map((outfit) => {
                const isSelected = selectedOutfits.includes(outfit.id)
                const isLocked = outfit.tier !== 'free' && planId === 'basic'

                return (
                  <div
                    key={outfit.id}
                    className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : isLocked
                          ? 'border-gray-200 bg-gray-50 opacity-60'
                          : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => !isLocked && toggleOutfit(outfit.id)}
                  >
                    {/* Outfit Preview */}
                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-3 overflow-hidden relative">
                      {(outfit.previewUrl || previewCache.outfits[outfit.id]?.previewUrl) ? (
                        <img 
                          src={previewCache.outfits[outfit.id]?.previewUrl || outfit.previewUrl} 
                          alt={outfit.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to icon if image fails to load
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div className="w-full h-full flex items-center justify-center absolute inset-0" style={{display: (outfit.previewUrl || previewCache.outfits[outfit.id]?.previewUrl) ? 'none' : 'flex'}}>
                        <span className="text-gray-600 text-2xl">👔</span>
                      </div>
                    </div>

                    <h3 className="font-medium text-gray-900 mb-1">{outfit.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{outfit.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded ${
                        OUTFIT_CATEGORIES[outfit.category] 
                          ? `bg-${OUTFIT_CATEGORIES[outfit.category].color}-100 text-${OUTFIT_CATEGORIES[outfit.category].color}-800`
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {OUTFIT_CATEGORIES[outfit.category]?.name || outfit.category}
                      </span>
                      
                      {isLocked && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          {outfit.tier}
                        </span>
                      )}
                      
                      {isSelected && (
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Backdrops Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Choose Backdrops</h2>
              <span className="text-sm text-gray-500">{selectedBackdrops.length} selected</span>
            </div>
            
            {/* Backdrop Category Filter */}
            <div className="mb-4">
              <select
                value={backdropFilter}
                onChange={(e) => setBackdropFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All Categories ({availableBackdrops.length})</option>
                {Object.entries(BACKDROP_CATEGORIES).map(([key, category]) => {
                  const count = availableBackdrops.filter(b => b.category === key).length
                  return count > 0 ? (
                    <option key={key} value={key}>{category.name} ({count})</option>
                  ) : null
                })}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {getFilteredBackdrops().map((backdrop) => {
                const isSelected = selectedBackdrops.includes(backdrop.id)
                const isLocked = backdrop.tier !== 'free' && planId === 'basic'

                return (
                  <div
                    key={backdrop.id}
                    className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : isLocked
                          ? 'border-gray-200 bg-gray-50 opacity-60'
                          : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => !isLocked && toggleBackdrop(backdrop.id)}
                  >
                    {/* Backdrop Preview */}
                    <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-3 overflow-hidden relative">
                      {(backdrop.previewUrl || previewCache.backdrops[backdrop.id]?.previewUrl) ? (
                        <img 
                          src={previewCache.backdrops[backdrop.id]?.previewUrl || backdrop.previewUrl} 
                          alt={backdrop.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to icon if image fails to load
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div className="w-full h-full flex items-center justify-center absolute inset-0" style={{display: (backdrop.previewUrl || previewCache.backdrops[backdrop.id]?.previewUrl) ? 'none' : 'flex'}}>
                        <span className="text-blue-800 text-2xl">🏢</span>
                      </div>
                    </div>

                    <h3 className="font-medium text-gray-900 mb-1">{backdrop.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{backdrop.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded ${
                        BACKDROP_CATEGORIES[backdrop.category]
                          ? `bg-${BACKDROP_CATEGORIES[backdrop.category].color}-100 text-${BACKDROP_CATEGORIES[backdrop.category].color}-800`
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {BACKDROP_CATEGORIES[backdrop.category]?.name || backdrop.category}
                      </span>
                      
                      {isLocked && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          {backdrop.tier}
                        </span>
                      )}
                      
                      {isSelected && (
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 max-w-md mx-auto">
          <Link
            href={`/tools/ai-headshots/upload?jobId=${jobId}&plan=${planId}&email=${userEmail}`}
            className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-center"
          >
            ← Back to Upload
          </Link>
          <Button 
            onClick={handleProceedToPayment}
            disabled={!canProceed}
            className={`flex-1 py-3 px-6 ${
              !canProceed ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Continue to Payment →
          </Button>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-[#F7D8FA] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Choose your backdrop and <span className="bg-white px-2 rounded italic">outfit</span>
          </h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Choose the location of your shoot and pick an outfit from a wide range of options. 
            You'll get 10 headshots per combination, to make sure you get the perfect shot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl mb-2">📍</div>
              <div className="font-medium">1. Pick the backdrop of your choice</div>
            </div>
            <div>
              <div className="text-2xl mb-2">👔</div>
              <div className="font-medium">2. Select your matching outfit</div>
            </div>
            <div>
              <div className="text-2xl mb-2">📸</div>
              <div className="font-medium">3. Get 10 headshots per combination</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="text-center">
                <span className="font-medium text-gray-900">👔 {availableOutfits.length}+ Outfits</span>
                <div>Professional styles across {Object.keys(OUTFIT_CATEGORIES).length} categories</div>
              </div>
              <div className="text-center">
                <span className="font-medium text-gray-900">🏢 {availableBackdrops.length}+ Backdrops</span>
                <div>Premium backgrounds across {Object.keys(BACKDROP_CATEGORIES).length} environments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Loading component that matches the design
function StylesLoading() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="bg-[#F7D8FA] px-2 rounded italic">Style</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Loading style options...
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: '50%' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className="text-blue-600">Upload</span>
              <span className="text-blue-600 font-medium">Styles</span>
              <span>Payment</span>
              <span>Processing</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </div>
    </main>
  )
}

// Suspense wrapper component
export default function StylesPage() {
  return (
    <Suspense fallback={<StylesLoading />}>
      <StylesPageContent />
    </Suspense>
  )
}