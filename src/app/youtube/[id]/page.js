import Link from 'next/link'
import Image from 'next/image'
import Button from '../../../components/Button'
import avatarImage from '../../../assets/avatar.png'
import productDescriptionsImage from '../../../assets/Product descriptions.png'
import ecomSeoFrameworkImage from '../../../assets/E-com SEO framework.png'
import translateVideoImage from '../../../assets/translate video.png'
import { notFound } from 'next/navigation'

// Blog posts data - same as main page (in real app, this would come from a CMS or database)
const blogPosts = [
  {
    id: 1,
    title: "How to Write Product Descriptions That Rank on Google",
    excerpt: "Master the art of writing product descriptions that not only convert customers but also rank high on Google.",
    content: `
      <h2>Why Product Descriptions Matter for SEO</h2>
      <p>Most e-commerce stores treat product descriptions as an afterthought. This is a huge mistake. Well-optimized product descriptions can:</p>
      <ul>
        <li>Rank for high-intent commercial keywords</li>
        <li>Increase conversion rates by 30-50%</li>
        <li>Reduce bounce rates and improve user engagement</li>
        <li>Build topical authority for your brand</li>
      </ul>

      <h2>My Product Description Framework</h2>
      <p>I use a proven 5-step framework for writing product descriptions that rank and convert:</p>
      
      <h3>1. Keyword Research & Intent Analysis</h3>
      <p>Before writing a single word, I research:</p>
      <ul>
        <li>Primary commercial keywords (product name + modifiers)</li>
        <li>Secondary keywords (features, benefits, use cases)</li>
        <li>Long-tail keywords (questions customers ask)</li>
        <li>Competitor analysis to find content gaps</li>
      </ul>

      <h3>2. Structure for Scanability</h3>
      <p>Online shoppers scan, they don't read. Structure your descriptions with:</p>
      <ul>
        <li>Compelling headline with primary keyword</li>
        <li>Bullet points for key features</li>
        <li>Short paragraphs (2-3 sentences max)</li>
        <li>Bold text for important benefits</li>
      </ul>

      <h3>3. Benefits Over Features</h3>
      <p>Don't just list what the product has, explain what it does for the customer:</p>
      <ul>
        <li>Feature: "Waterproof material"</li>
        <li>Benefit: "Stay dry and comfortable in any weather"</li>
      </ul>

      <h3>4. Social Proof Integration</h3>
      <p>Weave social proof naturally into descriptions:</p>
      <ul>
        <li>"Trusted by 10,000+ customers"</li>
        <li>"#1 bestseller in category"</li>
        <li>"Featured in [publication]"</li>
      </ul>

      <h3>5. Technical SEO Optimization</h3>
      <p>Don't forget the technical aspects:</p>
      <ul>
        <li>Include primary keyword in first 100 words</li>
        <li>Use semantic keywords naturally</li>
        <li>Optimize meta descriptions</li>
        <li>Add structured data markup</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ol>
        <li>Copying manufacturer descriptions</li>
        <li>Keyword stuffing</li>
        <li>Focusing only on features</li>
        <li>Making descriptions too short or too long</li>
        <li>Ignoring mobile users</li>
      </ol>

      <h2>Results You Can Expect</h2>
      <p>When you implement this framework correctly:</p>
      <ul>
        <li>30-50% increase in organic traffic to product pages</li>
        <li>20-40% improvement in conversion rates</li>
        <li>Better rankings for commercial keywords</li>
        <li>Reduced bounce rates and increased time on page</li>
      </ul>
    `,
    videoId: "k2-w1UWjBEU",
    publishDate: "2024-01-20",
    readTime: "12 min read",
    category: "E-commerce SEO",
    thumbnail: productDescriptionsImage,
    tags: ["SEO", "E-commerce", "Product Descriptions", "Copywriting"]
  },
  {
    id: 2,
    title: "Google Ads Mistakes That Are Killing Your ROI (And How to Fix Them)",
    excerpt: "Stop wasting money on Google Ads! In this video, I reveal the 5 most common mistakes I see businesses make with their Google Ads campaigns.",
    content: `
      <h2>The Problem with Most Google Ads Campaigns</h2>
      <p>I've audited hundreds of Google Ads accounts, and I see the same mistakes over and over again. These mistakes are costing businesses thousands of euros in wasted ad spend.</p>

      <h2>Mistake #1: Poor Account Structure</h2>
      <p>Most businesses throw all their keywords into one campaign and one ad group. This kills your Quality Score and makes optimization impossible.</p>
      <p><strong>The Fix:</strong> Use Single Keyword Ad Groups (SKAGs) or tightly themed ad groups with 5-10 related keywords maximum.</p>

      <h2>Mistake #2: Ignoring Negative Keywords</h2>
      <p>Without negative keywords, you're showing ads for irrelevant searches and wasting budget on clicks that will never convert.</p>
      <p><strong>The Fix:</strong> Build a comprehensive negative keyword list and review search terms weekly.</p>

      <h2>Mistake #3: Wrong Bidding Strategy</h2>
      <p>Using the wrong bidding strategy for your campaign goals is like driving with the handbrake on.</p>
      <p><strong>The Fix:</strong> Match your bidding strategy to your goals:
      <ul>
        <li>Target CPA for lead generation</li>
        <li>Target ROAS for e-commerce</li>
        <li>Maximize Conversions for new campaigns</li>
      </ul></p>

      <h2>Mistake #4: Generic Ad Copy</h2>
      <p>Generic, boring ad copy gets ignored. Your ads need to stand out and speak directly to your audience's pain points.</p>
      <p><strong>The Fix:</strong> Use emotional triggers, specific benefits, and strong calls-to-action in your ad copy.</p>

      <h2>Mistake #5: Not Tracking Conversions Properly</h2>
      <p>If you can't measure it, you can't optimize it. Poor conversion tracking leads to poor campaign performance.</p>
      <p><strong>The Fix:</strong> Set up proper conversion tracking for all important actions on your website.</p>

      <h2>The Results</h2>
      <p>When you fix these mistakes, you typically see:</p>
      <ul>
        <li>30-50% improvement in Quality Score</li>
        <li>20-40% reduction in cost per click</li>
        <li>50-100% improvement in conversion rates</li>
        <li>Overall ROI improvement of 200-300%</li>
      </ul>
    `,
    videoId: "dQw4w9WgXcQ",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    category: "Google Ads",
    thumbnail: "/api/placeholder/600/400",
    tags: ["Google Ads", "PPC", "ROI", "Optimization"]
  },
  {
    id: 3,
    title: "My Complete Keyword Research Process (Free Tools Only)",
    excerpt: "You don't need expensive tools to do effective keyword research. In this comprehensive tutorial, I show you my complete keyword research process using only free tools.",
    content: `
      <h2>Why Free Tools Can Be Just as Effective</h2>
      <p>Everyone thinks you need expensive tools like Ahrefs or SEMrush to do proper keyword research. While these tools are great, you can achieve 80% of the results using completely free tools.</p>

      <h2>My 5-Step Free Keyword Research Process</h2>

      <h3>Step 1: Brainstorm Seed Keywords</h3>
      <p>Start with 5-10 broad topics related to your business. Think about what your customers would search for when they have the problem your product/service solves.</p>

      <h3>Step 2: Use Google Keyword Planner</h3>
      <p>Google's own tool is completely free and gives you search volume data directly from the source. Here's how to use it effectively:</p>
      <ul>
        <li>Enter your seed keywords</li>
        <li>Look for keywords with decent volume (500+ searches/month)</li>
        <li>Focus on commercial intent keywords</li>
        <li>Export the data for further analysis</li>
      </ul>

      <h3>Step 3: Analyze Google Search Results</h3>
      <p>Google's search results tell you everything you need to know about keyword difficulty and intent:</p>
      <ul>
        <li>Look at the top 10 results</li>
        <li>Check domain authority of ranking sites</li>
        <li>Analyze the type of content that ranks</li>
        <li>Look for SERP features (featured snippets, local pack, etc.)</li>
      </ul>

      <h3>Step 4: Use Google's "People Also Ask" and Related Searches</h3>
      <p>These sections are goldmines for long-tail keyword ideas:</p>
      <ul>
        <li>Scroll to the bottom of search results for "Related searches"</li>
        <li>Click on "People also ask" questions to expand them</li>
        <li>Use these for content ideas and long-tail keywords</li>
      </ul>

      <h3>Step 5: Competitor Analysis with Free Tools</h3>
      <p>Use these free methods to spy on your competitors:</p>
      <ul>
        <li>View page source to see their title tags and meta descriptions</li>
        <li>Use site:competitor.com in Google to see their indexed pages</li>
        <li>Check their blog content for keyword ideas</li>
        <li>Use Ubersuggest's free tier for basic competitor data</li>
      </ul>

      <h2>Organizing Your Keywords</h2>
      <p>Once you have your keyword list, organize them by:</p>
      <ul>
        <li><strong>Search Intent:</strong> Informational, Commercial, Transactional</li>
        <li><strong>Difficulty:</strong> Easy, Medium, Hard</li>
        <li><strong>Priority:</strong> High, Medium, Low</li>
        <li><strong>Content Type:</strong> Blog post, Landing page, Product page</li>
      </ul>

      <h2>Pro Tips for Better Results</h2>
      <ol>
        <li>Focus on long-tail keywords (3+ words) - they're easier to rank for</li>
        <li>Look for keywords with commercial intent if you want to make sales</li>
        <li>Don't ignore local keywords if you serve local markets</li>
        <li>Update your keyword research quarterly</li>
        <li>Track your rankings and adjust strategy based on results</li>
      </ol>
    `,
    videoId: "dQw4w9WgXcQ",
    publishDate: "2024-01-05",
    readTime: "15 min read",
    category: "SEO Tutorial",
    thumbnail: "/api/placeholder/600/400",
    tags: ["SEO", "Keyword Research", "Free Tools", "Tutorial"]
  },
  {
    id: 4,
    title: "Real Ecommerce SEO: My Framework for Long-Term Organic Growth",
    excerpt: "Discover my proven e-commerce SEO framework that drives sustainable organic growth. From technical optimization to content strategy, learn the complete system I use to scale online stores.",
    content: `
      <h2>Why Most E-commerce SEO Fails</h2>
      <p>Most e-commerce stores approach SEO wrong. They focus on quick wins instead of building a sustainable foundation. This leads to:</p>
      <ul>
        <li>Temporary rankings that disappear with algorithm updates</li>
        <li>High bounce rates and poor user experience</li>
        <li>Wasted resources on low-impact activities</li>
        <li>Inconsistent organic growth</li>
      </ul>

      <h2>My E-commerce SEO Framework</h2>
      <p>I've developed a systematic approach that focuses on long-term, sustainable growth. Here's the complete framework:</p>
      
      <h3>Phase 1: Technical Foundation (Weeks 1-4)</h3>
      <p>Before anything else, we need a solid technical foundation:</p>
      <ul>
        <li><strong>Site Speed Optimization:</strong> Target under 3 seconds load time</li>
        <li><strong>Mobile-First Design:</strong> Ensure perfect mobile experience</li>
        <li><strong>URL Structure:</strong> Clean, descriptive URLs with proper hierarchy</li>
        <li><strong>Internal Linking:</strong> Strategic link architecture for authority flow</li>
        <li><strong>Schema Markup:</strong> Product, review, and breadcrumb schemas</li>
      </ul>

      <h3>Phase 2: Keyword Research & Strategy (Weeks 5-6)</h3>
      <p>Strategic keyword research is the backbone of e-commerce SEO:</p>
      <ul>
        <li><strong>Commercial Keywords:</strong> Product and category-focused terms</li>
        <li><strong>Informational Keywords:</strong> "How to" and educational content</li>
        <li><strong>Long-tail Opportunities:</strong> Specific product variations and questions</li>
        <li><strong>Competitor Gap Analysis:</strong> Find keywords competitors are missing</li>
      </ul>

      <h3>Phase 3: On-Page Optimization (Weeks 7-10)</h3>
      <p>Optimize every page type for maximum impact:</p>
      <ul>
        <li><strong>Product Pages:</strong> Unique descriptions, optimized titles, rich media</li>
        <li><strong>Category Pages:</strong> Comprehensive guides with filtering options</li>
        <li><strong>Collection Pages:</strong> Curated product groupings with SEO focus</li>
        <li><strong>Blog Content:</strong> Educational content that drives traffic and links</li>
      </ul>

      <h3>Phase 4: Content Strategy (Weeks 11-16)</h3>
      <p>Content is what separates winners from losers in e-commerce SEO:</p>
      <ul>
        <li><strong>Buying Guides:</strong> Comprehensive guides for product categories</li>
        <li><strong>Comparison Content:</strong> "X vs Y" articles for competitive terms</li>
        <li><strong>FAQ Pages:</strong> Answer common customer questions</li>
        <li><strong>User-Generated Content:</strong> Reviews, Q&A, and customer photos</li>
      </ul>

      <h3>Phase 5: Link Building & Authority (Ongoing)</h3>
      <p>Build domain authority through strategic link acquisition:</p>
      <ul>
        <li><strong>Digital PR:</strong> Newsworthy campaigns and studies</li>
        <li><strong>Resource Page Links:</strong> Get listed on industry resource pages</li>
        <li><strong>Broken Link Building:</strong> Replace broken links with your content</li>
        <li><strong>Partnership Links:</strong> Strategic partnerships with complementary brands</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track these KPIs to measure your e-commerce SEO success:</p>
      <ul>
        <li><strong>Organic Revenue:</strong> Revenue directly from organic search</li>
        <li><strong>Organic Traffic Growth:</strong> Month-over-month traffic increases</li>
        <li><strong>Keyword Rankings:</strong> Rankings for target commercial keywords</li>
        <li><strong>Conversion Rate:</strong> Organic traffic conversion performance</li>
        <li><strong>Page Load Speed:</strong> Technical performance metrics</li>
      </ul>

      <h2>Timeline & Expectations</h2>
      <p>Here's what you can expect when following this framework:</p>
      <ul>
        <li><strong>Months 1-3:</strong> Technical improvements, foundation building</li>
        <li><strong>Months 4-6:</strong> Initial ranking improvements, traffic growth</li>
        <li><strong>Months 7-12:</strong> Significant traffic and revenue increases</li>
        <li><strong>Year 2+:</strong> Compound growth and market dominance</li>
      </ul>
    `,
    videoId: "7cshITRgi10",
    publishDate: "2024-01-15",
    readTime: "18 min read",
    category: "E-commerce SEO",
    thumbnail: ecomSeoFrameworkImage,
    tags: ["SEO", "E-commerce", "Framework", "Organic Growth"]
  },
  {
    id: 5,
    title: "Shopify Translate & Adapt: Add Unlimited Languages – Bulk Translation Hack",
    excerpt: "Unlock global markets with this Shopify translation hack! Learn how to add unlimited languages to your store using Translate & Adapt, plus my bulk translation method to save hours of work.",
    content: `
      <h2>Why International Expansion Matters</h2>
      <p>Most Shopify store owners are missing out on 70% of potential customers by only selling in one language. International expansion can:</p>
      <ul>
        <li>Increase revenue by 200-500% within 12 months</li>
        <li>Reduce dependency on single markets</li>
        <li>Access lower competition in international markets</li>
        <li>Build a truly global brand presence</li>
      </ul>

      <h2>The Shopify Translate & Adapt Solution</h2>
      <p>Shopify's native Translate & Adapt app is a game-changer for international expansion. Here's why it's better than third-party solutions:</p>
      
      <h3>Advantages of Native Translation</h3>
      <ul>
        <li><strong>No Monthly Fees:</strong> Unlike apps that charge per language</li>
        <li><strong>Better SEO:</strong> Native URL structure (/en/, /fr/, etc.)</li>
        <li><strong>Faster Loading:</strong> No external scripts slowing down your site</li>
        <li><strong>Complete Control:</strong> Edit any translation manually</li>
        <li><strong>Unlimited Languages:</strong> Add as many languages as you want</li>
      </ul>

      <h2>My Bulk Translation Hack</h2>
      <p>Here's my step-by-step process to translate your entire store in hours, not weeks:</p>
      
      <h3>Step 1: Export Your Content</h3>
      <p>Use Shopify's bulk export feature to get all your content in CSV format:</p>
      <ul>
        <li>Export products with all variants and descriptions</li>
        <li>Export collections and their descriptions</li>
        <li>Export pages and blog posts</li>
        <li>Export navigation menus and policies</li>
      </ul>

      <h3>Step 2: Bulk Translation with AI</h3>
      <p>Use AI tools for initial translation (I recommend Claude or ChatGPT):</p>
      <ul>
        <li>Create translation prompts for each content type</li>
        <li>Include context about your brand and target market</li>
        <li>Specify tone of voice and technical terminology</li>
        <li>Process in batches to maintain consistency</li>
      </ul>

      <h3>Step 3: Quality Control Process</h3>
      <p>Never publish AI translations without review:</p>
      <ul>
        <li>Use native speakers for final review</li>
        <li>Check cultural appropriateness</li>
        <li>Verify technical terms and measurements</li>
        <li>Test checkout process in each language</li>
      </ul>

      <h3>Step 4: SEO Optimization</h3>
      <p>Optimize translated content for local search:</p>
      <ul>
        <li>Research keywords in target language</li>
        <li>Adapt meta titles and descriptions</li>
        <li>Localize currency and pricing</li>
        <li>Add hreflang tags for proper indexing</li>
      </ul>

      <h2>Advanced Tips for Success</h2>
      <ul>
        <li><strong>Start with High-Value Markets:</strong> Focus on countries with strong purchasing power</li>
        <li><strong>Localize Payment Methods:</strong> Add popular local payment options</li>
        <li><strong>Cultural Adaptation:</strong> Adjust images and messaging for local culture</li>
        <li><strong>Legal Compliance:</strong> Update policies for local regulations</li>
        <li><strong>Customer Support:</strong> Provide support in local languages</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ol>
        <li>Using automatic translation without human review</li>
        <li>Ignoring cultural differences in marketing</li>
        <li>Not localizing pricing and shipping</li>
        <li>Forgetting to translate checkout and error messages</li>
        <li>Not setting up proper analytics tracking</li>
      </ol>

      <h2>Results Timeline</h2>
      <p>Here's what you can expect when implementing this strategy:</p>
      <ul>
        <li><strong>Week 1:</strong> Set up Translate & Adapt, export content</li>
        <li><strong>Week 2-3:</strong> Bulk translation and quality review</li>
        <li><strong>Week 4:</strong> SEO optimization and testing</li>
        <li><strong>Month 2-3:</strong> Initial international traffic and sales</li>
        <li><strong>Month 4-6:</strong> Significant revenue from new markets</li>
      </ul>

      <h2>Pro Tips for Maximum Impact</h2>
      <ul>
        <li>Start with 2-3 languages max to test the waters</li>
        <li>Use Google Analytics to identify your top international visitors</li>
        <li>Create language-specific social media accounts</li>
        <li>Partner with local influencers for marketing</li>
        <li>Monitor exchange rates and adjust pricing accordingly</li>
      </ul>
    `,
    videoId: "1bWKz69cBIU",
    publishDate: "2024-01-10",
    readTime: "15 min read",
    category: "Shopify Tutorial",
    thumbnail: translateVideoImage,
    tags: ["Shopify", "Translation", "International", "Tutorial"]
  }
];

export default function BlogPost({ params }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <Link href="/youtube" className="text-purple-600 hover:text-purple-700 font-medium">
              ← Back to YouTube Blog
            </Link>
          </div>
          
          <div className="mb-8">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src={avatarImage}
                  alt="Albin Hot"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <span className="font-medium">Albin Hot</span>
            </div>
            <time>{new Date(post.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
            <span>{post.readTime}</span>
          </div>

          {/* YouTube Video Embed */}
          <div className="aspect-video bg-gray-900 rounded-lg mb-8 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${post.videoId}`}
              title={post.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to <span className="bg-[#F7D8FA] px-2 rounded italic">scale</span> your business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get my proven blueprints and start seeing results in 30 days
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} href="/blueprints/seo">
              Get SEO Blueprint <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Work with me
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Videos & Tutorials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/youtube/${relatedPost.id}`}>
                  <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={relatedPost.thumbnail}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
