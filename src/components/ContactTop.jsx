import React from 'react'
import { BsFillEnvelopeAtFill, BsFillTelephoneFill, BsFillGeoAltFill  } from "react-icons/bs";
import { useState } from 'react';

const ContactTop = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to handle the form submission
  };

  const containerStyle = {
    textAlign: 'center',
    // margin: '2rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    // maxWidth: '400px',
    margin: '0 auto',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginTop: '1rem',
    textAlign: 'left',
  };

  const inputStyle = {
    padding: '0.5rem',
    margin: '0.5rem 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };
  
  return (
        <div className='bg-gradient-to-r from-green-200 to-purple-200 w-full'>
          <div className='mt-3 mb-3'>
            <h1 className='text-center text-red-700 font-bold text-4xl  sm:text-5xl sm:py-1 md:text-5xl md:py-1 lg:py-1 lg:text-6xl xl:py-2 xl:text-7xl'>Get in touch with us via our...</h1>
          </div>

          <div className='grid gap-4 mx-5 sm:mx-10 md:mx-10 md:grid-cols-3 rounded-lg bg-white/50 py-5 relative'>
            
            <div className='px-4 grid item-center text-center'>
              <div className='flex justify-center'>
                <BsFillGeoAltFill className='text-6xl text-blue-600 sm:text-[100px] md:text-[95px] lg:text-[110px] xl:text-[150px]' />
              </div>
              <div className='lg:pt-2 xl:pt-4'>
                <h1 className='text-green-500 font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl'>Office Address</h1>
                <p className='text-green-800 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                  Office 1: 22, Simbiat Abiola Way, Jara Mall, Ikeja.
                </p>
                <br></br>
                <p className='text-green-800 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                  Office 2: 41, Adeshokan, Dopemu, Agege.
                </p>
              </div>
            </div>

            <div className='px-4 grid border-red-500 border-t-2 mx-4 sm:mx-7 sm:border-red-500 sm:border-t-2 md:border-t-0 md:border-red-500 md:border-l-2 lg:border-red-500 lg:border-l-2 xl:border-red-500 xl:border-l-2 item-center text-center'>
              <div className='flex justify-center'>
                <BsFillEnvelopeAtFill className='text-6xl text-red-600 sm:text-[100px] md:text-[95px] lg:text-[110px] xl:text-[150px]'/>
              </div>
              <div className='xl:pt-0'>
              <h1 className='text-blue-500 font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl'>Mail Address</h1>
              <p className='text-blue-800 lg:text-3xl text-2xl sm:text-2xl md:text-2xl xl:text-4xl'>happyfacekiddiesevent@gmail.com</p>
              </div>
            </div>

            <div className='px-4 grid border-green-500 border-t-2 mx-4 sm:mx-7 sm:border-green-500 sm:border-t-2 md:border-t-0 md:border-green-500 md:border-l-2 lg:border-green-500 lg:border-l-2 xl:border-green-500 xl:border-l-2 item-center text-center'>
              <div className='flex justify-center mt-2'>
                <BsFillTelephoneFill className='text-6xl text-green-600 sm:text-[100px] md:text-[95px] lg:text-[110px] xl:text-[150px]'/>
              </div>
              <div className='xl:pt-0'>
              <h1 className='text-red-500 font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl'>Customer Service</h1>
              <p className='text-red-800 lg:text-3xl text-2xl sm:text-2xl md:text-2xl xl:text-4xl'>0701 127 1218, 0817 187 2043</p>
              </div>
            </div>

          </div>

          <div style={containerStyle} className='flex-col bg-white/50 mx-[20px] sm:mx-[40px] lg:mx-[100px] xl:mx-[90px] my-5 pl-7 pr-12 rounded-lg py-6 sm:my-[40px]'>
              <div className='text-orange-500 text-4xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold'>
                Reach Out to Us...
              </div>
              <form style={formStyle} onSubmit={handleSubmit} className='mt-5 items-center'>
                <label style={labelStyle} htmlFor="name" className='text-3xl sm:text-2xl'>
                  Name
                </label>
                <input
                  style={inputStyle}
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='w-[300px] h-[50px] sm:w-[450px] sm:h-[60px] md:w-[600px] md:h-[60px] text-xl sm:text-2xl xl:w-[640px] xl:h-[70px] xl:text-5xl'
                />

                <label style={labelStyle} htmlFor="email" className='text-3xl sm:text-2xl'>
                  Email
                </label>
                <input
                  style={inputStyle}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-[300px] h-[50px] sm:w-[450px] sm:h-[60px] md:w-[600px] md:h-[60px] text-xl sm:text-2xl xl:w-[640px] xl:h-[70px] xl:text-5xl'
                />

                <label style={labelStyle} htmlFor="message" className='text-3xl sm:text-2xl'>
                  Message
                </label>
                <textarea
                  style={inputStyle}
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className='w-[300px] h-[250px] sm:w-[450px] md:w-[600px] text-xl xl:w-[640px] xl:h-[300px] xl:text-3xl'
                ></textarea>

                <button style={{ ...buttonStyle, ...buttonHoverStyle }} type="submit" className='text-3xl font-bold mt-5 w-[300px]'>
                  Submit
                </button>
              </form>
            </div>
        </div>
  )
}

export default ContactTop


