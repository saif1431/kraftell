import React from 'react'
import MemberShipHero from '../../components/LandingPage Components/MemberShip Component/MemberShipHero'
import KraftellFor from '../../components/LandingPage Components/MemberShip Component/KraftellFor'
import MembershipCard from '../../components/LandingPage Components/MemberShip Component/MembershipCard'
import KraftellStartUp from '../../components/LandingPage Components/MemberShip Component/KraftellStartUp'

function MemberShip() {
  return (
    <div>
      <MemberShipHero/>
      <KraftellFor/>
      <MembershipCard/>
      <KraftellStartUp/>
    </div>
  )
}

export default MemberShip
