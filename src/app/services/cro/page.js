import Button from '../../../components/Button';

export default function CRO() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{fontFamily: 'var(--font-poppins)'}}>
          CRO (Conversion Rate Optimization)
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8" style={{fontFamily: 'var(--font-poppins)'}}>
            Maximize your website's potential by optimizing every element to convert more visitors into customers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>A/B Testing</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Test different versions of your pages to find what converts best for your audience.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>User Experience Analysis</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Analyze user behavior and identify friction points that prevent conversions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Landing Page Optimization</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Optimize your landing pages for maximum conversion rates and better user engagement.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Conversion Funnel Analysis</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Map and optimize your entire conversion funnel to reduce drop-offs and increase sales.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button>
              Optimize Conversions <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
