import React from 'react'
import Image from '/AboutImg2.jpg'
import { FaLayerGroup } from "react-icons/fa";
import { SiCircleci } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";


function AboutUsSection3() {
  return (
    <div className='bg-[#E5E7EB] lg:px-38 px-6 py-14 space-y-8 lg:space-y-24'>
         <div className='  flex items-center justify-between flex-col md:flex-row gap-12'>
                  <div className='space-y-4 lg:w-1/2 w-full'>
                        <h4 className='lg:text-3xl text-2xl font-bold'>AI-Powered Manufacturing  Without Compromise</h4>
                     <p>Our platform isn't just a production tool — it's a full-spectrum partner. Kraftell leverages predictive AI to optimize forecasting, resource allocation, and risk management. The result? Fewer delays, less waste, and faster delivery of exceptional products.</p>
                        <div className='flex items-center gap-14 flex-wrap  pt-6'>
                              <div className='flex items-center gap-2 flex-col'>
                                    <FaLayerGroup className='bg-[#3977ED] text-white w-12 h-12 p-3 rounded-full' />
                                    <span className='text-sm font-medium'>Predictive AI</span>
                              </div>
                              <div className='flex items-center gap-2 flex-col'>
                                    <SiCircleci className='bg-[#3977ED] text-white w-12 h-12 p-3 rounded-full' />
                                    <span className='text-sm font-medium text-center'>Resource  <br />Optimization</span>
                              </div>
                              <div className='flex items-center gap-2 flex-col'>
                                    <FaLightbulb className='bg-[#3977ED] text-white w-12 h-12 p-3 rounded-full' />
                                    <span className='text-sm font-medium'>Quality Assurance</span>
                              </div>
                        </div>
                        
                  
                  </div>
                  <div className='lg:w-1/2 w-full flex items-end justify-end'>
                        <img className='rounded-lg lg:w-[90%] w-full' src={Image} alt="" />
                  </div>                  
            </div>
    </div>
  )
}

export default AboutUsSection3
 
