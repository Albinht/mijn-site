'use client'

export default function FontSelector({ selectedFont, onFontChange }) {
  const fonts = [
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Times', label: 'Times New Roman' },
    { value: 'Courier', label: 'Courier' },
    { value: 'Arial', label: 'Arial' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Verdana', label: 'Verdana' },
    { value: 'Comic Sans MS', label: 'Comic Sans' },
    { value: 'Impact', label: 'Impact' },
    { value: 'Palatino', label: 'Palatino' },
    { value: 'Garamond', label: 'Garamond' }
  ]

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Font Family
      </label>
      <select
        value={selectedFont}
        onChange={(e) => onFontChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {fonts.map(font => (
          <option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
            {font.label}
          </option>
        ))}
      </select>
    </div>
  )
}