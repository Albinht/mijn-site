'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import jsPDF from 'jspdf'

export default function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] = useState({
    // Invoice details
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

    // Add logo if available
    if (logoPreview) {
      try {
        doc.addImage(logoPreview, 'JPEG', margin, yPosition, 40, 30)
        yPosition += 40
      } catch (error) {
        console.log('Logo could not be added to PDF')
      }
    }

    // Header
    doc.setFontSize(24)
    doc.setFont(undefined, 'bold')
    doc.text('FACTUUR', pageWidth - margin - 50, yPosition)
    
    doc.setFontSize(12)
    doc.setFont(undefined, 'normal')
    doc.text(`#${invoiceData.invoiceNumber || ''}`, pageWidth - margin - 50, yPosition + 10)
    
    yPosition += 30

    // Date information
    doc.setFontSize(10)
    doc.text(`Datum: ${invoiceData.date}`, pageWidth - margin - 60, yPosition)
    if (invoiceData.dueDate) {
      doc.text(`Vervaldatum: ${invoiceData.dueDate}`, pageWidth - margin - 60, yPosition + 7)
    }
    
    yPosition += 20

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
      currency: invoiceData.currency
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
          currency: companyData.currency || 'EUR'
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
    <>
      <Head>
        <title>Gratis Factuur Generator | Professionele Facturen Maken</title>
        <meta name="description" content="Maak professionele facturen gratis met onze factuur generator. Voeg logo toe, bereken automatisch totalen en download als PDF. Volledig functioneel en gebruiksvriendelijk." />
        <meta name="keywords" content="factuur generator, gratis factuur maken, invoice generator, factuur template, online factuur" />
        <meta property="og:title" content="Gratis Factuur Generator | Professionele Facturen Maken" />
        <meta property="og:description" content="Maak professionele facturen gratis met onze factuur generator. Volledig functioneel en gebruiksvriendelijk." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://niblah.com/tools/invoice-generator" />
      </Head>

      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">GRATIS TOOL</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Factuur Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maak professionele facturen in enkele minuten. Voeg je logo toe, bereken automatisch totalen en download als PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Factuur Details</h2>
              
              {/* Logo Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrijfslogo
                </label>
                <div className="flex items-center space-x-4">
                  {logoPreview ? (
                    <div className="relative">
                      <img 
                        src={logoPreview} 
                        alt="Logo preview" 
                        className="w-20 h-20 object-contain border border-gray-300 rounded-md"
                      />
                      <button
                        onClick={removeLogo}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <input
                      type="file"
                      id="logo-upload"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block"
                    >
                      {logoPreview ? 'Wijzig logo' : 'Upload logo'}
                    </label>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG, GIF tot 5MB</p>
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Factuurnummer
                  </label>
                  <input
                    type="text"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) => updateInvoiceData('invoiceNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="#001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Munteenheid
                  </label>
                  <select
                    value={invoiceData.currency}
                    onChange={(e) => updateInvoiceData('currency', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Datum
                  </label>
                  <input
                    type="date"
                    value={invoiceData.date}
                    onChange={(e) => updateInvoiceData('date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vervaldatum
                  </label>
                  <input
                    type="date"
                    value={invoiceData.dueDate}
                    onChange={(e) => updateInvoiceData('dueDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Billing Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Rekening naar
                    </label>
                    <button
                      onClick={saveCompanyData}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                      title="Sla bedrijfsgegevens op voor hergebruik"
                    >
                      💾 Opslaan
                    </button>
                  </div>
                  <textarea
                    value={invoiceData.billFrom}
                    onChange={(e) => updateInvoiceData('billFrom', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Uw bedrijfsnaam&#10;Adres&#10;Postcode Plaats&#10;BTW nummer"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={loadSavedCompanyData}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                    >
                      📂 Laden
                    </button>
                    <button
                      onClick={clearSavedData}
                      className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200 transition-colors"
                    >
                      🗑️ Wissen
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Verzenden naar
                  </label>
                  <textarea
                    value={invoiceData.billTo}
                    onChange={(e) => updateInvoiceData('billTo', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Klant naam&#10;Adres&#10;Postcode Plaats"
                  />
                </div>
              </div>

              {/* Items */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Items</h3>
                
                <div className="space-y-3">
                  {invoiceData.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 items-end">
                      <div className="col-span-6">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateItem(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Beschrijving van artikel/dienst..."
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          min="0"
                          step="1"
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) => updateItem(index, 'price', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          min="0"
                          step="0.01"
                          placeholder="0,00"
                        />
                      </div>
                      <div className="col-span-1">
                        <button
                          onClick={() => removeItem(index)}
                          className="w-full px-2 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                          disabled={invoiceData.items.length === 1}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addItem}
                  className="mt-3 text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  + Regelitem
                </button>
              </div>

              {/* Additional Costs */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Korting (%)
                  </label>
                  <input
                    type="number"
                    value={invoiceData.discount}
                    onChange={(e) => updateInvoiceData('discount', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    BTW (%)
                  </label>
                  <input
                    type="number"
                    value={invoiceData.tax}
                    onChange={(e) => updateInvoiceData('tax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Verzendkosten
                  </label>
                  <input
                    type="number"
                    value={invoiceData.shipping}
                    onChange={(e) => updateInvoiceData('shipping', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opmerkingen
                </label>
                <textarea
                  value={invoiceData.notes}
                  onChange={(e) => updateInvoiceData('notes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Algemene voorwaarden - late kosten, betalingsmethoden, leveringsschema"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={generatePDF}
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Downloaden
                </button>
                <button
                  onClick={downloadInvoice}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Opslaan als JSON
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Invoice Preview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Factuur Preview</h2>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Standaard opslaan
                </div>
              </div>

              {/* Invoice Header */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    {logoPreview && (
                      <img 
                        src={logoPreview} 
                        alt="Bedrijfslogo" 
                        className="w-16 h-16 object-contain"
                      />
                    )}
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">FACTUUR</h1>
                      <p className="text-gray-600">
                        {invoiceData.invoiceNumber ? `#${invoiceData.invoiceNumber}` : '#'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Datum: {invoiceData.date || 'Niet ingesteld'}</p>
                    {invoiceData.dueDate && (
                      <p className="text-sm text-gray-600">Vervaldatum: {invoiceData.dueDate}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Billing Info */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Van:</h3>
                  <div className="text-sm text-gray-600 whitespace-pre-line">
                    {invoiceData.billFrom || 'Uw bedrijfsinformatie'}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Naar:</h3>
                  <div className="text-sm text-gray-600 whitespace-pre-line">
                    {invoiceData.billTo || 'Klantinformatie'}
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Item</th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-900">Hoeveelheid</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">Tarief</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">Hoeveelheid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {invoiceData.items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {item.description || 'Beschrijving van artikel/dienst...'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 text-center">
                          {item.quantity || 0}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 text-right">
                          {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {(parseFloat(item.price) || 0).toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right font-medium">
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
                    <span className="text-gray-600">Subtotaal:</span>
                    <span className="text-gray-900">
                      {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {totals.subtotal.toFixed(2)}
                    </span>
                  </div>
                  
                  {invoiceData.discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Korting ({invoiceData.discount}%):</span>
                      <span className="text-red-600">
                        -{invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {totals.discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  
                  {invoiceData.tax > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">BTW ({invoiceData.tax}%):</span>
                      <span className="text-gray-900">
                        {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {totals.taxAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  
                  {invoiceData.shipping > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Verzendkosten:</span>
                      <span className="text-gray-900">
                        {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {parseFloat(invoiceData.shipping).toFixed(2)}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                    <span>Totaal:</span>
                    <span>
                      {invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'USD' ? '$' : '£'} {totals.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {invoiceData.notes && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Opmerkingen:</h4>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{invoiceData.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Over de Factuur Generator</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Waarom deze tool gebruiken?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Volledig gratis en geen registratie vereist
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Automatische berekening van totalen, BTW en kortingen
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Professionele factuur layout
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Download als PDF of JSON
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Ondersteuning voor meerdere valuta
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tips voor professionele facturen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Gebruik duidelijke en gedetailleerde beschrijvingen
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Stel altijd een duidelijke vervaldatum in
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Voeg je BTW-nummer toe voor zakelijke facturen
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Bewaar kopieën van alle verzonden facturen
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    Gebruik consistente factuurnummering
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-[#F7D8FA] text-[#000] rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Hulp nodig met je marketing?</h2>
            <p className="text-xl mb-6 opacity-90">
              Onze marketing specialisten helpen je met het opzetten van geautomatiseerde systemen voor leadgeneratie en klantacquisitie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/work-with-me"
                className="bg-white text-[#8C2891] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Gratis Marketing Audit
              </Link>
              <a 
                href="tel:+31648728828"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8C2891] transition-colors"
              >
                Bel: +31 6 48728828
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
