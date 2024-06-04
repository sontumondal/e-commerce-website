import React from 'react'
import ImagesSlider from './ImagesSlider'
import About from '../../../About/About'
import Services from '../../../Services/Services'
import Contact from '../../../Contact/Contact'
import FeatureImage from './FeatureImage'


const Home = () => {
  return (
    <>
  <ImagesSlider/>
    <About/>
    <FeatureImage/>
    <Services/>
    <Contact/>
    </>
  )
}

export default Home
