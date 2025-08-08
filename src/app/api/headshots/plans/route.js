import { NextResponse } from 'next/server'

// Get available headshot plans with pricing
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const currency = searchParams.get('currency') || 'EUR'
    
    // In production, this would come from the database
    // For now, using static data matching the schema
    const plans = [
      {
        id: 'express',
        name: 'Express',
        slug: 'express',
        description: '10 professional headshots with fastest 1-hour delivery',
        price: currency === 'USD' ? 12.00 : 10.00,
        originalPrice: currency === 'USD' ? 12.00 : 10.00,
        currency: currency,
        headshot_count: 10,
        combo_count: 1,
        edit_credits: 0,
        eta_hours: 1,
        resolution: 'premium',
        features: [
          '1 hour fastest delivery ⚡',
          '10 professional headshots',
          '1 outfit & backdrop combination',
          'Premium resolution (1024x1024)',
          'Perfect for urgent needs',
          'JPG & PNG formats',
          'Full commercial rights',
          '30-day download access'
        ],
        badge: 'FASTEST',
        popular: false,
        stripe_link: 'https://buy.stripe.com/cNi3cu6Vrb5R2kx5Q5dQQ0b'
      },
      {
        id: 'basic',
        name: 'Basic',
        slug: 'basic',
        description: '40 professional headshots with 4 outfit+backdrop combinations',
        price: currency === 'USD' ? 32.00 : 29.00,
        originalPrice: currency === 'USD' ? 32.00 : 29.00,
        currency: currency,
        headshot_count: 40,
        combo_count: 4,
        edit_credits: 0,
        eta_hours: 3,
        resolution: 'premium',
        features: [
          'Up to 3 hours delivery',
          '40 professional headshots',
          '4 outfit & backdrop combinations',
          'Premium resolution (1024x1024)',
          'JPG & PNG formats',
          'Full commercial rights',
          '30-day download access'
        ],
        badge: null,
        popular: false
      },
      {
        id: 'professional', 
        name: 'Professional',
        slug: 'professional',
        description: '100 headshots with 10 combinations and editing credits',
        price: currency === 'USD' ? 43.00 : 39.00,
        originalPrice: currency === 'USD' ? 43.00 : 39.00,
        currency: currency,
        headshot_count: 100,
        combo_count: 10,
        edit_credits: 10,
        eta_hours: 2,
        resolution: 'premium',
        features: [
          'Up to 2 hours delivery',
          '100 professional headshots',
          '10 outfit & backdrop combinations',
          '10 editing credits',
          'Premium resolution (1024x1024)',
          'JPG & PNG formats',
          'Full commercial rights',
          '30-day download access'
        ],
        badge: 'Most Popular',
        popular: true
      },
      {
        id: 'executive',
        name: 'Executive', 
        slug: 'executive',
        description: '150 4K headshots with 15 combinations and priority processing',
        price: currency === 'USD' ? 65.00 : 59.00,
        originalPrice: currency === 'USD' ? 65.00 : 59.00,
        currency: currency,
        headshot_count: 150,
        combo_count: 15,
        edit_credits: 20,
        eta_hours: 1,
        resolution: '4k',
        features: [
          '~1 hour priority delivery',
          '150 professional headshots',
          '15 outfit & backdrop combinations',
          '20 editing credits',
          '4K resolution (2048x2048)',
          'Print-ready quality',
          'Portrait & landscape formats',
          'JPG, PNG & high-res formats',
          'Full commercial rights',
          '30-day download access'
        ],
        badge: 'Premium',
        popular: false
      }
    ]

    // Add comparison metrics
    const comparisonData = {
      photographer_cost: currency === 'USD' ? 350 : 320,
      time_saved_hours: 4,
      savings_percentage: 87
    }

    return NextResponse.json({
      success: true,
      plans,
      currency,
      comparison: comparisonData,
      features: {
        guarantee: {
          title: 'Profile-Worthy Guarantee',
          description: 'If you don\'t get at least 1 keeper headshot, we\'ll give you a full refund.',
          badge: '100% Satisfaction Guaranteed'
        },
        privacy: {
          title: 'Privacy First',
          description: 'Input photos deleted after 7 days, outputs after 30 days. Full commercial rights to you.',
          features: ['Auto-deletion', 'No training data', 'Commercial rights', 'GDPR compliant']
        },
        speed: {
          title: 'Same Day Delivery',
          description: 'Professional headshots delivered within 1-3 hours depending on your package.',
          turnarounds: ['Basic: 3 hours', 'Professional: 2 hours', 'Executive: 1 hour']
        }
      }
    })

  } catch (error) {
    console.error('Plans API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch plans' },
      { status: 500 }
    )
  }
}

// Get plan details by slug
export async function POST(request) {
  try {
    const { planId, currency = 'EUR' } = await request.json()
    
    // In production, query database by plan slug
    const plans = {
      express: {
        id: 'express',
        name: 'Express',
        price: currency === 'USD' ? 12.00 : 10.00,
        headshot_count: 10,
        combo_count: 1,
        edit_credits: 0,
        eta_hours: 1,
        stripe_link: 'https://buy.stripe.com/cNi3cu6Vrb5R2kx5Q5dQQ0b'
      },
      basic: {
        id: 'basic',
        name: 'Basic',
        price: currency === 'USD' ? 32.00 : 29.00,
        headshot_count: 40,
        combo_count: 4,
        edit_credits: 0,
        eta_hours: 3
      },
      professional: {
        id: 'professional',
        name: 'Professional', 
        price: currency === 'USD' ? 43.00 : 39.00,
        headshot_count: 100,
        combo_count: 10,
        edit_credits: 10,
        eta_hours: 2
      },
      executive: {
        id: 'executive',
        name: 'Executive',
        price: currency === 'USD' ? 65.00 : 59.00,
        headshot_count: 150,
        combo_count: 15,
        edit_credits: 20,
        eta_hours: 1
      }
    }

    const plan = plans[planId]
    if (!plan) {
      return NextResponse.json(
        { success: false, error: 'Plan not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      plan: { ...plan, currency }
    })

  } catch (error) {
    console.error('Plan details API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch plan details' },
      { status: 500 }
    )
  }
}