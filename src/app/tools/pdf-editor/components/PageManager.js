'use client'

import { useState, useEffect } from 'react'
import { generatePageThumbnail, initPDFJS } from '../lib/pdf-renderer'

export default function PageManager({
  pdfDoc,
  pages,
  selectedPages,
  onSelectPages,
  onReorderPages,
  onPageClick,
  isLoading
}) {
  const [draggedPage, setDraggedPage] = useState(null)
  const [thumbnails, setThumbnails] = useState({})
  const [loadingThumbnails, setLoadingThumbnails] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize PDF.js on mount
  useEffect(() => {
    const init = async () => {
      try {
        await initPDFJS()
        setIsInitialized(true)
      } catch (error) {
        console.error('Failed to initialize PDF.js for thumbnails:', error)
      }
    }
    init()
  }, [])

  // Generate thumbnails when PDF changes
  useEffect(() => {
    const generateThumbnails = async () => {
      if (!pdfDoc || !pdfDoc.numPages || !isInitialized) return
      
      setLoadingThumbnails(true)
      const newThumbnails = {}
      
      try {
        for (let i = 1; i <= Math.min(pdfDoc.numPages, 50); i++) {
          const thumbnail = await generatePageThumbnail(pdfDoc, i, 150)
          if (thumbnail) {
            newThumbnails[i] = thumbnail
          }
        }
        setThumbnails(newThumbnails)
      } catch (error) {
        console.error('Error generating thumbnails:', error)
      } finally {
        setLoadingThumbnails(false)
      }
    }

    generateThumbnails()
  }, [pdfDoc, isInitialized])

  const handleDragStart = (e, pageNum) => {
    setDraggedPage(pageNum)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, targetPageNum) => {
    e.preventDefault()
    
    if (draggedPage && draggedPage !== targetPageNum) {
      const newOrder = [...pages.map(p => p.pageNumber)]
      const draggedIndex = newOrder.indexOf(draggedPage)
      const targetIndex = newOrder.indexOf(targetPageNum)
      
      // Remove dragged page from its original position
      newOrder.splice(draggedIndex, 1)
      // Insert at new position
      newOrder.splice(targetIndex, 0, draggedPage)
      
      onReorderPages(newOrder)
    }
    
    setDraggedPage(null)
  }

  const togglePageSelection = (pageNum) => {
    if (selectedPages.includes(pageNum)) {
      onSelectPages(selectedPages.filter(p => p !== pageNum))
    } else {
      onSelectPages([...selectedPages, pageNum])
    }
  }

  const handlePageClick = (pageNum) => {
    if (onPageClick) {
      onPageClick(pageNum)
    }
  }

  const selectAll = () => {
    onSelectPages(pages.map(p => p.pageNumber))
  }

  const deselectAll = () => {
    onSelectPages([])
  }

  const selectRange = (start, end) => {
    const range = []
    for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
      range.push(i)
    }
    onSelectPages(range)
  }

  if (isLoading || loadingThumbnails || !isInitialized) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="px-4 py-3 border-b">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Pages</h3>
          <span className="text-sm text-gray-500">
            {pages.length} total
          </span>
        </div>
        
        {/* Selection controls */}
        <div className="flex gap-2">
          <button
            onClick={selectAll}
            className="flex-1 text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            Select All
          </button>
          <button
            onClick={deselectAll}
            className="flex-1 text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            Clear
          </button>
        </div>
        
        {/* Quick range selection */}
        {selectedPages.length > 0 && (
          <div className="mt-2 text-xs text-gray-600">
            {selectedPages.length} selected
          </div>
        )}
      </div>

      {/* Page thumbnails */}
      <div className="p-4 max-h-[600px] overflow-y-auto">
        <div className="space-y-2">
          {pages.map((page) => (
            <div
              key={page.pageNumber}
              draggable
              onDragStart={(e) => handleDragStart(e, page.pageNumber)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, page.pageNumber)}
              className={`
                relative cursor-pointer rounded-lg border-2 transition-all
                ${selectedPages.includes(page.pageNumber)
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
                }
                ${draggedPage === page.pageNumber ? 'opacity-50' : ''}
              `}
            >
              {/* Page thumbnail */}
              <div 
                className="aspect-[3/4] bg-gray-100 rounded-t-lg relative overflow-hidden"
                onClick={() => handlePageClick(page.pageNumber)}
              >
                {thumbnails[page.pageNumber] ? (
                  <img
                    src={thumbnails[page.pageNumber].dataUrl}
                    alt={`Page ${page.pageNumber}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                )}
                
                {/* Selection indicator */}
                {selectedPages.includes(page.pageNumber) && (
                  <div 
                    className="absolute top-2 right-2 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePageSelection(page.pageNumber)
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* Selection checkbox */}
                <div 
                  className="absolute top-2 left-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    togglePageSelection(page.pageNumber)
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedPages.includes(page.pageNumber)}
                    onChange={() => {}}
                    className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500"
                  />
                </div>
                
                {/* Rotation indicator */}
                {page.rotation && page.rotation !== 0 && (
                  <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    {page.rotation}°
                  </div>
                )}
              </div>
              
              {/* Page number */}
              <div 
                className="px-2 py-1 text-center bg-gray-50 rounded-b-lg"
                onClick={() => togglePageSelection(page.pageNumber)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Page {page.pageNumber}
                </span>
              </div>
              
              {/* Drag handle */}
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with bulk actions */}
      {selectedPages.length > 0 && (
        <div className="px-4 py-3 border-t bg-gray-50">
          <div className="text-xs text-gray-600 mb-2">
            Bulk Actions ({selectedPages.length} selected)
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="text-xs px-2 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded transition-colors"
              onClick={() => {
                if (window.confirm(`Delete ${selectedPages.length} pages?`)) {
                  // Handle delete
                }
              }}
            >
              Delete
            </button>
            <button
              className="text-xs px-2 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded transition-colors"
              onClick={() => {
                // Handle extract
              }}
            >
              Extract
            </button>
          </div>
        </div>
      )}
    </div>
  )
}