'use client'

import Image from 'next/image'
import Button from '../Button'
import { typography, spacing, cn } from '../../styles/tokens'

export default function HeroSection({
  title,
  titleHighlight,
  subtitle,
  description,
  highlights = [],
  ctaPrimary = { text: 'Gratis SEO Consult', action: 'scroll-contact' },
  ctaSecondary = { text: 'Meer informatie', href: '/work-with-me' },
  extraInfo,
  phoneNumber = '+31 6 48728828',
  heroImage,
  avatarImage,
}) {
  const handlePrimaryClick = () => {
    if (ctaPrimary.action === 'scroll-contact') {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
    } else if (ctaPrimary.href) {
      window.location.href = ctaPrimary.href
    }
  }

  const handleSecondaryClick = () => {
    if (ctaSecondary.href) {
      window.location.href = ctaSecondary.href
    }
  }

  return (
    <div className={cn(spacing.container.lg, 'grid grid-cols-1 md:grid-cols-2', spacing.gap.large, 'items-center')}>
      {/* Text Content */}
      <div>
        <h1 className={typography.h1}>
          <span className="text-[#000]">{title}</span>
          {titleHighlight && (
            <>
              {' '}&amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">{titleHighlight}</span>
            </>
          )}
        </h1>

        {subtitle && (
          <p className={cn(typography.body.large, 'mt-6')}>
            <strong>{subtitle}</strong>
            {description && (
              <>
                <br />
                {description}
              </>
            )}
          </p>
        )}

        {highlights.length > 0 && (
          <ul className="mt-6 space-y-2 text-gray-800">
            {highlights.map((highlight, index) => (
              <li key={index}>✓ {highlight}</li>
            ))}
          </ul>
        )}

        <div className={cn('mt-8 flex items-center', spacing.gap.small)}>
          <Button onClick={handlePrimaryClick}>
            {ctaPrimary.text} <span>→</span>
          </Button>
          {ctaSecondary && (
            <Button variant="secondary" onClick={handleSecondaryClick}>
              {ctaSecondary.text}
            </Button>
          )}
        </div>

        {extraInfo && (
          <p className={cn(typography.muted.default, 'mt-2')}>
            {extraInfo}
          </p>
        )}

        {phoneNumber && (
          <p className="mt-2 text-xs text-green-600">
            📞 Snel schakelen? Bel: <b>{phoneNumber}</b>
          </p>
        )}
      </div>

      {/* Image */}
      {heroImage && (
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={heroImage} 
              alt={`${title} - Resultaten`}
              className="w-full h-auto" 
              priority 
            />
          </div>
          {avatarImage && (
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image 
                src={avatarImage} 
                alt="Albin Marketing Specialist" 
                className="object-cover w-full h-full" 
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
