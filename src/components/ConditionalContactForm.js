'use client'

import { usePathname } from 'next/navigation'
import ContactForm from './ContactForm'

export default function ConditionalContactForm() {
  const pathname = usePathname()
  
  // Hide contact form on /contact page and homepage
  if (pathname === '/contact' || pathname === '/') {
    return null
  }
  
  return <ContactForm />
}
