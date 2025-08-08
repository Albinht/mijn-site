'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Button from '../../../../components/Button'

// File validation constants
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const MIN_FILE_SIZE = 10 * 1024 // 10KB
const ACCEPTED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic', 'image/webp']
const MIN_FILES = 8
const MAX_FILES = 20
const RECOMMENDED_FILES = 15

// Upload requirements and tips
const UPLOAD_REQUIREMENTS = {
  technical: {
    formats: 'JPG, PNG, HEIC, WEBP',
    maxSize: '5MB per file',
    minResolution: '512x512px',
    recommendedResolution: '1024x1024px or higher'
  },
  quality: [
    'Face clearly visible in each photo',
    'Good, even lighting on your face',
    'Sharp focus, no blur or motion',
    'Variety of angles and expressions',
    'Different backgrounds preferred',
    'No sunglasses, face coverings, or heavy shadows'
  ],
  tips: [
    'Take photos in good natural light near a window',
    'Face should fill 50-70% of the frame',
    'Include both smiling and neutral expressions',
    'Vary your head position (straight, slight angles)',
    'Use different backgrounds/locations if possible',
    'Ensure eyes are clearly visible and well-lit',
    'Avoid harsh shadows on your face'
  ]
}

export default function UploadPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const fileInputRef = useRef(null)

  // Get job details from URL params
  const jobId = searchParams.get('jobId')
  const planId = searchParams.get('plan')
  const userEmail = searchParams.get('email')

  // State management
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [validationResults, setValidationResults] = useState([])
  const [currentStep, setCurrentStep] = useState(1) // 1: Upload, 2: Review, 3: Confirm
  const [jobData, setJobData] = useState(null)

  // Load job data on mount
  useEffect(() => {
    if (!jobId || !planId || !userEmail) {
      router.push('/tools/ai-headshots')
      return
    }

    // In production, fetch job data from API
    setJobData({
      id: jobId,
      planId: planId,
      userEmail: userEmail,
      planName: planId.charAt(0).toUpperCase() + planId.slice(1),
      requiredFiles: MIN_FILES,
      maxFiles: MAX_FILES,
      recommendedFiles: RECOMMENDED_FILES
    })
  }, [jobId, planId, userEmail, router])

  // File validation function
  const validateFile = useCallback((file) => {
    const errors = []
    const warnings = []

    // Basic validation
    if (!ACCEPTED_TYPES.includes(file.type)) {
      errors.push(`Unsupported file type: ${file.type}`)
    }

    if (file.size > MAX_FILE_SIZE) {
      errors.push(`File too large: ${(file.size / 1024 / 1024).toFixed(1)}MB (max 5MB)`)
    }

    if (file.size < MIN_FILE_SIZE) {
      errors.push('File too small, likely corrupted')
    }

    // Mock quality checks (in production, would use ML models)
    const mockQuality = {
      overall: Math.random() * 0.4 + 0.6, // 0.6-1.0
      faceDetected: Math.random() > 0.1, // 90% face detection
      clarity: Math.random() * 0.3 + 0.7, // 0.7-1.0
      lighting: Math.random() * 0.4 + 0.6, // 0.6-1.0
      angle: Math.random() * 0.3 + 0.7 // 0.7-1.0
    }

    // Quality-based warnings
    if (!mockQuality.faceDetected) {
      errors.push('No face detected in this image')
    } else {
      if (mockQuality.clarity < 0.7) {
        warnings.push('Image appears blurry - consider using a sharper photo')
      }
      if (mockQuality.lighting < 0.7) {
        warnings.push('Poor lighting detected - face may be in shadow')
      }
      if (mockQuality.angle < 0.75) {
        warnings.push('Extreme angle detected - face may not be clearly visible')
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      quality: mockQuality,
      fileInfo: {
        name: file.name,
        size: file.size,
        type: file.type
      }
    }
  }, [])

  // Handle file selection
  const handleFiles = useCallback((newFiles) => {
    const fileArray = Array.from(newFiles)
    
    // Validate each file
    const validatedFiles = fileArray.map((file, index) => {
      const validation = validateFile(file)
      return {
        id: `file-${Date.now()}-${index}`,
        file,
        validation,
        preview: URL.createObjectURL(file)
      }
    })

    // Update state
    setFiles(prev => {
      const combined = [...prev, ...validatedFiles]
      // Limit to max files
      return combined.slice(0, MAX_FILES)
    })

    // Update validation results
    setValidationResults(prev => [
      ...prev,
      ...validatedFiles.map(f => f.validation)
    ])
  }, [validateFile])

  // Drag and drop handlers
  const handleDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }, [handleFiles])

  // File input handler
  const handleFileInput = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }, [handleFiles])

  // Remove file
  const removeFile = useCallback((fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId))
    setValidationResults(prev => prev.filter((_, index, arr) => {
      const fileIndex = files.findIndex(f => f.id === fileId)
      return index !== fileIndex
    }))
  }, [files])

  // Get validation summary
  const getValidationSummary = useCallback(() => {
    const validFiles = files.filter(f => f.validation.isValid)
    const invalidFiles = files.filter(f => !f.validation.isValid)
    const filesWithWarnings = files.filter(f => f.validation.warnings.length > 0)

    return {
      total: files.length,
      valid: validFiles.length,
      invalid: invalidFiles.length,
      warnings: filesWithWarnings.length,
      canProceed: validFiles.length >= MIN_FILES,
      recommendation: validFiles.length < RECOMMENDED_FILES 
        ? `Add ${RECOMMENDED_FILES - validFiles.length} more photos for best results`
        : 'Great! You have enough photos for optimal results'
    }
  }, [files])

  // Handle upload to server
  const handleUpload = async () => {
    if (!jobData) return

    setUploading(true)
    setCurrentStep(2)

    try {
      // Get valid files only
      const validFiles = files.filter(f => f.validation.isValid)
      
      // Create FormData
      const formData = new FormData()
      formData.append('jobId', jobData.id)
      formData.append('userEmail', jobData.userEmail)
      
      validFiles.forEach((fileData, index) => {
        formData.append('files', fileData.file)
      })

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 95) {
            clearInterval(progressInterval)
            return 95
          }
          return prev + Math.random() * 10
        })
      }, 200)

      // Upload to API
      const response = await fetch('/api/headshots/upload', {
        method: 'POST',
        body: formData
      })

      clearInterval(progressInterval)
      setUploadProgress(100)

      const result = await response.json()

      if (result.success) {
        // Move to confirmation step
        setTimeout(() => {
          setCurrentStep(3)
        }, 1000)
      } else {
        throw new Error(result.error || 'Upload failed')
      }

    } catch (error) {
      console.error('Upload error:', error)
      // Handle error state
      setCurrentStep(1)
      setUploadProgress(0)
    } finally {
      setUploading(false)
    }
  }

  // Proceed to style selection
  const handleProceedToStyles = () => {
    router.push(`/tools/ai-headshots/styles?jobId=${jobId}&plan=${planId}&email=${userEmail}`)
  }

  if (!jobData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const summary = getValidationSummary()

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upload Your <span className="bg-[#F7D8FA] px-2 rounded italic">Selfies</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Step 1 of 4 • <strong>{jobData.planName}</strong> Package • {jobData.userEmail}
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: '25%' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Upload</span>
              <span>Styles</span>
              <span>Payment</span>
              <span>Processing</span>
            </div>
          </div>
        </div>

        {/* Step 1: Upload Interface */}
        {currentStep === 1 && (
          <div className="space-y-8">
            
            {/* Upload Area */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-50' 
                    : files.length > 0 
                      ? 'border-green-300 bg-green-50' 
                      : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="space-y-4">
                  <div className="text-6xl">
                    {files.length > 0 ? '✓' : '📱'}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {files.length > 0 
                        ? `${files.length} photos selected`
                        : 'Drop your selfies here'
                      }
                    </h3>
                    <p className="text-gray-600 mb-4">
                      or click to browse from your device
                    </p>
                    <Button 
                      onClick={() => fileInputRef.current?.click()}
                      variant="secondary"
                      className="mb-4"
                    >
                      Choose Files
                    </Button>
                    <p className="text-sm text-gray-500">
                      {ACCEPTED_TYPES.join(', ')} • Max 5MB per file • {MIN_FILES}-{MAX_FILES} photos
                    </p>
                  </div>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept={ACCEPTED_TYPES.join(',')}
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>

              {/* File Requirements */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">📋 Requirements</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {UPLOAD_REQUIREMENTS.quality.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">💡 Pro Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {UPLOAD_REQUIREMENTS.tips.slice(0, 4).map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-0.5">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Uploaded Files Preview */}
            {files.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Uploaded Photos ({files.length}/{MAX_FILES})
                  </h3>
                  <div className="text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      summary.canProceed 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {summary.valid} valid • {summary.invalid} issues
                    </span>
                  </div>
                </div>

                {/* Files Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
                  {files.map((fileData) => (
                    <div
                      key={fileData.id}
                      className={`relative bg-gray-100 rounded-lg overflow-hidden ${
                        fileData.validation.isValid 
                          ? 'ring-2 ring-green-200' 
                          : 'ring-2 ring-red-200'
                      }`}
                    >
                      <div className="aspect-square">
                        <img
                          src={fileData.preview}
                          alt={fileData.file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Status Indicator */}
                      <div className="absolute top-2 right-2">
                        {fileData.validation.isValid ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">!</span>
                          </div>
                        )}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFile(fileData.id)}
                        className="absolute top-2 left-2 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-opacity"
                      >
                        <span className="text-white text-xs">×</span>
                      </button>

                      {/* File Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                        <div className="text-xs truncate">
                          {fileData.file.name}
                        </div>
                        <div className="text-xs opacity-75">
                          {(fileData.file.size / 1024 / 1024).toFixed(1)}MB
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Validation Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Quality Check</span>
                    <span className={`text-sm ${
                      summary.canProceed ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {summary.recommendation}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{summary.total}</div>
                      <div className="text-gray-500">Total</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{summary.valid}</div>
                      <div className="text-gray-500">Valid</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{summary.invalid}</div>
                      <div className="text-gray-500">Issues</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{summary.warnings}</div>
                      <div className="text-gray-500">Warnings</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    onClick={() => fileInputRef.current?.click()}
                    variant="secondary"
                    className="flex-1"
                  >
                    Add More Photos
                  </Button>
                  <Button 
                    onClick={handleUpload}
                    disabled={!summary.canProceed}
                    className={`flex-1 ${
                      !summary.canProceed ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Continue ({summary.valid} photos) →
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Upload Progress */}
        {currentStep === 2 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Uploading Your Photos</h3>
              <p className="text-gray-600">Please don't close this window while we upload your photos</p>
            </div>

            <div className="max-w-md mx-auto mb-6">
              <div className="bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{Math.round(uploadProgress)}% complete</span>
                <span>{summary.valid} photos</span>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              This usually takes 30-60 seconds depending on your internet connection
            </div>
          </div>
        )}

        {/* Step 3: Upload Complete */}
        {currentStep === 3 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload Complete!</h3>
              <p className="text-gray-600 mb-6">
                Great! We've received your {summary.valid} photos. 
                Now let's choose your styles and outfits.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-blue-900 mb-2">What's next?</h4>
              <div className="space-y-2 text-sm text-blue-800 text-left max-w-md mx-auto">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
                  Choose your favorite outfits and backdrops
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
                  Complete your payment
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">4</span>
                  AI creates your professional headshots
                </div>
              </div>
            </div>

            <div className="flex gap-4 max-w-md mx-auto">
              <Link
                href={`/tools/ai-headshots?jobId=${jobId}&plan=${planId}&email=${userEmail}`}
                className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-center"
              >
                Back to Start
              </Link>
              <Button 
                onClick={handleProceedToStyles}
                className="flex-1 py-3 px-6"
              >
                Choose Styles →
              </Button>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-[#F7D8FA] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Having trouble with your photos? Our team is here to help you get the perfect results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/work-with-me"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Help
            </Link>
            <a 
              href="tel:+31648728828"
              className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Call: +31 6 48728828
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}