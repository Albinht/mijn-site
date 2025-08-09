export const metadata = {
  title: 'SEO Specialist Westervoort | Marketing Bureau Liemers | Online Groei',
  description: 'SEO Specialist Westervoort zorgt voor meer klanten uit de Liemers regio. Profiteer van de strategische ligging tussen Arnhem en Duiven. Groei online!',
  keywords: 'SEO specialist Westervoort, marketing bureau Westervoort, online marketing Westervoort, SEO Liemers, Google Ads Westervoort, website Westervoort, B2B marketing Gelderland',
  openGraph: {
    title: 'SEO Specialist Westervoort | Marketing in de Liemers',
    description: 'Groei je bedrijf in Westervoort met professionele SEO en marketing. Bereik klanten in heel de Liemers regio.',
    url: 'https://www.niblah.com/marketing/westervoort',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.niblah.com/marketing/westervoort',
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

export default function WestervoortLayout({ children }) {
  return children
}