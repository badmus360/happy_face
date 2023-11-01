import React from 'react';
import image1A from '../assets/climber/climber3.jpg';
import image1B from '../assets/climber/climber2.jpg';
import image1C from '../assets/climber/climber1.jpg';
import image2A from '../assets/climber2/climber21.jpg'
import image2B from '../assets/climber2/climber22.jpg'
import image2C from '../assets/climber2/climber23.jpg'
import image3A from '../assets/climber3/climber34.jpg'
import image3B from '../assets/climber3/climber32.jpg'
import image3C from '../assets/climber3/climber33.jpg'
import image3D from '../assets/climber3/climber31.jpg'
import image3E from '../assets/climber3/climber35.jpg'
import image4A from '../assets/climber4/climber42.jpg'
import image4B from '../assets/climber4/climber41.jpg'
import image4C from '../assets/climber4/climber43.jpg'
import image4D from '../assets/climber4/climber44.jpg'
import image4E from '../assets/climber4/climber45.jpg'
import image5A from '../assets/climber5/climber51.jpg'
import image5B from '../assets/climber5/climber52.jpg'
import image5C from '../assets/climber5/climber53.jpg'
import image5D from '../assets/climber5/climber54.jpg'
import image6A from '../assets/train/train1.jpg'
import image6B from '../assets/train/train2.jpg'
import image6C from '../assets/train/train3.jpg'
import image6D from '../assets/train/train4.jpg'
import image6E from '../assets/train/train5.jpg'
import image7A from '../assets/costumes/costumes1.jpg'
import image7B from '../assets/costumes/costumes2.jpg'
import image7C from '../assets/costumes/costumes3.jpg'
import image7D from '../assets/costumes/costumes4.jpg'
import image7E from '../assets/costumes/costumes5.jpg'
import image8A from '../assets/decoration/decoration1.jpg'
import image8B from '../assets/decoration/decoration2.jpg'
import image8C from '../assets/decoration/decoration3.jpg'
import image8D from '../assets/decoration/decoration4.jpg'
import image8E from '../assets/decoration/decoration5.jpg'
import image8F from '../assets/decoration/decoration6.jpg'
import image8G from '../assets/decoration/decoration7.jpg'
import image8H from '../assets/decoration/decoration8.jpg'
import image8I from '../assets/decoration/decoration9.jpg'
import image8J from '../assets/decoration/decoration10.jpg'
import image9A from '../assets/toys/toy1.jpg'
import image9B from '../assets/toys/toy2.jpg'
import image9C from '../assets/toys/toy3.jpg'
import image9D from '../assets/toys/toy4.jpg'
import image9E from '../assets/toys/toy5.jpg'
import image9F from '../assets/toys/toy6.jpg'
import image9G from '../assets/toys/toy7.jpg'
import image9H from '../assets/toys/toy8.jpg'
import image9I from '../assets/toys/toy9.jpg'
import image9J from '../assets/toys/toy10.jpg'
import image9K from '../assets/toys/toy11.jpg'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {useState} from 'react'
// import {RxDotFilled} from 'react-icons/rx'


const Activities = () => {

  const slides1 = [
    {
      src: image1A,
    },
    {
      src: image1B,
    },
    {
      src: image1C,
    },
  ];

  const slides2 = [
    {
      src: image2A,
    },
    {
      src: image2B,
    },
    {
      src: image2C,
    },
  ]

  const slides3 = [
    {
      src: image3A,
    },
    {
      src: image3B,
    },
    {
      src: image3C,
    },
    {
      src: image3D,
    },
    {
      src: image3E,
    },
  ]

  const slides4 = [
    {
      src: image4A,
    },
    {
      src: image4B,
    },
    {
      src: image4C,
    },
    {
      src: image4D,
    },
    {
      src: image4E,
    },
  ]

  const slides5 = [
    {
      src: image5A,
    },
    {
      src: image5B,
    },
    {
      src: image5C,
    },
    {
      src: image5D,
    },
  ]

  const slides6 = [
    {
      src: image6A,
    },
    {
      src: image6B,
    },
    {
      src: image6C,
    },
    {
      src: image6D,
    },
    {
      src: image6E,
    },
  ]

  const slides7 = [
    {
      src: image7A,
    },
    {
      src: image7B,
    },
    {
      src: image7C,
    },
    {
      src: image7D,
    },
    {
      src: image7E,
    },
  ]

  const slides8 = [
    {
      src: image8A,
    },
    {
      src: image8B,
    },
    {
      src: image8C,
    },
    {
      src: image8D,
    },
    {
      src: image8E,
    },
    {
      src: image8F,
    },
    {
      src: image8G,
    },
    {
      src: image8H,
    },
    {
      src: image8I,
    },
    {
      src: image8J,
    },
  ]

  const slides9 = [
    {
      src: image9A,
    },
    {
      src: image9B,
    },
    {
      src: image9C,
    },
    {
      src: image9D,
    },
    {
      src: image9E,
    },
    {
      src: image9F,
    },
    {
      src: image9G,
    },
    {
      src: image9H,
    },
    {
      src: image9I,
    },
    {
      src: image9J,
    },
    {
      src: image9K,
    },
  ]


  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const [currentIndex6, setCurrentIndex6] = useState(0);
  const [currentIndex7, setCurrentIndex7] = useState(0);
  const [currentIndex8, setCurrentIndex8] = useState(0);
  const [currentIndex9, setCurrentIndex9] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides1.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides1.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide2 = () => {
    const isFirstSlide = currentIndex2 === 0;
    const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex2 - 1;
    setCurrentIndex2(newIndex);
  };
  const nextSlide2 = () => {
    const isLastSlide = currentIndex2 === slides2.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
    setCurrentIndex2(newIndex);
  };

  const prevSlide3 = () => {
    const isFirstSlide = currentIndex3 === 0;
    const newIndex = isFirstSlide ? slides3.length - 1 : currentIndex3 - 1;
    setCurrentIndex3(newIndex);
  };
  const nextSlide3 = () => {
    const isLastSlide = currentIndex3 === slides3.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex3 + 1;
    setCurrentIndex3(newIndex);
  };

  const prevSlide4 = () => {
    const isFirstSlide = currentIndex4 === 0;
    const newIndex = isFirstSlide ? slides4.length - 1 : currentIndex4 - 1;
    setCurrentIndex4(newIndex);
  };
  const nextSlide4 = () => {
    const isLastSlide = currentIndex4 === slides4.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex4 + 1;
    setCurrentIndex4(newIndex);
  };

  const prevSlide5 = () => {
    const isFirstSlide = currentIndex5 === 0;
    const newIndex = isFirstSlide ? slides5.length - 1 : currentIndex5 - 1;
    setCurrentIndex5(newIndex);
  };
  const nextSlide5 = () => {
    const isLastSlide = currentIndex5 === slides5.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex5 + 1;
    setCurrentIndex5(newIndex);
  };

  const prevSlide6 = () => {
    const isFirstSlide = currentIndex6 === 0;
    const newIndex = isFirstSlide ? slides6.length - 1 : currentIndex6 - 1;
    setCurrentIndex6(newIndex);
  };
  const nextSlide6 = () => {
    const isLastSlide = currentIndex6 === slides6.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex6 + 1;
    setCurrentIndex6(newIndex);
  };

  const prevSlide7 = () => {
    const isFirstSlide = currentIndex7 === 0;
    const newIndex = isFirstSlide ? slides7.length - 1 : currentIndex7 - 1;
    setCurrentIndex7(newIndex);
  };
  const nextSlide7 = () => {
    const isLastSlide = currentIndex7 === slides7.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex7 + 1;
    setCurrentIndex7(newIndex);
  };

  const prevSlide8 = () => {
    const isFirstSlide = currentIndex8 === 0;
    const newIndex = isFirstSlide ? slides8.length - 1 : currentIndex8 - 1;
    setCurrentIndex8(newIndex);
  };
  const nextSlide8 = () => {
    const isLastSlide = currentIndex8 === slides8.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex8 + 1;
    setCurrentIndex8(newIndex);
  };

  const prevSlide9 = () => {
    const isFirstSlide = currentIndex9 === 0;
    const newIndex = isFirstSlide ? slides9.length - 1 : currentIndex9 - 1;
    setCurrentIndex9(newIndex);
  };
  const nextSlide9 = () => {
    const isLastSlide = currentIndex9 === slides9.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex9 + 1;
    setCurrentIndex9(newIndex);
  };

  return (
    <div className='bg-gradient-to-r from-green-200 to-purple-200 w-full min-h-screen p-10 sm:p-10 lg:p-10 md:p-10 xl:10 flex flex-col items-center justify-center relative'>

      <div className='relative z-10'>
        <h1 className='text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] mb-5 text-white text-center font-bold'><span className='text-green-600 '>Explore</span> <span className='text-pink-600'>Funtertainment</span> <span className='text-orange-600'>with</span> <span className='text-red-600'>US!!!</span></h1>
        <div className='grid sm:grid md:grid lg:grid-cols-2 xl:grid-cols-2 gap-8 xl:gap-8 justify-center'>

          <div  className='p-6 w-[320px] h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-red-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px]  relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides1[currentIndex].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>

                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Fun City</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px]'>Get ready for a thrilling adventure with Fun City Bounce, where imagination knows no bounds and excitement bounces to new heights!</p>
            </div>
          </div>

          <div  className='p-6 w-[320px] h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-yellow-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px] relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides2[currentIndex2].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>
                
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide2} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide2} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Cimbing Wall</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px]'>There's a bouncy climbing wall that's ready for anyone to try, no matter how big or small they are...</p>
            </div>
          </div>

          <div className='p-6 w-[320px] h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-green-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px] relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides3[currentIndex3].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>
                
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide3} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide3} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Bouncing Slide</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px]  xl:text-[30px]'>Imagine stepping into a magical world where you can defy gravity and bounce like never before. Get ready to explore the amazing world of bouncing slides!</p>
            </div>
          </div>


          <div className='p-6 w-[320px] h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-blue-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px] relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides4[currentIndex4].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>
                
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide4} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide4} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Bouncing Castle</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px]'>Imagine a place where you can jump, bounce, and let your energy run wild. It's time to enter the magical realm of the bouncing castle!</p>
            </div>
          </div>


          <div className='p-6 w-[320px] h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-indigo-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px] relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides5[currentIndex5].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>
                
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide5} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide5} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Trampoline</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px]'>Imagine a magical surface that lets you bounce higher than you ever thought possible it's time to discover the incredible world of the trampoline!</p>
            </div>
          </div>


          <div className='p-6 w-[320px] h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-purple-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px] relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides6[currentIndex6].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>
                
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide6} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide6} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Train Ride</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px]'>Get ready to embark on a train adventure that's as enchanting as a journey through storybook lands!</p>
            </div>
          </div>


          <div className='p-6 w-[320px] h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-orange-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px] relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides7[currentIndex7].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>
                
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide7} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide7} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Costumes</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px]'>Have you ever seen magical outfits that can transport you to different fairy tales just by seeing them on!</p>
            </div>
          </div>


          <div className='p-6 w-[320px] h-[540px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-pink-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px] relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides8[currentIndex8].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>
                
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide8} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide8} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Decorations</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px]'>Are you ready to make your special occasions shine brighter than ever? We would show you our incredible party decorations that will turn your celebrations into unforgettable moments of joy and magic...</p>
            </div>
          </div>


          <div className='p-6 w-[320px] h-[550px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[800px] lg:mx-[10px] relative shadow-2xl bg-violet-300 rounded-xl'>
            <div className='h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[230px] xl:h-[350px] relative overflow-hidden group'>
              <div
                  style={{
                    backgroundImage: `url(${slides9[currentIndex9].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    transition: 'background-image 0.5s',
                  }} className='rounded-lg'
                ></div>
                
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide9} size={20} />
                </div>
                <div className='group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide9} size={20} />
                </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-red-600 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[60px] font-bold mb-2 text-center'>Other Fun Stuff</h2>
              <p className='text-black font-semibold text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px]'> Get set for the most incredible adventure with "Fun Stuff"! Picture a world where excitement never ends, where you can dive into a sea of laughter, games, and amazing activities!</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Activities;



























          {/* {activitiesData.map((activity, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md ${rainbowColors[index % rainbowColors.length]}`}>
              <div className='relative overflow-hidden group'>
                <img src={activity.image} alt={activity.title} className='w-full h-32 sm:h-48 rounded-lg  transition-transform transform group-hover:scale-105 hover:animate-bounce' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity'></div>
              </div>
              <h2 className='text-xl font-semibold mb-2'>{activity.title}</h2>
              <p className='text-gray-600'>{activity.description}</p>
            </div>
          ))}       
          */}
          