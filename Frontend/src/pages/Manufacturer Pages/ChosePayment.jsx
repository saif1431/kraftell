"use client"

import { useState } from "react"

export default function ChosePayment() {
  const [paymentMethod, setPaymentMethod] = useState("bank-account")
  const [formData, setFormData] = useState({
    bankHolderName: "John",
    ifscCode: "Smith",
    accountNo: "454546465165",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    console.log("Form data:", formData)
    console.log("Payment method:", paymentMethod)
  }

  return (
    <div className=" mx-auto p-6 bg-white">
      <h1 className="text-xl font-semibold mb-6">Payments</h1>

      <div className="space-y-6">
        <div className="bg-primary p-2  rounded-lg">
          <label className="text-sm font-medium mb-3 block">Payment Via:</label>
          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="bank-account"
                name="paymentMethod"
                value="bank-account"
                checked={paymentMethod === "bank-account"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4"
              />
              <label htmlFor="bank-account" className="text-md text-primary font-semibold">
                Bank Account
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="stripe"
                name="paymentMethod"
                value="stripe"
                checked={paymentMethod === "stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-black bg-black"
              />
              <label htmlFor="stripe" className="text-md text-primary font-semibold">
                Stripe
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {paymentMethod === "bank-account" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bankHolderName" className="text-md mb-2 block">
                    Bank Holder Name
                  </label>
                  <input
                    id="bankHolderName"
                    type="text"
                    value={formData.bankHolderName}
                    onChange={(e) => handleInputChange("bankHolderName", e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label htmlFor="ifscCode" className="text-md mb-2 block">
                    IFSC Code
                  </label>
                  <input
                    id="ifscCode"
                    type="text"
                    value={formData.ifscCode}
                    onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label htmlFor="accountNo" className="text-md mb-2 block">
              Stripe ID.
            </label>
            <input
              id="accountNo"
              type="text"
              value={formData.accountNo}
              onChange={(e) => handleInputChange("accountNo", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  )
}