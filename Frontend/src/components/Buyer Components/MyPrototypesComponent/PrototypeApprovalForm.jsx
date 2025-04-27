import React from 'react'

function PrototypeApprovalForm() {
  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-semibold'>Prototype Approval Form</h1>
      <p className='text-primary text-lg mt-4'>Review and approve prototype details</p>
      <hr className='mt-8 border-gray-300' />

      {/* Preview Render----------- */}
      <div className=''>
            <h1 className='text-2xl font-semibold'>Preview Render</h1>
            <div className='mt-4 bg-white w-full h-[500px] rounded-lg flex items-center justify-center text-primary'>
                  product prototype Render
            </div>
      </div>

      {/* Manufacturer Notes-------------- */}
      <div className='px-6 py-10 bg-white rounded-lg'>
            <h1 className='text-2xl font-semibold'>Manufacturer Notes</h1>
            <p className='mt-4 text-primary text-lg'>Material specifications have been updated according to the latest requirements. Surface finish matches the requested matte texture. All dimensions are within specified tolerances.</p>
      </div>
    </div>
  )
}

export default PrototypeApprovalForm
