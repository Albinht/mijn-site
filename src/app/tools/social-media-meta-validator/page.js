'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function SocialMediaMetaValidator() {
  const [url, setUrl] = useState('');
  const [validationResults, setValidationResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidate = async () => {
    if (!url.trim()) return;

    setIsLoading(true);
    setValidationResults(null);

    try {
      const response = await fetch('/api/tools/social-media-meta-validator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setValidationResults(data);
    } catch (error) {
      console.error('Error validating meta tags:', error);
      setValidationResults({
        success: false,
        error: 'Failed to validate meta tags. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (isValid, isPresent) => {
    if (isValid) return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    if (isPresent) return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
    return <XCircleIcon className="h-5 w-5 text-red-500" />;
  };

  const getStatusText = (isValid, isPresent) => {
    if (isValid) return 'Valid';
    if (isPresent) return 'Warning';
    return 'Missing';
  };

  const getStatusColor = (isValid, isPresent) => {
    if (isValid) return 'text-green-600';
    if (isPresent) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <ShareIcon className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">
              Social Media Meta Tags Validator
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Validate your Open Graph and Twitter Card meta tags to ensure perfect social media sharing. 
            Preview how your content will appear on Facebook, Twitter, LinkedIn, and other platforms.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter URL to Validate</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                id="url"
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/your-page"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button
              onClick={handleValidate}
              disabled={isLoading || !url.trim()}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Validating...
                </>
              ) : (
                <>
                  <ShareIcon className="h-5 w-5 mr-2" />
                  Validate Meta Tags
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {validationResults && (
          <div className="space-y-8">
            {validationResults.success ? (
              <>
                {/* Open Graph Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded mr-3 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">f</span>
                    </div>
                    Open Graph (Facebook/LinkedIn)
                  </h2>

                  {/* Open Graph Validation */}
                  <div className="space-y-4 mb-6">
                    {Object.entries(validationResults.openGraph.tags).map(([key, tag]) => (
                      <div key={key} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(tag.isValid, tag.isPresent)}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">{tag.property}</h4>
                            <p className="text-xs text-gray-500">{tag.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-medium ${getStatusColor(tag.isValid, tag.isPresent)}`}>
                            {getStatusText(tag.isValid, tag.isPresent)}
                          </span>
                          {tag.value && (
                            <p className="text-xs text-gray-600 max-w-md truncate">
                              {tag.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Open Graph Preview */}
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Facebook/LinkedIn Preview</h3>
                    <div className="bg-white border rounded p-4">
                      {validationResults.openGraph.preview.image && (
                        <div className="mb-3">
                          <img 
                            src={validationResults.openGraph.preview.image} 
                            alt="Preview"
                            className="w-full h-48 object-cover rounded"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        </div>
                      )}
                      <h4 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer mb-1">
                        {validationResults.openGraph.preview.title || 'No title'}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {validationResults.openGraph.preview.description || 'No description'}
                      </p>
                      <p className="text-xs text-gray-500 uppercase">
                        {validationResults.openGraph.preview.siteName || new URL(url).hostname}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Twitter Card Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="w-6 h-6 bg-blue-400 rounded mr-3 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    Twitter Cards
                  </h2>

                  {/* Twitter Validation */}
                  <div className="space-y-4 mb-6">
                    {Object.entries(validationResults.twitter.tags).map(([key, tag]) => (
                      <div key={key} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(tag.isValid, tag.isPresent)}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">{tag.property}</h4>
                            <p className="text-xs text-gray-500">{tag.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-medium ${getStatusColor(tag.isValid, tag.isPresent)}`}>
                            {getStatusText(tag.isValid, tag.isPresent)}
                          </span>
                          {tag.value && (
                            <p className="text-xs text-gray-600 max-w-md truncate">
                              {tag.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Twitter Preview */}
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Twitter Preview</h3>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      {validationResults.twitter.preview.image && (
                        <img 
                          src={validationResults.twitter.preview.image} 
                          alt="Preview"
                          className="w-full h-48 object-cover"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      )}
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {validationResults.twitter.preview.title || 'No title'}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {validationResults.twitter.preview.description || 'No description'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new URL(url).hostname}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Validation Summary</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {validationResults.summary.valid}
                      </div>
                      <div className="text-sm text-green-700">Valid Tags</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">
                        {validationResults.summary.warnings}
                      </div>
                      <div className="text-sm text-yellow-700">Warnings</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">
                        {validationResults.summary.missing}
                      </div>
                      <div className="text-sm text-red-700">Missing</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {validationResults.summary.score}%
                      </div>
                      <div className="text-sm text-blue-700">Score</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="text-center py-8">
                  <XCircleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Validation Failed
                  </h3>
                  <p className="text-red-600">{validationResults.error}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SEO Content - Dutch */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Graph Checker en Twitter Card Validator</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Deze open graph checker valideert je social media meta tags voor Facebook, LinkedIn en Twitter. Een opengraph tester is essentieel omdat verkeerde meta tags leiden tot lelijke social shares zonder afbeelding of met verkeerde tekst. De twitter card validator controleert specifiek of je Twitter Cards correct zijn geïmplementeerd voor optimale presentatie wanneer mensen je links delen.
            </p>

            <p>
              Open Graph meta tags bepalen hoe je content eruitziet wanneer gedeeld op social media. De open graph checker hierboven test alle vereiste og:tags zoals og:title, og:description, og:image en og:url. Voor Twitter gebruik je twitter:card, twitter:title en twitter:image tags. Test beide met deze social meta validator voordat je content gaat promoten—een missing of invalid tag kan je click-through rate drastisch verlagen.
            </p>

            <p>
              Optimaliseer ook je <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link> en <Link href="/tools/rich-snippet-validator" className="text-blue-600 hover:underline">schema markup</Link> voor complete SEO.
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Social Media Meta Tags Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">Open Graph (Facebook/LinkedIn):</h4>
              <ul className="space-y-1 ml-4">
                <li>• og:title - Page title (60 characters max)</li>
                <li>• og:description - Page description (155 characters max)</li>
                <li>• og:image - Image URL (1200x630px recommended)</li>
                <li>• og:url - Canonical URL of the page</li>
                <li>• og:type - Content type (article, website, etc.)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Twitter Cards:</h4>
              <ul className="space-y-1 ml-4">
                <li>• twitter:card - Card type (summary, summary_large_image)</li>
                <li>• twitter:title - Page title (70 characters max)</li>
                <li>• twitter:description - Page description (200 characters max)</li>
                <li>• twitter:image - Image URL (minimum 300x157px)</li>
                <li>• twitter:site - @username of website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}