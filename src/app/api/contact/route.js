import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, message } = body

    // Validatie
    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Voornaam, achternaam, email, bedrijfsnaam en opmerkingen zijn verplicht' },
        { status: 400 }
      )
    }

    // Email validatie
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      )
    }

    // Log submission
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString()
    })

    // Verstuur email via SMTP
    try {
      await sendContactEmail({ 
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        email, 
        phone, 
        company,
        message 
      })
      console.log('✅ Email succesvol verzonden!')
    } catch (emailError) {
      console.error('❌ Email verzenden mislukt:', emailError)
      // Return error als email faalt
      return NextResponse.json(
        { error: 'Email verzenden mislukt. Probeer het opnieuw of bel ons direct.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Bericht succesvol ontvangen'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er ging iets mis bij het verwerken van je bericht' },
      { status: 500 }
    )
  }
}
