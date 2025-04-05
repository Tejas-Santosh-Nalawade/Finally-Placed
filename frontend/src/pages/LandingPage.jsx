import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import FeaturesGrid from './Feature'

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <FeaturesGrid />
    </>
  )
}

export default LandingPage