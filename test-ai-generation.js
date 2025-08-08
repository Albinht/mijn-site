// Simple test script voor AI generation
const fetch = require('node-fetch')

async function testAIGeneration() {
  console.log('🧪 Testing AI Headshots Generation System...\n')
  
  try {
    // Test 1: Content Status
    console.log('1️⃣ Testing content status API...')
    const statusResponse = await fetch('http://localhost:3001/api/headshots/update-content?action=status')
    const statusData = await statusResponse.json()
    
    if (statusData.success) {
      console.log('✅ Content status API works!')
      console.log(`   Outfits: ${statusData.status.outfits.total} total, ${statusData.status.outfits.withPreviews} with previews`)
      console.log(`   Backdrops: ${statusData.status.backdrops.total} total, ${statusData.status.backdrops.withPreviews} with previews`)
    } else {
      console.log('❌ Content status API failed:', statusData.error)
    }

    // Test 2: Single AI Generation Test (small test)
    console.log('\n2️⃣ Testing single AI generation...')
    const generateResponse = await fetch('http://localhost:3001/api/headshots/ai-generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jobId: 'test-job-' + Date.now(),
        outfitId: 'navy-business-suit-1',
        backdropId: 'modern-office-1',
        style: 'professional',
        gender: 'person',
        count: 1
      })
    })
    
    const generateData = await generateResponse.json()
    
    if (generateData.success) {
      console.log('✅ AI generation API works!')
      console.log(`   Generated: ${generateData.results.length} images`)
      console.log(`   Prompt: ${generateData.metadata.prompt.substring(0, 100)}...`)
      console.log(`   Model: ${generateData.metadata.model}`)
    } else {
      console.log('❌ AI generation API failed:', generateData.error)
    }

    // Test 3: Preview Generation (tiny batch)
    console.log('\n3️⃣ Testing preview generation (2 items max)...')
    const previewResponse = await fetch('http://localhost:3001/api/headshots/generate-previews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'outfits',
        limit: 2,
        regenerate: false
      })
    })
    
    const previewData = await previewResponse.json()
    
    if (previewData.success) {
      console.log('✅ Preview generation API works!')
      console.log(`   Generated: ${previewData.generated} previews`)
      console.log(`   Summary: ${JSON.stringify(previewData.summary)}`)
    } else {
      console.log('❌ Preview generation API failed:', previewData.error)
    }

    console.log('\n🎉 All tests completed!')
    console.log('\n📋 Next steps:')
    console.log('   • Go to: http://localhost:3001/tools/ai-headshots/admin')
    console.log('   • Test the main tool: http://localhost:3001/tools/ai-headshots')
    console.log('   • Try style selection: http://localhost:3001/tools/ai-headshots/styles')

  } catch (error) {
    console.log('❌ Test failed:', error.message)
  }
}

// Run the test
testAIGeneration()