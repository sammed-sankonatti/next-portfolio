import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[25px] md:text-2xl text-[1.2rem] text-gray-500'>Contact Me</h3>
    
      <div className='flex flex-col space-y-10'>
        {/* <h4 className='font-semibold text-center text-lg  md:text-2xl'>
            Let's have a coffe? <span className='underline decoration-[#F7AB0A]/50'> Connect with Me</span>
        </h4> */}


        <div className='space-y-5 pt-10'>
            <div className='flex items-center justify-center space-x-5'>
              <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
              <p className='text-md'>+91 83*****314</p>
            </div>

            {/* <div className='flex items-center justify-center space-x-5'>
              <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
              <p className='text-md'>Bangalore, India</p>
            </div> */}

            <div className='flex items-center justify-center space-x-5'>
              <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
              <p className='text-md'>sammed.sankonatti18@gmail.com</p>
            </div>

        </div>

        <form className='flex flex-col space-y-2 w-full'>
          <div className='flex space-x-2'>
            <input placeholder='FirstName' className='contactInput w-40 md:w-80' type="text" />
            <input placeholder='LastName' className='contactInput w-40 md:w-80' type="text" />
          </div>
          <input placeholder='Email' className='contactInput w-full' type="text" />
          <textarea placeholder='Your Message'  className='contactInput w-full'/>
          <button onClick={(e)=> {e.preventDefault()}} className='bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>

      </div>

    </div>
  )
}

export default Contact