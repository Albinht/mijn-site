'use client'

import React, { useEffect, useMemo, useState } from 'react';

const URPKDS_VIDEO_URL =
  'https://schilderenopnummerwinkel.nl/wp-content/uploads/2026/02/urpkds.mp4';
const WHATSAPP_VIDEO_URL =
  'https://schilderenopnummerwinkel.nl/wp-content/uploads/2026/02/WhatsApp-Video-2026-01-23-at-14.35.34.mp4';

const URPKDS_POSTER_URL = '/video-reviews/urpkds.jpg';
const WHATSAPP_POSTER_URL = '/video-reviews/whatsapp.jpg';

const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M8 5.14v13.72a1 1 0 001.52.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z" />
  </svg>
);

const StarIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = () => (
  <div className="flex items-center gap-0.5 text-yellow-300">
    {Array.from({ length: 5 }).map((_, index) => (
      <StarIcon key={index} className="h-4 w-4" />
    ))}
  </div>
);

const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function FooterVideoTestimonials({
  theme = 'dark',
  heading = 'Video reviews',
  playCta = 'Watch review',
  lazyNote = 'Recommended — real customer reviews.',
  badgeNew = 'New',
}) {
  const isLight = theme === 'light';
  const headingClassName = isLight ? 'text-gray-900' : 'text-white';
  const noteClassName = isLight ? 'text-gray-600' : 'text-white/70';
  const cardClassName = isLight
    ? 'border-black/10 focus:ring-black/15 shadow-[0_18px_50px_rgba(0,0,0,0.12)]'
    : 'border-white/10 focus:ring-white/25';

  const testimonials = useMemo(
    () => [
      {
        id: 'urpkds',
        src: URPKDS_VIDEO_URL,
        poster: URPKDS_POSTER_URL,
        badge: badgeNew,
        orientation: 'landscape',
        gridClassName: 'lg:col-span-2',
        mediaClassName: 'aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[420px]',
      },
      {
        id: 'whatsapp',
        src: WHATSAPP_VIDEO_URL,
        poster: WHATSAPP_POSTER_URL,
        orientation: 'portrait',
        gridClassName: 'lg:col-span-1',
        mediaClassName: 'aspect-[4/5] sm:aspect-[10/14] lg:aspect-auto lg:h-[420px]',
      },
    ],
    [badgeNew]
  );

  const [activeId, setActiveId] = useState(null);
  const active = testimonials.find((t) => t.id === activeId) || null;

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveId(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-6">
          <div>
            <p className={`text-2xl md:text-3xl font-bold ${headingClassName}`}>{heading}</p>
            <p className={`text-sm mt-1 ${noteClassName}`}>{lazyNote}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveId(t.id)}
              className={`group relative overflow-hidden rounded-3xl border bg-black/20 text-left focus:outline-none focus:ring-2 ${cardClassName} ${t.gridClassName}`}
              aria-label={playCta}
            >
              <div className={`relative w-full ${t.mediaClassName}`}>
                <img
                  src={t.poster}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {t.badge && (
                        <span className="inline-flex items-center rounded-full bg-[#1795FF] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                          {t.badge}
                        </span>
                      )}
                      <div className="hidden sm:flex items-center gap-2">
                        <Stars />
                      </div>
                    </div>

                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm text-white transition-all group-hover:bg-white/15 group-hover:scale-[1.02]">
                      <PlayIcon className="h-6 w-6 translate-x-[1px]" />
                    </span>
                  </div>

                  <div>
                    <p className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                      {playCta}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10 ${
              active.orientation === 'portrait' ? 'max-w-md' : 'max-w-5xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/15 hover:bg-black/75 transition-colors"
              aria-label="Close"
            >
              <CloseIcon className="h-6 w-6" />
            </button>

            <div
              className={`relative w-full ${
                active.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'
              }`}
            >
              <video
                key={active.src}
                src={active.src}
                className="absolute inset-0 h-full w-full object-contain bg-black"
                autoPlay
                playsInline
                controls
                preload="auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
