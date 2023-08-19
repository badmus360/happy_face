import React from 'react'
import {useState} from 'react'
import image1 from '../assets/rsz_img_1951.jpg'
import image2 from '../assets/IMG_1996.jpg'
import image3 from '../assets/IMG_205.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Hero = () => {
  const slides = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
  ];

  const dotColors = ['red', 'green', 'blue']; // Add more colors if needed

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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

      <div className='hidden group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] z-30 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex absolute bottom-1 left-1/2 transform -translate-x-1/2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-8xl cursor-pointer ${slideIndex === currentIndex ? 'text-' + dotColors[slideIndex] : ''}`}
          >
            {/* Replace this with your RxDotFilled component */}
            <RxDotFilled style={{ color: dotColors[slideIndex] }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
