'use client';

import { useState, useEffect } from 'react';
import { ClipboardIcon, CheckIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function URLSlugGenerator() {
  const [inputText, setInputText] = useState('');
  const [slugs, setSlugs] = useState([]);
  const [options, setOptions] = useState({
    separator: '-',
    lowercase: true,
    removeStopWords: false,
    maxLength: 60,
    preserveCase: false
  });
  const [copiedIndex, setCopiedIndex] = useState(null);

  const stopWords = [
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he', 
    'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'will', 'with',
    'de', 'het', 'een', 'en', 'van', 'op', 'in', 'voor', 'met', 'aan', 'bij', 'door'
  ];

  const generateSlug = (text, customOptions = {}) => {
    const opts = { ...options, ...customOptions };
    let slug = text.trim();

    // Remove special characters except spaces and hyphens
    slug = slug.replace(/[^\w\s\-]/g, '');

    // Convert to lowercase if option is enabled
    if (opts.lowercase && !opts.preserveCase) {
      slug = slug.toLowerCase();
    }

    // Remove stop words if option is enabled
    if (opts.removeStopWords) {
      const words = slug.split(/\s+/);
      const filteredWords = words.filter(word => 
        !stopWords.includes(word.toLowerCase()) || words.length <= 2
      );
      slug = filteredWords.join(' ');
    }

    // Replace spaces with separator
    slug = slug.replace(/\s+/g, opts.separator);

    // Remove multiple consecutive separators
    slug = slug.replace(new RegExp(`\\${opts.separator}+`, 'g'), opts.separator);

    // Remove leading and trailing separators
    slug = slug.replace(new RegExp(`^\\${opts.separator}+|\\${opts.separator}+$`, 'g'), '');

    // Truncate if too long
    if (opts.maxLength && slug.length > opts.maxLength) {
      slug = slug.substring(0, opts.maxLength);
      // Remove trailing separator if truncation created one
      slug = slug.replace(new RegExp(`\\${opts.separator}+$`, 'g'), '');
    }

    return slug;
  };

  const generateVariations = () => {
    if (!inputText.trim()) {
      setSlugs([]);
      return;
    }

    const variations = [
      {
        name: 'Standard',
        slug: generateSlug(inputText),
        description: 'Clean, lowercase with hyphens'
      },
      {
        name: 'With Underscores',
        slug: generateSlug(inputText, { separator: '_' }),
        description: 'Using underscores instead of hyphens'
      },
      {
        name: 'Without Stop Words',
        slug: generateSlug(inputText, { removeStopWords: true }),
        description: 'Removes common stop words'
      },
      {
        name: 'Short Version',
        slug: generateSlug(inputText, { maxLength: 30 }),
        description: 'Truncated to 30 characters'
      },
      {
        name: 'Preserve Case',
        slug: generateSlug(inputText, { preserveCase: true, lowercase: false }),
        description: 'Keeps original capitalization'
      }
    ];

    setSlugs(variations.filter(v => v.slug)); // Filter out empty slugs
  };

  useEffect(() => {
    generateVariations();
  }, [inputText, options]);

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const getSlugLength = (slug) => slug.length;
  
  const getSlugStatus = (length) => {
    if (length <= 30) return { color: 'text-green-600', status: 'Excellent' };
    if (length <= 50) return { color: 'text-blue-600', status: 'Good' };
    if (length <= 60) return { color: 'text-yellow-600', status: 'Acceptable' };
    return { color: 'text-red-600', status: 'Too Long' };
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <LinkIcon className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">
              SEO-Friendly URL Slug Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convert any text into clean, SEO-optimized URL slugs. Create user-friendly URLs 
            that improve search rankings and user experience.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Generate URL Slug</h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your text or title
              </label>
              <textarea
                id="inputText"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., How to Improve Your Website's SEO Rankings in 2024"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Separator
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={options.separator}
                  onChange={(e) => setOptions({...options, separator: e.target.value})}
                >
                  <option value="-">Hyphen (-)</option>
                  <option value="_">Underscore (_)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Length
                </label>
                <input
                  type="number"
                  min="10"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={options.maxLength}
                  onChange={(e) => setOptions({...options, maxLength: parseInt(e.target.value)})}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    checked={options.removeStopWords}
                    onChange={(e) => setOptions({...options, removeStopWords: e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-700">Remove stop words</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    checked={options.preserveCase}
                    onChange={(e) => setOptions({...options, preserveCase: e.target.checked, lowercase: !e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-700">Preserve case</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {slugs.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Generated URL Slugs</h2>
            
            <div className="space-y-4">
              {slugs.map((item, index) => {
                const length = getSlugLength(item.slug);
                const status = getSlugStatus(length);
                
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs ${status.color}`}>
                          {length} chars • {status.status}
                        </span>
                        <button
                          onClick={() => copyToClipboard(item.slug, index)}
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
                    
                    <div className="bg-gray-50 rounded p-2 font-mono text-sm">
                      <span className="text-gray-500">example.com/</span>
                      <span className="text-gray-900">{item.slug}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Live Preview */}
        {inputText && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
            <div className="bg-gray-50 rounded p-3 font-mono text-sm">
              <span className="text-gray-500">https://example.com/</span>
              <span className="text-gray-900">{generateSlug(inputText)}</span>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            URL Slug Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="space-y-2">
              <p>• <strong>Keep it short:</strong> Under 60 characters when possible</p>
              <p>• <strong>Use hyphens:</strong> Preferred over underscores by search engines</p>
              <p>• <strong>Include keywords:</strong> Use relevant keywords from your title</p>
              <p>• <strong>Avoid special characters:</strong> Stick to letters, numbers, and hyphens</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Be descriptive:</strong> URL should indicate page content</p>
              <p>• <strong>Use lowercase:</strong> Prevents case-sensitivity issues</p>
              <p>• <strong>Remove stop words:</strong> Focus on meaningful words</p>
              <p>• <strong>Make it readable:</strong> Humans should understand the URL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}