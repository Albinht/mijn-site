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
                <h3 className="text-[32px] font-semibold leading-[130%]" style={{ color: 'rgb(140, 40, 145)' }}>
                  About Me
                </h3>
              </div>
            </div>
            <p className="text-[18px] leading-[140%] mb-6" style={{ color: 'rgb(140, 40, 145)' }}>
              I am a 23 year old entrepreneur with multiple successful online ecommerce stores built through SEO. I am now helping others achieve the same success.
            </p>
            <Button as={Link} href="/work-with-me">
              Work with me
            </Button>
          </div>

          {/* Services */}
          <div>
            <div className="mb-4">
              <p className="text-[22px] font-medium leading-[130%] capitalize" style={{ color: 'rgba(140, 40, 145, 0.4)' }}>
                Services
              </p>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/seo" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/email-marketing" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/paid-ads" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Paid Ads
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cro" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  CRO
                </Link>
              </li>
            </ul>
          </div>

          {/* Blueprints */}
          <div>
            <div className="mb-4">
              <p className="text-[22px] font-medium leading-[130%] capitalize" style={{ color: 'rgba(140, 40, 145, 0.4)' }}>
                Blueprints
              </p>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/blueprints/seo" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  SEO Blueprint
                </Link>
              </li>
              <li>
                <Link 
                  href="/blueprints/google-ads" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Google Ads Blueprint
                </Link>
              </li>
              <li>
                <Link 
                  href="/blueprints/klaviyo" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Klaviyo Blueprint
                </Link>
              </li>
              <li>
                <Link 
                  href="/blueprints/meta" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Meta Blueprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="mb-4">
              <p className="text-[22px] font-medium leading-[130%] capitalize" style={{ color: 'rgba(140, 40, 145, 0.4)' }}>
                Locations
              </p>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/marketing-bureau-barneveld" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Barneveld
                </Link>
              </li>
              <li>
                <Link 
                  href="/ede" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Ede
                </Link>
              </li>
              <li>
                <Link 
                  href="/amersfoort" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Amersfoort
                </Link>
              </li>
              <li>
                <Link 
                  href="/leusden" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Leusden
                </Link>
              </li>
              <li>
                <Link 
                  href="/nijkerk" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Nijkerk
                </Link>
              </li>
              <li>
                <Link 
                  href="/bennekom" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Bennekom
                </Link>
              </li>
              <li>
                <Link 
                  href="/lunteren" 
                  className="text-[18px] leading-[130%] capitalize hover:opacity-80 transition-opacity"
                  style={{ color: 'rgb(140, 40, 145)' }}
                >
                  Lunteren
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
