'use client';

import { useState, useEffect } from 'react';
import { useArticles, useGenerateArticle } from '@/hooks/useApi';
import { mutate } from 'swr';

export default function ArticlesPage() {
  const [activeForm, setActiveForm] = useState('shipsquared');
  const [formData, setFormData] = useState({ topic: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showWebhookSettings, setShowWebhookSettings] = useState(false);
  const [testingWebhook, setTestingWebhook] = useState(null);
  const [testResult, setTestResult] = useState(null);
  const [hasProcessingArticles, setHasProcessingArticles] = useState(false);
  const [webhookHealth, setWebhookHealth] = useState({});
  const [showManualForm, setShowManualForm] = useState(false);
  const [manualContent, setManualContent] = useState('');
  
  // Webhook configurations for each form
  const [webhooks, setWebhooks] = useState({
    shipsquared: 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650',
    jillrocket: '',
    biafinance: ''
  });
  
  const { articles, isLoading, isError, mutate: mutateArticles } = useArticles({ limit: 10 });
  const { generateArticle, isGenerating } = useGenerateArticle();
  
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

  // Load webhooks from localStorage or settings
  useEffect(() => {
    const savedWebhooks = localStorage.getItem('articleWebhooks');
    if (savedWebhooks) {
      const parsed = JSON.parse(savedWebhooks);
      // Keep hardcoded shipsquared webhook, only update others
      setWebhooks({
        shipsquared: 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650',
        jillrocket: parsed.jillrocket || '',
        biafinance: parsed.biafinance || ''
      });
    }
    
    // Check webhook health
    checkWebhookHealth();
  }, []);
  
  const checkWebhookHealth = async () => {
    for (const [key, url] of Object.entries(webhooks)) {
      if (url) {
        try {
          const response = await fetch(`/api/webhooks/health?url=${encodeURIComponent(url)}`);
          const data = await response.json();
          setWebhookHealth(prev => ({ ...prev, [key]: data }));
        } catch (error) {
          setWebhookHealth(prev => ({ ...prev, [key]: { healthy: false, message: 'Health check failed' } }));
        }
      }
    }
  };

  // Save webhooks to localStorage
  const saveWebhooks = () => {
    // Always keep shipsquared webhook hardcoded
    const toSave = {
      ...webhooks,
      shipsquared: 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650'
    };
    localStorage.setItem('articleWebhooks', JSON.stringify(toSave));
    setSuccessMessage('Webhook settings saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    // Allow manual submission or webhook
    if (!webhooks[activeForm] && !showManualForm) {
      setError(`Please configure webhook for ${activeForm === 'shipsquared' ? 'SHIPSQUARED' : activeForm === 'jillrocket' ? 'Jillrocket.nl' : 'Bia-finance.nl'} or use manual mode`);
      return;
    }

    setError('');
    setSuccessMessage('');

    try {
      let result;
      
      if (showManualForm && manualContent) {
        // Manual article creation
        const response = await fetch('/api/articles/create-manual', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: formData.topic,
            content: manualContent,
            source: activeForm,
            status: 'PUBLISHED'
          })
        });
        result = await response.json();
      } else {
        // Webhook generation
        result = await generateArticle({
          topic: formData.topic,
          source: activeForm,
          webhook: webhooks[activeForm]
        });
      }
      
      if (result.success) {
        if (result.data?.async) {
          setSuccessMessage(`Article generation started! Your article will be ready shortly. The page will auto-refresh.`);
        } else {
          setSuccessMessage(`Article generated successfully for ${activeForm === 'shipsquared' ? 'SHIPSQUARED' : activeForm === 'jillrocket' ? 'Jillrocket.nl' : 'Bia-finance.nl'}!`);
        }
        setFormData({ topic: '' });
        // Refresh articles list
        setTimeout(() => mutateArticles(), 1000);
      } else {
        setError('Failed to generate article');
      }
    } catch (err) {
      setError(err.info?.error?.message || 'An error occurred while generating the article');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };
  
  const handleRetry = async (article) => {
    try {
      // Find the webhook for the article's source
      const webhook = webhooks[article.source] || webhooks.shipsquared;
      
      if (!webhook) {
        setError('No webhook configured for retry');
        return;
      }
      
      // Retry with the original topic
      const result = await generateArticle({
        topic: article.topic,
        source: article.source || 'shipsquared',
        webhook: webhook
      });
      
      if (result.success) {
        setSuccessMessage('Retry started successfully');
        setTimeout(() => mutateArticles(), 1000);
      } else {
        setError('Failed to retry article generation');
      }
    } catch (error) {
      setError('Error retrying article: ' + error.message);
    }
  };

  const handleWebhookChange = (form, value) => {
    setWebhooks({ ...webhooks, [form]: value });
  };

  const testWebhook = async (formId) => {
    if (!webhooks[formId]) {
      setError('Please enter a webhook URL first');
      return;
    }
    
    setTestingWebhook(formId);
    setTestResult(null);
    
    try {
      const response = await fetch('/api/webhooks/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          webhookUrl: webhooks[formId],
          source: formId
        })
      });
      
      const data = await response.json();
      
      if (data.success && data.data.success) {
        setTestResult({
          success: true,
          message: `✅ Webhook test successful! Response time: ${data.data.responseTime}`,
          details: data.data
        });
      } else {
        setTestResult({
          success: false,
          message: `❌ Webhook test failed: ${data.data?.message || 'Unknown error'}`,
          details: data.data
        });
        // Auto-enable simple generation if webhook fails with timeout
        if (data.data?.message?.includes('timeout') || data.data?.error?.includes('timeout')) {
          setUseSimpleGeneration(true);
          setSuccessMessage('Webhook is not responding. Switched to template generation mode.');
        }
      }
    } catch (error) {
      setTestResult({
        success: false,
        message: `❌ Test failed: ${error.message}`,
        details: null
      });
    } finally {
      setTestingWebhook(null);
      setTimeout(() => setTestResult(null), 10000); // Clear result after 10 seconds
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      'DRAFT': 'bg-gray-100 text-gray-800',
      'PROCESSING': 'bg-yellow-100 text-yellow-800',
      'PUBLISHED': 'bg-green-100 text-green-800',
      'ARCHIVED': 'bg-red-100 text-red-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const forms = [
    { id: 'shipsquared', name: 'SHIPSQUARED', color: 'bg-gray-900' },
    { id: 'jillrocket', name: 'Jillrocket.nl', color: 'bg-purple-600' },
    { id: 'biafinance', name: 'Bia-finance.nl', color: 'bg-blue-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Settings Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Article Generation</h1>
        <div className="flex gap-2">
          <a
            href="/admin/dashboard/webhook-logs"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Webhook Logs
          </a>
          <button
            onClick={() => setShowWebhookSettings(!showWebhookSettings)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Webhook Settings
          </button>
        </div>
      </div>

      {/* Webhook Settings Panel */}
      {showWebhookSettings && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Webhook Configuration</h2>
          <div className="space-y-4">
            {forms.map((form) => (
              <div key={form.id}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {form.name} Webhook URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={webhooks[form.id]}
                    onChange={(e) => form.id !== 'shipsquared' && handleWebhookChange(form.id, e.target.value)}
                    placeholder={`https://n8n-webhook-url-for-${form.id}...`}
                    disabled={form.id === 'shipsquared'}
                    className={`flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${form.id === 'shipsquared' ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => testWebhook(form.id)}
                    disabled={!webhooks[form.id] || testingWebhook === form.id}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {testingWebhook === form.id ? 'Testing...' : 'Test'}
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={saveWebhooks}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Save Webhook Settings
            </button>
            
            {/* Test Result Display */}
            {testResult && (
              <div className={`mt-4 p-4 rounded-lg border ${testResult.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <p className={`text-sm font-medium ${testResult.success ? 'text-green-800' : 'text-red-800'}`}>
                  {testResult.message}
                </p>
                {testResult.details && (
                  <details className="mt-2">
                    <summary className="text-xs text-gray-600 cursor-pointer">View details</summary>
                    <pre className="mt-2 text-xs overflow-x-auto">
                      {JSON.stringify(testResult.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Form Selector Tabs */}
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
        {forms.map((form) => (
          <button
            key={form.id}
            onClick={() => setActiveForm(form.id)}
            className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors ${
              activeForm === form.id
                ? `${form.color} text-white`
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
            }`}
          >
            {form.name}
          </button>
        ))}
      </div>
      
      {/* Generate Article Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {forms.map((form) => (
          <div
            key={form.id}
            className={`bg-white rounded-lg border-2 transition-all ${
              activeForm === form.id ? 'border-gray-900 shadow-lg' : 'border-gray-200 opacity-60'
            }`}
          >
            <div className={`${form.color} text-white p-4 rounded-t-lg`}>
              <h2 className="text-lg font-bold text-center">{form.name}</h2>
            </div>
            
            <div className="p-6">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isGenerating || activeForm !== form.id}
                  />
                </div>

                {activeForm === form.id && (
                  <>
                    {!webhooks[form.id] && !showManualForm && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <p className="text-sm text-yellow-800">
                          ⚠️ No webhook configured. <button 
                            type="button"
                            onClick={() => setShowManualForm(true)}
                            className="underline font-medium"
                          >
                            Use manual mode instead
                          </button>
                        </p>
                      </div>
                    )}
                    
                    {showManualForm && activeForm === form.id && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-sm font-medium text-gray-700">
                            Manual Content
                          </label>
                          <button
                            type="button"
                            onClick={() => {
                              setShowManualForm(false);
                              setManualContent('');
                            }}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            Use webhook instead
                          </button>
                        </div>
                        <textarea
                          value={manualContent}
                          onChange={(e) => setManualContent(e.target.value)}
                          placeholder="Paste or write your article content here..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          rows="6"
                        />
                      </div>
                    )}

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
                  disabled={isGenerating || activeForm !== form.id || (!webhooks[form.id] && !showManualForm)}
                  className={`w-full px-4 py-2 ${form.color} text-white rounded-lg hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isGenerating && activeForm === form.id ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </span>
                  ) : useSimpleGeneration && activeForm === form.id ? (
                    'Generate Template'
                  ) : showManualForm && activeForm === form.id ? (
                    'Create Article'
                  ) : (
                    'Generate Article'
                  )}
                </button>
              </form>

              {/* Webhook Status Indicator */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Status:</span>
                  {showManualForm && activeForm === form.id ? (
                    <span className="flex items-center text-blue-600">
                      <span className="w-2 h-2 rounded-full mr-1 bg-blue-600"></span>
                      Manual Mode
                    </span>
                  ) : webhookHealth[form.id]?.healthy ? (
                    <span className="flex items-center text-green-600">
                      <span className="w-2 h-2 rounded-full mr-1 bg-green-600"></span>
                      Webhook Active
                    </span>
                  ) : webhooks[form.id] ? (
                    <span className="flex items-center text-yellow-600">
                      <span className="w-2 h-2 rounded-full mr-1 bg-yellow-600 animate-pulse"></span>
                      Webhook Down
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <span className="w-2 h-2 rounded-full mr-1 bg-red-600"></span>
                      Not configured
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Articles List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Articles</h2>
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
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
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
              <div key={article.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-900">
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
                      {article.author && (
                        <span className="text-xs text-gray-500">
                          by {article.author.username}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
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
                    {article.status === 'DRAFT' && article.content?.includes('Webhook Error') && (
                      <button 
                        onClick={() => handleRetry(article)}
                        className="text-sm text-orange-600 hover:text-orange-800"
                      >
                        Retry
                      </button>
                    )}
                    <button className="text-sm text-blue-600 hover:text-blue-800">
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

// Helper functions
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}