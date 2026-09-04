import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-18'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*------ left section------*/}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'> MediSure is a modern healthcare platform designed to streamline doctor appointment bookings and improve accessibility.It provides patients with an easy-to-use interface for scheduling, while helping healthcare providers manage appointments effortlessly.</p>

                </div>
                {/*------ center section------*/}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact us</a></li>
                        <li><a href="/patientcare" className="hover:underline">Patient Care</a></li>
                    </ul>

                </div>
                {/*------ right section------*/}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-3 text-gray-600'>
                        <li>CarePoint Hospital, 123 Health Avenue, Whitefield, Bangalore, Karnataka - 560066, India.</li>
                        <li>+91 6389 547 083</li>
                        <li>medisure@gmail.com</li>
                    </ul>

                </div>

            </div>
            {/*-------copyright text -------*/}
            <div>
                <hr />
                <p className='py-3 text-sm bg-primary text-white text-center'>Copyright © 2025 MediSure - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer