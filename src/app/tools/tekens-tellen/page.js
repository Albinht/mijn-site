'use client'

import { useState } from 'react'
import Head from 'next/head'

export default function TekensTellen() {
  const [text, setText] = useState('')

  // Calculate different counts
  const totalCharacters = text.length
  const charactersNoSpaces = text.replace(/\s/g, '').length
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const clearText = () => {
    setText('')
  }

  return (
    <>
      <Head>
        <title>Karakters en Tekens Tellen – Snel, Nauwkeurig en 100% Gratis | Niblah</title>
        <meta name="description" content="Gratis tekens teller om karakters, woorden en letters te tellen. Perfect voor SEO-titels, meta descriptions en social media posts. Gebruik onze teken counter nu!" />
        <meta name="keywords" content="tekens tellen, karakters tellen, woorden tellen, letters tellen, teken counter, SEO tool, meta description, page title, hoeveel tekens, karakter teller" />
        <meta property="og:title" content="Karakters en Tekens Tellen – Snel, Nauwkeurig en 100% Gratis" />
        <meta property="og:description" content="Gratis tekens teller om karakters, woorden en letters te tellen. Perfect voor SEO-titels, meta descriptions en social media posts." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block bg-[#F7D8FA] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              SEO Tools
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Karakters en <span className="bg-[#F7D8FA] px-2 rounded italic">Tekens Tellen</span> – Snel, Nauwkeurig en 100% Gratis
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Wil je weten hoeveel karakters je tekst heeft? Of ben je benieuwd naar het aantal tekens, woorden of letters in een alinea, zin of complete pagina? Met onze tekens tellen tool krijg je in één oogopslag het volledige overzicht.
            </p>
            <div className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
              <p className="mb-4">Deze handige teken teller is ideaal voor iedereen die met tekstlimieten werkt, zoals bij:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  SEO-titels en meta descriptions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Advertenties en social media posts
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>
                  Schoolopdrachten of blogartikelen
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">•</span>
                  Formulieren met maximale tekens
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-700">
              <span className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% Gratis
              </span>
              <span className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Direct Resultaat
              </span>
              <span className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Geen Registratie Vereist
              </span>
            </div>
          </div>
        </section>

        {/* Text Counter Tool */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <p className="text-gray-700 mb-4">Of je nu je aantal karakters wilt tellen of je afvraagt "hoeveel tekens heeft mijn tekst?" – je hoeft het niet meer handmatig te doen.</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  🖊️ Typ of plak je tekst om te starten:
                </h2>
              </div>
                
              <div className="mb-8">
                <div className="relative">
                  <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder="🖊️ Vul hier je tekst in…"
                    className="w-full h-64 px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-base transition-all shadow-sm"
                    style={{ 
                      minHeight: '250px',
                      borderRadius: '5px'
                    }}
                  />
                  <p className="text-sm text-gray-600 mt-2">🔍 De tool telt automatisch het aantal letters, karakters (met én zonder spaties) en woorden.</p>
                </div>
              </div>

              {/* Live Counter Display */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Resultaten:</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {wordCount}
                  </div>
                  <p className="text-gray-800 font-semibold">woorden</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {totalCharacters}
                  </div>
                  <p className="text-gray-800 font-semibold">karakters (met spaties)</p>
                  <p className="text-xs text-gray-600 mt-1 bg-white/50 rounded-full px-2 py-1">Voor SEO titels & meta descriptions</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {charactersNoSpaces}
                  </div>
                  <p className="text-gray-800 font-semibold">karakters (zonder spaties)</p>
                </div>
              </div>

              {/* Clear Button */}
              {text && (
                <div className="text-center">
                  <div className="relative inline-block">
                    {/* Gradient aura for button */}
                    <div
                      className="absolute inset-0 z-0 rounded-full blur-[15px] opacity-60"
                      style={{
                        background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.5) 0%, rgba(220, 38, 38, 0.5) 100%)',
                      }}
                    ></div>
                    <button
                      onClick={clearText}
                      className="relative z-10 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-sm"
                      style={{ borderRadius: '5px' }}
                    >
                      Tekst Wissen
                    </button>
                  </div>
                </div>
              )}
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-center">
                  Gebruik deze gegevens bijvoorbeeld om te controleren of je tekst voldoet aan de SEO-richtlijnen voor Google.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Guidelines */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#F7D8FA] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                SEO Richtlijnen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                SEO Richtlijnen voor <span className="bg-[#F7D8FA] px-2 rounded italic">Tekstlengte</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Voor wie zich bezighoudt met SEO is het belangrijk om het aantal tekens in een tekst goed af te stemmen op wat Google weergeeft.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative">
                {/* Gradient aura behind card */}
                <div
                  className="absolute inset-0 z-0 blur-[15px] opacity-40 rounded-lg"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255, 193, 7, 0.4) 0%, rgba(255, 152, 0, 0.4) 100%)',
                  }}
                ></div>
                <div className="relative z-10 p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
                  <h3 className="text-2xl font-bold text-yellow-800 mb-4">📌 Page Titles</h3>
                  <p className="text-yellow-700 mb-3 font-semibold">
                    ➤ Ideale lengte: 50–60 tekens
                  </p>
                  <p className="text-yellow-700 leading-relaxed">
                    ➤ Houd rekening met spaties – gebruik daarom de telling met spaties voor nauwkeurigheid.
                  </p>
                </div>
              </div>

              <div className="relative">
                {/* Gradient aura behind card */}
                <div
                  className="absolute inset-0 z-0 blur-[15px] opacity-40 rounded-lg"
                  style={{
                    background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.4) 0%, rgba(16, 185, 129, 0.4) 100%)',
                  }}
                ></div>
                <div className="relative z-10 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">📌 Meta Descriptions</h3>
                  <p className="text-green-700 mb-3 font-semibold">
                    ➤ Ideale lengte: 150–160 tekens
                  </p>
                  <p className="text-green-700 leading-relaxed">
                    ➤ Controleer met de karakter teller of je beschrijving niet wordt afgekapt in de zoekresultaten.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Gradient aura behind pro tip */}
              <div
                className="absolute inset-0 z-0 blur-[20px] opacity-30 rounded-lg"
                style={{
                  background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)',
                }}
              ></div>
              <div className="relative z-10 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full opacity-80"></div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">💡 Tip</h3>
                <p className="text-blue-700 leading-relaxed text-lg">
                  Gebruik de "hoeveel tekens is mijn tekst"-functie om te testen of je tekst SEO-proof is!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Use Our Text Counter */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#F7D8FA] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Voordelen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waarom onze <span className="bg-[#F7D8FA] px-2 rounded italic">tekensteller</span> gebruiken?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Nauwkeurige telling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Of je nu letters telt of een volledig aantal characters wilt meten – je krijgt altijd exacte resultaten.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Tijdbesparend</h3>
                <p className="text-gray-600 leading-relaxed">
                  Geen handmatig tellen meer. Één klik en je ziet het totale aantal tekens.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Gratis & direct resultaat</h3>
                <p className="text-gray-600 leading-relaxed">
                  Geen registratie nodig.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Voor Word-gebruikers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Werkt beter dan tekens tellen in Word – geen gedoe, wel snelheid.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Voor iedereen</h3>
                <p className="text-gray-600 leading-relaxed">
                  Of je nu een SEO-specialist bent of je afvraagt hoeveel woorden zijn 1000 tekens – deze tool is voor jou.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#F7D8FA] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Veelgestelde vragen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-[#F7D8FA] px-2 rounded italic">FAQ</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔹 Hoeveel tekens zijn 1000 woorden?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dat verschilt per tekst, maar gemiddeld bevat 1.000 woorden zo'n 5.000 tot 6.000 tekens inclusief spaties.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔹 Wat zijn karakters in een tekst?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alle letters, cijfers, spaties en leestekens worden als karakters gezien.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔹 Kan ik deze tool gebruiken als letter teller?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Zeker! Je kunt ook het aantal letters tellen in je tekst – handig als je bijvoorbeeld een limiet hebt voor een sollicitatie of bio.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔹 Is er een symbool voor aantal tekens?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Niet direct, maar de tool toont exact het aantal characters zonder dat je een formule hoeft te gebruiken zoals in Excel of Word.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Extra Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#F7D8FA] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Extra
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Tekens Tellen in <span className="bg-[#F7D8FA] px-2 rounded italic">Word</span> vs. Online Tool
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hoewel je in Microsoft Word via 'Woorden tellen' het aantal tekens kunt achterhalen, is dat vaak omslachtig. Deze online teken counter werkt sneller, zonder afleiding én zonder installatie. Gewoon je tekst plakken en klaar!
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-800 text-lg font-medium">
                  Gebruik onze tekens teller om moeiteloos je teksten te analyseren, of je nu nieuwsgierig bent naar het aantal karakters, het exacte aantal letters, of simpelweg wilt weten: hoeveel tekens heeft mijn tekst?
                </p>
                <p className="text-blue-700 mt-4 font-semibold">
                  Probeer het nu – helemaal gratis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}