'use client'

import { useState } from 'react'

export default function AnimationControls({ settings, onChange, isActive }) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const easingOptions = [
    { value: 'ease', label: 'Ease (natuurlijk)' },
    { value: 'ease-in', label: 'Ease In (langzaam starten)' },
    { value: 'ease-out', label: 'Ease Out (langzaam eindigen)' },
    { value: 'ease-in-out', label: 'Ease In-Out (beide)' },
    { value: 'linear', label: 'Linear (constant)' },
    { value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', label: 'Bounce (stuiterend)' },
  ]

  const directionOptions = [
    { value: 'normal', label: 'Normaal' },
    { value: 'reverse', label: 'Omgekeerd' },
    { value: 'alternate', label: 'Heen en weer' },
    { value: 'alternate-reverse', label: 'Omgekeerd heen en weer' },
  ]

  const handleSliderChange = (property, value) => {
    onChange({ [property]: parseFloat(value) })
  }

  const handleSelectChange = (property, value) => {
    onChange({ [property]: value })
  }

  const handleToggle = (property) => {
    onChange({ [property]: !settings[property] })
  }

  const resetToDefaults = () => {
    onChange({
      duration: 1.5,
      delay: 0,
      easing: 'ease-in-out',
      loop: false,
      direction: 'normal'
    })
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${isActive ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          3. Pas animatie aan
        </h3>
        <button
          onClick={resetToDefaults}
          className="text-sm text-gray-500 hover:text-gray-700 font-medium"
        >
          Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Duration */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">
              Snelheid
            </label>
            <span className="text-sm text-blue-600 font-medium">
              {settings.duration}s
            </span>
          </div>
          <input
            type="range"
            min="0.3"
            max="5"
            step="0.1"
            value={settings.duration}
            onChange={(e) => handleSliderChange('duration', e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Snel (0.3s)</span>
            <span>Langzaam (5s)</span>
          </div>
        </div>

        {/* Delay */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">
              Vertraging
            </label>
            <span className="text-sm text-blue-600 font-medium">
              {settings.delay}s
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="3"
            step="0.1"
            value={settings.delay}
            onChange={(e) => handleSliderChange('delay', e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Direct (0s)</span>
            <span>3 seconden</span>
          </div>
        </div>

        {/* Easing */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Animatie type
          </label>
          <select
            value={settings.easing}
            onChange={(e) => handleSelectChange('easing', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {easingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Loop Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Herhalen</h4>
            <p className="text-xs text-gray-500">Animatie continu afspelen</p>
          </div>
          <button
            onClick={() => handleToggle('loop')}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              settings.loop ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                settings.loop ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Advanced Controls Toggle */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm font-medium text-gray-700 mr-2">
            Geavanceerde opties
          </span>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform ${
              showAdvanced ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Advanced Controls */}
        {showAdvanced && (
          <div className="space-y-4 pt-4 border-t border-gray-200">
            {/* Direction */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Richting
              </label>
              <select
                value={settings.direction}
                onChange={(e) => handleSelectChange('direction', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {directionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom CSS Class Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CSS Class naam (optioneel)
              </label>
              <input
                type="text"
                placeholder="my-custom-animation"
                value={settings.customClassName || ''}
                onChange={(e) => handleSelectChange('customClassName', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                Voor gebruik in je eigen CSS bestanden
              </p>
            </div>
          </div>
        )}

        {/* Quick Presets */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Snelle instellingen
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onChange({ duration: 0.5, delay: 0, easing: 'ease-out' })}
              className="p-2 text-sm bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
            >
              🚀 Snel & Punchy
            </button>
            <button
              onClick={() => onChange({ duration: 2, delay: 0, easing: 'ease-in-out' })}
              className="p-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
            >
              🎭 Elegant & Smooth
            </button>
            <button
              onClick={() => onChange({ duration: 1, delay: 0.5, easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' })}
              className="p-2 text-sm bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
            >
              🎪 Playful Bounce
            </button>
            <button
              onClick={() => onChange({ duration: 3, delay: 1, easing: 'ease-in', loop: true })}
              className="p-2 text-sm bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
            >
              ⏳ Slow & Hypnotic
            </button>
          </div>
        </div>
      </div>

      {/* Current Settings Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Huidige instellingen:</h4>
        <div className="text-xs text-gray-600 space-y-1">
          <div>Duur: <span className="font-medium">{settings.duration}s</span></div>
          <div>Vertraging: <span className="font-medium">{settings.delay}s</span></div>
          <div>Type: <span className="font-medium">{easingOptions.find(o => o.value === settings.easing)?.label}</span></div>
          <div>Richting: <span className="font-medium">{directionOptions.find(o => o.value === settings.direction)?.label}</span></div>
          <div>Herhalen: <span className="font-medium">{settings.loop ? 'Ja' : 'Nee'}</span></div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
}