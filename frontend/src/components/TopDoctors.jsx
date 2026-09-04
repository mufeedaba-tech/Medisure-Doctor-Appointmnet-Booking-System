import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)



  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-18'>
      <h1 className='text-5xl font-semibold'>Meet Our Top Doctors</h1>
      <p className=' text-center text-medium'>Many Leading Doctors,surgons and Specialists Practice and Consult with Us.</p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-y gap-y-6 px-3 sm:px-0'>

        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-purple-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 hover:border-primary' key={index}>
            <img className='bg-purple-200' src={item.image} alt="" />
            <div className='p-4'>
              <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-primary text-white px-10 py-2 squared-full rounded-lg mt-10 transform transition-transform duration-200 hover:scale-110'>More</button>
    </div>

  )
}

export default TopDoctors