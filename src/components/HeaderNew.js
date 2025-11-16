"use client";
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function HeaderNew() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileSubMenu, setMobileSubMenu] = useState(null)
  const dropdownTimeoutRef = useRef(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleMouseEnter = (menu) => {
    clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const toggleMobileSubMenu = (menu) => {
    setMobileSubMenu(mobileSubMenu === menu ? null : menu)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#331300] py-2">
        <div className="w-full px-6">
          <div className="flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-6">
              <a href="tel:+31648728828" className="hover:text-gray-300 flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +31 6 48728828
              </a>
              <a href="mailto:albin@niblah.com" className="hover:text-gray-300 flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                albin@niblah.com
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-gray-300">Gratis SEO Audit - Vraag nu aan</span>
            </div>
          </div>
        </div>
      </div>

      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="w-full px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Left side - Logo + Navigation */}
            <div className="flex items-center gap-8">
              {/* Logo - Niblah met vinkje */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <div className="relative">
                  <h1 className="text-sm font-bold text-gray-900">Niblah</h1>
                  <img 
                    src="https://schilderenopnummerwinkel.nl/wp-content/uploads/2025/07/Twitter_Verified_Badge.svg.png" 
                    alt="Verified" 
                    className="w-4 h-4 absolute -top-0.5 -right-4" 
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-2">
              {/* Diensten */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('diensten')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-3 py-2 text-sm font-semibold text-[#101828] hover:text-[#101828]/80 flex items-center gap-1">
                  Diensten
                  <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'diensten' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'diensten' && (
                  <div className="fixed left-6 top-[6.5rem] w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-2xl z-50">
                    <div className="flex">
                      {/* Main Content - 3/4 */}
                      <div className="flex-1 p-8">
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-xl font-bold text-gray-900">Diensten en Services</h2>
                          <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2">
                            Bekijk alles
                            <span className="w-6 h-6 bg-[#FFD43B] rounded-full flex items-center justify-center text-black">→</span>
                          </Link>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                          {/* SEO Services */}
                          <Link href="/services/seo" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">SEO Services</div>
                              <div className="text-sm text-gray-600">Rank hoger in Google</div>
                            </div>
                          </Link>

                          {/* Google Ads */}
                          <Link href="/services/google-ads" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Google Ads</div>
                              <div className="text-sm text-gray-600">Betaalde advertenties</div>
                            </div>
                          </Link>

                          {/* Email Marketing */}
                          <Link href="/services/email-marketing" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Email Marketing</div>
                              <div className="text-sm text-gray-600">Klaviyo & automations</div>
                            </div>
                          </Link>

                          {/* Website Ontwikkeling */}
                          <Link href="/services/websites" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Websites</div>
                              <div className="text-sm text-gray-600">Maatwerk webontwikkeling</div>
                            </div>
                          </Link>

                          {/* Content Creatie */}
                          <Link href="/services/content" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Content Creatie</div>
                              <div className="text-sm text-gray-600">Boeiende content die converteert</div>
                            </div>
                          </Link>

                          {/* Marketing Automation */}
                          <Link href="/services/automation" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Marketing Automation</div>
                              <div className="text-sm text-gray-600">Automatiseer je workflows</div>
                            </div>
                          </Link>

                          {/* Blueprints */}
                          <Link href="/blueprints" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Marketing Blueprints</div>
                              <div className="text-sm text-gray-600">Complete strategiegidsen</div>
                            </div>
                          </Link>

                          {/* Analytics & Reporting */}
                          <Link href="/services/analytics" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Rapportage & Analytics</div>
                              <div className="text-sm text-gray-600">Meet je campagne prestaties</div>
                            </div>
                          </Link>

                          {/* Zie alle services */}
                          <Link href="/services" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Alle services</div>
                              <div className="text-sm text-gray-600">Bekijk het volledige overzicht</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Sidebar - 1/4 */}
                      <div className="w-64 bg-gray-50 p-6 rounded-r-2xl border-l border-gray-200">
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-gray-900 mb-4">Voor je branche</h3>
                          <div className="space-y-2">
                            <Link href="/industries/ecommerce" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">E-commerce</Link>
                            <Link href="/industries/saas" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">SaaS bedrijven</Link>
                            <Link href="/industries/local" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">Lokale bedrijven</Link>
                            <Link href="/industries/b2b" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">B2B services</Link>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-4">Professionele services</h3>
                          <div className="space-y-2">
                            <Link href="/contact" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">Hire an Expert</Link>
                            <Link href="/onboarding" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">Persoonlijke onboarding</Link>
                            <Link href="/support" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">Customer success</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Locaties */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('locaties')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-3 py-2 text-sm font-semibold text-[#101828] hover:text-[#101828]/80 flex items-center gap-1">
                  Locaties
                  <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'locaties' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'locaties' && (
                  <div className="fixed left-6 top-[6.5rem] w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-2xl max-h-96 overflow-y-auto z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                        <Link href="/marketing/amsterdam" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Amsterdam</Link>
                        <Link href="/marketing/rotterdam" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Rotterdam</Link>
                        <Link href="/marketing/utrecht" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Utrecht</Link>
                        <Link href="/marketing/eindhoven" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Eindhoven</Link>
                        <Link href="/marketing/den-haag" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Den Haag</Link>
                        <Link href="/marketing/groningen" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Groningen</Link>
                        <Link href="/marketing/tilburg" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Tilburg</Link>
                        <Link href="/marketing/almere" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Almere</Link>
                        <Link href="/marketing/breda" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Breda</Link>
                        <Link href="/marketing/nijmegen" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Nijmegen</Link>
                        <Link href="/marketing/enschede" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Enschede</Link>
                        <Link href="/marketing/apeldoorn" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Apeldoorn</Link>
                        <Link href="/marketing/haarlem" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Haarlem</Link>
                        <Link href="/marketing/arnhem" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Arnhem</Link>
                        <Link href="/marketing/amersfoort" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Amersfoort</Link>
                        <Link href="/marketing/zaanstad" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Zaanstad</Link>
                        <Link href="/marketing/haarlemmermeer" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Haarlemmermeer</Link>
                        <Link href="/marketing/ede" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Ede</Link>
                        <Link href="/marketing/barneveld" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Barneveld</Link>
                        <Link href="/marketing/nijkerk" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">Nijkerk</Link>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <Link href="/marketing" className="text-sm font-medium text-purple-600 hover:text-purple-700">
                          Bekijk alle locaties →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-3 py-2 text-sm font-semibold text-[#101828] hover:text-[#101828]/80 flex items-center gap-1">
                  Resources
                  <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'resources' && (
                  <div className="fixed left-6 top-[6.5rem] w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-2xl z-50">
                    <div className="flex">
                      {/* Main Content - 3/4 */}
                      <div className="flex-1 p-8">
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-xl font-bold text-gray-900">Resources</h2>
                          <Link href="/resources" className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2">
                            Bekijk alle resources
                            <span className="w-6 h-6 bg-[#FFD43B] rounded-full flex items-center justify-center text-black">→</span>
                          </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                          {/* E-commerce */}
                          <Link href="/resources/ecommerce" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">E-commerce</div>
                              <div className="text-sm text-gray-600">Online verkoop strategieën</div>
                            </div>
                          </Link>

                          {/* Digital Content */}
                          <Link href="/resources/content" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Digital Content</div>
                              <div className="text-sm text-gray-600">Content creatie tips</div>
                            </div>
                          </Link>

                          {/* Marketing Automations */}
                          <Link href="/resources/automation" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Marketing Automations</div>
                              <div className="text-sm text-gray-600">Automatiseer je marketing</div>
                            </div>
                          </Link>

                          {/* YouTube Videos */}
                          <Link href="/youtube" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">YouTube Videos</div>
                              <div className="text-sm text-gray-600">Marketing tutorials</div>
                            </div>
                          </Link>

                          {/* Blueprints */}
                          <Link href="/blueprints" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Marketing Blueprints</div>
                              <div className="text-sm text-gray-600">Complete strategiegidsen</div>
                            </div>
                          </Link>

                          {/* Blog */}
                          <Link href="/blog" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">Blog</div>
                              <div className="text-sm text-gray-600">Marketing artikelen</div>
                            </div>
                          </Link>

                          {/* AI Marketing Audit */}
                          <Link href="/tools/ai-marketing-audit" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">AI Marketing Audit</div>
                              <div className="text-sm text-gray-600">Gratis website analyse</div>
                            </div>
                          </Link>

                          {/* SERP Simulator */}
                          <Link href="/tools/serp-simulator" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">SERP Simulator</div>
                              <div className="text-sm text-gray-600">Preview Google resultaten</div>
                            </div>
                          </Link>

                          {/* ROAS Calculator */}
                          <Link href="/tools/break-even-roas-calculator" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-[#1795FF]">ROAS Calculator</div>
                              <div className="text-sm text-gray-600">Bereken je ROI</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Sidebar - 1/4 */}
                      <div className="w-64 bg-gray-50 p-6 rounded-r-2xl border-l border-gray-200">
                        {/* Icons Section */}
                        <div className="mb-6 space-y-3">
                          <Link href="/help" className="flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            Help Center
                          </Link>
                          <Link href="/case-studies" className="flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            Case Studies
                          </Link>
                          <Link href="/events" className="flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Events
                          </Link>
                        </div>

                        {/* Professional Services */}
                        <div className="pt-6 border-t border-gray-200">
                          <h3 className="text-sm font-semibold text-gray-900 mb-4">Professionele services</h3>
                          <div className="space-y-2">
                            <Link href="/contact" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">Hire an Expert</Link>
                            <Link href="/onboarding" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">Persoonlijke onboarding</Link>
                            <Link href="/support" className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">Customer success</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <Link href="/pricing" className="px-3 py-2 text-sm font-semibold text-[#101828] hover:text-[#101828]/80">
                Prijzen
              </Link>
              </nav>
            </div>

            {/* Right side - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Phone */}
              <div className="text-xs text-gray-700">
                <span className="font-medium">Sales:</span>{' '}
                <a href="tel:+31648728828" className="hover:text-gray-900">+31 6 48728828</a>
              </div>

              {/* CTA Button - Blauwe Styling met Push Effect */}
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 font-semibold text-white text-xs px-4 py-2 rounded-full bg-[#1795FF] hover:bg-[#0f7dd4] transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_3px_0_0_#000]"
              >
                Start uw project <span>→</span>
              </Link>
            </div>

            {/* Mobile CTA & Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-white text-xs px-4 py-2 rounded-full bg-[#1795FF] hover:bg-[#0f7dd4] transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
              >
                Start uw project
              </Link>
              
              <button 
                className="p-2 text-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/20" onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="relative">
                  <h2 className="text-sm font-bold text-gray-900">Niblah</h2>
                  <img 
                    src="https://schilderenopnummerwinkel.nl/wp-content/uploads/2025/07/Twitter_Verified_Badge.svg.png" 
                    alt="Verified" 
                    className="w-4 h-4 absolute -top-0.5 -right-4" 
                  />
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Items */}
              <nav className="space-y-2">
                {/* Diensten */}
                <div>
                  <button 
                    onClick={() => toggleMobileSubMenu('diensten')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-[#101828] hover:bg-gray-50 rounded-lg"
                  >
                    <span>Diensten</span>
                    <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'diensten' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubMenu === 'diensten' && (
                    <div className="ml-2 mt-2 space-y-3 pb-3">
                      <div className="pl-4 border-l-2 border-gray-200">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Marketing Services</h4>
                        <div className="space-y-1">
                          <Link href="/services/seo" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            SEO Services
                          </Link>
                          <Link href="/services/google-ads" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            Google Ads
                          </Link>
                          <Link href="/services/email-marketing" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email Marketing
                          </Link>
                          <Link href="/services/websites" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            Websites
                          </Link>
                          <Link href="/services/content" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Content Creatie
                          </Link>
                          <Link href="/services/automation" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                            Marketing Automation
                          </Link>
                        </div>
                      </div>
                      
                      <div className="pl-4 border-l-2 border-gray-200">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Blueprints & Analytics</h4>
                        <div className="space-y-1">
                          <Link href="/blueprints" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Marketing Blueprints
                          </Link>
                          <Link href="/services/analytics" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Rapportage & Analytics
                          </Link>
                        </div>
                      </div>

                      <Link href="/services" className="block ml-4 px-3 py-2 text-sm font-medium text-[#1795FF] hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                        Bekijk alle services →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Locaties */}
                <div>
                  <button 
                    onClick={() => toggleMobileSubMenu('locaties')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-[#101828] hover:bg-gray-50 rounded-lg"
                  >
                    <span>Locaties</span>
                    <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'locaties' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubMenu === 'locaties' && (
                    <div className="ml-2 mt-2 pb-3">
                      <div className="pl-4 border-l-2 border-gray-200 max-h-60 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                          <Link href="/marketing/amsterdam" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Amsterdam</Link>
                          <Link href="/marketing/rotterdam" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Rotterdam</Link>
                          <Link href="/marketing/utrecht" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Utrecht</Link>
                          <Link href="/marketing/eindhoven" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Eindhoven</Link>
                          <Link href="/marketing/den-haag" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Den Haag</Link>
                          <Link href="/marketing/groningen" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Groningen</Link>
                          <Link href="/marketing/tilburg" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Tilburg</Link>
                          <Link href="/marketing/almere" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Almere</Link>
                          <Link href="/marketing/breda" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Breda</Link>
                          <Link href="/marketing/nijmegen" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Nijmegen</Link>
                          <Link href="/marketing/barneveld" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Barneveld</Link>
                          <Link href="/marketing/ede" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>Ede</Link>
                        </div>
                        <Link href="/marketing" className="block mt-3 px-3 py-2 text-sm font-medium text-[#1795FF] hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                          Bekijk alle locaties →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Resources */}
                <div>
                  <button 
                    onClick={() => toggleMobileSubMenu('resources')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-[#101828] hover:bg-gray-50 rounded-lg"
                  >
                    <span>Resources</span>
                    <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubMenu === 'resources' && (
                    <div className="ml-2 mt-2 space-y-3 pb-3">
                      <div className="pl-4 border-l-2 border-gray-200">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Leer met Niblah</h4>
                        <div className="space-y-1">
                          <Link href="/resources/ecommerce" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            E-commerce
                          </Link>
                          <Link href="/resources/content" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            Digital Content
                          </Link>
                          <Link href="/resources/automation" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Marketing Automations
                          </Link>
                        </div>
                      </div>

                      <div className="pl-4 border-l-2 border-gray-200">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Content & Tools</h4>
                        <div className="space-y-1">
                          <Link href="/youtube" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            YouTube Videos
                          </Link>
                          <Link href="/blueprints" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Blueprints
                          </Link>
                          <Link href="/blog" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Blog
                          </Link>
                          <Link href="/tools/ai-marketing-audit" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            AI Marketing Audit
                          </Link>
                        </div>
                      </div>

                      <Link href="/resources" className="block ml-4 px-3 py-2 text-sm font-medium text-[#1795FF] hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                        Bekijk alle resources →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Prijzen */}
                <Link 
                  href="/pricing" 
                  className="block px-4 py-3 text-base font-semibold text-[#101828] hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Prijzen
                </Link>
              </nav>

              {/* Bottom Section */}
              <div className="mt-8 pt-6 border-t space-y-4">
                {/* Contact Sales */}
                <div className="px-4 py-2">
                  <div className="text-sm text-gray-600">Contact Sales:</div>
                  <a href="tel:+31648728828" className="text-base font-medium text-gray-900 hover:text-purple-600">
                    +31 6 48728828
                  </a>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/contact"
                  className="block w-full px-4 text-center font-semibold text-white text-sm py-2.5 rounded-full bg-[#1795FF] hover:bg-[#0f7dd4] transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start uw project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
