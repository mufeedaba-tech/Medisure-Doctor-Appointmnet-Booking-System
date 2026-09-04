import React from 'react'
import { assets } from '../assets/assets'

const PatientCare = () => {
  return (
    <div>
      {/*-------- patient care------- */}
      <div className="w-full bg-gradient-to-r from-purple-700 to-pink-600 py-2 flex items-center">
        <h1 className="text-4xl text-white font-bold ml-8">Patient Care</h1>
      </div>
      <h2 className='text-3xl font-bold text-gray-900 mt-20'>Patient Care</h2>
      <div className='flex flex-col md:flex-row py-6 gap-6'>
        <div className='flex flex-col justify-center gap-5 sm:w-2/3 text:sm text-gray-800 '>

          <p>Discover exceptional care at SRM Global Hospitals Pvt Ltd, where we specialize in treating patients with complex or rare conditions. Our reputation as the preferred choice for patients around the globe stems from our team of highly qualified and specialized experts, renowned for their skills and experience. Your well-being is our top priority.</p>
          <p>Experience utmost comfort at SRM Global Hospitals Pvt Ltd as we deliver compassionate care. With a focus on smooth and seamless procedures, we ensure that every aspect of your journey is effortless. Going above and beyond, our well-appointed interiors cater to the specific needs of patients, enabling us to deliver advanced and personalized treatment. Our commitment to cleanliness and maintenance ensures a hygienic and pleasant stay.</p>
        </div>
        <img className=' w-full sm:w-1/3 relative' src={assets.patient_care} alt="" />
      </div>



      <div className="bg-white py-10 ">
        {/* Patient Rooms Section */}
        <div className='md:flex items-center shadow-lg gap-8  border-l-4 p-10 border-purple-600'>
          <div className='md:w-2/3'>
            <h2 className='text-3xl font-bold text-purple-900'>Patient Rooms</h2>
            <p className='text-gray-600 mt-4'>Feel the comfort at CarePoint Hospital as you receive the most compassionate care. Rooms are well designed to accommodate the patient and their family in a comfortable environment. </p>
            <p className='text-gray-600 mt-4'> Our hospital ensures a smooth and easy flow of procedures, providing the best experiences for patients and their families. Interiors meet patient requirements with advanced treatment facilities.</p>
          </div>
          <div className='md:w-1/3'>
            <img className='rounded-lg shadow-md w-full' src={assets.patient_room} alt="" />
          </div>
        </div>

        {/* Operation Rooms Section */}
        <div className='md:flex items-center gap-8  shadow-lg border-r-4 p-10 border-purple-600'>
          <div className='md:w-1/3'>
            <img className='rounded-lg shadow-md w-full' src={assets.operation_room} alt="" />
          </div>
          <div className='md:w-2/3'>
            <h2 className='text-3xl font-bold text-purple-900'>Operation Rooms</h2>
            <p className='text-gray-600 mt-4'>Our operation rooms are designed and well-crafted by professionals specialized in hospital ambiance. The tranquil atmosphere not only soothes patients but also enhances functionality.</p>
            <p className='text-gray-600 mt-4'> Equipped with the latest technology, our operation rooms meet the highest standards, providing a safe and efficient environment for surgical procedures. </p>
          </div>
        </div>


        {/* post discharge Section */}
        <div className='md:flex items-center gap-8  shadow-lg border-l-4 p-10 border-purple-600'>
          <div className='md:w-2/3'>
            <h2 className='text-3xl font-bold text-purple-900'>Post Discharge</h2>
            <p className='text-gray-600 mt-4'>After the discharge, a medication chart will be provided in order to check your health and to avoid post-operative complications.</p>
            <p className='text-gray-600 mt-4'> Our helpline staff would reach out to you the next day to check on your well-being. We might give a visit to your home the next day after the surgery for dressing the wound and to ensure the general health. </p>
            <p className='text-gray-600 mt-4'>In case of any unbearable pain or increasing discomfort, you can reach out to us 24x7.</p>
          </div>
          <div className='md:w-1/3'>
            <img className='rounded-lg shadow-md w-full' src={assets.post_discharge} alt="" />
          </div>
        </div>

        {/* know your rights */}

        <div className=' gap-8  shadow-lg border-r-4 p-10 border-purple-600'>

          <h2 className='text-3xl font-bold text-purple-900'>Know Your Rights</h2>
          <div className='space-y-3'>
            <ul className='py-5'>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                To know all forms of information regarding your treatments, surgeons, and healthcare facilities.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Every patient has the right to be treated with respect and care, and to be protected against all forms of ill-treatment.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Have equal access to healthcare and not be discriminated against by race, sex, religion, age, sexuality, or disability.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                To be respectful of every individual’s value and belief.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Confidentiality in maintaining every patient’s details.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Get information on the Hospital’s policies.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Get discharged and refuse care against the advice of medical professionals.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                To be informed regarding any changes in medical treatment methods.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Bring a caretaker of your choice along with you, as per our policies.
              </li>
            </ul>
          </div>
        </div>

        {/* know your responsibilities */}

        <div className=' gap-8  shadow-lg border-l-4 p-10 border-purple-600'>

          <h2 className='text-3xl font-bold text-purple-900'>Know Your Responsibilities</h2>
          <div className='space-y-3'>
            <ul className='py-5'>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Respect and report on time for your appointment.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Treat every hospital staff with respect and prevent abuse of any form
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Co-operate during treatment and get maximum benefit.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Provide necessary information to the physician.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Express your criticism positively and fill out the feedback forms
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Take care of hospital belongings as your own and help us to maintain them.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Read all the terms and policies of our hospital.
              </li>
              <li className="flex items-start gap-2 before:content-['✔'] before:text-purple-600 before:text-lg">
                Remit your bills using the accepted methods of payment.
              </li>
            </ul>
          </div>
        </div>



      </div>

    </div>
  )
}

export default PatientCare