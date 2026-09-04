import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctor = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality]
  )

  return (
    <div>
      <div className="w-full bg-gradient-to-r from-purple-700 to-pink-600 py-2 flex items-center">
        <h1 className="text-4xl text-white font-bold ml-8">Our Doctors</h1>
      </div>
      <p className='text-gray-600 py-4 font-semibold'>Explore Doctors by Specialty.</p>
      <p className='text-gray-600 text-sm'>World-class infrastructure and cutting-edge facilities, we deliver unparalleled expert services tailored to the unique needs of our patients at an affordable cost along with holistic and empathetic care.</p>
      <div className=' items-start gap-5 mt-5'>
        <div className='w-full grid grid-cols-3 py-4 gap-4  text-gray-600'>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "General physician" ? "bg-purple-100 text-black" : ""}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "Gynecologist" ? "bg-purple-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "Dermatologist" ? "bg-purple-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "Pediatricians" ? "bg-purple-100 text-black" : ""}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "Neurologist" ? "bg-purple-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "Gastroenterologist" ? "bg-purple-100 text-black" : ""}`}>Gastroenterologist</p>
          <p onClick={() => speciality === 'Cardiologist' ? navigate('/doctors') : navigate('/doctors/Cardiologist')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "Cardiologist" ? "bg-purple-100 text-black" : ""}`}>Cardiologist</p>
          <p onClick={() => speciality === 'Urologist' ? navigate('/doctors') : navigate('/doctors/Urologist')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "Urologist" ? "bg-purple-100 text-black" : ""}`}>Urologist</p>
          <p onClick={() => speciality === 'Psychologist' ? navigate('/doctors') : navigate('/doctors/Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-purple-500 ${speciality === "Psychologist" ? "bg-purple-100 text-black" : ""}`}>Psychologist</p>

        </div>

        <div className='py-12'>
          <h1 className='text-4xl  font-semibold text-primary'>Best Doctors in Bangalore</h1>
          <p className='sm:w-2/3 text-sm'>At CarePoint Hospital in Bangalore, we are proud to have some of the best doctors in Bangalore. Our dedicated team is passionate about delivering top-notch healthcare services. Each member of our medical staff is highly qualified and brings a wealth of experience from various specialties. This allows us to offer personalized and comprehensive care tailored to each patient’s unique needs.</p>
        </div>

        <div className='w-full grid grid-cols-auto py-6 gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 hover:border-purple-600' key={index}>
                <img className='bg-purple-200' src={item.image} alt="" />
                <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))

          }
        </div>
      </div>
    </div>
  )
}

export default Doctor