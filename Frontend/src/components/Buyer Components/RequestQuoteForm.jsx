"use client"

import { useState, useRef } from "react"
import { Calendar, Upload, User, X } from "lucide-react"

export default function RequestQuoteForm() {
  const [formData, setFormData] = useState({
    productService: "",
    quantity: "",
    deliveryLocation: "",
    timeline: "",
    comments: "",
  })
  const [files, setFiles] = useState([])
  const fileInputRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formDataWithFiles = {
      ...formData,
      attachments: files
    }
    console.log("Form submitted:", formDataWithFiles)
  }

  const handleCancel = () => {
    setFormData({
      productService: "",
      quantity: "",
      deliveryLocation: "",
      timeline: "",
      comments: "",
    })
    setFiles([])
  }

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files)
    setFiles(prev => [...prev, ...newFiles])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const newFiles = Array.from(e.dataTransfer.files)
    setFiles(prev => [...prev, ...newFiles])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Request for Quotation</h1>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <div className="font-medium text-gray-900">John Smith</div>
            <div className="text-sm text-gray-500">john.smith@example.com</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product/Service Field */}
          <div>
            <label htmlFor="productService" className="text-sm font-medium text-gray-700">
              Product/Service*
            </label>
            <input
              id="productService"
              name="productService"
              type="text"
              value={formData.productService}
              onChange={handleInputChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Quantity Field */}
          <div>
            <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
              Quantity*
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              value={formData.quantity}
              onChange={handleInputChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Delivery Location Field */}
          <div>
            <label htmlFor="deliveryLocation" className="text-sm font-medium text-gray-700">
              Delivery Location*
            </label>
            <input
              id="deliveryLocation"
              name="deliveryLocation"
              type="text"
              value={formData.deliveryLocation}
              onChange={handleInputChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Timeline Field */}
          <div>
            <label htmlFor="timeline" className="text-sm font-medium text-gray-700">
              Timeline*
            </label>
            <div className="relative mt-1">
              <input
                id="timeline"
                name="timeline"
                type="date"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholder="mm/dd/yyyy"
                required
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Attachment Field */}
          <div>
            <label className="text-sm font-medium text-gray-700">Attachment</label>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              className="hidden"
            />
            <div 
              className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
              onClick={triggerFileInput}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Drag and drop files here or click to browse</p>
            </div>
            
            {/* Display selected files */}
            {files.length > 0 && (
              <div className="mt-2 space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700 truncate max-w-xs">{file.name}</span>
                    <button 
                      type="button" 
                      onClick={() => removeFile(index)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Comments Field */}
          <div>
            <label htmlFor="comments" className="text-sm font-medium text-gray-700">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button 
              type="button" 
              onClick={handleCancel} 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit RFQ
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}