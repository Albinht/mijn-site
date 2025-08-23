'use client'

import { useState } from 'react'
import { savePDF } from '../lib/pdf-operations'

export default function ExportOptions({
  currentPdf,
  onCompress,
  onClear,
  hasEdits
}) {
  const [quality, setQuality] = useState(80)
  const [fileName, setFileName] = useState('edited-document')
  const [isExporting, setIsExporting] = useState(false)

  const handleDownload = async () => {
    if (!currentPdf) return
    
    setIsExporting(true)
    try {
      await savePDF(currentPdf, `${fileName}.pdf`)
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  const handleCompress = () => {
    onCompress(quality / 100)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
      <h3 className="font-semibold text-gray-900">Export Options</h3>
      
      {/* File name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          File Name
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span className="px-3 py-2 bg-gray-100 rounded-lg text-gray-600">
            .pdf
          </span>
        </div>
      </div>

      {/* Compression */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Compression Quality
        </label>
        <div className="space-y-2">
          <input
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => setQuality(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Low (10%)</span>
            <span className="font-medium text-gray-700">{quality}%</span>
            <span>High (100%)</span>
          </div>
        </div>
        <button
          onClick={handleCompress}
          disabled={!currentPdf}
          className="mt-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Apply Compression
        </button>
      </div>

      {/* Download button */}
      <button
        onClick={handleDownload}
        disabled={!currentPdf || isExporting}
        className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        {isExporting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Exporting...
          </span>
        ) : (
          <>
            <svg className="inline w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </>
        )}
      </button>

      {/* Status */}
      {hasEdits && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-sm text-green-700">
            ✓ {hasEdits ? 'Changes ready to export' : 'No changes made'}
          </p>
        </div>
      )}

      {/* Clear button */}
      <button
        onClick={onClear}
        className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
      >
        Clear All & Start Over
      </button>

      {/* Help text */}
      <div className="pt-4 border-t">
        <h4 className="font-medium text-gray-900 mb-2">Tips</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• All processing happens in your browser</li>
          <li>• Files are never uploaded to servers</li>
          <li>• Compression reduces file size</li>
          <li>• Original file remains unchanged</li>
        </ul>
      </div>
    </div>
  )
}