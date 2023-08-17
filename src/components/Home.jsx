import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'
import Footer from './Footer'
import Activities from './Activities'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center">
            <NavBar />
            <TopBar />
            <Hero />
            <Activities />
        </div>
    <Footer />
    </div>
  )
}

export default Home