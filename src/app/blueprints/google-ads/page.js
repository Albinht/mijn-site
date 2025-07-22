import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../../assets/google ads header.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import googleAdsArchitectureImage from '../../../assets/google ads account architecture.png'
import biddingGoogleAdsImage from '../../../assets/Bidding google ads.png'
import highConvertingAdCopyImage from '../../../assets/High-converting ad copy.png'
import Button from '../../../components/Button'
import FeatureSection from '../../../components/FeatureSection'
import CurriculumSection from '../../../components/CurriculumSection'

// Google Ads specific reviews
const googleAdsReviews = [
  {
    name: 'AdMaster Pro',
    rating: 5,
    text: 'Went from losing money on Google Ads to 4x ROAS in just 3 weeks. The bidding strategies alone saved me thousands in wasted spend.',
  },
  {
    name: 'E-commerce King',
    rating: 5,
    text: 'Finally understand Quality Score! My campaigns now run at 30% lower cost with better ad positions. This course is pure gold.',
  },
  {
    name: 'Digital Agency',
    rating: 5,
    text: 'Scaled from $5k to $50k monthly ad spend profitably. The account structure method changed everything for our clients.',
  },
  {
    name: 'Local Business',
    rating: 5,
    text: 'The targeting strategies in this course are insane. We now get leads for 60% less cost than before. Best investment ever.',
  },
  {
    name: 'SaaS Startup',
    rating: 4.5,
    text: 'Our customer acquisition cost dropped by 40% after implementing the optimization techniques. Clear, actionable, and it works.',
  },
  {
    name: 'Retail Store',
    rating: 5,
    text: 'Shopping campaigns were always a mystery to me. Now I"m generating 6x more revenue from the same budget. Amazing course!',
  },
];

const moreGoogleAdsReviews = [
  {
    name: 'Marketing Expert',
    rating: 5,
    text: 'The ad copy formulas in this course are incredible. My click-through rates doubled and conversion rates went up 150%.',
  },
  {
    name: 'Online Store',
    rating: 5,
    text: 'I was burning through budget with no results. Now every campaign is profitable from day one. This blueprint is everything.',
  },
  {
    name: 'Lead Gen Pro',
    rating: 4.5,
    text: 'The audience targeting section alone was worth the entire course price. My cost per lead dropped from $50 to $15.',
  },
  {
    name: 'Agency Owner',
    rating: 5,
    text: 'We use this course to train all our Google Ads specialists. It\'s the most practical and up-to-date training available.',
  },
  {
    name: 'Consultant',
    rating: 5,
    text: 'The scaling strategies are phenomenal. I helped a client go from $10k to $100k monthly revenue using these exact methods.',
  },
  {
    name: 'Small Business',
    rating: 4.5,
    text: 'As a complete beginner, this course made Google Ads finally make sense. Now I\'m running profitable campaigns confidently.',
  },
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
    <h3 className="font-bold text-lg mb-2">{review.name}</h3>
    <p className="text-gray-600 text-sm">{review.text}</p>
  </div>
);

const GoogleAdsReviewSlider = () => {
  const duplicatedReviews = [...googleAdsReviews, ...googleAdsReviews];
  const duplicatedMoreReviews = [...moreGoogleAdsReviews, ...moreGoogleAdsReviews];

  return (
    <section className="bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">The <span className="bg-[#F7D8FA] px-2 rounded italic">reviews</span> don't lie</h2>
        
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

export default function GoogleAdsBlueprint() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-8 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Google Ads is <span className="bg-[#F7D8FA] px-2 rounded italic">easy</span><br />
            my blueprint to profitable campaigns
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Running profitable Google Ads campaigns is simple.</strong><br />
            All my knowledge after managing $2M+ in ad spend bundled in a simple blueprint you can follow.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ The only blueprint that guarantees profitable Google Ads campaigns</li>
            <li>✓ Full video course + personal support for questions</li>
            <li>✓ Proven strategies from $2M+ ad spend</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button as={Link} href="https://buy.stripe.com/cNi28qa7D0rd8IV92hdQQ01">
              Master Google Ads for 49$ <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Work with me
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">50+ students already scaling this month</p>
          <p className="mt-2 text-xs text-red-500">🧾 Questions? The service is as good as the course, Whatsapp me +31648728828 <a href="https://wa.link/vk8v1j" className="underline">here</a>.</p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={graphImage}
              alt="Google Ads performance graph"
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

      {/* WHAT YOU'LL LEARN SECTION */}
      <FeatureSection 
        title="What You'll Learn"
        subtitle="Google Ads Mastery"
        features={[
          {
            badge: "Foundation",
            title: "Google Ads Account Architecture",
            description: "Master the perfect campaign structure that Google rewards with higher Quality Scores and lower costs. Learn my proven 3-tier system for organizing campaigns, ad groups, and keywords.",
            visualTitle: "Account Setup",
            visualSubtitle: "Structure for success",
            image: googleAdsArchitectureImage
          },
          {
            badge: "Strategy",
            title: "Smart Bidding & Budget Optimization",
            description: "Discover the bidding strategies that actually work in 2025. Learn when to use Target CPA, Target ROAS, and Maximize Conversions to scale profitably without wasting budget.",
            visualTitle: "Bidding Mastery",
            visualSubtitle: "Optimize for profit",
            image: biddingGoogleAdsImage
          },
          {
            badge: "Implementation",
            title: "High-Converting Ad Copy Formulas",
            description: "Write ads that stop the scroll and drive clicks using my proven ad copy frameworks. Plus learn landing page optimization secrets that turn clicks into customers.",
            visualTitle: "Ad Copy Secrets",
            visualSubtitle: "Convert like crazy",
            image: highConvertingAdCopyImage
          }
        ]}
      />

      {/* GOOGLE ADS REVIEW SLIDER */}
      <GoogleAdsReviewSlider />

      {/* GOOGLE ADS CURRICULUM SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F7D8FA] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              What you'll learn
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Google Ads Mastery Curriculum
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From account setup to scaling profitable campaigns. Everything you need to master Google Ads in 2025.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">1. Google Ads Foundation</h3>
                <span className="text-sm text-gray-500">45 min</span>
              </div>
              <p className="text-gray-600 mb-6">Master the fundamentals and set up your account for success from day one.</p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">1.1</span>
                      <h4 className="font-semibold text-gray-900">Account Setup & Structure</h4>
                    </div>
                    <span className="text-sm text-gray-500">15 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Learn the perfect account architecture that Google rewards with higher Quality Scores.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">1.2</span>
                      <h4 className="font-semibold text-gray-900">Keyword Research for Ads</h4>
                    </div>
                    <span className="text-sm text-gray-500">20 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Find profitable keywords with buyer intent and avoid the expensive mistakes.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">1.3</span>
                      <h4 className="font-semibold text-gray-900">Quality Score Mastery</h4>
                      <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium">Essential</span>
                    </div>
                    <span className="text-sm text-gray-500">10 min</span>
                  </div>
                  <p className="text-sm text-gray-600">The secret to paying 50% less for clicks while getting better ad positions.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">2. Campaign Creation & Optimization</h3>
                <span className="text-sm text-gray-500">60 min</span>
              </div>
              <p className="text-gray-600 mb-6">Build campaigns that convert from day one and optimize for maximum ROI.</p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">2.1</span>
                      <h4 className="font-semibold text-gray-900">Search Campaign Setup</h4>
                    </div>
                    <span className="text-sm text-gray-500">25 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Create search campaigns that capture high-intent traffic and convert immediately.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">2.2</span>
                      <h4 className="font-semibold text-gray-900">Smart Bidding Strategies</h4>
                    </div>
                    <span className="text-sm text-gray-500">20 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Master Target CPA, Target ROAS, and Maximize Conversions for profitable scaling.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">2.3</span>
                      <h4 className="font-semibold text-gray-900">Ad Copy That Converts</h4>
                    </div>
                    <span className="text-sm text-gray-500">15 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Write ads that stop the scroll and drive clicks using proven psychological triggers.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">3. Advanced Scaling & Optimization</h3>
                <span className="text-sm text-gray-500">40 min</span>
              </div>
              <p className="text-gray-600 mb-6">Scale winning campaigns and optimize for maximum profitability.</p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">3.1</span>
                      <h4 className="font-semibold text-gray-900">Audience Targeting Mastery</h4>
                    </div>
                    <span className="text-sm text-gray-500">15 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Advanced audience targeting, remarketing, and customer match strategies.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">3.2</span>
                      <h4 className="font-semibold text-gray-900">Campaign Scaling Secrets</h4>
                    </div>
                    <span className="text-sm text-gray-500">15 min</span>
                  </div>
                  <p className="text-sm text-gray-600">How to scale profitable campaigns without killing performance or increasing costs.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">3.3</span>
                      <h4 className="font-semibold text-gray-900">Performance Analysis & Optimization</h4>
                    </div>
                    <span className="text-sm text-gray-500">10 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Read the data that matters and make optimization decisions that increase ROI.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-block">
              <Button 
                as={Link} 
                href="https://buy.stripe.com/cNi28qa7D0rd8IV92hdQQ01"
                className="text-xl px-0 py-0 min-w-[300px] font-bold"
              >
                Master Google Ads Today <span>→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
