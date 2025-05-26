"use client"

import { NavLink } from "react-router-dom"

 function BuyerPrototypeCard({ project }) {
  const handleView = (id) => {
    console.log("View project:", id)
    alert(`Viewing project with ID: ${id}`)
  }

  const handleChat = (id) => {
    console.log("Chat for project:", id)
    alert(`Opening chat for project with ID: ${id}`)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Placeholder Image */}
      <div className="w-full h-56 bg-gray-400 flex items-center justify-center">
        <span className="text-gray-400 text-lg font-medium">300 × 200</span>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold mb-3 text-lg">{project.title}</h3>

        {/* Project Details Grid */}
        <div className="space-y-3 mb-4">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-md text-primary mb-1">Request ID</p>
              <p className="text-sm font-medium text-black">{project.requestId}</p>
            </div>
            <div>
              <p className="text-md text-primary mb-1">Client / Buyer Name</p>
              <p className="text-sm font-medium text-black">{project.clientName}</p>
            </div>
            <div>
              <p className="text-md text-primary mb-1">Category</p>
              <p className="text-sm font-medium text-black">{project.category}</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-md text-primary mb-1">Requested Date</p>
              <p className="text-sm font-medium text-black">{project.requestedDate}</p>
            </div>
            <div>
              <p className="text-md text-primary mb-1">Delivery Deadline</p>
              <p className="text-sm font-medium text-black">{project.deliveryDeadline}</p>
            </div>
            <div>
              <p className="text-md text-primary mb-1">Status</p>
              <p className="text-sm font-medium text-black">{project.status}</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-md text-primary mb-1">Quoted / Not Quoted</p>
              <p className="text-sm font-medium text-black">{project.quoted ? "Yes" : "No"}</p>
            </div>
            <div>
              <p className="text-md text-primary mb-1">Payment Status</p>
              <p className="text-sm font-medium text-black">{project.paymentStatus}</p>
            </div>
            <div></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
            <NavLink to='/BuyerApprovalForm'>
          <button
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
          >
            View Detail
          </button>
          </NavLink>
          <NavLink to='/ProductRequestForm'>
          <button
            className="flex-1 border border-gray-300 text-blue-500 hover:bg-gray-50 py-2 px-4 rounded-md text-sm font-medium transition-colors"
          >
            Send Product Request
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default BuyerPrototypeCard
