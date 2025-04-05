import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Layout from './Layout'
import AnalyzeResume from '@/pages/AnalyzeResume'

import LoginPage from '@/pages/Login'

function Routings() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<Layout />} />
            <Route path="/resume" element={<AnalyzeResume />} />
            <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    </div>
  )
}

export default Routings