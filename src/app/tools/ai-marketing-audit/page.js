'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function AIMarketingAudit() {
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [email, setEmail] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [auditResults, setAuditResults] = useState(null)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    if (!websiteUrl) {
      setError('Please enter a website URL')
      return
    }

    // Basic URL validation
    let url = websiteUrl
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }

    try {
      new URL(url)
    } catch {
      setError('Please enter a valid website URL')
      return
    }

    setIsAnalyzing(true)
    setError('')

    try {
      const response = await fetch('/api/ai-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      })

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      const results = await response.json()
      console.log('API Response:', results) // Debug log
      setAuditResults(results)
      setShowEmailForm(true)
    } catch (error) {
      setError('Sorry, we couldn\'t analyze your website. Please try again.')
      console.error('Audit error:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleEmailSubmit = async () => {
    if (!email) {
      setError('Please enter your email address')
      return
    }

    // Here you would typically save the email to your database
    // and send the full report via email
    console.log('Email submitted:', email)
    alert('Thank you! Your detailed report will be sent to your email shortly.')
  }

  const resetAudit = () => {
    setWebsiteUrl('')
    setEmail('')
    setAuditResults(null)
    setShowEmailForm(false)
    setError('')
  }

  return (
    <>
      <Head>
        <title>Free AI Marketing Audit Tool - Instant Website Analysis | Niblah</title>
        <meta name="description" content="Get a free AI-powered marketing audit of your website. Instant SEO analysis, performance insights, and actionable recommendations to improve your online presence." />
        <meta name="keywords" content="free marketing audit, website analysis, SEO audit, AI marketing tool, website performance" />
        <meta property="og:title" content="Free AI Marketing Audit Tool - Instant Website Analysis" />
        <meta property="og:description" content="Get a free AI-powered marketing audit of your website with instant SEO analysis and actionable recommendations." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free <span className="bg-[#F7D8FA] px-2 rounded italic">AI Marketing Audit</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant insights into your website's marketing performance. Our AI analyzes your SEO, 
              content, and user experience to give you actionable recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% Free
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Instant Results
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Sign-up Required
              </span>
            </div>
          </div>

          {/* Audit Tool */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            {!auditResults ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Enter Your Website URL
                </h2>
                
                <div className="max-w-md mx-auto">
                  <div className="mb-4">
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      disabled={isAnalyzing}
                    />
                  </div>
                  
                  {error && (
                    <p className="text-red-600 text-sm mb-4">{error}</p>
                  )}
                  
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg"
                  >
                    {isAnalyzing ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing Your Website...
                      </span>
                    ) : (
                      '🚀 Start Free AI Audit'
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  Analysis typically takes 10-30 seconds
                </p>
              </div>
            ) : (
              <div>
                {/* Audit Results */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Audit Results for {auditResults.domain}
                    </h2>
                    <button
                      onClick={resetAudit}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Analyze Another Site
                    </button>
                  </div>
                  
                  {/* Overall Score */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Marketing Score</h3>
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {auditResults.overallScore}/100
                      </div>
                      <p className="text-gray-600">
                        {auditResults.overallScore >= 80 ? 'Excellent!' : 
                         auditResults.overallScore >= 60 ? 'Good, but room for improvement' : 
                         'Needs significant improvement'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Category Scores */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {auditResults.categories?.map((category, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                        <div className={`text-2xl font-bold mb-1 ${
                          category.score >= 80 ? 'text-green-600' : 
                          category.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {category.score}/100
                        </div>
                        <p className="text-sm text-gray-600">{category.status}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Key Issues */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🚨 Key Issues Found</h3>
                    <div className="space-y-3">
                      {auditResults.issues?.map((issue, index) => (
                        <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg">
                          <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-red-600 text-sm font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-900">{issue.title}</h4>
                            <p className="text-red-700 text-sm mt-1">{issue.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Wins */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Quick Wins</h3>
                    <div className="space-y-3">
                      {auditResults.quickWins?.map((win, index) => (
                        <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-900">{win.title}</h4>
                            <p className="text-green-700 text-sm mt-1">{win.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Email Form */}
                {showEmailForm && (
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Want the Complete 20-Page Report?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Get detailed recommendations, competitor analysis, and a step-by-step action plan 
                      sent directly to your inbox - completely free!
                    </p>
                    
                    <div className="max-w-md mx-auto flex gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={handleEmailSubmit}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Send Report
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-3">
                      No spam, unsubscribe anytime. We respect your privacy.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our AI Marketing Audit Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Deep Analysis</h3>
                <p className="text-gray-600">
                  Our AI scans your website for SEO issues, performance problems, content gaps, and user experience issues.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Smart Scoring</h3>
                <p className="text-gray-600">
                  Get scored on SEO, Performance, Content Quality, and User Experience with clear explanations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Action Plan</h3>
                <p className="text-gray-600">
                  Receive prioritized recommendations and quick wins you can implement immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
