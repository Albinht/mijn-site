export const metadata = {
  title: 'SEO Specialist Soest - Online Marketing Bureau Eemland | Niblah',
  description: 'SEO specialist in Soest, Eemland tussen Amersfoort en Hilversum. Lokale expertise voor bedrijven in Utrecht. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën.',
  keywords: 'SEO specialist Soest, online marketing Eemland, digital marketing Utrecht, website optimalisatie Soest, Google Ads Gooi, SEO bureau Soest',
  openGraph: {
    title: 'SEO Specialist Soest - Online Marketing Bureau Eemland',
    description: 'Specialist in SEO en online marketing voor bedrijven in Soest en Eemland. Verhoog je online zichtbaarheid met lokale expertise.',
    url: 'https://niblah.com/marketing/soest',
    siteName: 'Niblah',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SEO Specialist Soest - Online Marketing Bureau Eemland',
    description: 'Specialist in SEO en online marketing voor bedrijven in Soest en Eemland. Verhoog je online zichtbaarheid met lokale expertise.',
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

export default function SoestLayout({ children }) {
  return children
}