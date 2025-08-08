import { NextResponse } from 'next/server'

// Create a new headshot job
export async function POST(request) {
  try {
    const { 
      planId, 
      userEmail, 
      userName,
      styleSelections,
      currency = 'EUR'
    } = await request.json()

    // Validate required fields
    if (!planId || !userEmail) {
      return NextResponse.json(
        { success: false, error: 'Plan ID and email are required' },
        { status: 400 }
      )
    }

    // Validate plan exists (in production, query database)
    const validPlans = ['basic', 'professional', 'executive']
    if (!validPlans.includes(planId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid plan ID' },
        { status: 400 }
      )
    }

    // Generate job ID (in production, use database auto-increment)
    const jobId = `job_${Date.now()}_${Math.random().toString(36).substring(7)}`
    
    // Get plan details for job setup
    const planDetails = {
      basic: { headshots: 40, combos: 4, eta: 3, credits: 0 },
      professional: { headshots: 100, combos: 10, eta: 2, credits: 10 },
      executive: { headshots: 150, combos: 15, eta: 1, credits: 20 }
    }

    const plan = planDetails[planId]

    // Create job record (in production, insert into database)
    const job = {
      id: jobId,
      planId,
      userEmail,
      userName: userName || userEmail.split('@')[0],
      status: 'created',
      expectedOutputs: plan.headshots,
      expectedCombos: plan.combos,
      editCredits: plan.credits,
      etaHours: plan.eta,
      styleSelections: styleSelections || null,
      createdAt: new Date().toISOString(),
      uploadedFiles: 0,
      minimumFiles: 8,
      recommendedFiles: 15,
      maxFiles: 20
    }

    // In production, save to database and initialize S3 bucket structure
    
    return NextResponse.json({
      success: true,
      job,
      uploadInstructions: {
        minFiles: 8,
        maxFiles: 20,
        recommended: 15,
        acceptedFormats: ['jpg', 'jpeg', 'png', 'heic'],
        maxFileSize: '5MB',
        requirements: [
          'Face clearly visible in each photo',
          'Good lighting (no shadows on face)',
          'Variety of angles and expressions',
          'Different backgrounds preferred',
          'No sunglasses or face coverings',
          'High resolution (minimum 512x512px)'
        ]
      },
      nextSteps: [
        'Upload 15-20 high-quality selfies',
        'Select outfit and backdrop combinations',  
        'Review and confirm your order',
        'Processing begins (1-3 hours)',
        'Download your professional headshots'
      ]
    })

  } catch (error) {
    console.error('Job creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create job' },
      { status: 500 }
    )
  }
}

// Get job status and details
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('jobId')
    const userEmail = searchParams.get('email')

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      )
    }

    // In production, query database for job details
    // Mock job status for development
    const mockJob = {
      id: jobId,
      status: 'processing', // created, uploading, processing, completed, failed
      planId: 'professional',
      planName: 'Professional',
      userEmail: userEmail || 'user@example.com',
      uploadedFiles: 12,
      requiredFiles: 8,
      expectedOutputs: 100,
      completedOutputs: 0,
      etaMinutes: 85,
      progress: {
        stage: 'face_analysis', // uploading, face_analysis, model_training, generating, post_processing, completed
        percentage: 25,
        message: 'Analyzing uploaded photos and extracting face features...',
        steps: [
          { name: 'Upload Complete', status: 'completed', timestamp: '2024-01-15T10:00:00Z' },
          { name: 'Face Analysis', status: 'in_progress', timestamp: null },
          { name: 'Model Training', status: 'pending', timestamp: null },
          { name: 'Generating Headshots', status: 'pending', timestamp: null },
          { name: 'Quality Check', status: 'pending', timestamp: null },
          { name: 'Ready for Download', status: 'pending', timestamp: null }
        ]
      },
      styleSelections: {
        outfits: ['navy-suit', 'black-blazer', 'white-shirt'],
        backdrops: ['modern-office', 'studio-grey', 'bookshelf-office'],
        framing: 'portrait',
        shotType: 'torso'
      },
      createdAt: '2024-01-15T09:30:00Z',
      estimatedCompletionAt: '2024-01-15T11:30:00Z'
    }

    return NextResponse.json({
      success: true,
      job: mockJob,
      canEdit: ['created', 'uploading'].includes(mockJob.status),
      canDownload: mockJob.status === 'completed',
      shouldPoll: ['uploading', 'processing'].includes(mockJob.status)
    })

  } catch (error) {
    console.error('Job status error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to get job status' },
      { status: 500 }
    )
  }
}

// Update job (style selections, etc.)
export async function PATCH(request) {
  try {
    const { jobId, updates } = await request.json()

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      )
    }

    // In production, validate job exists and user has permission
    // Update allowed fields: styleSelections, status (limited transitions)

    const allowedUpdates = ['styleSelections', 'status']
    const validatedUpdates = {}

    for (const [key, value] of Object.entries(updates)) {
      if (allowedUpdates.includes(key)) {
        validatedUpdates[key] = value
      }
    }

    // In production, update database record
    const updatedJob = {
      id: jobId,
      ...validatedUpdates,
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      job: updatedJob,
      message: 'Job updated successfully'
    })

  } catch (error) {
    console.error('Job update error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update job' },
      { status: 500 }
    )
  }
}

// Delete/cancel job
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
    // 1. Validate job exists and user has permission
    // 2. Check job status (only allow deletion of non-completed jobs)
    // 3. Delete S3 files
    // 4. Update database record or soft delete
    // 5. Process any refunds if payment was made

    return NextResponse.json({
      success: true,
      message: 'Job deletion requested. Files will be removed within 24 hours.',
      deletionScheduled: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    })

  } catch (error) {
    console.error('Job deletion error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete job' },
      { status: 500 }
    )
  }
}