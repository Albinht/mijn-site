import Button from '../../../components/Button';

export default function SEO() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{fontFamily: 'var(--font-poppins)'}}>
          SEO Services
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8" style={{fontFamily: 'var(--font-poppins)'}}>
            Get your business found by customers who are actively searching for what you offer. We&apos;ll optimize your website to rank higher in Google and drive qualified organic traffic.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Keyword Research</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Find untapped niches and high-converting keywords that your competitors are missing.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Content Strategy</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Create content that ranks and converts, following my exact blueprint for SEO success.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Link Building</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Build powerful backlinks that boost your domain authority and search rankings.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-poppins)'}}>Technical SEO</h3>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-poppins)'}}>
                Optimize your website&apos;s technical foundation for maximum search engine visibility.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button>
              Get Started with SEO <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
