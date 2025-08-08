import { NextResponse } from 'next/server'

// Get generated headshot outputs
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('jobId')
    const userEmail = searchParams.get('email')
    const combo = searchParams.get('combo') // Filter by specific outfit+backdrop combo
    const favorites = searchParams.get('favorites') === 'true'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      )
    }

    // In production, verify job ownership and completion status
    const jobStatus = await getJobStatus(jobId, userEmail)
    
    if (!jobStatus.exists) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      )
    }

    if (jobStatus.status !== 'completed') {
      return NextResponse.json({
        success: false, 
        error: 'Job not completed yet',
        currentStatus: jobStatus.status,
        progress: jobStatus.progress
      }, { status: 202 })
    }

    // Generate mock gallery data (in production, query database)
    const gallery = generateMockGallery(jobId, { combo, favorites, page, limit })

    return NextResponse.json({
      success: true,
      gallery,
      job: {
        id: jobId,
        planName: jobStatus.planName,
        completedAt: jobStatus.completedAt,
        editCreditsRemaining: jobStatus.editCredits,
        downloadExpiresAt: jobStatus.downloadExpiresAt
      },
      download: {
        individual: true,
        bulk: true,
        formats: ['jpg', 'png'],
        resolutions: jobStatus.resolution === '4k' ? ['1024x1024', '2048x2048'] : ['1024x1024']
      }
    })

  } catch (error) {
    console.error('Outputs retrieval error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve outputs' },
      { status: 500 }
    )
  }
}

// Mark images as favorites
export async function PATCH(request) {
  try {
    const { jobId, imageIds, action } = await request.json() // action: 'favorite' or 'unfavorite'

    if (!jobId || !imageIds || !Array.isArray(imageIds)) {
      return NextResponse.json(
        { success: false, error: 'Job ID and image IDs are required' },
        { status: 400 }
      )
    }

    // In production, update database records
    const updatedImages = imageIds.map(id => ({
      id,
      isFavorite: action === 'favorite'
    }))

    return NextResponse.json({
      success: true,
      message: `${imageIds.length} image${imageIds.length > 1 ? 's' : ''} ${action}d successfully`,
      updatedImages
    })

  } catch (error) {
    console.error('Favorite update error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update favorites' },
      { status: 500 }
    )
  }
}

// Generate download links (signed URLs)
export async function POST(request) {
  try {
    const { jobId, imageIds, format = 'jpg', resolution = '1024x1024' } = await request.json()

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      )
    }

    // Validate download permissions and expiration
    const jobStatus = await getJobStatus(jobId)
    if (!jobStatus.exists || jobStatus.status !== 'completed') {
      return NextResponse.json(
        { success: false, error: 'Invalid job or not completed' },
        { status: 400 }
      )
    }

    if (new Date() > new Date(jobStatus.downloadExpiresAt)) {
      return NextResponse.json(
        { success: false, error: 'Download period has expired' },
        { status: 410 }
      )
    }

    // Generate signed download URLs
    let downloadUrls = []
    
    if (!imageIds || imageIds.length === 0) {
      // Download all images as ZIP
      const zipUrl = await generateZipDownloadUrl(jobId, format, resolution)
      downloadUrls = [{
        type: 'zip',
        filename: `headshots_${jobId}_${format}_${resolution}.zip`,
        url: zipUrl,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString() // 1 hour
      }]
    } else {
      // Individual image downloads
      downloadUrls = await Promise.all(
        imageIds.map(async (imageId) => ({
          imageId,
          filename: `headshot_${jobId}_${imageId}_${format}_${resolution}.${format}`,
          url: await generateImageDownloadUrl(jobId, imageId, format, resolution),
          expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString()
        }))
      )
    }

    // Track download analytics
    await trackDownloadEvent(jobId, {
      type: imageIds ? 'individual' : 'bulk',
      count: imageIds?.length || 'all',
      format,
      resolution
    })

    return NextResponse.json({
      success: true,
      downloads: downloadUrls,
      instructions: {
        expiresIn: '1 hour',
        rightClick: 'Right-click and "Save As..." to download',
        bulkTip: 'For bulk downloads, the ZIP file contains all your headshots'
      }
    })

  } catch (error) {
    console.error('Download generation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to generate download links' },
      { status: 500 }
    )
  }
}

// Utility functions

async function getJobStatus(jobId, userEmail = null) {
  // Mock job status - in production, query database
  return {
    exists: true,
    status: 'completed',
    planName: 'Professional',
    completedAt: '2024-01-15T14:30:00Z',
    editCredits: 8, // Remaining edit credits
    downloadExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
    resolution: '1024x1024',
    progress: 100
  }
}

function generateMockGallery(jobId, filters = {}) {
  const { combo, favorites, page, limit } = filters
  
  // Mock style combinations
  const combinations = [
    { id: 'navy-suit_modern-office', outfit: 'Navy Suit', backdrop: 'Modern Office', count: 10 },
    { id: 'black-blazer_studio-grey', outfit: 'Black Blazer', backdrop: 'Studio Grey', count: 10 },
    { id: 'white-shirt_bookshelf-office', outfit: 'White Shirt', backdrop: 'Bookshelf Office', count: 10 }
  ]

  // Generate mock images
  let allImages = []
  
  combinations.forEach((combination, comboIndex) => {
    if (combo && combination.id !== combo) return // Filter by combo if specified
    
    for (let i = 1; i <= combination.count; i++) {
      const imageId = `${combination.id}_${i.toString().padStart(2, '0')}`
      const isFav = Math.random() > 0.7 // Random favorites for demo
      
      if (favorites && !isFav) continue // Filter favorites if requested
      
      allImages.push({
        id: imageId,
        filename: `headshot_${imageId}.jpg`,
        thumbnailUrl: `https://mock-cdn.example.com/thumbnails/${jobId}/${imageId}_thumb.jpg`,
        fullUrl: `https://mock-cdn.example.com/outputs/${jobId}/${imageId}.jpg`,
        downloadUrl: null, // Generated on-demand
        combination: combination.id,
        outfit: combination.outfit,
        backdrop: combination.backdrop,
        resolution: '1024x1024',
        fileSize: Math.floor(Math.random() * 500 + 200) + 'KB', // Mock file size
        qualityScore: Math.floor(Math.random() * 20 + 80) / 100, // 0.80-1.00
        similarityScore: Math.floor(Math.random() * 15 + 85) / 100, // 0.85-1.00
        isFavorite: isFav,
        metadata: {
          generated_at: '2024-01-15T14:15:00Z',
          model_version: 'v2.1',
          prompt_version: 'professional_v1'
        }
      })
    }
  })

  // Pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedImages = allImages.slice(startIndex, endIndex)

  // Group by combination for better UX
  const groupedImages = combinations.reduce((acc, combo) => {
    if (combo && combination.id !== combo) return acc
    
    const comboImages = paginatedImages.filter(img => img.combination === combo.id)
    if (comboImages.length > 0) {
      acc[combo.id] = {
        combination: combo,
        images: comboImages,
        stats: {
          total: comboImages.length,
          favorites: comboImages.filter(img => img.isFavorite).length,
          avgQuality: comboImages.reduce((sum, img) => sum + img.qualityScore, 0) / comboImages.length
        }
      }
    }
    return acc
  }, {})

  return {
    images: paginatedImages,
    groupedByCombination: groupedImages,
    pagination: {
      page,
      limit,
      total: allImages.length,
      totalPages: Math.ceil(allImages.length / limit),
      hasNext: endIndex < allImages.length,
      hasPrev: page > 1
    },
    summary: {
      totalImages: allImages.length,
      totalFavorites: allImages.filter(img => img.isFavorite).length,
      combinations: combinations.length,
      averageQuality: allImages.reduce((sum, img) => sum + img.qualityScore, 0) / allImages.length
    },
    filters: {
      availableCombinations: combinations,
      currentFilters: { combo, favorites, page, limit }
    }
  }
}

async function generateImageDownloadUrl(jobId, imageId, format, resolution) {
  // In production, generate S3 signed URL
  return `https://mock-s3-bucket.s3.amazonaws.com/outputs/${jobId}/${imageId}_${resolution}.${format}?signature=mock_download`
}

async function generateZipDownloadUrl(jobId, format, resolution) {
  // In production, trigger ZIP generation service and return signed URL
  return `https://mock-s3-bucket.s3.amazonaws.com/archives/${jobId}/headshots_${format}_${resolution}.zip?signature=mock_zip`
}

async function trackDownloadEvent(jobId, downloadData) {
  // Track download analytics
  console.log('Download tracked:', { jobId, ...downloadData })
}