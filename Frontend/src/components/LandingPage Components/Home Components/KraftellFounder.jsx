import React from 'react'
import { SiComma } from "react-icons/si";
function KraftellFounder() {
  return (
    <div className='bg-primary  py-10'>
       <div className='text-center leading-tight lg:px-14 px-6 py-14'>
        <div className='flex justify-center items-center mb-4'>  
          <SiComma className='rotate-180 text-4xl text-gray-300'/>
          <SiComma className='rotate-180 text-4xl text-gray-300'/>
        </div>
            <h1 className='lg:text-2xl text-2xl font-bold'>Kraftell helped us plan smarter and saved 2 weeks in turnaround.</h1>
            <p className='mt-4 max-w-4xl mx-auto leading-relaxed text-primary'>
              <span className='text-black font-bold mx-2'>Antje Krause</span>
              Co-Founder, AYOKA Keramik, Berlins
            </p>
      </div>
    </div>
  )
}

export default KraftellFounder