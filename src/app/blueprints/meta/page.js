import Button from '../../../components/Button';

export default function MetaBlueprint() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily: 'var(--font-poppins)', color: 'rgb(140, 40, 145)'}}>
            Meta Blueprint
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto" style={{fontFamily: 'var(--font-poppins)'}}>
            Master Facebook and Instagram advertising with the exact strategies I use to scale profitable campaigns. Learn advanced targeting, creative testing, and optimization techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button as="a" href="https://buy.stripe.com/test_00g9DL2Hn7Ry5QQ5kk">
              Get Meta Blueprint <span>→</span>
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
            What You&apos;ll Master
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Creative Strategy</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Create high-converting video and image ads that stop the scroll and drive action using proven creative frameworks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Audience Targeting</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Master Meta&apos;s Advertising Platform&apos;s targeting including lookalikes, custom audiences, and interest-based targeting for maximum ROI.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Campaign Scaling</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Scale winning campaigns profitably using advanced budget optimization, bid strategies, and campaign structures.
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
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Module 1: Meta Ads Fundamentals</h3>
              <ul className="space-y-2 text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                <li>• Business Manager setup</li>
                <li>• Pixel installation and events</li>
                <li>• Campaign objectives and structure</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Module 2: Creative & Targeting</h3>
              <ul className="space-y-2 text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                <li>• High-converting ad creatives</li>
                <li>• Advanced audience research</li>
                <li>• Custom and lookalike audiences</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-poppins)'}}>Module 3: Optimization & Scaling</h3>
              <ul className="space-y-2 text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                <li>• Campaign optimization strategies</li>
                <li>• Scaling profitable campaigns</li>
                <li>• Advanced analytics and reporting</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button as="a" href="https://buy.stripe.com/test_00g9DL2Hn7Ry5QQ5kk">
              Start Learning Meta Ads <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
