'use client'

import React, { useEffect, useMemo, useState } from 'react';

const URKPDS_VIDEO_URL =
  'https://schilderenopnummerwinkel.nl/wp-content/uploads/2026/02/urkpds.mp4';
const WHATSAPP_VIDEO_URL =
  'https://schilderenopnummerwinkel.nl/wp-content/uploads/2026/02/WhatsApp-Video-2026-01-23-at-14.35.34.mp4';

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
  heading = 'Video reviews',
  playCta = 'Watch review',
  lazyNote = 'Recommended — real customer reviews.',
  badgeNew = 'New',
  landscapeLabel = 'Customer review (landscape)',
  portraitLabel = 'Customer review (portrait)',
}) {
  const testimonials = useMemo(
    () => [
      {
        id: 'urkpds',
        src: URKPDS_VIDEO_URL,
        title: landscapeLabel,
        badge: badgeNew,
        orientation: 'landscape',
        cardClassName:
          'bg-[radial-gradient(circle_at_top,rgba(23,149,255,0.35),rgba(0,0,0,0)_55%),linear-gradient(135deg,rgba(140,40,145,0.30),rgba(0,0,0,0)_60%)]',
        gridClassName: 'lg:col-span-2',
        mediaClassName: 'aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[420px]',
      },
      {
        id: 'whatsapp',
        src: WHATSAPP_VIDEO_URL,
        title: portraitLabel,
        orientation: 'portrait',
        cardClassName:
          'bg-[radial-gradient(circle_at_top,rgba(37,211,102,0.25),rgba(0,0,0,0)_55%),linear-gradient(135deg,rgba(23,149,255,0.25),rgba(0,0,0,0)_60%)]',
        gridClassName: 'lg:col-span-1',
        mediaClassName: 'aspect-[4/5] sm:aspect-[10/14] lg:aspect-auto lg:h-[420px]',
      },
    ],
    [badgeNew, landscapeLabel, portraitLabel]
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
      <section>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-6">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">{heading}</p>
            <p className="text-sm text-white/70 mt-1">{lazyNote}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveId(t.id)}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 text-left focus:outline-none focus:ring-2 focus:ring-white/25 ${t.gridClassName}`}
              aria-label={`${playCta}: ${t.title}`}
            >
              <div className={`relative w-full ${t.mediaClassName}`}>
                <div className={`absolute inset-0 ${t.cardClassName}`} aria-hidden="true" />
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
                        <span className="text-xs text-white/70">5.0</span>
                      </div>
                    </div>

                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm text-white transition-all group-hover:bg-white/15 group-hover:scale-[1.02]">
                      <PlayIcon className="h-6 w-6 translate-x-[1px]" />
                    </span>
                  </div>

                  <div>
                    <p className="text-2xl md:text-3xl font-semibold text-white leading-tight max-w-[28ch]">
                      {t.title}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
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
