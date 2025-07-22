import Button from '../../components/Button'

export default function WorkWithMe() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to <span className="bg-[#F7D8FA] px-2 rounded italic">dominate</span><br />
            Google search results?
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Let's work together to get your website to #1 in Google.<br />
            I'll personally help you implement the strategies that have worked for 20+ sites.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* SEO Consulting */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">SEO Consulting</h3>
            <p className="text-gray-600 mb-6">
              Get personalized SEO strategy and implementation guidance. I'll analyze your site, 
              identify opportunities, and create a custom roadmap to #1.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✓ Complete SEO audit & analysis</li>
              <li>✓ Custom strategy roadmap</li>
              <li>✓ Monthly progress reviews</li>
              <li>✓ Direct access to me via Slack</li>
            </ul>
            <p className="text-2xl font-bold text-gray-900">$2,500/month</p>
          </div>

          {/* Done-for-You SEO */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Done-for-You SEO</h3>
            <p className="text-gray-600 mb-6">
              I'll handle everything for you. From technical optimization to content creation 
              and link building - you focus on your business, I'll get you to #1.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✓ Complete SEO implementation</li>
              <li>✓ Content creation & optimization</li>
              <li>✓ Technical SEO fixes</li>
              <li>✓ Link building campaigns</li>
            </ul>
            <p className="text-2xl font-bold text-gray-900">$5,000/month</p>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="text-center bg-gray-50 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Book a free 30-minute strategy call to discuss your goals and see if we're a good fit.
          </p>
          <Button>
            Book Free Strategy Call <span>→</span>
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            No sales pitch. Just actionable advice you can use immediately.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            
            <div>
              <h3 className="text-xl font-bold mb-2">How long does it take to see results?</h3>
              <p className="text-gray-700">
                Most clients see significant improvements within 3-6 months. However, some competitive 
                keywords may take longer. I'll give you realistic timelines during our strategy call.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Do you guarantee #1 rankings?</h3>
              <p className="text-gray-700">
                While I can't guarantee specific rankings (no one can), I can guarantee that I'll use 
                the same proven strategies that have gotten 20+ sites to #1 in Google.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What industries do you work with?</h3>
              <p className="text-gray-700">
                I work with all industries, but I specialize in B2B services, e-commerce, 
                and local businesses. If you're not sure if I can help, book a free call.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-700">
                Yes, both services are month-to-month with no long-term contracts. 
                You can cancel with 30 days notice.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
