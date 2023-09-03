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
        <div className='relative h-[370px] overflow-hidden'>
          <img
            src={images[currentImageIndex]}
            className='w-full h-full rounded-lg transition-transform transform group-hover:scale-105'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity'></div>
        </div>
      );
    };


  return (
       <div className='w-full bg-gradient-to-r from-green-200 to-purple-200 min-h-screen px-10 sm:px-10 pb-10 sm:pb-10 lg:pb-10 md:pb-10 lg:px-10 md:px-10 flex flex-col items-center justify-center relative '>   
          <div className='text-center text-4xl sm:text-5xl mb-4 font-bold mt-6 xl:mb-6 xl:mt-8 lg:text-[50px] xl:text-[70px]'><span className='text-red-500'>Who we are</span> <span className='text-yellow-500'>and</span> <span className='text-green-500'>what we do</span><span className='text-purple-500'>...</span></div>
              <div className='grid gap-10 sm:grid md:grid lg:grid justify-center group'>

                  <div className='bg-black w-[400px] h-[690px] sm:w-[600px] sm:h-[280px] md:w-[700px] md:h-[290px] lg:w-[915px] lg:h-[400px] xl:w-[1150px] xl:h-[500px] grid sm:grid-cols-2 md:grid-cols-2 bg-opacity-30 pb-3 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>
    
                      <SlideShow images={slides.slides1} />
                      <div class="bg-blue-300 h-[300px] mt-1 sm:mt-0 md:mt-0 sm:ml-2 md:ml-4 rounded-lg p-2">
                              <span className='text-[30px] text-red-600 font-bold lg:text-[38px] xl:text-[45px]'>...we are funstatic planners</span>
                              <p className='text-[22px] font-semibold sm:text-lg lg:text-3xl xl:text-4xl'> we're here to make sure you have the most amazing time ever! Imagine us as your magical party helpers, like the wizards of fun! We're the ones who sprinkle joy, laughter, and excitement into special events. From cool games to awesome decorations, we're like your very own team of party experts!</p>
                      </div>
                  </div>
  
                 <div className='bg-black w-[400px] h-[690px] sm:w-[600px] sm:h-[280px] md:w-[700px] md:h-[290px] lg:w-[915px] lg:h-[400px] xl:w-[1150px] xl:h-[500px] grid sm:grid-cols-2 md:grid-cols-2 bg-opacity-30 b-5 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>
                      <aside class="bg-green-300 h-[300px] mt-1 sm:mt-0 md:mt-0 sm:mr-2 md:mr-4 rounded-lg p-2">
                              <span className='text-2xl font-bold lg:text-[38px] xl:text-[45px]'>...we are party shakers</span>
                              <p className='text-xl sm:text-lg lg:text-3xl xl:text-4xl'>we've got a secret ingredient to make your parties shake with excitement! Imagine us as the musical magicians who bring the beats and rhythms that make your feet tap, your hips sway, and your heart dance. We're the ones with the coolest DJ music that's like a sprinkle of magic dust over your party</p>
                      </aside>

                      <SlideShow images={slides.slides2} />
                  </div>
                  
                  <div className='bg-black w-[400px] h-[690px] sm:w-[600px] sm:h-[280px] md:w-[700px] md:h-[290px] lg:w-[915px] lg:h-[400px] xl:w-[1150px] xl:h-[500px] grid sm:grid-cols-2 md:grid-cols-2 bg-opacity-30 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>

                      <SlideShow images={slides.slides3} />
                      <aside class="bg-yellow-300 h-[300px] mt-1 sm:mt-0 md:mt-0 sm:ml-2 md:ml-4 rounded-lg p-2">
                              <span className='text-[30px] text-red-600 font-bold lg:text-[38px] xl:text-[45px]'>...we create</span>
                              <p className='text-[22px] font-semibold sm:text-lg lg:text-3xl xl:text-4xl'>We're not just ordinary creators; we're the wizards behind the scenes, crafting enchanting items that capture the spirit of the amusement park. From whimsical artwork that captures the joy of the carousel to cozy blankets that make you feel like you're on the Ferris wheel, we pour our heart and soul into every creation.</p>
                      </aside>
                  </div>
  
                  <div className='bg-black w-[400px] h-[690px] sm:w-[600px] sm:h-[280px] md:w-[700px] md:h-[290px] lg:w-[915px] lg:h-[400px] xl:w-[1150px] xl:h-[500px] grid sm:grid-cols-2 md:grid-cols-2 bg-opacity-30 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>
                      <aside class="bg-pink-300 h-full mt-1 sm:mt-0 md:mt-0 sm:mr-2 md:mr-4 rounded-lg p-2">
                              <span className='text-2xl font-bold lg:text-[38px] xl:text-[45px]'>...we sell</span>
                              <p className='text-xl sm:text-lg lg:text-3xl xl:text-4xl'>Are you ready to take a piece of an amusement park magic? "bringing the thrill of the amusement park right to you Imagine this: you're riding the happiest roller coasters, playing the most exciting games. Now, what if we told you that you can keep that excitement alive even after you've left the park.</p>
                      </aside>

                      <SlideShow images={slides.slides4} />
                  </div>
  
                  <div className='bg-black w-[400px] h-[690px] sm:w-[600px] sm:h-[280px] md:w-[700px] md:h-[290px] lg:w-[915px] lg:h-[400px] xl:w-[1150px] xl:h-[500px] grid sm:grid-cols-2 md:grid-cols-2 bg-opacity-30 p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-lg shadow-md'>

                      <SlideShow images={slides.slides5} />
                      <aside class="bg-cyan-300 h-[300px] mt-1 sm:mt-0 md:mt-0 sm:ml-2 md:ml-4 rounded-lg p-2">
                              <span className='text-[30px] text-red-600 font-bold lg:text-[38px] xl:text-[45px]'>...we rent</span>
                              <p className='text-[22px] font-semibold sm:text-lg lg:text-3xl xl:text-4xl'>Imagine this: the thrill of riding a roller coaster, the joy of playing games, and the wonder of exploring new worlds. Now, what if we told you that you can have all that excitement and more, anytime you want? That's exactly what "FunWorld Creations" is here for – to fill your days with play, and endless amusement!</p>
                      </aside>
                  </div> 
  
              </div>
          </div>
  )
}

export default AboutTop






   


               {/* <div className='relative h-full overflow-hidden group md:col-span-1'>
                      <img
                        src={images[currentImageIndex]}
                        className='w-full h-full rounded-lg transition-transform transform group-hover:scale-105 hover:animate-bounce'
                      />
                          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity'></div>
                      </div> */}



                   {/* <div className='relative mt-[9px] sm:mt-0 md:mt-0 lg:mt-0 h-full overflow-hidden group md:col-span-1'>
                          <img src={image2A} className='w-full h-full rounded-lg transition-transform transform group-hover:scale-105 hover:animate-bounce' />
                          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity'></div>
                      </div> */}


                      {/* <div className='relative h-full overflow-hidden group md:col-span-1'>
                          <img src={image2A} className='w-full h-full rounded-lg transition-transform transform group-hover:scale-105 hover:animate-bounce' />
                          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity'></div>
                      </div> */}


                      {/* <div className='relative mt-[3px] sm:mt-0 md:mt-0 lg:mt-0 h-full overflow-hidden group md:col-span-1'>
                          <img src={image2A} className='w-full h-full rounded-lg transition-transform transform group-hover:scale-105 hover:animate-bounce' />
                          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity'></div>
                      </div> */}


                      {/* <div className='relative h-full overflow-hidden group md:col-span-1'>
                          <img src={image2A} className='w-full h-full rounded-lg transition-transform transform group-hover:scale-105 hover:animate-bounce' />
                          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity'></div>
                      </div> */}


// const slides1 = [
//       {
//         src: image1A,
//       },
//       {
//         src: image1B,
//       },
//       {
//         src: image1C,
//       },
//       {
//         src: image1D,
//       },
//     ]

//     const slides2 = [
//       {
//         src: image2A,
//       },
//       {
//         src: image2B,
//       },
//       {
//         src: image2C,
//       },
//       {
//         src: image2D,
//       },
//     ]

//     const slides3 = [
//       {
//         src: image3A,
//       },
//       {
//         src: image3B,
//       },
//       {
//         src: image3C,
//       },
//       {
//         src: image3D,
//       },
//     ]

//     const slides4 = [
//       {
//         src: image4A,
//       },
//       {
//         src: image4B,
//       },
//       {
//         src: image4C,
//       },
//       {
//         src: image4D,
//       },
//       {
//         src: image4E,
//       },
//     ]

//     const slides5 = [
//       {
//         src: image5A,
//       },
//       {
//         src: image5B,
//       },
//       {
//         src: image5C,
//       },
//       {
//         src: image5D,
//       },
//     ]

    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect(() => {
    //   // Automatically change image index every 3 seconds
    //   const interval = setInterval(() => {
    //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides1.length);
    //   }, 3000); // Change image every 3 seconds
  
    //   return () => {
    //     clearInterval(interval); // Clear interval on component unmount
    //   };
    // }, []);


    // const [currentIndex1, setCurrentIndex1] = useState(0);
    // const [currentIndex2, setCurrentIndex2] = useState(0);
    // const [currentIndex3, setCurrentIndex3] = useState(0);
    // const [currentIndex4, setCurrentIndex4] = useState(0);
    // const [currentIndex5, setCurrentIndex5] = useState(0);

    // const prevSlide1 = () => {
    //   const isFirstSlide = currentIndex === 0;
    //   const newIndex = isFirstSlide ? slides1.length - 1 : currentIndex1 - 1;
    //   setCurrentIndex(newIndex);
    // };
    // const nextSlide1 = () => {
    //   const isLastSlide = currentIndex1 === slides1.length - 1;
    //   const newIndex = isLastSlide ? 0 : currentIndex1 + 1;
    //   setCurrentIndex1(newIndex);
    // };
  
    // const prevSlide2 = () => {
    //   const isFirstSlide = currentIndex2 === 0;
    //   const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex2 - 1;
    //   setCurrentIndex2(newIndex);
    // };
    // const nextSlide2 = () => {
    //   const isLastSlide = currentIndex2 === slides2.length - 1;
    //   const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
    //   setCurrentIndex2(newIndex);
    // };
  
    // const prevSlide3 = () => {
    //   const isFirstSlide = currentIndex3 === 0;
    //   const newIndex = isFirstSlide ? slides3.length - 1 : currentIndex3 - 1;
    //   setCurrentIndex3(newIndex);
    // };
    // const nextSlide3 = () => {
    //   const isLastSlide = currentIndex3 === slides3.length - 1;
    //   const newIndex = isLastSlide ? 0 : currentIndex3 + 1;
    //   setCurrentIndex3(newIndex);
    // };
  
    // const prevSlide4 = () => {
    //   const isFirstSlide = currentIndex4 === 0;
    //   const newIndex = isFirstSlide ? slides4.length - 1 : currentIndex4 - 1;
    //   setCurrentIndex4(newIndex);
    // };
    // const nextSlide4 = () => {
    //   const isLastSlide = currentIndex4 === slides4.length - 1;
    //   const newIndex = isLastSlide ? 0 : currentIndex4 + 1;
    //   setCurrentIndex4(newIndex);
    // };
  
    // const prevSlide5 = () => {
    //   const isFirstSlide = currentIndex5 === 0;
    //   const newIndex = isFirstSlide ? slides5.length - 1 : currentIndex5 - 1;
    //   setCurrentIndex5(newIndex);
    // };
    // const nextSlide5 = () => {
    //   const isLastSlide = currentIndex5 === slides5.length - 1;
    //   const newIndex = isLastSlide ? 0 : currentIndex5 + 1;
    //   setCurrentIndex5(newIndex);
    // };


     {/* <div
                            style={{
                            backgroundImage: `url(${slides1[currentIndex1].src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                            transition: 'background-image 0.5s',
                          }} className='w-full rounded-lg transition-transform transform group-hover:scale-105 hover:animate-bounce'
                          ></div>  */}