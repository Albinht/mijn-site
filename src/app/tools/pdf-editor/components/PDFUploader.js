'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function PDFUploader({ onUpload, isLoading, error }) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('Files dropped:', acceptedFiles)
    if (acceptedFiles && acceptedFiles.length > 0) {
      onUpload(acceptedFiles)
    }
  }, [onUpload])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: true,
    maxSize: 100 * 1024 * 1024, // 100MB
    disabled: isLoading,
    noClick: false,
    noKeyboard: false
  })
  
  // Debug: Log when component mounts
  console.log('PDFUploader mounted, dropzone configured')

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
          transition-all duration-200 ease-in-out
          ${isDragActive 
            ? 'border-purple-500 bg-purple-50' 
            : 'border-gray-300 hover:border-purple-400 hover:bg-gray-50'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="mb-4">
          <svg
            className={`mx-auto h-16 w-16 ${isDragActive ? 'text-purple-500' : 'text-gray-400'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>

        {isLoading ? (
          <div>
            <div className="inline-flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-gray-600">Loading PDF...</span>
            </div>
          </div>
        ) : isDragActive ? (
          <div>
            <p className="text-lg font-semibold text-purple-600 mb-2">
              Drop your PDF files here
            </p>
            <p className="text-sm text-gray-500">
              Release to upload
            </p>
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Drag & drop PDF files here
            </p>
            <p className="text-sm text-gray-500 mb-4">
              or click to browse
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                console.log('Select Files button clicked')
                open && open()
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Select Files
            </button>
            <p className="text-xs text-gray-400 mt-4">
              Maximum file size: 100MB • Multiple files supported
            </p>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl mb-2">🔒</div>
          <h3 className="font-semibold text-sm">100% Secure</h3>
          <p className="text-xs text-gray-500 mt-1">
            Files never leave your browser
          </p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-semibold text-sm">Fast Processing</h3>
          <p className="text-xs text-gray-500 mt-1">
            Client-side processing
          </p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">🆓</div>
          <h3 className="font-semibold text-sm">Completely Free</h3>
          <p className="text-xs text-gray-500 mt-1">
            No registration required
          </p>
        </div>
      </div>
    </div>
  )
}