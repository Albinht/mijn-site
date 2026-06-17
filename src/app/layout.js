import './globals.css'
import { headers } from 'next/headers'

// Fonts
import { Poppins, Merriweather } from 'next/font/google'
import { Geist, Geist_Mono } from 'next/font/google'

// Componenten
import Header from '../components/HeaderNew.js'
import YouTubeHeader from '../components/YouTubeHeader.js'
import Footer from '../components/Footer.js'
import ConditionalContactForm from '../components/ConditionalContactForm.js'
import GoogleAnalytics from '../components/GoogleAnalytics.js'
import FloatingChatButton from '../components/FloatingChatButton.js'

// Fonts activeren
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const baseMetadata = {
  metadataBase: new URL('https://niblah.com'),
  title: 'Niblah - Online Marketing Specialist',
  description: 'Online marketing services voor SEO, Google Ads, websites en conversie-optimalisatie. Laat je bedrijf beter vindbaar worden en trek meer klanten aan.',
  keywords: 'online marketing, SEO, Google Ads, website optimalisatie, marketing bureau',
  authors: [{ name: 'Niblah' }],
  creator: 'Niblah',
  publisher: 'Niblah',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Niblah - Online Marketing Specialist',
    description: 'Online marketing services voor SEO, Google Ads, websites en conversie-optimalisatie.',
    url: 'https://niblah.com',
    siteName: 'Niblah',
    images: [
      {
        url: '/avatar.png',
        width: 800,
        height: 800,
        alt: 'Niblah - Online Marketing Specialist',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niblah - Online Marketing Specialist',
    description: 'Online marketing services voor SEO, Google Ads, websites en conversie-optimalisatie.',
    images: ['/avatar.png'],
  },
}

export async function generateMetadata() {
  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      locale: 'nl_NL',
    },
  }
}

export default async function RootLayout({ children }) {
  const headerList = await headers()
  const pathname = headerList.get('x-pathname')
  const isYoutubePage = pathname === '/yt' || pathname?.startsWith('/yt/')

  return (
    <html lang="nl-NL" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${merriweather.variable}`}>
      <head>
      </head>
      <body
        suppressHydrationWarning={true}
        className="font-sans"
      >
        <GoogleAnalytics />
        {isYoutubePage ? <YouTubeHeader /> : <Header />}
        {children}
        <ConditionalContactForm />
        {!isYoutubePage && <Footer />}
        {!isYoutubePage && <FloatingChatButton />}
      </body>
    </html>
  )
}
