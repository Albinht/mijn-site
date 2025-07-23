"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import avatar from '../assets/avatar.png' // Vervang dit met jouw eigen afbeelding
import Button from './Button'; // Importeer de nieuwe Button component

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isBlueprintsOpen, setIsBlueprintsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const servicesTimeoutRef = useRef(null);
  const blueprintsTimeoutRef = useRef(null);
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        
        {/* Links: Avatar + Naam + Subtitle */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={avatar}
              alt="Albin Hot"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900 text-base">
              Albin Hot
            </p>
            <p className="text-sm text-gray-500 -mt-0.5 italic">
              Learn to Rank #1 in Google
            </p>
          </div>
        </div>

        {/* Rechts: Desktop Navigatie */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
          {/* Blueprints Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              clearTimeout(blueprintsTimeoutRef.current);
              setIsBlueprintsOpen(true);
            }}
            onMouseLeave={() => {
              blueprintsTimeoutRef.current = setTimeout(() => {
                setIsBlueprintsOpen(false);
              }, 200); // 200ms delay
            }}
          >
            <button className="flex items-center space-x-1">
              <span>Blueprints</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isBlueprintsOpen && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link href="/blueprints/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SEO Blueprint</Link>
              </div>
            )}
          </div>
          <Link href="/youtube">YouTube</Link>
          <Link href="#">Contact</Link>
          <Button as={Link} href="/work-with-me">
            Work with me <span>→</span>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <div className="flex flex-col space-y-4 text-sm font-medium text-gray-800">
            {/* Mobile Blueprints */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsBlueprintsOpen(!isBlueprintsOpen)}
              >
                <span>Blueprints</span>
                <svg className={`w-4 h-4 transition-transform ${isBlueprintsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isBlueprintsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/blueprints/seo" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>SEO Blueprint</Link>
                </div>
              )}
            </div>
            
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>YouTube</Link>
            
            
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <div className="pt-2">
              <Button as={Link} href="/work-with-me" onClick={() => setIsMobileMenuOpen(false)}>
                Work with me <span>→</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
