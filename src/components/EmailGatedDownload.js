'use client'

import { useState } from 'react'
import Button from './Button'

export default function EmailGatedDownload({ 
  title = "Download Resource",
  description = "Enter your email to get access to this valuable resource",
  downloadEndpoint = "/api/downloads/shopify-multilanguage",
  downloadType = "shopify-multilanguage-guide",
  buttonText = "Download Now",
  features = []
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [revenue, setRevenue] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!name.trim()) {
      setStatus('error')
      setMessage('Please enter your name')
      return
    }
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }
    
    if (!businessType) {
      setStatus('error')
      setMessage('Please select your business type')
      return
    }
    
    if (businessType !== 'None' && !revenue) {
      setStatus('error')
      setMessage('Please select your revenue range')
      return
    }

    setStatus('loading')
    
    try {
      const response = await fetch(downloadEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email,
          businessType,
          revenue: businessType === 'None' ? null : revenue,
          downloadType
        })
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage('Check your email for the download link! 📧')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
      console.error('Download error:', error)
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[400px] bg-white text-gray-900 px-6 py-8 rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl text-left">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Download <span className="bg-[#C7F3D0] px-2 rounded italic">Sent!</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            <strong>{message}</strong><br />
            Your complete automation guide is on its way!
          </p>
          <div className="bg-white rounded-lg p-6 border border-green-100 max-w-md">
            <p className="text-sm text-gray-600">
              💡 <strong>Pro tip:</strong> Add <strong>albin@niblah.com</strong> to your contacts so our emails don't end up in spam.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[400px] bg-white text-gray-900 px-6 py-8 rounded-lg border border-gray-200">
      <div className="max-w-4xl">
        
        {/* TEXT SECTION - Left Aligned */}
        <div className="w-full max-w-2xl text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            FREE <span className="bg-[#F7D8FA] px-2 rounded italic">Complete</span><br />
            {title.replace(/🎁 FREE: /, '')}
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            <strong>{description}</strong><br />
            Everything you need to get started immediately.
          </p>
          
          {features.length > 0 && (
            <ul className="mt-6 space-y-2 text-gray-800">
              {features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          )}
          
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-4 max-w-md">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What should I call you?</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {/* Business Type Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What type of business do you run?</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                  required
                  disabled={status === 'loading'}
                >
                  <option value="">Select business type</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Automation">Automation</option>
                  <option value="Agency">Agency</option>
                  <option value="None">None</option>
                </select>
              </div>

              {/* Revenue Field - Conditional */}
              {businessType && businessType !== 'None' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How much revenue do you do?</label>
                  <select
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                    required
                    disabled={status === 'loading'}
                  >
                    <option value="">Select revenue range</option>
                    <option value="0 - 100k a year">0 - 100k a year</option>
                    <option value="100-250k a year">100-250k a year</option>
                    <option value="250-500k a year">250-500k a year</option>
                    <option value="500k-1M a year">500k-1M a year</option>
                    <option value="1M - 10M a year">1M - 10M a year</option>
                    <option value="10M+">10M+</option>
                  </select>
                </div>
              )}

              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-4"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <>
                    {buttonText} <span>→</span>
                  </>
                )}
              </Button>
            </div>
            
            {status === 'error' && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm max-w-md">
                {message}
              </div>
            )}
          </form>
          
          <p className="mt-4 text-sm text-gray-500">🔒 No spam. Unsubscribe anytime.</p>
          <p className="mt-2 text-xs text-gray-400">Questions? WhatsApp me +31648728828</p>
        </div>
      </div>
    </div>
  )
}