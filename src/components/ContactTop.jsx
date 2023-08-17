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
    margin: '2rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
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
            <h1 className='text-center text-3xl'>Get in touch with us via our...</h1>
          </div>

          <div className='grid gap-4 mx-5 sm:mx-10 md:mx-10 md:grid-cols-3 rounded-lg bg-white/50 py-5 relative'>
            
            <div className='px-4 grid item-center text-center'>
              <div className='flex justify-center'>
                <BsFillGeoAltFill className='text-6xl text-blue-600' />
              </div>
              <div className=''>
                <h1 className=''>Office Address</h1>
                <p className=''>
                  41, Adeshokan Street, Off Balogun Ilawe Street, Dopemu, Agege, Lagos State, Nigeria
                </p>
              </div>
            </div>

            <div className='px-4 grid item-center text-center'>
              <div className='flex justify-center'>
                <BsFillEnvelopeAtFill className='text-6xl text-red-600'/>
              </div>
              <h1 className=''>Mail Address</h1>
              <p className=''>adveland@ademolink.org</p>
            </div>

            <div className='px-4 grid item-center text-center'>
              <div className='flex justify-center'>
                <BsFillTelephoneFill className='text-6xl text-green-600'/>
              </div>
              <h1 className=''>Customer Service</h1>
              <p className=''>0817 187 2043, 0817 187 2043</p>
            </div>

          </div>

          <div style={containerStyle} className='flex-col bg-white/50 my-5 pl-7 pr-12 rounded-lg py-6 '>
            <div className=''>
              Reachout to Us...
            </div>
            <form style={formStyle} onSubmit={handleSubmit}>
              <label style={labelStyle} htmlFor="name">
                Name
              </label>
              <input
                style={inputStyle}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label style={labelStyle} htmlFor="email">
                Email
              </label>
              <input
                style={inputStyle}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label style={labelStyle} htmlFor="message">
                Message
              </label>
              <textarea
                style={inputStyle}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button style={{ ...buttonStyle, ...buttonHoverStyle }} type="submit">
                Submit
              </button>
            </form>
          </div>
    
        </div>
  )
}

export default ContactTop


