'use client';

import { useState } from 'react';

const reviews = [
  {
    name: 'Marcel - Napoleon Bestek',
    badge: 'Beste keuze',
    rating: 5,
    metric: '180%',
    metricLabel: 'meer omzet',
    description: 'Binnen 3 maanden #1 positie',
    fullReview: 'Niblah heeft onze online verkoop volledig getransformeerd. Binnen 3 maanden stonden we op positie #1 voor onze belangrijkste zoekwoorden.',
  },
  {
    name: 'Marlon - Werkschoenwereld',
    badge: null,
    rating: 5,
    metric: '250+',
    metricLabel: 'nieuwe klanten/maand',
    description: 'SEO strategie die echt werkt',
    fullReview: 'Dankzij de SEO-strategie van Niblah krijgen we nu structureel meer bezoekers. Onze omzet is met 180% gestegen.',
  },
  {
    name: 'Gerlinde - Onlineberegening',
    badge: null,
    rating: 5,
    metric: '4.2x',
    metricLabel: 'ROI op advertenties',
    description: 'Google Ads optimalisatie',
    fullReview: 'Professionele aanpak en vooral resultaat! Onze Google Ads campagnes draaien nu perfect en leveren elke dag nieuwe klanten op.',
  },
  {
    name: 'Patrick - TechStore',
    badge: null,
    rating: 4.5,
    metric: '65%',
    metricLabel: 'snellere laadtijd',
    description: 'Website optimalisatie',
    fullReview: 'De website optimalisatie heeft wonderen gedaan. Snellere laadtijd, betere conversie en veel meer organisch verkeer.',
  },
];

export default function ReviewPricing() {
  const [selectedReview, setSelectedReview] = useState(0);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wat onze klanten bereikten
          </h2>
          <p className="text-lg text-gray-600">
            Echte resultaten van bedrijven die met Niblah werken
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#1795FF] transition-all cursor-pointer relative"
              onClick={() => setSelectedReview(index)}
            >
              {/* Badge */}
              {review.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-semibold border-2 border-blue-200">
                    {review.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-600">{review.description}</p>
              </div>

              {/* Metric */}
              <div className="text-center mb-6 py-6 bg-gray-50 rounded-xl">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {review.metric}
                </div>
                <div className="text-sm text-gray-600">{review.metricLabel}</div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(review.rating)
                        ? 'text-yellow-400'
                        : review.rating > i
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-[#FFD43B] hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-full transition-colors">
                Lees review
              </button>

              {/* Full review text */}
              <p className="text-sm text-gray-600 mt-4 text-center">
                {review.fullReview}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Klaar om deze resultaten ook te bereiken?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1795FF] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
          >
            Start vandaag nog
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
