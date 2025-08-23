'use client'

import { forwardRef, useImperativeHandle, useState, useEffect, useRef } from 'react'
import { renderPageToCanvas, initPDFJS } from '../lib/pdf-renderer'
import TextEditOverlay from './TextEditOverlay'
import AddTextMode from './AddTextMode'

const PDFViewer = forwardRef(({ 
  pdfDoc, 
  currentPage, 
  selectedPages, 
  onPageSelect, 
  onPageChange,
  onTextChange,
  onTextAdd,
  isEditMode,
  isAddMode,
  isLoading 
}, ref) => {
  const [zoom, setZoom] = useState(100)
  const [pageNum, setPageNum] = useState(currentPage || 1)
  const [numPages, setNumPages] = useState(0)
  const [rendering, setRendering] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [actualScale, setActualScale] = useState(1.5)

  useImperativeHandle(ref, () => ({
    goToPage: (num) => setPageNum(num),
    zoomIn: () => setZoom(prev => Math.min(prev + 25, 200)),
    zoomOut: () => setZoom(prev => Math.max(prev - 25, 50)),
    resetZoom: () => setZoom(100),
    getCurrentPage: () => pageNum
  }))

  // Initialize PDF.js on mount
  useEffect(() => {
    const init = async () => {
      try {
        await initPDFJS()
        setIsInitialized(true)
      } catch (error) {
        console.error('Failed to initialize PDF.js:', error)
      }
    }
    init()
  }, [])

  // Update page number when currentPage prop changes
  useEffect(() => {
    if (currentPage && currentPage !== pageNum) {
      setPageNum(currentPage)
    }
  }, [currentPage])

  // Get number of pages when PDF loads
  useEffect(() => {
    if (pdfDoc) {
      setNumPages(pdfDoc.numPages || pdfDoc._pdfInfo?.numPages || 0)
    }
  }, [pdfDoc])

  // Render PDF page when document, page number, or zoom changes
  useEffect(() => {
    const renderPage = async () => {
      if (!pdfDoc || !canvasRef.current || !isInitialized) return
      
      setRendering(true)
      try {
        const scale = (zoom / 100) * 1.5
        setActualScale(scale)
        console.log('Rendering PDF with scale:', scale)
        await renderPageToCanvas(pdfDoc, pageNum, canvasRef.current, scale)
      } catch (error) {
        console.error('Error rendering page:', error)
      } finally {
        setRendering(false)
      }
    }

    renderPage()
  }, [pdfDoc, pageNum, zoom, isInitialized])

  // Notify parent of page changes
  useEffect(() => {
    if (onPageChange) {
      onPageChange(pageNum)
    }
  }, [pageNum, onPageChange])

  const handlePrevPage = () => {
    setPageNum(prev => Math.max(1, prev - 1))
  }

  const handleNextPage = () => {
    setPageNum(prev => Math.min(numPages, prev + 1))
  }

  const handlePageInputChange = (e) => {
    const page = parseInt(e.target.value)
    if (page >= 1 && page <= numPages) {
      setPageNum(page)
    }
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50))
  }

  const handleResetZoom = () => {
    setZoom(100)
  }

  const handleToggleSelection = () => {
    if (onPageSelect) {
      onPageSelect(pageNum)
    }
  }

  if (isLoading || !isInitialized) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-purple-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">{!isInitialized ? 'Initializing PDF viewer...' : 'Loading PDF...'}</p>
        </div>
      </div>
    )
  }

  if (!pdfDoc) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-50">
        <p className="text-gray-500">No PDF loaded</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Viewer Controls */}
      <div className="bg-gray-100 border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Page Navigation */}
          <button
            onClick={handlePrevPage}
            disabled={pageNum === 1}
            className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-sm text-gray-600">
            Page {pageNum} of {numPages}
          </span>
          
          <button
            onClick={handleNextPage}
            disabled={pageNum === numPages}
            className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleZoomOut}
            className="p-1 rounded hover:bg-gray-200"
            title="Zoom Out"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <span className="text-sm text-gray-600 w-12 text-center">
            {zoom}%
          </span>
          
          <button
            onClick={handleZoomIn}
            className="p-1 rounded hover:bg-gray-200"
            title="Zoom In"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          
          <button
            onClick={handleResetZoom}
            className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
          >
            Reset
          </button>
        </div>

        {/* Edit Mode Indicator */}
        {isEditMode && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <span className="text-sm font-medium">Edit Mode</span>
            </div>
          </div>
        )}

        {/* Selection Toggle */}
        {onPageSelect && !isEditMode && (
          <button
            onClick={handleToggleSelection}
            className={`px-3 py-1 rounded text-sm ${
              selectedPages?.includes(pageNum)
                ? 'bg-purple-600 text-white'
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {selectedPages?.includes(pageNum) ? 'Deselect' : 'Select'} Page
          </button>
        )}
      </div>

      {/* PDF Page Display */}
      <div 
        ref={containerRef}
        className="overflow-auto bg-gray-50 p-8" 
        style={{ height: '600px' }}
      >
        <div className="flex justify-center">
          <div className={`relative ${selectedPages?.includes(pageNum) ? 'ring-4 ring-purple-500' : ''}`}>
            <canvas
              ref={canvasRef}
              className="shadow-lg bg-white"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
            
            {/* Text Edit Overlay */}
            {isEditMode && !rendering && (
              <TextEditOverlay
                pdfDoc={pdfDoc}
                pageNumber={pageNum}
                scale={actualScale}
                onTextChange={onTextChange}
                isEditMode={isEditMode}
                canvasRef={canvasRef}
              />
            )}
            
            {/* Add Text Mode */}
            {isAddMode && !rendering && (
              <AddTextMode
                pdfDoc={pdfDoc}
                pageNumber={pageNum}
                scale={actualScale}
                onTextAdd={onTextAdd}
                isAddMode={isAddMode}
                canvasRef={canvasRef}
              />
            )}
            
            {/* Rendering overlay */}
            {rendering && (
              <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
                <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Page Jump */}
      <div className="bg-gray-100 border-t px-4 py-2">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm text-gray-600">Go to page:</span>
          <input
            type="number"
            min="1"
            max={numPages}
            value={pageNum}
            onChange={handlePageInputChange}
            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
    </div>
  )
})

PDFViewer.displayName = 'PDFViewer'

export default PDFViewer