import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'
import Footer from './Footer'
import AboutTop from './AboutTop'

const About = () => {
  return (
    <div>
        <div className="flex flex-col items-center">
            <TopBar />
            <NavBar />
            <AboutTop />
        </div>
            <Footer />
    </div>
  )
}

export default About