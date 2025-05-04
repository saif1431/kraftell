import React from 'react'

function QualificationCriteria({data}) {
  return (
      <div>
      <h2 className="text-xl font-semibold mb-4">Seller Qualifications</h2>
      <div className="space-y-4">
        {data.map((criteria) => (
          <div key={criteria.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold">{criteria.requirement}</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                {criteria.appliesTo}
              </span>
            </div>
            <p className="text-primary mb-3">Minimum: {criteria.value}</p>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                Edit
              </button>
              <button className="px-4 py-2 bg-gray-200 text-primary rounded-md hover:bg-gray-300">
                View History
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
        Add New Criteria
      </button>
    </div>
  )
}

export default QualificationCriteria
