import React from 'react'
import Introduction from '../components/Introduction'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <div>
    <Header/>
    <div className='h-20'></div>
    <Introduction/>
    <SpecialityMenu/>
    <TopDoctors/>
    <Banner/>
    </div>
  )
}

export default Home