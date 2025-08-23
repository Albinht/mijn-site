'use client'

export default function TextFormatting({ 
  bold, 
  italic, 
  underline, 
  alignment, 
  onFormattingChange 
}) {
  const handleToggle = (format) => {
    onFormattingChange({ [format]: !eval(format) })
  }

  const handleAlignment = (align) => {
    onFormattingChange({ alignment: align })
  }

  return (
    <div className="space-y-3">
      {/* Text Style */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Text Style
        </label>
        <div className="flex gap-1">
          <button
            onClick={() => onFormattingChange({ bold: !bold })}
            className={`px-3 py-2 rounded border ${
              bold 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            onClick={() => onFormattingChange({ italic: !italic })}
            className={`px-3 py-2 rounded border ${
              italic 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            onClick={() => onFormattingChange({ underline: !underline })}
            className={`px-3 py-2 rounded border ${
              underline 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            title="Underline"
          >
            <u>U</u>
          </button>
        </div>
      </div>

      {/* Text Alignment */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Alignment
        </label>
        <div className="flex gap-1">
          <button
            onClick={() => handleAlignment('left')}
            className={`px-3 py-2 rounded border ${
              alignment === 'left' 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            title="Align Left"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 4h16v1H2V4zm0 4h10v1H2V8zm0 4h16v1H2v-1zm0 4h10v1H2v-1z" />
            </svg>
          </button>
          <button
            onClick={() => handleAlignment('center')}
            className={`px-3 py-2 rounded border ${
              alignment === 'center' 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            title="Align Center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 4h10v1H5V4zm-3 4h16v1H2V8zm3 4h10v1H5v-1zm-3 4h16v1H2v-1z" />
            </svg>
          </button>
          <button
            onClick={() => handleAlignment('right')}
            className={`px-3 py-2 rounded border ${
              alignment === 'right' 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            title="Align Right"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 4h16v1H2V4zm6 4h10v1H8V8zm-6 4h16v1H2v-1zm6 4h10v1H8v-1z" />
            </svg>
          </button>
          <button
            onClick={() => handleAlignment('justify')}
            className={`px-3 py-2 rounded border ${
              alignment === 'justify' 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            title="Justify"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 4h16v1H2V4zm0 4h16v1H2V8zm0 4h16v1H2v-1zm0 4h16v1H2v-1z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}