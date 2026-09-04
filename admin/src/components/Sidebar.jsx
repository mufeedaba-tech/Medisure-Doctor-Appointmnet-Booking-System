import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {
 
  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)
 
  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul className='text-[#515151] mt-5 '>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 rounded border-primary' :''} `} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className='hover:underline hover:decoration-primary'>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 rounded border-primary' :''} `}  to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hover:underline hover:decoration-primary'>Appointments</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 rounded border-primary' :''} `}  to='/add-doctor'>
            <img src={assets.add_icon} alt="" />
            <p className='hover:underline hover:decoration-primary'>Add Doctor</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 rounded border-primary' :''} `}  to={'/doctor-list'}>
            <img src={assets.people_icon} alt="" />
            <p className='hover:underline hover:decoration-primary'>Doctors List</p>
          </NavLink>

        </ul>

      }
      {
        dToken && <ul className='text-[#515151] mt-5 '>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 rounded border-primary' :''} `} to={'/doctor-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className='hover:underline hover:decoration-primary'>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 rounded border-primary' :''} `}  to={'/doctor-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hover:underline hover:decoration-primary'>Appointments</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 rounded border-primary' :''} `}  to={'/doctor-profile'}>
            <img src={assets.people_icon} alt="" />
            <p className='hover:underline hover:decoration-primary'>Profile</p>
          </NavLink>

        </ul>

      }
      
    </div>
  )
}

export default Sidebar