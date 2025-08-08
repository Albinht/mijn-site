export const metadata = {
  title: 'AI Headshots Generator - Professional Business Photos in Hours | Mijn Site',
  description: 'Get 40-150 professional AI headshots in 1-3 hours. Upload selfies, choose from 220+ outfits & 107+ backdrops. 8× cheaper than photographers. Full commercial rights.',
  keywords: 'ai headshots, professional headshots, business photos, linkedin photos, ai photography, professional photos, headshot generator, business portraits, ai generated headshots',
  
  // Open Graph
  openGraph: {
    title: 'AI Headshots Generator - Professional Business Photos in Hours',
    description: 'Upload selfies, get professional headshots in 1-3 hours. 220+ outfits, 107+ backdrops. Full commercial rights. 8× cheaper than photographers.',
    type: 'website',
    images: [
      {
        url: '/assets/tools/ai-headshots-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Headshots Generator - Professional Business Photos'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'AI Headshots Generator - Professional Business Photos in Hours',
    description: 'Upload selfies, get professional headshots in 1-3 hours. 8× cheaper than photographers.',
    images: ['/assets/tools/ai-headshots-og.jpg']
  },
  
  // Additional SEO
  canonical: 'https://mijneigensite.nl/tools/ai-headshots',
  alternates: {
    canonical: 'https://mijneigensite.nl/tools/ai-headshots'
  },
  
  // Structured data will be added via JSON-LD in the component
  other: {
    'author': 'Mijn Site - AI Marketing Solutions',
    'robots': 'index, follow',
    'googlebot': 'index, follow',
    'revisit-after': '7 days',
    'rating': '4.8',
    'price': '29-59',
    'currency': 'EUR'
  }
}

export default function AIHeadshotsLayout({ children }) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "AI Headshots Generator",
            "description": "Professional AI headshot generator that creates business photos from selfies in 1-3 hours",
            "url": "https://mijneigensite.nl/tools/ai-headshots",
            "applicationCategory": "Photography",
            "operatingSystem": "Web Browser",
            "offers": [
              {
                "@type": "Offer",
                "name": "Basic Package",
                "description": "40 professional headshots with 4 outfit+backdrop combinations",
                "price": "29.00",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer", 
                "name": "Professional Package",
                "description": "100 headshots with 10 combinations and editing credits",
                "price": "39.00",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Executive Package", 
                "description": "150 4K headshots with 15 combinations and priority processing",
                "price": "59.00",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "2824",
              "bestRating": "5",
              "worstRating": "1"
            },
            "creator": {
              "@type": "Organization",
              "name": "Mijn Site",
              "url": "https://mijneigensite.nl"
            },
            "featureList": [
              "Same day delivery (1-3 hours)",
              "220+ outfit options",
              "107+ backdrop options", 
              "Full commercial rights",
              "Privacy-first approach",
              "Professional quality AI generation",
              "Multiple resolutions available",
              "Editing credits included",
              "Bulk download options",
              "Profile-worthy guarantee"
            ]
          })
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to get my AI headshots?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Delivery time depends on your package: Basic (up to 3 hours), Professional (up to 2 hours), Executive (~1 hour). Most orders are completed faster than the maximum time."
                }
              },
              {
                "@type": "Question", 
                "name": "How many photos do I need to upload?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend uploading 15-20 high-quality selfies for the best results. Minimum is 8 photos, maximum is 20. More variety in angles and expressions leads to better results."
                }
              },
              {
                "@type": "Question",
                "name": "Do I own the generated headshots?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Yes! You receive full commercial rights to all generated headshots. Use them for LinkedIn, websites, business cards, marketing materials, or any professional purpose."
                }
              },
              {
                "@type": "Question",
                "name": "What happens to my uploaded photos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your privacy is our priority. Input photos are automatically deleted after 7 days, generated headshots after 30 days. You can delete your data sooner anytime from your account settings."
                }
              },
              {
                "@type": "Question",
                "name": "What if I'm not satisfied with my headshots?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer a Profile-Worthy Guarantee. If you don't get at least 1 headshot you're happy to use professionally, we'll provide a full refund within 3-5 business days."
                }
              }
            ]
          })
        }}
      />
      
      {children}
    </>
  )
}