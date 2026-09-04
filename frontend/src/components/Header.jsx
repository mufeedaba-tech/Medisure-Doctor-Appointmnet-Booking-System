import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (

    <div className='min-h-[50vh] flex items-center justify-center md:mx-18 bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${assets.header_img})`, }}>
      <div className=' p-20 rounded-lg shadow-lg text-center'>
        <h1 className='text-7xl text-primary font-bold mb-4'>Welcome to MediSure</h1>
        <p className=' text-2xl text-primary font-medium '>
          Your Trusted Partner in Healthcare
        </p><br />
        <div className='flex flex-col md:flex-row  gap-3 text-sm font-light'>
          <img className='w-30' src={assets.group_profiles} alt="" />
          <p>Book appointments with the best doctors at CarePoint Hospital. Providing expert care, compassion, and convenience at your fingertips.

          </p>
        </div><br />
        <div className='flex justify-center'>
          <a href="#speciality" className='flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-white  text-sm md:m-0  hover:scale-105 transition-all duration-300' style={{ maxWidth: "270px" }} >
            Start Your Health Journey Today!<img className='w-4' src={assets.arrow_icon} alt="" />

          </a>
        </div></div></div>

  )
}

export default Header