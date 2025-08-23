'use client'

import { useState, useEffect, useRef } from 'react'

export default function AddTextMode({
  pdfDoc,
  pageNumber,
  scale,
  onTextAdd,
  isAddMode,
  canvasRef
}) {
  const [textBoxes, setTextBoxes] = useState([])
  const [activeBox, setActiveBox] = useState(null)
  const [isPlacing, setIsPlacing] = useState(false)
  const [scaleFactors, setScaleFactors] = useState({ scaleX: 1, scaleY: 1 })
  const [showInstructions, setShowInstructions] = useState(true)
  const overlayRef = useRef(null)

  // Reset instructions when mode changes
  useEffect(() => {
    if (isAddMode) {
      setShowInstructions(true)
    }
  }, [isAddMode])

  // Calculate scale factors when canvas or PDF changes
  useEffect(() => {
    const calculateScales = async () => {
      if (canvasRef?.current && pdfDoc && pageNumber) {
        try {
          const canvas = canvasRef.current
          const page = await pdfDoc.getPage(pageNumber)
          const viewport = page.getViewport({ scale })
          
          // Calculate scale factors to match canvas display size
          const scaleX = canvas.offsetWidth / viewport.width
          const scaleY = canvas.offsetHeight / viewport.height
          
          setScaleFactors({ scaleX, scaleY })
          console.log('AddTextMode scale factors - X:', scaleX, 'Y:', scaleY)
        } catch (error) {
          console.error('Error calculating scales:', error)
        }
      }
    }
    calculateScales()
  }, [canvasRef, pdfDoc, pageNumber, scale])

  // Handle click to add new text box
  const handleCanvasClick = (e) => {
    if (!isAddMode || !isPlacing) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newBox = {
      id: `text-${Date.now()}`,
      x: x,
      y: y,
      text: 'Click to edit',
      fontSize: 14,
      color: '#000000',
      fontFamily: 'Helvetica',
      width: 200,
      height: 30,
      isNew: true,
      originalScale: scale,
      scaleX: scaleFactors.scaleX,
      scaleY: scaleFactors.scaleY
    }

    setTextBoxes(prev => [...prev, newBox])
    setActiveBox(newBox.id)
    setIsPlacing(false)
  }

  // Handle text box editing
  const handleTextChange = (boxId, newText) => {
    setTextBoxes(prev => prev.map(box => 
      box.id === boxId ? { ...box, text: newText } : box
    ))
  }

  // Handle text box deletion
  const handleDeleteBox = (boxId) => {
    setTextBoxes(prev => prev.filter(box => box.id !== boxId))
    setActiveBox(null)
  }

  // Handle drag to move text box
  const handleDragStart = (e, boxId) => {
    const box = textBoxes.find(b => b.id === boxId)
    if (!box) return

    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    const handleDragMove = (moveEvent) => {
      const parentRect = overlayRef.current?.getBoundingClientRect()
      if (!parentRect) return

      const newX = moveEvent.clientX - parentRect.left - offsetX
      const newY = moveEvent.clientY - parentRect.top - offsetY

      setTextBoxes(prev => prev.map(b => 
        b.id === boxId ? { ...b, x: Math.max(0, newX), y: Math.max(0, newY) } : b
      ))
    }

    const handleDragEnd = () => {
      document.removeEventListener('mousemove', handleDragMove)
      document.removeEventListener('mouseup', handleDragEnd)
    }

    document.addEventListener('mousemove', handleDragMove)
    document.addEventListener('mouseup', handleDragEnd)
  }

  // Apply text boxes to PDF
  useEffect(() => {
    if (onTextAdd && textBoxes.length > 0) {
      // Update scale factors for all boxes before sending
      const boxesWithScale = textBoxes.map(box => ({
        ...box,
        originalScale: scale,
        scaleX: scaleFactors.scaleX,
        scaleY: scaleFactors.scaleY
      }))
      onTextAdd(pageNumber, boxesWithScale)
    }
  }, [textBoxes, pageNumber, onTextAdd, scale, scaleFactors])

  if (!isAddMode) return null

  return (
    <div 
      ref={overlayRef}
      className="absolute inset-0"
      style={{ zIndex: 10 }}
      onClick={handleCanvasClick}
    >
      {/* Add Text Button/Mode Indicator */}
      {showInstructions && (
        <div className="absolute top-2 left-2 pointer-events-auto">
          <div className="bg-green-600 text-white px-3 py-2 rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-colors"
              title="Close instructions"
            >
              ✕
            </button>
            
            <p className="text-sm font-medium flex items-center gap-2">
              <span className="animate-pulse">➕</span> Add Text Mode Active
            </p>
            <div className="mt-2 space-y-1">
              {!isPlacing ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsPlacing(true)
                  }}
                  className="text-xs bg-white text-green-600 px-2 py-1 rounded hover:bg-green-50 font-semibold"
                >
                  Click to Place Text
                </button>
              ) : (
                <p className="text-xs">Click anywhere to add text</p>
              )}
              {textBoxes.length > 0 && (
                <p className="text-xs opacity-90">{textBoxes.length} text box{textBoxes.length > 1 ? 'es' : ''} added</p>
              )}
            </div>
          </div>
          
          {/* Warning about saving */}
          {textBoxes.length > 0 && (
            <div className="mt-2 bg-yellow-500 text-white px-3 py-2 rounded-lg shadow-lg animate-pulse">
              <p className="text-xs font-semibold">⚠️ Don't forget to save!</p>
              <p className="text-xs">Use the "Save Text Additions" button in the toolbar</p>
            </div>
          )}
        </div>
      )}

      {/* Text Boxes */}
      {textBoxes.map((box) => (
        <div
          key={box.id}
          className={`absolute pointer-events-auto ${
            activeBox === box.id ? 'ring-2 ring-blue-500' : ''
          }`}
          style={{
            left: `${box.x}px`,
            top: `${box.y}px`,
            zIndex: 20
          }}
        >
          {activeBox === box.id ? (
            // Edit mode
            <div className="bg-white border-2 border-blue-500 rounded p-1 shadow-lg">
              <textarea
                value={box.text}
                onChange={(e) => handleTextChange(box.id, e.target.value)}
                onBlur={() => setActiveBox(null)}
                className="w-full min-w-[200px] p-1 text-sm resize-none outline-none"
                style={{
                  fontSize: `${box.fontSize}px`,
                  color: box.color,
                  fontFamily: box.fontFamily,
                  minHeight: '30px'
                }}
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
              <div className="flex justify-between items-center mt-1 border-t pt-1">
                <div className="flex gap-1">
                  <button
                    onMouseDown={(e) => {
                      e.preventDefault()
                      handleTextChange(box.id, box.text)
                      const newSize = Math.max(8, box.fontSize - 2)
                      setTextBoxes(prev => prev.map(b => 
                        b.id === box.id ? { ...b, fontSize: newSize } : b
                      ))
                    }}
                    className="text-xs px-1 hover:bg-gray-100 rounded"
                    title="Decrease font size"
                  >
                    A-
                  </button>
                  <button
                    onMouseDown={(e) => {
                      e.preventDefault()
                      const newSize = Math.min(72, box.fontSize + 2)
                      setTextBoxes(prev => prev.map(b => 
                        b.id === box.id ? { ...b, fontSize: newSize } : b
                      ))
                    }}
                    className="text-xs px-1 hover:bg-gray-100 rounded"
                    title="Increase font size"
                  >
                    A+
                  </button>
                </div>
                <button
                  onMouseDown={(e) => {
                    e.preventDefault()
                    handleDeleteBox(box.id)
                  }}
                  className="text-red-500 text-xs px-1 hover:bg-red-50 rounded"
                  title="Delete text box"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            // View mode - draggable
            <div
              className="cursor-move hover:bg-blue-50 hover:bg-opacity-20 p-1"
              onMouseDown={(e) => handleDragStart(e, box.id)}
              onClick={(e) => {
                e.stopPropagation()
                setActiveBox(box.id)
              }}
            >
              <div
                style={{
                  fontSize: `${box.fontSize}px`,
                  color: box.color,
                  fontFamily: box.fontFamily,
                  whiteSpace: 'pre-wrap',
                  userSelect: 'none'
                }}
              >
                {box.text}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Instructions when placing */}
      {isPlacing && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
            <p className="text-sm">Click anywhere to place text</p>
            <p className="text-xs opacity-75 mt-1">Press Esc to cancel</p>
          </div>
        </div>
      )}
    </div>
  )
}