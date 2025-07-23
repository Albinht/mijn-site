import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../assets/graph.png'
import avatarImage from '../../assets/avatar.png'
import masterSeoImage from '../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../assets/Keyword_research.png'
import contentRanksImage from '../../assets/content that ranks.png'
import Button from '../../components/Button'
import ReviewSlider from '../../components/ReviewSlider'
import FeatureSection from '../../components/FeatureSection'
import CurriculumSection from '../../components/CurriculumSection'

export default function MarketingBarneveld() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-8 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Barneveld</span><br />
            Dominate local search results
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Ready to dominate the Barneveld market?</strong><br />
            I help local businesses in Barneveld get found online and attract more customers through proven digital marketing strategies.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Local SEO optimization for Barneveld businesses</li>
            <li>✓ Google Ads campaigns targeting Barneveld customers</li>
            <li>✓ Proven strategies that work for local markets</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Learn More
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Serving Barneveld and surrounding areas</p>
          <p className="mt-2 text-xs text-green-600">📞 Ready to grow your business? Call me directly: +31 6 48728828</p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={graphImage}
              alt="Marketing growth in Barneveld"
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src={avatarImage}
              alt="Albin - Marketing Expert Barneveld"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* WHAT I CAN DO FOR YOUR BARNEVELD BUSINESS */}
      <FeatureSection 
        title="How I Help Barneveld Businesses"
        subtitle="Local Marketing Services"
        features={[
          {
            badge: "Local SEO",
            title: "Dominate Local Search Results",
            description: "Get your Barneveld business found when locals search for your services. I&apos;ll optimize your Google My Business and website to rank #1 for local searches.",
            visualTitle: "Local Rankings",
            visualSubtitle: "Be found by locals",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Target Barneveld Customers",
            description: "Reach potential customers in Barneveld and surrounding areas with targeted Google Ads campaigns. Only pay when locals click on your ads.",
            visualTitle: "Local Ads",
            visualSubtitle: "Target your area",
            image: keywordResearchImage
          },
          {
            badge: "Growth",
            title: "Complete Digital Presence",
            description: "Build a strong online presence that attracts Barneveld customers. From website optimization to social media, I&apos;ll help you grow your local business.",
            visualTitle: "Local Growth",
            visualSubtitle: "Dominate your market",
            image: contentRanksImage
          }
        ]}
      />

      {/* REVIEW SLIDER */}
      <ReviewSlider />

      {/* LOCAL SERVICES SECTION */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Services in <span className="bg-[#F7D8FA] px-2 rounded italic">Barneveld</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive digital marketing for local businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Local SEO */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local SEO Barneveld</h3>
              <p className="text-gray-600 mb-6">
                Get found when locals search for your services. Dominate Google Maps and local search results.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google My Business optimization</li>
                <li>✓ Local keyword targeting</li>
                <li>✓ Local directory listings</li>
                <li>✓ Customer review management</li>
              </ul>
            </div>

            {/* Google Ads */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Barneveld</h3>
              <p className="text-gray-600 mb-6">
                Target customers in Barneveld and surrounding areas with profitable Google Ads campaigns.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Local campaign setup</li>
                <li>✓ Geographic targeting</li>
                <li>✓ Conversion tracking</li>
                <li>✓ Performance optimization</li>
              </ul>
            </div>

            {/* Website Design */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Design</h3>
              <p className="text-gray-600 mb-6">
                Professional websites that convert Barneveld visitors into customers.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Mobile-responsive design</li>
                <li>✓ Fast loading speeds</li>
                <li>✓ Local business focus</li>
                <li>✓ Conversion optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to <span className="bg-[#F7D8FA] px-2 rounded italic">dominate</span> Barneveld?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how I can help your Barneveld business attract more local customers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Me Directly</h3>
              <p className="text-gray-600 mb-4">Ready to get started? Give me a call for a free consultation.</p>
              <a 
                href="tel:+31648728828" 
                className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📞 +31 6 48728828
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Me</h3>
              <p className="text-gray-600 mb-4">Prefer WhatsApp? Send me a message and I&apos;ll respond quickly.</p>
              <a 
                href="https://wa.me/31648728828" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Serving Barneveld & Surrounding Areas</h3>
            <p className="text-gray-600">
              Ede • Amersfoort • Leusden • Nijkerk • Bennekom • Lunteren • Voorthuizen • Kootwijkerbroek
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
