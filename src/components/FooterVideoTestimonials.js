'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react';

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

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon = ({ className = '' }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = ({ className = '' }) => (
  <div className={`flex items-center gap-0.5 ${className}`}>
    {Array.from({ length: 5 }).map((_, index) => (
      <StarIcon key={index} className="h-3.5 w-3.5" />
    ))}
  </div>
);

const ReviewCard = ({ testimonial, playCta, onPlay }) => (
  <article className="grid min-w-[min(86vw,52rem)] snap-center overflow-hidden rounded-lg border border-[#331300]/12 bg-white shadow-[0_14px_42px_rgba(51,19,0,0.07)] md:min-w-[min(72vw,56rem)] lg:grid-cols-[0.9fr_1.1fr]">
    <button
      type="button"
      onClick={() => onPlay(testimonial.id)}
      className="group relative min-h-[16rem] overflow-hidden bg-[#331300]/5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1995FF] focus-visible:ring-offset-2 md:min-h-[20rem]"
      aria-label={`${playCta}: ${testimonial.title}`}
    >
      <img
        src={testimonial.poster}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${testimonial.imageClassName}`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(51,19,0,0.72),transparent_48%),radial-gradient(circle_at_18%_12%,rgba(25,149,255,0.24),transparent_28%)]"
      />
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#331300] shadow-[0_10px_26px_rgba(0,0,0,0.14)]">
          <PlayIcon className="h-3.5 w-3.5" />
          {playCta}
        </span>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/92 text-[#331300] shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-transform duration-200 group-hover:scale-105">
          <ArrowIcon className="-rotate-45 h-4 w-4" />
        </span>
      </div>
    </button>

    <div className="flex min-w-0 flex-col justify-between p-5 md:p-6 lg:p-8">
      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold leading-snug text-[#1995FF]">
              {testimonial.title}
            </p>
            <p className="mt-1 text-sm text-[#101828]/56">{testimonial.context}</p>
          </div>
          <Stars className="text-yellow-400" />
        </div>

        <blockquote
          className="max-w-3xl text-base font-medium leading-relaxed text-[#101828] md:text-lg"
        >
          “{testimonial.quote}”
        </blockquote>
      </div>

      <div className="mt-6 grid gap-4 border-t border-[#331300]/10 pt-5 sm:grid-cols-2">
        {testimonial.metrics.map((metric) => (
          <div key={`${testimonial.id}-${metric.value}`}>
            <p className="text-xl font-semibold leading-tight text-[#1995FF] md:text-2xl">
              {metric.value}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#101828]/58">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  </article>
);

export default function FooterVideoTestimonials({
  theme = 'dark',
  heading = 'Video reviews',
  playCta = 'Bekijk review',
  lazyNote = 'Echte klantreviews over hoe Niblah samenwerkt.',
  badgeNew = 'Klantreviews',
}) {
  const isLight = theme === 'light';
  const trackRef = useRef(null);

  const testimonials = useMemo(
    () => [
      {
        id: 'urpkds',
        src: URPKDS_VIDEO_URL,
        poster: URPKDS_POSTER_URL,
        orientation: 'landscape',
        title: 'Klantreview 01',
        context: 'Online marketing, SEO en uitvoering',
        quote:
          'Heldere communicatie, snel schakelen en iemand die echt meedenkt over wat er nodig is om online beter te groeien.',
        metrics: [
          { value: 'Direct', label: 'contact met de specialist' },
          { value: 'Concreet', label: 'advies dat wordt uitgevoerd' },
        ],
        imageClassName: 'object-center',
      },
      {
        id: 'whatsapp',
        src: WHATSAPP_VIDEO_URL,
        poster: WHATSAPP_POSTER_URL,
        orientation: 'portrait',
        title: 'Klantreview 02',
        context: 'Persoonlijke aanpak en duidelijke stappen',
        quote:
          'Geen lange lijnen of losse beloftes, maar persoonlijk contact en duidelijke keuzes waar je direct mee verder kunt.',
        metrics: [
          { value: '1-op-1', label: 'meedenken over je bedrijf' },
          { value: 'Rust', label: 'in strategie, planning en opvolging' },
        ],
        imageClassName: 'object-center',
      },
    ],
    []
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

  const scrollReviews = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.86, 920),
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section
        className={`relative isolate mx-auto overflow-hidden rounded-lg px-4 py-10 md:px-8 md:py-12 ${
          isLight ? 'bg-[#F7F8F6] text-[#101828]' : 'bg-[#331300] text-white'
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(51,19,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,19,0,0.055)_1px,transparent_1px)] bg-[size:34px_34px] opacity-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(25,149,255,0.13),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.84),rgba(255,255,255,0.96))]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center md:mb-8">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
              <span className="h-2 w-2 rounded-full bg-[#1995FF] shadow-[0_0_14px_rgba(25,149,255,0.28)]" />
              {badgeNew}
            </div>
            <h2
              className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-[#101828]"
            >
              {heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#101828]/62 md:text-lg">
              {lazyNote}
            </p>
          </div>

          <div
            ref={trackRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:-mx-8 md:gap-5 md:px-8"
          >
            {testimonials.map((testimonial) => (
              <ReviewCard
                key={testimonial.id}
                testimonial={testimonial}
                playCta={playCta}
                onPlay={setActiveId}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollReviews(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#331300]/12 bg-white text-[#331300] shadow-[0_10px_28px_rgba(51,19,0,0.08)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1995FF] focus-visible:ring-offset-2"
              aria-label="Vorige review"
            >
              <ArrowIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollReviews(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#331300]/12 bg-white text-[#331300] shadow-[0_10px_28px_rgba(51,19,0,0.08)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1995FF] focus-visible:ring-offset-2"
              aria-label="Volgende review"
            >
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative w-full overflow-hidden rounded-lg bg-black shadow-2xl ring-1 ring-white/10 ${
              active.orientation === 'portrait' ? 'max-w-md' : 'max-w-5xl'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/15 transition-colors hover:bg-black/75"
              aria-label="Sluiten"
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
                className="absolute inset-0 h-full w-full bg-black object-contain"
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
