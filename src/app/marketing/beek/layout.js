export const metadata = {
  title: 'SEO Specialist Beek | Marketing Bureau Beek Limburg | Lokale Groei',
  description: 'SEO Specialist Beek zorgt voor meer klanten uit Beek, Neerbeek en heel Zuid-Limburg. Profiteer van de strategische ligging bij Maastricht Airport. Bel nu!',
  keywords: 'SEO specialist Beek, marketing bureau Beek, online marketing Beek Limburg, SEO Beek, Google Ads Beek, website Beek, Maastricht Airport marketing',
  openGraph: {
    title: 'SEO Specialist Beek | Marketing Bureau voor Zuid-Limburg',
    description: 'Groei je bedrijf in Beek met professionele SEO en marketing. Bereik klanten van Maastricht Airport tot lokale inwoners.',
    url: 'https://www.niblah.com/marketing/beek',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.niblah.com/marketing/beek',
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

export default function BeekLayout({ children }) {
  return children
}