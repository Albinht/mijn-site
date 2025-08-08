import { NextResponse } from 'next/server'

// Trigger AI headshot generation
export async function POST(request) {
  try {
    const { jobId, styleSelections } = await request.json()

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      )
    }

    // Validate style selections
    const validationResult = validateStyleSelections(styleSelections)
    if (!validationResult.isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid style selections', details: validationResult.errors },
        { status: 400 }
      )
    }

    // In production:
    // 1. Validate job exists and is in 'uploaded' status
    // 2. Verify user has uploaded required files
    // 3. Check processing queue capacity
    // 4. Add job to GPU worker queue
    // 5. Update job status to 'processing'

    const processingPipeline = {
      jobId,
      status: 'queued',
      queuePosition: Math.floor(Math.random() * 10) + 1,
      estimatedStartTime: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      stages: [
        {
          name: 'face_extraction',
          description: 'Extracting and analyzing face features from uploaded photos',
          estimatedMinutes: 15,
          status: 'pending'
        },
        {
          name: 'identity_training', 
          description: 'Training personalized AI model with your facial features',
          estimatedMinutes: 25,
          status: 'pending'
        },
        {
          name: 'style_generation',
          description: 'Generating headshots with selected outfits and backdrops',
          estimatedMinutes: 35,
          status: 'pending'
        },
        {
          name: 'quality_validation',
          description: 'Validating identity consistency and image quality',
          estimatedMinutes: 10,
          status: 'pending'
        },
        {
          name: 'gallery_preparation',
          description: 'Preparing final gallery with thumbnails and metadata',
          estimatedMinutes: 5,
          status: 'pending'
        }
      ],
      styleSelections: {
        outfits: styleSelections.outfits || [],
        backdrops: styleSelections.backdrops || [],
        combinations: generateStyleCombinations(styleSelections),
        framing: styleSelections.framing || 'portrait',
        shotType: styleSelections.shotType || 'torso'
      },
      expectedOutputs: calculateExpectedOutputs(styleSelections),
      processingStarted: null,
      estimatedCompletion: null
    }

    // Calculate total processing time
    const totalMinutes = processingPipeline.stages.reduce((sum, stage) => sum + stage.estimatedMinutes, 0)
    processingPipeline.estimatedCompletion = new Date(Date.now() + totalMinutes * 60 * 1000).toISOString()

    return NextResponse.json({
      success: true,
      message: 'Generation started! You\'ll receive an email when your headshots are ready.',
      processing: processingPipeline,
      notifications: {
        email: true,
        estimated: `${Math.ceil(totalMinutes / 60)} hour${Math.ceil(totalMinutes / 60) !== 1 ? 's' : ''}`,
        tracking: {
          jobId,
          trackingUrl: `/headshots/job/${jobId}`,
          statusEndpoint: `/api/headshots/jobs?jobId=${jobId}`
        }
      }
    })

  } catch (error) {
    console.error('Generation trigger error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to start generation' },
      { status: 500 }
    )
  }
}

// Get generation progress/status
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('jobId')

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      )
    }

    // In production, query actual job status from database and processing queue
    // Mock realistic generation progress
    const mockProgress = generateMockProgress(jobId)

    return NextResponse.json({
      success: true,
      progress: mockProgress,
      shouldPoll: mockProgress.status !== 'completed' && mockProgress.status !== 'failed'
    })

  } catch (error) {
    console.error('Generation status error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to get generation status' },
      { status: 500 }
    )
  }
}

// Cancel generation (if not started or early stages)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('jobId')
    const reason = searchParams.get('reason') || 'user_requested'

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      )
    }

    // In production:
    // 1. Check if job can be cancelled (not in advanced stages)
    // 2. Remove from processing queue if still queued
    // 3. Stop processing if in early stages
    // 4. Clean up partial results
    // 5. Update job status and process refund

    return NextResponse.json({
      success: true,
      message: 'Generation cancelled successfully. Refund will be processed within 3-5 business days.',
      cancellation: {
        jobId,
        cancelledAt: new Date().toISOString(),
        reason,
        refundExpected: true,
        refundTimeframe: '3-5 business days'
      }
    })

  } catch (error) {
    console.error('Generation cancellation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to cancel generation' },
      { status: 500 }
    )
  }
}

// Utility functions

function validateStyleSelections(selections) {
  if (!selections) {
    return { isValid: false, errors: ['Style selections are required'] }
  }

  const errors = []

  // Validate outfits
  if (!selections.outfits || selections.outfits.length === 0) {
    errors.push('At least one outfit must be selected')
  }

  // Validate backdrops  
  if (!selections.backdrops || selections.backdrops.length === 0) {
    errors.push('At least one backdrop must be selected')
  }

  // Validate combination count doesn't exceed plan limits
  const totalCombos = (selections.outfits?.length || 0) * (selections.backdrops?.length || 0)
  if (totalCombos > 20) {
    errors.push('Too many combinations selected. Please reduce outfit or backdrop selections.')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

function generateStyleCombinations(selections) {
  const combinations = []
  
  if (selections.outfits && selections.backdrops) {
    for (const outfit of selections.outfits) {
      for (const backdrop of selections.backdrops) {
        combinations.push({
          id: `${outfit}_${backdrop}`,
          outfit: outfit,
          backdrop: backdrop,
          expectedImages: 10
        })
      }
    }
  }

  return combinations
}

function calculateExpectedOutputs(selections) {
  const combos = (selections.outfits?.length || 0) * (selections.backdrops?.length || 0)
  return combos * 10 // 10 images per combination
}

function generateMockProgress(jobId) {
  // Generate realistic mock progress based on time
  const now = new Date()
  const seed = jobId.length + now.getMinutes() // Simple seed for consistency
  const progressPhase = seed % 6

  const stages = [
    { name: 'face_extraction', status: progressPhase > 0 ? 'completed' : 'in_progress' },
    { name: 'identity_training', status: progressPhase > 2 ? 'completed' : progressPhase > 1 ? 'in_progress' : 'pending' },
    { name: 'style_generation', status: progressPhase > 4 ? 'completed' : progressPhase > 3 ? 'in_progress' : 'pending' },
    { name: 'quality_validation', status: progressPhase > 5 ? 'completed' : progressPhase === 5 ? 'in_progress' : 'pending' },
    { name: 'gallery_preparation', status: progressPhase > 5 ? 'completed' : 'pending' }
  ]

  const completedStages = stages.filter(s => s.status === 'completed').length
  const totalStages = stages.length
  const overallProgress = Math.floor((completedStages / totalStages) * 100)

  let status = 'processing'
  let message = 'Processing your headshots...'

  if (progressPhase === 0) {
    message = 'Analyzing uploaded photos and extracting facial features...'
  } else if (progressPhase <= 2) {
    message = 'Training personalized AI model with your unique features...'
  } else if (progressPhase <= 4) {
    message = 'Generating headshots with your selected styles...'
  } else if (progressPhase === 5) {
    message = 'Validating quality and preparing your gallery...'
  } else {
    status = 'completed'
    message = 'Your professional headshots are ready!'
  }

  return {
    jobId,
    status,
    message,
    overallProgress,
    currentStage: stages.find(s => s.status === 'in_progress')?.name || 'completed',
    stages,
    eta: status === 'completed' ? null : Math.max(1, 90 - (progressPhase * 15)),
    completedImages: Math.floor((overallProgress / 100) * 100),
    expectedImages: 100,
    lastUpdate: now.toISOString()
  }
}