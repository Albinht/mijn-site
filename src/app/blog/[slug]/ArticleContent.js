'use client'

export default function ArticleContent({ content }) {
  // Convert markdown-style headers and images to HTML, preserve existing HTML
  const formatContent = (text) => {
    if (!text) return ''
    
    // First, protect HTML blocks by replacing them with placeholders
    const htmlBlocks = []
    let protectedText = text
    
    // Function to extract nested HTML blocks
    const extractHtmlBlocks = (text) => {
      let result = text
      let blockIndex = 0
      
      // Match opening <div style="..."> and find its closing </div> accounting for nesting
      const findMatchingClosingTag = (text, startPos) => {
        let depth = 1
        let pos = startPos
        
        while (pos < text.length && depth > 0) {
          if (text.substr(pos, 5) === '<div ') {
            depth++
            pos += 5
          } else if (text.substr(pos, 6) === '</div>') {
            depth--
            if (depth === 0) return pos + 6
            pos += 6
          } else {
            pos++
          }
        }
        return pos
      }
      
      // Find all <div style=" blocks
      let searchPos = 0
      while (true) {
        const divStart = result.indexOf('<div style=\"', searchPos)
        if (divStart === -1) break
        
        const divEnd = findMatchingClosingTag(result, divStart + 1)
        const htmlBlock = result.substring(divStart, divEnd)
        
        htmlBlocks.push(htmlBlock)
        const placeholder = `___HTML_BLOCK_${blockIndex}___`
        result = result.substring(0, divStart) + placeholder + result.substring(divEnd)
        searchPos = divStart + placeholder.length
        blockIndex++
      }
      
      return result
    }
    
    protectedText = extractHtmlBlocks(protectedText)
    
    // Split content into lines but detect code blocks
    const lines = protectedText.split('\n')
    let inCodeBlock = false
    let codeLines = []
    let codeLanguage = ''
    
    const formatted = lines.map((line, index) => {
      // Check if line contains HTML block placeholder
      if (line.includes('___HTML_BLOCK_')) {
        const match = line.match(/___HTML_BLOCK_(\d+)___/)
        if (match) {
          const blockIndex = parseInt(match[1])
          return htmlBlocks[blockIndex]
        }
      }
      
      // Detect code blocks (```)
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          // Start of code block
          inCodeBlock = true
          codeLanguage = line.replace('```', '').trim()
          codeLines = []
          return '' // Don't render the opening ```
        } else {
          // End of code block
          inCodeBlock = false
          const codeContent = codeLines.join('\n')
          codeLines = []
          return `<pre style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; overflow-x: auto; margin: 1.5rem 0; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6;"><code>${codeContent}</code></pre>`
        }
      }
      
      // If inside code block, collect lines
      if (inCodeBlock) {
        codeLines.push(line)
        return ''
      }
      
      // Check for markdown images: ![alt text](/path/to/image.png)
      const imageRegex = /!\[(.*?)\]\((.*?)\)/g
      if (imageRegex.test(line)) {
        return line.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
          return `<img src="${src}" alt="${alt}" class="w-full h-auto rounded-lg my-6 shadow-sm" />`
        })
      }
      
      // Handle inline code (backticks)
      if (line.includes('`') && !line.includes('```')) {
        line = line.replace(/`([^`]+)`/g, '<code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 14px; color: #1f2937;">$1</code>')
      }
      
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim()
        const id = `heading-${index}`
        return `<h2 id="${id}" style="scroll-margin-top: 100px;" class="text-3xl font-bold text-gray-900 mt-10 mb-5 first:mt-0">${text}</h2>`
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim()
        const id = `heading-${index}`
        return `<h3 id="${id}" style="scroll-margin-top: 100px;" class="text-2xl font-bold text-gray-900 mt-7 mb-4">${text}</h3>`
      } else if (line.startsWith('#### ')) {
        const text = line.replace('#### ', '')
        return `<h4 class="text-xl font-bold text-gray-900 mt-5 mb-3">${text}</h4>`
      } else if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.replace(/\*\*/g, '')
        return `<p class="text-lg font-extrabold text-black mt-4 mb-2">${text}</p>`
      } else if (line.startsWith('- ') || line.startsWith('• ')) {
        const text = line.replace(/^- |^• /, '')
        return `<li class="ml-6 mb-1.5">${text}</li>`
      } else if (line.trim() === '') {
        return ''
      }
      return `<p class="mb-3 leading-relaxed">${line}</p>`
    })
    
    return formatted.join('')
  }

  return (
    <div 
      className="prose prose-lg max-w-none [&_p]:break-words [&_li]:break-words"
      style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}
      dangerouslySetInnerHTML={{ __html: formatContent(content) }}
    />
  )
}
