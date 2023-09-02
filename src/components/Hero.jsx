import React from 'react'
import {useState, useEffect} from 'react'
import image1 from '../assets/rsz_img_1951.jpg'
import image2 from '../assets/IMG_1996.jpg'
import image3 from '../assets/IMG_205.jpg'
import image4 from '../assets/Img12.jpg'
import image5 from '../assets/img22.jpg'
import image6 from '../assets/bny.webp'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Hero = () => {
  const slides = [
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
      src: image1,
    },
    {
      src: image3,
    },
    {
      src: image5,
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
