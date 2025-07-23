import Button from '../../../components/Button';

export default function KlaviyoBlueprint() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily: 'var(--font-poppins)', color: 'rgb(140, 40, 145)'}}>
            Master Klaviyo&apos;s Email Marketing Secrets
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto" style={{fontFamily: 'var(--font-poppins)'}}>
            Master email marketing with Klaviyo using the exact system that generates millions in revenue. Learn advanced automation, segmentation, and personalization strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button as="a" href="https://buy.stripe.com/test_00g9DL2Hn7Ry5QQ5kk">
              Get Klaviyo Blueprint <span>→</span>
            </Button>
            <Button variant="secondary">
              Watch Preview
            </Button>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-gray-50 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{fontFamily: 'var(--font-poppins)', color: 'rgb(140, 40, 145)'}}>
            What You'll Master
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Email Automation</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Build sophisticated email flows that convert subscribers into customers automatically, 24/7.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Advanced Segmentation</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Create hyper-targeted segments based on behavior, purchase history, and engagement patterns.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Revenue Optimization</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Maximize email revenue with proven strategies for cart abandonment, win-back campaigns, and upsells.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content Preview */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{fontFamily: 'var(--font-poppins)', color: 'rgb(140, 40, 145)'}}>
            Course Curriculum
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Module 1: Klaviyo Setup & Strategy</h3>
              <ul className="space-y-2 text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                <li>• Account setup and integration</li>
                <li>• List building strategies</li>
                <li>• Email design best practices</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Module 2: Automation Flows</h3>
              <ul className="space-y-2 text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                <li>• Welcome series that converts</li>
                <li>• Abandoned cart recovery</li>
                <li>• Post-purchase sequences</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Module 3: Advanced Strategies</h3>
              <ul className="space-y-2 text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                <li>• Behavioral segmentation</li>
                <li>• A/B testing and optimization</li>
                <li>• Revenue attribution and analytics</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button as="a" href="https://buy.stripe.com/test_00g9DL2Hn7Ry5QQ5kk">
              Start Learning Klaviyo <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
