'use client'

import { useState, useCallback } from 'react'

export default function LogoUploader({ onLogoUpload, uploadedLogo, isActive }) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState('')

  const validateFile = (file) => {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!validTypes.includes(file.type)) {
      return 'Alleen PNG, JPG, SVG en WEBP bestanden zijn toegestaan'
    }

    if (file.size > maxSize) {
      return 'Bestand mag maximaal 5MB groot zijn'
    }

    return null
  }

  const processFile = useCallback(async (file) => {
    const validationError = validateFile(file)
    if (validationError) {
      setError(validationError)
      return
    }

    setIsUploading(true)
    setError('')

    try {
      const reader = new FileReader()
      reader.onload = (e) => {
        const logoData = {
          file: file,
          url: e.target.result,
          name: file.name,
          type: file.type,
          size: file.size
        }
        
        onLogoUpload(logoData)
        setIsUploading(false)
      }
      
      reader.onerror = () => {
        setError('Er ging iets mis bij het uploaden van je logo')
        setIsUploading(false)
      }

      reader.readAsDataURL(file)
    } catch (err) {
      setError('Er ging iets mis bij het verwerken van je bestand')
      setIsUploading(false)
    }
  }, [onLogoUpload])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      processFile(files[0])
    }
  }, [processFile])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleFileSelect = useCallback((e) => {
    const files = e.target.files
    if (files.length > 0) {
      processFile(files[0])
    }
  }, [processFile])

  const sampleLogos = [
    { name: 'Tech Startup', url: '/api/placeholder/logo-tech', type: 'svg' },
    { name: 'Creative Agency', url: '/api/placeholder/logo-creative', type: 'svg' },
    { name: 'Restaurant', url: '/api/placeholder/logo-restaurant', type: 'svg' }
  ]

  const handleSampleSelect = async (sample) => {
    setIsUploading(true)
    try {
      // For demo purposes, we'll create a simple SVG
      const svgContent = `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="50" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2"/>
        <text x="60" y="65" text-anchor="middle" fill="white" font-size="16" font-weight="bold">${sample.name.charAt(0)}</text>
      </svg>`
      
      const blob = new Blob([svgContent], { type: 'image/svg+xml' })
      const file = new File([blob], `${sample.name.toLowerCase().replace(' ', '-')}-logo.svg`, { type: 'image/svg+xml' })
      
      processFile(file)
    } catch (err) {
      setError('Er ging iets mis bij het laden van het voorbeeld logo')
      setIsUploading(false)
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${isActive ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          1. Upload je logo
        </h3>
        {uploadedLogo && (
          <div className="flex items-center text-green-600">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Geüpload
          </div>
        )}
      </div>

      {!uploadedLogo ? (
        <div>
          {/* Upload Zone */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            {isUploading ? (
              <div className="flex flex-col items-center">
                <svg className="animate-spin w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-gray-600">Logo wordt verwerkt...</p>
              </div>
            ) : (
              <div>
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Sleep je logo hierheen
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  of klik om een bestand te selecteren
                </p>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/svg+xml,image/webp"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Bestand selecteren
                </label>
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG, SVG, WEBP (max 5MB)
                </p>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Sample Logos */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Of probeer een voorbeeld logo:</p>
            <div className="grid grid-cols-3 gap-3">
              {sampleLogos.map((sample, index) => (
                <button
                  key={index}
                  onClick={() => handleSampleSelect(sample)}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                  disabled={isUploading}
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {sample.name.charAt(0)}
                  </div>
                  <p className="text-xs text-gray-600">{sample.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="inline-block p-4 bg-green-50 rounded-lg mb-4">
            <img
              src={uploadedLogo.url}
              alt="Uploaded logo"
              className="max-w-24 max-h-24 mx-auto"
            />
          </div>
          <p className="text-sm font-medium text-gray-900 mb-1">{uploadedLogo.name}</p>
          <p className="text-xs text-gray-500 mb-4">
            {(uploadedLogo.size / 1024).toFixed(1)} KB • {uploadedLogo.type}
          </p>
          <button
            onClick={() => {
              onLogoUpload(null)
              setError('')
            }}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Ander logo uploaden
          </button>
        </div>
      )}
    </div>
  )
}