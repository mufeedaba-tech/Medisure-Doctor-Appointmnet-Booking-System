import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-purple-700 to-pink-600 py-2 flex items-center">
        <h1 className="text-4xl text-white font-bold ml-8">About Us</h1>
      </div>
      <div className='flex flex-col md:flex-row py-16  gap-12'>
        <div className='flex flex-col justify-center gap-5 sm:w-3/5 ralative text:sm text-gray-900'>
          <b className='text-2xl'>Our Story</b>
          <p className='text-gray-700'>Welcome to the inspiring journey of CarePoint Hospital, a beacon of healthcare excellence, located in the heart of Bangalore. Our unwavering commitment to delivering world-class medical services is reflected in state-of-the-art facilities that meet global standards, ensuring every patient receives the highest quality of care.</p>
          <p className='text-gray-700'>For decades, our team of dedicated and highly skilled doctors has been at the forefront of healthcare innovation, working relentlessly to promote the health and well-being of our community. Designed with healing in mind, our modern facilities create a calming environment where each step toward recovery is accompanied by comfort and care.</p>
          <p className='text-gray-700'>At CarePoint Hospital, we value your time as much as your health. With a streamlined, patient-first system, we ensure your experience is seamless and efficient, allowing you to focus entirely on your wellness journey.</p>
          <p className='text-gray-700'>Our hospital houses seven Centers of Excellence (COEs), each specializing in a variety of medical fields, ensuring top-tier expertise and personalized care. Additionally, our 24/7 super specialty emergency department stands as a fortress of readiness, always prepared to deliver immediate and expert care when needed most.</p>
        </div>
        <img className='w-full rounded-lg md:w-2/5' src={assets.about_img} alt="" />
      </div>
      <div className='flex flex-col md:flex-row  gap-12'>
        <img className='w-full rounded-lg md:w-2/5' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-5 sm:w-3/5 ralative text:sm text-gray-900'>
          <p className='text-gray-700'>Step into the realm of CarePoint Hospital, where over 200 beds stand as silent sentinels of care and compassion, ready to support your journey to better health. With more than 30 specialties under our umbrella, we offer a comprehensive array of healthcare services, ensuring that every need, big or small, is met with expertise and dedication.From the moment you step through our doors, a story of exceptional care and healing begins to unfold</p>
          <p className='text-gray-700'>CarePoint Hospital has been built on years of tireless dedication, guided by a passion for nurturing lives and promoting wellness.We invite you to become a part of this story—one where every chapter is filled with healing, hope, and the promise of a healthier tomorrow. Here, your health is our priority, and we are committed to walking alongside you every step of the way.</p>

        </div>
      </div>

      <h1 className='py-7 text-2xl font-semibold'>Know Our Leader</h1>
      <div className='flex flex-col md:flex-row  gap-12'>
        <div className='flex flex-col justify-center gap-5 sm:w-3/5 ralative text:sm text-gray-900'>
          <p className='text-gray-700'>At the forefront of CarePoint Hospital stands Dr. P. Sathyanarayanan, a trailblazing leader and visionary whose expertise bridges multiple domains, including healthcare, academics, technology, and consulting. His dynamic leadership has shaped institutions of global repute, driven by his passion for innovation and excellence. With a robust academic foundation—a Bachelor's in Engineering from Anna University, Chennai, a Master of Science from Northeastern University, USA, and a doctorate from Southern Cross University, Sydney—Dr. Sathyanarayanan has continually pushed the boundaries of possibility.</p>
          <p className='text-gray-700'>Under his stewardship, CarePoint Hospital has flourished into a hub of advanced medical care, embodying a commitment to compassionate service and cutting-edge innovation. Dr. Sathyanarayanan’s dedication to fostering a patient-first approach has ensured that CarePoint Hospital remains a symbol of trust, quality, and hope in the healthcare sector. His vision continues to inspire the institution to deliver world-class care while nurturing a healthier future for all.</p>

        </div>
        <img className='w-full rounded-lg md:w-2/5' src={assets.leader} alt="" />
      </div>
      <div className='flex flex-col md:flex-row gap-6 py-16'>
        <div className='border px-5 md:px-10 py-4 sm:py-8 flex flex-col gap-5 rounded-lg text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer'>
          <b className='text-2xl text-center'>Vision</b>
          <p>To become a globally reputed hospital delivering high-quality patient centric healthcare services for the well-being of humanity.</p>
        </div>
        <div className='border px-5 md:px-10 py-4 sm:py-8 flex flex-col gap-5 rounded-lg text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer'>
          <b className='text-2xl text-center'>Mission</b>
          <p>To deliver patient-friendly servicesof global standards to each patient in an ethical, timely, and cost appropriate manner.</p>
        </div>
      </div>

      <div className='text-center'>
        <h1 className='text-3xl font-medium'>Core Values</h1>
        <p className='py-6 text-gray-700'>Our timeless principles and deeply rooted ideals have always been the foundation of our journey, providing unwavering guidance in everything we do. With a proud legacy in the healthcare sector spanning over three decades, we have remained steadfast in upholding these values while dedicatedly serving the community.</p>
      </div>
      <div className='grid grid-cols-3 gap-3 py-10 text-primary text-center'>
        <div className='border border-purple-400 px-2 md:px-4 py-4 sm:py-8 flex flex-col gap-5 rounded-lg text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer'>
          <b className='text-2xl'>Value driven patient care</b>
          <p>We are committed to delivering the most effective care to patients through high-quality service that is accessible.</p>
        </div>
        <div className='border border-purple-400 px-2 md:px-4 py-4 sm:py-8 flex flex-col gap-5 rounded-lg text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer'>
          <b className='text-2xl'>Empathy</b>
          <p>At our practice, we approach every patient with empathy, maintain an open and optimistic mindset, and deliver comprehensive carethat is unparallel in quality and compassion.</p>
        </div>
        <div className='border border-purple-400 px-2 md:px-4 py-4 sm:py-8 flex flex-col gap-5 rounded-lg text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer'>
          <b className='text-2xl'>Engagement & Satisfaction</b>
          <p>Our team provided expert service with a personal touch, ensuring that every interaction with our patient is warm, positive, and exceeds their expectation for satisfaction.</p>
        </div>
        <div className='border border-purple-400 px-2 md:px-4 py-4 sm:py-8 flex flex-col gap-5 rounded-lg text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer'>
          <b className='text-2xl text-center'>Transparency & Accountability</b>
          <p>We are committed to fostering open and transparent communication with our patients and their families. We take pride in fully educating them abou their treatment option and obtaining their informed consent  before proceeding</p>
        </div>
        <div className='border border-purple-400 px-2 md:px-4 py-4 sm:py-8 flex flex-col gap-5 rounded-lg text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer'>
          <b className='text-2xl text-center'>Privacya & Integrity</b>
          <p>CarePoint Hospital  promises tpo maintain complete confidentiality over patient information and health records under all circumtances.</p>
        </div>
        <div className='border border-purple-400 px-2 md:px-4 py-4 sm:py-8 flex flex-col gap-5 rounded-lg text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer'>
          <b className='text-2xl text-center'>Community well-being</b>
          <p>Our comprehensive services are desighned to promotethe health and welfare of society as a whole, while providing exceptional care to those in need.</p>
        </div>
      </div>


      <div className='min-h-[75vh] flex  md:mx-18 bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${assets.about})`, }}>

        <div className='gap-5 p-20 sm:w-2/3 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-semibold mb-4'>WHY CAREPOINT HOSPITAL?</h1>
          <p >At CarePoint hospital, our foundation rests upon enduring values and core beliefs that have shaped our identity. With a reputable presence in the healthcare sector for over three decades, we remain steadfast in upholding these principles, differentiating us as premier healthcare providers in the city.</p>
          <p>With world-class infrastructure and cutting-edge facilities, we deliver unparalleled expert services tailored to the unique needs of our patients at an affordable cost along with holistic and empathetic care. Our unwavering dedication aims to not only improve the health and well-being of our patients but also enhance their overall quality of life.</p>
        </div>
      </div>


    </div>

  )
}

export default About