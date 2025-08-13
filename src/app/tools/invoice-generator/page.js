'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import jsPDF from 'jspdf'

export default function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] = useState({
    // Invoice details
    invoiceTitle: 'INVOICE',
    invoiceNumber: '',
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    
    // Billing info
    billFrom: '',
    billTo: '',
    
    // Items
    items: [
      { description: '', quantity: 1, price: 0 }
    ],
    
    // Additional costs
    discount: 0,
    tax: 0,
    shipping: 0,
    
    // Settings
    currency: 'EUR',
    notes: '',
    logo: null
  })

  const [logoPreview, setLogoPreview] = useState(null)

  const [totals, setTotals] = useState({
    subtotal: 0,
    discountAmount: 0,
    taxAmount: 0,
    total: 0
  })

  // Load saved company data on component mount
  useEffect(() => {
    loadSavedCompanyData()
  }, [])

  // Calculate totals whenever items or additional costs change
  useEffect(() => {
    calculateTotals()
  }, [invoiceData.items, invoiceData.discount, invoiceData.tax, invoiceData.shipping])

  const calculateTotals = () => {
    const subtotal = invoiceData.items.reduce((sum, item) => {
      return sum + (parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0)
    }, 0)

    const discountAmount = (subtotal * (parseFloat(invoiceData.discount) || 0)) / 100
    const subtotalAfterDiscount = subtotal - discountAmount
    const taxAmount = (subtotalAfterDiscount * (parseFloat(invoiceData.tax) || 0)) / 100
    const shipping = parseFloat(invoiceData.shipping) || 0
    const total = subtotalAfterDiscount + taxAmount + shipping

    setTotals({
      subtotal,
      discountAmount,
      taxAmount,
      total
    })
  }

  const addItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, price: 0 }]
    }))
  }

  const removeItem = (index) => {
    if (invoiceData.items.length > 1) {
      setInvoiceData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }))
    }
  }

  const updateItem = (index, field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const updateInvoiceData = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.width
    const pageHeight = doc.internal.pageSize.height
    const margin = 20
    let yPosition = margin

    // Helper function to add text with automatic line breaks
    const addText = (text, x, y, maxWidth = pageWidth - 2 * margin) => {
      const lines = doc.splitTextToSize(text, maxWidth)
      doc.text(lines, x, y)
      return y + (lines.length * 7)
    }

    // Add logo at the top (if available)
    if (logoPreview) {
      try {
        // Set maximum dimensions while maintaining aspect ratio
        const maxWidth = 40
        const maxHeight = 40
        
        // Use the maximum dimensions that fit
        doc.addImage(logoPreview, 'JPEG', margin, yPosition, maxWidth, maxHeight)
        yPosition += maxHeight + 10 // Move down after logo with some spacing
      } catch (error) {
        console.log('Logo could not be added to PDF')
      }
    }

    // Header - Title on the left (below logo if present)
    doc.setFontSize(24)
    doc.setFont(undefined, 'bold')
    doc.text(invoiceData.invoiceTitle || 'INVOICE', margin, yPosition + 10)
    
    // Invoice number on the right (aligned with title)
    doc.setFontSize(12)
    doc.setFont(undefined, 'normal')
    doc.text(`#${invoiceData.invoiceNumber || ''}`, pageWidth - margin - 20, yPosition + 10)
    
    // Move down after title
    yPosition += 20

    // Date information - aligned to the right
    doc.setFontSize(10)
    doc.text(`Datum: ${invoiceData.date}`, pageWidth - margin - 50, yPosition + 10)
    if (invoiceData.dueDate) {
      doc.text(`Vervaldatum: ${invoiceData.dueDate}`, pageWidth - margin - 50, yPosition + 17)
    }
    
    yPosition += 30

    // Billing information
    doc.setFontSize(12)
    doc.setFont(undefined, 'bold')
    doc.text('Van:', margin, yPosition)
    doc.text('Naar:', pageWidth / 2, yPosition)
    
    yPosition += 10
    doc.setFont(undefined, 'normal')
    doc.setFontSize(10)
    
    const fromLines = (invoiceData.billFrom || 'Uw bedrijfsinformatie').split('\n')
    const toLines = (invoiceData.billTo || 'Klantinformatie').split('\n')
    
    const maxLines = Math.max(fromLines.length, toLines.length)
    for (let i = 0; i < maxLines; i++) {
      if (fromLines[i]) doc.text(fromLines[i], margin, yPosition + (i * 7))
      if (toLines[i]) doc.text(toLines[i], pageWidth / 2, yPosition + (i * 7))
    }
    
    yPosition += (maxLines * 7) + 20

    // Items table header
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text('Item', margin, yPosition)
    doc.text('Aantal', pageWidth - 120, yPosition)
    doc.text('Prijs', pageWidth - 80, yPosition)
    doc.text('Totaal', pageWidth - 40, yPosition)
    
    // Line under header
    doc.line(margin, yPosition + 3, pageWidth - margin, yPosition + 3)
    yPosition += 10

    // Items
    doc.setFont(undefined, 'normal')
    invoiceData.items.forEach((item) => {
      const description = item.description || 'Beschrijving van artikel/dienst...'
      const quantity = item.quantity || 0
      const price = parseFloat(item.price) || 0
      const total = quantity * price
      
      doc.text(description.substring(0, 40), margin, yPosition)
      doc.text(quantity.toString(), pageWidth - 120, yPosition)
      doc.text(`${getCurrencySymbol()} ${price.toFixed(2)}`, pageWidth - 80, yPosition)
      doc.text(`${getCurrencySymbol()} ${total.toFixed(2)}`, pageWidth - 40, yPosition)
      
      yPosition += 7
    })

    yPosition += 10
    
    // Totals section
    const totalsX = pageWidth - 100
    doc.line(totalsX, yPosition, pageWidth - margin, yPosition)
    yPosition += 7
    
    doc.text(`Subtotaal: ${getCurrencySymbol()} ${totals.subtotal.toFixed(2)}`, totalsX, yPosition)
    yPosition += 7
    
    if (invoiceData.discount > 0) {
      doc.text(`Korting (${invoiceData.discount}%): -${getCurrencySymbol()} ${totals.discountAmount.toFixed(2)}`, totalsX, yPosition)
      yPosition += 7
    }
    
    if (invoiceData.tax > 0) {
      doc.text(`BTW (${invoiceData.tax}%): ${getCurrencySymbol()} ${totals.taxAmount.toFixed(2)}`, totalsX, yPosition)
      yPosition += 7
    }
    
    if (invoiceData.shipping > 0) {
      doc.text(`Verzendkosten: ${getCurrencySymbol()} ${parseFloat(invoiceData.shipping).toFixed(2)}`, totalsX, yPosition)
      yPosition += 7
    }
    
    // Final total
    doc.setFont(undefined, 'bold')
    doc.line(totalsX, yPosition, pageWidth - margin, yPosition)
    yPosition += 7
    doc.text(`Totaal: ${getCurrencySymbol()} ${totals.total.toFixed(2)}`, totalsX, yPosition)
    
    // Notes
    if (invoiceData.notes) {
      yPosition += 20
      doc.setFont(undefined, 'bold')
      doc.text('Opmerkingen:', margin, yPosition)
      yPosition += 7
      doc.setFont(undefined, 'normal')
      yPosition = addText(invoiceData.notes, margin, yPosition)
    }

    // Save the PDF
    doc.save(`factuur-${invoiceData.invoiceNumber || 'draft'}.pdf`)
  }

  const getCurrencySymbol = () => {
    switch (invoiceData.currency) {
      case 'EUR': return '€'
      case 'USD': return '$'
      case 'GBP': return '£'
      default: return '€'
    }
  }

  const handleLogoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const logoDataUrl = e.target.result
          setLogoPreview(logoDataUrl)
          updateInvoiceData('logo', logoDataUrl)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Selecteer een geldige afbeelding (JPG, PNG, etc.)')
      }
    }
  }

  const removeLogo = () => {
    setLogoPreview(null)
    updateInvoiceData('logo', null)
  }

  const saveCompanyData = () => {
    const companyData = {
      billFrom: invoiceData.billFrom,
      logo: invoiceData.logo,
      currency: invoiceData.currency,
      invoiceTitle: invoiceData.invoiceTitle
    }
    localStorage.setItem('invoiceCompanyData', JSON.stringify(companyData))
    alert('Bedrijfsgegevens opgeslagen!')
  }

  const loadSavedCompanyData = () => {
    try {
      const savedData = localStorage.getItem('invoiceCompanyData')
      if (savedData) {
        const companyData = JSON.parse(savedData)
        setInvoiceData(prev => ({
          ...prev,
          billFrom: companyData.billFrom || '',
          logo: companyData.logo || null,
          currency: companyData.currency || 'EUR',
          invoiceTitle: companyData.invoiceTitle || 'INVOICE'
        }))
        if (companyData.logo) {
          setLogoPreview(companyData.logo)
        }
      }
    } catch (error) {
      console.log('Kon opgeslagen gegevens niet laden')
    }
  }

  const clearSavedData = () => {
    if (confirm('Weet je zeker dat je de opgeslagen bedrijfsgegevens wilt verwijderen?')) {
      localStorage.removeItem('invoiceCompanyData')
      alert('Opgeslagen gegevens verwijderd!')
    }
  }

  const downloadInvoice = () => {
    const invoiceContent = {
      ...invoiceData,
      totals,
      generatedAt: new Date().toISOString()
    }
    
    const dataStr = JSON.stringify(invoiceContent, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    
    const exportFileDefaultName = `invoice-${invoiceData.invoiceNumber || 'draft'}.json`
    
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  const resetForm = () => {
    setInvoiceData({
      invoiceTitle: 'INVOICE',
      invoiceNumber: '',
      date: new Date().toISOString().split('T')[0],
      dueDate: '',
      billFrom: '',
      billTo: '',
      items: [{ description: '', quantity: 1, price: 0 }],
      discount: 0,
      tax: 0,
      shipping: 0,
      currency: 'EUR',
      notes: ''
    })
  }

  return (
    <div>
      <main className="min-h-screen bg-gray-50 py-4 sm:py-8">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">FREE TOOL</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Invoice Generator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Create professional invoices in minutes. Add your logo, calculate totals automatically and download as PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Invoice Details</h2>
              
              {/* Logo Upload */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Logo
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  {logoPreview ? (
                    <div className="relative">
                      <img 
                        src={logoPreview} 
                        alt="Logo preview" 
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain border border-gray-300 rounded-md"
                      />
                      <button
                        onClick={removeLogo}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="w-full sm:w-auto">
                    <input
                      type="file"
                      id="logo-upload"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="cursor-pointer bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block text-sm sm:text-base w-full sm:w-auto text-center"
                    >
                      {logoPreview ? 'Change Logo' : 'Upload Logo'}
                    </label>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG, GIF up to 5MB</p>
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Invoice Title
                  </label>
                  <input
                    type="text"
                    value={invoiceData.invoiceTitle}
                    onChange={(e) => updateInvoiceData('invoiceTitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="INVOICE"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) => updateInvoiceData('invoiceNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="#001"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <select
                    value={invoiceData.currency}
                    onChange={(e) => updateInvoiceData('currency', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
                <div></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={invoiceData.date}
                    onChange={(e) => updateInvoiceData('date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={invoiceData.dueDate}
                    onChange={(e) => updateInvoiceData('dueDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Billing Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
                    <label className="block text-sm font-medium text-gray-700">
                      Bill From
                    </label>
                    <button
                      onClick={saveCompanyData}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors self-start sm:self-auto"
                      title="Save company data for reuse"
                    >
                      💾 Save
                    </button>
                  </div>
                  <textarea
                    value={invoiceData.billFrom}
                    onChange={(e) => updateInvoiceData('billFrom', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    rows="4"
                    placeholder="Your company name&#10;Address&#10;City, State ZIP&#10;Tax ID"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <button
                      onClick={loadSavedCompanyData}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                    >
                      📂 Load
                    </button>
                    <button
                      onClick={clearSavedData}
                      className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200 transition-colors"
                    >
                      🗑️ Clear
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bill To
                  </label>
                  <textarea
                    value={invoiceData.billTo}
                    onChange={(e) => updateInvoiceData('billTo', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    rows="4"
                    placeholder="Client name&#10;Address&#10;City, State ZIP"
                  />
                </div>
              </div>

              {/* Items */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Items</h3>
                
                {/* Mobile-friendly items header */}
                <div className="hidden sm:grid grid-cols-12 gap-2 mb-2 text-xs font-medium text-gray-500">
                  <div className="col-span-6">Description</div>
                  <div className="col-span-2 text-center">Qty</div>
                  <div className="col-span-3 text-center">Price</div>
                  <div className="col-span-1"></div>
                </div>
                
                <div className="space-y-3">
                  {invoiceData.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:items-end bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
                      <div className="sm:col-span-6">
                        <label className="block text-xs font-medium text-gray-700 mb-1 sm:hidden">Description</label>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateItem(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                          placeholder="Item description..."
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:contents">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-medium text-gray-700 mb-1 sm:hidden">Quantity</label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            min="0"
                            step="1"
                          />
                        </div>
                        <div className="sm:col-span-3">
                          <label className="block text-xs font-medium text-gray-700 mb-1 sm:hidden">Price</label>
                          <input
                            type="number"
                            value={item.price}
                            onChange={(e) => updateItem(index, 'price', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            min="0"
                            step="0.01"
                            placeholder="0.00"
                          />
                        </div>
                        <div className="sm:col-span-1 flex items-end">
                          <button
                            onClick={() => removeItem(index)}
                            className="w-full px-2 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors text-lg sm:text-base"
                            disabled={invoiceData.items.length === 1}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addItem}
                  className="mt-3 text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm sm:text-base"
                >
                  + Add Item
                </button>
              </div>

              {/* Additional Costs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    value={invoiceData.discount}
                    onChange={(e) => updateInvoiceData('discount', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax (%)
                  </label>
                  <input
                    type="number"
                    value={invoiceData.tax}
                    onChange={(e) => updateInvoiceData('tax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping
                  </label>
                  <input
                    type="number"
                    value={invoiceData.shipping}
                    onChange={(e) => updateInvoiceData('shipping', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={invoiceData.notes}
                  onChange={(e) => updateInvoiceData('notes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  rows="3"
                  placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={generatePDF}
                  className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>
                <button
                  onClick={downloadInvoice}
                  className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Save as JSON
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm sm:text-base"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Invoice Preview */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Invoice Preview</h2>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                  Auto Save
                </div>
              </div>

              {/* Invoice Header */}
              <div className="border-b border-gray-200 pb-4 sm:pb-6 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-4 sm:space-y-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    {logoPreview && (
                      <img 
                        src={logoPreview} 
                        alt="Company Logo" 
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    )}
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{invoiceData.invoiceTitle || 'INVOICE'}</h1>
                      <p className="text-gray-600">
                        {invoiceData.invoiceNumber ? `#${invoiceData.invoiceNumber}` : '#'}
                      </p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm text-gray-600">Date: {invoiceData.date || 'Not set'}</p>
                    {invoiceData.dueDate && (
                      <p className="text-sm text-gray-600">Due Date: {invoiceData.dueDate}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Billing Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">From:</h3>
                  <div className="text-sm text-gray-600 whitespace-pre-line">
                    {invoiceData.billFrom || 'Your company information'}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">To:</h3>
                  <div className="text-sm text-gray-600 whitespace-pre-line">
                    {invoiceData.billTo || 'Client information'}
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-6 overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-900">Item</th>
                      <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-900">Qty</th>
                      <th className="px-2 sm:px-4 py-3 text-right text-xs sm:text-sm font-medium text-gray-900">Rate</th>
                      <th className="px-2 sm:px-4 py-3 text-right text-xs sm:text-sm font-medium text-gray-900">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {invoiceData.items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">
                          {item.description || 'Item description...'}
                        </td>
                        <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-600 text-center">
                          {item.quantity || 0}
                        </td>
                        <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-600 text-right">
                          {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {(parseFloat(item.price) || 0).toFixed(2)}
                        </td>
                        <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 text-right font-medium">
                          {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {((parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0)).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="text-gray-900">
                      {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {totals.subtotal.toFixed(2)}
                    </span>
                  </div>
                  
                  {invoiceData.discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Discount ({invoiceData.discount}%):</span>
                      <span className="text-red-600">
                        -{invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {totals.discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  
                  {invoiceData.tax > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax ({invoiceData.tax}%):</span>
                      <span className="text-gray-900">
                        {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {totals.taxAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  
                  {invoiceData.shipping > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="text-gray-900">
                        {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {parseFloat(invoiceData.shipping).toFixed(2)}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-base sm:text-lg font-bold border-t border-gray-200 pt-2">
                    <span>Total:</span>
                    <span>
                      {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {totals.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {invoiceData.notes && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Notes:</h4>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{invoiceData.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">About the Invoice Generator</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Why use this tool?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Completely free with no registration required
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Automatic calculation of totals, tax and discounts
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Professional invoice layout
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Download as PDF or JSON
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Support for multiple currencies
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Tips for professional invoices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Use clear and detailed descriptions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Always set a clear due date
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Add your tax ID for business invoices
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Keep copies of all sent invoices
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Use consistent invoice numbering
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 sm:mt-12 bg-[#F7D8FA] text-[#000] rounded-lg p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need help with your marketing?</h2>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Our marketing specialists help you set up automated systems for lead generation and customer acquisition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/work-with-me"
                className="bg-white text-[#8C2891] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Free Marketing Audit
              </Link>
              <a 
                href="https://wa.link/zhg1bl"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8C2891] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595"/>
                </svg>
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
