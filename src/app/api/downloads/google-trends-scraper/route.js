import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, businessType, revenue, downloadType = 'google-trends-scraper' } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    // Lead data voor tracking
    const leadData = {
      name,
      email,
      businessType,
      revenue,
      downloadType,
      resource: 'Google Trends Scanner Automation Template',
      timestamp: new Date().toISOString(),
      source: 'youtube-google-trends-scanner',
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    }

    console.log('🔍 Nieuwe Google Trends Scanner Download Lead:', leadData)

    // Email notification to you
    try {
      await sendNotificationEmail({
        to: 'albin@niblah.com',
        subject: `🔍 New Lead: ${name || 'Unknown'} (${businessType || 'Unknown'}) - ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #059669;">🔍 New Google Trends Automation Lead!</h2>
            
            <div style="background: #F0FDF4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Lead Details:</h3>
              <p><strong>👤 Name:</strong> ${name || 'Not provided'}</p>
              <p><strong>📧 Email:</strong> ${email}</p>
              <p><strong>📊 Resource:</strong> ${leadData.resource}</p>
              <p><strong>⏰ Time:</strong> ${leadData.timestamp}</p>
              <p><strong>📍 Source:</strong> YouTube Google Trends Scanner article</p>
              <p><strong>🌐 IP:</strong> ${leadData.ip}</p>
            </div>
            
            <div style="background: #F0F9FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1E40AF;">🏢 Lead Qualification:</h3>
              <p><strong>Business Type:</strong> ${businessType || 'Not specified'}</p>
              <p><strong>Revenue Range:</strong> ${revenue || (businessType === 'None' ? 'No business' : 'Not specified')}</p>
              
              ${businessType && businessType !== 'None' && revenue ? `
                <div style="background: white; padding: 15px; border-radius: 6px; margin-top: 15px;">
                  <strong style="color: #059669;">🎯 Lead Score:</strong>
                  <p style="margin: 5px 0; color: #374151;">
                    ${revenue.includes('1M') || revenue.includes('10M') ? '🔥 HIGH VALUE - Priority follow-up!' : 
                      revenue.includes('500k') || revenue.includes('250-500k') ? '⭐ QUALIFIED - Good potential' :
                      revenue.includes('100-250k') ? '✓ MODERATE - Worth pursuing' : 
                      '📞 STARTER - Educational opportunity'}
                  </p>
                </div>
              ` : ''}
            </div>
            
            <div style="background: #EFF6FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1E40AF;">💰 Upsell Opportunities:</h3>
              <ul>
                <li><strong>SEO Blueprint:</strong> Perfect for trend-based content strategy</li>
                <li><strong>€30 Implementation Session:</strong> Help set up their automation</li>
                <li><strong>Full Marketing Automation Consulting:</strong> Advanced automation systems</li>
                <li><strong>E-commerce SEO Services:</strong> Turn trends into profitable stores</li>
              </ul>
            </div>
            
            <div style="background: #FEF3C7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400E;">🎯 Next Steps:</h3>
              <ul>
                <li>✅ They received welcome email with all upsells</li>
                <li>📱 Follow up if they book implementation session</li>
                <li>🚀 Reach out for automation/SEO strategy discussion</li>
                <li>📧 Add to automation and e-commerce email sequence</li>
              </ul>
            </div>
          </div>
        `
      })
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
    }

    // Detect current environment and create download URL
    const host = request.headers.get('host')
    const protocol = host?.includes('localhost') ? 'http' : 'https'
    const downloadUrl = `${protocol}://${host}/downloads/google-trends-scraper.json`

    // Welcome email to lead
    try {
      await sendWelcomeEmail({
        to: email,
        subject: '🔍 Your Google Trends Scanner Automation Template is Ready!',
        downloadUrl,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
            <!-- Header -->
            <div style="background: white; border: 2px solid #E5E7EB; padding: 40px 30px; border-radius: 12px; margin: 0 0 25px 0; text-align: center;">
              <h1 style="font-size: 32px; font-weight: bold; line-height: 1.2; color: #1F2937; margin: 0 0 24px 0;">
                Trend automation is no <span style="background: #F7D8FA; padding: 4px 8px; border-radius: 4px; font-style: italic;">Rocket science</span><br />
                your complete automation template is ready
              </h1>
              
              <p style="font-size: 18px; color: #374151; line-height: 1.6; margin: 0;">
                <strong>Everything you need to automate Google Trends scanning 24/7.</strong><br />
                Complete n8n workflow, AI analysis setup, and step-by-step instructions included.
              </p>
            </div>
            
            <div style="padding: 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #374151;">Hi there!</p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151;">Here's your <strong>Google Trends Scanner Automation Template</strong> with everything you need to never miss a profitable opportunity again! 🎉</p>
              
              <!-- Download Section -->
              <div style="background: #F0FDF4; border: 2px solid #10B981; padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h3 style="color: #065F46; margin: 0 0 15px 0;">📊 What's included in your template:</h3>
                <div style="text-align: left; display: inline-block;">
                  <div style="margin: 8px 0;">✅ Complete n8n workflow template (JSON)</div>
                  <div style="margin: 8px 0;">✅ AI-powered trend analysis setup</div>
                  <div style="margin: 8px 0;">✅ Business opportunity scoring system (0-10)</div>
                  <div style="margin: 8px 0;">✅ E-commerce niche identification</div>
                  <div style="margin: 8px 0;">✅ 24/7 automated monitoring configuration</div>
                  <div style="margin: 8px 0;">✅ Firecrawl API integration guide</div>
                </div>
                
                <a href="${downloadUrl}" 
                   style="background: #10B981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; font-weight: bold; font-size: 16px;">
                  📥 Download Your Automation Template
                </a>
              </div>

              <!-- SEO Blueprint Upsell -->
              <div style="background: white; border: 2px solid #E5E7EB; padding: 40px 30px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h2 style="font-size: 32px; font-weight: bold; line-height: 1.2; color: #1F2937; margin: 0 0 24px 0;">
                  SEO is no <span style="background: #F7D8FA; padding: 4px 8px; border-radius: 4px; font-style: italic;">Rocket science</span><br />
                  my blueprint to rank #1 in Google
                </h2>
                
                <p style="font-size: 18px; color: #374151; line-height: 1.6; margin: 0 0 24px 0;">
                  <strong>Turn your trend insights into #1 Google rankings.</strong><br />
                  Perfect combo with your trends automation - identify opportunities and rank for them fast.
                </p>
                
                <div style="text-align: left; display: inline-block; margin-bottom: 32px;">
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ The only blueprint that guarantees your website on position #1 in Google</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Full video course + personal support for questions</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Perfect for capitalizing on trending keywords</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Turn trend data into profitable organic traffic</div>
                </div>
                
                <div style="margin-bottom: 16px;">
                  <a href="https://niblah.com/blueprints/seo" 
                     style="background: #000000; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px; margin-right: 16px;">
                    Learn to Rank #1 for $49 →
                  </a>
                  <a href="https://niblah.com/work-with-me" 
                     style="background: white; color: #374151; border: 1px solid #D1D5DB; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 500; font-size: 16px;">
                    Work with me
                  </a>
                </div>
                
                <p style="font-size: 14px; color: #6B7280; margin: 8px 0 0 0;">100+ copies sold already</p>
              </div>

              <!-- Implementation Support -->
              <div style="background: white; border: 2px solid #E5E7EB; padding: 40px 30px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h2 style="font-size: 28px; font-weight: bold; line-height: 1.2; color: #1F2937; margin: 0 0 24px 0;">
                  Need help <span style="background: #DBEAFE; padding: 4px 8px; border-radius: 4px; font-style: italic;">setting up</span><br />
                  your automation workflow?
                </h2>
                
                <p style="font-size: 18px; color: #374151; line-height: 1.6; margin: 0 0 24px 0;">
                  <strong>n8n workflows can be tricky to configure!</strong><br />
                  Get everything working perfectly with my personal help in just 15 minutes.
                </p>
                
                <div style="text-align: left; display: inline-block; margin-bottom: 32px;">
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Live screen-share setup assistance</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Troubleshoot API connections and configurations</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Custom AI prompts for your specific niche</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Q&A for advanced automation features</div>
                </div>
                
                <div style="margin-bottom: 16px;">
                  <a href="https://niblah.com/#:~:text=No%20commitment-,required,-%E2%80%A2%20Free%2030%2Dminute" 
                     style="background: #000000; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px;">
                    Book 15min Setup Session for €30 →
                  </a>
                </div>
                
                <p style="font-size: 14px; color: #6B7280; margin: 8px 0 0 0;">
                  <span style="text-decoration: line-through;">€75</span> - Limited time offer
                </p>
              </div>

              <!-- Core Business -->
              <div style="background: white; border: 2px solid #E5E7EB; padding: 40px 30px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h2 style="font-size: 28px; font-weight: bold; line-height: 1.2; color: #1F2937; margin: 0 0 24px 0;">
                  About <span style="background: #F3E8FF; padding: 4px 8px; border-radius: 4px; font-style: italic;">Niblah</span><br />
                  Your Automation & SEO Growth Partner
                </h2>
                
                <p style="font-size: 18px; color: #374151; line-height: 1.6; margin: 0 0 24px 0;">
                  <strong>I specialize in turning automation into profitable businesses.</strong><br />
                  From trend detection to SEO dominance, I help entrepreneurs build systems that work while they sleep.
                </p>
                
                <div style="text-align: left; display: inline-block; margin-bottom: 32px;">
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ <strong>Marketing Automation:</strong> n8n workflows that scale your business</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ <strong>SEO Strategy:</strong> Rank #1 for profitable keywords</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ <strong>Trend Capitalization:</strong> Turn insights into revenue</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ <strong>E-commerce Growth:</strong> Build profitable online stores</div>
                </div>
                
                <div style="margin-bottom: 16px;">
                  <a href="https://wa.me/31648728828?text=Hi%20Albin,%20I%20downloaded%20your%20Google%20Trends%20automation%20template%20and%20need%20help%20with%20my%20automation%20and%20SEO%20strategy" 
                     style="background: #000000; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px;">
                    Let's Discuss Your Automation Strategy →
                  </a>
                </div>
                
                <p style="font-size: 14px; color: #6B7280; margin: 8px 0 0 0;">Personal consultation available via WhatsApp</p>
              </div>

              <!-- Additional Resources -->
              <div style="border-top: 2px solid #E5E7EB; padding-top: 25px; margin-top: 30px;">
                <h3 style="color: #374151;">🎬 More automation resources:</h3>
                <div style="margin: 15px 0;">
                  <a href="https://niblah.com/youtube" style="color: #3B82F6; text-decoration: none; font-weight: 500;">🎥 YouTube Automation Tutorials</a>
                </div>
                <div style="margin: 15px 0;">
                  <a href="https://niblah.com/blueprints" style="color: #3B82F6; text-decoration: none; font-weight: 500;">📚 Marketing Blueprints</a>
                </div>
                <div style="margin: 15px 0;">
                  <a href="https://niblah.com/tools" style="color: #3B82F6; text-decoration: none; font-weight: 500;">🛠️ Free Marketing Tools</a>
                </div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
                <p style="color: #374151;">Ready to automate your way to success? Let's build something amazing together! 🚀</p>
                
                <p style="margin-top: 25px;">
                  Best regards,<br>
                  <strong>Albin Hot</strong><br>
                  <span style="color: #059669; font-weight: 600;">Marketing Automation & SEO Expert</span><br>
                  <a href="https://niblah.com" style="color: #3B82F6;">Niblah.com</a>
                </p>
              </div>
            </div>

            <div style="background: #F8FAFC; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #E5E7EB;">
              <p style="font-size: 14px; color: #6B7280; margin: 0;">
                <strong>Questions about setup or automation?</strong> Just reply to this email or WhatsApp me - I personally respond to every message! 📱
              </p>
            </div>
          </div>
        `
      })
    } catch (welcomeEmailError) {
      console.error('Welcome email failed:', welcomeEmailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Download link successfully sent to your email',
      downloadUrl: '/downloads/google-trends-scraper.json',
      leadId: leadData.timestamp
    })

  } catch (error) {
    console.error('Google Trends Scanner Download API Error:', error)
    return NextResponse.json(
      { error: 'Something went wrong processing your request' },
      { status: 500 }
    )
  }
}

// Helper function for email notifications
async function sendNotificationEmail({ to, subject, html }) {
  try {
    // Using nodemailer with your SMTP settings
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransport({
      host: 'mail.zxcs.nl',
      port: 465,
      secure: true,
      auth: {
        user: 'albin@niblah.com',
        pass: 'QajTfezc29SuGdSCGGM7'
      }
    })

    await transporter.sendMail({
      from: 'albin@niblah.com',
      to,
      subject,
      html
    })

    console.log('📧 Notification email sent to:', to)
  } catch (error) {
    console.error('Email sending failed:', error)
    // Fallback to console log in development
    console.log('📧 Would send notification email to:', to)
    console.log('📧 Subject:', subject)
  }
}

async function sendWelcomeEmail({ to, subject, downloadUrl, html }) {
  try {
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransport({
      host: 'mail.zxcs.nl',
      port: 465,
      secure: true,
      auth: {
        user: 'albin@niblah.com',
        pass: 'QajTfezc29SuGdSCGGM7'
      }
    })

    await transporter.sendMail({
      from: 'albin@niblah.com',
      to,
      subject,
      html
    })

    console.log('🎉 Welcome email sent to:', to)
  } catch (error) {
    console.error('Welcome email sending failed:', error)
    // Fallback to console log in development
    console.log('🎉 Would send welcome email to:', to)
    console.log('📧 Subject:', subject)
  }
}