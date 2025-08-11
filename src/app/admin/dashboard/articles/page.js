'use client';

import { useState, useEffect } from 'react';
import { useArticles } from '@/hooks/useApi';

// Webhook URL constant
const WEBHOOK_URL = 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650';

export default function ArticlesPage() {
  const [activeForm, setActiveForm] = useState('shipsquared');
  const [formData, setFormData] = useState({ topic: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [hasProcessingArticles, setHasProcessingArticles] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { articles, isLoading, isError, mutate: mutateArticles } = useArticles({ limit: 10 });
  
  // Check for processing articles and setup polling
  useEffect(() => {
    if (articles) {
      const processingExists = articles.some(article => article.status === 'PROCESSING');
      setHasProcessingArticles(processingExists);
      
      // Poll for updates if there are processing articles
      if (processingExists) {
        const interval = setInterval(() => {
          mutateArticles();
        }, 5000); // Poll every 5 seconds
        
        return () => clearInterval(interval);
      }
    }
  }, [articles, mutateArticles]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setError('');
    setSuccessMessage('');
    setIsGenerating(true);

    try {
      // Direct webhook integration - send data directly to n8n webhook
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: activeForm.toUpperCase(),
          topic: formData.topic,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        setSuccessMessage('✅ Article sent to webhook successfully! It will appear here when ready.');
        setFormData({ topic: '' });
        // Refresh articles list after a short delay
        setTimeout(() => mutateArticles(), 2000);
      } else {
        // Handle different error status codes
        if (response.status === 404) {
          setError('Webhook endpoint not found. Please check the webhook URL.');
        } else if (response.status === 500) {
          setError('Webhook server error. The n8n service may be experiencing issues.');
        } else if (response.status === 503) {
          setError('Webhook service unavailable. Please try again later.');
        } else {
          setError(`Failed to send to webhook (Status: ${response.status})`);
        }
      }
    } catch (err) {
      console.error('Webhook error:', err);
      // Handle network errors
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Network error: Unable to connect to webhook. Please check your connection.');
      } else if (err.name === 'AbortError') {
        setError('Request timeout: The webhook took too long to respond.');
      } else {
        setError(err.message || 'An unexpected error occurred');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const forms = [
    { id: 'shipsquared', name: 'SHIPSQUARED', color: 'bg-gray-900' },
    { id: 'jillrocket', name: 'Jillrocket.nl', color: 'bg-purple-600' },
    { id: 'biafinance', name: 'Bia-finance.nl', color: 'bg-blue-600' }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Article Generation</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Generate articles by sending topics to the webhook</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={async () => {
                const response = await fetch('/api/webhooks/test-n8n', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ topic: 'Test JSON format' })
                });
                const data = await response.json();
                alert(`JSON Test: ${data.message}`);
              }}
              className="px-3 py-2 text-sm sm:px-4 sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Test JSON
            </button>
            <button
              onClick={async () => {
                const response = await fetch('/api/webhooks/test-plain', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ topic: 'Test plain text' })
                });
                const data = await response.json();
                alert(`Plain Text Test: ${data.message}`);
              }}
              className="px-3 py-2 text-sm sm:px-4 sm:text-base bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Test Plain Text
            </button>
          </div>
        </div>
      </div>

      {/* Form Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 bg-gray-100 p-1 rounded-lg">
        {forms.map((form) => (
          <button
            key={form.id}
            onClick={() => setActiveForm(form.id)}
            className={`flex-1 px-3 py-2 text-sm sm:text-base sm:px-4 rounded-md font-medium transition-colors ${
              activeForm === form.id
                ? `${form.color} text-white`
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
            }`}
          >
            {form.name}
          </button>
        ))}
      </div>

      {/* Generation Forms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {forms.map((form) => (
          <div
            key={form.id}
            className={`bg-white rounded-lg border-2 transition-all ${
              activeForm === form.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'
            }`}
          >
            <div className={`px-4 sm:px-6 py-3 sm:py-4 ${form.color} text-white rounded-t-lg`}>
              <h3 className="text-sm sm:text-base font-semibold">{form.name}</h3>
            </div>
            
            <div className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor={`topic-${form.id}`} className="block text-sm font-medium text-gray-700 mb-2">
                    Article Topic
                  </label>
                  <input
                    type="text"
                    id={`topic-${form.id}`}
                    name="topic"
                    value={activeForm === form.id ? formData.topic : ''}
                    onChange={handleChange}
                    placeholder="Enter a topic..."
                    className="w-full px-3 py-2 text-sm sm:text-base sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isGenerating || activeForm !== form.id}
                  />
                </div>

                {activeForm === form.id && (
                  <>
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-red-800">{error}</p>
                      </div>
                    )}

                    {successMessage && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-800">{successMessage}</p>
                      </div>
                    )}
                  </>
                )}

                <button
                  type="submit"
                  disabled={isGenerating || activeForm !== form.id}
                  className={`w-full px-3 py-2 text-sm sm:text-base sm:px-4 ${form.color} text-white rounded-lg hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isGenerating && activeForm === form.id ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending to webhook...
                    </span>
                  ) : (
                    'Generate Article'
                  )}
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {/* Articles List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">Recent Articles</h2>
          <div className="flex items-center gap-2">
            {hasProcessingArticles && (
              <span className="flex items-center text-sm text-blue-600">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Auto-refreshing...
              </span>
            )}
            <button
              onClick={() => mutateArticles()}
              className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-500">Loading articles...</p>
          </div>
        ) : isError ? (
          <div className="p-6">
            <p className="text-red-600">Failed to load articles</p>
          </div>
        ) : articles && articles.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {articles.map((article) => (
              <div key={article.id} className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-900 break-words">
                        {article.title}
                      </h3>
                      {article.source && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          article.source === 'shipsquared' ? 'bg-gray-100 text-gray-700' :
                          article.source === 'jillrocket' ? 'bg-purple-100 text-purple-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {article.source === 'shipsquared' ? 'SHIPSQUARED' :
                           article.source === 'jillrocket' ? 'Jillrocket' :
                           'Bia-finance'}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Topic: {article.topic}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs text-gray-500">
                        {formatDate(article.createdAt)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.views} views
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      article.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' :
                      article.status === 'PROCESSING' ? 'bg-blue-100 text-blue-800 animate-pulse' :
                      article.status === 'DRAFT' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {article.status === 'PROCESSING' && (
                        <svg className="animate-spin -ml-0.5 mr-1.5 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      {article.status === 'PROCESSING' ? 'Generating...' : article.status}
                    </span>
                    <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-800">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            No articles found. Generate your first article above!
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}