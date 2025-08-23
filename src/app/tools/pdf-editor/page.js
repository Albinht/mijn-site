'use client'

import { useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import PDFUploader from './components/PDFUploader'
import PDFViewer from './components/PDFViewer'
import EditToolbar from './components/EditToolbar'
import PageManager from './components/PageManager'
import ExportOptions from './components/ExportOptions'
import { 
  loadPDF, 
  mergePDFs, 
  splitPDF, 
  rotatePage, 
  deletePage, 
  reorderPages,
  compressPDF,
  extractPages 
} from './lib/pdf-operations'
import { loadPDFForRendering } from './lib/pdf-renderer'
import { applyTextEdits, applyTextAdditions } from './lib/pdf-text-editor'

export default function PDFEditor() {
  const [pdfFiles, setPdfFiles] = useState([])
  const [currentPdf, setCurrentPdf] = useState(null) // pdf-lib document
  const [renderPdf, setRenderPdf] = useState(null) // pdfjs-dist document for rendering
  const [pages, setPages] = useState([])
  const [selectedPages, setSelectedPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentTool, setCurrentTool] = useState('view')
  const [editHistory, setEditHistory] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isAddMode, setIsAddMode] = useState(false)
  const [textEdits, setTextEdits] = useState({})
  const [textAdditions, setTextAdditions] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const viewerRef = useRef(null)

  // Handle file upload
  const handleFileUpload = useCallback(async (files) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const validFiles = files.filter(file => 
        file.type === 'application/pdf' && file.size <= 100 * 1024 * 1024
      )
      
      if (validFiles.length === 0) {
        throw new Error('Please upload valid PDF files (max 100MB)')
      }

      setPdfFiles(validFiles)
      
      // Load the first PDF for both manipulation and rendering
      if (validFiles.length > 0) {
        // Load for manipulation (pdf-lib)
        const pdfData = await loadPDF(validFiles[0])
        setCurrentPdf(pdfData.pdfDoc)
        setPages(pdfData.pages)
        setTotalPages(pdfData.totalPages)
        
        // Load for rendering (pdfjs-dist)
        const renderDoc = await loadPDFForRendering(validFiles[0])
        setRenderPdf(renderDoc)
      }
    } catch (err) {
      setError(err.message)
      console.error('Error loading PDF:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Update rendering PDF when manipulation PDF changes
  const updateRenderPdf = useCallback(async (pdfDoc) => {
    try {
      // Convert pdf-lib document to bytes
      const pdfBytes = await pdfDoc.save()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      
      // Load bytes into pdfjs-dist for rendering
      const renderDoc = await loadPDFForRendering(blob)
      setRenderPdf(renderDoc)
    } catch (error) {
      console.error('Error updating render PDF:', error)
    }
  }, [])

  // Merge multiple PDFs
  const handleMergePDFs = useCallback(async () => {
    if (pdfFiles.length < 2) {
      setError('Please upload at least 2 PDFs to merge')
      return
    }

    setIsLoading(true)
    try {
      const mergedPdf = await mergePDFs(pdfFiles)
      setCurrentPdf(mergedPdf.pdfDoc)
      setPages(mergedPdf.pages)
      setTotalPages(mergedPdf.totalPages)
      
      // Update render PDF
      await updateRenderPdf(mergedPdf.pdfDoc)
      
      addToHistory('merge', { fileCount: pdfFiles.length })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [pdfFiles, updateRenderPdf])

  // Split PDF
  const handleSplitPDF = useCallback(async (ranges) => {
    if (!currentPdf) return
    
    setIsLoading(true)
    try {
      const splitPdfs = await splitPDF(currentPdf, ranges)
      // Handle split PDFs (download or display)
      addToHistory('split', { ranges })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentPdf])

  // Rotate selected pages
  const handleRotatePages = useCallback(async (degrees) => {
    if (!currentPdf || selectedPages.length === 0) return
    
    setIsLoading(true)
    try {
      const rotatedPdf = await rotatePage(currentPdf, selectedPages, degrees)
      setCurrentPdf(rotatedPdf.pdfDoc)
      setPages(rotatedPdf.pages)
      
      // Update render PDF
      await updateRenderPdf(rotatedPdf.pdfDoc)
      
      addToHistory('rotate', { pages: selectedPages, degrees })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentPdf, selectedPages, updateRenderPdf])

  // Delete selected pages
  const handleDeletePages = useCallback(async () => {
    if (!currentPdf || selectedPages.length === 0) return
    
    setIsLoading(true)
    try {
      const updatedPdf = await deletePage(currentPdf, selectedPages)
      setCurrentPdf(updatedPdf.pdfDoc)
      setPages(updatedPdf.pages)
      setTotalPages(updatedPdf.totalPages)
      setSelectedPages([])
      
      // Update render PDF
      await updateRenderPdf(updatedPdf.pdfDoc)
      
      // Adjust current page if necessary
      if (currentPage > updatedPdf.totalPages) {
        setCurrentPage(Math.max(1, updatedPdf.totalPages))
      }
      
      addToHistory('delete', { pages: selectedPages })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentPdf, selectedPages, currentPage, updateRenderPdf])

  // Reorder pages
  const handleReorderPages = useCallback(async (newOrder) => {
    if (!currentPdf) return
    
    setIsLoading(true)
    try {
      const reorderedPdf = await reorderPages(currentPdf, newOrder)
      setCurrentPdf(reorderedPdf.pdfDoc)
      setPages(reorderedPdf.pages)
      
      // Update render PDF
      await updateRenderPdf(reorderedPdf.pdfDoc)
      
      addToHistory('reorder', { newOrder })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentPdf, updateRenderPdf])

  // Extract selected pages
  const handleExtractPages = useCallback(async () => {
    if (!currentPdf || selectedPages.length === 0) return
    
    setIsLoading(true)
    try {
      const extractedPdf = await extractPages(currentPdf, selectedPages)
      
      // Download extracted PDF
      const pdfBytes = await extractedPdf.pdfDoc.save()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `extracted_pages_${selectedPages.join('_')}.pdf`
      link.click()
      URL.revokeObjectURL(url)
      
      addToHistory('extract', { pages: selectedPages })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentPdf, selectedPages])

  // Compress PDF
  const handleCompressPDF = useCallback(async (quality) => {
    if (!currentPdf) return
    
    setIsLoading(true)
    try {
      const compressedPdf = await compressPDF(currentPdf, quality)
      setCurrentPdf(compressedPdf.pdfDoc)
      
      // Update render PDF
      await updateRenderPdf(compressedPdf.pdfDoc)
      
      addToHistory('compress', { quality })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentPdf, updateRenderPdf])

  // Handle page click from PageManager
  const handlePageClick = useCallback((pageNum) => {
    setCurrentPage(pageNum)
    if (viewerRef.current) {
      viewerRef.current.goToPage(pageNum)
    }
  }, [])

  // Handle page change from PDFViewer
  const handlePageChange = useCallback((pageNum) => {
    setCurrentPage(pageNum)
  }, [])

  // Toggle text edit mode
  const handleToggleEditMode = useCallback(() => {
    if (isEditMode && Object.keys(textEdits).length > 0) {
      // Show warning about unsaved changes
      const confirmExit = window.confirm('You have unsaved text changes. Do you want to save them before exiting edit mode?')
      if (confirmExit) {
        handleApplyTextEdits()
      } else {
        setTextEdits({})
      }
    }
    setIsEditMode(prev => !prev)
    setIsAddMode(false) // Turn off add mode when enabling edit mode
  }, [isEditMode, textEdits])

  // Toggle add text mode
  const handleToggleAddMode = useCallback(() => {
    if (isAddMode && Object.keys(textAdditions).length > 0) {
      // Show warning about unsaved changes
      const confirmExit = window.confirm('You have unsaved text additions. Do you want to save them before exiting add mode?')
      if (confirmExit) {
        handleApplyTextAdditions()
      } else {
        setTextAdditions({})
      }
    }
    setIsAddMode(prev => !prev)
    setIsEditMode(false) // Turn off edit mode when enabling add mode
  }, [isAddMode, textAdditions])

  // Handle text changes from editor
  const handleTextChange = useCallback((pageNumber, editedBlocks) => {
    setTextEdits(prev => ({
      ...prev,
      [pageNumber]: editedBlocks
    }))
  }, [])

  // Handle text additions
  const handleTextAdd = useCallback((pageNumber, textBoxes) => {
    setTextAdditions(prev => ({
      ...prev,
      [pageNumber]: textBoxes
    }))
  }, [])

  // Apply text edits to PDF
  const handleApplyTextEdits = useCallback(async () => {
    if (!currentPdf || Object.keys(textEdits).length === 0) return
    
    setIsLoading(true)
    try {
      const editedPdf = await applyTextEdits(currentPdf, textEdits)
      setCurrentPdf(editedPdf)
      
      // Update render PDF
      await updateRenderPdf(editedPdf)
      
      // Clear text edits
      setTextEdits({})
      
      addToHistory('text-edit', { pages: Object.keys(textEdits).length })
      setIsEditMode(false)
      
      // Show success message
      setSuccessMessage('✅ Text changes saved successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentPdf, textEdits, updateRenderPdf])

  // Apply text additions to PDF
  const handleApplyTextAdditions = useCallback(async () => {
    if (!currentPdf || Object.keys(textAdditions).length === 0) return
    
    setIsLoading(true)
    try {
      const editedPdf = await applyTextAdditions(currentPdf, textAdditions)
      setCurrentPdf(editedPdf)
      
      // Update render PDF
      await updateRenderPdf(editedPdf)
      
      // Clear text additions
      setTextAdditions({})
      
      addToHistory('text-add', { pages: Object.keys(textAdditions).length })
      setIsAddMode(false)
      
      // Show success message
      setSuccessMessage('✅ Text additions saved successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [currentPdf, textAdditions, updateRenderPdf])

  // Add action to history
  const addToHistory = (action, details) => {
    setEditHistory(prev => [...prev, { action, details, timestamp: Date.now() }])
  }

  // Clear all
  const handleClear = () => {
    setPdfFiles([])
    setCurrentPdf(null)
    setRenderPdf(null)
    setPages([])
    setSelectedPages([])
    setCurrentPage(1)
    setError(null)
    setEditHistory([])
    setTotalPages(0)
  }

  return (
    <div>
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <div className="mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  FREE TOOL
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                PDF Editor Online
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Edit, merge, split, rotate, and compress PDFs directly in your browser. 
                100% free, no registration, no uploads to servers.
              </p>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {!currentPdf ? (
            // Upload Area
            <div className="bg-white rounded-lg shadow-lg p-8">
              <PDFUploader 
                onUpload={handleFileUpload}
                isLoading={isLoading}
                error={error}
              />
              
              {/* Quick Actions for Multiple Files */}
              {pdfFiles.length > 1 && (
                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-4">
                    {pdfFiles.length} PDFs uploaded
                  </p>
                  <button
                    onClick={handleMergePDFs}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Merge All PDFs
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Editor Interface
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Sidebar - Page Thumbnails */}
              <div className="lg:col-span-1">
                <PageManager
                  pdfDoc={renderPdf}
                  pages={pages}
                  selectedPages={selectedPages}
                  onSelectPages={setSelectedPages}
                  onReorderPages={handleReorderPages}
                  onPageClick={handlePageClick}
                  isLoading={isLoading}
                />
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-2">
                {/* Toolbar */}
                <EditToolbar
                  currentTool={currentTool}
                  onToolChange={setCurrentTool}
                  onRotate={handleRotatePages}
                  onDelete={handleDeletePages}
                  onExtract={handleExtractPages}
                  onSplit={() => {/* Open split modal */}}
                  onMerge={handleMergePDFs}
                  onToggleEditMode={handleToggleEditMode}
                  onToggleAddMode={handleToggleAddMode}
                  onSaveTextEdits={handleApplyTextEdits}
                  onSaveTextAdditions={handleApplyTextAdditions}
                  isEditMode={isEditMode}
                  isAddMode={isAddMode}
                  hasSelection={selectedPages.length > 0}
                  fileCount={pdfFiles.length}
                  hasTextEdits={Object.keys(textEdits).length > 0 && Object.values(textEdits).some(edits => edits.some(e => e.isEdited))}
                  hasTextAdditions={Object.keys(textAdditions).length > 0 && Object.values(textAdditions).some(additions => additions.length > 0)}
                />

                {/* PDF Viewer */}
                <div className="mt-4 bg-white rounded-lg shadow-lg">
                  <PDFViewer
                    ref={viewerRef}
                    pdfDoc={renderPdf}
                    currentPage={currentPage}
                    selectedPages={selectedPages}
                    onPageSelect={(pageNum) => {
                      setSelectedPages(prev => 
                        prev.includes(pageNum) 
                          ? prev.filter(p => p !== pageNum)
                          : [...prev, pageNum]
                      )
                    }}
                    onPageChange={handlePageChange}
                    onTextChange={handleTextChange}
                    onTextAdd={handleTextAdd}
                    isEditMode={isEditMode}
                    isAddMode={isAddMode}
                    isLoading={isLoading}
                  />
                </div>

                {/* Status Bar */}
                <div className="mt-4 bg-white rounded-lg shadow p-4">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>
                      {totalPages} {totalPages === 1 ? 'page' : 'pages'} • 
                      {selectedPages.length} selected
                    </span>
                    <span>
                      {editHistory.length} {editHistory.length === 1 ? 'edit' : 'edits'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Export Options */}
              <div className="lg:col-span-1">
                <ExportOptions
                  currentPdf={currentPdf}
                  onCompress={handleCompressPDF}
                  onClear={handleClear}
                  hasEdits={editHistory.length > 0}
                />
              </div>
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center justify-between">
              <span className="font-medium">{successMessage}</span>
              <button
                onClick={() => setSuccessMessage('')}
                className="text-green-700 hover:text-green-900"
              >
                ✕
              </button>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
        </div>

        {/* Info Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Features Grid */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔀</div>
                <h3 className="font-semibold mb-2">Merge PDFs</h3>
                <p className="text-gray-600 text-sm">
                  Combine multiple PDF files into one document
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">✂️</div>
                <h3 className="font-semibold mb-2">Split PDFs</h3>
                <p className="text-gray-600 text-sm">
                  Extract pages or split into multiple files
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-semibold mb-2">Rotate Pages</h3>
                <p className="text-gray-600 text-sm">
                  Rotate individual or all pages
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🗑️</div>
                <h3 className="font-semibold mb-2">Delete Pages</h3>
                <p className="text-gray-600 text-sm">
                  Remove unwanted pages from your PDF
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📑</div>
                <h3 className="font-semibold mb-2">Reorder Pages</h3>
                <p className="text-gray-600 text-sm">
                  Drag and drop to rearrange page order
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-semibold mb-2">Compress PDFs</h3>
                <p className="text-gray-600 text-sm">
                  Reduce file size while maintaining quality
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Upload PDF</h3>
                <p className="text-gray-600 text-sm">
                  Drag and drop or select your PDF files
                </p>
              </div>
              <div>
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Edit</h3>
                <p className="text-gray-600 text-sm">
                  Use our tools to edit your PDF
                </p>
              </div>
              <div>
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Preview</h3>
                <p className="text-gray-600 text-sm">
                  See changes in real-time
                </p>
              </div>
              <div>
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-gray-600 text-sm">
                  Save your edited PDF
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-green-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🔒 100% Privacy Guaranteed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">No Upload to Servers</h3>
                <p className="text-gray-600">
                  All processing happens in your browser. Your files never leave your device.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">No Registration Required</h3>
                <p className="text-gray-600">
                  Use all features immediately without creating an account.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Secure Processing</h3>
                <p className="text-gray-600">
                  HTTPS encryption and client-side processing ensure your data stays private.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Auto-Delete</h3>
                <p className="text-gray-600">
                  Files are automatically removed from memory when you close the tab.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#F7D8FA] rounded-lg p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Need Professional Marketing Services?
            </h2>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Let Niblah help you grow your business with expert digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/work-with-me"
                className="bg-white text-[#8C2891] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Marketing Audit
              </Link>
              <a 
                href="https://wa.link/zhg1bl"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8C2891] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595"/>
                </svg>
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}