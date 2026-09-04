import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {

  const {doctors, aToken, getAllDoctors, changeAvailability}  = useContext(AdminContext)

  useEffect(()=> {
    if (aToken) {
      getAllDoctors()
    }
  },[aToken])

  return (
    <div className='m-6 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-xl font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-8 pt-5 gap-y-6'>
        {
        doctors.map((item,index)=>(
          <div className='border border-primary rounded-xl max-w-52 overflow-hidden cursor-pointer group' key={index}>
            <img className='bg-white group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
            <div className='p-4'>
              <p className='text-neutral-800 font-medium '>{item.name}</p>
              <p className='text-zinc-500 text-sm'>{item.speciality}</p>
              <div className='mt-2 flex items-center gap-1 text-sm'>
                <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))
      }
      </div>

    </div>
  )
}

export default DoctorList