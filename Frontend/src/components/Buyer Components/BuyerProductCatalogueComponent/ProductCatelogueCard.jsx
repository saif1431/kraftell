import { useState } from "react"
import { NavLink } from "react-router-dom"

function ProductCatelogueCard({ product, onEdit, onDelete, onSelect }) {
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
          <NavLink to='/RequestQuoteForm'
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 text-center rounded-md text-md font-medium transition-colors"
          >
            Request Quotation
          </NavLink>
          <button

            className="flex-1 border border-blue-500 text-blue-500 hover:bg-blue-50 py-3 px-4 rounded-md text-md font-medium transition-colors"
          >
          Request Prototype
          </button>
        </div>
      </div>


    </div>
  )
}
export default ProductCatelogueCard
