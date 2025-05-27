import React from "react";
import { FaBuilding } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

 function ManufacturerCards() {
  const steps = [
    {
      title: "Step 1: Create a Manufacturer Profile",
      icon: <FaBuilding className=" text-white" />,
      description: "Highlight your capabilities, industries served, and preferred production methods.",
    },
    {
      title: "Step 2: Get Discovered by Buyers",
      icon: <IoSearch className=" text-white" />,
      description: "Receive inquiries from verified buyers seeking reliable production partners.",
    },
    {
      title: "Step 3: Review Requests and Share Prototypes",
      icon: <FaBook className=" text-white" />,
      description: "Engage with buyers, review design files, and submit prototype previews for feedback.",
    },
    {
      title: "Step 4: Secure Payments with Escrow",
      icon: <FaLock className=" text-white" />,
      description: "Track milestones and get paid securely—no risks, no surprises.",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Getting Started as a Manufacturer</h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex items-start space-x-4 shadow-sm">
      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
        <span className="text-white font-semibold text-lg p-1">{step.icon}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
        ))}
      </div>
    </div>
  )
}

export default ManufacturerCards
