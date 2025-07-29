'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../assets/graph.png'
import avatarImage from '../assets/avatar.png'
import Button from '../components/Button'

export default function Marketing() {
  const locations = [
    'amersfoort', 'nijkerk', 'ede', 'barneveld', 'leusden', 'woudenberg', 
    'putten', 'hoevelaken', 'scherpenzeel', 'hooglanderveen', 'voorthuizen',
    'lunteren', 'harskamp', 'kootwijk', 'otterlo', 'garderen', 'kootwijkerbroek',
    'bennekom', 'achterveld', 'de-glind', 'essen', 'harselaar', 'stroe',
    'terschuur', 'zwartebroek'
  ]

  return (
    <>
      <Head>
        <title>Lokale Marketing & SEO Specialist | Marketing Bureau Nederland</title>
        <meta
          name="description"
          content="Lokale marketing specialist voor bedrijven in Nederland. SEO, Google Ads en website optimalisatie voor meer lokale klanten en zichtbaarheid."
        />
        <link rel="canonical" href="https://niblah.com/marketing" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Lokale Marketing die <span className="text-blue-600">Werkt</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Meer lokale klanten met SEO, Google Ads en een website die converteert. 
              Gespecialiseerd in lokale bedrijven door heel Nederland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/work-with-me" variant="primary" size="lg">
                Start Gratis Consult
              </Button>
              <Button href="/tools/ai-marketing/audit" variant="secondary" size="lg">
                Gratis Marketing Audit
              </Button>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Lokale Bedrijven Geholpen</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">350%</div>
              <div className="text-gray-600">Gemiddelde Groei in Zichtbaarheid</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Steden in Nederland</div>
            </div>
          </div>

          {/* LOCATIONS */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Lokale Marketing per Stad
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {locations.map((location) => (
                <Link
                  key={location}
                  href={`/marketing/${location}`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-200"
                >
                  <div className="font-semibold text-gray-900 capitalize">
                    {location.replace('-', ' ')}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Marketing & SEO
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Lokale SEO</h3>
              <p className="text-gray-600">
                Zichtbaar worden in Google voor lokale zoekwoorden. Meer klanten uit jouw regio.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Google Ads</h3>
              <p className="text-gray-600">
                Gerichte advertenties voor lokale klanten. Meer leads en directe resultaten.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Website Optimalisatie</h3>
              <p className="text-gray-600">
                Een website die converteert en lokale bezoekers omzet naar klanten.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Klaar om Lokaal te Groeien?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Start vandaag nog met een gratis marketing audit van jouw bedrijf.
            </p>
            <Button href="/work-with-me" variant="white" size="lg">
              Plan Gratis Gesprek
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
