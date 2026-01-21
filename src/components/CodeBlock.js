'use client'

import { useState } from 'react'

export default function CodeBlock({ children, title }) {
  const [copied, setCopied] = useState(false)

  const codeText = typeof children === 'string' ? children : String(children ?? '')

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy code block:', error)
    }
  }

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden my-6">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
          <code>{codeText}</code>
        </pre>
        <button
          type="button"
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

