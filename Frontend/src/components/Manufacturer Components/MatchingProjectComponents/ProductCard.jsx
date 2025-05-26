"use client"

import { useState } from "react"

export default function ProductCard({ product, onEdit, onDelete, onSelect }) {
  const [showDeletePopup, setShowDeletePopup] = useState(false)

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    setShowDeletePopup(true)
  }

  const confirmDelete = () => {
    onDelete(product.id)
    setShowDeletePopup(false)
  }

  const cancelDelete = () => {
    setShowDeletePopup(false)
  }

  return (
    <div
      className={`bg-white rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
        product.isSelected ? "border-gray-200 shadow-lg" : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => onSelect(product.id)}
    >
      {/* Placeholder Image */}
      <div className="w-full h-56 bg-gray-400 rounded-md flex items-center justify-center mb-4">
        <span className="text-gray-800 text-lg font-medium">300 × 200</span>
      </div>

      {/* Product Content */}
      <div className="p-4">
        <h3 className="font-semibold mb-3 text-lg">{product.title}</h3>

        {/* Product Details Headers */}
        <div className="flex justify-between text-md text-primary mb-1">
          <span>RFQ ID</span>
          <span>Category / Industry</span>
          <span>Posted Date</span>
        </div>

        {/* Product Details Values */}
        <div className="flex justify-between text-sm text-black font-semibold mb-4">
          <span className="font-medium">{product.rfqId}</span>
          <span>{product.category}</span>
          <span>{product.postedDate}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onEdit(product.id)
            }}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md text-md font-medium transition-colors"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            className="flex-1 border border-blue-500 text-blue-500 hover:bg-blue-50 py-3 px-4 rounded-md text-md font-medium transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">Are you sure you want to delete this product?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}