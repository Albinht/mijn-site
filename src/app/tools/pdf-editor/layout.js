export const metadata = {
  title: 'Free PDF Editor Online - Merge, Split, Rotate PDFs | Niblah',
  description: 'Edit PDFs online for free. Merge, split, rotate, compress, and reorder PDF pages directly in your browser. No registration or upload required. Privacy-focused PDF editing.',
  keywords: 'pdf editor, merge pdf, split pdf, rotate pdf, compress pdf, free pdf tools, online pdf editor, pdf bewerken, pdf samenvoegen, pdf splitsen',
  openGraph: {
    title: 'Free PDF Editor Online - Merge, Split, Rotate PDFs',
    description: 'Edit PDFs online for free. Merge, split, rotate, compress, and reorder PDF pages directly in your browser. No registration required.',
    url: 'https://niblah.com/tools/pdf-editor',
    siteName: 'Niblah - Digital Marketing & Tools',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-pdf-editor.png',
        width: 1200,
        height: 630,
        alt: 'Free Online PDF Editor Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF Editor Online | Niblah',
    description: 'Edit PDFs for free - merge, split, rotate, compress. No upload required, 100% privacy.',
    images: ['/og-pdf-editor.png'],
  },
  alternates: {
    canonical: 'https://niblah.com/tools/pdf-editor',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function PDFEditorLayout({ children }) {
  return children
}