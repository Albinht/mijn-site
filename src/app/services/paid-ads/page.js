import Button from '../../../components/Button';

export default function PaidAds() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{fontFamily: 'var(--font-poppins)'}}>
          Paid Ads
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8" style={{fontFamily: 'var(--font-poppins)'}}>
            Scale your business with high-converting paid advertising campaigns across Google, Facebook, and other platforms.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Google Ads</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Create profitable Google Ads campaigns that target high-intent keywords and drive qualified traffic.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Facebook & Instagram Ads</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Leverage social media advertising to reach your ideal audience with compelling creative content.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Campaign Optimization</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Continuously optimize ad performance to maximize ROI and reduce cost per acquisition.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Landing Page Design</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Design high-converting landing pages that turn ad clicks into customers.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button>
              Launch Paid Campaigns <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
