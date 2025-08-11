import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    // For preview, we show both DRAFT and PUBLISHED pages
    const page = await prisma.page.findUnique({
      where: { slug }
    });
    
    if (!page) {
      return {
        title: 'Page Not Found',
        description: 'The requested page could not be found.'
      };
    }
    
    return {
      title: `[PREVIEW] ${page.metaTitle || page.title}`,
      description: page.metaDescription || page.content?.substring(0, 160),
      robots: 'noindex, nofollow' // Don't index preview pages
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Preview',
      description: 'Preview mode'
    };
  }
}

export default async function PreviewPage({ params }) {
  const { slug } = await params;
  
  let page;
  try {
    // Fetch page from database (both DRAFT and PUBLISHED)
    page = await prisma.page.findUnique({
      where: { slug }
    });
    
    if (!page) {
      notFound();
    }
  } catch (error) {
    console.error('Error fetching page:', error);
    notFound();
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
      {/* Preview Banner */}
      <div className="bg-yellow-500 text-black py-2 px-4 text-center font-semibold">
        ⚠️ PREVIEW MODE - Status: {page.status} 
        {page.status === 'DRAFT' && ' - This page is not publicly visible'}
      </div>
      
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
      
      {/* Page Info for Debugging */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold mb-2">Page Information (Preview Only):</h3>
            <ul className="text-sm space-y-1">
              <li>ID: {page.id}</li>
              <li>Slug: {page.slug}</li>
              <li>Type: {page.type}</li>
              <li>Status: {page.status}</li>
              <li>Views: {page.views}</li>
              <li>Created: {new Date(page.createdAt).toLocaleString()}</li>
              <li>Updated: {new Date(page.updatedAt).toLocaleString()}</li>
            </ul>
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