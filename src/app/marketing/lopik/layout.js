export const metadata = {
  title: 'SEO Specialist Lopik | Marketing Bureau Groene Hart - IJsselstein & Montfoort Regio',
  description: 'Marketing specialist Lopik met expertise in het Groene Hart. Bereik klanten van IJsselstein tot Schoonhoven. ✓ Lokale SEO ✓ Google Ads ✓ Agrarische & MKB marketing expertise',
  keywords: 'SEO Lopik, marketing bureau Lopik, online marketing Groene Hart, Gerbrandytoren marketing, agrarische marketing Utrecht, MKB marketing Lopikerwaard, IJsselstein marketing, Montfoort SEO',
  openGraph: {
    title: 'SEO Specialist Lopik | Marketing Bureau Groene Hart',
    description: 'Marketing specialist voor Lopik bedrijven. Expert in Groene Hart marketing, agrarische sector en lokale MKB groei.',
    url: 'https://www.niblah.nl/marketing/lopik',
    siteName: 'SAM Automation Marketing',
    locale: 'nl_NL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.niblah.nl/marketing/lopik',
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

export default function LopikLayout({ children }) {
  return children
}