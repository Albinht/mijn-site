export const metadata = {
  title: 'SEO Specialist Ouder-Amstel | Premium Marketing Bureau voor Duivendrecht & Ouderkerk',
  description: 'Exclusieve marketing specialist voor Ouder-Amstel bedrijven. Bereik welgestelde klanten in Duivendrecht, Ouderkerk aan de Amstel en Amsterdam Zuidoost. ✓ Luxe markt expertise ✓ Premium resultaten',
  keywords: 'SEO Ouder-Amstel, marketing bureau Duivendrecht, online marketing Ouderkerk aan de Amstel, premium marketing specialist, luxe marketing Amsterdam Zuidoost, B2B marketing Amstel Business Corridor',
  openGraph: {
    title: 'SEO Specialist Ouder-Amstel | Premium Marketing Bureau',
    description: 'Exclusieve marketing voor welgestelde gemeente Ouder-Amstel. Bereik premium klanten in Duivendrecht en Ouderkerk.',
    url: 'https://www.niblah.nl/marketing/ouder-amstel',
    siteName: 'SAM Automation Marketing',
    locale: 'nl_NL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.niblah.nl/marketing/ouder-amstel',
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

export default function OuderAmstelLayout({ children }) {
  return children
}