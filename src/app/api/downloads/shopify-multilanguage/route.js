import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, businessType, revenue, downloadType = 'shopify-multilanguage-guide' } = await request.json()

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
      resource: 'Shopify Multi-Language Automation Guide',
      timestamp: new Date().toISOString(),
      source: 'youtube-shopify-multilanguage',
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    }

    console.log('🛍️ Nieuwe Shopify Multi-Language Download Lead:', leadData)

    // Email notification to you
    try {
      await sendNotificationEmail({
        to: 'albin@niblah.com',
        subject: `🛍️ New Lead: ${name || 'Unknown'} (${businessType || 'Unknown'}) - ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #059669;">🛍️ New Shopify Automation Lead!</h2>
            
            <div style="background: #F0FDF4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Lead Details:</h3>
              <p><strong>👤 Name:</strong> ${name || 'Not provided'}</p>
              <p><strong>📧 Email:</strong> ${email}</p>
              <p><strong>📦 Resource:</strong> ${leadData.resource}</p>
              <p><strong>⏰ Time:</strong> ${leadData.timestamp}</p>
              <p><strong>📍 Source:</strong> YouTube Shopify Multi-Language article</p>
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
                <li><strong>SEO Blueprint:</strong> Perfect for international expansion</li>
                <li><strong>€30 Implementation Session:</strong> High-converting quick win</li>
                <li><strong>Full SEO/Automation Consulting:</strong> Main business opportunity</li>
              </ul>
            </div>
            
            <div style="background: #FEF3C7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400E;">🎯 Next Steps:</h3>
              <ul>
                <li>✅ They received welcome email with all upsells</li>
                <li>📱 Follow up if they book implementation session</li>
                <li>🚀 Reach out for SEO strategy discussion</li>
                <li>📧 Add to main e-commerce/SEO email sequence</li>
              </ul>
            </div>
          </div>
        `
      })
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
    }

    // Welcome email to lead
    try {
      await sendWelcomeEmail({
        to: email,
        subject: '🛍️ Your Shopify Multi-Language Automation Guide is Ready!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
            <!-- SEO Blueprint Style Header -->
            <div style="background: white; border: 2px solid #E5E7EB; padding: 40px 30px; border-radius: 12px; margin: 0 0 25px 0; text-align: center;">
              <h1 style="font-size: 32px; font-weight: bold; line-height: 1.2; color: #1F2937; margin: 0 0 24px 0;">
                Shopify automation is no <span style="background: #F7D8FA; padding: 4px 8px; border-radius: 4px; font-style: italic;">Rocket science</span><br />
                your complete automation guide is ready
              </h1>
              
              <p style="font-size: 18px; color: #374151; line-height: 1.6; margin: 0;">
                <strong>Everything you need to automate multi-language support.</strong><br />
                Complete setup templates, workflows, and step-by-step instructions included.
              </p>
            </div>
            
            <div style="padding: 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #374151;">Hi there!</p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151;">Here's your <strong>Shopify Multi-Language Automation Guide</strong> with all the templates and setup instructions you need! 🎉</p>
              
              <!-- Download Section -->
              <div style="background: #F0FDF4; border: 2px solid #10B981; padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h3 style="color: #065F46; margin: 0 0 15px 0;">📋 What's included in your guide:</h3>
                <div style="text-align: left; display: inline-block;">
                  <div style="margin: 8px 0;">✅ Complete n8n workflow templates</div>
                  <div style="margin: 8px 0;">✅ AI-powered translation automation setup</div>
                  <div style="margin: 8px 0;">✅ Cost-saving strategies (save $20-100+/month)</div>
                  <div style="margin: 8px 0;">✅ Shopify app alternatives</div>
                  <div style="margin: 8px 0;">✅ SEO optimization for each language</div>
                </div>
                
                <a href="https://niblah.com/downloads/shopify-translator.json" 
                   style="background: #10B981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; font-weight: bold; font-size: 16px;">
                  📥 Download Your JSON Template
                </a>
              </div>

              <!-- SEO Blueprint Upsell - Matching Website Style -->
              <div style="background: white; border: 2px solid #E5E7EB; padding: 40px 30px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h2 style="font-size: 32px; font-weight: bold; line-height: 1.2; color: #1F2937; margin: 0 0 24px 0;">
                  SEO is no <span style="background: #F7D8FA; padding: 4px 8px; border-radius: 4px; font-style: italic;">Rocket science</span><br />
                  my blueprint to rank #1 in Google
                </h2>
                
                <p style="font-size: 18px; color: #374151; line-height: 1.6; margin: 0 0 24px 0;">
                  <strong>Consistently ranking #1 in Google is simple.</strong><br />
                  All my knowledge after ranking 20+ sites to #1 in Google bundled in a simple blueprint you can follow.
                </p>
                
                <div style="text-align: left; display: inline-block; margin-bottom: 32px;">
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ The only blueprint that guarantees your website on position #1 in Google</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Full video course + personal support for questions</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Cheapest price on the internet</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Perfect combo with your Shopify automation</div>
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

              <!-- Implementation Support - Professional Layout -->
              <div style="background: white; border: 2px solid #E5E7EB; padding: 40px 30px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h2 style="font-size: 28px; font-weight: bold; line-height: 1.2; color: #1F2937; margin: 0 0 24px 0;">
                  Need help <span style="background: #DBEAFE; padding: 4px 8px; border-radius: 4px; font-style: italic;">implementing</span><br />
                  your automation setup?
                </h2>
                
                <p style="font-size: 18px; color: #374151; line-height: 1.6; margin: 0 0 24px 0;">
                  <strong>Setting up automation can be tricky!</strong><br />
                  Get everything working perfectly with my personal help in just 15 minutes.
                </p>
                
                <div style="text-align: left; display: inline-block; margin-bottom: 32px;">
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Live screen-share setup assistance</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Troubleshoot any technical issues</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Custom workflow optimization</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ Q&A for your specific store</div>
                </div>
                
                <div style="margin-bottom: 16px;">
                  <a href="https://niblah.com/#:~:text=No%20commitment-,required,-%E2%80%A2%20Free%2030%2Dminute" 
                     style="background: #000000; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px;">
                    Book 15min Session for €30 →
                  </a>
                </div>
                
                <p style="font-size: 14px; color: #6B7280; margin: 8px 0 0 0;">
                  <span style="text-decoration: line-through;">€75</span> - Limited time offer
                </p>
              </div>

              <!-- Core Business Positioning - Professional Layout -->
              <div style="background: white; border: 2px solid #E5E7EB; padding: 40px 30px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h2 style="font-size: 28px; font-weight: bold; line-height: 1.2; color: #1F2937; margin: 0 0 24px 0;">
                  About <span style="background: #F3E8FF; padding: 4px 8px; border-radius: 4px; font-style: italic;">Niblah</span><br />
                  Your SEO & E-commerce Growth Partner
                </h2>
                
                <p style="font-size: 18px; color: #374151; line-height: 1.6; margin: 0 0 24px 0;">
                  <strong>SEO is my core expertise.</strong><br />
                  I've built multiple successful e-commerce stores through strategic SEO, and now I help entrepreneurs like you dominate search results while scaling internationally.
                </p>
                
                <div style="text-align: left; display: inline-block; margin-bottom: 32px;">
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ <strong>SEO Strategy:</strong> Rank #1 for profitable keywords</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ <strong>Shopify Automation:</strong> Save hours with smart workflows</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ <strong>International Expansion:</strong> Enter new markets profitably</div>
                  <div style="margin: 8px 0; color: #374151; font-size: 16px;">✓ <strong>E-commerce Optimization:</strong> Increase conversions & AOV</div>
                </div>
                
                <div style="margin-bottom: 16px;">
                  <a href="https://wa.me/31648728828?text=Hi%20Albin,%20I%20downloaded%20your%20Shopify%20automation%20guide%20and%20need%20help%20with%20SEO%20and%20e-commerce%20growth" 
                     style="background: #000000; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px;">
                    Let's Discuss Your Growth Strategy →
                  </a>
                </div>
                
                <p style="font-size: 14px; color: #6B7280; margin: 8px 0 0 0;">Personal consultation available via WhatsApp</p>
              </div>

              <!-- Additional Resources -->
              <div style="border-top: 2px solid #E5E7EB; padding-top: 25px; margin-top: 30px;">
                <h3 style="color: #374151;">🎬 More valuable resources:</h3>
                <div style="margin: 15px 0;">
                  <a href="https://niblah.com/youtube" style="color: #3B82F6; text-decoration: none; font-weight: 500;">🎥 YouTube Marketing Tutorials</a>
                </div>
                <div style="margin: 15px 0;">
                  <a href="https://niblah.com/blueprints" style="color: #3B82F6; text-decoration: none; font-weight: 500;">📚 Marketing Blueprints</a>
                </div>
                <div style="margin: 15px 0;">
                  <a href="https://niblah.com/tools" style="color: #3B82F6; text-decoration: none; font-weight: 500;">🛠️ Free Marketing Tools</a>
                </div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
                <p style="color: #374151;">Ready to dominate international markets? Let's make it happen! 🚀</p>
                
                <p style="margin-top: 25px;">
                  Best regards,<br>
                  <strong>Albin Hot</strong><br>
                  <span style="color: #059669; font-weight: 600;">SEO Expert & E-commerce Growth Specialist</span><br>
                  <a href="https://niblah.com" style="color: #3B82F6;">Niblah.com</a>
                </p>
              </div>
            </div>

            <div style="background: #F8FAFC; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #E5E7EB;">
              <p style="font-size: 14px; color: #6B7280; margin: 0;">
                <strong>Quick question about implementation?</strong> Just reply to this email or WhatsApp me - I personally respond to every message! 📱
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
      downloadUrl: '/downloads/shopify-translator.json',
      leadId: leadData.timestamp
    })

  } catch (error) {
    console.error('Shopify Download API Error:', error)
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

async function sendWelcomeEmail({ to, subject, html }) {
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