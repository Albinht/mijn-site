'use client'

import { useState, useEffect, useRef } from 'react'

export default function TextEditOverlay({
  pdfDoc,
  pageNumber,
  scale,
  onTextChange,
  isEditMode,
  canvasRef
}) {
  const [textBlocks, setTextBlocks] = useState([])
  const [editingBlock, setEditingBlock] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [pageHeight, setPageHeight] = useState(0)
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 })
  const [showAllBlocks, setShowAllBlocks] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)
  const overlayRef = useRef(null)
  const inputRef = useRef(null)

  // Update canvas dimensions when canvas changes
  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current
      setCanvasDimensions({
        width: canvas.offsetWidth,
        height: canvas.offsetHeight
      })
      console.log('Canvas dimensions:', canvas.offsetWidth, 'x', canvas.offsetHeight)
      console.log('Canvas actual size:', canvas.width, 'x', canvas.height)
    }
  }, [canvasRef, pdfDoc, pageNumber])

  // Reset instructions when mode changes
  useEffect(() => {
    if (isEditMode) {
      setShowInstructions(true)
    }
  }, [isEditMode])

  // Extract text blocks with positions when PDF or page changes
  useEffect(() => {
    const extractTextBlocks = async () => {
      if (!pdfDoc || !pageNumber || !isEditMode || !canvasRef?.current) return

      const canvas = canvasRef.current
      console.log('Extracting text blocks for page', pageNumber)
      console.log('Canvas pixel size:', canvas.width, 'x', canvas.height)
      console.log('Canvas display size:', canvas.offsetWidth, 'x', canvas.offsetHeight)

      try {
        const page = await pdfDoc.getPage(pageNumber)
        const viewport = page.getViewport({ scale })
        const textContent = await page.getTextContent()
        
        // The key is to match coordinates to the canvas display size
        // Canvas is rendered at viewport dimensions, but may be displayed at different size
        const scaleX = canvas.offsetWidth / viewport.width
        const scaleY = canvas.offsetHeight / viewport.height
        
        console.log('Viewport:', viewport.width, 'x', viewport.height)
        console.log('Scale factors - X:', scaleX, 'Y:', scaleY)
        console.log('Text content items:', textContent.items.length)
        
        // Store canvas display height for coordinate transformation
        setPageHeight(canvas.offsetHeight)
        
        // Improved text grouping algorithm
        const textItems = []
        
        // First, collect all text items with their positions
        textContent.items.forEach((item) => {
          if (item.str && item.str.trim()) {
            const transform = item.transform
            
            // Transform[4] and [5] are the x,y coordinates in PDF units
            // item.height is in PDF units
            // We need to:
            // 1. Scale PDF coordinates to viewport size (multiply by scale)
            // 2. Convert from PDF coords (bottom-left) to DOM coords (top-left)
            // 3. Scale to canvas display size
            
            // PDF coordinates scaled to viewport
            const pdfX = transform[4] * scale
            const pdfY = transform[5] * scale
            const pdfHeight = item.height * scale
            const pdfWidth = item.width * scale
            
            // Convert to DOM coordinates and scale to display size
            const x = pdfX * scaleX
            // For Y: PDF has origin at bottom, DOM at top, so we flip
            const y = (viewport.height - pdfY - pdfHeight) * scaleY
            const width = pdfWidth * scaleX
            const height = pdfHeight * scaleY
            
            textItems.push({
              text: item.str,
              x: x,
              y: y,
              width: width,
              height: height,
              fontSize: pdfHeight * scaleY,
              fontName: item.fontName || 'Helvetica',
              transform: transform,
              originalScale: scale,
              scaleX: scaleX,
              scaleY: scaleY
            })
          }
        })
        
        // Sort items by position (top to bottom, left to right)
        textItems.sort((a, b) => {
          const yDiff = a.y - b.y
          if (Math.abs(yDiff) > 5) return yDiff
          return a.x - b.x
        })
        
        // Group items into logical text blocks
        const blocks = []
        let currentLine = []
        let currentY = null
        
        textItems.forEach((item) => {
          // Check if this item is on the same line
          if (currentY === null || Math.abs(item.y - currentY) < item.height * 0.5) {
            // Same line
            if (currentY === null) currentY = item.y
            
            // Check if there's a gap indicating a new block
            if (currentLine.length > 0) {
              const lastItem = currentLine[currentLine.length - 1]
              const gap = item.x - (lastItem.x + lastItem.width)
              
              // If gap is too large, create a new block
              if (gap > item.fontSize * 2) {
                // Save current line as a block
                if (currentLine.length > 0) {
                  blocks.push(createBlockFromItems(currentLine, blocks.length))
                  currentLine = []
                }
              }
            }
            
            currentLine.push(item)
          } else {
            // New line - save current line as block
            if (currentLine.length > 0) {
              blocks.push(createBlockFromItems(currentLine, blocks.length))
            }
            currentLine = [item]
            currentY = item.y
          }
        })
        
        // Don't forget the last line
        if (currentLine.length > 0) {
          blocks.push(createBlockFromItems(currentLine, blocks.length))
        }
        
        // Helper function to create a block from items
        function createBlockFromItems(items, index) {
          const firstItem = items[0]
          const lastItem = items[items.length - 1]
          
          // Calculate bounding box
          const minX = Math.min(...items.map(i => i.x))
          const maxX = Math.max(...items.map(i => i.x + i.width))
          const minY = Math.min(...items.map(i => i.y))
          const maxY = Math.max(...items.map(i => i.y + i.height))
          
          // Combine text
          const text = items.map(i => i.text).join(' ')
          
          return {
            id: `block-${index}`,
            text: text,
            originalText: text,
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
            fontSize: Math.round(Math.max(...items.map(i => i.fontSize))),
            fontName: firstItem.fontName,
            items: items, // Keep original items for reference
            originalScale: scale,
            scaleX: firstItem.scaleX,
            scaleY: firstItem.scaleY
          }
        }
        
        console.log('Total text blocks extracted:', blocks.length)
        if (blocks.length > 0) {
          console.log('Sample text blocks:', blocks.slice(0, 3))
        }
        
        setTextBlocks(blocks)
      } catch (error) {
        console.error('Error extracting text blocks:', error)
        // Still show message to user
        setTextBlocks([])
      }
    }

    extractTextBlocks()
  }, [pdfDoc, pageNumber, scale, isEditMode])

  // Focus input when editing starts
  useEffect(() => {
    if (editingBlock && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [editingBlock])

  const handleBlockClick = (block) => {
    if (!isEditMode) return
    
    setEditingBlock(block.id)
    setEditValue(block.text)
  }

  const handleEditComplete = () => {
    if (editingBlock && editValue !== '') {
      const block = textBlocks.find(b => b.id === editingBlock)
      const updatedBlocks = textBlocks.map(b => 
        b.id === editingBlock 
          ? { ...b, text: editValue, isEdited: true }
          : b
      )
      setTextBlocks(updatedBlocks)
      
      console.log('Text edit complete:', {
        blockId: editingBlock,
        newText: editValue,
        originalScale: block?.originalScale || scale,
        scaleX: block?.scaleX,
        scaleY: block?.scaleY
      })
      
      // Notify parent of text changes
      if (onTextChange) {
        onTextChange(pageNumber, updatedBlocks)
      }
    }
    
    setEditingBlock(null)
    setEditValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleEditComplete()
    } else if (e.key === 'Escape') {
      setEditingBlock(null)
      setEditValue('')
    }
  }

  if (!isEditMode) {
    console.log('Edit mode is off')
    return null
  }
  
  if (textBlocks.length === 0) {
    console.log('No text blocks found')
    return (
      <div className="absolute top-2 left-2 bg-yellow-600 text-white px-3 py-2 rounded-lg shadow-lg pointer-events-auto">
        <p className="text-sm font-medium">Text Edit Mode Active</p>
        <p className="text-xs mt-1">No editable text found on this page</p>
        <div className="mt-2 pt-2 border-t border-yellow-500">
          <p className="text-xs opacity-90">Tips:</p>
          <ul className="text-xs mt-1 space-y-0.5 opacity-80">
            <li>• Try using "Add Text" mode instead</li>
            <li>• This may be a scanned PDF (image)</li>
            <li>• Some PDFs have text as graphics</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={overlayRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 10 }}
    >
      {textBlocks.map((block) => (
        <div key={block.id}>
          {editingBlock === block.id ? (
            // Edit mode - show input
            <textarea
              ref={inputRef}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={handleEditComplete}
              onKeyDown={handleKeyDown}
              className="absolute border-2 border-blue-500 bg-white p-1 resize-none shadow-lg pointer-events-auto"
              style={{
                left: `${block.x}px`,
                top: `${block.y}px`,
                width: `${Math.max(block.width, 100)}px`,
                minHeight: `${block.height}px`,
                fontSize: `${block.fontSize}px`,
                fontFamily: 'sans-serif',
                lineHeight: 1.2,
                zIndex: 100
              }}
            />
          ) : (
            // View mode - show clickable overlay with better visual feedback
            <div
              onClick={() => handleBlockClick(block)}
              className={`absolute cursor-text pointer-events-auto transition-all border ${
                block.isEdited 
                  ? 'bg-yellow-100 border-yellow-400' 
                  : showAllBlocks
                    ? 'bg-blue-50 border-blue-300'
                    : 'hover:bg-blue-100 hover:border-blue-400 border-transparent'
              }`}
              style={{
                left: `${block.x - 2}px`,
                top: `${block.y - 2}px`,
                width: `${block.width + 4}px`,
                height: `${block.height + 4}px`,
                opacity: block.isEdited ? 0.6 : showAllBlocks ? 0.5 : 0.4
              }}
              title={`Click to edit: "${block.text.substring(0, 50)}${block.text.length > 50 ? '...' : ''}"`}
            >
              {block.isEdited && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
      
      {/* Instructions and Controls */}
      {isEditMode && showInstructions && (
        <div className="absolute top-2 left-2 pointer-events-auto">
          <div className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-colors"
              title="Close instructions"
            >
              ✕
            </button>
            
            <p className="text-sm font-medium flex items-center gap-2">
              <span className="animate-pulse">✏️</span> Text Edit Mode Active
            </p>
            <p className="text-xs mt-1">Click on any text to edit • Press Enter to confirm edit</p>
            {textBlocks.length > 0 && (
              <div className="mt-2 pt-2 border-t border-blue-500">
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showAllBlocks}
                    onChange={(e) => setShowAllBlocks(e.target.checked)}
                    className="rounded"
                  />
                  <span>Show all text blocks ({textBlocks.length} found)</span>
                </label>
              </div>
            )}
          </div>
          
          {/* Warning about saving */}
          {textBlocks.some(b => b.isEdited) && (
            <div className="mt-2 bg-yellow-500 text-white px-3 py-2 rounded-lg shadow-lg animate-pulse">
              <p className="text-xs font-semibold">⚠️ Don't forget to save!</p>
              <p className="text-xs">Use the "Save Text Changes" button in the toolbar</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}