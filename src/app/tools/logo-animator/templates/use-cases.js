'use client'

export const USE_CASE_TEMPLATES = {
  'email-signature': {
    id: 'email-signature',
    name: 'Email Handtekening',
    description: 'Subtiele animaties voor professionele email signatures',
    icon: '📧',
    category: 'business',
    dimensions: {
      width: 200,
      height: 80,
      aspectRatio: '2.5:1'
    },
    constraints: {
      maxDuration: 3,
      maxFileSize: '500KB', // Voor email compatibiliteit
      recommendedFormats: ['gif', 'png'],
      loops: 1 // Email signatures meestal 1x afspelen
    },
    animations: {
      allowed: ['fade-in', 'scale-in', 'text-reveal', 'rotate-in'],
      recommended: ['fade-in', 'scale-in'],
      forbidden: ['pulse', 'glow'] // Te opvallend voor zakelijk
    },
    exports: {
      primary: ['gif'],
      secondary: ['png', 'css'],
      premium: ['svg-optimized']
    },
    preview: {
      context: 'email-client',
      background: '#f8f9fa',
      showMockup: true
    },
    settings: {
      defaultDuration: 2,
      defaultEasing: 'ease-out',
      defaultDelay: 0.5,
      subtleMode: true
    },
    businessRules: {
      tier: 'free', // Beschikbaar in gratis versie
      conversionValue: 'low' // Lead magnet
    }
  },

  'social-media': {
    id: 'social-media',
    name: 'Social Media Post',
    description: 'Opvallende animaties voor Instagram, Facebook en LinkedIn posts',
    icon: '📱',
    category: 'marketing',
    dimensions: {
      width: 400,
      height: 400,
      aspectRatio: '1:1'
    },
    constraints: {
      maxDuration: 5,
      maxFileSize: '8MB', // Instagram/Facebook limiet
      recommendedFormats: ['gif', 'mp4'],
      loops: 'infinite' // Social media meestal loop
    },
    animations: {
      allowed: ['pulse', 'glow', 'scale-in', 'fade-in', 'rotate-in', 'text-bounce-in'],
      recommended: ['pulse', 'scale-in', 'glow'],
      forbidden: [] // Alles toegestaan voor social
    },
    exports: {
      primary: ['gif', 'mp4'],
      secondary: ['css'],
      premium: ['webm', 'lottie']
    },
    preview: {
      context: 'social-feed',
      background: '#ffffff',
      showMockup: true,
      mobilePreview: true
    },
    settings: {
      defaultDuration: 3,
      defaultEasing: 'ease-in-out',
      defaultDelay: 0,
      vibrantMode: true
    },
    businessRules: {
      tier: 'pro', // Premium feature
      conversionValue: 'medium'
    }
  },

  'video-intro': {
    id: 'video-intro',
    name: 'Video Intro/Outro',
    description: 'Professionele logo animaties voor video content',
    icon: '🎬',
    category: 'video',
    dimensions: {
      width: 1920,
      height: 1080,
      aspectRatio: '16:9'
    },
    constraints: {
      maxDuration: 8,
      maxFileSize: '50MB',
      recommendedFormats: ['mp4', 'webm'],
      loops: 1 // Video intro's meestal 1x
    },
    animations: {
      allowed: ['cinematic-entrance', 'text-reveal', 'logo-build', 'path-draw', 'fade-in', 'scale-in'],
      recommended: ['cinematic-entrance', 'logo-build'],
      forbidden: ['bounce'] // Te speels voor video
    },
    exports: {
      primary: ['mp4', 'webm'],
      secondary: ['gif'],
      premium: ['prores', 'after-effects']
    },
    preview: {
      context: 'video-timeline',
      background: '#000000',
      showMockup: true,
      videoControls: true
    },
    settings: {
      defaultDuration: 5,
      defaultEasing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      defaultDelay: 0,
      cinematicMode: true
    },
    businessRules: {
      tier: 'pro',
      conversionValue: 'high'
    }
  },

  'website-header': {
    id: 'website-header',
    name: 'Website Header',
    description: 'Logo animaties voor website headers en landing pages',
    icon: '🌐',
    category: 'web',
    dimensions: {
      width: 300,
      height: 100,
      aspectRatio: '3:1'
    },
    constraints: {
      maxDuration: 4,
      maxFileSize: '1MB', // Voor snelle laadtijden
      recommendedFormats: ['css', 'svg', 'gif'],
      loops: 1 // Page load animatie
    },
    animations: {
      allowed: ['fade-in', 'scale-in', 'rotate-in', 'text-reveal'],
      recommended: ['fade-in', 'scale-in'],
      forbidden: ['pulse', 'glow'] // Te druk voor header
    },
    exports: {
      primary: ['css', 'svg'],
      secondary: ['gif'],
      premium: ['lottie', 'gsap']
    },
    preview: {
      context: 'website-mockup',
      background: '#ffffff',
      showMockup: true,
      responsivePreview: true
    },
    settings: {
      defaultDuration: 2.5,
      defaultEasing: 'ease-out',
      defaultDelay: 0.3,
      webOptimized: true
    },
    businessRules: {
      tier: 'free',
      conversionValue: 'medium'
    }
  },

  'presentation': {
    id: 'presentation',
    name: 'Presentatie Slide',
    description: 'Logo animaties voor PowerPoint en Keynote presentaties',
    icon: '📊',
    category: 'business',
    dimensions: {
      width: 800,
      height: 600,
      aspectRatio: '4:3'
    },
    constraints: {
      maxDuration: 6,
      maxFileSize: '5MB',
      recommendedFormats: ['gif', 'mp4'],
      loops: 1
    },
    animations: {
      allowed: ['fade-in', 'slide-reveal', 'scale-in', 'text-reveal', 'logo-build'],
      recommended: ['fade-in', 'logo-build'],
      forbidden: ['bounce', 'spin']
    },
    exports: {
      primary: ['gif', 'mp4'],
      secondary: ['png-sequence'],
      premium: ['pptx-compatible']
    },
    preview: {
      context: 'presentation-slide',
      background: '#ffffff',
      showMockup: true
    },
    settings: {
      defaultDuration: 3,
      defaultEasing: 'ease-in-out',
      defaultDelay: 0.5,
      professionalMode: true
    },
    businessRules: {
      tier: 'pro',
      conversionValue: 'medium'
    }
  },

  'loading-spinner': {
    id: 'loading-spinner',
    name: 'Loading Animatie',
    description: 'Logo als loading indicator voor apps en websites',
    icon: '⏳',
    category: 'web',
    dimensions: {
      width: 64,
      height: 64,
      aspectRatio: '1:1'
    },
    constraints: {
      maxDuration: 2,
      maxFileSize: '200KB',
      recommendedFormats: ['css', 'svg', 'gif'],
      loops: 'infinite'
    },
    animations: {
      allowed: ['spin', 'pulse', 'fade-in-out', 'scale-pulse'],
      recommended: ['spin', 'pulse'],
      forbidden: ['bounce'] // Niet geschikt voor loading
    },
    exports: {
      primary: ['css', 'svg'],
      secondary: ['gif'],
      premium: ['lottie']
    },
    preview: {
      context: 'loading-state',
      background: '#f8f9fa',
      showMockup: true
    },
    settings: {
      defaultDuration: 1.5,
      defaultEasing: 'linear',
      defaultDelay: 0,
      infiniteLoop: true
    },
    businessRules: {
      tier: 'pro',
      conversionValue: 'low'
    }
  }
}

// Helper functions
export function getUseCasesByTier(tier = 'free') {
  return Object.values(USE_CASE_TEMPLATES).filter(useCase => {
    if (tier === 'free') return useCase.businessRules.tier === 'free'
    if (tier === 'pro') return ['free', 'pro'].includes(useCase.businessRules.tier)
    if (tier === 'agency') return true // Agency heeft toegang tot alles
    return false
  })
}

export function getUseCasesByCategory(category) {
  return Object.values(USE_CASE_TEMPLATES).filter(useCase => 
    useCase.category === category
  )
}

export function getRecommendedAnimations(useCaseId) {
  const useCase = USE_CASE_TEMPLATES[useCaseId]
  return useCase ? useCase.animations.recommended : []
}

export function getAllowedAnimations(useCaseId) {
  const useCase = USE_CASE_TEMPLATES[useCaseId]
  return useCase ? useCase.animations.allowed : []
}

export function isAnimationAllowed(useCaseId, animationId) {
  const useCase = USE_CASE_TEMPLATES[useCaseId]
  if (!useCase) return false
  
  return useCase.animations.allowed.includes(animationId) && 
         !useCase.animations.forbidden.includes(animationId)
}

export function getOptimalSettings(useCaseId) {
  const useCase = USE_CASE_TEMPLATES[useCaseId]
  return useCase ? useCase.settings : {
    defaultDuration: 2,
    defaultEasing: 'ease-in-out',
    defaultDelay: 0
  }
}

export function validateUseCaseConstraints(useCaseId, settings) {
  const useCase = USE_CASE_TEMPLATES[useCaseId]
  if (!useCase) return { valid: false, errors: ['Invalid use case'] }

  const errors = []
  
  // Check duration constraint
  if (settings.duration > useCase.constraints.maxDuration) {
    errors.push(`Duration cannot exceed ${useCase.constraints.maxDuration}s for ${useCase.name}`)
  }

  // Check animation compatibility
  if (settings.animation && !isAnimationAllowed(useCaseId, settings.animation)) {
    errors.push(`Animation '${settings.animation}' is not suitable for ${useCase.name}`)
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings: []
  }
}

// Export categories for filtering
export const USE_CASE_CATEGORIES = {
  business: {
    name: 'Zakelijk',
    icon: '💼',
    color: 'blue'
  },
  marketing: {
    name: 'Marketing',
    icon: '📢',
    color: 'pink'
  },
  video: {
    name: 'Video',
    icon: '🎥',
    color: 'purple'
  },
  web: {
    name: 'Web',
    icon: '🌐',
    color: 'green'
  }
}