export const metadata = {
  title: 'Shopify Developer Barneveld | E-commerce Expert - Niblah',
  description: 'Professionele Shopify ontwikkeling in Barneveld. Niblah bouwt en optimaliseert webshops met 15+ jaar ervaring. ✓ Custom themes ✓ Shopify Plus ✓ Apps & integraties',
  keywords: 'shopify developer barneveld, shopify expert barneveld, webshop bouwen barneveld, e-commerce developer, shopify plus partner, custom shopify themes',
  openGraph: {
    title: 'Shopify Developer Barneveld | Niblah',
    description: 'Professionele Shopify ontwikkeling in Barneveld. Custom themes, Shopify Plus implementaties en app integraties.',
    url: 'https://niblah.com/services/shopify-developer-barneveld',
    siteName: 'Niblah',
    images: [
      {
        url: '/avatar.png',
        width: 800,
        height: 600,
        alt: 'Niblah - Shopify Developer Barneveld',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Barneveld | E-commerce Expert - Niblah',
    description: 'Professionele Shopify ontwikkeling in Barneveld. Custom themes, Shopify Plus implementaties en app integraties.',
    images: ['/avatar.png'],
  },
  alternates: {
    canonical: 'https://niblah.com/services/shopify-developer-barneveld',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ShopifyDeveloperLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
