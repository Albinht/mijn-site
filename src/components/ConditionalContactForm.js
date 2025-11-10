'use client'

import { usePathname } from 'next/navigation'
import ContactForm from './ContactForm'

export default function ConditionalContactForm() {
  const pathname = usePathname()
  
  // Hide contact form on /contact page
  if (pathname === '/contact') {
    return null
  }
  
  return <ContactForm />
}
