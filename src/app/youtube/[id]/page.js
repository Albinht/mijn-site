import Link from 'next/link'
import Image from 'next/image'
import Button from '../../../components/Button'
import avatarImage from '../../../assets/avatar.png'
import { notFound } from 'next/navigation'

// Blog posts data - same as main page (in real app, this would come from a CMS or database)
const blogPosts = [
  {
    id: 1,
    title: "How I Scaled My Client's E-commerce Store to €50k/Month with SEO",
    excerpt: "In this video, I break down the exact SEO strategy I used to help my client grow from €5k to €50k monthly revenue in just 6 months.",
    content: `
      <h2>The Challenge</h2>
      <p>When my client first came to me, their e-commerce store was making around €5,000 per month. They had a decent product line but were struggling with organic visibility and traffic. Their main issues were:</p>
      <ul>
        <li>Low organic traffic (less than 1,000 visitors per month)</li>
        <li>Poor keyword rankings for commercial terms</li>
        <li>Technical SEO issues affecting crawlability</li>
        <li>Weak content strategy</li>
      </ul>

      <h2>The SEO Strategy</h2>
      <p>I implemented a comprehensive SEO strategy focusing on three main pillars:</p>
      
      <h3>1. Technical SEO Foundation</h3>
      <p>First, we fixed all the technical issues that were holding back the site:</p>
      <ul>
        <li>Improved site speed (from 4.2s to 1.8s load time)</li>
        <li>Fixed crawl errors and broken internal links</li>
        <li>Optimized URL structure and navigation</li>
        <li>Implemented proper schema markup</li>
      </ul>

      <h3>2. Strategic Keyword Research</h3>
      <p>We identified high-value, low-competition keywords that their target audience was actually searching for. The key was finding commercial intent keywords with decent search volume but manageable competition.</p>

      <h3>3. Content Strategy</h3>
      <p>We created a content calendar focusing on:</p>
      <ul>
        <li>Product-focused landing pages</li>
        <li>Comparison and buying guide content</li>
        <li>FAQ pages targeting long-tail keywords</li>
        <li>Category page optimization</li>
      </ul>

      <h2>The Results</h2>
      <p>After 6 months of consistent implementation:</p>
      <ul>
        <li><strong>Revenue: €5k → €50k per month</strong></li>
        <li><strong>Organic traffic: 1k → 25k monthly visitors</strong></li>
        <li><strong>Keyword rankings: 0 → 150+ first page rankings</strong></li>
        <li><strong>Conversion rate: 1.2% → 3.8%</strong></li>
      </ul>

      <h2>Key Takeaways</h2>
      <p>The most important lessons from this case study:</p>
      <ol>
        <li>Technical SEO is the foundation - fix this first</li>
        <li>Focus on commercial intent keywords, not just high volume</li>
        <li>Content quality matters more than quantity</li>
        <li>Patience and consistency are crucial for SEO success</li>
      </ol>
    `,
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "SEO Case Study",
    thumbnail: "/api/placeholder/600/400",
    tags: ["SEO", "E-commerce", "Case Study", "Growth"]
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
            <time>{new Date(post.publishDate).toLocaleDateString('nl-NL', { 
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
