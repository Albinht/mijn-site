export const metadata = {
  title: 'SEO Specialist Harlingen | Marketing Bureau Harlingen | Maritieme Marketing',
  description: 'SEO Specialist Harlingen maakt jouw bedrijf zichtbaar in deze historische havenstad. Van Waddentoerisme tot maritieme sector - groei met lokale expertise!',
  keywords: 'SEO specialist Harlingen, marketing bureau Harlingen, online marketing Harlingen, SEO Waddeneilanden, Google Ads Harlingen, maritieme marketing, website Harlingen',
  openGraph: {
    title: 'SEO Specialist Harlingen | Maritieme Marketing Expert',
    description: 'Groei je bedrijf in Harlingen met SEO en marketing. Bereik toeristen, locals en de maritieme sector.',
    url: 'https://www.niblah.com/marketing/harlingen',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.niblah.com/marketing/harlingen',
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

export default function HarlingenLayout({ children }) {
  return children
}