import './globals.css'

// Fonts
import { Poppins } from 'next/font/google'
import { Geist, Geist_Mono } from 'next/font/google'

// Componenten
import Header from '../components/header.js'
import Footer from '../components/Footer.js'

// Fonts activeren
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Metadata (optioneel aanpassen)
export const metadata = {
  title: 'Niblah - Digital Marketing Expert',
  description: 'Professional digital marketing services including SEO, Google Ads, and website optimization. Get your business found online and attract more customers.',
  keywords: 'digital marketing, SEO, Google Ads, website optimization, online marketing',
  authors: [{ name: 'Niblah' }],
  creator: 'Niblah',
  publisher: 'Niblah',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Niblah - Digital Marketing Expert',
    description: 'Professional digital marketing services including SEO, Google Ads, and website optimization.',
    url: 'https://albinmarketing.com',
    siteName: 'Niblah',
    images: [
      {
        url: '/avatar.png',
        width: 800,
        height: 800,
        alt: 'Niblah - Digital Marketing Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niblah - Digital Marketing Expert',
    description: 'Professional digital marketing services including SEO, Google Ads, and website optimization.',
    images: ['/avatar.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning={true} className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
