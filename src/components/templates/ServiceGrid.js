'use client'

import { typography, spacing, components, cn } from '../../styles/tokens'

export default function ServiceGrid({
  title,
  subtitle,
  services = [],
  backgroundColor = 'bg-gray-50',
}) {
  return (
    <section className={cn(backgroundColor, spacing.section.default)}>
      <div className={spacing.container.md}>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 
                className={typography.h2}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 mt-4">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={cn('grid', spacing.grid.cols3, spacing.gap.medium)}>
          {services.map((service, index) => (
            <div key={index} className={components.card.default}>
              {service.icon && (
                <div className="text-4xl mb-4">{service.icon}</div>
              )}
              <h3 className={cn(typography.h4, 'mb-4')}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2 text-gray-700 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>✓ {feature}</li>
                  ))}
                </ul>
              )}
              {service.cta && (
                <a
                  href={service.cta.href || '#contact-section'}
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                  onClick={(e) => {
                    if (!service.cta.href || service.cta.href === '#contact-section') {
                      e.preventDefault()
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {service.cta.text || 'Meer informatie'} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
