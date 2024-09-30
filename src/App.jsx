import "./App.css"
import React from 'react'
import Navbar from './Component.Navbar/Navbar'
import Hero from './Component.Navbar/Hero/Hero'
import About from './Component.Navbar/About/About'
import Services from './Component.Navbar/Services/Services'
import MyWork from './Component.Navbar/MyWork/MyWork'
import Contact from './Component.Navbar/Contact/Contact'
import Footer from './Component.Navbar/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
