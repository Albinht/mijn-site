'use client'

import { usePathname } from 'next/navigation'
import ContactForm from './ContactForm'
import { splitLocaleFromPath } from '@/lib/i18n'

export default function ConditionalContactForm() {
  const pathname = usePathname()
  const { pathname: basePath } = splitLocaleFromPath(pathname || '/')
  
  // Hide contact form on /contact page, homepage, web-development page, SEO pages, CRO page, GEO page, SEA pages, and blog pages
  if (basePath === '/contact' || basePath === '/' || basePath === '/services/web-development' || basePath === '/services/seo' || basePath === '/services/seo/copywriting' || basePath === '/services/seo/contentmarketing' || basePath === '/services/seo/technical-seo' || basePath === '/services/seo/linkbuilding' || basePath === '/services/cro' || basePath === '/services/geo' || basePath === '/services/sea' || basePath === '/services/sea/google-ads' || basePath === '/services/sea/google-shopping' || basePath === '/services/sea/bing-ads' || basePath === '/services/sea/remarketing' || basePath === '/shopify/webshop-laten-maken' || basePath === '/shopify/maatwerk' || basePath === '/shopify/thema' || basePath === '/shopify/marketing' || basePath === '/shopify/migratie' || basePath === '/services/shopify-koppelingen' || basePath === '/services/shopify-partner' || basePath === '/services/shopify-developer' || basePath === '/wordpress/website-laten-maken' || basePath === '/wordpress/maatwerk' || basePath === '/wordpress/thema' || basePath === '/wordpress/marketing' || basePath === '/wordpress/migratie' || basePath === '/wordpress/koppelingen' || basePath === '/wordpress/partner' || basePath === '/wordpress/developer' || basePath.startsWith('/blog')) {
    return null
  }
  
  return <ContactForm />
}
