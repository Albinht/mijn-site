import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRightIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  CursorArrowRaysIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { getFooterCopy } from '@/content/footer';
import FooterVideoTestimonials from './FooterVideoTestimonials';

const socialIconClassName = 'h-5 w-5';

const WhatsAppIcon = ({ className = socialIconClassName }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595" />
  </svg>
);

const YouTubeIcon = ({ className = socialIconClassName }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const XIcon = ({ className = socialIconClassName }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconMap = {
  ads: CursorArrowRaysIcon,
  email: EnvelopeIcon,
  seo: MagnifyingGlassIcon,
  growth: ChartBarIcon,
  consult: PhoneIcon,
  strategy: CheckBadgeIcon,
  whatsapp: WhatsAppIcon,
  x: XIcon,
  youtube: YouTubeIcon,
};

const ORBIT_TRACK_ITEM_COUNT = 9;

const buildOrbitTrackItems = (items) => {
  if (!items.length) {
    return [];
  }

  return Array.from({ length: ORBIT_TRACK_ITEM_COUNT }, (_, index) => items[index % items.length]);
};

const isExternalHref = (href) =>
  href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

const SmartLink = ({ href, className, children, ariaLabel }) => {
  if (isExternalHref(href)) {
    const opensNewTab = href.startsWith('http');

    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel} prefetch={false}>
      {children}
    </Link>
  );
};

const FooterLogo = () => (
  <Link href="/" className="inline-flex items-center" prefetch={false}>
    <span className="relative inline-flex items-center">
      <span className="text-lg font-bold tracking-tight text-[#101828]">Niblah</span>
      <span className="ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1995FF] text-white">
        <CheckBadgeIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </span>
  </Link>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <p className="mb-4 text-sm font-bold text-[#101828]">{title}</p>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={`${title}-${link.href}`}>
          <SmartLink
            href={link.href}
            className="text-sm leading-relaxed text-[#101828]/62 transition-colors hover:text-[#1995FF] focus:outline-none focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
          >
            {link.label}
          </SmartLink>
        </li>
      ))}
    </ul>
  </div>
);

const OrbitIcon = ({ item, index, total }) => {
  const Icon = iconMap[item.icon] || ChartBarIcon;
  const angle = `${(index / total) * 360}deg`;

  return (
    <span
      className="footer-orbit-item"
      style={{ '--footer-orbit-angle': angle }}
    >
      <span className="footer-orbit-card inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/70 bg-[#F7F8F6] text-[#331300] shadow-[0_16px_34px_rgba(0,0,0,0.18)] md:h-14 md:w-14">
        <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
      </span>
    </span>
  );
};

const Footer = async ({ pathname } = {}) => {
  const copy = getFooterCopy();
  const orbitItems = buildOrbitTrackItems(copy.orbitItems);
  const hideFooterCta = pathname === '/seo-specialist/rotterdam';
  const hideFooterTestimonials = pathname === '/seo-specialist/rotterdam';

  return (
    <footer className="bg-gray-50 pt-12">
      {!hideFooterTestimonials && (
        <div className="mb-10 w-full px-6">
          <FooterVideoTestimonials
            theme="light"
            heading={copy.videoTestimonials.heading}
            playCta={copy.videoTestimonials.playCta}
            lazyNote={copy.videoTestimonials.lazyNote}
            badgeNew={copy.videoTestimonials.badgeNew}
          />
        </div>
      )}

      <section
        className={`relative isolate overflow-hidden bg-[#331300] px-6 pb-8 text-white ${
          hideFooterCta ? 'pt-12 md:pt-16' : 'pt-14 md:pt-20'
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_8%,rgba(25,149,255,0.2),transparent_28%),linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px] opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_72%,rgba(255,255,255,0.14),transparent_34%)]"
        />

        {!hideFooterCta && (
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
              <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
              {copy.cta.eyebrow}
            </div>
            <h2
              className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-white"
            >
              {copy.cta.heading}{' '}
              <span className="text-[#1995FF]">{copy.cta.headingAccent}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
              {copy.cta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#331300] shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
              >
                <span>{copy.cta.primaryLabel}</span>
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                prefetch={false}
                className="inline-flex items-center justify-center rounded-full border border-white/18 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#1995FF] hover:text-[#1995FF] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
              >
                {copy.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        )}

        <div className={`relative mx-auto w-full ${hideFooterCta ? 'mt-3 md:mt-8' : 'mt-24 md:mt-28'}`}>
          <div
            aria-hidden="true"
            className="footer-orbit-stage pointer-events-none absolute inset-x-0 top-0 z-10 h-32 md:h-40"
          >
            <div className="footer-orbit-plane absolute left-1/2 bottom-[-20.5rem] h-[34rem] w-[34rem] md:bottom-[-50.5rem] md:h-[88rem] md:w-[88rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full border border-white/14"
              />
              <div className="footer-orbit-ring absolute inset-0">
                {orbitItems.map((item, index) => (
                  <OrbitIcon
                    key={`${item.label}-${index}`}
                    item={item}
                    index={index}
                    total={orbitItems.length}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-20 w-full rounded-lg bg-[#F7F8F6] p-6 text-[#101828] shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_2.2fr] lg:gap-14">
            <div>
              <FooterLogo />
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#101828]/62">
                {copy.about}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {copy.socialLinks.map((link) => {
                  const Icon = iconMap[link.icon] || XIcon;

                  return (
                    <SmartLink
                      key={link.label}
                      href={link.href}
                      ariaLabel={link.ariaLabel}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#331300] text-white shadow-[0_8px_18px_rgba(51,19,0,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-[#1995FF] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </SmartLink>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {copy.columns.map((column) => (
                <FooterColumn key={column.title} title={column.title} links={column.links} />
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-[#331300]/10 pt-6">
            <div className="flex flex-col gap-5 text-sm text-[#101828]/58 md:flex-row md:items-center md:justify-between">
              <p>
                &copy; {new Date().getFullYear()} Niblah. {copy.rights}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <SmartLink
                  href="/privacy-policy"
                  className="transition-colors hover:text-[#1995FF] focus:outline-none focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
                >
                  {copy.privacy}
                </SmartLink>
                <SmartLink
                  href="/terms"
                  className="transition-colors hover:text-[#1995FF] focus:outline-none focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
                >
                  {copy.terms}
                </SmartLink>
                <a
                  href="tel:+31648728828"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#1995FF] focus:outline-none focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  +31 6 48728828
                </a>
                <a
                  href="mailto:albin@niblah.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#1995FF] focus:outline-none focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
                >
                  <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                  albin@niblah.com
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
