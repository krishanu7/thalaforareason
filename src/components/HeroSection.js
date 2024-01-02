import React from 'react'

const HeroSection = () => {
  return (
    <div className=' bg-teal-500 text-white mt-6 w-[60%] h-[60%] flex flex-col justify-center items-center border-2 border-teal-600 rounded-xl shadow shadow-black text-xl font-sans'>
      <h1 className='text-2xl font-semibold'>Let's check if you are a Thala fan</h1>
      <hr className='text-black' />
      <div className='gap-3 flex flex-row'>
        <input></input>
      </div>
    </div>
  )
}

export default HeroSection
