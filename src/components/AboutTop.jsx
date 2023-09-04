import React from 'react'
import image1A from '../assets/planner/planner1.png';
import image1B from '../assets/planner/planner2.jpg';
import image1C from '../assets/planner/planner3.jpg';
import image1D from '../assets/planner/planner4.jpeg';
import image2A from '../assets/shakers/shakers1.webp';
import image2B from '../assets/shakers/shakers2.jpg';
import image2C from '../assets/shakers/shakers3.jpg';
import image2D from '../assets/shakers/shakers4.jpg';
import image3A from '../assets/create/create1.jpg';
import image3B from '../assets/create/create2.jpg';
import image3C from '../assets/create/create3.webp';
import image3D from '../assets/create/create4.jpg';
import image4A from '../assets/sell/sell1.jpg';
import image4B from '../assets/sell/sell2.jpg';
import image4C from '../assets/sell/sell3.jpeg';
import image4D from '../assets/sell/sell4.jpg';
import image4E from '../assets/sell/sell5.png';
import image5A from '../assets/rent/rent1.jpeg'
import image5B from '../assets/rent/rent2.webp'
import image5C from '../assets/rent/rent3.jpeg'
import image5D from '../assets/rent/rent4.jpeg'
import { useState, useEffect } from 'react';

const AboutTop = () => {


const slides = {
  slides1 : [
          image1A,
          image1B,
          image1C,
          image1D,
        ],
  slides2 : [
          image2A,
          image2B,
          image2C,
          image2D,
        ],
  slides3 : [
        image3A,
        image3B,
        image3C,
        image3D,
      ],
  slides4 : [
        image4A,
        image4B,
        image4C,
        image4D,
        image4E,
    ],
  slides5 : [
        image5A,
        image5B,
        image5C,
        image5D,
    ]
}

    const SlideShow = ({ images }) => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, [images]);


      return (
        <div className='relative h-[370px] sm:h-[390px] md:h-[410px] lg:h-[400px]  overflow-hidden'>
          <img
            src={images[currentImageIndex]}
            className='w-full h-full rounded-lg transition-transform transform group-hover:scale-105'
          />
          <div className='absolute top-0 left-0 w-full h-full'></div>
        </div>
      );
    };


  return (
       <div className='w-full bg-gradient-to-r from-green-200 to-purple-200 min-h-screen px-10 sm:px-10 pb-10 sm:pb-10 lg:pb-10 md:pb-10 lg:px-10 md:px-10 flex flex-col items-center justify-center relative '>   
          <div className='text-center text-[46px] sm:text-[64px] md:text-[79px] lg:text-[109px] mb-4 font-bold mt-6 xl:mb-6 xl:mt-8 xl:text-[70px]'><span className='text-red-500'>Who we are</span> <span className='text-yellow-500'>and</span> <span className='text-green-500'>what we do</span><span className='text-purple-500'>...</span></div>
              <div className='grid gap-10 sm:grid md:grid lg:grid justify-center group'>

                  <div className='bg-black sm:gap-2 md:gap-3 w-[400px] h-[690px] sm:w-[600px] sm:h-[900px] md:w-[730px] md:h-[1000px] lg:w-[990px] lg:h-[450px] xl:w-[1150px] xl:h-[500px] grid sm:grid md:grid lg:grid-cols-2 bg-opacity-30 pb-3 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>
    
                      <SlideShow images={slides.slides1} />
                      <div class="bg-blue-300 h-[300px] sm:h-[470px] md:h-[530px] lg:h-[400px] mt-1 sm:mt-0 md:mt-0 rounded-lg p-2">
                              <span className='text-[30px] text-red-600 font-bold sm:text-[50px] md:text-[70px] lg:text-[38px] xl:text-[45px]'>...we are funstatic planners</span>
                              <p className='text-[22px] font-semibold sm:text-[36px] md:text-[41px] lg:text-3xl xl:text-4xl'> we're here to make sure you have the most amazing time ever! Imagine us as your magical party helpers, like the wizards of fun! We're the ones who sprinkle joy, laughter, and excitement into special events. From cool games to awesome decorations, we're like your very own team of party experts!</p>
                      </div>
                  </div>
  
                 <div className='bg-black sm:gap-2 md:gap-3 w-[400px] h-[690px] gap-1 sm:w-[600px] sm:h-[900px] md:w-[730px] md:h-[1000px] lg:w-[990px] lg:h-[450px] xl:w-[1150px] xl:h-[500px] grid sm:grid md:grid lg:grid-cols-2 bg-opacity-30 b-5 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>
                      <aside class="bg-green-300 h-[300px] sm:h-[470px] md:h-[530px] lg:h-[400px] mt-0 sm:mt-0 md:mt-0 rounded-lg p-2">
                              <span className='text-[30px] text-red-600 font-bold sm:text-[50px] md:text-[70px] lg:text-[38px] xl:text-[45px]'>...we are party shakers</span>
                              <p className='text-[22px] font-semibold sm:text-[36px] md:text-[41px] lg:text-3xl xl:text-4xl'>we've got a secret ingredient to make your parties shake with excitement! Imagine us as the musical magicians who bring the beats and rhythms that make your feet tap, your hips sway, and your heart dance. We're the ones with the coolest DJ music that's like a sprinkle of magic dust over your party</p>
                      </aside>

                      <SlideShow images={slides.slides2} />
                  </div>
                  
                  <div className='bg-black sm:gap-2 md:gap-3 w-[400px] h-[690px] sm:w-[600px] sm:h-[900px] md:w-[730px] md:h-[1000px] lg:w-[990px] lg:h-[450px] xl:w-[1150px] xl:h-[500px] grid sm:grid md:grid lg:grid-cols-2 bg-opacity-30 pb-3 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>

                      <SlideShow images={slides.slides3} />
                      <aside class="bg-yellow-300 h-[300px] sm:h-[470px] md:h-[530px] lg:h-[400px] mt-1 sm:mt-0 md:mt-0 rounded-lg p-2">
                              <span className='text-[30px] text-red-600 font-bold sm:text-[50px] md:text-[70px] lg:text-[38px] xl:text-[45px]'>...we create</span>
                              <p className='text-[22px] font-semibold sm:text-[36px] md:text-[41px] lg:text-3xl xl:text-4xl'>We're not just ordinary creators; we're the wizards behind the scenes, crafting enchanting items that capture the spirit of the amusement park. From whimsical artwork that captures the joy of the carousel to cozy blankets that make you feel like you're on the Ferris wheel, we pour our heart and soul into every creation.</p>
                      </aside>
                  </div>
  
                  <div className='bg-black sm:gap-2 md:gap-3 w-[400px] h-[690px] gap-1 sm:w-[600px] sm:h-[900px] md:w-[730px] md:h-[1000px] lg:w-[990px] lg:h-[450px] xl:w-[1150px] xl:h-[500px] grid sm:grid md:grid lg:grid-cols-2 bg-opacity-30 b-5 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>
                      <aside class="bg-pink-300 h-[300px] sm:h-[470px] md:h-[530px] mt-0 sm:mt-0 md:mt-0 rounded-lg p-2">
                              <span className='text-[30px] text-red-600 font-bold sm:text-[50px] md:text-[70px] lg:text-[38px] xl:text-[45px]'>...we sell</span>
                              <p className='text-[22px] font-semibold sm:text-[36px] md:text-[41px] lg:text-3xl xl:text-4xl'>Are you ready to take a piece of an amusement park magic? "bringing the thrill of the amusement park right to you Imagine this: you're riding the happiest roller coasters, playing the most exciting games. Now, what if we told you that you can keep that excitement alive even after you've left the park.</p>
                      </aside>

                      <SlideShow images={slides.slides4} />
                  </div>
  
                  <div className='bg-black sm:gap-2 md:gap-3 w-[400px] h-[690px] sm:w-[600px] sm:h-[900px] md:w-[730px] md:h-[1000px] lg:w-[915px] lg:h-[400px] xl:w-[1150px] xl:h-[500px] grid sm:grid md:grid bg-opacity-30 pb-3 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>

                      <SlideShow images={slides.slides5} />
                      <aside class="bg-cyan-300 h-[300px] sm:h-[470px] md:h-[530px] mt-1 sm:mt-0 md:mt-0 rounded-lg p-2">
                              <span className='text-[30px] text-red-600 font-bold sm:text-[50px] md:text-[70px] lg:text-[38px] xl:text-[45px]'>...we rent</span>
                              <p className='text-[22px] font-semibold sm:text-[36px] md:text-[41px] lg:text-3xl xl:text-4xl'>Imagine this: the thrill of riding a roller coaster, the joy of playing games, and the wonder of exploring new worlds. Now, what if we told you that you can have all that excitement and more, anytime you want? That's exactly what "FunWorld Creations" is here for – to fill your days with play, and endless amusement!</p>
                      </aside>
                  </div> 
  
              </div>
          </div>
  )
}

export default AboutTop