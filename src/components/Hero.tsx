import BackgroundCircles from '@/Utils/BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { Cursor } from 'react-simple-typewriter'
import myImg from "../assets/images/sam.png"
type Props = {}

const Hero = (props: Props) => {

    const [text, helper] = useTypewriter({
        words : ["My Name Is Sammed", "I'm a <Software Developer />", "In Silicon Valley, Bangalore" ],
        loop: true,
        delaySpeed : 2000
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles /> 
        <Image src={myImg} alt="myimg" className='relative rounded-full h-32 w-32 mx-auto object-cover' />  
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]'>software developer</h2>
          <h1 className='text-3xl md:text-4xl font-semibold px-10'>
            <span className='mr-2 text-[1.3rem] md:text-3xl'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href="about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="projects">
            <button className='heroButton'>Projects</button>
          </Link>          
        </div>
        </div>
    </div>
  )
}

export default Hero