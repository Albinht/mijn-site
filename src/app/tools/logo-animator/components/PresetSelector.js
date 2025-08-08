'use client'

import { useState } from 'react'

export default function PresetSelector({ presets, onSelect, selectedAnimation, isActive }) {
  const [activeCategory, setActiveCategory] = useState('entrance')

  const categories = [
    { id: 'entrance', name: 'Entrance', icon: '🎭', description: 'Intros en onthullingen' },
    { id: 'hover', name: 'Hover', icon: '👆', description: 'Interactieve effecten' },
    { id: 'loading', name: 'Loading', icon: '🔄', description: 'Laad animaties' }
  ]

  const getPresetsByCategory = (category) => {
    return presets.filter(preset => preset.category === category)
  }

  const PreviewCard = ({ preset }) => {
    const isSelected = selectedAnimation?.id === preset.id

    return (
      <div
        onClick={() => onSelect(preset)}
        className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
          isSelected 
            ? 'border-blue-500 bg-blue-50 shadow-md' 
            : 'border-gray-200 hover:border-blue-300'
        }`}
      >
        {/* Preview Area */}
        <div className="h-24 flex items-center justify-center mb-3 bg-white rounded border">
          <div 
            className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold ${
              preset.category === 'hover' || preset.category === 'loading' ? preset.cssClass : ''
            }`}
            style={{
              animation: preset.category === 'entrance' ? 
                `${preset.id} 2s ease-in-out infinite` : 
                preset.category === 'hover' ? 
                `${preset.id.replace('bounce', 'bounceHover').replace('pulse', 'pulseHover')} 2s ease-in-out infinite` :
                `${preset.id.replace('spin', 'spinCustom')} 2s linear infinite`
            }}
          >
            L
          </div>
        </div>

        {/* Preset Info */}
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-1">{preset.name}</h4>
          <p className="text-xs text-gray-500">{preset.description}</p>
        </div>

        {/* Selected Indicator */}
        {isSelected && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${isActive ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          2. Kies een animatie
        </h3>
        {selectedAnimation && (
          <div className="flex items-center text-green-600">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Geselecteerd
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="mr-1">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Category Description */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-medium">
            {categories.find(cat => cat.id === activeCategory)?.name}:
          </span>{' '}
          {categories.find(cat => cat.id === activeCategory)?.description}
        </p>
      </div>

      {/* Animation Presets Grid */}
      <div className="grid grid-cols-2 gap-4">
        {getPresetsByCategory(activeCategory).map((preset) => (
          <PreviewCard key={preset.id} preset={preset} />
        ))}
      </div>

      {/* Selected Animation Info */}
      {selectedAnimation && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-blue-900">{selectedAnimation.name}</h4>
              <p className="text-sm text-blue-700">{selectedAnimation.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  // Trigger animation replay by updating a key state in parent
                  const element = document.querySelector('.animation-preview-logo')
                  if (element && selectedAnimation) {
                    element.style.animation = 'none'
                    element.offsetHeight // Trigger reflow
                    element.style.animation = `${selectedAnimation.id} 1.5s ease-in-out forwards`
                  }
                }}
                className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                title="Preview opnieuw afspelen"
              >
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-xs text-yellow-800">
          💡 <strong>Tip:</strong> Hover over een animatie om deze te bekijken. Klik om te selecteren.
        </p>
      </div>
    </div>
  )
}