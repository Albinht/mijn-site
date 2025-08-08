'use client'

import { useState, useEffect } from 'react'
import Button from '../../../../components/Button'

// Admin dashboard voor AI Headshots content management
export default function AIHeadshotsAdminPage() {
  const [contentStatus, setContentStatus] = useState(null)
  const [contentStats, setContentStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(null)

  // Load initial data
  useEffect(() => {
    loadContentStatus()
    loadContentStats()
  }, [])

  const loadContentStatus = async () => {
    try {
      const response = await fetch('/api/headshots/update-content?action=status')
      const data = await response.json()
      if (data.success) {
        setContentStatus(data.status)
      }
    } catch (error) {
      console.error('Failed to load content status:', error)
    }
  }

  const loadContentStats = async () => {
    try {
      const response = await fetch('/api/headshots/update-content?action=stats')
      const data = await response.json()
      if (data.success) {
        setContentStats(data.stats)
      }
    } catch (error) {
      console.error('Failed to load content stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleGeneratePrompts = async () => {
    console.log('Generate prompts button clicked')
    setGenerating(true)
    try {
      console.log('Sending request to /api/headshots/update-content')
      const response = await fetch('/api/headshots/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate_prompts' })
      })
      
      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)
      
      if (data.success) {
        alert(`Prompts gegenereerd! Outfits: ${data.results.outfits}, Backdrops: ${data.results.backdrops}`)
        await loadContentStatus()
      } else {
        alert('Fout: ' + data.error)
      }
    } catch (error) {
      console.error('Failed to generate prompts:', error)
      alert('Fout bij het genereren van prompts: ' + error.message)
    } finally {
      setGenerating(false)
    }
  }

  const handleGeneratePreviews = async (regenerate = false) => {
    setGenerating(true)
    setGenerationProgress({ stage: 'Initiating...', progress: 0 })
    
    try {
      const response = await fetch('/api/headshots/generate-previews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'all', 
          regenerate,
          style: 'professional' 
        })
      })
      
      const data = await response.json()
      if (data.success) {
        setGenerationProgress({ 
          stage: 'Completed', 
          progress: 100,
          summary: data.summary
        })
        alert(`Preview afbeeldingen gegenereerd! Outfits: ${data.summary.outfits}, Backdrops: ${data.summary.backdrops}`)
        await loadContentStatus()
      }
    } catch (error) {
      console.error('Failed to generate previews:', error)
      alert('Fout bij het genereren van previews: ' + error.message)
    } finally {
      setGenerating(false)
      setTimeout(() => setGenerationProgress(null), 3000)
    }
  }

  const handleFullUpdate = async () => {
    if (!confirm('Dit zal alle prompts en previews opnieuw genereren. Dit kan 10-30 minuten duren. Doorgaan?')) {
      return
    }

    setGenerating(true)
    setGenerationProgress({ stage: 'Updating all content...', progress: 0 })
    
    try {
      const response = await fetch('/api/headshots/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'full_update',
          regenerate: true
        })
      })
      
      const data = await response.json()
      if (data.success) {
        setGenerationProgress({ 
          stage: 'Completed', 
          progress: 100,
          results: data.results
        })
        alert('Volledige update voltooid!')
        await loadContentStatus()
        await loadContentStats()
      }
    } catch (error) {
      console.error('Failed to perform full update:', error)
      alert('Fout bij volledige update: ' + error.message)
    } finally {
      setGenerating(false)
      setTimeout(() => setGenerationProgress(null), 5000)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI Headshots <span className="bg-[#F7D8FA] px-2 rounded italic">Admin</span>
          </h1>
          <p className="text-gray-600">
            Beheer AI gegenereerde content voor outfits, backdrops en marketing materialen
          </p>
        </div>

        {/* Content Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Outfits Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Outfits Status</h2>
            {contentStatus && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Outfits</span>
                  <span className="font-semibold text-gray-900">{contentStatus.outfits.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">With Previews</span>
                  <span className="font-semibold text-green-600">{contentStatus.outfits.withPreviews}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${contentStatus.outfits.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {contentStatus.outfits.percentage}% completed
                </p>
              </div>
            )}
          </div>

          {/* Backdrops Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Backdrops Status</h2>
            {contentStatus && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Backdrops</span>
                  <span className="font-semibold text-gray-900">{contentStatus.backdrops.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">With Previews</span>
                  <span className="font-semibold text-blue-600">{contentStatus.backdrops.withPreviews}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${contentStatus.backdrops.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {contentStatus.backdrops.percentage}% completed
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Category Breakdown */}
        {contentStats && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Outfit Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Outfit Categories</h3>
              <div className="space-y-3">
                {contentStats.outfits.categories.map(category => (
                  <div key={category.category} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">{category.name}</div>
                      <div className="text-sm text-gray-500">{category.count} items</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">
                        {category.withPreviews}/{category.count}
                      </div>
                      <div className="text-xs text-gray-500">
                        {category.count > 0 ? ((category.withPreviews / category.count) * 100).toFixed(0) : 0}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backdrop Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Backdrop Categories</h3>
              <div className="space-y-3">
                {contentStats.backdrops.categories.map(category => (
                  <div key={category.category} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">{category.name}</div>
                      <div className="text-sm text-gray-500">{category.count} items</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-600">
                        {category.withPreviews}/{category.count}
                      </div>
                      <div className="text-xs text-gray-500">
                        {category.count > 0 ? ((category.withPreviews / category.count) * 100).toFixed(0) : 0}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Generation Progress */}
        {generationProgress && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Generation Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-800">{generationProgress.stage}</span>
                <span className="text-blue-800 font-semibold">{generationProgress.progress}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${generationProgress.progress}%` }}
                ></div>
              </div>
              {generationProgress.summary && (
                <div className="text-sm text-blue-700">
                  Generated: {generationProgress.summary.outfits} outfits, {generationProgress.summary.backdrops} backdrops
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Content Generation Actions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              onClick={handleGeneratePrompts}
              disabled={generating}
              variant="secondary"
              className="w-full"
            >
              {generating ? 'Genereren...' : 'Generate Prompts'}
            </Button>
            
            <Button
              onClick={() => handleGeneratePreviews(false)}
              disabled={generating}
              className="w-full"
            >
              {generating ? 'Genereren...' : 'Generate Missing Previews'}
            </Button>
            
            <Button
              onClick={() => handleGeneratePreviews(true)}
              disabled={generating}
              variant="secondary"
              className="w-full"
            >
              {generating ? 'Genereren...' : 'Regenerate All Previews'}
            </Button>
            
            <Button
              onClick={handleFullUpdate}
              disabled={generating}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              {generating ? 'Updating...' : 'Full Update (Long)'}
            </Button>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Important Notes:</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Preview generation gebruikt de Replicate API en kost credits</li>
              <li>• Full Update kan 10-30 minuten duren afhankelijk van API snelheid</li>
              <li>• Generated afbeeldingen worden opgeslagen in S3 met lifecycle policies</li>
              <li>• Zorg dat REPLICATE_API_TOKEN is geconfigureerd in environment variables</li>
            </ul>
          </div>
        </div>

        {/* API Configuration */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">API Configuration</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Replicate API</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                process.env.REPLICATE_API_TOKEN ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {process.env.REPLICATE_API_TOKEN ? 'Configured' : 'Not Configured'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">AWS S3</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                process.env.AWS_ACCESS_KEY_ID ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {process.env.AWS_ACCESS_KEY_ID ? 'Configured' : 'Mock Mode'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}