'use client';

import { useState } from 'react';
import useLocale from '@/hooks/useLocale';
import { getLeadFormCopy } from '@/i18n/lead-form';

export default function LeadForm() {
  const { locale } = useLocale();
  const copy = getLeadFormCopy(locale);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || copy.error);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(copy.error);
      console.error('Form submission error:', error);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl text-[#1795FF]">✱</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{copy.success.title}</h3>
          <p className="text-gray-600 mb-6">
            {copy.success.body}
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-[#1795FF] hover:underline font-semibold"
          >
            {copy.success.reset}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{copy.header.title}</h3>
        <p className="text-sm text-gray-600">{copy.header.subtitle}</p>
      </div>

      <form className="p-6 space-y-4" onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-900">{copy.sectionTitle}</h4>
          
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
              {copy.fields.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1795FF] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder={copy.placeholders.name}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
              {copy.fields.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1795FF] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder={copy.placeholders.email}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1.5">
              {copy.fields.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1795FF] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder={copy.placeholders.phone}
            />
          </div>

          {/* Service Interest */}
          <div>
            <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1.5">
              {copy.fields.service}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1795FF] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed bg-white"
            >
              <option value="">{copy.serviceOptions.placeholder}</option>
              {copy.serviceOptions.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-2 gap-3">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-xs font-medium text-gray-700 mb-1.5">
                {copy.fields.date}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1795FF] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-xs font-medium text-gray-700 mb-1.5">
                {copy.fields.time}
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                min="09:00"
                max="17:00"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1795FF] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-xs">
            {errorMessage || copy.error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#1795FF] hover:bg-[#0f7dd4] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 border-2 border-black hover:translate-y-1 hover:shadow-[0_3px_0_0_#000] shadow-[0_6px_0_0_#000] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_6px_0_0_#000] text-sm"
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {copy.submit.loading}
            </span>
          ) : (
            copy.submit.idle
          )}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          {copy.footnote}
        </p>
      </form>
    </div>
  );
}
