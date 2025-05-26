"use client"

import { useState, useMemo } from "react"
import { RxEyeOpen } from "react-icons/rx";
import { LuMessageCircleMore } from "react-icons/lu";
import { PiDownloadFill } from "react-icons/pi";

// Extended mock data for multiple pages
const allPayments = [
  // Page 1 data
  {
    id: "CN-2024-001",
    clientName: "TechCorp Industries",
    projectName: "Sarah Chen",
    amount: 850,
    status: "active",
    paymentMethod: "Stripe",
    transactionDate: "15 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-002",
    clientName: "InnovateDesign GmbH",
    projectName: "Marcus Weber",
    amount: 50,
    status: "pending",
    paymentMethod: "PayPal",
    transactionDate: "14 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-003",
    clientName: "AutoParts Ltd",
    projectName: "James Wilson",
    amount: 850,
    status: "completed",
    paymentMethod: "Bank Transfer",
    transactionDate: "13 Jan 2024",
    adminCommission: "10%",
    icon: <RxEyeOpen />,
  },
  {
    id: "CN-2024-004",
    clientName: "ConsumerTech SA",
    projectName: "Elena Rodriguez",
    amount: 850,
    status: "active",
    paymentMethod: "Stripe",
    transactionDate: "12 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-005",
    clientName: "MetalWorks Inc",
    projectName: "Michael Chang",
    amount: 850,
    status: "pending",
    paymentMethod: "PayPal",
    transactionDate: "11 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-006",
    clientName: "DigitalSoft Corp",
    projectName: "Anna Thompson",
    amount: 1200,
    status: "completed",
    paymentMethod: "Stripe",
    transactionDate: "10 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-007",
    clientName: "BuildTech Solutions",
    projectName: "Robert Kim",
    amount: 750,
    status: "active",
    paymentMethod: "Bank Transfer",
    transactionDate: "09 Jan 2024",
    adminCommission: "10%",
  },
  // Page 2 data
  {
    id: "CN-2024-008",
    clientName: "GreenEnergy Ltd",
    projectName: "Lisa Park",
    amount: 950,
    status: "pending",
    paymentMethod: "PayPal",
    transactionDate: "08 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-009",
    clientName: "SmartHome Inc",
    projectName: "David Lee",
    amount: 1100,
    status: "completed",
    paymentMethod: "Stripe",
    transactionDate: "07 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-010",
    clientName: "FoodTech Innovations",
    projectName: "Maria Garcia",
    amount: 650,
    status: "active",
    paymentMethod: "Bank Transfer",
    transactionDate: "06 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-011",
    clientName: "HealthCare Systems",
    projectName: "John Smith",
    amount: 1300,
    status: "pending",
    paymentMethod: "PayPal",
    transactionDate: "05 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-012",
    clientName: "EduTech Platform",
    projectName: "Sophie Brown",
    amount: 800,
    status: "completed",
    paymentMethod: "Stripe",
    transactionDate: "04 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-013",
    clientName: "RetailMax Corp",
    projectName: "Alex Johnson",
    amount: 900,
    status: "active",
    paymentMethod: "Bank Transfer",
    transactionDate: "03 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-014",
    clientName: "CloudServices Ltd",
    projectName: "Emma Wilson",
    amount: 1050,
    status: "pending",
    paymentMethod: "PayPal",
    transactionDate: "02 Jan 2024",
    adminCommission: "10%",
  },
  // Additional data for more pages...
  {
    id: "CN-2024-015",
    clientName: "SportsTech Inc",
    projectName: "Mike Davis",
    amount: 750,
    status: "completed",
    paymentMethod: "Stripe",
    transactionDate: "01 Jan 2024",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-016",
    clientName: "TravelApp Solutions",
    projectName: "Rachel Green",
    amount: 850,
    status: "active",
    paymentMethod: "Bank Transfer",
    transactionDate: "31 Dec 2023",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-017",
    clientName: "FinanceFlow Corp",
    projectName: "Tom Anderson",
    amount: 1150,
    status: "pending",
    paymentMethod: "PayPal",
    transactionDate: "30 Dec 2023",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-018",
    clientName: "MediaStream Ltd",
    projectName: "Kate Miller",
    amount: 950,
    status: "completed",
    paymentMethod: "Stripe",
    transactionDate: "29 Dec 2023",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-019",
    clientName: "GameDev Studios",
    projectName: "Chris Taylor",
    amount: 1250,
    status: "active",
    paymentMethod: "Bank Transfer",
    transactionDate: "28 Dec 2023",
    adminCommission: "10%",
  },
  {
    id: "CN-2024-020",
    clientName: "IoT Solutions Inc",
    projectName: "Amy White",
    amount: 700,
    status: "pending",
    paymentMethod: "PayPal",
    transactionDate: "27 Dec 2023",
    adminCommission: "10%",
  },
]

export default function PaymentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7 // Number of items to show per page
  const totalPages = Math.ceil(allPayments.length / itemsPerPage)

  // Calculate current page data
  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return allPayments.slice(startIndex, endIndex)
  }, [currentPage, itemsPerPage])

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: "bg-blue-100 text-blue-800 border-blue-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      completed: "bg-green-100 text-green-800 border-green-200",
    }

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium border ${
          statusStyles[status] || "bg-gray-100 text-gray-800 border-gray-200"
        }`}
      >
        {status}
      </span>
    )
  }

  const handleAction = (action, paymentId) => {
    console.log(`${action} action for payment:`, paymentId)
    alert(`${action} action for payment: ${paymentId}`)
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      console.log("Changed to page:", page)
      console.log(
        "Showing items:",
        (page - 1) * itemsPerPage + 1,
        "to",
        Math.min(page * itemsPerPage, allPayments.length),
      )
    }
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Show first page
      pages.push(1)

      if (currentPage > 3) {
        pages.push("...")
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i)
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...")
      }

      // Show last page
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Info */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-700">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, allPayments.length)}{" "}
            of {allPayments.length} payments
          </p>
          <p className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project / RFQ Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin Commission
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentPageData.map((payment, index) => (
              <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.clientName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.projectName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(payment.status)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.paymentMethod}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.transactionDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                  {payment.adminCommission}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAction("View", payment.id)}
                      className=" rounded-full bg-[#F2E5FF] hover:bg-purple-600 p-1 transition-colors"
                      title="View"
                    >
                      <RxEyeOpen className="w-6 h-6 text-purple-500" />
                    </button>
                    <button
                      onClick={() => handleAction("Edit", payment.id)}
                      className="p-1 rounded-full bg-[#22C55E33] hover:bg-green-600 transition-colors"
                      title="Edit"
                    >
                        <LuMessageCircleMore className="w-6 h-6 text-green-500" />
                    </button>
                    <button
                      onClick={() => handleAction("Delete", payment.id)}
                      className="p-1 rounded-full bg-[#FFEFD2] transition-colors"
                      title="Delete"
                    >
                        <PiDownloadFill className="w-6 h-6 text-[#FDB022]" />

                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-center">
          <nav className="flex items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              <div key={index}>
                {page === "..." ? (
                  <span className="px-3 py-2 text-gray-500">...</span>
                ) : (
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                )}
              </div>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}



