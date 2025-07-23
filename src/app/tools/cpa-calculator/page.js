'use client'

import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0) // First item open by default

  const faqs = [
    {
      question: "What Does CPA Mean?",
      answer: "CPA means how much money you spend to get one new customer. If you spend $100 on ads and get 4 customers, your CPA is $25 per customer. Simple!"
    },
    {
      question: "How Do I Spend Less Per Customer?",
      answer: "Make your website better so more people buy stuff, or pay less for each click. Also, show your ads to people who are more likely to buy from you."
    },
    {
      question: "What's A Good Amount To Spend Per Customer?",
      answer: "It depends on how much money each customer gives you. If a customer usually spends $100 with you, then spending $30 to get them is probably good."
    },
    {
      question: "Why Does My Cost Per Customer Keep Changing?",
      answer: "If you pay more per click, you spend more per customer. If fewer people buy from your website, you also spend more per customer. It's all connected!"
    },
    {
      question: "Should I Focus On Getting Customers Or Making Money?",
      answer: "Both! But first make sure you're not losing money on each customer. Then you can think about getting more customers or making more profit."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function CPACalculator() {
  const [inputs, setInputs] = useState({
    currentCPC: '',
    conversionRate: '',
    targetCPA: ''
  })
  
  const [results, setResults] = useState({
    calculatedCPA: 0,
    requiredCPC: 0,
    requiredConversionRate: 0,
    costPerHundredClicks: 0
  })

  const [errors, setErrors] = useState({})

  // Calculate results whenever inputs change
  useEffect(() => {
    calculateCPA()
  }, [inputs, calculateCPA])

  const validateInputs = () => {
    const newErrors = {}
    
    if (inputs.currentCPC && (parseFloat(inputs.currentCPC) <= 0)) {
      newErrors.currentCPC = 'CPC must be greater than 0'
    }
    
    if (inputs.conversionRate && (parseFloat(inputs.conversionRate) <= 0 || parseFloat(inputs.conversionRate) > 100)) {
      newErrors.conversionRate = 'Conversion rate must be between 0 and 100'
    }
    
    if (inputs.targetCPA && (parseFloat(inputs.targetCPA) <= 0)) {
      newErrors.targetCPA = 'Target CPA must be greater than 0'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateCPA = useCallback(() => {
    if (!validateInputs()) return

    const cpc = parseFloat(inputs.currentCPC) || 0
    const conversionRate = parseFloat(inputs.conversionRate) || 0
    const targetCPA = parseFloat(inputs.targetCPA) || 0

    // Calculate current CPA: CPA = CPC ÷ (Conversion Rate / 100)
    const calculatedCPA = conversionRate > 0 ? cpc / (conversionRate / 100) : 0
    
    // Calculate required CPC to achieve target CPA: CPC = Target CPA × (Conversion Rate / 100)
    const requiredCPC = conversionRate > 0 ? targetCPA * (conversionRate / 100) : 0
    
    // Calculate required conversion rate to achieve target CPA: Conversion Rate = (CPC ÷ Target CPA) × 100
    const requiredConversionRate = targetCPA > 0 ? (cpc / targetCPA) * 100 : 0
    
    // Calculate cost per 100 clicks
    const costPerHundredClicks = cpc * 100

    setResults({
      calculatedCPA: Math.max(0, calculatedCPA),
      requiredCPC: Math.max(0, requiredCPC),
      requiredConversionRate: Math.max(0, Math.min(100, requiredConversionRate)),
      costPerHundredClicks: Math.max(0, costPerHundredClicks)
    })
  }, [])

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const resetCalculator = () => {
    setInputs({
      currentCPC: '',
      conversionRate: '',
      targetCPA: ''
    })
    setErrors({})
  }

  return (
    <>
      <Head>
        <title>CPA Calculator - Free Cost Per Acquisition Calculator | Niblah Marketing</title>
        <meta
          name="description"
          content="Free CPA Calculator for Google Ads. Calculate your Cost Per Acquisition, optimize your CPC and conversion rates. Essential tool for PPC marketers and advertisers."
        />
        <meta name="keywords" content="CPA calculator, cost per acquisition, Google Ads calculator, PPC calculator, CPC calculator, conversion rate optimization" />
        <link rel="canonical" href="https://www.niblah.com/tools/cpa-calculator" />
        <meta property="og:title" content="CPA Calculator - Free Cost Per Acquisition Tool" />
        <meta property="og:description" content="Calculate your Cost Per Acquisition and optimize your Google Ads campaigns with our free CPA calculator. Essential for PPC success." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gray-50 py-2 md:py-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-[#F7D8FA] px-2 rounded italic">CPA Calculator</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find out how much it costs you to get one new customer. Super simple: fill in your numbers and see if your ads are making money or losing money.
            </p>
          </div>

          {/* Calculator Interface */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-[#2C3E50] text-white p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">CPA Calculator</h2>
              <p className="text-blue-200 text-sm">
                This calculator shows you how much you pay to get one customer. Fill in what you pay per click, 
                how many visitors become customers, and what you want to spend per customer. Easy!
              </p>
            </div>

            {/* Input Fields */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Current Average CPC */}
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you pay per click?
                    <span className="block text-xs text-gray-500 font-normal">Average Cost Per Click (CPC)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={inputs.currentCPC}
                      onChange={(e) => handleInputChange('currentCPC', e.target.value)}
                      className={`w-full pl-8 pr-4 py-4 text-center text-xl font-bold border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.currentCPC ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="0.45"
                    />
                  </div>
                  {errors.currentCPC && (
                    <p className="mt-1 text-sm text-red-600">{errors.currentCPC}</p>
                  )}
                </div>

                {/* Average Site Conversion Rate */}
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How many visitors buy something?
                    <span className="block text-xs text-gray-500 font-normal">Average Conversion Rate</span>
                  </label>
                  <div className="relative">
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">%</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="100"
                      value={inputs.conversionRate}
                      onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                      className={`w-full pl-4 pr-8 py-4 text-center text-xl font-bold border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.conversionRate ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="2.90"
                    />
                  </div>
                  {errors.conversionRate && (
                    <p className="mt-1 text-sm text-red-600">{errors.conversionRate}</p>
                  )}
                </div>

                {/* Target Acquisition Cost */}
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How much do you want to spend per customer?
                    <span className="block text-xs text-gray-500 font-normal">Target Cost Per Acquisition (CPA)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={inputs.targetCPA}
                      onChange={(e) => handleInputChange('targetCPA', e.target.value)}
                      className={`w-full pl-8 pr-4 py-4 text-center text-xl font-bold border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.targetCPA ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="15.00"
                    />
                  </div>
                  {errors.targetCPA && (
                    <p className="mt-1 text-sm text-red-600">{errors.targetCPA}</p>
                  )}
                </div>

                {/* Calculated Acquisition Cost */}
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What you actually pay per customer
                    <span className="block text-xs text-gray-500 font-normal">Calculated Cost Per Acquisition (CPA)</span>
                  </label>
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <div className="bg-blue-500 text-white px-4 py-4 rounded-lg text-xl font-bold min-w-[120px]">
                        ${results.calculatedCPA.toFixed(2)}
                      </div>
                      <button 
                        onClick={resetCalculator}
                        className="ml-3 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        title="Reset Calculator"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Analysis */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Should You Do?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Pay This Per Click</h4>
                <p className="text-2xl font-bold text-blue-600">
                  ${results.requiredCPC.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">To reach your goal</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">This Many Should Buy</h4>
                <p className="text-2xl font-bold text-green-600">
                  {results.requiredConversionRate.toFixed(2)}%
                </p>
                <p className="text-sm text-gray-600">Out of 100 visitors</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">100 Clicks Cost You</h4>
                <p className="text-2xl font-bold text-purple-600">
                  ${results.costPerHundredClicks.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">Right now</p>
              </div>
            </div>

            {/* Recommendations */}
            {(inputs.currentCPC && inputs.conversionRate && inputs.targetCPA) && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">💡 What Should You Do?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  {results.calculatedCPA > parseFloat(inputs.targetCPA) ? (
                    <>
                      <li>• You&apos;re spending too much! You pay ${results.calculatedCPA.toFixed(2)} per customer but want to pay ${inputs.targetCPA}</li>
                      <li>• Either pay less per click (${results.requiredCPC.toFixed(2)}) OR get more people to buy ({results.requiredConversionRate.toFixed(2)}%)</li>
                      <li>• Make your ads better and your website easier to buy from</li>
                    </>
                  ) : (
                    <>
                      <li>• Awesome! You only pay ${results.calculatedCPA.toFixed(2)} per customer (goal was ${inputs.targetCPA})</li>
                      <li>• You can spend more to get even more customers</li>
                      <li>• Try paying up to ${results.requiredCPC.toFixed(2)} per click</li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Educational Content */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does This Work? (Super Simple!)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What is CPA?</h3>
                <p className="text-gray-600 mb-4">
                  CPA means &quot;how much you pay to get one customer.&quot; It&apos;s super simple math: 
                  <strong>What you pay per click ÷ How many people buy = Cost per customer</strong>
                </p>
                <p className="text-gray-600">
                  Example: You pay $0.50 per click. 2 out of 100 people buy something. So you pay $25 for each customer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Should You Care?</h3>
                <p className="text-gray-600 mb-4">
                  If you know how much a customer costs you, you can see if your ads make money or lose money. 
                  Simple rule: spend less to get a customer than they spend with you!
                </p>
                <p className="text-gray-600">
                  This helps you spend your ad money smart, not just get lots of clicks that don&apos;t buy anything.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Lower CPA Strategy</h4>
                <p className="text-sm text-gray-600">
                  Improve conversion rates through better landing pages, ad relevance, and user experience optimization.
                </p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">CPC Optimization</h4>
                <p className="text-sm text-gray-600">
                  Use negative keywords, improve Quality Score, and optimize ad targeting to reduce cost per click.
                </p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Conversion Tracking</h4>
                <p className="text-sm text-gray-600">
                  Ensure accurate conversion tracking to get reliable CPA data and make informed optimization decisions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-[#fff] text-[#000] rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Optimizing Your CPA?</h2>
            <p className="text-xl mb-6 opacity-90">
              Our Google Ads specialists help businesses achieve profitable CPA targets and scale their advertising campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/work-with-me"
                className="bg-[#8C2891] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7A2280] transition-colors"
              >
                Get Free Google Ads Audit
              </Link>
              <a 
                href="tel:+31648728828"
                className="border-2 border-[#8C2891] text-[#8C2891] px-8 py-3 rounded-lg font-semibold hover:bg-[#8C2891] hover:text-white transition-colors"
              >
                Call: +31 6 48728828
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <div className="mb-8">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">FAQ</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">Frequently Asked Questions</h2>
            </div>
            
            <FAQAccordion />
          </div>
        </div>
      </main>
    </>
  )
}
