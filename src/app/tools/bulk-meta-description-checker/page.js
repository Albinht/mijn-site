'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function BulkMetaDescriptionChecker() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedResults, setExpandedResults] = useState(new Set());

  const handleCheck = async () => {
    if (!urls.trim()) return;

    const urlList = urls.split('\n').filter(url => url.trim());
    if (urlList.length === 0) return;

    setIsLoading(true);
    setResults([]);

    try {
      const response = await fetch('/api/tools/bulk-meta-description-checker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: urlList }),
      });

      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error('Error checking meta descriptions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedResults);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedResults(newExpanded);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'optimal':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <XCircleIcon className="h-5 w-5 text-gray-400" />;
    }
  };

  const exportResults = () => {
    const csv = [
      'URL,Meta Description,Length,Status,Recommendation',
      ...results.map(r => `"${r.url}","${r.metaDescription || 'Not found'}",${r.length},${r.status},"${r.recommendation}"`)
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meta-description-analysis.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bulk Meta Description Length Checker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Analyze meta description lengths for multiple URLs. Optimal meta descriptions are 150-160 characters 
            to ensure they display properly in search results.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter URLs to Check</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="urls" className="block text-sm font-medium text-gray-700 mb-2">
                URLs (one per line)
              </label>
              <textarea
                id="urls"
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com
https://example.com/page1
https://example.com/page2"
                value={urls}
                onChange={(e) => setUrls(e.target.value)}
              />
            </div>
            <button
              onClick={handleCheck}
              disabled={isLoading || !urls.trim()}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Checking...
                </>
              ) : (
                'Check Meta Descriptions'
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Results</h2>
              <button
                onClick={exportResults}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
              >
                Export CSV
              </button>
            </div>

            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <div
                    className="p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => toggleExpanded(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        {getStatusIcon(result.status)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {result.url}
                          </p>
                          <p className="text-sm text-gray-500">
                            Length: {result.length} characters
                          </p>
                        </div>
                      </div>
                      {expandedResults.has(index) ? (
                        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {expandedResults.has(index) && (
                    <div className="px-4 pb-4 border-t border-gray-200">
                      <div className="mt-4 space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Meta Description:</h4>
                          <p className="text-sm text-gray-600 mt-1 p-2 bg-gray-50 rounded border">
                            {result.metaDescription || 'No meta description found'}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Status:</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {result.status === 'optimal' && 'Optimal length (150-160 characters)'}
                            {result.status === 'warning' && 'Suboptimal length (may be truncated)'}
                            {result.status === 'error' && 'Missing or too short/long'}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Recommendation:</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {result.recommendation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Meta Description Best Practices
          </h3>
          <div className="space-y-2 text-sm text-blue-800">
            <p>• <strong>Optimal length:</strong> 150-160 characters to avoid truncation</p>
            <p>• <strong>Include target keywords:</strong> Help search engines understand your content</p>
            <p>• <strong>Write compelling copy:</strong> Encourage clicks with clear value propositions</p>
            <p>• <strong>Unique descriptions:</strong> Each page should have a unique meta description</p>
            <p>• <strong>Avoid duplication:</strong> Don't repeat title tag content in meta description</p>
          </div>
        </div>
      </div>
    </div>
  );
}