export const metadata = {
  title: 'SEO Specialist Sittard - Online Marketing Bureau Parkstad Limburg | Niblah',
  description: 'SEO specialist in Sittard, Parkstad Limburg. Lokale expertise voor bedrijven in Zuid-Limburg. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën.',
  keywords: 'SEO specialist Sittard, online marketing Parkstad, digital marketing Zuid-Limburg, website optimalisatie Sittard, Google Ads Limburg, SEO bureau Sittard',
  openGraph: {
    title: 'SEO Specialist Sittard - Online Marketing Bureau Parkstad Limburg',
    description: 'Specialist in SEO en online marketing voor bedrijven in Sittard en Parkstad Limburg. Verhoog je online zichtbaarheid met lokale expertise.',
    url: 'https://niblah.com/marketing/sittard',
    siteName: 'Niblah',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SEO Specialist Sittard - Online Marketing Bureau Parkstad Limburg',
    description: 'Specialist in SEO en online marketing voor bedrijven in Sittard en Parkstad Limburg. Verhoog je online zichtbaarheid met lokale expertise.',
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

export default function SittardLayout({ children }) {
  return children
}