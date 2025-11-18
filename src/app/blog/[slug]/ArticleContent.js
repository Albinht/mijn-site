'use client'

export default function ArticleContent({ content }) {
  // Convert markdown-style headers and images to HTML
  const formatContent = (text) => {
    if (!text) return ''
    
    const lines = text.split('\n')
    const formatted = lines.map((line, index) => {
      // Check for markdown images: ![alt text](/path/to/image.png)
      const imageRegex = /!\[(.*?)\]\((.*?)\)/g
      if (imageRegex.test(line)) {
        return line.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
          return `<img src="${src}" alt="${alt}" class="w-full h-auto rounded-lg my-6 shadow-sm" />`
        })
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
