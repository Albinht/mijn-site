'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, SparklesIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function KeywordSuggestionTool() {
  const [seedKeyword, setSeedKeyword] = useState('');
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [keywordType, setKeywordType] = useState('mixed');
  const [suggestions, setSuggestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedKeywords, setCopiedKeywords] = useState(new Set());

  const handleGenerate = async () => {
    if (!seedKeyword.trim()) return;

    setIsLoading(true);
    setSuggestions(null);

    try {
      const response = await fetch('/api/tools/keyword-suggestion-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seedKeyword,
          industry,
          targetAudience,
          keywordType
        }),
      });

      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error generating keywords:', error);
      setSuggestions({
        success: false,
        error: 'Failed to generate keyword suggestions. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyKeywords = async (keywords, category) => {
    try {
      const keywordList = keywords.map(k => k.keyword).join('\n');
      await navigator.clipboard.writeText(keywordList);
      setCopiedKeywords(new Set([...copiedKeywords, category]));
      setTimeout(() => {
        setCopiedKeywords(new Set([...copiedKeywords].filter(c => c !== category)));
      }, 2000);
    } catch (error) {
      console.error('Failed to copy keywords:', error);
    }
  };

  const exportAllKeywords = () => {
    if (!suggestions?.success) return;
    
    const allKeywords = [
      'Keyword,Category,Search Intent,Competition,Content Ideas',
      ...Object.entries(suggestions.keywords).flatMap(([category, keywords]) =>
        keywords.map(k => `"${k.keyword}","${category}","${k.searchIntent}","${k.competition}","${k.contentIdeas?.join('; ') || ''}"`))
    ].join('\n');

    const blob = new Blob([allKeywords], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'keyword-suggestions.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getIntentColor = (intent) => {
    switch (intent) {
      case 'Informational': return 'bg-blue-100 text-blue-800';
      case 'Navigational': return 'bg-green-100 text-green-800';
      case 'Transactional': return 'bg-purple-100 text-purple-800';
      case 'Commercial': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCompetitionColor = (competition) => {
    switch (competition) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <MagnifyingGlassIcon className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">
              AI Keyword Suggestion Tool
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate targeted keyword ideas and content opportunities with AI. 
            Discover long-tail keywords, search intent, and competitive insights for your SEO strategy.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Generate Keyword Ideas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="seedKeyword" className="block text-sm font-medium text-gray-700 mb-2">
                Seed Keyword <span className="text-red-500">*</span>
              </label>
              <input
                id="seedKeyword"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., digital marketing, coffee shop, fitness"
                value={seedKeyword}
                onChange={(e) => setSeedKeyword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                Industry/Niche
              </label>
              <input
                id="industry"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., healthcare, e-commerce, education"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience
              </label>
              <input
                id="targetAudience"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., small business owners, millennials, professionals"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="keywordType" className="block text-sm font-medium text-gray-700 mb-2">
                Keyword Focus
              </label>
              <select
                id="keywordType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={keywordType}
                onChange={(e) => setKeywordType(e.target.value)}
              >
                <option value="mixed">Mixed (All Types)</option>
                <option value="long-tail">Long-tail Keywords</option>
                <option value="questions">Question Keywords</option>
                <option value="commercial">Commercial Intent</option>
                <option value="informational">Informational</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGenerate}
              disabled={isLoading || !seedKeyword.trim()}
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
                  Generate Keywords
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {suggestions && (
          <div className="space-y-6">
            {suggestions.success ? (
              <>
                {/* Export Button */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Keyword Suggestions ({suggestions.totalKeywords} keywords)
                    </h2>
                    <button
                      onClick={exportAllKeywords}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm flex items-center"
                    >
                      Export All CSV
                    </button>
                  </div>
                </div>

                {/* Keyword Categories */}
                {Object.entries(suggestions.keywords).map(([category, keywords]) => (
                  <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 capitalize">
                        {category.replace(/([A-Z])/g, ' $1').trim()} Keywords ({keywords.length})
                      </h3>
                      <button
                        onClick={() => copyKeywords(keywords, category)}
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-md hover:bg-gray-100"
                        title="Copy all keywords"
                      >
                        {copiedKeywords.has(category) ? (
                          <CheckIcon className="h-4 w-4 text-green-500" />
                        ) : (
                          <ClipboardIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {keywords.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{item.keyword}</h4>
                            <div className="flex space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIntentColor(item.searchIntent)}`}>
                                {item.searchIntent}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCompetitionColor(item.competition)}`}>
                                {item.competition}
                              </span>
                            </div>
                          </div>
                          
                          {item.contentIdeas && item.contentIdeas.length > 0 && (
                            <div className="mt-3">
                              <h5 className="text-xs font-medium text-gray-700 mb-1">Content Ideas:</h5>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {item.contentIdeas.map((idea, ideaIndex) => (
                                  <li key={ideaIndex}>• {idea}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* SEO Tips */}
                {suggestions.seoTips && suggestions.seoTips.length > 0 && (
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">
                      SEO Tips for "{seedKeyword}"
                    </h3>
                    <div className="space-y-2 text-sm text-blue-800">
                      {suggestions.seoTips.map((tip, index) => (
                        <p key={index}>• {tip}</p>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="text-center py-8">
                  <MagnifyingGlassIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Generation Failed
                  </h3>
                  <p className="text-red-600">{suggestions.error}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Keyword Research Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="space-y-2">
              <p>• <strong>Long-tail keywords:</strong> Target 3-5 word phrases for less competition</p>
              <p>• <strong>Search intent:</strong> Match keywords to user intent (informational vs commercial)</p>
              <p>• <strong>Competition analysis:</strong> Focus on low-medium competition keywords initially</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Keyword clusters:</strong> Group related keywords for content planning</p>
              <p>• <strong>Local SEO:</strong> Include location-based keywords for local businesses</p>
              <p>• <strong>Content gaps:</strong> Find keywords competitors are missing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}