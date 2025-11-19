'use client'

import { usePathname } from 'next/navigation'
import ContactForm from './ContactForm'

export default function ConditionalContactForm() {
  const pathname = usePathname()
  
  // Hide contact form on /contact page, homepage, web-development page, SEO pages, CRO page, GEO page, SEA pages, and blog pages
  if (pathname === '/contact' || pathname === '/' || pathname === '/services/web-development' || pathname === '/services/seo' || pathname === '/services/seo/copywriting' || pathname === '/services/seo/contentmarketing' || pathname === '/services/seo/technical-seo' || pathname === '/services/seo/linkbuilding' || pathname === '/services/cro' || pathname === '/services/geo' || pathname === '/services/sea' || pathname === '/services/sea/google-ads' || pathname === '/services/sea/google-shopping' || pathname === '/services/sea/bing-ads' || pathname === '/services/sea/remarketing' || pathname === '/shopify/webshop-laten-maken' || pathname === '/shopify/maatwerk' || pathname === '/shopify/thema' || pathname === '/shopify/marketing' || pathname === '/shopify/migratie' || pathname === '/services/shopify-koppelingen' || pathname === '/services/shopify-partner' || pathname === '/services/shopify-developer' || pathname === '/wordpress/website-laten-maken' || pathname === '/wordpress/maatwerk' || pathname === '/wordpress/thema' || pathname === '/wordpress/marketing' || pathname === '/wordpress/migratie' || pathname === '/wordpress/koppelingen' || pathname === '/wordpress/partner' || pathname === '/wordpress/developer' || pathname.startsWith('/blog')) {
    return null
  }
  
  return <ContactForm />
}
