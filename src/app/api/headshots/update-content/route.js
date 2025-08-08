import { NextResponse } from 'next/server'

// Bulk update systeem voor outfits en backdrops met AI gegenereerde content
// Dit systeem updatet alle data files met nieuwe preview URLs en prompts

export async function POST(request) {
  try {
    const { 
      action = 'generate_prompts', // 'generate_prompts', 'update_previews', 'full_update'
      regenerate = false 
    } = await request.json()

    let results = {}

    switch (action) {
      case 'generate_prompts':
        results = await generateAllPrompts()
        break
      case 'update_previews':
        results = await updateAllPreviews(regenerate)
        break
      case 'full_update':
        const prompts = await generateAllPrompts()
        const previews = await updateAllPreviews(regenerate)
        results = { prompts, previews }
        break
      default:
        throw new Error('Invalid action')
    }

    return NextResponse.json({
      success: true,
      action,
      results,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json({
      success: false,
      error: 'Content update failed: ' + error.message
    }, { status: 500 })
  }
}

// Generate optimized prompts voor alle outfits en backdrops
async function generateAllPrompts() {
  const { OUTFITS } = await import('../../../tools/ai-headshots/data/outfits')
  const { BACKDROPS } = await import('../../../tools/ai-headshots/data/backdrops')

  const outfitPrompts = OUTFITS.map(outfit => ({
    id: outfit.id,
    name: outfit.name,
    category: outfit.category,
    originalPrompt: generateAdvancedOutfitPrompt(outfit),
    marketingPrompt: generateMarketingPrompt(outfit, 'outfit'),
    variationPrompts: generatePromptVariations(outfit, 'outfit')
  }))

  const backdropPrompts = BACKDROPS.map(backdrop => ({
    id: backdrop.id,
    name: backdrop.name,
    category: backdrop.category,
    originalPrompt: generateAdvancedBackdropPrompt(backdrop),
    marketingPrompt: generateMarketingPrompt(backdrop, 'backdrop'),
    variationPrompts: generatePromptVariations(backdrop, 'backdrop')
  }))

  // Save prompts to files (in production, save to database)
  await savePromptsToFile('outfits', outfitPrompts)
  await savePromptsToFile('backdrops', backdropPrompts)

  return {
    outfits: outfitPrompts.length,
    backdrops: backdropPrompts.length,
    total: outfitPrompts.length + backdropPrompts.length
  }
}

// Update alle preview URLs met AI gegenereerde afbeeldingen
async function updateAllPreviews(regenerate = false) {
  console.log('Starting preview generation for all content...')

  // Generate previews via our preview API
  const response = await fetch('/api/headshots/generate-previews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'all',
      regenerate,
      style: 'professional'
    })
  })

  const result = await response.json()
  
  if (!result.success) {
    throw new Error('Preview generation failed: ' + result.error)
  }

  return result.summary
}

// Genereer geavanceerde prompts voor outfits
function generateAdvancedOutfitPrompt(outfit) {
  const basePrompt = `Professional headshot showcasing ${outfit.name.toLowerCase()}`
  
  // Category-specific styling
  const categoryStyles = {
    formal: 'formal business attire, executive presence, corporate photography, high-end business portrait',
    business: 'professional business wear, confident expression, office-appropriate styling, commercial headshot',
    smart_casual: 'smart casual attire, approachable professional, modern business casual, contemporary portrait',
    creative: 'creative professional style, artistic expression, innovative fashion, contemporary portrait photography',
    medical: 'medical professional attire, healthcare setting, trustworthy appearance, clinical photography',
    tech: 'tech industry style, modern professional, startup culture, contemporary business portrait',
    legal: 'legal professional attire, authoritative presence, law firm standard, formal business photography',
    executive: 'executive leadership style, C-suite presence, premium business attire, luxury corporate photography'
  }

  let prompt = `${basePrompt}, ${outfit.description}`
  
  // Add category styling
  if (categoryStyles[outfit.category]) {
    prompt += `, ${categoryStyles[outfit.category]}`
  }

  // Add color information
  if (outfit.colors && outfit.colors.length > 0) {
    prompt += `, featuring ${outfit.colors.join(' and ')} colors`
  }

  // Add gender-specific styling
  if (outfit.gender === 'male') {
    prompt += ', masculine styling, professional male fashion'
  } else if (outfit.gender === 'female') {
    prompt += ', feminine styling, professional female fashion'
  }

  // Add technical specifications
  prompt += ', studio lighting, professional photography, high resolution, clean background, fashion photography, commercial quality, perfect fit, professional styling, LinkedIn profile style, corporate headshot'

  // Add negative prompts
  const negativePrompt = 'casual clothes, unprofessional, messy, poor lighting, amateur photography, blurry, low quality, distorted, cartoon, illustration'

  return {
    positive: prompt,
    negative: negativePrompt,
    style: outfit.category,
    technical: 'high_quality_headshot'
  }
}

// Genereer geavanceerde prompts voor backdrops
function generateAdvancedBackdropPrompt(backdrop) {
  const basePrompt = `Professional headshot background: ${backdrop.name.toLowerCase()}`
  
  // Category-specific environments
  const categoryEnvironments = {
    office: 'corporate office environment, business setting, professional workspace, office interior',
    studio: 'photography studio, controlled lighting, seamless background, professional studio setup',
    urban: 'urban environment, city setting, modern architecture, metropolitan backdrop',
    library: 'academic library, scholarly setting, intellectual environment, bookshelf background',
    medical: 'healthcare facility, clinical setting, medical environment, hospital interior',
    tech: 'technology office, innovation hub, modern workspace, tech company interior',
    creative: 'creative studio, artistic workspace, contemporary design, creative environment',
    luxury: 'luxury setting, high-end interior, executive environment, premium space'
  }

  let prompt = `${basePrompt}, ${backdrop.description}`
  
  // Add category environment
  if (categoryEnvironments[backdrop.category]) {
    prompt += `, ${categoryEnvironments[backdrop.category]}`
  }

  // Add lighting and mood
  prompt += `, ${backdrop.lighting} lighting, ${backdrop.mood} atmosphere`
  
  // Add color palette
  if (backdrop.colors && backdrop.colors.length > 0) {
    prompt += `, ${backdrop.colors.join(' and ')} color palette`
  }

  // Add technical specifications
  prompt += ', architectural photography, interior design, professional environment, high resolution, perfect lighting, commercial quality, depth of field, professional backdrop'

  return {
    positive: prompt,
    negative: 'poor lighting, amateur photography, cluttered, unprofessional, blurry, low quality, distorted',
    style: backdrop.category,
    technical: 'professional_background'
  }
}

// Genereer marketing prompts
function generateMarketingPrompt(item, type) {
  const marketingPrompts = {
    outfit: {
      hero: `Professional business headshot featuring ${item.name.toLowerCase()}, perfect for LinkedIn profiles and corporate websites`,
      showcase: `Showcase of ${item.name.toLowerCase()} - professional attire for modern business professionals`,
      category: `${item.category} professional style: ${item.name.toLowerCase()} for confident business presence`
    },
    backdrop: {
      hero: `Professional headshot background: ${item.name.toLowerCase()} - perfect setting for business portraits`,
      showcase: `Premium backdrop option: ${item.name.toLowerCase()} for sophisticated professional headshots`,
      category: `${item.category} environment: ${item.name.toLowerCase()} for professional photography`
    }
  }

  return marketingPrompts[type] || {}
}

// Genereer prompt variaties
function generatePromptVariations(item, type) {
  const variations = []
  
  // Style variations
  const styles = ['professional', 'executive', 'modern', 'classic', 'contemporary']
  
  // Lighting variations
  const lighting = ['natural lighting', 'studio lighting', 'soft lighting', 'dramatic lighting']
  
  // Expression variations
  const expressions = ['confident smile', 'professional expression', 'approachable look', 'executive presence']

  styles.forEach(style => {
    lighting.forEach(light => {
      expressions.forEach(expr => {
        if (type === 'outfit') {
          variations.push({
            style,
            prompt: `${style} headshot featuring ${item.name.toLowerCase()}, ${light}, ${expr}, ${item.description}, professional photography`
          })
        } else {
          variations.push({
            style,
            prompt: `Professional headshot with ${item.name.toLowerCase()} background, ${light}, ${expr}, ${item.description}, background photography`
          })
        }
      })
    })
  })

  // Return first 10 variations to avoid too many options
  return variations.slice(0, 10)
}

// Save prompts to JSON files
async function savePromptsToFile(type, prompts) {
  const fs = require('fs').promises
  const path = require('path')
  
  try {
    const filePath = path.join(process.cwd(), `src/app/tools/ai-headshots/data/${type}-prompts.json`)
    await fs.writeFile(filePath, JSON.stringify(prompts, null, 2))
    console.log(`Saved ${prompts.length} ${type} prompts to ${filePath}`)
  } catch (error) {
    console.error(`Failed to save ${type} prompts:`, error)
    // In production, save to database instead
  }
}

// Batch generation voor marketing content
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action') || 'status'

  try {
    switch (action) {
      case 'status':
        return await getGenerationStatus()
      case 'stats':
        return await getContentStats()
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Get generation status
async function getGenerationStatus() {
  const { OUTFITS } = await import('../../../tools/ai-headshots/data/outfits')
  const { BACKDROPS } = await import('../../../tools/ai-headshots/data/backdrops')

  const outfitsWithPreviews = OUTFITS.filter(o => o.previewUrl).length
  const backdropsWithPreviews = BACKDROPS.filter(b => b.previewUrl).length

  return NextResponse.json({
    success: true,
    status: {
      outfits: {
        total: OUTFITS.length,
        withPreviews: outfitsWithPreviews,
        percentage: ((outfitsWithPreviews / OUTFITS.length) * 100).toFixed(1)
      },
      backdrops: {
        total: BACKDROPS.length,
        withPreviews: backdropsWithPreviews,
        percentage: ((backdropsWithPreviews / BACKDROPS.length) * 100).toFixed(1)
      }
    }
  })
}

// Get content statistics
async function getContentStats() {
  const { OUTFITS, OUTFIT_CATEGORIES } = await import('../../../tools/ai-headshots/data/outfits')
  const { BACKDROPS, BACKDROP_CATEGORIES } = await import('../../../tools/ai-headshots/data/backdrops')

  const outfitStats = Object.keys(OUTFIT_CATEGORIES).map(category => ({
    category,
    name: OUTFIT_CATEGORIES[category].name,
    count: OUTFITS.filter(o => o.category === category).length,
    withPreviews: OUTFITS.filter(o => o.category === category && o.previewUrl).length
  }))

  const backdropStats = Object.keys(BACKDROP_CATEGORIES).map(category => ({
    category,
    name: BACKDROP_CATEGORIES[category].name,
    count: BACKDROPS.filter(b => b.category === category).length,
    withPreviews: BACKDROPS.filter(b => b.category === category && b.previewUrl).length
  }))

  return NextResponse.json({
    success: true,
    stats: {
      outfits: {
        total: OUTFITS.length,
        categories: outfitStats
      },
      backdrops: {
        total: BACKDROPS.length,
        categories: backdropStats
      }
    }
  })
}