import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib'

/**
 * Apply text edits to a PDF document
 */
export async function applyTextEdits(pdfDoc, textEdits) {
  try {
    console.log('Applying text edits:', textEdits)
    
    // Create a new PDF document
    const newPdfDoc = await PDFDocument.create()
    
    // Copy all pages from original
    const pages = await newPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices())
    pages.forEach(page => newPdfDoc.addPage(page))
    
    // Apply text edits to each page
    for (const [pageNumber, edits] of Object.entries(textEdits)) {
      const pageIndex = parseInt(pageNumber) - 1
      if (pageIndex < 0 || pageIndex >= newPdfDoc.getPageCount()) continue
      
      const page = newPdfDoc.getPages()[pageIndex]
      const pageHeight = page.getHeight()
      
      console.log(`Applying ${edits.length} edits to page ${pageNumber}`)
      
      // Draw white rectangles to cover old text
      for (const edit of edits) {
        if (edit.isEdited) {
          // Convert coordinates back from DOM display to PDF coordinates
          const originalScale = edit.originalScale || 1.5
          const scaleX = edit.scaleX || 1
          const scaleY = edit.scaleY || 1
          
          // Convert from display coordinates back to viewport coordinates
          const viewportX = edit.x / scaleX
          const viewportY = edit.y / scaleY
          const viewportWidth = edit.width / scaleX
          const viewportHeight = edit.height / scaleY
          
          // Convert from viewport to PDF coordinates
          const pdfX = viewportX / originalScale
          // For Y: we need to flip back from DOM (top-left) to PDF (bottom-left)
          const pdfY = pageHeight - (viewportY / originalScale) - (viewportHeight / originalScale)
          
          console.log(`Covering text at PDF x:${pdfX}, y:${pdfY} (Display x:${edit.x}, y:${edit.y})`)
          
          // Cover old text with white rectangle
          page.drawRectangle({
            x: pdfX,
            y: pdfY,
            width: (viewportWidth + 20) / originalScale,
            height: (viewportHeight + 5) / originalScale,
            color: rgb(1, 1, 1),
            opacity: 1
          })
        }
      }
      
      // Draw new text
      for (const edit of edits) {
        if (edit.isEdited) {
          // Embed font
          let font
          try {
            font = await newPdfDoc.embedFont(StandardFonts.Helvetica)
          } catch (error) {
            font = await newPdfDoc.embedFont(StandardFonts.Helvetica)
          }
          
          const originalScale = edit.originalScale || 1.5
          const scaleX = edit.scaleX || 1
          const scaleY = edit.scaleY || 1
          
          // Convert from display coordinates back to viewport coordinates
          const viewportX = edit.x / scaleX
          const viewportY = edit.y / scaleY
          const viewportFontSize = edit.fontSize / scaleY
          
          // Convert from viewport to PDF coordinates
          const pdfX = viewportX / originalScale
          const pdfY = pageHeight - (viewportY / originalScale) - (viewportFontSize / originalScale)
          
          console.log(`Drawing new text "${edit.text}" at PDF x:${pdfX}, y:${pdfY}`)
          
          // Draw new text
          page.drawText(edit.text, {
            x: pdfX,
            y: pdfY,
            size: viewportFontSize / originalScale,
            font: font,
            color: rgb(0, 0, 0),
            maxWidth: (edit.width / scaleX) / originalScale,
            lineHeight: (viewportFontSize * 1.2) / originalScale
          })
        }
      }
    }
    
    console.log('Text edits applied successfully')
    return newPdfDoc
  } catch (error) {
    console.error('Error applying text edits:', error)
    throw new Error(`Failed to apply text edits: ${error.message}`)
  }
}

/**
 * Apply text additions to a PDF document
 */
export async function applyTextAdditions(pdfDoc, textAdditions) {
  try {
    console.log('Applying text additions:', textAdditions)
    
    // Create a new PDF document
    const newPdfDoc = await PDFDocument.create()
    
    // Copy all pages from original
    const pages = await newPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices())
    pages.forEach(page => newPdfDoc.addPage(page))
    
    // Apply text additions to each page
    for (const [pageNumber, textBoxes] of Object.entries(textAdditions)) {
      const pageIndex = parseInt(pageNumber) - 1
      if (pageIndex < 0 || pageIndex >= newPdfDoc.getPageCount()) continue
      
      const page = newPdfDoc.getPages()[pageIndex]
      const pageHeight = page.getHeight()
      
      console.log(`Adding ${textBoxes.length} text boxes to page ${pageNumber}`)
      
      // Add each text box
      for (const box of textBoxes) {
        if (box.text && box.text.trim()) {
          // Embed font
          let font
          try {
            font = await newPdfDoc.embedFont(StandardFonts[box.fontFamily] || StandardFonts.Helvetica)
          } catch (error) {
            font = await newPdfDoc.embedFont(StandardFonts.Helvetica)
          }
          
          const originalScale = box.originalScale || 1.5
          const scaleX = box.scaleX || 1
          const scaleY = box.scaleY || 1
          
          // Convert from display coordinates to viewport coordinates
          const viewportX = box.x / scaleX
          const viewportY = box.y / scaleY
          const viewportFontSize = (box.fontSize || 14) / scaleY
          
          // Convert from viewport to PDF coordinates
          const pdfX = viewportX / originalScale
          const pdfY = pageHeight - (viewportY / originalScale) - (viewportFontSize / originalScale)
          
          console.log(`Adding text "${box.text}" at x:${pdfX}, y:${pdfY}`)
          
          // Draw the text
          page.drawText(box.text, {
            x: pdfX,
            y: pdfY,
            size: viewportFontSize / originalScale,
            font: font,
            color: rgb(0, 0, 0),
            maxWidth: ((box.width || 200) / scaleX) / originalScale,
            lineHeight: (viewportFontSize * 1.2) / originalScale
          })
        }
      }
    }
    
    console.log('Text additions applied successfully')
    return newPdfDoc
  } catch (error) {
    console.error('Error applying text additions:', error)
    throw new Error(`Failed to apply text additions: ${error.message}`)
  }
}

/**
 * Replace text in PDF (simple find and replace)
 */
export async function replaceTextInPDF(pdfDoc, findText, replaceText) {
  try {
    // This is a simplified version that works by overlaying new text
    // Full text replacement in PDFs is complex due to the format
    
    const newPdfDoc = await PDFDocument.create()
    const pages = await newPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices())
    pages.forEach(page => newPdfDoc.addPage(page))
    
    // Note: Actual implementation would require text extraction and positioning
    // This is a placeholder for the concept
    
    return newPdfDoc
  } catch (error) {
    console.error('Error replacing text:', error)
    throw new Error(`Failed to replace text: ${error.message}`)
  }
}

/**
 * Add text annotation to PDF
 */
export async function addTextAnnotation(pdfDoc, pageNumber, annotation) {
  try {
    const pages = pdfDoc.getPages()
    const pageIndex = pageNumber - 1
    
    if (pageIndex < 0 || pageIndex >= pages.length) {
      throw new Error('Invalid page number')
    }
    
    const page = pages[pageIndex]
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    
    // Add annotation background
    if (annotation.background) {
      page.drawRectangle({
        x: annotation.x - 5,
        y: annotation.y - 5,
        width: annotation.width + 10,
        height: annotation.height + 10,
        color: rgb(1, 1, 0.8),
        opacity: 0.8,
        borderColor: rgb(1, 0.8, 0),
        borderWidth: 1
      })
    }
    
    // Add annotation text
    page.drawText(annotation.text, {
      x: annotation.x,
      y: annotation.y,
      size: annotation.fontSize || 10,
      font: font,
      color: rgb(0, 0, 0),
      maxWidth: annotation.width
    })
    
    return pdfDoc
  } catch (error) {
    console.error('Error adding annotation:', error)
    throw new Error(`Failed to add annotation: ${error.message}`)
  }
}

/**
 * Highlight text in PDF
 */
export async function highlightTextInPDF(pdfDoc, pageNumber, highlights) {
  try {
    const pages = pdfDoc.getPages()
    const pageIndex = pageNumber - 1
    
    if (pageIndex < 0 || pageIndex >= pages.length) {
      throw new Error('Invalid page number')
    }
    
    const page = pages[pageIndex]
    
    // Add highlight rectangles
    for (const highlight of highlights) {
      page.drawRectangle({
        x: highlight.x,
        y: highlight.y,
        width: highlight.width,
        height: highlight.height,
        color: highlight.color || rgb(1, 1, 0),
        opacity: highlight.opacity || 0.3
      })
    }
    
    return pdfDoc
  } catch (error) {
    console.error('Error highlighting text:', error)
    throw new Error(`Failed to highlight text: ${error.message}`)
  }
}