export const metadata = {
  title: 'SEO Specialist Sneek - Online Marketing Bureau Friese Meren | Niblah',
  description: 'SEO specialist in Sneek, Friese Meren watersportcentrum. Lokale expertise voor bedrijven in Friesland. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën.',
  keywords: 'SEO specialist Sneek, online marketing Friese Meren, digital marketing Friesland, website optimalisatie Sneek, Google Ads watersport, SEO bureau Sneek',
  openGraph: {
    title: 'SEO Specialist Sneek - Online Marketing Bureau Friese Meren',
    description: 'Specialist in SEO en online marketing voor bedrijven in Sneek en de Friese Meren. Verhoog je online zichtbaarheid met lokale expertise.',
    url: 'https://niblah.com/marketing/sneek',
    siteName: 'Niblah',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SEO Specialist Sneek - Online Marketing Bureau Friese Meren',
    description: 'Specialist in SEO en online marketing voor bedrijven in Sneek en de Friese Meren. Verhoog je online zichtbaarheid met lokale expertise.',
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

export default function SneekLayout({ children }) {
  return children
}