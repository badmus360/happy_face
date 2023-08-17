import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'
import Footer from './Footer'
import ContactTop from './ContactTop'

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center">
            <NavBar />
            <TopBar />
            <ContactTop />
        </div>
    <Footer />
    </div>
  )
}

export default Home