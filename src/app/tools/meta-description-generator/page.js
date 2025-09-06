'use client';

import { useState } from 'react';
import { ClipboardIcon, CheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function MetaDescriptionGenerator() {
  const [pageTitle, setPageTitle] = useState('');
  const [pageContent, setPageContent] = useState('');
  const [targetKeywords, setTargetKeywords] = useState('');
  const [tone, setTone] = useState('professional');
  const [callToAction, setCallToAction] = useState('');
  const [generatedDescriptions, setGeneratedDescriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleGenerate = async () => {
    if (!pageTitle.trim()) return;

    setIsLoading(true);
    setGeneratedDescriptions([]);

    try {
      const response = await fetch('/api/tools/meta-description-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageTitle,
          pageContent,
          targetKeywords,
          tone,
          callToAction
        }),
      });

      const data = await response.json();
      if (data.descriptions) {
        setGeneratedDescriptions(data.descriptions);
      }
    } catch (error) {
      console.error('Error generating meta descriptions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const getCharacterCount = (text) => {
    return text.length;
  };

  const getStatusColor = (length) => {
    if (length >= 150 && length <= 160) return 'text-green-600';
    if (length >= 120 && length <= 170) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <SparklesIcon className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">
              AI Meta Description Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate compelling, SEO-optimized meta descriptions that improve click-through rates 
            and search engine visibility using AI.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Page Information</h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="pageTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Page Title <span className="text-red-500">*</span>
              </label>
              <input
                id="pageTitle"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Digital Marketing Services for Small Businesses"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="pageContent" className="block text-sm font-medium text-gray-700 mb-2">
                Page Content Summary
              </label>
              <textarea
                id="pageContent"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of what the page is about, key benefits, services offered, etc."
                value={pageContent}
                onChange={(e) => setPageContent(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="targetKeywords" className="block text-sm font-medium text-gray-700 mb-2">
                Target Keywords
              </label>
              <input
                id="targetKeywords"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., digital marketing, SEO services, online advertising"
                value={targetKeywords}
                onChange={(e) => setTargetKeywords(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
                  Tone of Voice
                </label>
                <select
                  id="tone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly</option>
                  <option value="authoritative">Authoritative</option>
                  <option value="conversational">Conversational</option>
                  <option value="urgent">Urgent</option>
                  <option value="creative">Creative</option>
                </select>
              </div>

              <div>
                <label htmlFor="callToAction" className="block text-sm font-medium text-gray-700 mb-2">
                  Call to Action
                </label>
                <input
                  id="callToAction"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Get started today, Learn more, Contact us"
                  value={callToAction}
                  onChange={(e) => setCallToAction(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isLoading || !pageTitle.trim()}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating...
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  Generate Meta Descriptions
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {generatedDescriptions.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Generated Meta Descriptions</h2>
            
            <div className="space-y-4">
              {generatedDescriptions.map((description, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-gray-700">Option {index + 1}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getStatusColor(getCharacterCount(description))}`}>
                        {getCharacterCount(description)} chars
                      </span>
                      <button
                        onClick={() => copyToClipboard(description, index)}
                        className="text-gray-500 hover:text-gray-700 p-1"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === index ? (
                          <CheckIcon className="h-4 w-4 text-green-500" />
                        ) : (
                          <ClipboardIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-900 leading-relaxed">{description}</p>
                  <div className="mt-2 text-xs text-gray-500">
                    {getCharacterCount(description) >= 150 && getCharacterCount(description) <= 160 && 
                      '✅ Optimal length'}
                    {getCharacterCount(description) >= 120 && getCharacterCount(description) < 150 && 
                      '⚠️ Could be longer'}
                    {getCharacterCount(description) > 160 && getCharacterCount(description) <= 170 && 
                      '⚠️ May be truncated'}
                    {getCharacterCount(description) < 120 && 
                      '❌ Too short'}
                    {getCharacterCount(description) > 170 && 
                      '❌ Too long'}
                  </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="space-y-2">
              <p>• <strong>Length:</strong> 150-160 characters for optimal display</p>
              <p>• <strong>Keywords:</strong> Include primary keywords naturally</p>
              <p>• <strong>Unique:</strong> Each page needs a unique description</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Compelling:</strong> Write to encourage clicks</p>
              <p>• <strong>Accurate:</strong> Reflect the page content truthfully</p>
              <p>• <strong>Action-oriented:</strong> Include clear calls-to-action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}