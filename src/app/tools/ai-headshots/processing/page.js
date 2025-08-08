'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Button from '../../../../components/Button'

// Processing stages
const PROCESSING_STAGES = [
  {
    id: 'queue',
    name: 'In Queue',
    description: 'Waiting for available AI processing slot',
    icon: '⏳',
    estimatedTime: '5-15 minutes'
  },
  {
    id: 'analysis', 
    name: 'Analyzing Photos',
    description: 'AI is analyzing your facial features and expressions',
    icon: '🔍',
    estimatedTime: '3-5 minutes'
  },
  {
    id: 'training',
    name: 'Training Model',
    description: 'Creating your personalized AI model for consistent results',
    icon: '🧠',
    estimatedTime: '20-40 minutes'
  },
  {
    id: 'generation',
    name: 'Generating Headshots',
    description: 'Creating your professional headshots in selected styles',
    icon: '🎨',
    estimatedTime: '15-30 minutes'
  },
  {
    id: 'quality_check',
    name: 'Quality Control',
    description: 'Validating image quality and identity consistency',
    icon: '✅',
    estimatedTime: '2-5 minutes'
  },
  {
    id: 'complete',
    name: 'Complete',
    description: 'Your headshots are ready for download!',
    icon: '🎉',
    estimatedTime: 'Done'
  }
]

// Mock job data structure
const MOCK_JOB_STATUSES = [
  'queue', 'analysis', 'training', 'generation', 'quality_check', 'complete'
]

function ProcessingPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get parameters from URL
  const jobId = searchParams.get('jobId')
  const sessionId = searchParams.get('session_id')

  // State management
  const [jobData, setJobData] = useState(null)
  const [currentStage, setCurrentStage] = useState('queue')
  const [progress, setProgress] = useState(0)
  const [completedImages, setCompletedImages] = useState(0)
  const [totalImages, setTotalImages] = useState(100)
  const [estimatedTimeLeft, setEstimatedTimeLeft] = useState('45-90 minutes')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [startTime] = useState(new Date())

  // Load job data and verify payment
  useEffect(() => {
    if (!jobId) {
      router.push('/tools/ai-headshots')
      return
    }

    // Verify payment completion with session ID
    if (sessionId && !sessionId.startsWith('mock_session')) {
      // In production, verify Stripe session
      console.log('Verifying payment session:', sessionId)
    }

    // Mock job data (in production, fetch from API)
    setJobData({
      id: jobId,
      sessionId: sessionId,
      planId: 'professional', // Would come from API
      planName: 'Professional',
      userEmail: 'user@example.com', // Would come from API
      totalFiles: 12,
      styleSelections: {
        outfits: 5,
        backdrops: 2,
        combinations: 10
      },
      expectedImages: 100,
      status: 'processing',
      paymentStatus: 'completed'
    })

    setTotalImages(100) // Based on plan and combinations
    setLoading(false)
  }, [jobId, sessionId, router])

  // Simulate processing progress (in production, this would poll an API)
  useEffect(() => {
    if (!jobData) return

    const progressInterval = setInterval(() => {
      setCurrentStage(prevStage => {
        const currentIndex = MOCK_JOB_STATUSES.indexOf(prevStage)
        
        // Simulate natural progression through stages
        if (currentIndex < MOCK_JOB_STATUSES.length - 1) {
          const nextStage = MOCK_JOB_STATUSES[currentIndex + 1]
          
          // Update progress based on stage
          const stageProgress = {
            queue: 5,
            analysis: 15,
            training: 45,
            generation: 80,
            quality_check: 95,
            complete: 100
          }
          
          setProgress(stageProgress[nextStage] || 0)
          
          // Simulate completed images during generation
          if (nextStage === 'generation') {
            setCompletedImages(Math.floor(totalImages * 0.3))
          } else if (nextStage === 'quality_check') {
            setCompletedImages(Math.floor(totalImages * 0.9))
          } else if (nextStage === 'complete') {
            setCompletedImages(totalImages)
          }
          
          return nextStage
        }
        
        return prevStage
      })
    }, 8000) // Progress every 8 seconds for demo

    // Cleanup
    return () => clearInterval(progressInterval)
  }, [jobData, totalImages])

  // Calculate estimated time remaining
  useEffect(() => {
    const stage = PROCESSING_STAGES.find(s => s.id === currentStage)
    if (stage) {
      setEstimatedTimeLeft(stage.estimatedTime)
    }
  }, [currentStage])

  // Handle completion
  const handleViewResults = () => {
    router.push(`/tools/ai-headshots/gallery?jobId=${jobId}`)
  }

  // Handle polling for real status (commented for demo)
  const pollJobStatus = useCallback(async () => {
    if (!jobId) return

    try {
      const response = await fetch(`/api/headshots/jobs/${jobId}`)
      const data = await response.json()
      
      if (data.success) {
        setCurrentStage(data.job.status)
        setProgress(data.job.progress || 0)
        setCompletedImages(data.job.completedImages || 0)
        
        // If complete, redirect to gallery
        if (data.job.status === 'complete') {
          setTimeout(() => {
            router.push(`/tools/ai-headshots/gallery?jobId=${jobId}`)
          }, 2000)
        }
      }
    } catch (error) {
      console.error('Failed to poll job status:', error)
      setError('Connection error. Please refresh the page.')
    }
  }, [jobId, router])

  // Set up polling (commented for demo)
  // useEffect(() => {
  //   if (!jobData || currentStage === 'complete') return
  //   
  //   const pollInterval = setInterval(pollJobStatus, 10000) // Poll every 10 seconds
  //   return () => clearInterval(pollInterval)
  // }, [jobData, currentStage, pollJobStatus])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job status...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Connection Error</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const currentStageData = PROCESSING_STAGES.find(s => s.id === currentStage)
  const isComplete = currentStage === 'complete'

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isComplete ? (
              <>Your <span className="bg-[#F7D8FA] px-2 rounded italic">Headshots</span> Are Ready!</>
            ) : (
              <>Creating Your <span className="bg-[#F7D8FA] px-2 rounded italic">Headshots</span></>
            )}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Step 4 of 4 • <strong>{jobData.planName}</strong> Package • {jobData.userEmail}
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: '100%' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className="text-blue-600">Upload</span>
              <span className="text-blue-600">Styles</span>
              <span className="text-blue-600">Payment</span>
              <span className="text-blue-600 font-medium">Processing</span>
            </div>
          </div>
        </div>

        {/* Main Processing Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          
          {/* Current Stage */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{currentStageData?.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentStageData?.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {currentStageData?.description}
            </p>
            
            {!isComplete && (
              <p className="text-sm text-gray-500">
                Estimated time: {estimatedTimeLeft}
              </p>
            )}
          </div>

          {/* Progress Bar */}
          {!isComplete && (
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Overall Progress</span>
                <span>{progress}% complete</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Image Generation Progress */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{jobData.totalFiles}</div>
              <div className="text-gray-500 text-sm">Photos Uploaded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{jobData.styleSelections.combinations}</div>
              <div className="text-gray-500 text-sm">Style Combinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{completedImages}/{totalImages}</div>
              <div className="text-gray-500 text-sm">Headshots Generated</div>
            </div>
          </div>

          {/* Stage Timeline */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Processing Timeline</h3>
            {PROCESSING_STAGES.map((stage, index) => {
              const isCurrentStage = stage.id === currentStage
              const isPastStage = MOCK_JOB_STATUSES.indexOf(stage.id) < MOCK_JOB_STATUSES.indexOf(currentStage)
              const isFutureStage = MOCK_JOB_STATUSES.indexOf(stage.id) > MOCK_JOB_STATUSES.indexOf(currentStage)

              return (
                <div key={stage.id} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 ${
                    isPastStage 
                      ? 'bg-green-500 text-white' 
                      : isCurrentStage 
                        ? 'bg-blue-500 text-white animate-pulse'
                        : 'bg-gray-200 text-gray-500'
                  }`}>
                    {isPastStage ? '✓' : index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`font-medium ${
                      isCurrentStage ? 'text-blue-600' : isPastStage ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {stage.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {stage.description}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    {stage.estimatedTime}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Action Section */}
        {isComplete ? (
          <div className="text-center mb-8">
            <Button 
              onClick={handleViewResults}
              className="text-lg py-4 px-8 mb-4"
            >
              View Your Headshots 🎉
            </Button>
            <p className="text-gray-600">
              Your headshots have been generated and are ready for download!
            </p>
          </div>
        ) : (
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <div className="text-center">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <p>✉️ We'll email you when your headshots are ready</p>
                <p>📱 You can bookmark this page to check progress anytime</p>
                <p>💬 Questions? Contact us at +31 6 48728828</p>
              </div>
            </div>
          </div>
        )}

        {/* Processing Info */}
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <h3 className="font-semibold text-gray-900 mb-4">
            While You Wait...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-medium mb-1">AI Technology</div>
              <div>Our advanced AI models ensure photorealistic results while preserving your unique identity</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🔒</div>
              <div className="font-medium mb-1">Privacy First</div>
              <div>Your photos are automatically deleted after 30 days. We never use your data for training</div>
            </div>
            <div>
              <div className="text-2xl mb-2">✅</div>
              <div className="font-medium mb-1">Quality Guaranteed</div>
              <div>Not satisfied? Get a full refund within 30 days, no questions asked</div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-[#F7D8FA] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need <span className="bg-white px-2 rounded italic">Help</span>?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Have questions about your order or need assistance? Our team is here to help during the processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/work-with-me"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact Support
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

// Loading component that matches the design
function ProcessingLoading() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-[#F7D8FA] px-2 rounded italic">Processing</span> Your Headshots
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Loading processing status...
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: '100%' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className="text-blue-600">Upload</span>
              <span className="text-blue-600">Styles</span>
              <span className="text-blue-600">Payment</span>
              <span className="text-blue-600 font-medium">Processing</span>
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
export default function ProcessingPage() {
  return (
    <Suspense fallback={<ProcessingLoading />}>
      <ProcessingPageContent />
    </Suspense>
  )
}