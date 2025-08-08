import { NextResponse } from 'next/server'

// In-memory cache for preview URLs
// In production, this would be stored in a database or Redis
let previewCache = {
  outfits: new Map(),
  backdrops: new Map(),
  lastUpdated: new Date().toISOString()
}

export async function POST(request) {
  try {
    const { type, id, previewUrl, thumbnailUrl, updatedAt } = await request.json()
    
    if (!type || !id || !previewUrl) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: type, id, previewUrl'
      }, { status: 400 })
    }
    
    // Update cache
    const cacheKey = type === 'outfit' ? 'outfits' : 'backdrops'
    previewCache[cacheKey].set(id, {
      previewUrl,
      thumbnailUrl,
      updatedAt: updatedAt || new Date().toISOString()
    })
    
    previewCache.lastUpdated = new Date().toISOString()
    
    console.log(`📸 Cached ${type} preview for ${id}:`, previewUrl)
    
    return NextResponse.json({
      success: true,
      message: `${type} preview cached successfully`,
      id,
      previewUrl,
      cacheSize: {
        outfits: previewCache.outfits.size,
        backdrops: previewCache.backdrops.size
      }
    })
    
  } catch (error) {
    console.error('Preview cache error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to cache preview: ' + error.message
    }, { status: 500 })
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // 'outfit' or 'backdrop'
    const id = searchParams.get('id')
    
    if (type && id) {
      // Get specific item preview
      const cacheKey = type === 'outfit' ? 'outfits' : 'backdrops'
      const preview = previewCache[cacheKey].get(id)
      
      return NextResponse.json({
        success: true,
        preview: preview || null,
        found: !!preview
      })
    }
    
    // Get all cached previews
    const outfits = Object.fromEntries(previewCache.outfits)
    const backdrops = Object.fromEntries(previewCache.backdrops)
    
    return NextResponse.json({
      success: true,
      cache: {
        outfits,
        backdrops,
        stats: {
          outfitCount: previewCache.outfits.size,
          backdropCount: previewCache.backdrops.size,
          lastUpdated: previewCache.lastUpdated
        }
      }
    })
    
  } catch (error) {
    console.error('Preview cache GET error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to get preview cache: ' + error.message
    }, { status: 500 })
  }
}

// Helper function to get cached preview URL for use in data files
export function getCachedPreviewUrl(type, id) {
  const cacheKey = type === 'outfit' ? 'outfits' : 'backdrops'
  const preview = previewCache[cacheKey].get(id)
  return preview?.previewUrl || null
}

export { previewCache }