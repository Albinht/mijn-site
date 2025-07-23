import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../../assets/graph.png' // voeg hier je eigen afbeelding toe
import avatarImage from '../../../assets/avatar.png' // profielfoto in overlay
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'
import CurriculumSection from '../../../components/CurriculumSection'

export const metadata = {
  title: 'SEO Blueprint Course | Learn SEO From Scratch - Albin Marketing',
  description: 'Master SEO with my comprehensive blueprint course. Learn keyword research, content optimization, link building, and technical SEO. Get your website ranking #1 in Google.',
  keywords: 'SEO course, SEO blueprint, learn SEO, SEO training, keyword research course, SEO tutorial, search engine optimization course',
  openGraph: {
    title: 'SEO Blueprint Course | Learn SEO From Scratch',
    description: 'Master SEO with my comprehensive blueprint course. Learn keyword research, content optimization, link building, and technical SEO.',
    images: ['/avatar.png'],
  },
}

export default function SEOBlueprint() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-8 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            SEO is no <span className="bg-[#F7D8FA] px-2 rounded italic">Rocket science</span><br />
            my blueprint to rank #1 in Google
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Consistently ranking #1 in Google is simple.</strong><br />
            All my knowledge after ranking 20+ sites to #1 in Google bundled in a simple blueprint you can follow.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ The only blueprint that guarrentees your website on position #1 in Google</li>
            <li>✓ Full video course + personal support for questions</li>
            <li>✓ Cheapest price on the internet</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button as={Link} href="https://buy.stripe.com/dRmdR8djPa1NcZbcetdQQ00">
              Learn to Rank #1 for 49$ <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Work with me
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">100+ copies sold already</p>
          <p className="mt-2 text-xs text-red-500">🧾 Questions? The service is as good as the course, Whatsapp me +31648728828 <a href="https://wa.link/vk8v1j" className="underline">here</a>.</p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={graphImage}
              alt="Graph showing SEO growth"
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
        subtitle="Blueprint Content"
        features={[
          {
            badge: "Foundation",
            title: "Master SEO Fundamentals",
            description: "Learn the core principles of SEO that actually matter. No fluff, no outdated tactics - just the proven strategies that get results in 2025.",
            visualTitle: "SEO Basics",
            visualSubtitle: "Build your foundation",
            image: masterSeoImage
          },
          {
            badge: "Strategy",
            title: "Keyword Research That Works",
            description: "Discover how to find untapped keywords with high potential. I'll show you the exact tools and methods I use to identify opportunities your competitors miss.",
            visualTitle: "Keyword Tools",
            visualSubtitle: "Find hidden gems",
            image: keywordResearchImage
          },
          {
            badge: "Implementation",
            title: "Content That Ranks #1",
            description: "Create content that Google loves and users engage with. Learn my proven content framework that has helped 20+ sites reach the top of search results.",
            visualTitle: "Content Strategy",
            visualSubtitle: "Rank higher faster",
            image: contentRanksImage
          }
        ]}
      />

      {/* REVIEW SLIDER */}
      <ReviewSlider />

      {/* CURRICULUM SECTION */}
      <CurriculumSection />

    </main>
  )
}
