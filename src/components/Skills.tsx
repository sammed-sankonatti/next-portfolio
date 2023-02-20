import Skill from '@/Utils/Skill'
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

const Skills = (props: Props) => {
  return (
    <motion.div 
      initial={intial}
      whileInView = {animate}
      transition={transition}
      className='h-screen flex relative overflow-hidden flex-col text-center space-y-1 md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-x-0 mx-auto items-center'>
      <h3 className='absolute top-24 tracking-[15px] text-gray-500 uppercase md:tracking-[25px] md:text-2xl text-[1.2rem]'>
        skills
      </h3>
      <h3 className='uppercase absolute top-36 tracking-[3px] text-sm text-gray-500'>
        Technologies worked on so far
      </h3>


      <div className='grid grid-cols-4 md:grid-cols-6 gap-5 pt-14'>
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>

    </motion.div>
  )
}

export default Skills