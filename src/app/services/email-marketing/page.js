import Button from '../../../components/Button';

export default function EmailMarketing() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{fontFamily: 'var(--font-poppins)'}}>
          E-mail Marketing
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8" style={{fontFamily: 'var(--font-poppins)'}}>
            Build and nurture your email list with campaigns that convert subscribers into loyal customers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>List Building</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Create irresistible lead magnets and opt-in forms that grow your email list rapidly.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Email Sequences</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Design automated email sequences that nurture leads and drive consistent sales.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Segmentation</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Segment your audience for personalized messaging that increases engagement and conversions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Analytics & Optimization</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Track performance and optimize your campaigns for maximum ROI and engagement.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button>
              Start Email Marketing <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
