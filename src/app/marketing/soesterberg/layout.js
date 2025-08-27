export const metadata = {
  title: 'SEO Specialist Soesterberg - Online Marketing Bureau Gemeente Soest | Niblah',
  description: 'SEO specialist in Soesterberg, gemeente Soest met militaire geschiedenis. Lokale expertise voor bedrijven in Utrecht. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën.',
  keywords: 'SEO specialist Soesterberg, online marketing Soest, digital marketing Utrecht, website optimalisatie Soesterberg, Google Ads Eemland, SEO bureau Soesterberg',
  openGraph: {
    title: 'SEO Specialist Soesterberg - Online Marketing Bureau Gemeente Soest',
    description: 'Specialist in SEO en online marketing voor bedrijven in Soesterberg en gemeente Soest. Verhoog je online zichtbaarheid met lokale expertise.',
    url: 'https://niblah.com/marketing/soesterberg',
    siteName: 'Niblah',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SEO Specialist Soesterberg - Online Marketing Bureau Gemeente Soest',
    description: 'Specialist in SEO en online marketing voor bedrijven in Soesterberg en gemeente Soest. Verhoog je online zichtbaarheid met lokale expertise.',
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

export default function SoesterbergLayout({ children }) {
  return children
}