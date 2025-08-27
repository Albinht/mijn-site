export const metadata = {
  title: 'SEO Specialist Sluis - Online Marketing Bureau Zeeuws-Vlaanderen | Niblah',
  description: 'SEO specialist in Sluis, Zeeuws-Vlaanderen grensstad. Lokale expertise voor bedrijven in Zeeland. Verhoog je online zichtbaarheid met bewezen digitale marketing strategieën.',
  keywords: 'SEO specialist Sluis, online marketing Zeeuws-Vlaanderen, digital marketing Zeeland, website optimalisatie Sluis, Google Ads grensregio, SEO bureau Sluis',
  openGraph: {
    title: 'SEO Specialist Sluis - Online Marketing Bureau Zeeuws-Vlaanderen',
    description: 'Specialist in SEO en online marketing voor bedrijven in Sluis en Zeeuws-Vlaanderen. Verhoog je online zichtbaarheid met lokale expertise.',
    url: 'https://niblah.com/marketing/sluis',
    siteName: 'Niblah',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SEO Specialist Sluis - Online Marketing Bureau Zeeuws-Vlaanderen',
    description: 'Specialist in SEO en online marketing voor bedrijven in Sluis en Zeeuws-Vlaanderen. Verhoog je online zichtbaarheid met lokale expertise.',
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

export default function SluisLayout({ children }) {
  return children
}