'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '../../components/Button'
import ReviewSlider from '../../components/ReviewSlider'
import avatarImage from '../../assets/avatar.png'
import graphImage from '../../assets/graph.png'

export default function WorkWithMe() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT SECTION */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Available for new projects
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Let&apos;s <span className="bg-[#F7D8FA] px-2 rounded italic">transform</span> your business together
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Ready to dominate Google and scale profitably? I specialize in delivering measurable results through proven SEO, Google Ads, and conversion optimization strategies.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Track Record</h3>
                  <p className="text-gray-600">100+ businesses scaled with measurable ROI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Data-Driven Approach</h3>
                  <p className="text-gray-600">Transparent reporting and continuous optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personal Partnership</h3>
                  <p className="text-gray-600">Direct access and dedicated support</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button 
                onClick={() => document.getElementById('calendly-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Work with me →
              </Button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing growth results"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={avatarImage}
                alt="Albin Hot"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
              How I <span className="bg-[#F7D8FA] px-2 rounded italic">will</span> help your business
            </h2>
            <p className="text-xl text-gray-600">Choose the partnership level that fits your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SEO Services */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Services</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">€995</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                Get your website to #1 in Google with proven SEO strategies.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Complete SEO audit &amp; strategy</li>
                <li>✓ Technical optimization</li>
                <li>✓ Content creation &amp; optimization</li>
                <li>✓ Monthly reporting</li>
              </ul>
            </div>

            {/* Google Ads Services */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads + SEO</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">€2,500</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                Complete digital marketing with SEO and profitable Google Ads.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Everything in SEO Services</li>
                <li>✓ Google Ads management</li>
                <li>✓ Landing page optimization</li>
                <li>✓ Weekly performance reviews</li>
              </ul>
            </div>

            {/* Full Service */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Service</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-6">
                Complete digital marketing strategy for larger businesses.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ SEO + Google Ads + CRO</li>
                <li>✓ Email marketing setup</li>
                <li>✓ Analytics &amp; tracking</li>
                <li>✓ Dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <ReviewSlider />

      {/* CTA SECTION */}
      <section id="calendly-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to <span className="bg-[#F7D8FA] px-2 rounded italic">scale</span> your business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation and let&apos;s discuss how I can help you achieve your growth goals
          </p>
          
          {/* Calendly Embed */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <iframe
              src="https://calendly.com/niblah/30min"
              width="100%"
              height="600"
              frameBorder="0"
              title="Schedule a consultation"
            ></iframe>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-gray-600">Urgent questions?</p>
            <a 
              href="https://wa.me/31648728828" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:text-green-700 flex items-center gap-2"
            >
              <span>📱</span> WhatsApp: +31 6 48728828
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
