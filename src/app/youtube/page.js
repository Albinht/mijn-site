import Link from 'next/link'
import Image from 'next/image'
import Button from '../../components/Button'
import avatarImage from '../../assets/avatar.png'

// Blog posts data - easily add new posts here
const blogPosts = [
  {
    id: 1,
    title: "How I Scaled My Client's E-commerce Store to €50k/Month with SEO",
    excerpt: "In this video, I break down the exact SEO strategy I used to help my client grow from €5k to €50k monthly revenue in just 6 months. You'll learn the keyword research process, content strategy, and technical SEO optimizations that made this possible.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "SEO Case Study",
    thumbnail: "/api/placeholder/600/400", // Replace with actual thumbnail
    tags: ["SEO", "E-commerce", "Case Study", "Growth"]
  },
  {
    id: 2,
    title: "Google Ads Mistakes That Are Killing Your ROI (And How to Fix Them)",
    excerpt: "Stop wasting money on Google Ads! In this video, I reveal the 5 most common mistakes I see businesses make with their Google Ads campaigns and show you exactly how to fix them for better ROI.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    publishDate: "2024-01-10",
    readTime: "12 min read", 
    category: "Google Ads",
    thumbnail: "/api/placeholder/600/400", // Replace with actual thumbnail
    tags: ["Google Ads", "PPC", "ROI", "Optimization"]
  },
  {
    id: 3,
    title: "My Complete Keyword Research Process (Free Tools Only)",
    excerpt: "You don't need expensive tools to do effective keyword research. In this comprehensive tutorial, I show you my complete keyword research process using only free tools that anyone can access.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    publishDate: "2024-01-05",
    readTime: "15 min read",
    category: "SEO Tutorial",
    thumbnail: "/api/placeholder/600/400", // Replace with actual thumbnail
    tags: ["SEO", "Keyword Research", "Free Tools", "Tutorial"]
  }
];

const BlogCard = ({ post }) => (
  <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-48 bg-gray-100">
      <Image
        src={post.thumbnail}
        alt={post.title}
        fill
        className="object-cover"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
      {/* YouTube Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors cursor-pointer">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <time>{new Date(post.publishDate).toLocaleDateString('nl-NL', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</time>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
        {post.title}
      </h2>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link href={`/youtube/${post.id}`}>
        <Button className="w-full">
          Watch Video & Read More <span>→</span>
        </Button>
      </Link>
    </div>
  </article>
);

export default function YouTubePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20">
                <Image
                  src={avatarImage}
                  alt="Albin Hot"
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              YouTube <span className="bg-[#F7D8FA] px-2 rounded italic">Video</span> Blog
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Praktische SEO en marketing tutorials, case studies en tips. 
              Alles wat je nodig hebt om je online business te laten groeien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="https://youtube.com/@albinhot" target="_blank" rel="noopener noreferrer">
                Subscribe op YouTube <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Work with me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="bg-[#F7D8FA] px-2 rounded italic">Videos</span> & Tutorials
            </h2>
            <p className="text-lg text-gray-600">
              Praktische marketing content die je direct kunt toepassen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mis geen nieuwe <span className="bg-[#F7D8FA] px-2 rounded italic">video</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Elke week nieuwe praktische marketing tips en case studies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href="https://youtube.com/@albinhot" target="_blank" rel="noopener noreferrer">
              Subscribe op YouTube <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/blueprints/seo">
              Bekijk SEO Blueprint
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
