import { NextResponse } from 'next/server'

// Stripe configuration (in production, use environment variables)
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_...'
const STRIPE_PRICE_IDS = {
  // These would be created in Stripe dashboard
  'basic_eur': 'price_basic_eur_id',
  'basic_usd': 'price_basic_usd_id', 
  'professional_eur': 'price_professional_eur_id',
  'professional_usd': 'price_professional_usd_id',
  'executive_eur': 'price_executive_eur_id',
  'executive_usd': 'price_executive_usd_id'
}

// Plan data for backup pricing (if Stripe prices not set up yet)
const PLAN_PRICING = {
  basic: { eur: 29, usd: 35 },
  professional: { eur: 39, usd: 45 },
  executive: { eur: 59, usd: 69 }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { jobId, planId, currency, userEmail, successUrl, cancelUrl } = body

    // Validate required parameters
    if (!jobId || !planId || !currency || !userEmail || !successUrl || !cancelUrl) {
      return NextResponse.json({
        success: false,
        error: 'Missing required parameters'
      }, { status: 400 })
    }

    // Validate plan and currency
    if (!PLAN_PRICING[planId]) {
      return NextResponse.json({
        success: false,
        error: 'Invalid plan ID'
      }, { status: 400 })
    }

    if (!['eur', 'usd'].includes(currency)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid currency'
      }, { status: 400 })
    }

    // For development/testing without Stripe setup
    if (!STRIPE_SECRET_KEY.startsWith('sk_')) {
      console.log('Mock Stripe checkout for development:', {
        jobId, 
        planId, 
        currency, 
        userEmail,
        price: PLAN_PRICING[planId][currency]
      })

      // Mock success - redirect directly to success URL
      const mockSuccessUrl = successUrl.replace('{CHECKOUT_SESSION_ID}', 'mock_session_' + Date.now())
      
      return NextResponse.json({
        success: true,
        checkoutUrl: mockSuccessUrl,
        sessionId: 'mock_session_' + Date.now(),
        message: 'Development mode - no actual payment required'
      })
    }

    // Initialize Stripe (uncomment when ready to use real Stripe)
    /*
    const stripe = require('stripe')(STRIPE_SECRET_KEY)

    // Get plan details
    const plan = PLAN_PRICING[planId]
    const price = plan[currency]
    const planDisplayName = planId.charAt(0).toUpperCase() + planId.slice(1)

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: userEmail,
      
      line_items: [{
        price_data: {
          currency: currency,
          product_data: {
            name: `AI Headshots - ${planDisplayName} Package`,
            description: `Professional AI-generated headshots with ${planDisplayName.toLowerCase()} features`,
            images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/headshots-preview.jpg`],
          },
          unit_amount: price * 100, // Convert to cents
        },
        quantity: 1,
      }],

      // URLs
      success_url: successUrl,
      cancel_url: cancelUrl,

      // Metadata for webhook processing
      metadata: {
        jobId,
        planId,
        userEmail,
        service: 'ai_headshots'
      },

      // Additional options
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'DE', 'FR', 'NL', 'BE', 'ES', 'IT'],
      },

      // Custom fields for additional info
      custom_fields: [
        {
          key: 'company_name',
          label: {
            type: 'custom',
            custom: 'Company Name (optional)'
          },
          type: 'text',
          optional: true
        }
      ],

      // Invoice settings
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: `AI Headshots - ${planDisplayName} Package`,
          metadata: {
            jobId,
            planId
          }
        }
      }
    })

    // Update job with session ID (for webhook processing)
    // await updateJobWithStripeSession(jobId, session.id)

    return NextResponse.json({
      success: true,
      checkoutUrl: session.url,
      sessionId: session.id
    })
    */

    // Fallback for development
    return NextResponse.json({
      success: false,
      error: 'Stripe not configured - add STRIPE_SECRET_KEY to environment variables'
    }, { status: 500 })

  } catch (error) {
    console.error('Checkout API error:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 })
  }
}

// Webhook handler for Stripe events (separate endpoint)
export async function handleStripeWebhook(event) {
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object
        const { jobId, planId, userEmail } = session.metadata

        console.log('Payment completed:', {
          sessionId: session.id,
          jobId,
          planId,
          userEmail,
          amount: session.amount_total / 100,
          currency: session.currency
        })

        // Update job status to paid
        // await updateJobStatus(jobId, 'paid', {
        //   stripeSessionId: session.id,
        //   paidAmount: session.amount_total / 100,
        //   currency: session.currency,
        //   paymentDate: new Date()
        // })

        // Trigger AI processing
        // await startHeadshotGeneration(jobId)

        break

      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object)
        // Handle failed payment
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return { received: true }
    
  } catch (error) {
    console.error('Webhook processing error:', error)
    throw error
  }
}