import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Introduction = () => {
  const navigate = useNavigate()
  return (

    <div className='md-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full rounded-lg md:max-w-[360px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text:sm text-gray-600'>
        <p className='text-2xl font-semibold text-gray-600'>CarePoint Hospital has been a trailblazer in delivering comprehensive and patient-centric healthcare services.</p>
        <p>We take great pride in providing our valued patients with a personalised service and the highest standards of clinical excellence. Whatever your medical condition, our aim is to ensure you receive the highest quality of patient care and first-class private treatment. We have a special focus in the areas of Dermetology, Gynaecology, Cardiology, and Neurology.
          You will find everything you need at our hospital, from comfortable surroundings and stateof-the-art equipment, to highly experienced staff and outstanding medical care.</p>
        <div className='flex '>
          <button onClick={() => { navigate('/about'); scrollTo(0, 0) }} className='bg-primary text-white px-12 py-3 squared-full rounded-lg mt-10 transform transition-transform duration-200 hover:scale-110'>Know More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Introduction