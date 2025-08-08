import { NextResponse } from 'next/server'

// Automatische preview generator voor alle outfit/backdrop combinaties
// Dit genereert marketing afbeeldingen voor de website

export async function POST(request) {
  try {
    const { 
      type = 'all', // 'outfits', 'backdrops', 'all'
      category = null,
      limit = 50,
      style = 'professional',
      regenerate = false 
    } = await request.json()

    console.log('Starting preview generation:', { type, category, limit, style })

    let generatedPreviews = []

    if (type === 'outfits' || type === 'all') {
      const outfitPreviews = await generateOutfitPreviews({ category, limit, style, regenerate })
      generatedPreviews.push(...outfitPreviews)
    }

    if (type === 'backdrops' || type === 'all') {
      const backdropPreviews = await generateBackdropPreviews({ category, limit, style, regenerate })
      generatedPreviews.push(...backdropPreviews)
    }

    return NextResponse.json({
      success: true,
      generated: generatedPreviews.length,
      previews: generatedPreviews,
      summary: {
        outfits: generatedPreviews.filter(p => p.type === 'outfit').length,
        backdrops: generatedPreviews.filter(p => p.type === 'backdrop').length,
        total: generatedPreviews.length
      }
    })

  } catch (error) {
    console.error('Preview generation error:', error)
    return NextResponse.json({
      success: false,
      error: 'Preview generation failed: ' + error.message
    }, { status: 500 })
  }
}

// Generate outfit preview images
async function generateOutfitPreviews({ category, limit, style, regenerate }) {
  const { OUTFITS, OUTFIT_CATEGORIES } = await import('../../../tools/ai-headshots/data/outfits')
  
  let outfitsToProcess = OUTFITS
  
  if (category) {
    outfitsToProcess = outfitsToProcess.filter(o => o.category === category)
  }
  
  if (limit) {
    outfitsToProcess = outfitsToProcess.slice(0, limit)
  }

  const previews = []

  for (const outfit of outfitsToProcess) {
    try {
      // Skip if preview exists and not regenerating
      if (!regenerate && outfit.previewUrl) {
        continue
      }

      const prompt = generateOutfitPrompt(outfit, style)
      const previewResult = await generatePreviewImage(prompt, outfit.id, 'outfit')

      const preview = {
        id: outfit.id,
        type: 'outfit',
        name: outfit.name,
        category: outfit.category,
        categoryName: OUTFIT_CATEGORIES[outfit.category]?.name,
        prompt,
        previewUrl: previewResult.url,
        thumbnailUrl: previewResult.thumbnailUrl,
        generated: true,
        generatedAt: new Date().toISOString()
      }

      previews.push(preview)

      // Update outfit data with new preview URL
      await updateOutfitPreview(outfit.id, previewResult.url, previewResult.thumbnailUrl)

    } catch (error) {
      console.error(`Failed to generate preview for outfit ${outfit.id}:`, error)
      previews.push({
        id: outfit.id,
        type: 'outfit',
        name: outfit.name,
        error: error.message,
        generated: false
      })
    }
  }

  return previews
}

// Generate backdrop preview images  
async function generateBackdropPreviews({ category, limit, style, regenerate }) {
  const { BACKDROPS, BACKDROP_CATEGORIES } = await import('../../../tools/ai-headshots/data/backdrops')
  
  let backdropsToProcess = BACKDROPS
  
  if (category) {
    backdropsToProcess = backdropsToProcess.filter(b => b.category === category)
  }
  
  if (limit) {
    backdropsToProcess = backdropsToProcess.slice(0, limit)
  }

  const previews = []

  for (const backdrop of backdropsToProcess) {
    try {
      // Skip if preview exists and not regenerating
      if (!regenerate && backdrop.previewUrl) {
        continue
      }

      const prompt = generateBackdropPrompt(backdrop, style)
      const previewResult = await generatePreviewImage(prompt, backdrop.id, 'backdrop')

      const preview = {
        id: backdrop.id,
        type: 'backdrop',
        name: backdrop.name,
        category: backdrop.category,
        categoryName: BACKDROP_CATEGORIES[backdrop.category]?.name,
        prompt,
        previewUrl: previewResult.url,
        thumbnailUrl: previewResult.thumbnailUrl,
        generated: true,
        generatedAt: new Date().toISOString()
      }

      previews.push(preview)

      // Update backdrop data with new preview URL
      await updateBackdropPreview(backdrop.id, previewResult.url, previewResult.thumbnailUrl)

    } catch (error) {
      console.error(`Failed to generate preview for backdrop ${backdrop.id}:`, error)
      previews.push({
        id: backdrop.id,
        type: 'backdrop',
        name: backdrop.name,
        error: error.message,
        generated: false
      })
    }
  }

  return previews
}

// Generate outfit-specific prompts
function generateOutfitPrompt(outfit, style) {
  const basePrompts = {
    formal: `Professional business portrait showing ${outfit.name.toLowerCase()}, ${outfit.description}, clean studio background`,
    business: `Business professional wearing ${outfit.name.toLowerCase()}, ${outfit.description}, office environment`,
    creative: `Creative professional in ${outfit.name.toLowerCase()}, ${outfit.description}, modern artistic setting`,
    medical: `Healthcare professional wearing ${outfit.name.toLowerCase()}, ${outfit.description}, clinical environment`,
    tech: `Tech professional in ${outfit.name.toLowerCase()}, ${outfit.description}, modern office setting`
  }

  let prompt = basePrompts[outfit.category] || basePrompts.business
  
  // Add color information
  if (outfit.colors && outfit.colors.length > 0) {
    prompt += `, ${outfit.colors.join(' and ')} colors`
  }

  // Add style-specific details
  if (style === 'executive') {
    prompt += ', executive presence, high-end photography, luxury business portrait'
  } else if (style === 'professional') {
    prompt += ', professional photography, LinkedIn profile style, corporate headshot'
  }

  // Technical specifications for outfit previews
  prompt += ', fashion photography, professional lighting, high resolution, clean background, focus on clothing details, professional styling, commercial photography'

  return prompt
}

// Generate backdrop-specific prompts
function generateBackdropPrompt(backdrop, style) {
  const basePrompt = `${backdrop.description}, ${backdrop.lighting} lighting, ${backdrop.mood} atmosphere`
  
  // Add environment-specific details
  let prompt = `Professional headshot background: ${basePrompt}`
  
  if (backdrop.colors && backdrop.colors.length > 0) {
    prompt += `, ${backdrop.colors.join(' and ')} color palette`
  }

  // Add category-specific enhancements
  const categoryEnhancements = {
    office: ', corporate environment, business setting, professional workspace',
    studio: ', photography studio, controlled lighting, seamless background',
    urban: ', urban environment, city setting, modern architecture',
    library: ', academic setting, scholarly atmosphere, intellectual environment',
    medical: ', healthcare facility, clinical setting, medical environment',
    tech: ', technology workspace, innovation hub, modern tech office',
    creative: ', artistic space, creative studio, contemporary design',
    luxury: ', high-end setting, premium environment, executive space'
  }

  prompt += categoryEnhancements[backdrop.category] || categoryEnhancements.office

  // Technical specifications for backdrop previews
  prompt += ', architectural photography, interior design, professional environment photography, high resolution, perfect lighting, commercial quality'

  return prompt
}

// Generate preview image using AI API or fallback to professional stock photos
async function generatePreviewImage(prompt, itemId, type) {
  console.log(`Generating ${type} preview for ${itemId}:`, prompt)
  
  try {
    // For now, use curated professional stock photos that match the style
    // This ensures consistent, high-quality previews while AI generation is being optimized
    const stockPhoto = await getMatchingStockPhoto(itemId, type, prompt)
    
    if (stockPhoto) {
      return {
        url: stockPhoto.url,
        thumbnailUrl: stockPhoto.thumbnailUrl || stockPhoto.url,
        generatedAt: new Date().toISOString(),
        source: 'curated_stock'
      }
    }

    // Fallback: Try AI generation if available
    if (process.env.REPLICATE_API_TOKEN) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/headshots/ai-generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobId: `preview-${type}-${itemId}-${Date.now()}`,
          outfitId: type === 'outfit' ? itemId : 'navy-business-suit-1',
          backdropId: type === 'backdrop' ? itemId : 'white-studio-1',
          style: 'professional',
          count: 1,
          framing: { crop: 'head-shoulders', orientation: 'portrait' }
        })
      })
      
      if (response.ok) {
        const result = await response.json()
        if (result.success && result.results?.[0]) {
          return {
            url: result.results[0].url,
            thumbnailUrl: result.results[0].thumbnailUrl,
            generatedAt: new Date().toISOString(),
            source: 'ai_generated'
          }
        }
      }
    }
    
    // Final fallback to generic professional image
    return await getFallbackImage(type, itemId)
    
  } catch (error) {
    console.error(`Failed to generate ${type} preview for ${itemId}:`, error)
    return await getFallbackImage(type, itemId)
  }
}

// Update outfit data with preview URLs
async function updateOutfitPreview(outfitId, previewUrl, thumbnailUrl) {
  try {
    // Save to a dynamic cache that can be loaded by the data files
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/headshots/preview-cache`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'outfit',
        id: outfitId,
        previewUrl,
        thumbnailUrl,
        updatedAt: new Date().toISOString()
      })
    })
    
    if (response.ok) {
      console.log(`✅ Updated outfit ${outfitId} with preview:`, previewUrl)
    } else {
      console.error(`❌ Failed to update outfit ${outfitId}:`, response.status)
    }
  } catch (error) {
    console.error(`❌ Error updating outfit ${outfitId}:`, error)
  }
}

// Update backdrop data with preview URLs
async function updateBackdropPreview(backdropId, previewUrl, thumbnailUrl) {
  try {
    // Save to a dynamic cache that can be loaded by the data files
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/headshots/preview-cache`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'backdrop',
        id: backdropId,
        previewUrl,
        thumbnailUrl,
        updatedAt: new Date().toISOString()
      })
    })
    
    if (response.ok) {
      console.log(`✅ Updated backdrop ${backdropId} with preview:`, previewUrl)
    } else {
      console.error(`❌ Failed to update backdrop ${backdropId}:`, response.status)
    }
  } catch (error) {
    console.error(`❌ Error updating backdrop ${backdropId}:`, error)
  }
}

// Batch generation voor marketing content
export async function generateMarketingContent() {
  try {
    // Generate hero section images
    const heroImages = await generateHeroImages()
    
    // Generate category showcase images
    const categoryImages = await generateCategoryShowcaseImages()
    
    // Generate before/after examples
    const exampleImages = await generateExampleImages()

    return {
      success: true,
      marketing: {
        hero: heroImages,
        categories: categoryImages,
        examples: exampleImages
      }
    }

  } catch (error) {
    console.error('Marketing content generation error:', error)
    throw error
  }
}

// Generate hero section showcase images
async function generateHeroImages() {
  const heroPrompts = [
    "Executive business professional in premium navy suit, luxury office background, confident expression, high-end corporate photography, LinkedIn profile style",
    "Creative professional in modern casual blazer, contemporary office setting, approachable smile, artistic lighting, professional headshot",
    "Medical professional in white lab coat, clean clinical background, trustworthy expression, healthcare photography",
    "Tech startup founder in smart casual outfit, modern coworking space, innovative expression, contemporary business portrait"
  ]

  const heroImages = []
  
  for (let i = 0; i < heroPrompts.length; i++) {
    const result = await generatePreviewImage(heroPrompts[i], `hero_${i + 1}`, 'hero')
    heroImages.push({
      id: `hero_${i + 1}`,
      prompt: heroPrompts[i],
      url: result.url,
      usage: 'hero_section'
    })
  }

  return heroImages
}

// Generate category showcase images
async function generateCategoryShowcaseImages() {
  const categories = [
    { name: 'Business Professional', prompt: 'Business professional in formal suit, corporate office, executive presence' },
    { name: 'Creative Industry', prompt: 'Creative professional in modern casual wear, artistic studio, creative expression' },
    { name: 'Healthcare', prompt: 'Medical professional in clinical attire, healthcare facility, caring expression' },
    { name: 'Technology', prompt: 'Tech professional in smart casual, modern office, innovative look' }
  ]

  return categories.map((cat, i) => ({
    id: `category_${i + 1}`,
    category: cat.name,
    prompt: cat.prompt,
    url: `https://mock-category-${i + 1}.jpg`,
    usage: 'category_showcase'
  }))
}

// Generate before/after example images
async function generateExampleImages() {
  return [
    {
      id: 'example_1',
      before: 'https://mock-before-1.jpg',
      after: 'https://mock-after-1.jpg',
      style: 'Executive Business'
    },
    {
      id: 'example_2',
      before: 'https://mock-before-2.jpg', 
      after: 'https://mock-after-2.jpg',
      style: 'Creative Professional'
    }
  ]
}

// Get matching stock photo based on outfit/backdrop characteristics
async function getMatchingStockPhoto(itemId, type, prompt) {
  // Curated professional photos that match specific outfit/backdrop styles
  const stockPhotos = {
    // OUTFIT STOCK PHOTOS
    'navy-business-suit-1': {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Professional man in navy business suit'
    },
    'charcoal-suit-1': {
      url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Business professional in charcoal gray suit'
    },
    'black-suit-1': {
      url: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face',
      description: 'Executive in elegant black business suit'
    },
    'dark-blue-suit-1': {
      url: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=400&h=400&fit=crop&crop=face',
      description: 'Professional in dark blue pinstripe suit'
    },
    'burgundy-suit-1': {
      url: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=400&h=400&fit=crop&crop=face',
      description: 'Modern professional in burgundy business suit'
    },
    'navy-blazer-1': {
      url: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face',
      description: 'Business professional in navy blazer'
    },
    'black-blazer-1': {
      url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=face',
      description: 'Professional in sharp black blazer'
    },
    'gray-blazer-1': {
      url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop&crop=face',
      description: 'Modern professional in light gray blazer'
    },
    'white-dress-shirt-1': {
      url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Clean professional in crisp white dress shirt'
    },
    'light-blue-shirt-1': {
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      description: 'Professional in light blue dress shirt'
    },
    'pink-blouse-1': {
      url: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5c?w=400&h=400&fit=crop&crop=face',
      description: 'Professional woman in soft pink blouse'
    },
    'polo-shirt-1': {
      url: 'https://images.unsplash.com/photo-1567361808960-dec9cb578de9?w=400&h=400&fit=crop&crop=face',
      description: 'Smart casual professional in polo shirt'
    },
    'turtleneck-black-1': {
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face',
      description: 'Creative professional in black turtleneck'
    },
    'hoodie-gray-1': {
      url: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
      description: 'Tech professional in gray hoodie'
    },
    'scrubs-blue-1': {
      url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      description: 'Healthcare professional in navy medical scrubs'
    },

    // BACKDROP STOCK PHOTOS  
    'modern-office-1': {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
      description: 'Clean modern office space with glass walls'
    },
    'conference-room-1': {
      url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=400&fit=crop',
      description: 'Professional conference room setting'
    },
    'corner-office-1': {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop',
      description: 'Prestigious corner office with city view'
    },
    'startup-office-1': {
      url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop',
      description: 'Modern startup office with exposed brick'
    },
    'white-studio-1': {
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
      description: 'Pure white photography studio background'
    },
    'gray-studio-1': {
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      description: 'Professional gray studio backdrop'
    },
    'black-studio-1': {
      url: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&fit=crop',
      description: 'Dramatic black studio background'
    },
    'brick-wall-1': {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      description: 'Industrial exposed brick wall background'
    },
    'bookshelf-1': {
      url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
      description: 'Classic bookshelf with leather-bound books'
    },
    'medical-office-1': {
      url: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop',
      description: 'Clean medical office consultation room'
    }
  }

  return stockPhotos[itemId] || null
}

// Get fallback image for items without specific stock photos
async function getFallbackImage(type, itemId) {
  const fallbacks = {
    outfit: {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Generic professional outfit'
    },
    backdrop: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
      description: 'Generic professional background'
    }
  }

  const fallback = fallbacks[type] || fallbacks.outfit
  
  return {
    url: fallback.url,
    thumbnailUrl: fallback.url,
    generatedAt: new Date().toISOString(),
    source: 'fallback',
    note: `Fallback image for ${type} ${itemId}`
  }
}