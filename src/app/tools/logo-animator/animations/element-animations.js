'use client'

// Element-specific animation definitions
export const ELEMENT_ANIMATIONS = {
  // Path-specific animations
  path: {
    'path-draw': {
      id: 'path-draw',
      name: 'Pad Tekenen',
      description: 'Tekent het pad van begin tot eind',
      category: 'entrance',
      complexity: 'advanced',
      tier: 'pro',
      keyframes: (element, settings) => {
        const pathLength = element.pathLength || 1000
        return {
          name: `pathDraw-${element.id}`,
          css: `
            @keyframes pathDraw-${element.id} {
              0% { 
                stroke-dasharray: ${pathLength}px;
                stroke-dashoffset: ${pathLength}px;
                fill-opacity: 0;
              }
              80% {
                stroke-dasharray: ${pathLength}px;
                stroke-dashoffset: 0;
                fill-opacity: 0;
              }
              100% { 
                stroke-dasharray: ${pathLength}px;
                stroke-dashoffset: 0;
                fill-opacity: 1;
              }
            }
          `,
          properties: {
            'animation-name': `pathDraw-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          }
        }
      },
      initialStyles: {
        'stroke-dasharray': '0',
        'stroke-dashoffset': '0'
      }
    },

    'path-morph': {
      id: 'path-morph',
      name: 'Vorm Verandering',
      description: 'Verandert van vorm naar een andere vorm',
      category: 'transform',
      complexity: 'advanced',
      tier: 'agency',
      requiresTarget: true,
      keyframes: (element, settings, targetPath) => {
        return {
          name: `pathMorph-${element.id}`,
          css: `
            @keyframes pathMorph-${element.id} {
              0% { d: path('${element.properties.d}'); }
              100% { d: path('${targetPath}'); }
            }
          `,
          properties: {
            'animation-name': `pathMorph-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          }
        }
      }
    },

    'path-reveal': {
      id: 'path-reveal',
      name: 'Pad Onthulling',
      description: 'Onthult het pad met een masking effect',
      category: 'entrance',
      complexity: 'medium',
      tier: 'pro',
      keyframes: (element, settings) => {
        return {
          name: `pathReveal-${element.id}`,
          css: `
            @keyframes pathReveal-${element.id} {
              0% { 
                clip-path: inset(0 100% 0 0);
                opacity: 0;
              }
              50% {
                clip-path: inset(0 0% 0 0);
                opacity: 1;
              }
              100% { 
                clip-path: inset(0 0% 0 0);
                opacity: 1;
              }
            }
          `,
          properties: {
            'animation-name': `pathReveal-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          }
        }
      }
    }
  },

  // Text-specific animations
  text: {
    'typing-effect': {
      id: 'typing-effect',
      name: 'Type Effect',
      description: 'Toont tekst karakter voor karakter',
      category: 'entrance',
      complexity: 'advanced',
      tier: 'pro',
      keyframes: (element, settings) => {
        const textLength = element.content ? element.content.length : 10
        const steps = Math.max(textLength, 1)
        
        return {
          name: `typingEffect-${element.id}`,
          css: `
            @keyframes typingEffect-${element.id} {
              0% { width: 0; }
              100% { width: 100%; }
            }
            @keyframes blinkCursor-${element.id} {
              0%, 50% { border-right-color: transparent; }
              51%, 100% { border-right-color: currentColor; }
            }
          `,
          properties: {
            'animation-name': `typingEffect-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': `steps(${steps}, end)`,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          },
          additionalStyles: {
            'overflow': 'hidden',
            'white-space': 'nowrap',
            'border-right': '2px solid currentColor',
            'animation-name': `typingEffect-${element.id}, blinkCursor-${element.id}`,
            'animation-duration': `${settings.duration}s, 1s`,
            'animation-timing-function': `steps(${steps}, end), steps(2, start)`,
            'animation-iteration-count': `1, infinite`
          }
        }
      }
    },

    'text-reveal': {
      id: 'text-reveal',
      name: 'Tekst Onthulling',
      description: 'Onthult tekst met een sliding mask effect',
      category: 'entrance',
      complexity: 'medium',
      tier: 'free',
      keyframes: (element, settings) => {
        return {
          name: `textReveal-${element.id}`,
          css: `
            @keyframes textReveal-${element.id} {
              0% { 
                clip-path: inset(0 100% 0 0);
                opacity: 0;
              }
              20% {
                opacity: 1;
              }
              100% { 
                clip-path: inset(0 0% 0 0);
                opacity: 1;
              }
            }
          `,
          properties: {
            'animation-name': `textReveal-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          }
        }
      }
    },

    'text-bounce-in': {
      id: 'text-bounce-in',
      name: 'Tekst Bounce In',
      description: 'Tekst springt naar binnen met bounce effect',
      category: 'entrance',
      complexity: 'basic',
      tier: 'free',
      keyframes: (element, settings) => {
        return {
          name: `textBounceIn-${element.id}`,
          css: `
            @keyframes textBounceIn-${element.id} {
              0% { 
                transform: scale(0.3) translateY(-50px);
                opacity: 0;
              }
              50% {
                transform: scale(1.05) translateY(0);
                opacity: 1;
              }
              70% {
                transform: scale(0.95);
              }
              100% { 
                transform: scale(1);
                opacity: 1;
              }
            }
          `,
          properties: {
            'animation-name': `textBounceIn-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          }
        }
      }
    }
  },

  // Group-specific animations (for stagger effects)
  group: {
    'stagger-children': {
      id: 'stagger-children',
      name: 'Gestaggerde Kinderen',
      description: 'Animeert child elementen met vertraging',
      category: 'entrance',
      complexity: 'advanced',
      tier: 'pro',
      keyframes: (element, settings) => {
        const childDelay = settings.staggerDelay || 0.1
        const childAnimations = []
        
        // Generate animations for each child
        element.properties.children.forEach((child, index) => {
          const delay = settings.delay + (index * childDelay)
          childAnimations.push({
            selector: `#${element.id} > *:nth-child(${index + 1})`,
            delay: delay,
            animation: settings.childAnimation || 'fadeIn'
          })
        })
        
        return {
          name: `staggerChildren-${element.id}`,
          childAnimations,
          css: childAnimations.map(child => `
            ${child.selector} {
              animation: ${child.animation} ${settings.duration}s ${settings.easing} ${child.delay}s forwards;
              opacity: 0;
            }
          `).join('\n')
        }
      }
    }
  },

  // Universal animations (work on any element)
  universal: {
    'fade-in': {
      id: 'fade-in',
      name: 'Fade In',
      description: 'Geleidelijk zichtbaar worden',
      category: 'entrance',
      complexity: 'basic',
      tier: 'free',
      keyframes: (element, settings) => {
        return {
          name: `fadeIn-${element.id}`,
          css: `
            @keyframes fadeIn-${element.id} {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
          `,
          properties: {
            'animation-name': `fadeIn-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          }
        }
      },
      initialStyles: {
        'opacity': '0'
      }
    },

    'scale-in': {
      id: 'scale-in',
      name: 'Scale In',
      description: 'Schaalt van klein naar normaal',
      category: 'entrance',
      complexity: 'basic',
      tier: 'free',
      keyframes: (element, settings) => {
        return {
          name: `scaleIn-${element.id}`,
          css: `
            @keyframes scaleIn-${element.id} {
              0% { 
                transform: scale(0.8);
                opacity: 0;
              }
              100% { 
                transform: scale(1);
                opacity: 1;
              }
            }
          `,
          properties: {
            'animation-name': `scaleIn-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          }
        }
      },
      initialStyles: {
        'opacity': '0',
        'transform': 'scale(0.8)'
      }
    },

    'rotate-in': {
      id: 'rotate-in',
      name: 'Rotate In',
      description: 'Roteert naar binnen',
      category: 'entrance',
      complexity: 'basic',
      tier: 'free',
      keyframes: (element, settings) => {
        const rotation = settings.rotation || -10
        return {
          name: `rotateIn-${element.id}`,
          css: `
            @keyframes rotateIn-${element.id} {
              0% { 
                transform: rotate(${rotation}deg);
                opacity: 0;
              }
              100% { 
                transform: rotate(0deg);
                opacity: 1;
              }
            }
          `,
          properties: {
            'animation-name': `rotateIn-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-fill-mode': 'forwards'
          }
        }
      },
      initialStyles: {
        'opacity': '0'
      }
    },

    'pulse': {
      id: 'pulse',
      name: 'Pulse',
      description: 'Pulserende schaal animatie',
      category: 'emphasis',
      complexity: 'basic',
      tier: 'free',
      keyframes: (element, settings) => {
        const scaleAmount = settings.scaleAmount || 1.05
        return {
          name: `pulse-${element.id}`,
          css: `
            @keyframes pulse-${element.id} {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(${scaleAmount}); }
            }
          `,
          properties: {
            'animation-name': `pulse-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-iteration-count': settings.loop ? 'infinite' : '1',
            'animation-fill-mode': 'forwards'
          }
        }
      }
    },

    'glow': {
      id: 'glow',
      name: 'Glow',
      description: 'Glowing filter effect',
      category: 'emphasis',
      complexity: 'medium',
      tier: 'pro',
      keyframes: (element, settings) => {
        const glowColor = settings.glowColor || 'rgba(59, 130, 246, 0.8)'
        const glowIntensity = settings.glowIntensity || 15
        
        return {
          name: `glow-${element.id}`,
          css: `
            @keyframes glow-${element.id} {
              0%, 100% { 
                filter: drop-shadow(0 0 5px ${glowColor.replace('0.8', '0.5')});
              }
              50% { 
                filter: drop-shadow(0 0 ${glowIntensity}px ${glowColor});
              }
            }
          `,
          properties: {
            'animation-name': `glow-${element.id}`,
            'animation-duration': `${settings.duration}s`,
            'animation-timing-function': settings.easing,
            'animation-delay': `${settings.delay}s`,
            'animation-iteration-count': settings.loop ? 'infinite' : '1',
            'animation-fill-mode': 'forwards'
          }
        }
      }
    },

    // Logo building animation (complex multi-element)
    'logo-build': {
      id: 'logo-build',
      name: 'Logo Bouwen',
      description: 'Bouwt logo element voor element op',
      category: 'entrance',
      complexity: 'advanced',
      tier: 'pro',
      multiElement: true,
      keyframes: (elements, settings) => {
        const totalElements = elements.length
        const elementDuration = settings.duration / totalElements
        const animations = []
        
        elements.forEach((element, index) => {
          const delay = settings.delay + (index * elementDuration * 0.8) // 80% overlap
          animations.push({
            elementId: element.id,
            delay: delay,
            name: `logoBuild-${element.id}`,
            css: `
              @keyframes logoBuild-${element.id} {
                0% { 
                  opacity: 0;
                  transform: translateY(20px) scale(0.8);
                }
                100% { 
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `,
            properties: {
              'animation-name': `logoBuild-${element.id}`,
              'animation-duration': `${elementDuration}s`,
              'animation-timing-function': settings.easing,
              'animation-delay': `${delay}s`,
              'animation-fill-mode': 'forwards'
            }
          })
        })
        
        return animations
      }
    }
  }
}

// Helper functions
export function getAnimationsByElement(elementType) {
  const animations = []
  
  // Add element-specific animations
  if (ELEMENT_ANIMATIONS[elementType]) {
    animations.push(...Object.values(ELEMENT_ANIMATIONS[elementType]))
  }
  
  // Add universal animations
  animations.push(...Object.values(ELEMENT_ANIMATIONS.universal))
  
  return animations
}

export function getAnimationsByTier(tier = 'free') {
  const animations = []
  
  Object.values(ELEMENT_ANIMATIONS).forEach(elementType => {
    Object.values(elementType).forEach(animation => {
      if (tier === 'free' && animation.tier === 'free') {
        animations.push(animation)
      } else if (tier === 'pro' && ['free', 'pro'].includes(animation.tier)) {
        animations.push(animation)
      } else if (tier === 'agency') {
        animations.push(animation)
      }
    })
  })
  
  return animations
}

export function getAnimationById(animationId) {
  for (const elementType of Object.values(ELEMENT_ANIMATIONS)) {
    for (const animation of Object.values(elementType)) {
      if (animation.id === animationId) {
        return animation
      }
    }
  }
  return null
}

export function generateAnimationCSS(animation, element, settings, targetPath = null) {
  if (!animation.keyframes) return null
  
  try {
    if (animation.multiElement && Array.isArray(element)) {
      // Multi-element animation
      return animation.keyframes(element, settings)
    } else {
      // Single element animation
      return animation.keyframes(element, settings, targetPath)
    }
  } catch (error) {
    console.error('Failed to generate animation CSS:', error)
    return null
  }
}

export function isAnimationCompatible(animation, element) {
  // Check if animation is compatible with element type
  if (animation.requiresTarget && !element.targetPath) {
    return false
  }
  
  // Path-specific checks
  if (element.type === 'path' && animation.id === 'path-draw') {
    return element.pathLength && element.pathLength > 0
  }
  
  // Text-specific checks  
  if (element.type === 'text' && animation.id === 'typing-effect') {
    return element.content && element.content.length > 0
  }
  
  return true
}

// Animation categories for UI grouping
export const ANIMATION_CATEGORIES = {
  entrance: {
    name: 'Entrance',
    description: 'Elementen komen in beeld',
    icon: '➡️',
    color: 'green'
  },
  emphasis: {
    name: 'Emphasis',
    description: 'Benadruk elementen',
    icon: '⭐',
    color: 'yellow'
  },
  transform: {
    name: 'Transform',
    description: 'Vorm veranderingen',
    icon: '🔄',
    color: 'blue'
  },
  exit: {
    name: 'Exit',
    description: 'Elementen verdwijnen',
    icon: '⬅️',
    color: 'red'
  }
}