'use client'

export class SVGParser {
  constructor(svgContent) {
    this.svgContent = svgContent
    this.svg = null
    this.elements = null
    this.animationTargets = null
    
    this.parseSVG()
  }

  parseSVG() {
    try {
      // Parse SVG content
      this.svg = new DOMParser().parseFromString(this.svgContent, 'image/svg+xml')
      
      // Check for parsing errors
      const errorNode = this.svg.querySelector('parsererror')
      if (errorNode) {
        throw new Error('Invalid SVG content')
      }

      // Extract elements
      this.elements = this.detectElements()
      this.animationTargets = this.getAnimationTargets()
      
    } catch (error) {
      console.error('SVG parsing failed:', error)
      throw new Error('Failed to parse SVG content')
    }
  }

  detectElements() {
    const svgRoot = this.svg.documentElement
    
    return {
      // Basic shapes
      paths: Array.from(svgRoot.querySelectorAll('path')),
      circles: Array.from(svgRoot.querySelectorAll('circle')),
      ellipses: Array.from(svgRoot.querySelectorAll('ellipse')),
      rects: Array.from(svgRoot.querySelectorAll('rect')),
      lines: Array.from(svgRoot.querySelectorAll('line')),
      polygons: Array.from(svgRoot.querySelectorAll('polygon')),
      polylines: Array.from(svgRoot.querySelectorAll('polyline')),
      
      // Text elements
      text: Array.from(svgRoot.querySelectorAll('text')),
      tspan: Array.from(svgRoot.querySelectorAll('tspan')),
      
      // Grouping elements
      groups: Array.from(svgRoot.querySelectorAll('g')),
      
      // Image elements
      images: Array.from(svgRoot.querySelectorAll('image')),
      
      // All animatable elements
      all: Array.from(svgRoot.querySelectorAll('*')).filter(el => 
        !['svg', 'defs', 'style', 'script'].includes(el.tagName.toLowerCase())
      )
    }
  }

  getAnimationTargets() {
    const targets = []
    
    // Process paths
    this.elements.paths.forEach((path, index) => {
      const pathLength = this.getPathLength(path)
      targets.push({
        id: `path-${index}`,
        type: 'path',
        element: path,
        tagName: 'path',
        pathLength,
        boundingBox: this.getBoundingBox(path),
        animationTypes: ['draw', 'morph', 'transform', 'fill', 'stroke'],
        properties: this.extractPathProperties(path)
      })
    })

    // Process text elements
    this.elements.text.forEach((text, index) => {
      targets.push({
        id: `text-${index}`,
        type: 'text',
        element: text,
        tagName: 'text',
        content: text.textContent,
        boundingBox: this.getBoundingBox(text),
        animationTypes: ['typing', 'reveal', 'transform', 'fill'],
        properties: this.extractTextProperties(text)
      })
    })

    // Process basic shapes
    const basicShapes = ['circles', 'rects', 'ellipses', 'lines', 'polygons', 'polylines']
    basicShapes.forEach(shapeType => {
      this.elements[shapeType].forEach((shape, index) => {
        targets.push({
          id: `${shapeType.slice(0, -1)}-${index}`,
          type: shapeType.slice(0, -1),
          element: shape,
          tagName: shape.tagName.toLowerCase(),
          boundingBox: this.getBoundingBox(shape),
          animationTypes: ['transform', 'fill', 'stroke', 'scale'],
          properties: this.extractShapeProperties(shape)
        })
      })
    })

    // Process groups (for stagger animations)
    this.elements.groups.forEach((group, index) => {
      const children = Array.from(group.children)
      if (children.length > 0) {
        targets.push({
          id: `group-${index}`,
          type: 'group',
          element: group,
          tagName: 'g',
          children: children.length,
          boundingBox: this.getBoundingBox(group),
          animationTypes: ['stagger', 'transform', 'opacity'],
          properties: this.extractGroupProperties(group)
        })
      }
    })

    return targets
  }

  getPathLength(pathElement) {
    try {
      if (pathElement && typeof pathElement.getTotalLength === 'function') {
        return pathElement.getTotalLength()
      }
      return 0
    } catch (error) {
      // Fallback for paths without getTotalLength
      const pathData = pathElement.getAttribute('d')
      return pathData ? pathData.length * 2 : 0 // Rough estimate
    }
  }

  getBoundingBox(element) {
    try {
      if (element && typeof element.getBBox === 'function') {
        const bbox = element.getBBox()
        return {
          x: bbox.x,
          y: bbox.y,
          width: bbox.width,
          height: bbox.height,
          centerX: bbox.x + bbox.width / 2,
          centerY: bbox.y + bbox.height / 2
        }
      }
    } catch (error) {
      // Fallback bounding box
      return { x: 0, y: 0, width: 100, height: 100, centerX: 50, centerY: 50 }
    }
  }

  extractPathProperties(path) {
    return {
      d: path.getAttribute('d'),
      fill: path.getAttribute('fill') || 'currentColor',
      stroke: path.getAttribute('stroke') || 'none',
      strokeWidth: path.getAttribute('stroke-width') || '1',
      opacity: path.getAttribute('opacity') || '1',
      transform: path.getAttribute('transform') || ''
    }
  }

  extractTextProperties(text) {
    return {
      content: text.textContent,
      fontSize: text.getAttribute('font-size') || '16',
      fontFamily: text.getAttribute('font-family') || 'Arial',
      fill: text.getAttribute('fill') || 'currentColor',
      x: text.getAttribute('x') || '0',
      y: text.getAttribute('y') || '0',
      opacity: text.getAttribute('opacity') || '1',
      transform: text.getAttribute('transform') || ''
    }
  }

  extractShapeProperties(shape) {
    const commonProps = {
      fill: shape.getAttribute('fill') || 'currentColor',
      stroke: shape.getAttribute('stroke') || 'none',
      strokeWidth: shape.getAttribute('stroke-width') || '1',
      opacity: shape.getAttribute('opacity') || '1',
      transform: shape.getAttribute('transform') || ''
    }

    // Add shape-specific properties
    switch (shape.tagName.toLowerCase()) {
      case 'circle':
        return {
          ...commonProps,
          cx: shape.getAttribute('cx') || '0',
          cy: shape.getAttribute('cy') || '0',
          r: shape.getAttribute('r') || '50'
        }
      case 'rect':
        return {
          ...commonProps,
          x: shape.getAttribute('x') || '0',
          y: shape.getAttribute('y') || '0',
          width: shape.getAttribute('width') || '100',
          height: shape.getAttribute('height') || '100'
        }
      default:
        return commonProps
    }
  }

  extractGroupProperties(group) {
    return {
      transform: group.getAttribute('transform') || '',
      opacity: group.getAttribute('opacity') || '1',
      children: Array.from(group.children).map(child => ({
        tagName: child.tagName.toLowerCase(),
        id: child.getAttribute('id') || `child-${Math.random().toString(36).substr(2, 9)}`
      }))
    }
  }

  // Get SVG viewBox and dimensions
  getSVGDimensions() {
    const svgElement = this.svg.documentElement
    const viewBox = svgElement.getAttribute('viewBox')
    
    if (viewBox) {
      const [x, y, width, height] = viewBox.split(' ').map(Number)
      return { x, y, width, height, hasViewBox: true }
    }

    // Fallback to width/height attributes
    const width = parseInt(svgElement.getAttribute('width')) || 400
    const height = parseInt(svgElement.getAttribute('height')) || 400
    
    return { x: 0, y: 0, width, height, hasViewBox: false }
  }

  // Generate unique IDs for elements that don't have them
  assignUniqueIds() {
    this.animationTargets.forEach(target => {
      if (!target.element.getAttribute('id')) {
        target.element.setAttribute('id', target.id)
      }
    })
    
    return this.getSVGString()
  }

  // Get modified SVG as string
  getSVGString() {
    return new XMLSerializer().serializeToString(this.svg)
  }

  // Validate if SVG is suitable for animation
  validateForAnimation() {
    const issues = []
    const recommendations = []

    // Check if SVG has animatable elements
    if (this.animationTargets.length === 0) {
      issues.push('No animatable elements found')
    }

    // Check for complex gradients or filters
    const gradients = this.svg.querySelectorAll('linearGradient, radialGradient')
    const filters = this.svg.querySelectorAll('filter')
    
    if (gradients.length > 3) {
      recommendations.push('Consider simplifying gradients for better performance')
    }
    
    if (filters.length > 0) {
      recommendations.push('Filters may impact animation performance')
    }

    // Check SVG complexity
    const totalElements = this.elements.all.length
    if (totalElements > 50) {
      recommendations.push('Complex SVG may cause performance issues')
    }

    return {
      isValid: issues.length === 0,
      issues,
      recommendations,
      complexity: totalElements > 50 ? 'high' : totalElements > 20 ? 'medium' : 'low',
      elementCount: totalElements,
      animatableElements: this.animationTargets.length
    }
  }
}

// Utility functions
export function isSVGContent(content) {
  return content.trim().startsWith('<svg') && content.includes('</svg>')
}

export function extractSVGFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (event) => {
      try {
        const content = event.target.result
        if (isSVGContent(content)) {
          resolve(content)
        } else {
          reject(new Error('File is not a valid SVG'))
        }
      } catch (error) {
        reject(error)
      }
    }
    
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsText(file)
  })
}