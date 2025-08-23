import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footerImage from '../assets/footer.png';
import avatarImage from '../assets/avatar.png';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={footerImage}
          alt="Footer background"
          fill
          className="object-cover object-bottom"
        />
      </div>
      
      {/* White overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-6 py-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* About Me Section (replaces Newsletter) */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src={avatarImage}
                  alt="Albin - SEO Expert"
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-[32px] font-semibold leading-[130%]" style={{ color: 'rgb(0, 0, 0)' }}>
                  About Me
                </h3>
              </div>
            </div>
            <p className="text-[18px] leading-[140%] mb-6" style={{ color: 'rgb(0, 0, 0)' }}>
              I am a 23 year old entrepreneur with multiple successful online ecommerce stores built through SEO. I am now helping others achieve the same success.
              <br /><br />
              Questions? Call me on +31 6 487 288 28
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button as={Link} href="/work-with-me">
                Work with me
              </Button>
              <Button 
                as="a"
                href="https://wa.link/zhg1bl"
                target="_blank"
                rel="noopener noreferrer"
                className="[&>div:first-child]:bg-green-500/50 [&>*:last-child]:!bg-[#25D366] [&>*:last-child]:hover:!bg-[#22C55E]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595"/>
                </svg>
                WhatsApp Me
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="mb-4">
              <p className="text-[22px] font-medium leading-[130%] capitalize" style={{ color: '#8c2891' }}>
                Services
              </p>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/seo" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/email-marketing" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/paid-ads" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Paid Ads
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cro" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  CRO
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <div className="mb-4">
              <p className="text-[22px] font-medium leading-[130%] capitalize" style={{ color: '#8c2891' }}>
                Tools
              </p>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/tools/ai-marketing-audit" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  AI Marketing Audit
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/logo-animator" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Logo Animator
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/pdf-editor" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  PDF Editor
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/invoice-generator" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Invoice Generator
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/break-even-roas-calculator" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  ROAS Calculator
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/cpa-calculator" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  CPA Calculator
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/tekens-tellen" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Tekens Tellen Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="mb-4">
              <p className="text-[22px] font-medium leading-[130%] capitalize" style={{ color: '#8c2891' }}>
                Locations
              </p>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/marketing/aalst" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Aalst
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/aalten" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Aalten
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/achterhoek" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Achterhoek
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/amersfoort" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Amersfoort
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/apeldoorn" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Apeldoorn
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/arnhem" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Arnhem
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/barneveld" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Barneveld
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/beek" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Beek
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/ede" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Ede
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/gulpen-wittem" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Gulpen-Wittem
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/harlingen" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Harlingen
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/hilvarenbeek" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Hilvarenbeek
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/westervoort" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Westervoort
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/acquoy" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Acquoy
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/alem" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Alem
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/almen" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Almen
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/alphen" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Alphen
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/andelst" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Andelst
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/asperen" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Asperen
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/azewijn" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Azewijn
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/oostzaan" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Oostzaan
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/ouder-amstel" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Ouder-Amstel
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/oudewater" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Oudewater
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/renswoude" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Renswoude
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/lopik" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Lopik
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/woudenberg" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Woudenberg
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/montfoort" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Montfoort
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/laren" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Laren
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/uitgeest" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Uitgeest
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/vaals" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Vaals
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/zoeterwoude" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Zoeterwoude
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/blaricum" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Blaricum
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/landsmeer" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Landsmeer
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/scherpenzeel" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Scherpenzeel
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/eemnes" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  Eemnes
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <div className="mb-4">
              <p className="text-[22px] font-medium leading-[130%] capitalize" style={{ color: 'rgba(140, 40, 145, 0.4)' }}>
                Always connected
              </p>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://x.com/Niblahistaken" 
                target="_blank" 
                rel="noopener"
                className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="rgb(140, 40, 145)"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/channel/UCvy37Ft-33KdCaYVCDHA35Q/" 
                target="_blank" 
                rel="noopener"
                className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="rgb(140, 40, 145)"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
