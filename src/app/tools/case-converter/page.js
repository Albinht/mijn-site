'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ClipboardIcon, CheckIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';

export default function CaseConverter() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const wordCount = text.trim().split(/\s+/).filter(w => w).length;
  const charCount = text.length;

  const convertCase = (type) => {
    if (!text) return text;

    switch (type) {
      case 'uppercase':
        return text.toUpperCase();
      case 'lowercase':
        return text.toLowerCase();
      case 'capitalize':
        return text.toLowerCase().replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
      case 'titlecase':
        const smallWords = ['de', 'het', 'een', 'van', 'en', 'in', 'op', 'voor', 'met', 'aan', 'bij', 'te'];
        return text.toLowerCase().split(' ').map((word, index) => {
          if (index === 0 || !smallWords.includes(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }
          return word;
        }).join(' ');
      case 'sentence':
        return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase());
      default:
        return text;
    }
  };

  const handleConvert = (type) => {
    const converted = convertCase(type);
    setText(converted);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ArrowsUpDownIcon className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case Converter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Converteer tekst naar hoofdletters, kleine letters, title case en meer. Handige tool voor tekstformattering.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">Voer je tekst in:</label>
              <span className="text-sm text-gray-500">{wordCount} woorden, {charCount} tekens</span>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Typ of plak hier je tekst..."
              className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <button onClick={() => handleConvert('uppercase')} className="p-4 bg-indigo-50 border-2 border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors">
              <div className="font-semibold text-gray-900">HOOFDLETTERS</div>
              <div className="text-xs text-gray-500 mt-1">Alles uppercase</div>
            </button>

            <button onClick={() => handleConvert('lowercase')} className="p-4 bg-purple-50 border-2 border-purple-200 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="font-semibold text-gray-900">kleine letters</div>
              <div className="text-xs text-gray-500 mt-1">Alles lowercase</div>
            </button>

            <button onClick={() => handleConvert('capitalize')} className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="font-semibold text-gray-900">Capitalize</div>
              <div className="text-xs text-gray-500 mt-1">Elk Woord</div>
            </button>

            <button onClick={() => handleConvert('titlecase')} className="p-4 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 transition-colors">
              <div className="font-semibold text-gray-900">Title Case</div>
              <div className="text-xs text-gray-500 mt-1">Smart capitalize</div>
            </button>

            <button onClick={() => handleConvert('sentence')} className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors">
              <div className="font-semibold text-gray-900">Sentence case</div>
              <div className="text-xs text-gray-500 mt-1">Per zin</div>
            </button>

            <button onClick={() => setText('')} className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-semibold text-gray-900">Wissen</div>
              <div className="text-xs text-gray-500 mt-1">Clear all</div>
            </button>
          </div>

          {text && (
            <button onClick={copyToClipboard} className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 font-semibold transition-colors">
              {copied ? (
                <>
                  <CheckIcon className="h-5 w-5" />
                  Gekopieerd!
                </>
              ) : (
                <>
                  <ClipboardIcon className="h-5 w-5" />
                  Kopieer Tekst
                </>
              )}
            </button>
          )}
        </div>

        {/* SEO Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Converter: Hoofdletters en Kleine Letters</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Deze case converter tool helpt je snel tekstcase te wijzigen. Of je nu alles naar hoofdletters wilt converteren, kleine letters nodig hebt, of title case voor koppen—deze text case converter doet het allemaal in één klik. Perfect voor het formatteren van teksten, social media posts, of het corrigeren van caps lock typos.
            </p>
            <p>
              Gebruik ook onze <Link href="/tools/tekst-herschrijver" className="text-blue-600 hover:underline">tekst herschrijver</Link> en <Link href="/tools/url-slug-generator" className="text-blue-600 hover:underline">URL slug generator</Link> voor complete teksttools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
