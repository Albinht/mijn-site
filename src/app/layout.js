import './globals.css'

// Fonts
import { Poppins, Merriweather } from 'next/font/google'
import { Geist, Geist_Mono } from 'next/font/google'

// Componenten
import Header from '../components/HeaderNew.js'
import Footer from '../components/Footer.js'
import ConditionalContactForm from '../components/ConditionalContactForm.js'
import GoogleAnalytics from '../components/GoogleAnalytics.js'

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${merriweather.variable}`}>
      <head>
      </head>
      <body suppressHydrationWarning={true} className="font-sans">
        <GoogleAnalytics />
        <Header />
        {children}
        <ConditionalContactForm />
        <Footer />
      </body>
    </html>
  )
}
