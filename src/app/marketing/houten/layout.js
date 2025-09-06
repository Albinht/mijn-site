import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEO Specialist Houten | Online Marketing Bureau - Niblah.com",
  description: "SEO specialist Houten ✓ Moderne planstad met 50.000 inwoners ✓ Marketing bureau voor lokale bedrijven ✓ Google Ads ✓ Website optimalisatie ✓ Gratis strategiegesprek",
  keywords: "SEO specialist Houten, marketing bureau Houten, Google Ads Houten, website design Houten, online marketing Houten, SEO Houten, marketing Houten",
  openGraph: {
    title: "SEO Specialist Houten | Online Marketing Bureau - Niblah.com",
    description: "SEO specialist Houten ✓ Moderne planstad met 50.000 inwoners ✓ Marketing bureau voor lokale bedrijven ✓ Google Ads ✓ Website optimalisatie ✓ Gratis strategiegesprek",
    url: "https://niblah.com/marketing/houten",
    siteName: "Niblah.com - SEO & Marketing",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Specialist Houten | Online Marketing Bureau - Niblah.com",
    description: "SEO specialist Houten ✓ Moderne planstad met 50.000 inwoners ✓ Marketing bureau voor lokale bedrijven ✓ Google Ads ✓ Website optimalisatie",
  },
  alternates: {
    canonical: "https://niblah.com/marketing/houten"
  }
};

export default function HoutenLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}