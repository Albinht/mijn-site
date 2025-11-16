// Design Tokens - Centralized styling system

export const colors = {
  brand: {
    primary: '#F7D8FA',      // Purple highlight (gebruikt voor belangrijke tekst accenten)
    secondary: '#D9EDFF',    // Blue badge (gebruikt voor badges en subtiele achtergronden)
    accent: '#0059FF',       // Blue accent
    purple: {
      50: '#FAF5FF',
      100: '#F3E8FF',
      500: '#A855F7',
      600: '#9333EA',
    },
    blue: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      500: '#3B82F6',
      600: '#2563EB',
      800: '#1E40AF',
    }
  },
  text: {
    heading: '#000000',      // Pure black voor hoofdtitels
    body: '#374151',         // Gray-700 voor body text
    bodyLight: '#4B5563',    // Gray-600 voor lichtere body text
    muted: '#6B7280',        // Gray-500 voor muted tekst
    subtle: '#9CA3AF',       // Gray-400 voor subtiele tekst
  },
  background: {
    white: '#FFFFFF',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
    }
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  }
}

export const spacing = {
  section: {
    default: 'py-16 px-6',
    hero: 'py-2 md:py-6 px-6',
    compact: 'py-12 px-6',
    large: 'py-20 px-6',
  },
  container: {
    sm: 'max-w-4xl mx-auto',
    md: 'max-w-6xl mx-auto',
    lg: 'max-w-7xl mx-auto',
  },
  gap: {
    xs: 'gap-2',
    small: 'gap-4',
    medium: 'gap-8',
    large: 'gap-12',
    xl: 'gap-16',
  },
  grid: {
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-1 md:grid-cols-2',
    cols3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }
}

export const typography = {
  h1: 'text-4xl md:text-5xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl font-bold',
  h3: 'text-2xl md:text-3xl font-bold',
  h4: 'text-xl md:text-2xl font-bold',
  body: {
    large: 'text-lg text-gray-700',
    default: 'text-base text-gray-700',
    small: 'text-sm text-gray-600',
  },
  label: {
    default: 'text-sm font-medium text-gray-700',
    small: 'text-xs font-medium text-gray-600',
  },
  muted: {
    default: 'text-sm text-gray-500',
    small: 'text-xs text-gray-500',
  }
}

export const components = {
  card: {
    default: 'bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow',
    compact: 'bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow',
    bordered: 'bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors',
  },
  badge: {
    default: 'inline-block px-4 py-2 rounded-[5px] text-sm font-medium',
    small: 'inline-block px-3 py-1 rounded-[5px] text-sm font-medium',
    primary: 'bg-[#F7D8FA] text-gray-800',
    secondary: 'bg-[#D9EDFF] text-gray-800',
    blue: 'bg-blue-100 text-blue-800',
    purple: 'bg-purple-100 text-purple-800',
  },
  button: {
    shadow: 'inset 0 -3px 0 0 #C7C8C8',
    padding: 'px-4 pt-[6px] pb-[10px]',
  }
}

export const effects = {
  shadow: {
    sm: 'shadow-sm',
    default: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },
  transition: {
    default: 'transition-all duration-200',
    slow: 'transition-all duration-300',
    colors: 'transition-colors duration-200',
    shadow: 'transition-shadow duration-200',
  },
  gradient: {
    aura: 'linear-gradient(90deg, rgba(0, 89, 255, 0.5) 0%, rgba(0, 255, 233, 0.5) 30%, rgba(174, 0, 255, 0.5) 63%, rgba(255, 0, 153, 0.5) 100%)',
  }
}

// Helper functies voor consistent gebruik
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

// Utility om classes te combineren met tokens
export const withToken = (tokenPath, additionalClasses = '') => {
  return cn(tokenPath, additionalClasses)
}
