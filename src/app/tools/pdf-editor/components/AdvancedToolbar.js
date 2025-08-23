'use client'

export default function AdvancedToolbar({ currentTool, onToolChange }) {
  const tools = [
    { id: 'select', icon: '👆', label: 'Select', group: 'basic' },
    { id: 'text', icon: '✏️', label: 'Text', group: 'edit' },
    { id: 'image', icon: '🖼️', label: 'Image', group: 'edit' },
    { id: 'draw', icon: '✍️', label: 'Draw', group: 'edit' },
    { id: 'shapes', icon: '⬜', label: 'Shapes', group: 'edit' },
    { id: 'forms', icon: '📝', label: 'Forms', group: 'edit' },
    { id: 'annotate', icon: '💭', label: 'Annotate', group: 'edit' },
    { id: 'highlight', icon: '🖍️', label: 'Highlight', group: 'edit' },
    { id: 'links', icon: '🔗', label: 'Links', group: 'advanced' },
    { id: 'whiteout', icon: '⬜', label: 'Whiteout', group: 'advanced' },
    { id: 'watermark', icon: '💧', label: 'Watermark', group: 'advanced' },
    { id: 'merge', icon: '🔀', label: 'Merge', group: 'organize' },
    { id: 'split', icon: '✂️', label: 'Split', group: 'organize' },
    { id: 'rotate', icon: '🔄', label: 'Rotate', group: 'organize' },
    { id: 'delete', icon: '🗑️', label: 'Delete', group: 'organize' },
    { id: 'reorder', icon: '📑', label: 'Reorder', group: 'organize' }
  ]

  const groupedTools = {
    basic: tools.filter(t => t.group === 'basic'),
    edit: tools.filter(t => t.group === 'edit'),
    advanced: tools.filter(t => t.group === 'advanced'),
    organize: tools.filter(t => t.group === 'organize')
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Main Toolbar */}
      <div className="space-y-3">
        {/* Basic Tools */}
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Basic
          </h4>
          <div className="flex flex-wrap gap-1">
            {groupedTools.basic.map(tool => (
              <button
                key={tool.id}
                onClick={() => onToolChange(tool.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                  currentTool === tool.id
                    ? 'bg-purple-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                title={tool.label}
              >
                <span className="text-lg">{tool.icon}</span>
                <span className="text-xs font-medium hidden sm:inline">{tool.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Edit Tools */}
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Edit
          </h4>
          <div className="flex flex-wrap gap-1">
            {groupedTools.edit.map(tool => (
              <button
                key={tool.id}
                onClick={() => onToolChange(tool.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                  currentTool === tool.id
                    ? 'bg-purple-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                title={tool.label}
              >
                <span className="text-lg">{tool.icon}</span>
                <span className="text-xs font-medium hidden sm:inline">{tool.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Tools */}
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Advanced
          </h4>
          <div className="flex flex-wrap gap-1">
            {groupedTools.advanced.map(tool => (
              <button
                key={tool.id}
                onClick={() => onToolChange(tool.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                  currentTool === tool.id
                    ? 'bg-purple-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                title={tool.label}
              >
                <span className="text-lg">{tool.icon}</span>
                <span className="text-xs font-medium hidden sm:inline">{tool.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Organize Tools */}
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Organize
          </h4>
          <div className="flex flex-wrap gap-1">
            {groupedTools.organize.map(tool => (
              <button
                key={tool.id}
                onClick={() => onToolChange(tool.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                  currentTool === tool.id
                    ? 'bg-purple-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                title={tool.label}
              >
                <span className="text-lg">{tool.icon}</span>
                <span className="text-xs font-medium hidden sm:inline">{tool.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="mt-4 pt-4 border-t">
        <details className="text-xs text-gray-500">
          <summary className="cursor-pointer hover:text-gray-700">
            Keyboard Shortcuts
          </summary>
          <div className="mt-2 space-y-1">
            <div>Ctrl+Z - Undo</div>
            <div>Ctrl+Y - Redo</div>
            <div>Ctrl+C - Copy</div>
            <div>Ctrl+V - Paste</div>
            <div>Delete - Remove selected</div>
          </div>
        </details>
      </div>
    </div>
  )
}