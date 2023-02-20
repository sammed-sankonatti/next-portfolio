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

const experiences = [
  {
    title : "SDE-1 at Datagrokr",
    img : "https://img.icons8.com/fluency/256/mac-book-pro-m1.png",
    work : [
      "worked on springboot and NodeJs",
      "worked on React and Redux",
      "worked with Postgres and Mysql"
    ]
  },
  {
    title : "IEEE Intern, BMSCE",
    img : "https://img.icons8.com/external-flaticons-flat-flat-icons/256/external-college-university-flaticons-flat-flat-icons-2.png",
    work : [
      "Worked with Raspberry pi and it's OS",
      "worked on robotics with Raspberry Pi"
    ]
  }
]

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
        <ExperienceCard experiences = {experiences} />
      </div>
    
    </motion.div>
  )
}

export default WorkExperience