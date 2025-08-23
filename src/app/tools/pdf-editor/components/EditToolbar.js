'use client'

export default function EditToolbar({
  currentTool,
  onToolChange,
  onRotate,
  onDelete,
  onExtract,
  onSplit,
  onMerge,
  onToggleEditMode,
  onToggleAddMode,
  onSaveTextEdits,
  onSaveTextAdditions,
  isEditMode,
  isAddMode,
  hasSelection,
  fileCount,
  hasTextEdits,
  hasTextAdditions
}) {
  const tools = [
    { id: 'view', icon: '👁️', label: 'View', always: true },
    { id: 'edit-text', icon: '✏️', label: 'Edit Text', always: true, highlight: isEditMode },
    { id: 'add-text', icon: '➕', label: 'Add Text', always: true, highlight: isAddMode },
    { id: 'merge', icon: '🔀', label: 'Merge', show: fileCount > 1 },
    { id: 'split', icon: '✂️', label: 'Split' },
    { id: 'rotate', icon: '🔄', label: 'Rotate' },
    { id: 'delete', icon: '🗑️', label: 'Delete' },
    { id: 'reorder', icon: '📑', label: 'Reorder' },
    { id: 'extract', icon: '📤', label: 'Extract' }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map(tool => {
          if (tool.show === false) return null
          
          const handleClick = () => {
            if (tool.id === 'edit-text') {
              onToggleEditMode && onToggleEditMode()
            } else if (tool.id === 'add-text') {
              onToggleAddMode && onToggleAddMode()
            } else {
              onToolChange(tool.id)
            }
          }
          
          return (
            <button
              key={tool.id}
              onClick={handleClick}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                tool.highlight
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : currentTool === tool.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <span className="text-lg">{tool.icon}</span>
              <span className="text-sm font-medium">{tool.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tool-specific actions */}
      {currentTool === 'rotate' && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-3">
            {hasSelection ? `Rotate ${hasSelection} selected page(s)` : 'Select pages to rotate'}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => onRotate(90)}
              disabled={!hasSelection}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ↻ 90°
            </button>
            <button
              onClick={() => onRotate(180)}
              disabled={!hasSelection}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ↻ 180°
            </button>
            <button
              onClick={() => onRotate(270)}
              disabled={!hasSelection}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ↻ 270°
            </button>
          </div>
        </div>
      )}

      {currentTool === 'delete' && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-3">
            {hasSelection ? `Delete ${hasSelection} selected page(s)` : 'Select pages to delete'}
          </p>
          <button
            onClick={onDelete}
            disabled={!hasSelection}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Delete Selected Pages
          </button>
        </div>
      )}

      {currentTool === 'extract' && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-3">
            {hasSelection ? `Extract ${hasSelection} selected page(s)` : 'Select pages to extract'}
          </p>
          <button
            onClick={onExtract}
            disabled={!hasSelection}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Extract Selected Pages
          </button>
        </div>
      )}

      {currentTool === 'split' && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-3">
            Enter page ranges to split (e.g., "1-3", "4", "5-10")
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="1-3, 4, 5-10"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={onSplit}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Split PDF
            </button>
          </div>
        </div>
      )}

      {currentTool === 'merge' && fileCount > 1 && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-3">
            Merge {fileCount} PDF files into one
          </p>
          <button
            onClick={onMerge}
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Merge All PDFs
          </button>
        </div>
      )}

      {currentTool === 'reorder' && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600">
            Drag and drop pages in the sidebar to reorder them
          </p>
        </div>
      )}

      {/* Text Edit Mode Save Button */}
      {isEditMode && hasTextEdits && (
        <div className="border-t pt-4 bg-yellow-50 -m-4 mt-4 p-4 rounded-b-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-yellow-800">Unsaved Text Changes</p>
              <p className="text-xs text-yellow-600 mt-1">Click "Save Text Changes" to apply your edits to the PDF</p>
            </div>
            <button
              onClick={onSaveTextEdits}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md animate-pulse"
            >
              💾 Save Text Changes
            </button>
          </div>
        </div>
      )}

      {/* Add Text Mode Save Button */}
      {isAddMode && hasTextAdditions && (
        <div className="border-t pt-4 bg-yellow-50 -m-4 mt-4 p-4 rounded-b-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-yellow-800">Unsaved Text Additions</p>
              <p className="text-xs text-yellow-600 mt-1">Click "Save Text Additions" to add your text to the PDF</p>
            </div>
            <button
              onClick={onSaveTextAdditions}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md animate-pulse"
            >
              💾 Save Text Additions
            </button>
          </div>
        </div>
      )}
    </div>
  )
}