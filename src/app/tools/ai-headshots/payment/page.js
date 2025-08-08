'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Button from '../../../../components/Button'

// Plan pricing data (should match main page)
const PLANS = {
  express: {
    id: 'express',
    name: 'Express',
    price: { eur: 10, usd: 12 },
    features: [
      '10 professional headshots',
      '1 outfit & backdrop combination',
      '1 hour fastest delivery ⚡',
      'Premium resolution (1024x1024)',
      'Perfect for urgent needs',
      'Full commercial rights',
      'Auto-deletion after 30 days'
    ],
    popular: false,
    badge: 'FASTEST'
  },
  basic: {
    id: 'basic',
    name: 'Basic',
    price: { eur: 29, usd: 32 },
    features: [
      '40 professional headshots',
      '4 outfit & backdrop combinations',
      'Up to 3 hours delivery',
      'Premium resolution (1024x1024)',
      'Full commercial rights',
      'Auto-deletion after 30 days'
    ],
    popular: false
  },
  professional: {
    id: 'professional', 
    name: 'Professional',
    price: { eur: 39, usd: 43 },
    features: [
      '100 professional headshots',
      '10 outfit & backdrop combinations',
      '10 editing credits',
      'Up to 2 hours delivery',
      'Premium resolution (1024x1024)',
      'Full commercial rights',
      'Auto-deletion after 30 days'
    ],
    popular: true
  },
  executive: {
    id: 'executive',
    name: 'Executive',
    price: { eur: 59, usd: 65 },
    features: [
      '150 professional headshots',
      '15 outfit & backdrop combinations',
      '20 editing credits',
      '~1 hour priority delivery',
      '4K resolution (2048x2048)',
      'Print-ready quality',
      'Full commercial rights',
      'Auto-deletion after 30 days'
    ],
    popular: false
  }
}

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get job details from URL
  const jobId = searchParams.get('jobId')
  const planId = searchParams.get('plan')
  const userEmail = searchParams.get('email')

  // State management
  const [jobData, setJobData] = useState(null)
  const [selectedCurrency, setSelectedCurrency] = useState('eur')
  const [loading, setLoading] = useState(true)
  const [processingPayment, setProcessingPayment] = useState(false)
  const [paymentError, setPaymentError] = useState('')

  // Load job data
  useEffect(() => {
    if (!jobId || !planId || !userEmail) {
      router.push('/tools/ai-headshots')
      return
    }

    const plan = PLANS[planId]
    if (!plan) {
      router.push('/tools/ai-headshots')
      return
    }

    // Mock job data (in production, fetch from API)
    setJobData({
      id: jobId,
      planId: planId,
      userEmail: userEmail,
      plan: plan,
      totalFiles: 12, // Mock uploaded files count
      styleSelections: {
        outfits: 3,
        backdrops: 4,
        combinations: 12
      }
    })

    setLoading(false)
  }, [jobId, planId, userEmail, router])

  // Handle Stripe checkout
  const handleCheckout = async () => {
    if (!jobData) return

    setProcessingPayment(true)
    setPaymentError('')

    try {
      // Create Stripe checkout session
      const response = await fetch('/api/headshots/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          jobId: jobData.id,
          planId: jobData.planId,
          currency: selectedCurrency,
          userEmail: jobData.userEmail,
          successUrl: `${window.location.origin}/tools/ai-headshots/processing?jobId=${jobData.id}&session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: window.location.href
        })
      })

      const data = await response.json()

      if (data.success && data.checkoutUrl) {
        // Redirect to Stripe checkout
        window.location.href = data.checkoutUrl
      } else {
        throw new Error(data.error || 'Failed to create checkout session')
      }

    } catch (error) {
      console.error('Checkout error:', error)
      setPaymentError('Payment setup failed. Please try again or contact support.')
      setProcessingPayment(false)
    }
  }

  // Calculate total price
  const getPrice = () => {
    if (!jobData) return 0
    return jobData.plan.price[selectedCurrency]
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading payment details...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Your <span className="bg-[#F7D8FA] px-2 rounded italic">Payment</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Step 3 of 4 • <strong>{jobData.plan.name}</strong> Package • {jobData.userEmail}
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: '75%' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className="text-blue-600">Upload</span>
              <span className="text-blue-600">Styles</span>
              <span className="text-blue-600 font-medium">Payment</span>
              <span>Processing</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Package Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                  <h3 className="font-semibold text-gray-900">{jobData.plan.name} Package</h3>
                  <p className="text-gray-600 text-sm">{jobData.totalFiles} selfies uploaded</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {selectedCurrency.toUpperCase()} {getPrice()}
                  </div>
                </div>
              </div>

              {/* Package Features */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {jobData.plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Style Selections */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Your Style Selections:</h4>
                <div className="text-sm text-gray-700">
                  <p>{jobData.styleSelections.outfits} outfits × {jobData.styleSelections.backdrops} backdrops = <strong>{jobData.styleSelections.combinations} combinations</strong></p>
                  <p className="mt-1">You'll receive 10 headshots per combination</p>
                </div>
              </div>
            </div>

            {/* Currency Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Select Currency</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedCurrency('eur')}
                  className={`p-4 border rounded-lg transition-all hover:shadow-md ${
                    selectedCurrency === 'eur'
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">€{jobData.plan.price.eur}</div>
                    <div className="text-sm text-gray-600">Euro (EUR)</div>
                    {selectedCurrency === 'eur' && (
                      <div className="text-xs text-blue-600 font-medium mt-1">Selected</div>
                    )}
                  </div>
                </button>
                <button
                  onClick={() => setSelectedCurrency('usd')}
                  className={`p-4 border rounded-lg transition-all hover:shadow-md ${
                    selectedCurrency === 'usd'
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">${jobData.plan.price.usd}</div>
                    <div className="text-sm text-gray-600">US Dollar (USD)</div>
                    {selectedCurrency === 'usd' && (
                      <div className="text-xs text-blue-600 font-medium mt-1">Selected</div>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Error Display */}
            {paymentError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex">
                  <div className="text-red-600">
                    <span className="text-lg">⚠️</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-red-800 font-semibold">Payment Error</h3>
                    <p className="text-red-700 text-sm mt-1">{paymentError}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Payment Section */}
          <div className="space-y-6">
            
            {/* Payment Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="font-bold text-gray-900 mb-4">Secure Checkout</h3>
              
              {/* Total */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {selectedCurrency.toUpperCase()} {getPrice()}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">One-time payment • No subscriptions</p>
              </div>

              {/* Payment Button */}
              <Button
                onClick={handleCheckout}
                disabled={processingPayment}
                className={`w-full py-4 text-lg font-semibold ${
                  processingPayment ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {processingPayment ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Pay ${selectedCurrency.toUpperCase()} ${getPrice()} Securely`
                )}
              </Button>

              {/* Security Info */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">🔒</span>
                  <span>Secured by Stripe • SSL encrypted</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">💳</span>
                  <span>All major credit cards accepted</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">✅</span>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Our Guarantee</h4>
              <p className="text-green-800 text-sm">
                Not happy with your headshots? Get a full refund within 30 days, no questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 max-w-md mx-auto">
          <Link
            href={`/tools/ai-headshots/styles?jobId=${jobId}&plan=${planId}&email=${userEmail}`}
            className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-center"
          >
            ← Back to Styles
          </Link>
          <div className="flex-1">
            {/* Checkout button is in the sidebar */}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-[#F7D8FA] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help with <span className="bg-white px-2 rounded italic">Payment</span>?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team is here to help you complete your order and answer any questions about the headshot generation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/work-with-me"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact Support
            </Link>
            <a 
              href="tel:+31648728828"
              className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Call: +31 6 48728828
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            🔐 Your payment is processed securely through Stripe<br/>
            💡 Instant confirmation and processing start within minutes
          </div>
        </div>
      </div>
    </main>
  )
}