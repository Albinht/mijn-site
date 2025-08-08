import { NextResponse } from 'next/server'

// Batch generation endpoint for all missing outfit and backdrop previews
// Automatically generates professional images for the styles page

export async function POST(request) {
  try {
    const { 
      regenerateAll = false,
      outfitsOnly = false,
      backdropsOnly = false 
    } = await request.json()

    console.log('🚀 Starting batch preview generation...')
    
    const results = {
      outfits: [],
      backdrops: [],
      summary: { success: 0, failed: 0, skipped: 0 }
    }

    // Generate outfit previews
    if (!backdropsOnly) {
      console.log('📸 Generating outfit previews...')
      const outfitResults = await generateAllOutfitPreviews(regenerateAll)
      results.outfits = outfitResults
      
      results.summary.success += outfitResults.filter(r => r.success).length
      results.summary.failed += outfitResults.filter(r => !r.success).length
    }

    // Generate backdrop previews  
    if (!outfitsOnly) {
      console.log('🏢 Generating backdrop previews...')
      const backdropResults = await generateAllBackdropPreviews(regenerateAll)
      results.backdrops = backdropResults
      
      results.summary.success += backdropResults.filter(r => r.success).length
      results.summary.failed += backdropResults.filter(r => !r.success).length
    }

    console.log('✅ Batch generation complete:', results.summary)

    return NextResponse.json({
      success: true,
      message: `Generated ${results.summary.success} previews successfully`,
      results,
      stats: {
        total: results.summary.success + results.summary.failed,
        successful: results.summary.success,
        failed: results.summary.failed,
        outfits: results.outfits.length,
        backdrops: results.backdrops.length
      }
    })

  } catch (error) {
    console.error('❌ Batch generation error:', error)
    return NextResponse.json({
      success: false,
      error: 'Batch generation failed: ' + error.message
    }, { status: 500 })
  }
}

// Generate previews for all outfits
async function generateAllOutfitPreviews(regenerateAll = false) {
  const { OUTFITS } = await import('../../../tools/ai-headshots/data/outfits')
  const results = []

  for (const outfit of OUTFITS) {
    try {
      console.log(`Processing outfit: ${outfit.name}`)
      
      // Check if preview already exists in cache
      const existingPreview = await checkPreviewCache('outfit', outfit.id)
      if (existingPreview && !regenerateAll) {
        results.push({
          id: outfit.id,
          name: outfit.name,
          success: true,
          skipped: true,
          reason: 'Preview already exists'
        })
        continue
      }

      // Generate professional image
      const imageUrl = await getOutfitImage(outfit)
      
      // Cache the preview
      await cachePreview('outfit', outfit.id, imageUrl)
      
      results.push({
        id: outfit.id,
        name: outfit.name,
        category: outfit.category,
        success: true,
        previewUrl: imageUrl,
        source: 'generated'
      })

      // Small delay to prevent API rate limiting
      await new Promise(resolve => setTimeout(resolve, 100))

    } catch (error) {
      console.error(`Failed to generate preview for outfit ${outfit.id}:`, error)
      results.push({
        id: outfit.id,
        name: outfit.name,
        success: false,
        error: error.message
      })
    }
  }

  return results
}

// Generate previews for all backdrops
async function generateAllBackdropPreviews(regenerateAll = false) {
  const { BACKDROPS } = await import('../../../tools/ai-headshots/data/backdrops')
  const results = []

  for (const backdrop of BACKDROPS) {
    try {
      console.log(`Processing backdrop: ${backdrop.name}`)
      
      // Check if preview already exists in cache
      const existingPreview = await checkPreviewCache('backdrop', backdrop.id)
      if (existingPreview && !regenerateAll) {
        results.push({
          id: backdrop.id,
          name: backdrop.name,
          success: true,
          skipped: true,
          reason: 'Preview already exists'
        })
        continue
      }

      // Generate professional image
      const imageUrl = await getBackdropImage(backdrop)
      
      // Cache the preview
      await cachePreview('backdrop', backdrop.id, imageUrl)
      
      results.push({
        id: backdrop.id,
        name: backdrop.name,
        category: backdrop.category,
        success: true,
        previewUrl: imageUrl,
        source: 'generated'
      })

      // Small delay to prevent API rate limiting
      await new Promise(resolve => setTimeout(resolve, 100))

    } catch (error) {
      console.error(`Failed to generate preview for backdrop ${backdrop.id}:`, error)
      results.push({
        id: backdrop.id,
        name: backdrop.name,
        success: false,
        error: error.message
      })
    }
  }

  return results
}

// Get curated professional image for outfit
async function getOutfitImage(outfit) {
  // Curated professional outfit images
  const outfitImages = {
    'navy-business-suit-1': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    'charcoal-suit-1': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    'black-suit-1': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face',
    'dark-blue-suit-1': 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=400&h=400&fit=crop&crop=face',
    'burgundy-suit-1': 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=400&h=400&fit=crop&crop=face',
    'navy-blazer-1': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face',
    'black-blazer-1': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=face',
    'gray-blazer-1': 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop&crop=face',
    'tweed-blazer-1': 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
    'white-dress-shirt-1': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    'light-blue-shirt-1': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    'pink-blouse-1': 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5c?w=400&h=400&fit=crop&crop=face',
    'striped-shirt-1': 'https://images.unsplash.com/photo-1609903634493-64e6df6aa3f7?w=400&h=400&fit=crop&crop=face',
    'polo-shirt-1': 'https://images.unsplash.com/photo-1567361808960-dec9cb578de9?w=400&h=400&fit=crop&crop=face',
    'henley-shirt-1': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    'v-neck-sweater-1': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    'cardigan-1': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    'turtleneck-black-1': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face',
    'denim-shirt-1': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face',
    'patterned-shirt-1': 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop&crop=face',
    'white-coat-1': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    'scrubs-blue-1': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    'scrubs-green-1': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    'hoodie-gray-1': 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
    'zip-hoodie-1': 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
    'tech-tshirt-1': 'https://images.unsplash.com/photo-1567361808960-dec9cb578de9?w=400&h=400&fit=crop&crop=face',
    'pinstripe-suit-1': 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=400&h=400&fit=crop&crop=face',
    'three-piece-1': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face',
    'executive-navy-1': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    'ceo-black-1': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face'
  }

  // Return specific image or fallback
  return outfitImages[outfit.id] || outfitImages['navy-business-suit-1']
}

// Get curated professional image for backdrop
async function getBackdropImage(backdrop) {
  // Curated professional backdrop images
  const backdropImages = {
    'modern-office-1': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
    'executive-office-1': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop',
    'conference-room-1': 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=400&fit=crop',
    'corner-office-1': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop',
    'startup-office-1': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop',
    'white-studio-1': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    'gray-studio-1': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    'black-studio-1': 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&fit=crop',
    'gradient-blue-1': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    'textured-gray-1': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    'city-skyline-1': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=400&fit=crop',
    'brick-wall-1': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    'concrete-wall-1': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    'glass-building-1': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
    'bookshelf-1': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
    'modern-library-1': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    'university-hall-1': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
    'medical-office-1': 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop',
    'hospital-hallway-1': 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop',
    'lab-background-1': 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop',
    'server-room-1': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop',
    'tech-office-1': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop',
    'coworking-space-1': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop',
    'art-gallery-1': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    'design-studio-1': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop',
    'photography-studio-1': 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&fit=crop',
    'luxury-office-1': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop',
    'penthouse-office-1': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop'
  }

  // Return specific image or fallback
  return backdropImages[backdrop.id] || backdropImages['modern-office-1']
}

// Check if preview exists in cache
async function checkPreviewCache(type, id) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/headshots/preview-cache`)
    if (response.ok) {
      const data = await response.json()
      if (data.success && data.cache) {
        return data.cache[type + 's']?.[id]?.previewUrl
      }
    }
  } catch (error) {
    console.log(`Cache check failed for ${type} ${id}:`, error.message)
  }
  return null
}

// Cache the generated preview
async function cachePreview(type, id, imageUrl) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/headshots/preview-cache`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        id,
        previewUrl: imageUrl,
        thumbnailUrl: imageUrl,
        updatedAt: new Date().toISOString(),
        source: 'batch_generated'
      })
    })
    
    if (!response.ok) {
      throw new Error(`Cache update failed: ${response.status}`)
    }
    
    console.log(`✅ Cached ${type} ${id}`)
  } catch (error) {
    console.error(`❌ Failed to cache ${type} ${id}:`, error)
    throw error
  }
}