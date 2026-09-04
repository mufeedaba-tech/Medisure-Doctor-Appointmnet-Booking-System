import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-purple-700 to-pink-600 py-2 flex items-center">
        <h1 className="text-4xl text-white font-bold ml-8">Contact Us</h1>
      </div>
      <div className='flex flex-col justify-center my-10 md:flex-row mb-28  gap-12'>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.contact_image} alt="" />


        <div className='flex flex-col justify-center items-start gap-6'>
          <b>GET IN TOUCH</b>
          <h1 className='text-3xl text-gray-900 font-semibold'>Contact Us For Further Information !</h1>
          <p className='text-gray-600'>Your complete cure and care are in our hands and we at SRM Global Hospitals Pvt Ltd strive our best to give you world class treatment and a healthier future ahead.</p>
          <p className='text-gray-600'>CarePoint Hospital, 123 Health Avenue, Whitefield, Bangalore, Karnataka - 560066, India.</p>
          <p className='text-gray-600'>+91 6389 547 083<br />medisure@gmail.com</p>
          <p className='font-semibold text-gray-900'> Careers at MediSure</p>
          <p className='text-gray-600'>Learn more about our teams and jobs.</p>
          <button className='border border-black py-3 px-6 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact