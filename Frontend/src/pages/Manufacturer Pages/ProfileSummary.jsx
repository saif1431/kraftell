import React from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import ManufacturerProfile from '../../components/Buyer Components/ManufacturerProfileComponents/ManufacturerProfileDetail'
import ManufacturingCapabilities from '../../components/Manufacturer Components/ProfileSummary/ManufacturingCapabilities'
import Certificates from '../../components/Manufacturer Components/ProfileSummary/Certificates'
import Portfolio from '../../components/Manufacturer Components/ProfileSummary/Portfolio'
import Footer from '../../components/Reuseable Component/Footer'


function ProfileSummary() {
  return (
    <div className='bg-primary'>
      <ManufacturerNavbar/>
      <div className='flex flex-col gap-6 lg:px-18 px-4 lg:py-14 py-8'>
<ManufacturingCapabilities/>
<Certificates/>
<Portfolio/>
      </div>
      <Footer/>
    </div>
  )
}

export default ProfileSummary
