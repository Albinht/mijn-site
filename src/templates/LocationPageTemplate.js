'use client'

import HeroSection from '../components/templates/HeroSection'
import FeatureSection from '../components/FeatureSection'
import ReviewSlider from '../components/ReviewSlider'
import ServiceGrid from '../components/templates/ServiceGrid'
import CTASection from '../components/templates/CTASection'
import ContactSection from '../components/templates/ContactSection'
import { typography, spacing, components, cn } from '../styles/tokens'

function LocalProofSection({ title, intro, observations = [], callout }) {
  if (!title && observations.length === 0) {
    return null
  }

  return (
    <section className={spacing.section.default}>
      <div className={spacing.container.md}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-sm font-medium text-[#0059FF] mb-3">Lokale kansen</p>
            {title && <h2 className={cn(typography.h2, 'mb-5')}>{title}</h2>}
            {intro && <p className="text-lg text-gray-700 leading-relaxed">{intro}</p>}
          </div>

          <div className="space-y-4">
            {observations.map((item, index) => (
              <article key={item.title || index} className={components.card.bordered}>
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9EDFF] text-sm font-semibold text-gray-900">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className={cn(typography.h4, 'mb-2')}>{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    {item.action && (
                      <p className="mt-3 text-sm font-medium text-gray-900">{item.action}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {callout && (
          <div className="mt-8 rounded-lg border border-[#DDE7E1] bg-[#F7F8F6] p-6">
            <p className="text-gray-800 leading-relaxed">{callout}</p>
          </div>
        )}
      </div>
    </section>
  )
}

function MethodSection({ title, description, steps = [] }) {
  if (!title && steps.length === 0) {
    return null
  }

  return (
    <section className={cn('bg-[#F7F8F6]', spacing.section.default)}>
      <div className={spacing.container.md}>
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-medium text-[#0059FF] mb-3">Werkwijze</p>
          {title && <h2 className={cn(typography.h2, 'mb-4')}>{title}</h2>}
          {description && <p className="text-lg text-gray-700 leading-relaxed">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <article key={step.title || index} className="rounded-lg border border-gray-200 bg-white p-5">
              <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#331300] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold text-gray-950 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-6">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection({ title, body, points = [] }) {
  if (!title && !body && points.length === 0) {
    return null
  }

  return (
    <section className={spacing.section.default}>
      <div className={spacing.container.md}>
        <div className="rounded-lg bg-[#331300] p-8 md:p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12">
            <div>
              <p className="text-sm font-medium text-[#8CCBFF] mb-3">Waarom Niblah</p>
              {title && <h2 className={cn(typography.h2, 'mb-4 text-white')}>{title}</h2>}
              {body && <p className="text-white/80 leading-relaxed">{body}</p>}
            </div>

            {points.length > 0 && (
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li key={point.title || index} className="border-t border-white/15 pt-4 first:border-t-0 first:pt-0">
                    <h3 className="text-lg font-bold text-white">{point.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/75">{point.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection({ title = 'Veelgestelde vragen', items = [] }) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className={spacing.section.default}>
      <div className={spacing.container.sm}>
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-[#0059FF] mb-3">FAQ</p>
          <h2 className={typography.h2}>{title}</h2>
        </div>

        <div className="space-y-3">
          {items.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-gray-200 bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-950">
                <span>{faq.question}</span>
                <span className="text-xl leading-none text-gray-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function InternalLinksSection({ title = 'Verder kijken', groups = [] }) {
  const visibleGroups = groups.filter((group) => group.links?.length)

  if (visibleGroups.length === 0) {
    return null
  }

  return (
    <section className={cn('bg-[#F7F8F6]', spacing.section.compact)}>
      <div className={spacing.container.md}>
        <h2 className={cn(typography.h3, 'mb-8')}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="rounded-lg bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-950 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-600 hover:text-[#0059FF] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function LocationPageTemplate({
  location,
  seo,
  hero,
  features,
  reviews,
  services,
  localProof,
  method,
  comparison,
  faq,
  internalLinks,
  cta,
  contact,
  areaInfo,
}) {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        {/* Hero Section */}
        <HeroSection {...hero} />

        {/* Feature Section (met FeatureSection component voor visuele features) */}
        {features && (
          <FeatureSection
            title={features.title}
            subtitle={features.subtitle}
            features={features.items}
          />
        )}

        {/* Reviews Section */}
        {reviews && (
          <ReviewSlider
            customReviews={reviews.items}
            customMoreReviews={reviews.moreItems}
            title={reviews.title}
          />
        )}

        {/* Local proof voor pSEO pagina's */}
        {localProof && <LocalProofSection {...localProof} />}

        {/* Services Grid */}
        {services && (
          <ServiceGrid
            title={services.title}
            subtitle={services.subtitle}
            services={services.items}
            backgroundColor={services.backgroundColor}
          />
        )}

        {method && <MethodSection {...method} />}

        {comparison && <ComparisonSection {...comparison} />}

        {faq && <FAQSection {...faq} />}

        {internalLinks && <InternalLinksSection {...internalLinks} />}

        {/* CTA Section */}
        {cta && (
          <CTASection {...cta} />
        )}

        {/* Contact Section */}
        {(contact || areaInfo) && (
          <ContactSection
            title={contact?.title}
            description={contact?.description}
            phone={contact?.phone}
            whatsapp={contact?.whatsapp}
            areaInfo={areaInfo}
            locationName={location?.name}
          />
        )}
    </main>
  )
}
