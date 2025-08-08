import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email, animationType, feature } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Geldig email adres is vereist' },
        { status: 400 }
      )
    }

    // Hier kun je de email opslaan naar je database
    // Voorbeelden van wat je zou kunnen doen:
    
    // 1. Opslaan naar lokaal bestand (voor development)
    const leadData = {
      email,
      animationType,
      feature, // 'gif-export' of 'video-export'
      timestamp: new Date().toISOString(),
      source: 'logo-animator-tool',
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    }

    console.log('🎨 Nieuwe Logo Animator Lead:', leadData)

    // 2. Email notificatie naar jezelf sturen
    // Je kunt hier een service zoals SendGrid, Mailgun of Resend gebruiken
    if (process.env.NOTIFICATION_EMAIL) {
      try {
        // Voorbeeld met fetch naar een email service
        await sendNotificationEmail({
          to: process.env.NOTIFICATION_EMAIL,
          subject: `🎨 Nieuwe Logo Animator Lead: ${email}`,
          html: `
            <h2>Nieuwe Lead van Logo Animator Tool</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gewenste Feature:</strong> ${feature}</p>
            <p><strong>Animatie Type:</strong> ${animationType}</p>
            <p><strong>Tijd:</strong> ${leadData.timestamp}</p>
            <p><strong>IP:</strong> ${leadData.ip}</p>
            
            <h3>Volgende Stappen:</h3>
            <ul>
              <li>Stuur welcome email met premium toegang</li>
              <li>Voeg toe aan marketing funnel</li>
              <li>Bel binnen 24 uur voor persoonlijk advies</li>
            </ul>
          `
        })
      } catch (emailError) {
        console.error('Email notificatie mislukt:', emailError)
      }
    }

    // 3. Welcome email naar lead sturen
    try {
      await sendWelcomeEmail({
        to: email,
        subject: '🎉 Welkom bij Premium Logo Animator!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #3B82F6;">Bedankt voor je interesse!</h1>
            
            <p>Hallo!</p>
            
            <p>Geweldig dat je de premium features van onze Logo Animator wilt proberen! 🎨</p>
            
            <h2>Wat krijg je nu:</h2>
            <ul>
              <li>✅ Toegang tot GIF export</li>
              <li>✅ HD Video export (MP4/WEBM)</li>
              <li>✅ Batch processing voor meerdere logo's</li>
              <li>✅ Geavanceerde animation controls</li>
            </ul>
            
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>🎯 Wil je écht indruk maken?</h3>
              <p>Als marketing expert help ik bedrijven niet alleen met logo animaties, maar met complete digital marketing strategieën.</p>
              
              <a href="https://wa.me/31648728828" style="background: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px 0;">
                📱 WhatsApp voor Gratis Advies
              </a>
            </div>
            
            <p>Je premium features worden binnenkort geactiveerd. Heb je vragen? Ik ben altijd bereikbaar!</p>
            
            <p>Met vriendelijke groet,<br>
            <strong>Albin Hot</strong><br>
            Digital Marketing Expert</p>
            
            <hr style="margin: 30px 0; border: 1px solid #E5E7EB;">
            <p style="font-size: 12px; color: #6B7280;">
              P.S. Wil je meer tools en tips? Bekijk ook mijn andere <a href="${process.env.NEXT_PUBLIC_SITE_URL}/tools">marketing tools</a>!
            </p>
          </div>
        `
      })
    } catch (welcomeEmailError) {
      console.error('Welcome email mislukt:', welcomeEmailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Lead succesvol opgeslagen',
      leadId: leadData.timestamp // Je kunt hier een echte ID gebruiken
    })

  } catch (error) {
    console.error('Logo Animator Lead API Error:', error)
    return NextResponse.json(
      { error: 'Er ging iets mis bij het opslaan van je gegevens' },
      { status: 500 }
    )
  }
}

// Helper functie voor email notificaties (voorbeeld implementatie)
async function sendNotificationEmail({ to, subject, html }) {
  // Hier kun je jouw email service integreren
  // Voorbeelden:
  
  // SendGrid:
  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // return sgMail.send({ to, from: 'noreply@jouwdomein.com', subject, html })
  
  // Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // return resend.emails.send({ to, from: 'noreply@jouwdomein.com', subject, html })
  
  // Voor nu: console log (development)
  console.log('📧 Email zou verstuurd worden naar:', to)
  console.log('📧 Onderwerp:', subject)
}

async function sendWelcomeEmail({ to, subject, html }) {
  // Zelfde implementatie als notification email
  console.log('🎉 Welcome email zou verstuurd worden naar:', to)
}