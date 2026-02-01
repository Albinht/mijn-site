import React from 'react';
import Link from 'next/link';
import { getServerLocale } from '@/lib/locale';
import { getFooterCopy } from '@/i18n/footer';
import FooterVideoTestimonials from './FooterVideoTestimonials';

const Footer = async () => {
  const locale = await getServerLocale();
  const copy = getFooterCopy(locale);

  return (
    <footer className="bg-gray-50 px-6 pt-12 pb-6">
      <div className="bg-[#331300] rounded-[32px] overflow-hidden">
        <div className="w-full px-8 pt-10 pb-8">
          <FooterVideoTestimonials
            heading={copy.videoTestimonials.heading}
            playCta={copy.videoTestimonials.playCta}
            lazyNote={copy.videoTestimonials.lazyNote}
            badgeNew={copy.videoTestimonials.badgeNew}
            landscapeLabel={copy.videoTestimonials.landscapeLabel}
            portraitLabel={copy.videoTestimonials.portraitLabel}
          />
        </div>

        {/* Content */}
        <div className="w-full px-8 py-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* About Niblah Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Niblah
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {copy.about}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-white text-sm px-5 py-2.5 rounded-full bg-[#1795FF] hover:bg-[#0f7dd4] transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
              >
                {copy.ctaPrimary} <span>→</span>
              </Link>
              <a
                href="https://wa.link/zhg1bl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-white text-sm px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#22C55E] transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595"/>
                </svg>
                {copy.ctaWhatsapp}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-white">
                {copy.headings.services}
              </p>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/services/seo" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.serviceLinks.seo}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/email-marketing" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.serviceLinks.emailMarketing}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/paid-ads" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.serviceLinks.paidAds}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cro" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.serviceLinks.cro}
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-white">
                {copy.headings.tools}
              </p>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/tools/ai-marketing-audit" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.toolLinks.audit}
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/serp-simulator" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.toolLinks.serp}
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/break-even-roas-calculator" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.toolLinks.roas}
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/cpa-calculator" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.toolLinks.cpa}
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.toolsAll}
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-white">
                {copy.headings.locations}
              </p>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/marketing/amsterdam" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Amsterdam
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/rotterdam" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Rotterdam
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/utrecht" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Utrecht
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/den-haag" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Den Haag
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/eindhoven" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Eindhoven
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.locationsAll}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-white">
                {copy.headings.contact}
              </p>
            </div>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="tel:+31648728828"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +31 6 48728828
                </a>
              </li>
              <li>
                <a 
                  href="mailto:albin@niblah.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  albin@niblah.com
                </a>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {copy.contactPage}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="w-full px-8 py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              &copy; {new Date().getFullYear()} Niblah. {copy.rights}
            </div>
            <div className="flex items-center gap-6">
              <Link 
                href="/privacy-policy" 
                className="hover:text-white transition-colors"
              >
                {copy.privacy}
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-white transition-colors"
              >
                {copy.terms}
              </Link>
              <div className="flex gap-3">
                <a 
                  href="https://x.com/Niblahistaken" 
                  target="_blank" 
                  rel="noopener"
                  className="hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCvy37Ft-33KdCaYVCDHA35Q/" 
                  target="_blank" 
                  rel="noopener"
                  className="hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
