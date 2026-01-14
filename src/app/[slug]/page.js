import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  try {
    const page = await prisma.page.findUnique({
      where: { slug }
    });
    
    if (!page || page.status !== 'PUBLISHED') {
      return {
        title: 'Page Not Found',
        description: 'The requested page could not be found.'
      };
    }
    
    return {
      title: page.metaTitle || page.title,
      description: page.metaDescription || page.content?.substring(0, 160),
      openGraph: {
        title: page.metaTitle || page.title,
        description: page.metaDescription || page.content?.substring(0, 160),
        type: 'website',
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Website',
      description: 'Digital Marketing Services'
    };
  }
}

export default async function DynamicPage({ params }) {
  const { slug } = params;
  
  let page;
  try {
    // Fetch page from database
    page = await prisma.page.findUnique({
      where: { slug }
    });
    
    if (!page || page.status !== 'PUBLISHED') {
      return notFound();
    }
    
    // Increment view count (don't await to avoid blocking)
    prisma.page.update({
      where: { id: page.id },
      data: { views: { increment: 1 } }
    }).catch(err => console.error('Error updating views:', err));
    
  } catch (error) {
    console.error('Error fetching page:', error);
    return notFound();
  }
  
  // Render different layouts based on page type
  const renderContent = () => {
    if (page.type === 'TOOL' && page.content?.includes('iframe')) {
      // YouTube video or embedded content
      return (
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      );
    }
    
    // Regular content
    return (
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: page.content || '' }} />
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {page.title}
            </h1>
            {page.metaDescription && (
              <p className="text-xl text-gray-600">
                {page.metaDescription}
              </p>
            )}
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can help grow your business
          </p>
          <a
            href="/work-with-me"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  try {
    const pages = await prisma.page.findMany({
      where: { status: 'PUBLISHED' },
      select: { slug: true }
    });
    
    return pages.map((page) => ({
      slug: page.slug
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}
