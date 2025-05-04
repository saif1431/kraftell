import React from 'react'

function ComissionsRate({data}) {
  return (
      <div>
      <h2 className="text-xl font-semibold mb-4">Commission Structure</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Threshold</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((rate) => (
              <tr key={rate.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rate.tier}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.rate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.threshold}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
        Add New Tier
      </button>
    </div>
  )
}

export default ComissionsRate
