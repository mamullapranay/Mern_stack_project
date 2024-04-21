import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import Service from './Service'
import Footer from '../../components/Footer'
import Vision from './Vision'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Service/>
      <Vision/>
      <Categories/>

      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home