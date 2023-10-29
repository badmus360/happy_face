import React from 'react'
import {useState, useEffect} from 'react'
import image2 from '../assets/IMG_1996.jpg'
import image3 from '../assets/IMG_205.jpg'
import image4 from '../assets/Img12.jpg'
import image5 from '../assets/img22.jpg'
import image6 from '../assets/bny.webp'
import image7 from '../assets/heret/heret1.jpg'
import image8 from '../assets/heret/heret2.jpg'
import image9 from '../assets/heret/heret3.jpg'
import image10 from '../assets/heret/heret4.jpg'
import image11 from '../assets/heret/heret5.jpg'
import image12 from '../assets/heret/heret6.jpg'
import image13 from '../assets/heret/heret7.jpg'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Hero = () => {
  const slides = [
    {
      src: image8,
    },
    {
      src: image9,
    },
    {
      src: image10,
    },
    {
      src: image11,
    },
    {
      src: image12,
    },
    {
      src: image13,
    },
    {
      src: image6,
    },
    {
      src: image2,
    },
    {
      src: image4,
    },
    {
      src: image3,
    },
    {
      src: image5,
    },
    {
      src: image6,
    },
    {
      src: image7,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Auto advance the slides every 5 seconds
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [currentIndex]);

  const buttonStyles = {
    color: 'white', // Set your desired color here
    backgroundColor: 'black', // Set your desired background color here
  };

  return (
    <div className='h-[340px] lg:h-[500px] xl:h-[600px] w-full relative group'>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          transition: 'background-image 0.5s',
        }}
      ></div>

      <div className='hidden group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'  style={buttonStyles}>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'  style={buttonStyles}>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Hero;
