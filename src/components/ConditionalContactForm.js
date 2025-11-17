'use client'

import { usePathname } from 'next/navigation'
import ContactForm from './ContactForm'

export default function ConditionalContactForm() {
  const pathname = usePathname()
  
  // Hide contact form on /contact page, homepage, and web-development page
  if (pathname === '/contact' || pathname === '/' || pathname === '/services/web-development' || pathname === '/shopify/webshop-laten-maken' || pathname === '/shopify/maatwerk' || pathname === '/shopify/thema' || pathname === '/shopify/marketing' || pathname === '/shopify/migratie' || pathname === '/services/shopify-koppelingen' || pathname === '/services/shopify-partner' || pathname === '/services/shopify-developer' || pathname === '/wordpress/website-laten-maken' || pathname === '/wordpress/maatwerk' || pathname === '/wordpress/thema' || pathname === '/wordpress/marketing' || pathname === '/wordpress/migratie' || pathname === '/wordpress/koppelingen' || pathname === '/wordpress/partner' || pathname === '/wordpress/developer') {
    return null
  }
  
  return <ContactForm />
}
