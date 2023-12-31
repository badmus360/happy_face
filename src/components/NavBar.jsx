import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav) 
  }

  return (
    <div className='w-full py-3 sm:py-3 md:py-3 lg:py-6 xl:py-6 flex justify-between items-center absolute bg-gradient-to-r
    from-cyan-500 to-pink-500'>
        <ul className='hidden px-4 sm:flex'>
           <li className='pr-4 text-pink-500 font-bold glowing-link sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:pr-8 xl:pr-8'>
                <Link to='/' >Home</Link>
           </li>
           <li className='pr-4 text-orange-500 font-bold glowing-link sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:pr-8 xl:pr-8'>
              <Link to='/about' >About Us</Link>
           </li>
           <li className='pr-4 text-red-500 font-bold glowing-link sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:pr-8 xl:pr-8'>
              <Link to="/contact">Contact Us</Link>
           </li>
        </ul>  
        <div className='flex justify-between'>

          <Link to='https://www.instagram.com/happyfacevent/' >
            <FaInstagram className='mx-6 sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl' 
              style={{
                  color: '#e4405f', // Instagram pink
                  animation: 'glowing 1.5s infinite',
                  filter: 'drop-shadow(0 0 5px rgba(228, 64, 95, 0.4))' // Adjusted color and opacity
            }} />
          </Link>

          <Link to='https://twitter.com/FaceKiddie34709' >
            <FaTwitter className='mx-6 sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl'
              style={{
                color: '#1da1f2', // Twitter blue
                animation: 'glowing 1.5s infinite',
                filter: 'drop-shadow(0 0 5px rgba(29, 161, 242, 0.4))' // Adjusted color and opacity
            }}/>
          </Link>

          <Link to="https://web.facebook.com/profile.php?id=61550869857214">
            <FaFacebookF className='mx-6 sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl'
              style={{
                color: '#1877f2', // Facebook blue
                animation: 'glowing 1.5s infinite',
                filter: 'drop-shadow(0 0 5px rgba(24, 119, 242, 0.4))' // Adjusted color and opacity
            }}/>
          </Link>
          


        </div>


        <style>
        {`
          @keyframes glowing {
            0% {
              filter: drop-shadow(0 0 5px rgba(24, 119, 242, 0.4));
            }
            50% {
              filter: drop-shadow(0 0 10px rgba(24, 119, 242, 0.6));
            }
            100% {
              filter: drop-shadow(0 0 5px rgba(24, 119, 242, 0.4));
            }
          }

          .glowing-link {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        `}
      </style>


        {/* Hamburger Icon */}
        <div onClick={handleNav} className='sm:hidden z-40'>
          <FaBars size={20} className={`mr-4 cursor-pointer ${nav ? 'text-white' : 'text-black'}`}/>
        </div>
        {/* Mobie Menu */}
        <div  
          onClick={handleNav}
        className={
         nav 
            ? 
               'fixed insert-0 overflow-y-hidden md:hidden ease-in duration-300 text-gray-300 left-0 top-0 w-full h-screen z-30 bg-black px-4 py-7 flex flex-col' 
               : 
               'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
        <ul className='h-full w-full text-center pt-12'>
           <li className='text-[50px] py-8 font-semibold'>
              <Link to='/' className='glowing-link'>Home</Link>
           </li>
           <li className='text-[50px] py-8 font-semibold'>
              <Link to='/about' className='glowing-link'>About Us</Link>
           </li>
           <li className='text-[50px] py-8 font-semibold'>
              <Link to='/contact' className='glowing-link'>Contact Us</Link>
           </li>
        </ul>
        </div>
        
    </div>
  )
}

export default NavBar