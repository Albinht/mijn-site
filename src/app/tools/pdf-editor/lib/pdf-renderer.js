// Dynamic import to avoid SSR issues
let pdfjsLib = null

// Initialize pdfjs-dist
export async function initPDFJS() {
  if (typeof window === 'undefined') return null
  
  if (!pdfjsLib) {
    // Dynamic import for client-side only
    const pdfjs = await import('pdfjs-dist')
    pdfjsLib = pdfjs
    
    // Use local worker file from public directory
    // This ensures version compatibility and works offline
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'
  }
  
  return pdfjsLib
}

/**
 * Load PDF for rendering using pdfjs-dist
 */
export async function loadPDFForRendering(file) {
  try {
    const pdfjs = await initPDFJS()
    if (!pdfjs) throw new Error('PDF.js not initialized')
    
    let arrayBuffer
    if (file instanceof Blob || file instanceof File) {
      arrayBuffer = await file.arrayBuffer()
    } else {
      // Handle if it's already an ArrayBuffer or other format
      arrayBuffer = file
    }
    
    const loadingTask = pdfjs.getDocument({
      data: arrayBuffer,
      cMapUrl: '/cmaps/', // We can add cmaps to public if needed
      cMapPacked: true,
      standardFontDataUrl: '/standard_fonts/',
      verbosity: 0  // Reduce console logging
    })
    
    const pdfDoc = await loadingTask.promise
    return pdfDoc
  } catch (error) {
    console.error('Error loading PDF for rendering:', error)
    
    // Fallback: Try loading without worker if worker fails
    console.log('Retrying without worker...')
    try {
      const pdfjs = await initPDFJS()
      if (!pdfjs) throw new Error('PDF.js not initialized')
      
      // Disable worker as fallback
      pdfjsLib.GlobalWorkerOptions.workerSrc = null
      
      let arrayBuffer
      if (file instanceof Blob || file instanceof File) {
        arrayBuffer = await file.arrayBuffer()
      } else {
        arrayBuffer = file
      }
      
      const loadingTask = pdfjs.getDocument({
        data: arrayBuffer,
        disableWorker: true,  // Explicitly disable worker
        verbosity: 0
      })
      
      const pdfDoc = await loadingTask.promise
      return pdfDoc
    } catch (fallbackError) {
      throw new Error(`Failed to load PDF: ${fallbackError.message}`)
    }
  }
}

/**
 * Render a PDF page to a canvas element
 */
export async function renderPageToCanvas(pdfDoc, pageNumber, canvas, scale = 1.5) {
  try {
    if (!pdfDoc || !canvas) return
    
    const page = await pdfDoc.getPage(pageNumber)
    const viewport = page.getViewport({ scale })
    
    // Get canvas context
    const context = canvas.getContext('2d')
    
    // Set canvas dimensions
    canvas.height = viewport.height
    canvas.width = viewport.width
    
    // Clear canvas before rendering
    context.clearRect(0, 0, canvas.width, canvas.height)
    
    // Render PDF page
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
      intent: 'display'
    }
    
    const renderTask = page.render(renderContext)
    await renderTask.promise
    
    return {
      width: viewport.width,
      height: viewport.height,
      scale
    }
  } catch (error) {
    console.error('Error rendering page:', error)
    throw new Error(`Failed to render page ${pageNumber}: ${error.message}`)
  }
}

/**
 * Generate thumbnail for a PDF page
 */
export async function generatePageThumbnail(pdfDoc, pageNumber, maxWidth = 200) {
  try {
    if (!pdfDoc) return null
    
    const page = await pdfDoc.getPage(pageNumber)
    const viewport = page.getViewport({ scale: 1 })
    
    // Calculate scale to fit within maxWidth
    const scale = maxWidth / viewport.width
    const scaledViewport = page.getViewport({ scale })
    
    // Create canvas for thumbnail
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.height = scaledViewport.height
    canvas.width = scaledViewport.width
    
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)
    
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
      intent: 'display'
    }
    
    const renderTask = page.render(renderContext)
    await renderTask.promise
    
    // Convert to data URL for display
    const dataUrl = canvas.toDataURL('image/jpeg', 0.7)  // Use JPEG for smaller size
    
    return {
      dataUrl,
      width: scaledViewport.width,
      height: scaledViewport.height
    }
  } catch (error) {
    console.error('Error generating thumbnail for page', pageNumber, ':', error)
    return null  // Return null instead of throwing to allow partial thumbnail generation
  }
}

/**
 * Get page dimensions
 */
export async function getPageDimensions(pdfDoc, pageNumber, scale = 1) {
  try {
    if (!pdfDoc) return null
    
    const page = await pdfDoc.getPage(pageNumber)
    const viewport = page.getViewport({ scale })
    
    return {
      width: viewport.width,
      height: viewport.height,
      originalWidth: viewport.width / scale,
      originalHeight: viewport.height / scale
    }
  } catch (error) {
    console.error('Error getting page dimensions:', error)
    return null
  }
}

/**
 * Render all pages thumbnails
 */
export async function renderAllThumbnails(pdfDoc, maxWidth = 200) {
  try {
    if (!pdfDoc || !pdfDoc.numPages) return []
    
    const numPages = pdfDoc.numPages
    const thumbnails = []
    
    // Generate thumbnails in batches to avoid memory issues
    const batchSize = 3  // Smaller batch size for better performance
    const maxThumbnails = Math.min(numPages, 30)  // Limit thumbnails for large PDFs
    
    for (let i = 1; i <= maxThumbnails; i += batchSize) {
      const batch = []
      for (let j = i; j < Math.min(i + batchSize, maxThumbnails + 1); j++) {
        batch.push(generatePageThumbnail(pdfDoc, j, maxWidth))
      }
      
      const results = await Promise.all(batch)
      results.forEach((thumbnail, index) => {
        if (thumbnail) {
          thumbnails.push({
            pageNumber: i + index,
            ...thumbnail
          })
        }
      })
    }
    
    return thumbnails
  } catch (error) {
    console.error('Error rendering all thumbnails:', error)
    return []  // Return empty array instead of throwing
  }
}

/**
 * Extract text from PDF page
 */
export async function extractTextFromPage(pdfDoc, pageNumber) {
  try {
    if (!pdfDoc) return ''
    
    const page = await pdfDoc.getPage(pageNumber)
    const textContent = await page.getTextContent()
    
    const text = textContent.items
      .map(item => item.str || '')
      .join(' ')
      .trim()
    
    return text
  } catch (error) {
    console.error('Error extracting text from page', pageNumber, ':', error)
    return ''  // Return empty string instead of throwing
  }
}

/**
 * Search text in PDF
 */
export async function searchInPDF(pdfDoc, searchText, options = {}) {
  try {
    if (!pdfDoc || !pdfDoc.numPages || !searchText) return []
    
    const { caseSensitive = false, maxResults = 100 } = options
    const numPages = pdfDoc.numPages
    const results = []
    
    const searchPattern = caseSensitive 
      ? searchText 
      : searchText.toLowerCase()
    
    for (let i = 1; i <= numPages && results.length < maxResults; i++) {
      const text = await extractTextFromPage(pdfDoc, i)
      if (!text) continue
      
      const pageText = caseSensitive ? text : text.toLowerCase()
      
      if (pageText.includes(searchPattern)) {
        // Find all occurrences in the page
        let startIndex = 0
        const occurrences = []
        
        while ((startIndex = pageText.indexOf(searchPattern, startIndex)) !== -1) {
          occurrences.push({
            index: startIndex,
            length: searchPattern.length
          })
          startIndex += searchPattern.length
        }
        
        results.push({
          pageNumber: i,
          occurrences,
          text: text.substring(0, 200) // Preview text
        })
      }
    }
    
    return results
  } catch (error) {
    console.error('Error searching in PDF:', error)
    return []
  }
}

/**
 * Clean up PDF resources
 */
export function cleanupPDFResources(pdfDoc) {
  try {
    if (pdfDoc) {
      // Clean up pages if they have cleanup methods
      if (pdfDoc.cleanup) {
        pdfDoc.cleanup()
      }
      
      // Destroy the document
      if (pdfDoc.destroy) {
        pdfDoc.destroy()
      }
    }
  } catch (error) {
    console.error('Error cleaning up PDF resources:', error)
  }
}

/**
 * Get PDF metadata
 */
export async function getPDFMetadata(pdfDoc) {
  try {
    if (!pdfDoc) return null
    
    const metadata = await pdfDoc.getMetadata()
    
    return {
      title: metadata.info?.Title || '',
      author: metadata.info?.Author || '',
      subject: metadata.info?.Subject || '',
      keywords: metadata.info?.Keywords || '',
      creator: metadata.info?.Creator || '',
      producer: metadata.info?.Producer || '',
      creationDate: metadata.info?.CreationDate || '',
      modificationDate: metadata.info?.ModDate || '',
      pageCount: pdfDoc.numPages || 0
    }
  } catch (error) {
    console.error('Error getting PDF metadata:', error)
    return null
  }
}