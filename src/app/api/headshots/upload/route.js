import { NextResponse } from 'next/server'

// Handle file upload validation and S3 signed URL generation
export async function POST(request) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('files')
    const jobId = formData.get('jobId')
    const userEmail = formData.get('userEmail')

    if (!jobId || !userEmail) {
      return NextResponse.json(
        { success: false, error: 'Job ID and user email are required' },
        { status: 400 }
      )
    }

    if (files.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No files provided' },
        { status: 400 }
      )
    }

    const validatedFiles = []
    const rejectedFiles = []
    const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
    const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic', 'image/webp']

    // Validate each file
    for (const file of files) {
      const validation = await validateFile(file)
      
      if (validation.isValid) {
        validatedFiles.push({
          originalName: file.name,
          size: file.size,
          type: file.type,
          validation: validation.scores,
          s3Key: `jobs/${jobId}/inputs/${Date.now()}_${file.name}`,
          uploadUrl: await generateSignedUploadUrl(`jobs/${jobId}/inputs/${Date.now()}_${file.name}`)
        })
      } else {
        rejectedFiles.push({
          originalName: file.name,
          reasons: validation.reasons
        })
      }
    }

    // Check minimum file requirements
    const minFiles = 8
    const maxFiles = 20
    const totalValidFiles = validatedFiles.length

    if (totalValidFiles < minFiles) {
      return NextResponse.json({
        success: false,
        error: `Minimum ${minFiles} valid photos required. You provided ${totalValidFiles} valid photos.`,
        validatedFiles,
        rejectedFiles,
        requirements: getUploadRequirements()
      }, { status: 400 })
    }

    if (totalValidFiles > maxFiles) {
      return NextResponse.json({
        success: false,
        error: `Maximum ${maxFiles} photos allowed. Please select your best ${maxFiles} photos.`,
        validatedFiles: validatedFiles.slice(0, maxFiles),
        rejectedFiles,
        requirements: getUploadRequirements()
      }, { status: 400 })
    }

    // In production, save upload records to database
    const uploadSession = {
      jobId,
      userEmail,
      totalFiles: validatedFiles.length,
      sessionId: `upload_${Date.now()}`,
      expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(), // 1 hour
      files: validatedFiles.map(f => ({
        originalName: f.originalName,
        s3Key: f.s3Key,
        size: f.size,
        type: f.type,
        qualityScore: f.validation.overall,
        faceScore: f.validation.face
      }))
    }

    return NextResponse.json({
      success: true,
      uploadSession,
      uploadUrls: validatedFiles.map(f => ({
        originalName: f.originalName,
        uploadUrl: f.uploadUrl,
        s3Key: f.s3Key
      })),
      rejectedFiles,
      summary: {
        validated: validatedFiles.length,
        rejected: rejectedFiles.length,
        ready: validatedFiles.length >= minFiles
      },
      nextStep: validatedFiles.length >= minFiles ? 'proceed_to_upload' : 'add_more_photos'
    })

  } catch (error) {
    console.error('Upload validation error:', error)
    return NextResponse.json(
      { success: false, error: 'Upload validation failed' },
      { status: 500 }
    )
  }
}

// Confirm upload completion and trigger processing
export async function PATCH(request) {
  try {
    const { jobId, sessionId, uploadedFiles } = await request.json()

    if (!jobId || !sessionId) {
      return NextResponse.json(
        { success: false, error: 'Job ID and session ID are required' },
        { status: 400 }
      )
    }

    // In production:
    // 1. Verify all files were uploaded to S3
    // 2. Run additional quality checks on uploaded files
    // 3. Update job status to 'uploaded' 
    // 4. Trigger AI processing pipeline
    // 5. Send confirmation email

    const processingEstimate = calculateProcessingTime(uploadedFiles?.length || 15)

    return NextResponse.json({
      success: true,
      message: 'Upload completed successfully! Processing will begin shortly.',
      job: {
        id: jobId,
        status: 'processing',
        uploadedFiles: uploadedFiles?.length || 15,
        processingStarted: new Date().toISOString(),
        estimatedCompletion: new Date(Date.now() + processingEstimate * 60 * 1000).toISOString()
      },
      processing: {
        estimatedMinutes: processingEstimate,
        stages: [
          'Face analysis and extraction',
          'Identity model training',
          'Style combination generation', 
          'Quality validation',
          'Gallery preparation'
        ],
        notifications: {
          email: true,
          inApp: true
        }
      }
    })

  } catch (error) {
    console.error('Upload completion error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to confirm upload completion' },
      { status: 500 }
    )
  }
}

// Utility functions (in production, these would be in separate modules)

async function validateFile(file) {
  const MAX_SIZE = 5 * 1024 * 1024 // 5MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic', 'image/webp']
  const MIN_DIMENSION = 512
  
  const reasons = []
  let isValid = true

  // Basic validations
  if (!ALLOWED_TYPES.includes(file.type)) {
    reasons.push(`Unsupported file type: ${file.type}`)
    isValid = false
  }

  if (file.size > MAX_SIZE) {
    reasons.push(`File too large: ${(file.size / 1024 / 1024).toFixed(1)}MB (max 5MB)`)
    isValid = false
  }

  if (file.size < 10000) { // 10KB minimum
    reasons.push('File too small, likely corrupted')
    isValid = false
  }

  // In production, would do additional checks:
  // - Image dimensions using sharp/canvas
  // - Face detection using ML model
  // - Blur/exposure analysis
  // - EXIF data validation

  const mockScores = {
    overall: isValid ? 0.85 : 0.2,
    face: isValid ? 0.9 : 0.0,
    clarity: isValid ? 0.8 : 0.3,
    lighting: isValid ? 0.7 : 0.4,
    angle: isValid ? 0.8 : 0.5
  }

  return {
    isValid,
    reasons,
    scores: mockScores
  }
}

async function generateSignedUploadUrl(s3Key) {
  // In production, generate actual S3 signed URL
  // For now, return mock URL
  return `https://mock-s3-bucket.s3.amazonaws.com/${s3Key}?signature=mock`
}

function calculateProcessingTime(fileCount) {
  // Estimate processing time based on file count and current queue
  const baseTime = 45 // Base 45 minutes
  const fileMultiplier = Math.max(0, (fileCount - 10) * 2) // Extra time for more files
  const queueDelay = Math.floor(Math.random() * 30) // Mock queue delay
  
  return Math.min(baseTime + fileMultiplier + queueDelay, 180) // Max 3 hours
}

function getUploadRequirements() {
  return {
    quantity: {
      minimum: 8,
      recommended: 15,
      maximum: 20
    },
    technical: {
      formats: ['JPG', 'PNG', 'HEIC'],
      maxSize: '5MB per file',
      minResolution: '512x512px',
      recommendedResolution: '1024x1024px or higher'
    },
    quality: {
      lighting: 'Good, even lighting on face',
      clarity: 'Sharp focus, no blur',
      angle: 'Variety of angles and expressions',
      background: 'Different backgrounds preferred',
      restrictions: 'No sunglasses, face coverings, or heavy shadows'
    },
    tips: [
      'Take photos in good natural light',
      'Face should fill 50-70% of the frame',
      'Include both smiling and neutral expressions',
      'Vary your head position (straight, slight angles)',
      'Use different backgrounds/locations',
      'Ensure eyes are clearly visible',
      'Avoid harsh shadows on your face'
    ]
  }
}