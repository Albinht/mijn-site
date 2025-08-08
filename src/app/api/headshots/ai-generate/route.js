import { NextResponse } from 'next/server'
import AWS from 'aws-sdk'

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const S3_BUCKET = process.env.S3_BUCKET

// AI Photo Generation using Replicate API
// Supports multiple models: Flux, SDXL, Professional Headshots

const REPLICATE_CONFIG = {
  apiToken: process.env.REPLICATE_API_TOKEN,
  baseUrl: 'https://api.replicate.com/v1',
  models: {
    // Professional headshot models - using FLUX for previews
    headshots: 'black-forest-labs/flux-schnell:c846a69991daf4c0e5d016514849d14ee5b2e6846ce6b9d6f21369e564cfe51e',
    flux: 'black-forest-labs/flux-schnell:bf60c4d88c7905b2b23de1b3c6e8cf654e8d6e33962c9fac0bc7a03c3cd6faeb',
    sdxl: 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b'
  }
}

// Professional prompt templates voor verschillende stijlen
const PROMPT_TEMPLATES = {
  business: {
    formal: "Professional business headshot of a {gender} person wearing {outfit}, {backdrop}, corporate lighting, high-end photography, sharp focus, professional makeup, confident expression, LinkedIn profile photo style",
    casual: "Professional casual headshot of a {gender} person wearing {outfit}, {backdrop}, natural lighting, approachable expression, modern business casual style"
  },
  creative: {
    modern: "Creative professional headshot of a {gender} person wearing {outfit}, {backdrop}, artistic lighting, contemporary style, creative industry professional",
    artistic: "Artistic portrait of a {gender} person wearing {outfit}, {backdrop}, dramatic lighting, creative expression, high-end portrait photography"
  },
  medical: {
    clinical: "Medical professional headshot of a {gender} person wearing {outfit}, {backdrop}, clean clinical lighting, trustworthy expression, healthcare professional",
    warm: "Approachable medical professional portrait of a {gender} person wearing {outfit}, {backdrop}, warm professional lighting"
  },
  tech: {
    modern: "Tech professional headshot of a {gender} person wearing {outfit}, {backdrop}, modern lighting, innovative expression, startup executive style",
    casual: "Casual tech professional portrait of a {gender} person wearing {outfit}, {backdrop}, relaxed but professional"
  }
}

const NEGATIVE_PROMPTS = {
  standard: "blurry, low quality, distorted face, multiple faces, cartoon, painting, illustration, bad anatomy, deformed, mutation, extra limbs, bad lighting, overexposed, underexposed, noise, grainy, pixelated, logo, watermark, text, signature",
  professional: "unprofessional, casual clothes, messy hair, poor lighting, amateur photography, social media filter, snapchat filter, instagram filter, low resolution, jpeg artifacts"
}

export async function POST(request) {
  try {
    const { 
      jobId, 
      outfitId, 
      backdropId, 
      referenceImageUrl,
      style = 'professional',
      gender = 'person',
      count = 4,
      framing = { crop: 'head-shoulders', orientation: 'portrait' }
    } = await request.json()

    if (!jobId || !outfitId || !backdropId) {
      return NextResponse.json({
        success: false,
        error: 'Missing required parameters: jobId, outfitId, backdropId'
      }, { status: 400 })
    }

    // Load outfit en backdrop data
    const outfit = await getOutfitData(outfitId)
    const backdrop = await getBackdropData(backdropId)

    if (!outfit || !backdrop) {
      return NextResponse.json({
        success: false,
        error: 'Invalid outfit or backdrop ID'
      }, { status: 400 })
    }

    // Generate professional prompt
    const prompt = generatePrompt(outfit, backdrop, style, gender, framing)
    const negativePrompt = NEGATIVE_PROMPTS.professional + ", " + NEGATIVE_PROMPTS.standard

    // Mock API call voor development (vervang met echte Replicate call)
    if (!REPLICATE_CONFIG.apiToken) {
      console.log('Mock AI Generation:', {
        jobId,
        prompt,
        outfit: outfit.name,
        backdrop: backdrop.name,
        style,
        count
      })

      // Simulate generation time
      await new Promise(resolve => setTimeout(resolve, 2000))

      const mockResults = Array.from({ length: count }, (_, i) => ({
        id: `generated_${Date.now()}_${i}`,
        url: `https://mock-ai-generated-headshot-${i + 1}.jpg`,
        prompt: prompt.substring(0, 100) + '...',
        style: `${outfit.category}-${backdrop.category}`,
        quality_score: 0.85 + Math.random() * 0.15,
        generated_at: new Date().toISOString()
      }))

      return NextResponse.json({
        success: true,
        message: 'Development mode - AI generation mocked',
        results: mockResults,
        metadata: {
          jobId,
          outfit: outfit.name,
          backdrop: backdrop.name,
          prompt,
          negativePrompt,
          model: 'mock-headshot-model',
          generationTime: '2.1s'
        }
      })
    }

    // Real Replicate API call
    const generationResults = await generateWithReplicate({
      prompt,
      negativePrompt,
      referenceImageUrl,
      count,
      outfit,
      backdrop,
      framing
    })

    // Save results to database en S3
    const savedResults = await saveGenerationResults(jobId, generationResults, {
      outfitId,
      backdropId,
      prompt,
      style,
      framing
    })

    return NextResponse.json({
      success: true,
      results: savedResults,
      metadata: {
        jobId,
        outfit: outfit.name,
        backdrop: backdrop.name,
        prompt,
        model: REPLICATE_CONFIG.models.headshots,
        generationTime: generationResults.processingTime
      }
    })

  } catch (error) {
    console.error('AI Generation error:', error)
    return NextResponse.json({
      success: false,
      error: 'AI generation failed: ' + error.message
    }, { status: 500 })
  }
}

// Generate professional prompt based on style combination
function generatePrompt(outfit, backdrop, style, gender, framing) {
  // Base template selection
  let template = PROMPT_TEMPLATES.business.formal
  
  if (outfit.category === 'creative') {
    template = PROMPT_TEMPLATES.creative.modern
  } else if (outfit.category === 'medical') {
    template = PROMPT_TEMPLATES.medical.clinical
  } else if (outfit.category === 'tech') {
    template = PROMPT_TEMPLATES.tech.modern
  }

  // Build outfit description
  const outfitDesc = `${outfit.description}, ${outfit.colors.join(' and ')} colors`
  
  // Build backdrop description  
  const backdropDesc = `${backdrop.description}, ${backdrop.lighting} lighting, ${backdrop.mood} atmosphere`

  // Add framing specifications
  const framingDesc = framing.crop === 'torso' ? 'upper body shot' : 'head and shoulders portrait'
  const orientationDesc = framing.orientation === 'landscape' ? 'horizontal composition' : 'vertical portrait composition'

  // Replace template variables
  let prompt = template
    .replace('{gender}', gender)
    .replace('{outfit}', outfitDesc)
    .replace('{backdrop}', backdropDesc)

  // Add technical specifications
  prompt += `, ${framingDesc}, ${orientationDesc}, 8K resolution, professional photography, studio quality, perfect skin, natural skin texture, professional retouching, commercial headshot style`

  // Add style-specific enhancements
  if (style === 'executive') {
    prompt += ', executive presence, confident leadership expression, premium business portrait'
  } else if (style === 'creative') {
    prompt += ', creative personality, artistic expression, contemporary portrait style'
  }

  return prompt
}

// Real Replicate API integration
async function generateWithReplicate({ prompt, negativePrompt, referenceImageUrl, count, outfit, backdrop, framing }) {
  const startTime = Date.now()
  
  try {
    const response = await fetch(`${REPLICATE_CONFIG.baseUrl}/predictions`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${REPLICATE_CONFIG.apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        version: REPLICATE_CONFIG.models.headshots,
        input: {
          prompt,
          num_outputs: count,
          aspect_ratio: framing.orientation === 'square' ? '1:1' : 
                        framing.orientation === 'landscape' ? '16:9' : '3:4',
          output_format: 'jpg',
          output_quality: 80
        }
      })
    })

    if (!response.ok) {
      throw new Error(`Replicate API error: ${response.status}`)
    }

    const prediction = await response.json()
    
    // Poll for completion
    const completedPrediction = await pollPredictionCompletion(prediction.id)
    
    const processingTime = ((Date.now() - startTime) / 1000).toFixed(1) + 's'
    
    return {
      id: prediction.id,
      status: completedPrediction.status,
      images: completedPrediction.output || [],
      processingTime,
      logs: completedPrediction.logs
    }

  } catch (error) {
    console.error('Replicate generation error:', error)
    throw error
  }
}

// Poll Replicate prediction until completion
async function pollPredictionCompletion(predictionId, maxAttempts = 60) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const response = await fetch(`${REPLICATE_CONFIG.baseUrl}/predictions/${predictionId}`, {
        headers: {
          'Authorization': `Token ${REPLICATE_CONFIG.apiToken}`
        }
      })

      const prediction = await response.json()
      
      if (prediction.status === 'succeeded') {
        return prediction
      } else if (prediction.status === 'failed') {
        throw new Error(`Prediction failed: ${prediction.error}`)
      }
      
      // Wait before next poll
      await new Promise(resolve => setTimeout(resolve, 2000))
      
    } catch (error) {
      console.error('Polling error:', error)
      if (attempt === maxAttempts - 1) throw error
    }
  }
  
  throw new Error('Prediction timed out')
}

// Helper functions to load outfit/backdrop data
async function getOutfitData(outfitId) {
  // In production, load from database
  // For now, load from our data files
  const { OUTFITS } = await import('../../../tools/ai-headshots/data/outfits')
  return OUTFITS.find(o => o.id === outfitId)
}

async function getBackdropData(backdropId) {
  // In production, load from database  
  const { BACKDROPS } = await import('../../../tools/ai-headshots/data/backdrops')
  return BACKDROPS.find(b => b.id === backdropId)
}

// Save generation results to S3 and database
async function saveGenerationResults(jobId, generationResults, metadata) {
  if (!S3_BUCKET || !generationResults.images?.length) {
    console.log('Skipping S3 upload - no bucket or images')
    return generationResults.images?.map((imageUrl, index) => ({
      id: `${jobId}_${metadata.outfitId}_${metadata.backdropId}_${index}`,
      url: imageUrl,
      thumbnailUrl: imageUrl,
      s3Key: null,
      metadata: {
        ...metadata,
        index,
        generatedAt: new Date().toISOString()
      }
    })) || []
  }

  const savedResults = []
  
  for (let index = 0; index < generationResults.images.length; index++) {
    const imageUrl = generationResults.images[index]
    
    try {
      // Download image from Replicate
      const imageResponse = await fetch(imageUrl)
      const imageBuffer = await imageResponse.buffer()
      
      // Generate S3 key
      const timestamp = Date.now()
      const s3Key = `headshots/jobs/${jobId}/${metadata.outfitId}_${metadata.backdropId}_${timestamp}_${index}.jpg`
      
      // Upload to S3
      const uploadResult = await s3.upload({
        Bucket: S3_BUCKET,
        Key: s3Key,
        Body: imageBuffer,
        ContentType: 'image/jpeg',
        ACL: 'public-read', // Make publicly accessible
        Metadata: {
          jobId,
          outfitId: metadata.outfitId,
          backdropId: metadata.backdropId,
          style: metadata.style,
          generatedAt: new Date().toISOString()
        }
      }).promise()
      
      // Create thumbnail (resize to 300x300)
      const thumbnailBuffer = await createThumbnail(imageBuffer)
      const thumbnailKey = s3Key.replace('.jpg', '_thumb.jpg')
      
      const thumbnailUpload = await s3.upload({
        Bucket: S3_BUCKET,
        Key: thumbnailKey,
        Body: thumbnailBuffer,
        ContentType: 'image/jpeg',
        ACL: 'public-read'
      }).promise()
      
      savedResults.push({
        id: `${jobId}_${metadata.outfitId}_${metadata.backdropId}_${index}`,
        url: uploadResult.Location,
        thumbnailUrl: thumbnailUpload.Location,
        s3Key,
        thumbnailKey,
        metadata: {
          ...metadata,
          index,
          generatedAt: new Date().toISOString(),
          originalUrl: imageUrl // Keep original Replicate URL for reference
        }
      })
      
      console.log(`Uploaded image ${index + 1} to S3:`, uploadResult.Location)
      
    } catch (error) {
      console.error(`Failed to upload image ${index}:`, error)
      
      // Fallback to original Replicate URL
      savedResults.push({
        id: `${jobId}_${metadata.outfitId}_${metadata.backdropId}_${index}`,
        url: imageUrl,
        thumbnailUrl: imageUrl,
        s3Key: null,
        error: error.message,
        metadata: {
          ...metadata,
          index,
          generatedAt: new Date().toISOString()
        }
      })
    }
  }

  return savedResults
}

// Create thumbnail using basic image processing
async function createThumbnail(imageBuffer) {
  // For now, return the original buffer
  // In production, you'd use sharp or similar to resize
  // npm install sharp
  // const sharp = require('sharp')
  // return sharp(imageBuffer).resize(300, 300).jpeg({ quality: 85 }).toBuffer()
  
  return imageBuffer
}