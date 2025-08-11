'use client';

import { useState } from 'react';

export default function TestWebhookPage() {
  const [webhookUrl, setWebhookUrl] = useState('https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testWebhook = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const response = await fetch('/api/webhooks/direct-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl })
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ 
        success: false, 
        error: error.message,
        clientError: true 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Webhook Direct Test</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Webhook URL
            </label>
            <input
              type="url"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="https://..."
            />
          </div>
          
          <button
            onClick={testWebhook}
            disabled={loading || !webhookUrl}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test Webhook'}
          </button>
        </div>

        {result && (
          <div className={`bg-white rounded-lg shadow p-6 ${result.success ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
            <h2 className="text-xl font-semibold mb-4">
              {result.success ? '✅ Success' : '❌ Failed'}
            </h2>
            
            <div className="space-y-2">
              {result.status && (
                <div>
                  <strong>Status:</strong> {result.status} {result.statusText}
                </div>
              )}
              
              {result.responseTime && (
                <div>
                  <strong>Response Time:</strong> {result.responseTime}
                </div>
              )}
              
              {result.error && (
                <div className="text-red-600">
                  <strong>Error:</strong> {result.error}
                  {result.errorType && ` (Type: ${result.errorType})`}
                </div>
              )}
              
              {result.body && (
                <div>
                  <strong>Response Body:</strong>
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-x-auto">
                    {result.body}
                  </pre>
                </div>
              )}
              
              {result.headers && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm text-gray-600">
                    Response Headers
                  </summary>
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
                    {JSON.stringify(result.headers, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Debug Info:</h3>
          <ul className="text-sm space-y-1">
            <li>• This page tests the webhook directly without authentication</li>
            <li>• Check browser console (F12) for additional logs</li>
            <li>• Check server logs for backend debugging info</li>
            <li>• Timeout is set to 5 seconds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}