import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import prisma from '@/lib/prisma';
import { defaultLocale, normalizeLocale } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

async function getRequestLocale() {
  const headerList = await headers();
  const localeHeader = headerList.get('x-locale');
  return normalizeLocale(localeHeader) || defaultLocale;
}

function pickTranslatedString(fallback, value) {
  if (typeof value !== 'string') return fallback;
  const trimmed = value.trim();
  return trimmed.length > 0 ? value : fallback;
}

function getLocalizedPage(page, locale) {
  const normalized = normalizeLocale(locale) || defaultLocale;
  const translations = page?.translations && typeof page.translations === 'object' ? page.translations : null;
  const entry = translations?.[normalized] && typeof translations[normalized] === 'object' ? translations[normalized] : null;

  return {
    title: pickTranslatedString(page.title, entry?.title),
    content: pickTranslatedString(page.content || '', entry?.content),
    metaTitle: pickTranslatedString(page.metaTitle || page.title, entry?.metaTitle),
    metaDescription: pickTranslatedString(page.metaDescription || '', entry?.metaDescription),
  };
}

function getDynamicPageUiCopy(locale) {
  const normalized = normalizeLocale(locale) || defaultLocale;
  const copy = {
    en: {
      ctaTitle: 'Ready to Get Started?',
      ctaSubtitle: "Let's discuss how we can help grow your business",
      ctaButton: 'Work with me',
    },
    nl: {
      ctaTitle: 'Klaar om te starten?',
      ctaSubtitle: 'Laten we bespreken hoe we jouw bedrijf kunnen laten groeien',
      ctaButton: 'Samenwerken',
    },
    de: {
      ctaTitle: 'Bereit loszulegen?',
      ctaSubtitle: 'Lass uns besprechen, wie wir dein Business wachsen lassen',
      ctaButton: 'Zusammenarbeiten',
    },
    sv: {
      ctaTitle: 'Redo att komma igang?',
      ctaSubtitle: 'Lat oss prata om hur vi kan hjalpa ditt foretag att vaxa',
      ctaButton: 'Jobba med mig',
    },
    da: {
      ctaTitle: 'Klar til at komme i gang?',
      ctaSubtitle: 'Lad os tale om hvordan vi kan hjalpe din forretning med at vokse',
      ctaButton: 'Arbejd med mig',
    },
    fr: {
      ctaTitle: 'Pret a demarrer?',
      ctaSubtitle: 'Parlons de la facon dont nous pouvons faire grandir votre activite',
      ctaButton: 'Travailler avec moi',
    },
    it: {
      ctaTitle: 'Pronto a iniziare?',
      ctaSubtitle: 'Parliamo di come possiamo far crescere il tuo business',
      ctaButton: 'Lavora con me',
    },
  };

  return copy[normalized] || copy.en;
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  const locale = await getRequestLocale();
  
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

    const localized = getLocalizedPage(page, locale);
    
    return {
      title: localized.metaTitle || localized.title,
      description: localized.metaDescription || localized.content?.substring(0, 160),
      openGraph: {
        title: localized.metaTitle || localized.title,
        description: localized.metaDescription || localized.content?.substring(0, 160),
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
  const locale = await getRequestLocale();
  const ui = getDynamicPageUiCopy(locale);
  
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

  const localized = getLocalizedPage(page, locale);
  const contentToRender = localized.content || '';
  
  // Render different layouts based on page type
  const renderContent = () => {
    if (page.type === 'TOOL' && contentToRender.includes('iframe')) {
      // YouTube video or embedded content
      return (
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: contentToRender }} />
        </div>
      );
    }
    
    // Regular content
    return (
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: contentToRender }} />
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
              {localized.title}
            </h1>
            {localized.metaDescription && (
              <p className="text-xl text-gray-600">
                {localized.metaDescription}
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
            {ui.ctaTitle}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {ui.ctaSubtitle}
          </p>
          <a
            href="/work-with-me"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {ui.ctaButton}
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
