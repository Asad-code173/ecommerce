import React from 'react'
import asad from "../../assets/asad.jpg"
import { FaRegBell } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <div className='bg-gray-100 flex fixed top-0 shadow-md sticky justify-end items-center border-b h-12 border-black border-opacity-35'>
        <div className='flex space-x-2 p-2'>
          <input type="text" placeholder = "Search" className = "bg-gray-100 mr-96"/>
          <FaRegBell className='w-6 h-6 mt-1 ' />
          <img src={asad} alt="" className='w-8 h-8 rounded-full  ' />
        </div>
      </div>
    </>

  )
}

export default Header