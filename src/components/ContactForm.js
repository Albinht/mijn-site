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

          <div className="flex flex-col items-center">
            <Button 
              as="button" 
              type="submit" 
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Verzenden...' : 'Verstuur bericht'} <span>→</span>
            </Button>
            
            {/* Testimonial onder button */}
            <div className="mt-6">
              <p className="text-gray-700 text-sm mb-3 text-center">
                "Snel geholpen en professioneel advies gekregen!"
              </p>
              <div className="flex items-center justify-center gap-2">
                <img 
                  src="https://pbs.twimg.com/profile_images/1694966386957938688/PtayrF_x_400x400.jpg" 
                  alt="Nathan Sanchez" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="font-bold text-sm text-gray-900">Nathan Sanchez</p>
                <p className="text-xs text-gray-600">Eigenaar van DigiSoft</p>
                <img 
                  src="https://gemarts.nl/wp-content/uploads/2024/11/trustpilot-rating.svg" 
                  alt="5 sterren" 
                  className="h-3 w-auto"
                />
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Of bel direct: <a href="tel:+31648728828" className="font-bold text-[#8C2891] hover:underline">06 48728828</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
