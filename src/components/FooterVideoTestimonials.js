'use client'

import React, { useRef, useState } from 'react';

const URKPDS_VIDEO_URL =
  'https://schilderenopnummerwinkel.nl/wp-content/uploads/2026/02/urkpds.mp4';
const WHATSAPP_VIDEO_URL =
  'https://schilderenopnummerwinkel.nl/wp-content/uploads/2026/02/WhatsApp-Video-2026-01-23-at-14.35.34.mp4';

const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M8 5.14v13.72a1 1 0 001.52.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z" />
  </svg>
);

const VideoCard = ({
  videoRef,
  src,
  label,
  playCta,
  openCta,
  aspectClassName,
  objectFitClassName = 'object-cover',
  onPlayIntent,
}) => {
  const [isActivated, setIsActivated] = useState(false);

  const handleActivate = () => {
    onPlayIntent?.();

    setIsActivated(true);

    const video = videoRef?.current;
    if (!video) return;

    if (!video.src) {
      video.src = src;
      video.load();
    }

    video.play().catch(() => {
      // Playback may be blocked; controls are shown so the user can press play.
    });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className={`relative w-full ${aspectClassName} bg-black/25`}>
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full ${objectFitClassName}`}
          preload="none"
          playsInline
          controls={isActivated}
        />

        {!isActivated && (
          <button
            type="button"
            onClick={handleActivate}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-black/20 to-black/70 text-white transition-colors hover:from-black/10 hover:to-black/60"
            aria-label={playCta}
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
              <PlayIcon className="h-6 w-6 translate-x-[1px]" />
            </span>
            <span className="text-sm font-semibold">{playCta}</span>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-sm font-medium text-white">{label}</p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/70 hover:text-white transition-colors underline underline-offset-2"
        >
          {openCta}
        </a>
      </div>
    </div>
  );
};

export default function FooterVideoTestimonials({
  heading = 'Video testimonials',
  playCta = 'Play video',
  openCta = 'Open',
  lazyNote = 'Loads only on click',
  landscapeLabel = 'Testimonial (landscape)',
  portraitLabel = 'Testimonial (portrait)',
}) {
  const landscapeVideoRef = useRef(null);
  const portraitVideoRef = useRef(null);

  const pauseOther = (keep) => {
    const refs = [landscapeVideoRef, portraitVideoRef];
    for (const ref of refs) {
      if (ref === keep) continue;
      if (!ref.current) continue;
      if (ref.current.paused) continue;
      ref.current.pause();
    }
  };

  return (
    <section className="mt-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
        <p className="text-lg font-semibold text-white">{heading}</p>
        <p className="text-xs text-white/70">{lazyNote}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <VideoCard
            videoRef={landscapeVideoRef}
            src={URKPDS_VIDEO_URL}
            label={landscapeLabel}
            playCta={playCta}
            openCta={openCta}
            aspectClassName="aspect-video"
            objectFitClassName="object-cover"
            onPlayIntent={() => pauseOther(landscapeVideoRef)}
          />
        </div>

        <div className="md:col-span-1 w-full max-w-[320px] md:max-w-none mx-auto">
          <VideoCard
            videoRef={portraitVideoRef}
            src={WHATSAPP_VIDEO_URL}
            label={portraitLabel}
            playCta={playCta}
            openCta={openCta}
            aspectClassName="aspect-[9/16]"
            objectFitClassName="object-contain"
            onPlayIntent={() => pauseOther(portraitVideoRef)}
          />
        </div>
      </div>
    </section>
  );
}

