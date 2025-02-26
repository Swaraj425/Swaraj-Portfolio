/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Skills from './components/Skills'
import ProjectDetails from './components/ProjectDetails'
import Footer from './components/Footer'

export const url = 'https://swaraj-portfolio-eta.vercel.app'

const App = () => {
  return (
      <>
        <Router>
          <div className='overflow-x-hidden'>
            <Navbar />
            <Routes>
              <Route path="/" element={<>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </>
  )
}

export default App