'use client'

import Button from '../Button'
import { typography, spacing, cn } from '../../styles/tokens'

export default function CTASection({
  title,
  description,
  primaryCTA = { text: 'Start vandaag', action: 'scroll-contact' },
  secondaryCTA,
  backgroundColor = 'bg-purple-50',
  highlights = [],
}) {
  const handlePrimaryClick = () => {
    if (primaryCTA.action === 'scroll-contact') {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
    } else if (primaryCTA.href) {
      window.location.href = primaryCTA.href
    }
  }

  const handleSecondaryClick = () => {
    if (secondaryCTA?.href) {
      window.location.href = secondaryCTA.href
    }
  }

  return (
    <section className={cn(backgroundColor, spacing.section.default)}>
      <div className={spacing.container.md}>
        <div className="text-center max-w-3xl mx-auto">
          {title && (
            <h2 
              className={cn(typography.h2, 'mb-6')}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {description && (
            <p className={cn(typography.body.large, 'mb-8')}>
              {description}
            </p>
          )}

          {highlights.length > 0 && (
            <ul className="text-left max-w-xl mx-auto mb-8 space-y-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div className={cn('flex justify-center items-center', spacing.gap.small, 'flex-wrap')}>
            <Button onClick={handlePrimaryClick}>
              {primaryCTA.text} <span>→</span>
            </Button>
            {secondaryCTA && (
              <Button variant="secondary" onClick={handleSecondaryClick}>
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
