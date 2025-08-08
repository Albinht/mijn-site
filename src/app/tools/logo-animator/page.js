'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Import new advanced components
import { SVGParser, extractSVGFromFile } from './lib/svg-parser'
import { USE_CASE_TEMPLATES } from './templates/use-cases'
import { ELEMENT_ANIMATIONS, getAnimationsByTier } from './animations/element-animations'
import { FeatureGate, PRICING_TIERS } from './lib/feature-gates'
import ContextualPreview from './components/ContextualPreview'
import UpgradeModal from './components/UpgradeModal'

// Import existing components
import LogoUploader from './components/LogoUploader'
import AnimationControls from './components/AnimationControls'
import ExportModal from './components/ExportModal'

export default function LogoAnimatorAdvanced() {
  // Core state
  const [currentStep, setCurrentStep] = useState(1)
  const [userTier] = useState('FREE') // This would come from auth in real app
  
  // Logo and parsing state
  const [uploadedLogo, setUploadedLogo] = useState(null)
  const [svgParser, setSvgParser] = useState(null)
  const [logoElements, setLogoElements] = useState([])
  const [selectedElements, setSelectedElements] = useState([])
  
  // Use case and animation state
  const [selectedUseCase, setSelectedUseCase] = useState('website-header')
  const [selectedAnimation, setSelectedAnimation] = useState(null)
  const [animationSettings, setAnimationSettings] = useState({
    duration: 2.5,
    delay: 0.3,
    easing: 'ease-out',
    loop: false,
    direction: 'normal'
  })
  
  // UI state
  const [showExportModal, setShowExportModal] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [upgradeModalData, setUpgradeModalData] = useState(null)
  
  // Feature gate
  const featureGate = new FeatureGate(userTier)

  // Get available animations based on use case and tier
  const getAvailableAnimations = () => {
    const tierAnimations = getAnimationsByTier(userTier.toLowerCase())
    const useCaseTemplate = USE_CASE_TEMPLATES[selectedUseCase]
    
    if (!useCaseTemplate) {
      // Fallback: return basic animations if no template
      return [
        { id: 'fade-in', name: 'Fade In', description: 'Geleidelijk zichtbaar worden', complexity: 'basic', tier: 'free' },
        { id: 'scale-in', name: 'Scale In', description: 'Schaalt van klein naar normaal', complexity: 'basic', tier: 'free' }
      ]
    }
    
    // Filter by use case allowed animations
    let filtered = tierAnimations.filter(animation => 
      useCaseTemplate.animations.allowed.includes(animation.id) &&
      !useCaseTemplate.animations.forbidden.includes(animation.id)
    )
    
    // Fallback: if no animations match, return basic ones
    if (filtered.length === 0) {
      const defaultAnimations = {
        'fade-in': { id: 'fade-in', name: 'Fade In', description: 'Geleidelijk zichtbaar worden', complexity: 'basic', tier: 'free' },
        'scale-in': { id: 'scale-in', name: 'Scale In', description: 'Schaalt van klein naar normaal', complexity: 'basic', tier: 'free' },
        'rotate-in': { id: 'rotate-in', name: 'Rotate In', description: 'Roteert naar binnen', complexity: 'basic', tier: 'free' },
        'text-reveal': { id: 'text-reveal', name: 'Text Reveal', description: 'Onthult tekst met sliding effect', complexity: 'medium', tier: 'free' }
      }
      
      filtered = useCaseTemplate.animations.allowed.map(id => 
        defaultAnimations[id] || {
          id,
          name: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          description: 'Basic animatie effect',
          complexity: 'basic',
          tier: 'free'
        }
      )
    }
    
    return filtered
  }

  // Auto-advance steps
  useEffect(() => {
    if (uploadedLogo && currentStep === 1) {
      setTimeout(() => setCurrentStep(2), 500)
    }
  }, [uploadedLogo, currentStep])

  useEffect(() => {
    if (selectedUseCase && currentStep === 2) {
      // Auto-select first available animation for this use case
      const availableAnimations = getAvailableAnimations()
      console.log('Auto-selecting animation. Available:', availableAnimations, 'Current selected:', selectedAnimation)
      
      if (availableAnimations.length > 0 && !selectedAnimation) {
        const defaultAnimation = availableAnimations[0]
        console.log('Setting default animation:', defaultAnimation)
        setSelectedAnimation(defaultAnimation)
      }
      setTimeout(() => setCurrentStep(3), 300)
    }
  }, [selectedUseCase, currentStep])

  useEffect(() => {
    if (selectedAnimation && currentStep === 3) {
      setTimeout(() => setCurrentStep(4), 300)
    }
  }, [selectedAnimation, currentStep])

  // Handle logo upload with SVG parsing
  const handleLogoUpload = async (logoData) => {
    setUploadedLogo(logoData)
    
    // Parse SVG if it's an SVG file
    if (logoData.type === 'image/svg+xml') {
      try {
        const svgContent = await extractSVGFromFile(logoData.file)
        const parser = new SVGParser(svgContent)
        setSvgParser(parser)
        setLogoElements(parser.animationTargets)
        
        // Auto-select all elements initially
        setSelectedElements(parser.animationTargets.map(el => el.id))
        
        trackEvent('svg_parsed', {
          elementCount: parser.animationTargets.length,
          elementTypes: parser.animationTargets.map(el => el.type)
        })
      } catch (error) {
        console.error('SVG parsing failed:', error)
        // Still allow non-SVG uploads
      }
    }
    
    trackEvent('logo_uploaded', {
      fileType: logoData.type,
      fileSize: logoData.size,
      fileName: logoData.name,
      hasSVGElements: logoElements.length > 0
    })
  }

  // Handle use case selection with feature gating
  const handleUseCaseSelect = (useCaseId) => {
    if (!featureGate.canUseUseCase(useCaseId)) {
      const modalData = featureGate.getUpgradeModal('useCase', { value: useCaseId })
      setUpgradeModalData({
        ...modalData,
        title: `${USE_CASE_TEMPLATES[useCaseId].name} is beschikbaar in ${modalData.requiredTier.name}`
      })
      setShowUpgradeModal(true)
      featureGate.trackFeatureBlock('useCase', { useCaseId })
      return
    }

    setSelectedUseCase(useCaseId)
    
    // Reset animation when use case changes
    setSelectedAnimation(null)
    
    // Update settings based on use case
    const useCase = USE_CASE_TEMPLATES[useCaseId]
    if (useCase) {
      const optimalSettings = useCase.settings
      setAnimationSettings(prev => ({
        ...prev,
        duration: optimalSettings.defaultDuration,
        delay: optimalSettings.defaultDelay,
        easing: optimalSettings.defaultEasing
      }))
    }
    
    trackEvent('use_case_selected', {
      useCaseId,
      useCaseName: USE_CASE_TEMPLATES[useCaseId]?.name,
      tier: featureGate.userTier
    })
  }

  // Handle animation selection with feature gating
  const handleAnimationSelect = (animation) => {
    if (!featureGate.canUseAnimation(animation.id)) {
      const modalData = featureGate.getUpgradeModal('animation', { value: animation.id })
      setUpgradeModalData(modalData)
      setShowUpgradeModal(true)
      featureGate.trackFeatureBlock('animation', { animationId: animation.id })
      return
    }

    setSelectedAnimation(animation)
    
    trackEvent('animation_selected', {
      animationType: animation.name,
      animationId: animation.id,
      category: animation.category,
      complexity: animation.complexity,
      tier: animation.tier
    })
  }

  // Handle export with feature gating
  const handleExport = (format) => {
    if (!featureGate.canExportFormat(format)) {
      const modalData = featureGate.getUpgradeModal('export', { value: format })
      setUpgradeModalData(modalData)
      setShowUpgradeModal(true)
      featureGate.trackFeatureBlock('export', { format })
      return
    }

    setShowExportModal(true)
    trackEvent('export_initiated', {
      format,
      animationType: selectedAnimation?.name,
      useCaseId: selectedUseCase,
      elementCount: selectedElements.length
    })
  }

  // Handle upgrade
  const handleUpgrade = async (upgradeData) => {
    try {
      const response = await fetch('/api/logo-animator-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: upgradeData.email,
          tier: upgradeData.tier,
          plan: upgradeData.plan,
          feature: upgradeData.feature,
          currentTier: upgradeData.currentTier,
          source: 'upgrade-modal'
        })
      })

      if (response.ok) {
        trackEvent('upgrade_completed', upgradeData)
        
        // In a real app, you'd update the user's tier here
        // setUserTier(upgradeData.tier.toUpperCase())
      }
    } catch (error) {
      console.error('Upgrade failed:', error)
      throw error
    }
  }

  // Analytics tracking
  const trackEvent = async (event, data = {}) => {
    try {
      await fetch('/api/logo-animator-analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, data })
      })
    } catch (error) {
      console.error('Analytics tracking failed:', error)
    }
  }

  // Reset tool
  const resetTool = () => {
    setCurrentStep(1)
    setUploadedLogo(null)
    setSvgParser(null)
    setLogoElements([])
    setSelectedElements([])
    setSelectedUseCase('website-header')
    setSelectedAnimation(null)
    setAnimationSettings({
      duration: 2.5,
      delay: 0.3,
      easing: 'ease-out',
      loop: false,
      direction: 'normal'
    })
  }

  return (
    <>
      {/* Dynamic CSS for animations */}
      <style jsx global>{`
        /* Advanced Animation Keyframes */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes rotateIn {
          from { transform: rotate(-10deg); opacity: 0; }
          to { transform: rotate(0); opacity: 1; }
        }
        
        @keyframes pathDraw {
          from { 
            stroke-dasharray: 1000px;
            stroke-dashoffset: 1000px;
            fill-opacity: 0;
          }
          to { 
            stroke-dasharray: 1000px;
            stroke-dashoffset: 0;
            fill-opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5)); }
          50% { filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8)); }
        }
        
        /* Animation classes */
        .animate-fade-in { animation: fadeIn var(--duration, 2s) var(--easing, ease-out) var(--delay, 0s) forwards; }
        .animate-slide-up { animation: slideUp var(--duration, 2s) var(--easing, ease-out) var(--delay, 0s) forwards; }
        .animate-scale-in { animation: scaleIn var(--duration, 2s) var(--easing, ease-out) var(--delay, 0s) forwards; }
        .animate-rotate-in { animation: rotateIn var(--duration, 2s) var(--easing, ease-out) var(--delay, 0s) forwards; }
        .animate-path-draw { animation: pathDraw var(--duration, 3s) var(--easing, ease-in-out) var(--delay, 0s) forwards; }
        .animate-pulse { animation: pulse var(--duration, 2s) var(--easing, ease-in-out) var(--delay, 0s) var(--iteration, infinite); }
        .animate-glow { animation: glow var(--duration, 2s) var(--easing, ease-in-out) var(--delay, 0s) var(--iteration, infinite); }
        .animate-text-reveal { animation: fadeIn var(--duration, 2s) var(--easing, ease-out) var(--delay, 0s) forwards; }
        .animate-text-bounce-in { animation: scaleIn var(--duration, 2s) var(--easing, ease-out) var(--delay, 0s) forwards; }
      `}</style>

      <main className="min-h-screen bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Logo <span className="bg-[#F7D8FA] px-2 rounded italic">Animator</span>
              </h1>
              <div className="ml-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  userTier === 'FREE' ? 'bg-green-100 text-green-800' :
                  userTier === 'PRO' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {PRICING_TIERS[userTier].badge} {PRICING_TIERS[userTier].name}
                </span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Maak professionele logo animaties voor websites, social media, email signatures en video content. 
              Nu met geavanceerde SVG element detectie en contextual previews.
            </p>
            
            {/* New Features Showcase */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
              <span className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                SVG Element Detectie
              </span>
              <span className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Use Case Templates
              </span>
              <span className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Contextual Previews
              </span>
              <span className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Element-Based Animaties {userTier === 'FREE' && '(Pro)'}
              </span>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-center space-x-8 mb-8">
              {[
                { step: 1, label: 'Upload Logo' },
                { step: 2, label: 'Kies Use Case' },
                { step: 3, label: 'Selecteer Animatie' },
                { step: 4, label: 'Preview & Export' }
              ].map(({ step, label }) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                    currentStep >= step ? 'bg-blue-600' : 'bg-gray-300'
                  }`}>
                    {step}
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Tool Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Controls */}
            <div className="lg:col-span-1 space-y-6">
              {/* Step 1: Logo Upload */}
              {currentStep >= 1 && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2">1️⃣</span>
                    Upload je logo
                  </h3>
                  <LogoUploader 
                    onLogoUpload={handleLogoUpload}
                    uploadedLogo={uploadedLogo}
                    isActive={currentStep === 1}
                  />
                  
                  {/* SVG Analysis Results */}
                  {svgParser && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <h4 className="text-sm font-medium text-blue-900 mb-2">🎯 SVG Analyse</h4>
                      <div className="text-sm text-blue-800">
                        <div>Elementen gevonden: {logoElements.length}</div>
                        <div>Complexiteit: {svgParser.validateForAnimation().complexity}</div>
                        <div className="mt-2">
                          {logoElements.map(el => (
                            <span key={el.id} className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-1 mb-1">
                              {el.type}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Use Case Selection */}
              {currentStep >= 2 && uploadedLogo && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2">2️⃣</span>
                    Kies je use case
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {Object.values(USE_CASE_TEMPLATES).map(useCase => {
                      const canUse = featureGate.canUseUseCase(useCase.id)
                      const isSelected = selectedUseCase === useCase.id
                      
                      return (
                        <button
                          key={useCase.id}
                          onClick={() => handleUseCaseSelect(useCase.id)}
                          className={`relative p-4 border rounded-lg text-left transition-all ${
                            isSelected 
                              ? 'border-blue-500 bg-blue-50' 
                              : canUse 
                                ? 'border-gray-200 hover:border-gray-300 bg-white' 
                                : 'border-gray-100 bg-gray-50 opacity-75'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{useCase.icon}</span>
                              <div>
                                <h4 className="font-medium text-gray-900">{useCase.name}</h4>
                                <p className="text-sm text-gray-600">{useCase.description}</p>
                              </div>
                            </div>
                            {!canUse && (
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                                {featureGate.getRequiredTierForUseCase(useCase.id).name}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">
                            {useCase.dimensions.width}×{useCase.dimensions.height}px • max {useCase.constraints.maxDuration}s
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Animation Selection */}
              {currentStep >= 3 && selectedUseCase && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2">3️⃣</span>
                    Kies animatie
                  </h3>
                  
                  <div className="space-y-4">
                    {Object.entries(ELEMENT_ANIMATIONS).map(([elementType, animations]) => {
                      const availableAnimations = Object.values(animations).filter(anim => 
                        getAvailableAnimations().some(available => available.id === anim.id)
                      )
                      
                      if (availableAnimations.length === 0) return null
                      
                      return (
                        <div key={elementType}>
                          <h4 className="text-sm font-medium text-gray-700 mb-2 capitalize">
                            {elementType === 'universal' ? 'Basis Animaties' : `${elementType} Animaties`}
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {availableAnimations.map(animation => {
                              const canUse = featureGate.canUseAnimation(animation.id)
                              const isSelected = selectedAnimation?.id === animation.id
                              
                              return (
                                <button
                                  key={animation.id}
                                  onClick={() => handleAnimationSelect(animation)}
                                  className={`relative p-3 border rounded-lg text-left transition-all ${
                                    isSelected 
                                      ? 'border-blue-500 bg-blue-50' 
                                      : canUse 
                                        ? 'border-gray-200 hover:border-gray-300' 
                                        : 'border-gray-100 bg-gray-50 opacity-75'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h5 className="font-medium text-gray-900">{animation.name}</h5>
                                      <p className="text-sm text-gray-600">{animation.description}</p>
                                    </div>
                                    <div className="text-right">
                                      {!canUse && (
                                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium mb-1 block">
                                          {animation.tier}
                                        </span>
                                      )}
                                      <span className={`inline-block w-2 h-2 rounded-full ${
                                        animation.complexity === 'basic' ? 'bg-green-400' :
                                        animation.complexity === 'medium' ? 'bg-yellow-400' :
                                        'bg-red-400'
                                      }`}></span>
                                    </div>
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Animation Controls */}
              {currentStep >= 4 && selectedAnimation && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2">4️⃣</span>
                    Instellingen
                  </h3>
                  <AnimationControls
                    settings={animationSettings}
                    onChange={setAnimationSettings}
                    constraints={USE_CASE_TEMPLATES[selectedUseCase]?.constraints}
                    isActive={currentStep === 4}
                  />
                </div>
              )}
            </div>

            {/* Right Column - Preview */}
            <div className="lg:col-span-2">
              {selectedUseCase && uploadedLogo ? (
                <ContextualPreview
                  useCase={selectedUseCase}
                  animation={selectedAnimation}
                  logo={uploadedLogo}
                  settings={animationSettings}
                  onPlay={() => trackEvent('animation_played', {
                    animationType: selectedAnimation?.name,
                    useCaseId: selectedUseCase,
                    settings: animationSettings
                  })}
                  onReset={resetTool}
                  onExport={() => setShowExportModal(true)}
                />
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Begin met je logo uploaden
                  </h3>
                  <p className="text-gray-600">
                    Upload je logo om te beginnen met het maken van professionele animaties
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Export Modal */}
          {showExportModal && (
            <ExportModal
              logo={uploadedLogo}
              animation={selectedAnimation}
              settings={animationSettings}
              useCase={selectedUseCase}
              svgElements={logoElements}
              userTier={userTier}
              onClose={() => setShowExportModal(false)}
              onExport={handleExport}
            />
          )}

          {/* Upgrade Modal */}
          {showUpgradeModal && (
            <UpgradeModal
              isOpen={showUpgradeModal}
              onClose={() => setShowUpgradeModal(false)}
              upgradeData={upgradeModalData}
              onUpgrade={handleUpgrade}
            />
          )}

          {/* CTA Section */}
          <section className="mt-16 bg-[#F7D8FA] rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wil je nog professionelere animaties?
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Onze designers maken custom logo animaties, motion graphics en complete brand identity videos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/work-with-me"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Plan Gratis Gesprek
              </Link>
              <a 
                href="tel:+31648728828"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                Bel Direct: +31 6 48728828
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}