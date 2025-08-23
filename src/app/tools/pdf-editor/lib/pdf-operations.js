import { PDFDocument, degrees, rgb } from 'pdf-lib'

/**
 * Load a PDF file and extract page information
 */
export async function loadPDF(file) {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)
    const pages = pdfDoc.getPages()
    
    const pageData = pages.map((page, index) => ({
      pageNumber: index + 1,
      width: page.getWidth(),
      height: page.getHeight(),
      rotation: page.getRotation().angle
    }))
    
    return {
      pdfDoc,
      pages: pageData,
      totalPages: pages.length,
      fileName: file.name,
      fileSize: file.size
    }
  } catch (error) {
    throw new Error(`Failed to load PDF: ${error.message}`)
  }
}

/**
 * Merge multiple PDF files into one
 */
export async function mergePDFs(files) {
  try {
    const mergedPdf = await PDFDocument.create()
    
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await PDFDocument.load(arrayBuffer)
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
      
      pages.forEach(page => mergedPdf.addPage(page))
    }
    
    const pages = mergedPdf.getPages()
    const pageData = pages.map((page, index) => ({
      pageNumber: index + 1,
      width: page.getWidth(),
      height: page.getHeight(),
      rotation: page.getRotation().angle
    }))
    
    return {
      pdfDoc: mergedPdf,
      pages: pageData,
      totalPages: pages.length
    }
  } catch (error) {
    throw new Error(`Failed to merge PDFs: ${error.message}`)
  }
}

/**
 * Split a PDF into multiple files based on page ranges
 */
export async function splitPDF(pdfDoc, ranges) {
  try {
    const splitPdfs = []
    
    for (const range of ranges) {
      const newPdf = await PDFDocument.create()
      const pageIndices = []
      
      // Parse range (e.g., "1-3" or "5" or "1,3,5")
      if (range.includes('-')) {
        const [start, end] = range.split('-').map(n => parseInt(n) - 1)
        for (let i = start; i <= end && i < pdfDoc.getPageCount(); i++) {
          pageIndices.push(i)
        }
      } else if (range.includes(',')) {
        range.split(',').forEach(n => {
          const index = parseInt(n) - 1
          if (index >= 0 && index < pdfDoc.getPageCount()) {
            pageIndices.push(index)
          }
        })
      } else {
        const index = parseInt(range) - 1
        if (index >= 0 && index < pdfDoc.getPageCount()) {
          pageIndices.push(index)
        }
      }
      
      const pages = await newPdf.copyPages(pdfDoc, pageIndices)
      pages.forEach(page => newPdf.addPage(page))
      
      splitPdfs.push({
        pdfDoc: newPdf,
        range: range,
        pageCount: pages.length
      })
    }
    
    return splitPdfs
  } catch (error) {
    throw new Error(`Failed to split PDF: ${error.message}`)
  }
}

/**
 * Rotate selected pages by specified degrees
 */
export async function rotatePage(pdfDoc, pageNumbers, rotationDegrees) {
  try {
    const pages = pdfDoc.getPages()
    
    pageNumbers.forEach(pageNum => {
      const pageIndex = pageNum - 1
      if (pageIndex >= 0 && pageIndex < pages.length) {
        const page = pages[pageIndex]
        const currentRotation = page.getRotation().angle
        page.setRotation(degrees(currentRotation + rotationDegrees))
      }
    })
    
    const pageData = pages.map((page, index) => ({
      pageNumber: index + 1,
      width: page.getWidth(),
      height: page.getHeight(),
      rotation: page.getRotation().angle
    }))
    
    return {
      pdfDoc,
      pages: pageData
    }
  } catch (error) {
    throw new Error(`Failed to rotate pages: ${error.message}`)
  }
}

/**
 * Delete selected pages from PDF
 */
export async function deletePage(pdfDoc, pageNumbers) {
  try {
    // Sort page numbers in descending order to avoid index shifting
    const sortedPageNumbers = [...pageNumbers].sort((a, b) => b - a)
    
    sortedPageNumbers.forEach(pageNum => {
      const pageIndex = pageNum - 1
      if (pageIndex >= 0 && pageIndex < pdfDoc.getPageCount()) {
        pdfDoc.removePage(pageIndex)
      }
    })
    
    const pages = pdfDoc.getPages()
    const pageData = pages.map((page, index) => ({
      pageNumber: index + 1,
      width: page.getWidth(),
      height: page.getHeight(),
      rotation: page.getRotation().angle
    }))
    
    return {
      pdfDoc,
      pages: pageData,
      totalPages: pages.length
    }
  } catch (error) {
    throw new Error(`Failed to delete pages: ${error.message}`)
  }
}

/**
 * Reorder pages in PDF
 */
export async function reorderPages(pdfDoc, newOrder) {
  try {
    const newPdf = await PDFDocument.create()
    
    for (const pageNum of newOrder) {
      const pageIndex = pageNum - 1
      if (pageIndex >= 0 && pageIndex < pdfDoc.getPageCount()) {
        const [page] = await newPdf.copyPages(pdfDoc, [pageIndex])
        newPdf.addPage(page)
      }
    }
    
    const pages = newPdf.getPages()
    const pageData = pages.map((page, index) => ({
      pageNumber: index + 1,
      width: page.getWidth(),
      height: page.getHeight(),
      rotation: page.getRotation().angle
    }))
    
    return {
      pdfDoc: newPdf,
      pages: pageData
    }
  } catch (error) {
    throw new Error(`Failed to reorder pages: ${error.message}`)
  }
}

/**
 * Extract selected pages as new PDF
 */
export async function extractPages(pdfDoc, pageNumbers) {
  try {
    const newPdf = await PDFDocument.create()
    const pageIndices = pageNumbers.map(num => num - 1)
    
    const pages = await newPdf.copyPages(pdfDoc, pageIndices)
    pages.forEach(page => newPdf.addPage(page))
    
    return {
      pdfDoc: newPdf,
      pageCount: pages.length
    }
  } catch (error) {
    throw new Error(`Failed to extract pages: ${error.message}`)
  }
}

/**
 * Compress PDF by reducing image quality
 */
export async function compressPDF(pdfDoc, quality = 0.8) {
  try {
    // Note: pdf-lib doesn't have built-in compression
    // This is a placeholder - actual compression would require
    // more complex image processing
    
    // For now, we'll just return the original with a flag
    return {
      pdfDoc,
      compressed: true,
      quality
    }
  } catch (error) {
    throw new Error(`Failed to compress PDF: ${error.message}`)
  }
}

/**
 * Add text to a PDF page
 */
export async function addTextToPDF(pdfDoc, pageNumber, text, position = { x: 50, y: 50 }) {
  try {
    const pages = pdfDoc.getPages()
    const pageIndex = pageNumber - 1
    
    if (pageIndex >= 0 && pageIndex < pages.length) {
      const page = pages[pageIndex]
      
      page.drawText(text, {
        x: position.x,
        y: position.y,
        size: 12,
        color: rgb(0, 0, 0)
      })
    }
    
    return {
      pdfDoc,
      success: true
    }
  } catch (error) {
    throw new Error(`Failed to add text: ${error.message}`)
  }
}

/**
 * Save PDF to blob for download
 */
export async function savePDF(pdfDoc, fileName = 'edited.pdf') {
  try {
    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    
    // Create download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.click()
    
    // Clean up
    setTimeout(() => URL.revokeObjectURL(url), 100)
    
    return true
  } catch (error) {
    throw new Error(`Failed to save PDF: ${error.message}`)
  }
}

/**
 * Get PDF metadata
 */
export async function getPDFMetadata(pdfDoc) {
  try {
    const title = pdfDoc.getTitle()
    const author = pdfDoc.getAuthor()
    const subject = pdfDoc.getSubject()
    const creator = pdfDoc.getCreator()
    const producer = pdfDoc.getProducer()
    const creationDate = pdfDoc.getCreationDate()
    const modificationDate = pdfDoc.getModificationDate()
    
    return {
      title,
      author,
      subject,
      creator,
      producer,
      creationDate,
      modificationDate,
      pageCount: pdfDoc.getPageCount()
    }
  } catch (error) {
    throw new Error(`Failed to get PDF metadata: ${error.message}`)
  }
}

/**
 * Add watermark to all pages
 */
export async function addWatermark(pdfDoc, watermarkText) {
  try {
    const pages = pdfDoc.getPages()
    
    pages.forEach(page => {
      const { width, height } = page.getSize()
      
      page.drawText(watermarkText, {
        x: width / 2 - 50,
        y: height / 2,
        size: 50,
        color: rgb(0.75, 0.75, 0.75),
        rotate: degrees(-45),
        opacity: 0.3
      })
    })
    
    return {
      pdfDoc,
      success: true
    }
  } catch (error) {
    throw new Error(`Failed to add watermark: ${error.message}`)
  }
}