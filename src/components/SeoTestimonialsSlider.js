'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

function clampIndex(index, max) {
  return Math.max(0, Math.min(index, max));
}

export default function SeoTestimonialsSlider({ testimonials }) {
  const railRef = useRef(null);
  const slideRefs = useRef([]);
  const rafRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveFromScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const railCenter = rail.scrollLeft + rail.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - railCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToSlide = useCallback(
    (nextIndex) => {
      const rail = railRef.current;
      const slide = slideRefs.current[nextIndex];
      if (!rail || !slide) return;

      const left = slide.offsetLeft - (rail.clientWidth - slide.offsetWidth) / 2;
      rail.scrollTo({
        left: Math.max(0, Math.min(left, rail.scrollWidth - rail.clientWidth)),
        behavior: 'smooth',
      });
      setActiveIndex(nextIndex);
    },
    []
  );

  const goToPrevious = () => {
    scrollToSlide(clampIndex(activeIndex - 1, testimonials.length - 1));
  };

  const goToNext = () => {
    scrollToSlide(clampIndex(activeIndex + 1, testimonials.length - 1));
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updateActiveFromScroll();
      });
    };

    rail.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveFromScroll();

    return () => {
      rail.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateActiveFromScroll]);

  return (
    <section className="relative isolate overflow-hidden bg-[#331300] px-6 py-16 text-white md:py-20">
      <style>
        {`
          .seo-testimonial-rail {
            scroll-snap-type: x mandatory;
            overscroll-behavior-inline: contain;
            scrollbar-width: none;
          }

          .seo-testimonial-rail::-webkit-scrollbar {
            display: none;
          }

          .seo-testimonial-card {
            scroll-snap-align: center;
            contain: layout paint;
          }

          .seo-testimonial-card::before,
          .seo-testimonial-card::after {
            content: "";
            position: absolute;
            pointer-events: none;
            background: var(--testimonial-accent);
            opacity: 0.28;
          }

          .seo-testimonial-card::before {
            inline-size: 10.5rem;
            block-size: 2.6rem;
            inset-block-start: 0;
            inset-inline-start: 0;
          }

          .seo-testimonial-card::after {
            inline-size: 10.5rem;
            block-size: 2.6rem;
            inset-block-end: 0;
            inset-inline-end: 0;
          }

          @media (max-width: 767px) {
            .seo-testimonial-card::before,
            .seo-testimonial-card::after {
              inline-size: 6.5rem;
              block-size: 2rem;
            }
          }
        `}
      </style>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6rem] top-[-8rem] -z-10 h-80 w-80 rounded-full bg-[#1995FF]/14 blur-3xl"
      />

      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
              <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
              Ervaringen
            </div>
            <h2
              className="font-medium tracking-[-0.005em] text-white"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(1.55rem, 2.55vw, 2.35rem)',
                lineHeight: '1.1',
              }}
            >
              Wat ondernemers merken zodra SEO een systeem wordt
            </h2>
            <p className="mt-4 max-w-[42rem] text-[0.95rem] leading-relaxed text-white/66">
              Geanonimiseerde klantcases uit trajecten waarin techniek, content,
              lokale vindbaarheid en conversie samen zijn opgepakt.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              className="grid h-12 w-12 place-items-center rounded-[0.35rem] bg-white/10 text-xl text-white/72 transition hover:bg-white hover:text-[#331300] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white/10 disabled:hover:text-white/72"
              aria-label="Vorige testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goToNext}
              disabled={activeIndex === testimonials.length - 1}
              className="grid h-12 w-12 place-items-center rounded-[0.35rem] bg-white/10 text-xl text-white transition hover:bg-white hover:text-[#331300] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white/10 disabled:hover:text-white"
              aria-label="Volgende testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-10 overflow-hidden md:mt-12">
          <div
            ref={railRef}
            className="seo-testimonial-rail flex gap-5 overflow-x-auto px-6 pb-2"
            aria-label="Geanonimiseerde SEO klantcases"
          >
            {testimonials.map((item, index) => (
              <article
                key={item.attribution}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                className="seo-testimonial-card relative grid min-h-[28rem] w-[86vw] max-w-[58rem] flex-none overflow-hidden md:w-[78vw] md:grid-cols-[0.42fr_0.58fr] lg:w-[64rem]"
                style={{
                  backgroundColor: item.background,
                  '--testimonial-accent': item.accent,
                }}
                aria-roledescription="slide"
                aria-label={`${index + 1} van ${testimonials.length}`}
              >
                <div className="relative min-h-[17rem] overflow-hidden md:min-h-0">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 86vw, 420px"
                    className="object-cover"
                    style={{ objectPosition: item.imagePosition }}
                    loading="lazy"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(16,32,29,0.12)] to-transparent"
                  />
                </div>

                <div className="relative z-10 flex min-h-[23rem] flex-col justify-between p-6 text-[#10201D] md:p-8 lg:p-10">
                  <blockquote
                    className="max-w-[37rem] font-medium tracking-[-0.01em]"
                    style={{
                      fontFamily: 'var(--font-poppins), sans-serif',
                      fontSize: 'clamp(1.35rem, 2.45vw, 2.45rem)',
                      lineHeight: '1.14',
                      textWrap: 'balance',
                    }}
                  >
                    “{item.quote}”
                  </blockquote>

                  <div className="mt-10 flex flex-col gap-3 border-t border-[#10201D]/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[0.95rem] font-semibold text-[#10201D]">
                        Geanonimiseerde klantcase
                      </p>
                      <p className="mt-1 text-[0.9rem] leading-relaxed text-[#10201D]/62">
                        {item.attribution}
                      </p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/55 px-3 py-1.5 text-xs font-semibold text-[#10201D]/72">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.accent }} />
                      SEO traject
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
