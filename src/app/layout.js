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
  title: 'Albin Marketing',
  description: 'Next.js marketing site',
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
