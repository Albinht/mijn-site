export const metadata = {
  title: 'SEO Specialist Sevenum - Online Marketing Bureau Noord-Limburg | Niblah',
  description: 'SEO specialist in Sevenum, Noord-Limburg. Lokale expertise voor bedrijven in de Peel-regio. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën.',
  keywords: 'SEO specialist Sevenum, online marketing Noord-Limburg, digital marketing Peel, website optimalisatie Sevenum, Google Ads Limburg, SEO bureau Sevenum',
  openGraph: {
    title: 'SEO Specialist Sevenum - Online Marketing Bureau Noord-Limburg',
    description: 'Specialist in SEO en online marketing voor bedrijven in Sevenum en de Peel-regio. Verhoog je online zichtbaarheid met lokale expertise.',
    url: 'https://niblah.com/marketing/sevenum',
    siteName: 'Niblah',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SEO Specialist Sevenum - Online Marketing Bureau Noord-Limburg',
    description: 'Specialist in SEO en online marketing voor bedrijven in Sevenum en de Peel-regio. Verhoog je online zichtbaarheid met lokale expertise.',
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

export default function SevenumLayout({ children }) {
  return children
}