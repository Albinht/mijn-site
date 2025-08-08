'use client'

// Pricing tiers configuration
export const PRICING_TIERS = {
  FREE: {
    id: 'free',
    name: 'Gratis',
    price: 0,
    period: null,
    badge: '🆓',
    color: 'green',
    features: {
      // Use cases
      useCases: ['website-header', 'email-signature'],
      maxUseCases: 2,
      
      // Animations
      animations: ['fade-in', 'scale-in', 'rotate-in', 'text-reveal'],
      maxAnimations: 4,
      
      // Export formats
      exports: ['css'],
      maxExports: 1,
      
      // Technical limits
      maxDuration: 3,
      maxElements: 5,
      maxFileSize: '1MB',
      
      // Features
      watermark: true,
      timelineEditor: false,
      customDimensions: false,
      batchProcessing: false,
      prioritySupport: false,
      whiteLabel: false,
      apiAccess: false,
      
      // Advanced features
      svgElementDetection: 'basic',
      contextualPreview: true,
      realTimePreview: true,
      cssOptimization: 'basic'
    },
    limits: {
      projectsPerMonth: 10,
      exportsPerMonth: 50,
      storagePerProject: '10MB'
    },
    description: 'Perfect om te beginnen met logo animaties'
  },

  PRO: {
    id: 'pro',
    name: 'Pro',
    price: 19,
    period: 'maand',
    badge: '💎',
    color: 'blue',
    popular: true,
    features: {
      // Use cases
      useCases: ['website-header', 'email-signature', 'social-media', 'presentation', 'loading-spinner'],
      maxUseCases: 5,
      
      // Animations
      animations: 'all',
      maxAnimations: 'unlimited',
      
      // Export formats
      exports: ['css', 'gif', 'mp4', 'svg', 'lottie'],
      maxExports: 5,
      
      // Technical limits
      maxDuration: 8,
      maxElements: 20,
      maxFileSize: '10MB',
      
      // Features
      watermark: false,
      timelineEditor: true,
      customDimensions: true,
      batchProcessing: false,
      prioritySupport: true,
      whiteLabel: false,
      apiAccess: false,
      
      // Advanced features
      svgElementDetection: 'advanced',
      contextualPreview: true,
      realTimePreview: true,
      cssOptimization: 'advanced',
      videoExport: true,
      gifOptimization: true,
      elementBasedAnimations: true
    },
    limits: {
      projectsPerMonth: 100,
      exportsPerMonth: 500,
      storagePerProject: '100MB'
    },
    description: 'Voor professionals die meer controle willen'
  },

  AGENCY: {
    id: 'agency',
    name: 'Agency',
    price: 49,
    period: 'maand',
    badge: '🚀',
    color: 'purple',
    features: {
      // Use cases
      useCases: 'all',
      maxUseCases: 'unlimited',
      
      // Animations
      animations: 'all',
      maxAnimations: 'unlimited',
      
      // Export formats
      exports: ['css', 'gif', 'mp4', 'webm', 'svg', 'lottie', 'after-effects', 'png-sequence'],
      maxExports: 'unlimited',
      
      // Technical limits
      maxDuration: 15,
      maxElements: 50,
      maxFileSize: '50MB',
      
      // Features
      watermark: false,
      timelineEditor: true,
      customDimensions: true,
      batchProcessing: true,
      prioritySupport: true,
      whiteLabel: true,
      apiAccess: true,
      
      // Advanced features
      svgElementDetection: 'professional',
      contextualPreview: true,
      realTimePreview: true,
      cssOptimization: 'professional',
      videoExport: true,
      gifOptimization: true,
      elementBasedAnimations: true,
      customAnimations: true,
      teamCollaboration: true,
      brandKit: true
    },
    limits: {
      projectsPerMonth: 'unlimited',
      exportsPerMonth: 'unlimited',
      storagePerProject: '1GB',
      teamMembers: 10
    },
    description: 'Voor agencies en grote teams'
  }
}

// Feature gate class
export class FeatureGate {
  constructor(userTier = 'FREE') {
    this.userTier = userTier.toUpperCase()
    this.tier = PRICING_TIERS[this.userTier] || PRICING_TIERS.FREE
  }

  // Use case access
  canUseUseCase(useCaseId) {
    if (this.tier.features.useCases === 'all') return true
    return this.tier.features.useCases.includes(useCaseId)
  }

  getAvailableUseCases() {
    return this.tier.features.useCases === 'all' 
      ? Object.keys(USE_CASE_TEMPLATES) 
      : this.tier.features.useCases
  }

  // Animation access
  canUseAnimation(animationId) {
    if (this.tier.features.animations === 'all') return true
    return this.tier.features.animations.includes(animationId)
  }

  getAvailableAnimations() {
    return this.tier.features.animations === 'all'
      ? 'all'
      : this.tier.features.animations
  }

  // Export format access
  canExportFormat(format) {
    return this.tier.features.exports.includes(format)
  }

  getAvailableExports() {
    return this.tier.features.exports
  }

  // Technical limits
  canUseDuration(duration) {
    return duration <= this.tier.features.maxDuration
  }

  canUseElements(elementCount) {
    return elementCount <= this.tier.features.maxElements
  }

  canUseFileSize(fileSizeBytes) {
    const maxSizeBytes = this.parseFileSize(this.tier.features.maxFileSize)
    return fileSizeBytes <= maxSizeBytes
  }

  // Feature access
  hasFeature(feature) {
    return this.tier.features[feature] === true
  }

  getFeatureLevel(feature) {
    return this.tier.features[feature]
  }

  // Limit checking
  checkLimit(limitType) {
    return this.tier.limits[limitType]
  }

  // Upgrade requirements
  getRequiredTierFor(feature, value = null) {
    for (const [tierId, tier] of Object.entries(PRICING_TIERS)) {
      if (tier.features[feature] === true || 
          tier.features[feature] === 'all' ||
          (value && tier.features[feature] >= value)) {
        return tier
      }
    }
    return PRICING_TIERS.AGENCY // Fallback
  }

  getRequiredTierForUseCase(useCaseId) {
    for (const [tierId, tier] of Object.entries(PRICING_TIERS)) {
      if (tier.features.useCases === 'all' || tier.features.useCases.includes(useCaseId)) {
        return tier
      }
    }
    return PRICING_TIERS.AGENCY
  }

  getRequiredTierForAnimation(animationId) {
    for (const [tierId, tier] of Object.entries(PRICING_TIERS)) {
      if (tier.features.animations === 'all' || tier.features.animations.includes(animationId)) {
        return tier
      }
    }
    return PRICING_TIERS.AGENCY
  }

  getRequiredTierForExport(format) {
    for (const [tierId, tier] of Object.entries(PRICING_TIERS)) {
      if (tier.features.exports.includes(format)) {
        return tier
      }
    }
    return PRICING_TIERS.AGENCY
  }

  // Upgrade modal data
  getUpgradeModal(blockedFeature, context = {}) {
    const requiredTier = this.getRequiredTierFor(blockedFeature, context.value)
    
    const upgradeBenefits = this.getUpgradeBenefits(requiredTier.id)
    const currentTierName = this.tier.name
    const requiredTierName = requiredTier.name

    return {
      title: `${this.getFeatureDisplayName(blockedFeature)} is beschikbaar in ${requiredTierName}`,
      subtitle: `Je gebruikt nu ${currentTierName}`,
      feature: blockedFeature,
      context,
      currentTier: this.tier,
      requiredTier,
      benefits: upgradeBenefits,
      pricing: {
        currentPrice: this.tier.price,
        newPrice: requiredTier.price,
        savings: this.calculateSavings(requiredTier.id)
      },
      cta: `Upgrade naar ${requiredTierName} voor €${requiredTier.price}/${requiredTier.period || 'eenmalig'}`,
      urgency: this.getUpgradeUrgency(blockedFeature),
      testimonial: this.getUpgradeTestimonial(requiredTier.id)
    }
  }

  getUpgradeBenefits(targetTier) {
    const tier = PRICING_TIERS[targetTier.toUpperCase()]
    const benefits = []

    if (tier.features.exports.includes('gif')) {
      benefits.push({ icon: '🎬', text: 'GIF export voor social media' })
    }
    if (tier.features.exports.includes('mp4')) {
      benefits.push({ icon: '🎥', text: 'HD Video export' })
    }
    if (tier.features.timelineEditor) {
      benefits.push({ icon: '⏱️', text: 'Visual timeline editor' })
    }
    if (tier.features.batchProcessing) {
      benefits.push({ icon: '⚡', text: 'Batch processing' })
    }
    if (!tier.features.watermark) {
      benefits.push({ icon: '🚫', text: 'Geen watermark' })
    }
    if (tier.features.prioritySupport) {
      benefits.push({ icon: '🎧', text: 'Priority support' })
    }
    if (tier.features.customDimensions) {
      benefits.push({ icon: '📐', text: 'Custom afmetingen' })
    }

    return benefits.slice(0, 6) // Max 6 benefits
  }

  calculateSavings(targetTier) {
    const tier = PRICING_TIERS[targetTier.toUpperCase()]
    // Calculate yearly savings if applicable
    if (tier.period === 'maand') {
      const yearlyPrice = tier.price * 12
      const yearlyDiscount = yearlyPrice * 0.2 // 20% yearly discount
      return Math.round(yearlyDiscount)
    }
    return 0
  }

  getUpgradeUrgency(feature) {
    const urgentFeatures = ['videoExport', 'gifOptimization', 'batchProcessing']
    
    if (urgentFeatures.includes(feature)) {
      return {
        message: '🔥 Beperkte tijd: 20% korting op jaarlijkse plannen',
        level: 'high'
      }
    }
    
    return {
      message: '⭐ Upgrade vandaag en krijg direct toegang',
      level: 'medium'
    }
  }

  getUpgradeTestimonial(targetTier) {
    const testimonials = {
      PRO: {
        text: "De Pro versie heeft onze workflow enorm verbeterd. Video export is een game changer!",
        author: "Sarah K., Marketing Manager"
      },
      AGENCY: {
        text: "Agency plan is perfect voor ons team. Batch processing bespaart ons uren werk.",
        author: "Mike R., Creative Director"
      }
    }
    
    return testimonials[targetTier] || testimonials.PRO
  }

  getFeatureDisplayName(feature) {
    const displayNames = {
      videoExport: 'Video Export',
      gifOptimization: 'GIF Export',
      timelineEditor: 'Timeline Editor',
      batchProcessing: 'Batch Processing',
      customDimensions: 'Custom Afmetingen',
      whiteLabel: 'White Label',
      apiAccess: 'API Toegang',
      elementBasedAnimations: 'Element Animaties',
      prioritySupport: 'Priority Support'
    }
    
    return displayNames[feature] || feature
  }

  // Utility methods
  parseFileSize(sizeString) {
    const units = { 'KB': 1024, 'MB': 1024 * 1024, 'GB': 1024 * 1024 * 1024 }
    const match = sizeString.match(/^(\d+(?:\.\d+)?)\s*(KB|MB|GB)$/i)
    
    if (!match) return 0
    
    const value = parseFloat(match[1])
    const unit = match[2].toUpperCase()
    
    return value * (units[unit] || 1)
  }

  // Analytics and tracking
  trackFeatureBlock(feature, context = {}) {
    // Track when users hit feature limits
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'feature_blocked', {
        feature_name: feature,
        user_tier: this.userTier,
        required_tier: this.getRequiredTierFor(feature).id,
        ...context
      })
    }
  }

  trackUpgradeIntent(targetTier, feature) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'upgrade_intent', {
        target_tier: targetTier,
        blocked_feature: feature,
        current_tier: this.userTier
      })
    }
  }
}

// Utility functions
export function createFeatureGate(userTier) {
  return new FeatureGate(userTier)
}

export function getTierColor(tierId) {
  const tier = PRICING_TIERS[tierId.toUpperCase()]
  return tier ? tier.color : 'gray'
}

export function getTierBadge(tierId) {
  const tier = PRICING_TIERS[tierId.toUpperCase()]
  return tier ? tier.badge : '?'
}

export function compareTiers(tier1, tier2) {
  const tierOrder = ['FREE', 'PRO', 'AGENCY']
  const index1 = tierOrder.indexOf(tier1.toUpperCase())
  const index2 = tierOrder.indexOf(tier2.toUpperCase())
  
  return index1 - index2
}

export function isUpgrade(fromTier, toTier) {
  return compareTiers(fromTier, toTier) < 0
}

// React hook for feature gates
export function useFeatureGate(userTier = 'FREE') {
  const featureGate = new FeatureGate(userTier)
  
  return {
    canUse: (feature, value) => {
      switch (feature) {
        case 'useCase':
          return featureGate.canUseUseCase(value)
        case 'animation':
          return featureGate.canUseAnimation(value)
        case 'export':
          return featureGate.canExportFormat(value)
        case 'duration':
          return featureGate.canUseDuration(value)
        case 'elements':
          return featureGate.canUseElements(value)
        case 'fileSize':
          return featureGate.canUseFileSize(value)
        default:
          return featureGate.hasFeature(feature)
      }
    },
    
    getUpgradeModal: (feature, context) => featureGate.getUpgradeModal(feature, context),
    getRequiredTier: (feature, value) => featureGate.getRequiredTierFor(feature, value),
    trackBlock: (feature, context) => featureGate.trackFeatureBlock(feature, context),
    trackUpgrade: (tier, feature) => featureGate.trackUpgradeIntent(tier, feature),
    
    tier: featureGate.tier,
    userTier: featureGate.userTier
  }
}