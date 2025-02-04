import React from 'react'
import TopSection from '../Components/TopSection'
import MidSection from '../Components/MidSection'
import Inventory from '../Components/Inventory'

const Dashboard = () => {
  return (
    <>
    
      <div className='space-y-4'>
        <TopSection/>
        <div className='md:flex md:gap-x-6 lg:gap-x-10'>
          <MidSection className="mt-4 md:mb-0"/> 
          <Inventory/>
        </div>
      </div>
      
    </>
  )
}

export default Dashboard
