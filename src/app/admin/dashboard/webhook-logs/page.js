'use client';

import { useState, useEffect } from 'react';

export default function WebhookLogsPage() {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedLog, setExpandedLog] = useState(null);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/webhooks/logs');
      const data = await response.json();
      
      if (data.success) {
        setLogs(data.data || []);
      } else {
        setError('Failed to load webhook logs');
      }
    } catch (error) {
      setError('Error fetching webhook logs');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('nl-NL', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getStatusColor = (statusCode) => {
    if (statusCode >= 200 && statusCode < 300) return 'text-green-600 bg-green-50';
    if (statusCode >= 400 && statusCode < 500) return 'text-yellow-600 bg-yellow-50';
    if (statusCode >= 500) return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getSourceColor = (source) => {
    const colors = {
      'shipsquared': 'bg-gray-100 text-gray-700',
      'jillrocket': 'bg-purple-100 text-purple-700',
      'biafinance': 'bg-blue-100 text-blue-700'
    };
    return colors[source] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Webhook Logs</h1>
          <p className="text-gray-600 mt-1">Monitor all webhook attempts and responses</p>
        </div>
        <button
          onClick={fetchLogs}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Refresh
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* Logs Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-500">Loading webhook logs...</p>
          </div>
        ) : logs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    URL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Topic
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {logs.map((log) => (
                  <React.Fragment key={log.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(log.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${getSourceColor(log.payload?.source)}`}>
                          {log.payload?.source || 'unknown'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(log.statusCode)}`}>
                          {log.statusCode || 'N/A'} {log.success ? '✓' : '✗'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="max-w-xs truncate" title={log.url}>
                          {log.url}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div className="max-w-xs truncate" title={log.payload?.topic}>
                          {log.payload?.topic || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setExpandedLog(expandedLog === log.id ? null : log.id)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {expandedLog === log.id ? 'Hide' : 'Details'}
                        </button>
                      </td>
                    </tr>
                    {expandedLog === log.id && (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 bg-gray-50">
                          <div className="space-y-4">
                            {/* Payload */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Payload Sent:</h4>
                              <pre className="bg-white p-3 rounded border border-gray-200 text-xs overflow-x-auto">
                                {JSON.stringify(log.payload, null, 2)}
                              </pre>
                            </div>
                            
                            {/* Response */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Response Received:</h4>
                              <pre className="bg-white p-3 rounded border border-gray-200 text-xs overflow-x-auto">
                                {log.response ? JSON.stringify(log.response, null, 2) : 'No response data'}
                              </pre>
                            </div>

                            {/* Full URL */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Full Webhook URL:</h4>
                              <code className="bg-white px-3 py-1 rounded border border-gray-200 text-xs block overflow-x-auto">
                                {log.url}
                              </code>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>No webhook logs found</p>
            <p className="text-sm mt-2">Webhook logs will appear here after article generation attempts</p>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-900 mb-2">Understanding Webhook Logs</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>Status 200-299:</strong> Webhook successful, n8n received and processed the request</li>
          <li>• <strong>Status 400-499:</strong> Client error, check webhook URL and payload format</li>
          <li>• <strong>Status 500-599:</strong> Server error, n8n had an internal error</li>
          <li>• <strong>No status:</strong> Connection failed, webhook URL might be incorrect or n8n is offline</li>
        </ul>
      </div>
    </div>
  );
}