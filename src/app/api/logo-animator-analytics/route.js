import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { event, data } = await request.json()

    const analyticsData = {
      event,
      data,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      referer: request.headers.get('referer')
    }

    // Log belangrijke events voor analyse
    console.log(`🎨 Logo Animator Analytics: ${event}`, analyticsData)

    // Hier kun je data naar analytics platforms sturen:
    // - Google Analytics 4
    // - Mixpanel  
    // - Amplitude
    // - PostHog
    
    switch (event) {
      case 'logo_uploaded':
        console.log('📤 Logo geupload:', data.fileType, data.fileSize)
        break
        
      case 'animation_selected':
        console.log('🎭 Animatie geselecteerd:', data.animationType, data.category)
        break
        
      case 'settings_changed':
        console.log('⚙️ Settings aangepast:', data)
        break
        
      case 'animation_played':
        console.log('▶️ Animatie afgespeeld:', data.animationType, data.duration)
        break
        
      case 'css_exported':
        console.log('💾 CSS geëxporteerd:', data.animationType)
        break
        
      case 'premium_interest':
        console.log('💎 Premium interesse:', data.feature, data.animationType)
        break
        
      case 'email_submitted':
        console.log('📧 Email ingediend voor:', data.feature)
        break
        
      case 'tool_abandoned':
        console.log('❌ Tool verlaten op stap:', data.step, data.timeSpent)
        break
    }

    // Optional: stuur naar externe analytics service
    if (process.env.ANALYTICS_WEBHOOK_URL) {
      try {
        await fetch(process.env.ANALYTICS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(analyticsData)
        })
      } catch (webhookError) {
        console.error('Analytics webhook failed:', webhookError)
      }
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Analytics API Error:', error)
    return NextResponse.json(
      { error: 'Analytics logging failed' },
      { status: 500 }
    )
  }
}

// GET endpoint voor analytics dashboard (optioneel)
export async function GET(request) {
  // Hier kun je analytics data ophalen voor een admin dashboard
  return NextResponse.json({
    message: 'Logo Animator Analytics API',
    endpoints: {
      POST: 'Track events',
      GET: 'Get analytics data (admin only)'
    }
  })
}