'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ClockIcon, CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function TTFBChecker() {
  const [url, setUrl] = useState('');
  const [testResults, setTestResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [testHistory, setTestHistory] = useState([]);

  const handleTest = async () => {
    if (!url.trim()) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/tools/ttfb-checker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      
      if (data.success) {
        setTestResults(data);
        setTestHistory(prev => [data, ...prev.slice(0, 4)]); // Keep last 5 tests
      } else {
        setTestResults(data);
      }
    } catch (error) {
      console.error('Error testing TTFB:', error);
      setTestResults({
        success: false,
        error: 'Failed to test TTFB. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getTTFBStatus = (ttfb) => {
    if (ttfb <= 200) return { status: 'Excellent', color: 'text-green-600', icon: CheckCircleIcon };
    if (ttfb <= 500) return { status: 'Good', color: 'text-blue-600', icon: CheckCircleIcon };
    if (ttfb <= 1000) return { status: 'Needs Improvement', color: 'text-yellow-600', icon: ExclamationTriangleIcon };
    return { status: 'Poor', color: 'text-red-600', icon: XCircleIcon };
  };

  const getServerTimeStatus = (time) => {
    if (time <= 100) return { status: 'Excellent', color: 'text-green-600' };
    if (time <= 300) return { status: 'Good', color: 'text-blue-600' };
    if (time <= 600) return { status: 'Fair', color: 'text-yellow-600' };
    return { status: 'Poor', color: 'text-red-600' };
  };

  const exportResults = () => {
    if (!testHistory.length) return;
    
    const csv = [
      'URL,TTFB (ms),Status,DNS Time,Connect Time,Server Time,Transfer Time,Total Time,Timestamp',
      ...testHistory.map(result => 
        `"${result.url}",${result.ttfb},${getTTFBStatus(result.ttfb).status},${result.timing?.dns || 0},${result.timing?.connect || 0},${result.timing?.server || 0},${result.timing?.transfer || 0},${result.timing?.total || 0},"${new Date(result.timestamp).toISOString()}"`
      )
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'ttfb-test-results.csv';
    a.click();
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <ClockIcon className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">
              TTFB Checker
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measure your website's Time To First Byte (TTFB) performance. 
            TTFB is a key metric for Core Web Vitals and affects your search rankings.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Test Website TTFB</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                id="url"
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button
              onClick={handleTest}
              disabled={isLoading || !url.trim()}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Testing TTFB...
                </>
              ) : (
                <>
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Test TTFB
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {testResults && (
          <div className="space-y-6">
            {testResults.success ? (
              <>
                {/* Main Results */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {testResults.ttfb}ms
                    </div>
                    <div className={`text-lg font-medium ${getTTFBStatus(testResults.ttfb).color}`}>
                      {getTTFBStatus(testResults.ttfb).status}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Time To First Byte for {new URL(testResults.url).hostname}
                    </p>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">
                        {testResults.timing?.dns || 0}ms
                      </div>
                      <div className="text-sm text-gray-600">DNS Lookup</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">
                        {testResults.timing?.connect || 0}ms
                      </div>
                      <div className="text-sm text-gray-600">Connection</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className={`text-2xl font-bold ${getServerTimeStatus(testResults.timing?.server || 0).color}`}>
                        {testResults.timing?.server || 0}ms
                      </div>
                      <div className="text-sm text-gray-600">Server Time</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">
                        {testResults.timing?.total || 0}ms
                      </div>
                      <div className="text-sm text-gray-600">Total Time</div>
                    </div>
                  </div>

                  {/* Performance Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>0ms</span>
                      <span>Excellent (&lt;200ms)</span>
                      <span>Good (&lt;500ms)</span>
                      <span>Poor (&gt;1000ms)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          testResults.ttfb <= 200 ? 'bg-green-500' :
                          testResults.ttfb <= 500 ? 'bg-blue-500' :
                          testResults.ttfb <= 1000 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ 
                          width: `${Math.min((testResults.ttfb / 1500) * 100, 100)}%` 
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  {testResults.recommendations && testResults.recommendations.length > 0 && (
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Performance Recommendations
                      </h3>
                      <ul className="space-y-2">
                        {testResults.recommendations.map((recommendation, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-gray-700">{recommendation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Test History */}
                {testHistory.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Test History</h3>
                      <button
                        onClick={exportResults}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
                      >
                        Export CSV
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {testHistory.map((result, index) => {
                        const status = getTTFBStatus(result.ttfb);
                        const StatusIcon = status.icon;
                        
                        return (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <StatusIcon className={`h-5 w-5 ${status.color}`} />
                              <div>
                                <div className="font-medium text-gray-900">
                                  {new URL(result.url).hostname}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {new Date(result.timestamp).toLocaleString()}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-900">{result.ttfb}ms</div>
                              <div className={`text-sm ${status.color}`}>{status.status}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="text-center py-8">
                  <XCircleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Test Failed
                  </h3>
                  <p className="text-red-600">{testResults.error}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SEO Content Sections - Dutch */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wat is TTFB en Waarom Is Het Belangrijk voor SEO?</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              TTFB (Time To First Byte) is de tijd die je server nodig heeft om de eerste byte van data naar de browser te sturen nadat een verzoek is gedaan. Het is een cruciale performance metric die direct invloed heeft op je pagina laadsnelheid en daarmee op je Google rankings. Een lage TTFB zorgt voor snellere websites en betere gebruikerservaring.
            </p>

            <p>
              Wanneer je een TTFB test uitvoert met onze TTFB checker, meet je eigenlijk hoe snel je server reageert. Dit omvat DNS lookup tijd, verbindingstijd, SSL handshake en de tijd die je server nodig heeft om de request te verwerken. Google gebruikt TTFB als een van de Core Web Vitals signalen voor rankings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">TTFB Check Uitvoeren en Interpreteren</h3>
            
            <p>
              Met een TTFB checker zie je direct waar vertragingen optreden. Een goede TTFB ligt onder de 200ms, acceptabel is 200-500ms, en alles boven de 1000ms is problematisch voor SEO. Als je TTFB test resultaten slecht zijn, kan dit verschillende oorzaken hebben: trage hosting, inefficiënte database queries, geen caching, of te veel server-side processing.
            </p>

            <p>
              De TTFB check tool hierboven splitst de totale tijd op in verschillende componenten. DNS lookup tijd toont hoe snel je domeinnaam wordt vertaald naar een IP-adres. Connection time is de tijd om verbinding te maken met de server. Server time is de daadwerkelijke verwerkingstijd van je server. Door deze op te splitsen zie je precies waar optimalisatie nodig is.
            </p>

            <p>
              Check ook je <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML validatie</Link> en <Link href="/tools/responsive-design-checker" className="text-blue-600 hover:underline">responsive design</Link> voor complete website performance.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">TTFB Verbeteren: Praktische Tips</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Na je TTFB test wil je natuurlijk weten hoe je de score verbetert. De meest impactvolle verbetering is meestal betere hosting. Gedeelde hosting heeft vaak trage TTFB omdat je server resources deelt met honderden andere sites. Upgrade naar een VPS of dedicated server als je TTFB check consistent slechte resultaten toont.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Server-Side Optimalisaties</h3>
            
            <p>
              Implementeer server-side caching om dynamische content niet elke keer opnieuw te genereren. Voor WordPress gebruik je plugins zoals WP Rocket of W3 Total Cache. Voor custom applicaties implementeer je Redis of Memcached. Caching kan je TTFB met 50-80% verbeteren volgens onze TTFB checker metingen.
            </p>

            <p>
              Database optimalisatie is essentieel. Trage database queries kunnen je TTFB naar boven duwen. Gebruik database indexen, optimaliseer queries, en implementeer query caching. Als je TTFB test hoge server time toont, ligt het probleem vaak in de database.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">CDN en DNS Optimalisatie</h3>
            
            <p>
              Een Content Delivery Network (CDN) zoals Cloudflare kan je TTFB drastisch verbeteren, vooral voor internationale bezoekers. De CDN serveert content vanaf servers dichtbij de gebruiker. Als je TTFB check hoge DNS lookup tijd toont, overweeg dan een snellere DNS provider zoals Cloudflare DNS of Google DNS.
            </p>

            <p>
              Monitor regelmatig je TTFB met deze checker om degradatie vroeg op te sporen. Als je nieuwe plugins installeert, extra scripts toevoegt, of je database groeit, kan je TTFB verslechteren. Wekelijkse TTFB tests helpen problemen vroeg identificeren.
            </p>

            <p>
              Optimaliseer ook je <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link> en <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">zoekwoorden</Link> naast je technische SEO.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen over TTFB</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wat is een goede TTFB score?</h3>
              <p className="text-gray-700">
                Een uitstekende TTFB ligt onder de 200ms. Google beschouwt 200-500ms als acceptabel, maar alles onder de 200ms geeft je een competitief voordeel. Boven de 1000ms is problematisch en moet je direct aanpakken. Gebruik onze TTFB checker om je score te meten en te monitoren.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe vaak moet ik een TTFB test doen?</h3>
              <p className="text-gray-700">
                Test je TTFB wekelijks als baseline, en na elke grote website wijziging. Als je nieuwe plugins installeert, hosting wijzigt, of grote content updates doet, voer dan een TTFB check uit om te verifiëren dat de performance niet verslechterd is.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Beïnvloedt TTFB mijn Google rankings?</h3>
              <p className="text-gray-700">
                Ja, indirect. TTFB is onderdeel van je overall page speed, wat een confirmed ranking factor is. Google's Core Web Vitals waarderen snelle sites, en TTFB is de basis daarvan. Sites met lage TTFB laden sneller, hebben lagere bounce rates en betere user engagement—allemaal ranking signalen.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wat veroorzaakt een hoge TTFB?</h3>
              <p className="text-gray-700">
                De meest voorkomende oorzaken zijn trage hosting, geen server-side caching, inefficiënte database queries, te veel server-side processing, trage DNS resolution, en gebrek aan CDN. Gebruik deze TTFB test tool om te identificeren welk component het traagst is, dan weet je waar je moet optimaliseren.
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Understanding TTFB Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">TTFB Benchmarks:</h4>
              <ul className="space-y-1 ml-4">
                <li>• <span className="text-green-700 font-medium">Excellent:</span> &lt; 200ms</li>
                <li>• <span className="text-blue-700 font-medium">Good:</span> 200-500ms</li>
                <li>• <span className="text-yellow-700 font-medium">Needs Improvement:</span> 500-1000ms</li>
                <li>• <span className="text-red-700 font-medium">Poor:</span> &gt; 1000ms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Improvement Tips:</h4>
              <ul className="space-y-1 ml-4">
                <li>• Use a fast web hosting provider</li>
                <li>• Enable server-side caching</li>
                <li>• Optimize database queries</li>
                <li>• Use a Content Delivery Network (CDN)</li>
                <li>• Minimize server processing time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}