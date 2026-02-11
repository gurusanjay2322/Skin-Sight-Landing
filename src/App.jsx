import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Technology from './components/Technology'
import Gallery from './components/Gallery'
import Privacy from './components/Privacy'
import GetApp from './components/GetApp'
import MedicalDisclaimer from './components/MedicalDisclaimer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Overview />
      <Features />
      <HowItWorks />
      <Technology />
      <Gallery />
      <Privacy />
      <GetApp />
      <MedicalDisclaimer />
      <Footer />
    </div>
  )
}

export default App

