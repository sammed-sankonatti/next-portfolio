import ExperienceCard from '@/Utils/ExperienceCard'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const intial = {
    opacity : 0,
}

const animate = {
    opacity : 1,
}

const transition = {
    duration : 1.5
}

const WorkExperience = (props: Props) => {
  return (
    <motion.div 
      initial={intial}
      whileInView = {animate}
      viewport={{once : true}}
      transition={transition}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='uppercase absolute top-24 tracking-[15px] text-gray-500 md:tracking-[25px] md:text-2xl text-[1.2rem]'>Experience</h3>

      <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    
    </motion.div>
  )
}

export default WorkExperience