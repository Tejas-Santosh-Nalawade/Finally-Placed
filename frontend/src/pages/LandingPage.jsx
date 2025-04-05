import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import FeaturesGrid from './Feature'
import MeetingsShowcase from './Meeting'
import ResumeAnalyzer from './ResumeAnalyzer'
import PrivacyProtection from './PrivacyProtection'
import Footer from './Footer'

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <MeetingsShowcase/>
      <ResumeAnalyzer/>
      <PrivacyProtection/>
      <Footer/>
     </>
  )
}

export default LandingPage