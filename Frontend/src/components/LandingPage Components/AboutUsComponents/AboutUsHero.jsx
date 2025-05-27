import React from 'react'
import AboutImg from '/AboutImg1.png'
import { NavLink } from 'react-router-dom'

function AboutUsHero() {
  return (
    <div className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${AboutImg})` }}>
      <div className='flex flex-col justify-center items-center h-full px-2'>
        <h1 className='max-w-5xl lg:text-6xl text-3xl text-center  text-white font-bold mb-4 leading-tight'>Kraftell is Shaping the Future of Premium Manufacturing</h1>
        
      </div>
      
    </div>
  )
}

export default AboutUsHero

