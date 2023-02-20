import React from 'react'
import { motion } from 'framer-motion'
import myImg from "../assets/images/sam.png"

type Props = {}

const intial = {
    x : -200,
    opacity : 0,
}

const animate = {
    x : 0,
    opacity : 1,
}

const transition = {
    duration : 1
}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen'>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[25px] md:text-2xl text-gray-500 text-[1.2rem]'>About</h3>

      <motion.img
        initial={intial}
        whileInView = {animate}
        viewport={{once : true}}
        transition={transition}
        src="https://media.licdn.com/dms/image/C5603AQHIcyUu2uhGfQ/profile-displayphoto-shrink_800_800/0/1638876624698?e=2147483647&v=beta&t=9aDL9kmNI7g0jlFOuJ8ZLl3D-8mivJi2YP3Pcv6QgVg"
        className='-mb-20 my-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[300px]'
      />
      <div className='space-y-5 px-0 mt-10 md:px-10'>
        <h4 className='font-semibold text-1xl'> Here is a <span className='underline'>little</span> background </h4>
        <p className='text-sm'>A passionate software engineer. Engineering graduate from BMS colege of Engineering Bangalore. loves backend development and system design. Hackathon winners of 2019, Best intern of IEEE during BMSCE phase shift.
        Travelling and trekking is a passion and exploring different veriety of foods, gaming is a lifestyle, listens to music and podcasts on spotify, follows youtube TEDx talks and Instagram and always open for learning new skills and to explore new opportunities.</p>
      </div>
    </div>
  )
}

export default About