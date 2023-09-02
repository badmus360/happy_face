import {IoLogoYoutube} from 'react-icons/io5'
import image1 from '../assets/logooo.png'

const TopBar = () => {
  return (
    <div className='mt-11 lg:mt-[84px] xl:mt-[87px] py-2 sm:flex sm:py-2 sm:px-2 justify-between sm:items-center bg-gradient-to-r from-yellow-500 to-red-500 w-full z-20 '>
      <div className='flex items-center justify-center sm:justify-start'>
        <img src={image1} className='h-10 lg:h-[70px] xl:h-[70px]' />
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
          }

          .glowing-button {
            animation: glowing 1.5s infinite;
            transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
          }

          .glowing-button:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 0 15px rgba(24, 119, 242, 0.8));
          }

        `}
      </style>

      <div className='flex items-center justify-center sm:justify-start'>
        <span className='text-purple-600 font-extrabold text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl glowing-link'>Happy Face Kiddies Events</span>
      </div>
      
      <div className='flex items-center justify-center sm:justify-end mt-2 sm:mt-0'>
        <a href="https://www.youtube.com/channel/UC7B19cN9BjVdt2bTWQlcEYw">
          <button
            className='bg-gradient-to-r from-pink-500 to-red-600 rounded-full pr-5 pl-4 text-white flex items-center pt-1 pb-1 glowing-button lg:text-3xl xl:text-4xl'>
            Subscribe 
            <IoLogoYoutube className='ml-3 ' />
          </button>
        </a>
      </div>
    </div>
  )
}

export default TopBar
