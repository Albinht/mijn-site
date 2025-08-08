'use client'

import { useState } from 'react'
import { getTierColor, getTierBadge } from '../lib/feature-gates'

export default function UpgradeModal({ 
  isOpen, 
  onClose, 
  upgradeData,
  onUpgrade 
}) {
  const [selectedPlan, setSelectedPlan] = useState('yearly')
  const [email, setEmail] = useState('')

  if (!isOpen || !upgradeData) return null

  const { 
    title, 
    subtitle, 
    currentTier, 
    requiredTier, 
    benefits, 
    pricing, 
    cta, 
    urgency, 
    testimonial 
  } = upgradeData

  const yearlyDiscount = 0.2 // 20% discount
  const monthlyPrice = requiredTier.price
  const yearlyPrice = Math.round(monthlyPrice * 12 * (1 - yearlyDiscount))
  const yearlySavings = (monthlyPrice * 12) - yearlyPrice

  const handleUpgrade = async (plan) => {
    if (!email) {
      alert('Voer je email adres in om verder te gaan')
      return
    }

    try {
      // Track upgrade intent
      if (onUpgrade) {
        await onUpgrade({
          email,
          tier: requiredTier.id,
          plan,
          feature: upgradeData.feature,
          currentTier: currentTier.id
        })
      }
      
      // Close modal
      onClose()
      
      // Show success message
      alert(`🎉 Bedankt! Je krijgt binnen 5 minuten een email met je upgrade details.`)
      
    } catch (error) {
      console.error('Upgrade failed:', error)
      alert('Er ging iets mis. Probeer het opnieuw of neem contact op.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Urgency Banner */}
        {urgency && urgency.level === 'high' && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700 font-medium">{urgency.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Tier Comparison */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Current Tier */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-center mb-3">
                <span className="text-2xl">{getTierBadge(currentTier.id)}</span>
                <h3 className="font-semibold text-gray-900">{currentTier.name}</h3>
                <p className="text-sm text-gray-500">Huidige plan</p>
                <div className="mt-2">
                  <span className="text-2xl font-bold">€{currentTier.price}</span>
                  {currentTier.period && <span className="text-gray-500">/{currentTier.period}</span>}
                </div>
              </div>
            </div>

            {/* Required Tier */}
            <div className={`border-2 border-${getTierColor(requiredTier.id)}-500 rounded-lg p-4 relative`}>
              {requiredTier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Populair
                  </span>
                </div>
              )}
              <div className="text-center mb-3">
                <span className="text-2xl">{getTierBadge(requiredTier.id)}</span>
                <h3 className="font-semibold text-gray-900">{requiredTier.name}</h3>
                <p className="text-sm text-gray-500">Aanbevolen</p>
                
                {/* Pricing Toggle */}
                <div className="mt-3">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <button
                      onClick={() => setSelectedPlan('monthly')}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedPlan === 'monthly' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Maandelijks
                    </button>
                    <button
                      onClick={() => setSelectedPlan('yearly')}
                      className={`px-3 py-1 rounded-full text-sm flex items-center ${
                        selectedPlan === 'yearly' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Jaarlijks
                      <span className="ml-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">
                        -20%
                      </span>
                    </button>
                  </div>
                  
                  <div className="text-center">
                    {selectedPlan === 'monthly' ? (
                      <div>
                        <span className="text-2xl font-bold">€{monthlyPrice}</span>
                        <span className="text-gray-500">/maand</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-2xl font-bold">€{Math.round(yearlyPrice / 12)}</span>
                        <span className="text-gray-500">/maand</span>
                        <div className="text-xs text-green-600 font-medium">
                          Bespaar €{yearlySavings} per jaar
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Wat krijg je bij {requiredTier.name}:</h4>
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-lg">{benefit.icon}</span>
                  <span className="text-sm text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {testimonial && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                </div>
                <div>
                  <blockquote className="text-gray-700 italic mb-2">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-sm text-gray-600 font-medium">
                    — {testimonial.author}
                  </cite>
                </div>
              </div>
            </div>
          )}

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email adres voor upgrade details
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jouw@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => handleUpgrade(selectedPlan)}
              className={`w-full bg-${getTierColor(requiredTier.id)}-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-${getTierColor(requiredTier.id)}-700 transition-colors`}
            >
              {selectedPlan === 'yearly' ? (
                <>Upgrade naar {requiredTier.name} - €{Math.round(yearlyPrice / 12)}/maand</>
              ) : (
                <>Upgrade naar {requiredTier.name} - €{monthlyPrice}/maand</>
              )}
            </button>
            
            {selectedPlan === 'monthly' && yearlySavings > 0 && (
              <button
                onClick={() => setSelectedPlan('yearly')}
                className="w-full border border-green-500 text-green-700 py-2 px-6 rounded-lg hover:bg-green-50 transition-colors text-sm"
              >
                💰 Switch naar jaarlijks en bespaar €{yearlySavings}
              </button>
            )}
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              🛡️ <strong>30 dagen geld-terug-garantie</strong> • 
              ⭐ <strong>24/7 support</strong> • 
              🔒 <strong>Veilig betalen</strong>
            </p>
          </div>

          {/* Alternative Actions */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button 
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Blijf bij {currentTier.name}
              </button>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a 
                href="/work-with-me" 
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Bel voor persoonlijk advies
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a 
                href="mailto:info@example.com" 
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Vragen? Mail ons
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}