export const metadata = {
  title: 'SEO Specialist Montfoort | Marketing Bureau Hollandse IJssel - Historische Stad Marketing',
  description: 'Marketing specialist Montfoort met expertise in historische stadsmarketing. Bereik klanten langs de Hollandse IJssel van IJsselstein tot Oudewater. ✓ Lokale SEO ✓ Toerisme marketing ✓ MKB groei',
  keywords: 'SEO Montfoort, marketing bureau Montfoort, online marketing Hollandse IJssel, historische stad marketing, Linschoten marketing, Blokland SEO, IJsselstreek marketing, waterrecreatie promotie',
  openGraph: {
    title: 'SEO Specialist Montfoort | Marketing Bureau IJsselstreek',
    description: 'Marketing specialist voor historisch Montfoort. Expert in IJsselstreek marketing, toerisme en lokale MKB groei.',
    url: 'https://www.samautomation.nl/marketing/montfoort',
    siteName: 'SAM Automation Marketing',
    locale: 'nl_NL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.samautomation.nl/marketing/montfoort',
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

export default function MontfoortLayout({ children }) {
  return children
}