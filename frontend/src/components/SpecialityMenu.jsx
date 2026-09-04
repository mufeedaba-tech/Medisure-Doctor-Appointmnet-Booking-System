import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 md:mx-18 text-gray-800' id='speciality'>
      <h1 className='text-4xl font-bold'>Our Departments</h1>
      <p className='text-center text-sm'>Care Point Hospital is surely the best private hospital in Bangalore with high-quality services and specialised in Cardiology, Gastroenterology, Neurology and Gynaecology.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5'>
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} className='border bg-primary px-4 md:px-8 py-3 sm:py-6 flex flex-col rounded-lg gap-5 text-[15px] hover:bg-purple-200 hover:text-primary transition-all duration-300 text-white cursor-pointer' key={index} to={`/doctors/${item.speciality}`}>
            <img className='w-16 sm:w-24 mb-2 mx-auto' src={item.image} alt="" />
            <p className='text-center'>{item.speciality}</p>
          </Link>

        ))}
      </div>

    </div>
  )
}

export default SpecialityMenu