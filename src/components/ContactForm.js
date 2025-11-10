'use client'

import { useState } from 'react'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('') // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact-form" className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Klaar om te starten?
          </h2>
          <p className="text-lg text-gray-600">
            Vul het formulier in en we nemen zo snel mogelijk contact met je op
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Voornaam *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8C2891] focus:border-transparent outline-none transition text-sm"
                placeholder="Je voornaam"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Achternaam *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8C2891] focus:border-transparent outline-none transition text-sm"
                placeholder="Je achternaam"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8C2891] focus:border-transparent outline-none transition text-sm"
                placeholder="je@email.nl"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Telefoonnummer <span className="text-gray-500 font-normal">(aangeraden)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8C2891] focus:border-transparent outline-none transition text-sm"
                placeholder="06 12345678"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-1.5">
              Bedrijfsnaam *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8C2891] focus:border-transparent outline-none transition text-sm"
              placeholder="Naam van je bedrijf"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1.5">
              Opmerkingen *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8C2891] focus:border-transparent outline-none transition resize-none text-sm"
              placeholder="Vertel ons waar we je mee kunnen helpen..."
            />
          </div>

          {status === 'success' && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold text-sm">
                ✓ Bedankt! We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold text-sm">
                Er ging iets mis. Probeer het opnieuw of bel ons direct op +31 6 48728828
              </p>
            </div>
          )}

          <div className="flex flex-col items-center gap-6">
            <Button 
              as="button" 
              type="submit" 
              disabled={status === 'loading'}
              variant="cta"
            >
              {status === 'loading' ? 'Verzenden...' : 'Verstuur bericht'} <span>→</span>
            </Button>

            {/* WhatsApp Link */}
            <a 
              href="https://wa.link/zhg1bl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#25D366] hover:text-[#22C55E] transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595"/>
              </svg>
              <span><strong>Ontvang direct een reactie,</strong> stuur een berichtje via WhatsApp</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
