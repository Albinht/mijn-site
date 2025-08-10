'use client';

import { useState } from 'react';
import { useArticles, useGenerateArticle } from '@/hooks/useApi';
import { mutate } from 'swr';

export default function ArticlesPage() {
  const [formData, setFormData] = useState({ topic: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const { articles, isLoading, isError, mutate: mutateArticles } = useArticles({ limit: 10 });
  const { generateArticle, isGenerating } = useGenerateArticle();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setError('');
    setSuccessMessage('');

    try {
      const result = await generateArticle(formData.topic);
      
      if (result.success) {
        setSuccessMessage('Article generation started successfully!');
        setFormData({ topic: '' });
        // Refresh articles list
        mutateArticles();
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

  return (
    <div className="space-y-6">
      {/* SHIPSQUARED Branding */}
      <div className="text-center py-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-wider">SHIPSQUARED</h1>
      </div>
      
      {/* Generate Article Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Generate New Article</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
              Article Topic
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter a topic for the article..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={isGenerating}
            />
          </div>

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

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Article...
              </span>
            ) : (
              'Generate Article'
            )}
          </button>
        </form>
      </div>

      {/* Articles List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Articles</h2>
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
                    <h3 className="text-sm font-medium text-gray-900">
                      {article.title}
                    </h3>
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
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(article.status)}`}>
                      {article.status}
                    </span>
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