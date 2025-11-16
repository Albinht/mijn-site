import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email template voor lead formulier (naar admin)
const createLeadEmailHTML = ({ name, email, phone, service, date, time }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #1795FF 0%, #0f7dd4 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 20px;
            background: white;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #1795FF;
          }
          .field-label {
            font-weight: bold;
            color: #1795FF;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
          }
          .field-value {
            color: #333;
            font-size: 16px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            color: #666;
            font-size: 12px;
          }
          .cta-badge {
            background: #FFD43B;
            color: #333;
            padding: 10px 20px;
            border-radius: 20px;
            display: inline-block;
            margin-top: 20px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎉 Nieuw Consult Verzoek!</h1>
          <div class="cta-badge">Gratis Consult</div>
        </div>
        <div class="content">
          <p style="font-size: 16px; margin-bottom: 20px;">Je hebt een nieuw consult verzoek ontvangen:</p>
          
          <div class="field">
            <div class="field-label">Naam</div>
            <div class="field-value">${name}</div>
          </div>

          <div class="field">
            <div class="field-label">E-mail</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #1795FF; text-decoration: none;">${email}</a></div>
          </div>

          ${phone ? `
          <div class="field">
            <div class="field-label">Telefoonnummer</div>
            <div class="field-value"><a href="tel:${phone}" style="color: #1795FF; text-decoration: none;">${phone}</a></div>
          </div>
          ` : ''}

          ${service ? `
          <div class="field">
            <div class="field-label">Service Interesse</div>
            <div class="field-value">${service}</div>
          </div>
          ` : ''}

          ${date ? `
          <div class="field">
            <div class="field-label">Voorkeursdatum</div>
            <div class="field-value">${new Date(date).toLocaleDateString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          ` : ''}

          ${time ? `
          <div class="field">
            <div class="field-label">Voorkeurstijd</div>
            <div class="field-value">${time}</div>
          </div>
          ` : ''}

          <div class="footer">
            <p>Dit bericht is verzonden via het consult formulier op Niblah.com</p>
            <p>Ontvangen op: ${new Date().toLocaleString('nl-NL')}</p>
          </div>
        </div>
      </body>
    </html>
  `
}

// Email template voor klant bevestiging
const createClientConfirmationHTML = ({ name, service, date, time }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #1795FF 0%, #0f7dd4 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 15px;
            background: white;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #1795FF;
          }
          .field-label {
            font-weight: bold;
            color: #1795FF;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
          }
          .field-value {
            color: #333;
            font-size: 16px;
          }
          .highlight-box {
            background: #E8F5FF;
            border: 2px solid #1795FF;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            text-align: center;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Consult Bevestiging</h1>
        </div>
        <div class="content">
          <p style="font-size: 18px; margin-bottom: 20px;">Beste ${name},</p>
          <p>Bedankt voor je aanvraag! We hebben je consult verzoek in goede orde ontvangen.</p>
          
          <div class="highlight-box">
            <h2 style="margin: 0 0 15px 0; color: #1795FF; font-size: 20px;">Jouw Afspraak</h2>
            ${date ? `<p style="margin: 5px 0;"><strong>Datum:</strong> ${new Date(date).toLocaleDateString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>` : ''}
            ${time ? `<p style="margin: 5px 0;"><strong>Tijd:</strong> ${time}</p>` : ''}
            ${service ? `<p style="margin: 5px 0;"><strong>Service:</strong> ${service}</p>` : ''}
          </div>

          <p>Een van onze specialisten zal binnen 24 uur contact met je opnemen om de afspraak te bevestigen en eventuele details door te nemen.</p>

          <p style="margin-top: 30px;">Heb je vragen? Je kunt altijd contact met ons opnemen via <a href="mailto:albin@niblah.com" style="color: #1795FF;">albin@niblah.com</a>.</p>

          <div class="footer">
            <p><strong>Niblah</strong></p>
            <p>30+ jaar aan ervaring gebundeld in een familie</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, date, time } = body

    // Validatie
    if (!name || !email || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
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
    console.log('🎯 Consult form submission:', {
      name,
      email,
      phone,
      service,
      date,
      time,
      timestamp: new Date().toISOString()
    })

    // Verstuur emails via SMTP
    try {
      const transporter = nodemailer.createTransport({
        host: 'mail.zxcs.nl',
        port: 465,
        secure: true,
        auth: {
          user: 'albin@niblah.com',
          pass: 'QajTfezc29SuGdSCGGM7'
        }
      })

      // Email naar admin
      const adminMailOptions = {
        from: 'albin@niblah.com',
        to: 'albin@niblah.com',
        replyTo: email,
        subject: `🎯 Nieuw Consult Verzoek: ${name} - ${service}`,
        html: createLeadEmailHTML({ name, email, phone, service, date, time }),
      }

      // Bevestigingsmail naar klant
      const clientMailOptions = {
        from: 'albin@niblah.com',
        to: email,
        subject: `Bevestiging Consult Aanvraag - Niblah`,
        html: createClientConfirmationHTML({ name, service, date, time }),
      }

      // Verstuur beide emails
      await transporter.sendMail(adminMailOptions)
      console.log('✅ Admin email succesvol verzonden!')
      
      await transporter.sendMail(clientMailOptions)
      console.log('✅ Klant bevestiging succesvol verzonden!')
    } catch (emailError) {
      console.error('❌ Email verzenden mislukt:', emailError)
      // Return error als email faalt
      return NextResponse.json(
        { error: 'Er ging iets mis. Probeer het opnieuw.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Bedankt! We nemen binnen 24 uur contact met je op.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Lead form error:', error)
    return NextResponse.json(
      { error: 'Er ging iets mis bij het verwerken van je aanvraag' },
      { status: 500 }
    )
  }
}
