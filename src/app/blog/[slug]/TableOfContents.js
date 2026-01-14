'use client'

import { useEffect, useState } from 'react'

export default function TableOfContents({ content, title = 'Inhoud' }) {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    // Extract H2 and H3 from markdown content
    const lines = content?.split('\n') || []
    const extracted = []
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim()
        const id = `heading-${index}`
        extracted.push({ level: 2, text, id })
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim()
        const id = `heading-${index}`
        extracted.push({ level: 3, text, id })
      }
    })
    
    setHeadings(extracted)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    document.querySelectorAll('h2[id], h3[id]').forEach((heading) => {
      observer.observe(heading)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="sticky top-8">
      <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase">{title}</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors ${
              heading.level === 3 ? 'pl-4' : ''
            } ${
              activeId === heading.id
                ? 'text-[#1795FF] font-semibold'
                : 'text-gray-600 hover:text-[#1795FF]'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}
