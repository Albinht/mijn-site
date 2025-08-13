"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import avatar from '../assets/avatar.png' // Vervang dit met jouw eigen afbeelding
import Button from './Button'; // Importeer de nieuwe Button component

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isBlueprintsOpen, setIsBlueprintsOpen] = useState(false)
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const servicesTimeoutRef = useRef(null);
  const blueprintsTimeoutRef = useRef(null);
  const toolsTimeoutRef = useRef(null);
  const locationsTimeoutRef = useRef(null);
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
            <p className="font-semibold text-gray-900 text-base flex items-center gap-1">
              Albin Hot
              <img 
                src="https://schilderenopnummerwinkel.nl/wp-content/uploads/2025/07/Twitter_Verified_Badge.svg.png" 
                alt="Verified" 
                className="w-4 h-4" 
              />
            </p>
            <p className="text-sm text-gray-500 -mt-0.5 italic">
              Learn to Rank #1 in Google
            </p>
            <p className="text-xs text-gray-500">@niblahistaken</p>
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
          
          {/* Tools Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              clearTimeout(toolsTimeoutRef.current);
              setIsToolsOpen(true);
            }}
            onMouseLeave={() => {
              toolsTimeoutRef.current = setTimeout(() => {
                setIsToolsOpen(false);
              }, 200); // 200ms delay
            }}
          >
            <button className="flex items-center space-x-1">
              <span>Tools</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isToolsOpen && (
              <div className="absolute mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link href="/tools/ai-marketing-audit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Marketing Audit</Link>
                <Link href="/tools/logo-animator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">🎨 Logo Animator</Link>
                <Link href="/tools/invoice-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">📄 Invoice Generator</Link>
                <Link href="/tools/break-even-roas-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Break even ROAS Calculator</Link>
                <Link href="/tools/cpa-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CPA Calculator</Link>
                <Link href="/tools/tekens-tellen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tekens Tellen Tool</Link>
              </div>
            )}
          </div>
          
          {/* Locaties Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              clearTimeout(locationsTimeoutRef.current);
              setIsLocationsOpen(true);
            }}
            onMouseLeave={() => {
              locationsTimeoutRef.current = setTimeout(() => {
                setIsLocationsOpen(false);
              }, 200); // 200ms delay
            }}
          >
            <button className="flex items-center space-x-1">
              <span>Locaties</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLocationsOpen && (
              <div className="absolute mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-80 overflow-y-auto">
                <div className="grid grid-cols-2 gap-1 p-2">
                  {/* New locations */}
                  <Link href="/marketing/aalst" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Aalst</Link>
                  <Link href="/marketing/aalten" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Aalten</Link>
                  <Link href="/marketing/aam" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Aam</Link>
                  <Link href="/marketing/achter-drempt" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Achter-Drempt</Link>
                  <Link href="/marketing/achterhoek" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Achterhoek</Link>
                  <Link href="/marketing/acquoy" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Acquoy</Link>
                  <Link href="/marketing/aerdenburg" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Aerdenburg</Link>
                  <Link href="/marketing/aerdt" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Aerdt</Link>
                  <Link href="/marketing/afferden" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Afferden</Link>
                  <Link href="/marketing/alem" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Alem</Link>
                  <Link href="/marketing/almen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Almen</Link>
                  <Link href="/marketing/alphen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Alphen</Link>
                  <Link href="/marketing/altforst" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Altforst</Link>
                  <Link href="/marketing/alverna" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Alverna</Link>
                  <Link href="/marketing/ammerzoden" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Ammerzoden</Link>
                  <Link href="/marketing/ampsen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Ampsen</Link>
                  <Link href="/marketing/andelst" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Andelst</Link>
                  <Link href="/marketing/angeren" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Angeren</Link>
                  <Link href="/marketing/angerlo" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Angerlo</Link>
                  <Link href="/marketing/apeldoorn" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Apeldoorn</Link>
                  <Link href="/marketing/aperloo" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Aperloo</Link>
                  <Link href="/marketing/appel" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Appel</Link>
                  <Link href="/marketing/appeltern" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Appeltern</Link>
                  <Link href="/marketing/appen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Appen</Link>
                  <Link href="/marketing/armhoede" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Armhoede</Link>
                  <Link href="/marketing/arnhem" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Arnhem</Link>
                  <Link href="/marketing/asch" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Asch</Link>
                  <Link href="/marketing/asperen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Asperen</Link>
                  <Link href="/marketing/assel" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Assel</Link>
                  <Link href="/marketing/avest" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Avest</Link>
                  <Link href="/marketing/azewijn" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Azewijn</Link>
                  
                  {/* Additional new locations */}
                  <div className="col-span-2 border-t border-gray-200 mt-2 pt-2">
                    <div className="grid grid-cols-2 gap-1">
                      <Link href="/marketing/achterveld" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Achterveld</Link>
                      <Link href="/marketing/de-glind" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">De Glind</Link>
                      <Link href="/marketing/essen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Essen</Link>
                      <Link href="/marketing/garderen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Garderen</Link>
                      <Link href="/marketing/harselaar" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Harselaar</Link>
                      <Link href="/marketing/harskamp" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Harskamp</Link>
                      <Link href="/marketing/hoevelaken" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Hoevelaken</Link>
                      <Link href="/marketing/hooglanderveen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Hooglanderveen</Link>
                      <Link href="/marketing/kootwijk" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Kootwijk</Link>
                      <Link href="/marketing/kootwijkerbroek" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Kootwijkerbroek</Link>
                      <Link href="/marketing/otterlo" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Otterlo</Link>
                      <Link href="/marketing/scherpenzeel" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Scherpenzeel</Link>
                      <Link href="/marketing/stroe" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Stroe</Link>
                      <Link href="/marketing/terschuur" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Terschuur</Link>
                      <Link href="/marketing/voorthuizen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Voorthuizen</Link>
                      <Link href="/marketing/woudenberg" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Woudenberg</Link>
                      <Link href="/marketing/zwartebroek" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Zwartebroek</Link>
                    </div>
                  </div>
                  
                  {/* New premium locations */}
                  <div className="col-span-2 border-t border-gray-200 mt-2 pt-2">
                    <div className="grid grid-cols-2 gap-1">
                      <Link href="/marketing/beek" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Beek</Link>
                      <Link href="/marketing/blaricum" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Blaricum</Link>
                      <Link href="/marketing/eemnes" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Eemnes</Link>
                      <Link href="/marketing/gulpen-wittem" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Gulpen-Wittem</Link>
                      <Link href="/marketing/harlingen" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Harlingen</Link>
                      <Link href="/marketing/hilvarenbeek" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Hilvarenbeek</Link>
                      <Link href="/marketing/landsmeer" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Landsmeer</Link>
                      <Link href="/marketing/laren" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Laren</Link>
                      <Link href="/marketing/lopik" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Lopik</Link>
                      <Link href="/marketing/montfoort" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Montfoort</Link>
                      <Link href="/marketing/oostzaan" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Oostzaan</Link>
                      <Link href="/marketing/ouder-amstel" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Ouder-Amstel</Link>
                      <Link href="/marketing/oudewater" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Oudewater</Link>
                      <Link href="/marketing/renswoude" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Renswoude</Link>
                      <Link href="/marketing/uitgeest" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Uitgeest</Link>
                      <Link href="/marketing/vaals" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Vaals</Link>
                      <Link href="/marketing/westervoort" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Westervoort</Link>
                      <Link href="/marketing/zoeterwoude" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Zoeterwoude</Link>
                    </div>
                  </div>
                  
                  {/* Existing locations */}
                  <div className="col-span-2 border-t border-gray-200 mt-2 pt-2">
                    <div className="grid grid-cols-2 gap-1">
                      <Link href="/marketing/amersfoort" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Amersfoort</Link>
                      <Link href="/marketing/barneveld" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Barneveld</Link>
                      <Link href="/marketing/bennekom" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Bennekom</Link>
                      <Link href="/marketing/ede" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Ede</Link>
                      <Link href="/marketing/leusden" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Leusden</Link>
                      <Link href="/marketing/lunteren" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Lunteren</Link>
                      <Link href="/marketing/nijkerk" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Nijkerk</Link>
                      <Link href="/marketing/putten" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Putten</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Link href="/youtube">YouTube</Link>
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
            
            {/* Mobile Tools */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsToolsOpen(!isToolsOpen)}
              >
                <span>Tools</span>
                <svg className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isToolsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/tools/ai-marketing-audit" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>🤖 AI Marketing Audit</Link>
                  <Link href="/tools/logo-animator" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>🎨 Logo Animator</Link>
                  <Link href="/tools/invoice-generator" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>📄 Invoice Generator</Link>
                  <Link href="/tools/break-even-roas-calculator" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>📊 ROAS Calculator</Link>
                  <Link href="/tools/cpa-calculator" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>💰 CPA Calculator</Link>
                  <Link href="/tools/tekens-tellen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>📝 Tekens Tellen Tool</Link>
                </div>
              )}
            </div>
            
            {/* Mobile Locaties */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
              >
                <span>Locaties</span>
                <svg className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLocationsOpen && (
                <div className="ml-4 mt-2 space-y-2 max-h-60 overflow-y-auto">
                  {/* New locations */}
                  <Link href="/marketing/aalst" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Aalst</Link>
                  <Link href="/marketing/aalten" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Aalten</Link>
                  <Link href="/marketing/aam" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Aam</Link>
                  <Link href="/marketing/achter-drempt" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Achter-Drempt</Link>
                  <Link href="/marketing/achterhoek" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Achterhoek</Link>
                  <Link href="/marketing/acquoy" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Acquoy</Link>
                  <Link href="/marketing/aerdenburg" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Aerdenburg</Link>
                  <Link href="/marketing/aerdt" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Aerdt</Link>
                  <Link href="/marketing/afferden" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Afferden</Link>
                  <Link href="/marketing/alem" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Alem</Link>
                  <Link href="/marketing/almen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Almen</Link>
                  <Link href="/marketing/alphen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Alphen</Link>
                  <Link href="/marketing/altforst" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Altforst</Link>
                  <Link href="/marketing/alverna" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Alverna</Link>
                  <Link href="/marketing/ammerzoden" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Ammerzoden</Link>
                  <Link href="/marketing/ampsen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Ampsen</Link>
                  <Link href="/marketing/andelst" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Andelst</Link>
                  <Link href="/marketing/angeren" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Angeren</Link>
                  <Link href="/marketing/angerlo" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Angerlo</Link>
                  <Link href="/marketing/apeldoorn" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Apeldoorn</Link>
                  <Link href="/marketing/aperloo" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Aperloo</Link>
                  <Link href="/marketing/appel" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Appel</Link>
                  <Link href="/marketing/appeltern" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Appeltern</Link>
                  <Link href="/marketing/appen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Appen</Link>
                  <Link href="/marketing/armhoede" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Armhoede</Link>
                  <Link href="/marketing/arnhem" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Arnhem</Link>
                  <Link href="/marketing/asch" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Asch</Link>
                  <Link href="/marketing/asperen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Asperen</Link>
                  <Link href="/marketing/assel" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Assel</Link>
                  <Link href="/marketing/avest" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Avest</Link>
                  <Link href="/marketing/azewijn" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Azewijn</Link>
                  
                  {/* Additional new locations */}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link href="/marketing/achterveld" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Achterveld</Link>
                    <Link href="/marketing/de-glind" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>De Glind</Link>
                    <Link href="/marketing/essen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Essen</Link>
                    <Link href="/marketing/garderen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Garderen</Link>
                    <Link href="/marketing/harselaar" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Harselaar</Link>
                    <Link href="/marketing/harskamp" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Harskamp</Link>
                    <Link href="/marketing/hoevelaken" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Hoevelaken</Link>
                    <Link href="/marketing/hooglanderveen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Hooglanderveen</Link>
                    <Link href="/marketing/kootwijk" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Kootwijk</Link>
                    <Link href="/marketing/kootwijkerbroek" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Kootwijkerbroek</Link>
                    <Link href="/marketing/otterlo" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Otterlo</Link>
                    <Link href="/marketing/scherpenzeel" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Scherpenzeel</Link>
                    <Link href="/marketing/stroe" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Stroe</Link>
                    <Link href="/marketing/terschuur" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Terschuur</Link>
                    <Link href="/marketing/voorthuizen" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Voorthuizen</Link>
                    <Link href="/marketing/woudenberg" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Woudenberg</Link>
                    <Link href="/marketing/zwartebroek" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Zwartebroek</Link>
                  </div>
                  
                  {/* New premium locations */}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link href="/marketing/laren" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Laren</Link>
                    <Link href="/marketing/lopik" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Lopik</Link>
                    <Link href="/marketing/montfoort" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Montfoort</Link>
                    <Link href="/marketing/oostzaan" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Oostzaan</Link>
                    <Link href="/marketing/ouder-amstel" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Ouder-Amstel</Link>
                    <Link href="/marketing/oudewater" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Oudewater</Link>
                    <Link href="/marketing/renswoude" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Renswoude</Link>
                    <Link href="/marketing/vaals" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Vaals</Link>
                    <Link href="/marketing/zoeterwoude" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Zoeterwoude</Link>
                  </div>
                  
                  {/* Existing locations */}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link href="/marketing/amersfoort" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Amersfoort</Link>
                    <Link href="/marketing/barneveld" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Barneveld</Link>
                    <Link href="/marketing/bennekom" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Bennekom</Link>
                    <Link href="/marketing/blaricum" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Blaricum</Link>
                    <Link href="/marketing/ede" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Ede</Link>
                    <Link href="/marketing/eemnes" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Eemnes</Link>
                    <Link href="/marketing/landsmeer" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Landsmeer</Link>
                    <Link href="/marketing/leusden" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Leusden</Link>
                    <Link href="/marketing/lunteren" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Lunteren</Link>
                    <Link href="/marketing/nijkerk" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Nijkerk</Link>
                    <Link href="/marketing/putten" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Putten</Link>
                    <Link href="/marketing/scherpenzeel" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Scherpenzeel</Link>
                    <Link href="/marketing/uitgeest" className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Uitgeest</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/youtube" onClick={() => setIsMobileMenuOpen(false)}>YouTube</Link>
            
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
