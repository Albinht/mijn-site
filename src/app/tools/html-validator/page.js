'use client';

import { useState } from 'react';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function HTMLValidator() {
  const [inputMethod, setInputMethod] = useState('html'); // 'html' or 'url'
  const [htmlContent, setHtmlContent] = useState('');
  const [url, setUrl] = useState('');
  const [validationResults, setValidationResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidate = async () => {
    if (inputMethod === 'html' && !htmlContent.trim()) return;
    if (inputMethod === 'url' && !url.trim()) return;

    setIsLoading(true);
    setValidationResults(null);

    try {
      const response = await fetch('/api/tools/html-validator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: inputMethod,
          content: inputMethod === 'html' ? htmlContent : url
        }),
      });

      const data = await response.json();
      setValidationResults(data);
    } catch (error) {
      console.error('Error validating HTML:', error);
      setValidationResults({
        success: false,
        error: 'Failed to validate HTML. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (type) => {
    switch (type) {
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500 flex-shrink-0" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
      case 'info':
        return <InformationCircleIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />;
      default:
        return <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />;
    }
  };

  const getStatusColor = (type) => {
    switch (type) {
      case 'error':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'info':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-green-200 bg-green-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            HTML Validator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Validate your HTML markup for errors, warnings, and compliance with web standards. 
            Ensure your code follows best practices for SEO and accessibility.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Validate HTML</h2>
          
          {/* Input Method Selector */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setInputMethod('html')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                inputMethod === 'html'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              HTML Code
            </button>
            <button
              onClick={() => setInputMethod('url')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                inputMethod === 'url'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              URL
            </button>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            {inputMethod === 'html' ? (
              <div>
                <label htmlFor="htmlContent" className="block text-sm font-medium text-gray-700 mb-2">
                  HTML Content
                </label>
                <textarea
                  id="htmlContent"
                  rows={12}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  placeholder={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                />
              </div>
            ) : (
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
            )}
            
            <button
              onClick={handleValidate}
              disabled={isLoading || (inputMethod === 'html' && !htmlContent.trim()) || (inputMethod === 'url' && !url.trim())}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Validating...
                </>
              ) : (
                'Validate HTML'
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {validationResults && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Validation Results</h2>
            
            {validationResults.success ? (
              <div>
                {/* Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{validationResults.summary?.errors || 0}</div>
                    <div className="text-sm text-red-700">Errors</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{validationResults.summary?.warnings || 0}</div>
                    <div className="text-sm text-yellow-700">Warnings</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{validationResults.summary?.info || 0}</div>
                    <div className="text-sm text-blue-700">Info</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {validationResults.summary?.score || 0}%
                    </div>
                    <div className="text-sm text-green-700">Score</div>
                  </div>
                </div>

                {/* Issues */}
                {validationResults.issues && validationResults.issues.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Issues Found</h3>
                    {validationResults.issues.map((issue, index) => (
                      <div key={index} className={`border rounded-lg p-4 ${getStatusColor(issue.type)}`}>
                        <div className="flex items-start space-x-3">
                          {getStatusIcon(issue.type)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-900">{issue.message}</h4>
                              {issue.line && (
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                  Line {issue.line}
                                </span>
                              )}
                            </div>
                            {issue.description && (
                              <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                            )}
                            {issue.code && (
                              <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                                <code>{issue.code}</code>
                              </pre>
                            )}
                            {issue.suggestion && (
                              <div className="mt-2 text-sm text-gray-700">
                                <strong>Suggestion:</strong> {issue.suggestion}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      🎉 Valid HTML!
                    </h3>
                    <p className="text-gray-600">
                      Your HTML code is valid and follows web standards.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <XCircleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Validation Failed
                </h3>
                <p className="text-red-600">{validationResults.error}</p>
              </div>
            )}
          </div>
        )}

        {/* Info Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            HTML Validation Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="space-y-2">
              <p>• <strong>DOCTYPE Declaration:</strong> Always include <!DOCTYPE html></p>
              <p>• <strong>Semantic HTML:</strong> Use appropriate HTML elements for content</p>
              <p>• <strong>Alt Attributes:</strong> Include alt text for all images</p>
              <p>• <strong>Form Labels:</strong> Associate labels with form controls</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Nested Elements:</strong> Properly nest and close all HTML tags</p>
              <p>• <strong>Character Encoding:</strong> Specify UTF-8 character encoding</p>
              <p>• <strong>Language Attribute:</strong> Set lang attribute on html element</p>
              <p>• <strong>Valid CSS/JS:</strong> Ensure linked stylesheets and scripts are valid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}