'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0) // First item open by default

  const faqs = [
    {
      question: "What Is A Good ROAS For Google Ads?",
      answer: "A 'good' ROAS depends on your industry and profit margins. Generally, 4:1 ROAS is considered good, but your specific break-even ROAS should be your minimum target. E-commerce typically aims for 4-6:1, while high-margin services might be profitable at 2-3:1."
    },
    {
      question: "How Can I Improve My ROAS?",
      answer: "Improve ROAS by: optimizing ad targeting, improving landing page conversion rates, using negative keywords, adjusting bids based on performance, testing ad copy, and focusing on high-converting keywords and audiences."
    },
    {
      question: "Should I Include All Costs In ROAS Calculation?",
      answer: "Yes, for accurate profitability assessment. Include COGS, allocated operating expenses, and desired profit margin. This gives you a 'true' break-even ROAS that ensures your advertising is actually profitable."
    },
    {
      question: "How Often Should I Check My ROAS?",
      answer: "Monitor ROAS weekly for trends, but avoid daily micro-management as Google Ads needs time to optimize. Make bid adjustments based on 7-14 day performance windows for more reliable data."
    },
    {
      question: "Can I Customize ROAS Models To Suit My Industry Needs?",
      answer: "Absolutely! Different industries have different cost structures and profit margins. Use this calculator to input your specific costs and desired margins to get accurate ROAS targets tailored to your business model."
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

export default function BreakEvenROASCalculator() {
  const [inputs, setInputs] = useState({
    // Revenue
    revenue: '',
    revenueVAT: '21',
    
    // Costs
    costOfGoods: '',
    costOfGoodsVAT: '21',
    shippingCosts: '',
    shippingVAT: '21',
    transactionCosts: '',
    transactionVAT: '21',
    otherCosts: '',
    otherVAT: '21',
    
    // Profit margin
    desiredProfitMargin: '20'
  })
  
  const [results, setResults] = useState({
    totalRevenue: 0,
    totalCosts: 0,
    breakEvenROAS: 0,
    profitableROAS: 0,
    netProfit: 0,
    profitMargin: 0
  })

  const [errors, setErrors] = useState({})

  // Calculate results whenever inputs change
  useEffect(() => {
    calculateROAS()
  }, [inputs])

  const validateInputs = () => {
    const newErrors = {}
    
    if (!inputs.revenue || parseFloat(inputs.revenue) <= 0) {
      newErrors.revenue = 'Revenue must be greater than 0'
    }
    
    if (!inputs.desiredProfitMargin || parseFloat(inputs.desiredProfitMargin) < 0 || parseFloat(inputs.desiredProfitMargin) > 100) {
      newErrors.desiredProfitMargin = 'Profit margin must be between 0 and 100'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateROAS = () => {
    if (!validateInputs()) return

    // Helper function to calculate cost including VAT
    const calculateWithVAT = (amount, vatRate) => {
      const baseAmount = parseFloat(amount) || 0
      const vat = parseFloat(vatRate) || 0
      return baseAmount * (1 + vat / 100)
    }

    // Calculate revenue with VAT
    const totalRevenue = calculateWithVAT(inputs.revenue, inputs.revenueVAT)

    // Calculate all costs with VAT
    const costOfGoodsTotal = calculateWithVAT(inputs.costOfGoods, inputs.costOfGoodsVAT)
    const shippingTotal = calculateWithVAT(inputs.shippingCosts, inputs.shippingVAT)
    const transactionTotal = calculateWithVAT(inputs.transactionCosts, inputs.transactionVAT)
    const otherTotal = calculateWithVAT(inputs.otherCosts, inputs.otherVAT)
    
    const totalCosts = costOfGoodsTotal + shippingTotal + transactionTotal + otherTotal
    
    // Calculate profit metrics
    const netProfit = totalRevenue - totalCosts
    const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0
    
    // Calculate ROAS values
    const breakEvenROAS = totalCosts > 0 ? totalRevenue / totalCosts : 0
    
    // Calculate profitable ROAS (including desired profit margin)
    const desiredProfitMargin = parseFloat(inputs.desiredProfitMargin) || 0
    const desiredProfit = totalRevenue * (desiredProfitMargin / 100)
    const totalCostsWithDesiredProfit = totalCosts + desiredProfit
    const profitableROAS = totalCostsWithDesiredProfit > 0 ? totalRevenue / totalCostsWithDesiredProfit : 0

    setResults({
      totalRevenue: Math.max(0, totalRevenue),
      totalCosts: Math.max(0, totalCosts),
      breakEvenROAS: Math.max(0, breakEvenROAS),
      profitableROAS: Math.max(0, profitableROAS),
      netProfit: netProfit,
      profitMargin: profitMargin
    })
  }

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const resetCalculator = () => {
    setInputs({
      // Revenue
      revenue: '',
      revenueVAT: '21',
      
      // Costs
      costOfGoods: '',
      costOfGoodsVAT: '21',
      shippingCosts: '',
      shippingVAT: '21',
      transactionCosts: '',
      transactionVAT: '21',
      otherCosts: '',
      otherVAT: '21',
      
      // Profit margin
      desiredProfitMargin: '20'
    })
    setErrors({})
  }

  return (
    <>
      <Head>
        <title>Break Even ROAS Calculator - Free Google Ads ROAS Tool | Niblah Marketing</title>
        <meta
          name="description"
          content="Free Break Even ROAS Calculator for Google Ads. Calculate your minimum ROAS, break-even point, and profitable ROAS targets. Essential tool for PPC marketers and advertisers."
        />
        <meta name="keywords" content="ROAS calculator, break even ROAS, Google Ads calculator, PPC calculator, advertising ROI, return on ad spend" />
        <link rel="canonical" href="https://www.niblah.com/tools/break-even-roas-calculator" />
        <meta property="og:title" content="Break Even ROAS Calculator - Free Google Ads Tool" />
        <meta property="og:description" content="Calculate your break-even ROAS and profitable advertising targets with our free calculator. Essential for Google Ads success." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gray-50 py-2 md:py-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Break Even <span className="bg-[#F7D8FA] px-2 rounded italic">ROAS Calculator</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your minimum Return on Ad Spend (ROAS) to break even and determine profitable ROAS targets for your Google Ads campaigns.
            </p>
          </div>

          {/* Calculator Interface */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-900 text-white p-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold">Costs <span className="text-gray-400">per product</span></h3>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Revenue <span className="text-gray-400">per product</span></h3>
                </div>
              </div>
            </div>

            {/* Input Fields */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Costs Section */}
                <div className="space-y-4">
                  {/* Cost of Goods */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cost of goods <span className="text-gray-500">(incl. VAT)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={inputs.costOfGoods}
                          onChange={(e) => handleInputChange('costOfGoods', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                          placeholder="Enter your costs here..."
                        />
                      </div>
                    </div>
                    <div className="w-24">
                      <label className="block text-sm font-medium text-gray-700 mb-1">VAT</label>
                      <select
                        value={inputs.costOfGoodsVAT}
                        onChange={(e) => handleInputChange('costOfGoodsVAT', e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="0">0%</option>
                        <option value="9">9%</option>
                        <option value="21">21%</option>
                      </select>
                    </div>
                    <div className="w-8 flex justify-center">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Shipping Costs */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Shipping costs <span className="text-gray-500">(incl. VAT)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={inputs.shippingCosts}
                          onChange={(e) => handleInputChange('shippingCosts', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                          placeholder="Enter your costs here..."
                        />
                      </div>
                    </div>
                    <div className="w-24">
                      <label className="block text-sm font-medium text-gray-700 mb-1">VAT</label>
                      <select
                        value={inputs.shippingVAT}
                        onChange={(e) => handleInputChange('shippingVAT', e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="0">0%</option>
                        <option value="9">9%</option>
                        <option value="21">21%</option>
                      </select>
                    </div>
                    <div className="w-8 flex justify-center">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Transaction Costs */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Transaction costs <span className="text-gray-500">(incl. VAT)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={inputs.transactionCosts}
                          onChange={(e) => handleInputChange('transactionCosts', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                          placeholder="Enter your costs here..."
                        />
                      </div>
                    </div>
                    <div className="w-24">
                      <label className="block text-sm font-medium text-gray-700 mb-1">VAT</label>
                      <select
                        value={inputs.transactionVAT}
                        onChange={(e) => handleInputChange('transactionVAT', e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="0">0%</option>
                        <option value="9">9%</option>
                        <option value="21">21%</option>
                      </select>
                    </div>
                    <div className="w-8 flex justify-center">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Other Costs */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Other costs <span className="text-gray-500">(incl. VAT)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={inputs.otherCosts}
                          onChange={(e) => handleInputChange('otherCosts', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                          placeholder="Enter your costs here..."
                        />
                      </div>
                    </div>
                    <div className="w-24">
                      <label className="block text-sm font-medium text-gray-700 mb-1">VAT</label>
                      <select
                        value={inputs.otherVAT}
                        onChange={(e) => handleInputChange('otherVAT', e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="0">0%</option>
                        <option value="9">9%</option>
                        <option value="21">21%</option>
                      </select>
                    </div>
                    <div className="w-8 flex justify-center">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Revenue Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Revenue <span className="text-gray-500">(incl. VAT)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={inputs.revenue}
                          onChange={(e) => handleInputChange('revenue', e.target.value)}
                          className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 ${
                            errors.revenue ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your revenue here..."
                        />
                      </div>
                      {errors.revenue && (
                        <p className="mt-1 text-sm text-red-600">{errors.revenue}</p>
                      )}
                    </div>
                    <div className="w-24">
                      <label className="block text-sm font-medium text-gray-700 mb-1">VAT</label>
                      <select
                        value={inputs.revenueVAT}
                        onChange={(e) => handleInputChange('revenueVAT', e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="0">0%</option>
                        <option value="9">9%</option>
                        <option value="21">21%</option>
                      </select>
                    </div>
                    <div className="w-8 flex justify-center">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="pt-8">
                    <button
                      onClick={resetCalculator}
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-gray-900 text-white p-4 mt-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Total costs <span className="text-gray-400">per product</span></h4>
                  <p className="text-3xl font-bold">€{results.totalCosts.toFixed(2)}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Total revenue <span className="text-gray-400">per product</span></h4>
                  <p className="text-3xl font-bold">€{results.totalRevenue.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-2xl font-bold mb-2"><span className="bg-[#F7D8FA] text-[#000] px-2 rounded italic">Break Even ROAS</span></h4>
                <p className="text-6xl font-bold">{results.breakEvenROAS.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Additional Results */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Net Profit</h4>
                <p className={`text-2xl font-bold ${results.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  €{results.netProfit.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">Per product</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Profit Margin</h4>
                <p className={`text-2xl font-bold ${results.profitMargin >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {results.profitMargin.toFixed(1)}%
                </p>
                <p className="text-sm text-gray-600">Current margin</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Target ROAS</h4>
                <p className="text-2xl font-bold text-blue-600">
                  {results.profitableROAS.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">For {inputs.desiredProfitMargin}% profit</p>
              </div>
            </div>

            {/* Recommendations */}
            {results.totalRevenue > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Recommendations</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Your break-even ROAS is <strong>{results.breakEvenROAS.toFixed(2)}</strong> - never go below this</li>
                  <li>• For {inputs.desiredProfitMargin}% profit margin, target <strong>{results.profitableROAS.toFixed(2)}</strong> ROAS</li>
                  <li>• Current profit per sale: <strong>€{results.netProfit.toFixed(2)}</strong></li>
                  <li>• Monitor weekly and adjust Google Ads bids accordingly</li>
                </ul>
              </div>
            )}
          </div>

          {/* Educational Content */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding ROAS for Google Ads Success</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What is ROAS?</h3>
                <p className="text-gray-600 mb-4">
                  Return on Ad Spend (ROAS) measures how much revenue you generate for every dollar spent on advertising. 
                  It's calculated as: <strong>Revenue ÷ Ad Spend = ROAS</strong>
                </p>
                <p className="text-gray-600">
                  For example, a 4:1 ROAS means you earn $4 for every $1 spent on ads.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Break Even ROAS Matters</h3>
                <p className="text-gray-600 mb-4">
                  Your break-even ROAS is the minimum return needed to avoid losing money on your ad campaigns. 
                  Running campaigns below this threshold means you're losing money on every sale.
                </p>
                <p className="text-gray-600">
                  Understanding your true break-even point helps you set realistic ROAS targets and optimize profitably.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Conservative ROAS</h4>
                <p className="text-sm text-gray-600">
                  Set target ROAS 20-30% above break-even for safety margin and account for attribution gaps.
                </p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Aggressive ROAS</h4>
                <p className="text-sm text-gray-600">
                  Set target closer to break-even to maximize volume, but monitor closely for profitability.
                </p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Growth ROAS</h4>
                <p className="text-sm text-gray-600">
                  Temporarily accept lower ROAS for customer acquisition if lifetime value justifies it.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-[#F7D8FA] text-[#000] rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Optimizing Your ROAS?</h2>
            <p className="text-xl mb-6 opacity-90">
              Our Google Ads specialists help businesses achieve profitable ROAS targets and scale their advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/work-with-me"
                className="bg-white text-[#8C2891] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Google Ads Audit
              </Link>
              <a 
                href="tel:+31648728828"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8C2891] transition-colors"
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
