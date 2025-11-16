'use client'

import { typography, spacing, components, cn } from '../../styles/tokens'

export default function ContactSection({
  title,
  description,
  phone = '+31 6 48728828',
  whatsapp = 'https://wa.me/31648728828',
  areaInfo,
  locationName,
}) {
  return (
    <section id="contact-section" className={spacing.section.default}>
      <div className={cn(spacing.container.sm, 'text-center')}>
        {title && (
          <h2 
            className={cn(typography.h2, 'mb-4')}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {description && (
          <p className="text-xl text-gray-600 mb-8">
            {description}
          </p>
        )}

        <div className={cn('grid grid-cols-1 md:grid-cols-2', spacing.gap.medium, 'mb-8')}>
          <div className={components.card.default}>
            <h3 className={cn(typography.h4, 'mb-4')}>Direct Bellen</h3>
            <p className="text-gray-600 mb-4">
              Klaar om te starten? Bel mij {locationName ? `als ${locationName} SEO specialist ` : ''}voor een gratis gesprek.
            </p>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              📞 {phone}
            </a>
          </div>

          <div className={components.card.default}>
            <h3 className={cn(typography.h4, 'mb-4')}>WhatsApp Direct</h3>
            <p className="text-gray-600 mb-4">
              Liever WhatsApp? Stuur direct een bericht – snel reactie.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {areaInfo && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Actief in heel {locationName || 'de regio'}
            </h3>
            {areaInfo.districts && areaInfo.districts.length > 0 && (
              <p className="text-gray-600 mb-2">
                <strong>{locationName} wijken:</strong> {areaInfo.districts.join(' • ')}
              </p>
            )}
            {areaInfo.villages && areaInfo.villages.length > 0 && (
              <p className="text-gray-600 mb-2">
                <strong>Kernen:</strong> {areaInfo.villages.join(' • ')}
              </p>
            )}
            {areaInfo.region && areaInfo.region.length > 0 && (
              <p className="text-gray-600">
                <strong>Regio:</strong> {areaInfo.region.join(' • ')}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
