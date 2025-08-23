'use client'

import { useState } from 'react'
import FontSelector from './FontSelector'
import TextFormatting from './TextFormatting'

export default function TextTool({ onAddText, currentPage }) {
  const [textConfig, setTextConfig] = useState({
    text: '',
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#000000',
    bold: false,
    italic: false,
    underline: false,
    alignment: 'left',
    opacity: 1,
    rotation: 0,
    x: 50,
    y: 50
  })
  
  const [isPlacingText, setIsPlacingText] = useState(false)

  const handleTextChange = (e) => {
    setTextConfig(prev => ({ ...prev, text: e.target.value }))
  }

  const handleFontChange = (font) => {
    setTextConfig(prev => ({ ...prev, fontFamily: font }))
  }

  const handleFormattingChange = (format) => {
    setTextConfig(prev => ({ ...prev, ...format }))
  }

  const handleColorChange = (e) => {
    setTextConfig(prev => ({ ...prev, color: e.target.value }))
  }

  const handleSizeChange = (e) => {
    setTextConfig(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))
  }

  const handleOpacityChange = (e) => {
    setTextConfig(prev => ({ ...prev, opacity: parseFloat(e.target.value) / 100 }))
  }

  const handleRotationChange = (e) => {
    setTextConfig(prev => ({ ...prev, rotation: parseInt(e.target.value) }))
  }

  const handleAddText = () => {
    if (textConfig.text.trim()) {
      onAddText({
        ...textConfig,
        pageNumber: currentPage
      })
      setTextConfig(prev => ({ ...prev, text: '' }))
    }
  }

  const handlePlaceText = () => {
    setIsPlacingText(!isPlacingText)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
        <span className="text-xl">✏️</span>
        Text Tool
      </h3>

      {/* Text Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Text Content
        </label>
        <textarea
          value={textConfig.text}
          onChange={handleTextChange}
          placeholder="Enter text to add to PDF..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
        />
      </div>

      {/* Font Selection */}
      <FontSelector
        selectedFont={textConfig.fontFamily}
        onFontChange={handleFontChange}
      />

      {/* Text Formatting */}
      <TextFormatting
        bold={textConfig.bold}
        italic={textConfig.italic}
        underline={textConfig.underline}
        alignment={textConfig.alignment}
        onFormattingChange={handleFormattingChange}
      />

      {/* Font Size and Color */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Font Size
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="8"
              max="72"
              value={textConfig.fontSize}
              onChange={handleSizeChange}
              className="flex-1"
            />
            <span className="text-sm font-medium w-12 text-right">
              {textConfig.fontSize}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Text Color
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={textConfig.color}
              onChange={handleColorChange}
              className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              value={textConfig.color}
              onChange={handleColorChange}
              className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
            />
          </div>
        </div>
      </div>

      {/* Advanced Options */}
      <details className="border-t pt-3">
        <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          Advanced Options
        </summary>
        
        <div className="mt-3 space-y-3">
          {/* Opacity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Opacity
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={textConfig.opacity * 100}
                onChange={handleOpacityChange}
                className="flex-1"
              />
              <span className="text-sm font-medium w-12 text-right">
                {Math.round(textConfig.opacity * 100)}%
              </span>
            </div>
          </div>

          {/* Rotation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rotation
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="-180"
                max="180"
                value={textConfig.rotation}
                onChange={handleRotationChange}
                className="flex-1"
              />
              <span className="text-sm font-medium w-12 text-right">
                {textConfig.rotation}°
              </span>
            </div>
          </div>

          {/* Position */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                X Position
              </label>
              <input
                type="number"
                value={textConfig.x}
                onChange={(e) => setTextConfig(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Y Position
              </label>
              <input
                type="number"
                value={textConfig.y}
                onChange={(e) => setTextConfig(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        </div>
      </details>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleAddText}
          disabled={!textConfig.text.trim()}
          className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Text
        </button>
        <button
          onClick={handlePlaceText}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isPlacingText 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isPlacingText ? '📍 Placing...' : '📍 Click to Place'}
        </button>
      </div>

      {/* Instructions */}
      {isPlacingText && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-700">
            Click anywhere on the PDF page to place your text at that position.
          </p>
        </div>
      )}
    </div>
  )
}