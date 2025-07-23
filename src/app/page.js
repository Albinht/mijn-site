import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '../assets/avatar.png'
import graphImage from '../assets/graph.png'
import masterSeoImage from '../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../assets/Keyword_research.png'
import contentRanksImage from '../assets/content that ranks.png'
import Button from '../components/Button'
import FeatureSection from '../components/FeatureSection'
import ReviewSlider from '../components/ReviewSlider'

export const metadata = {
  title: 'Digital Marketing Services | Niblah - SEO, Google Ads & More',
  description: 'Professional digital marketing services to grow your business online. Expert SEO, Google Ads management, and website optimization. Get more customers and increase revenue.',
  keywords: 'digital marketing services, SEO expert, Google Ads management, website optimization, online marketing consultant, digital marketing agency',
  openGraph: {
    title: 'Digital Marketing Services | Niblah',
    description: 'Professional digital marketing services to grow your business online. Expert SEO, Google Ads management, and website optimization.',
    images: ['/avatar.png'],
  },
}

// Service reviews data
const serviceReviews = [
  {
    name: 'Sarah Chen',
    company: 'E-commerce Store Owner',
    rating: 5,
    text: 'Albin transformed our online store. Organic traffic increased 300% and revenue doubled in just 4 months. His SEO strategies are incredible!'
  },
  {
    name: 'Marcus Johnson',
    company: 'SaaS Startup',
    rating: 5,
    text: 'Our Google Ads were bleeding money until Albin optimized them. Now we have a 4x ROAS and consistent lead flow. Best investment we made.'
  },
  {
    name: 'Lisa Rodriguez',
    company: 'Local Business',
    rating: 5,
    text: 'From page 3 to #1 in Google in 6 months. Albin knows exactly what works and delivers results that speak for themselves.'
  },
  {
    name: 'David Park',
    company: 'Digital Agency',
    rating: 5,
    text: 'We hired Albin to scale our clients\' campaigns. His systematic approach and attention to detail is unmatched. Highly recommend!'
  },
  {
    name: 'Emma Thompson',
    company: 'Online Retailer',
    rating: 5,
    text: 'Conversion rate went from 1.2% to 4.8% after Albin optimized our landing pages and marketing funnels. ROI was immediate.'
  },
  {
    name: 'James Wilson',
    company: 'B2B Company',
    rating: 5,
    text: 'Albin helped us dominate our niche. Lead quality improved dramatically and our cost per acquisition dropped by 60%.'
  }
];

const moreServiceReviews = [
  {
    name: 'Rachel Green',
    company: 'Fashion Brand',
    rating: 5,
    text: 'Our brand visibility skyrocketed after working with Albin. His content strategy brought us from unknown to industry leader.'
  },
  {
    name: 'Tom Anderson',
    company: 'Tech Startup',
    rating: 5,
    text: 'Albin\'s Google Ads expertise saved our startup. We went from burning cash to profitable customer acquisition in weeks.'
  },
  {
    name: 'Sophie Miller',
    company: 'Service Business',
    rating: 5,
    text: 'Local SEO was a mystery until Albin explained it. Now we dominate local search and bookings increased 250%.'
  },
  {
    name: 'Alex Kumar',
    company: 'E-learning Platform',
    rating: 5,
    text: 'Organic traffic grew from 5K to 50K monthly visitors. Albin\'s SEO strategies are data-driven and incredibly effective.'
  },
  {
    name: 'Maria Santos',
    company: 'Consulting Firm',
    rating: 5,
    text: 'Our website finally converts! Albin optimized our entire funnel and our lead generation increased by 400%.'
  },
  {
    name: 'Chris Taylor',
    company: 'SaaS Company',
    rating: 5,
    text: 'Working with Albin was a game-changer. His strategic approach to digital marketing delivered results beyond our expectations.'
  }
];

const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 flex-shrink-0 w-96 mx-3">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>
      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
    <h3 className="font-bold text-lg mb-1">{review.name}</h3>
    <p className="text-sm text-gray-500 mb-3">{review.company}</p>
    <p className="text-gray-600 text-sm">{review.text}</p>
  </div>
);

const ServiceReviewSlider = () => {
  const duplicatedReviews = [...serviceReviews, ...serviceReviews];
  const duplicatedMoreReviews = [...moreServiceReviews, ...moreServiceReviews];

  return (
    <section className="bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Client <span className="bg-[#F7D8FA] px-2 rounded italic">Success</span> Stories</h2>
        
        {/* First slider - scrolling left */}
        <div className="relative w-full overflow-hidden mb-8">
            <div 
              className="flex"
              style={{
                animation: 'scroll 25s linear infinite',
                width: 'calc(200%)'
              }}
            >
                {duplicatedReviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
        
        {/* Second slider - scrolling right */}
        <div className="relative w-full overflow-hidden">
            <div 
              className="flex"
              style={{
                animation: 'scrollReverse 25s linear infinite',
                width: 'calc(200%)'
              }}
            >
                {duplicatedMoreReviews.map((review, index) => (
                    <ReviewCard key={`more-${index}`} review={review} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-4 md:py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* TEXT SECTION */}
          <div>
            <h1 className="text-4xl md:text-4xl font-bold leading-tight text-gray-900">
              I help businesses <span className="bg-[#F7D8FA] px-2 rounded italic">dominate</span><br />
              Google and scale profitably
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Ready to transform your digital presence into a revenue machine?</strong><br />
              I specialize in SEO, Google Ads, and conversion optimization that delivers measurable results for ambitious businesses.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Proven strategies that have scaled 100+ businesses</li>
              <li>✓ Data-driven approach with transparent reporting</li>
              <li>✓ Focus on ROI and sustainable growth</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button as={Link} href="/work-with-me" className="text-sm px-4 py-2">
                Work with me <span>→</span>
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Available
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Trusted by 100+ businesses to drive their growth</p> 
            <p className="mt-4 text-sm text-red-600">Urgent questions? Send me a WhatsApp on +31 6 48728828</p>
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

      {/* WHAT I CAN DO FOR YOU SECTION */}
      <FeatureSection 
        title="What I Can Do For You"
        subtitle="My Services"
        features={[
          {
            badge: "SEO",
            title: "Dominate Google Search Results",
            description: "Get your business to #1 in Google with proven SEO strategies. I'll optimize your website for maximum organic traffic and qualified leads that convert into customers.",
            visualTitle: "SEO Growth",
            visualSubtitle: "Rank higher, earn more",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Profitable Paid Advertising",
            description: "Scale your business with Google Ads campaigns that deliver consistent ROI. I'll set up, optimize, and manage your ads to maximize your return on investment.",
            visualTitle: "Paid Ads",
            visualSubtitle: "Scale profitably",
            image: keywordResearchImage
          },
          {
            badge: "Growth",
            title: "Complete Digital Marketing",
            description: "Transform your business with a comprehensive digital marketing strategy. From SEO to paid ads to conversion optimization - I'll help you grow sustainably.",
            visualTitle: "Full Service",
            visualSubtitle: "End-to-end growth",
            image: contentRanksImage
          }
        ]}
      />

      {/* Client Reviews */}
      <ServiceReviewSlider />

      {/* Calendly Embed Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Book a <span className="bg-[#F7D8FA] px-2 rounded italic">Free</span> consultation</h2>
          <p className="text-xl text-gray-600 mb-8">
          No commitment required • Free 30-minute consultation          </p>
          
          {/* Calendly Embed */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <iframe
              src="https://calendly.com/niblah/30min" // Replace with your actual Calendly link
              width="100%"
              height="600"
              frameBorder="0"
              title="Schedule a consultation"
              className="rounded-lg"
            ></iframe>
          </div>
          
        </div>
      </section>
    </main>
  )
}
