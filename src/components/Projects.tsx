import { motion } from 'framer-motion'
import React, { useState } from 'react'

type Props = {}

const initial = {
  opacity:0
}

const animate = {
  opacity : 1
}

const transition = {
  duration : 1.5
}

const Projects = (props: Props) => {

  const [projects, setProjects] = useState(['project1', 'project2', 'project3'])

  return (
    <motion.div
      initial={initial}
      whileInView = {animate}
      transition={transition}
      viewport={{
        once: true,
      }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[25px] md:text-2xl text-[1.2rem] text-gray-500'>Projects</h3>
      

      <div className='relative overflow-x-scroll snap-x w-full flex overflow-y-hidden snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {
          projects.map((project, i)=>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-20 md:p-40 h-screen'>
              <motion.img 
                initial = {{
                   y : -300,
                   opacity : 0
                }}
                whileInView={{
                  y:0,
                  opacity : 1
                }}
                transition ={{
                  duration : 1.5
                }}
                viewport ={{
                  once : true
                }}
                className='pt-10' src="https://img.icons8.com/plasticine/256/chrome--v2.png" alt="" />
              <div className='space-y-10 md:px-10 max-w-6xl'>
                <h4 className='text-[1rem] md:text-2xl xl:text-3xl font-semibold text-center'> <span className='underline decoration-[#F7AB0A]/50'>project {i+1} of {projects.length} :</span>  Google clone</h4>
                <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cupiditate tempore sint, ipsa architecto, ex reprehenderit consequatur saepe ab neque magni laudantium! </p>
              </div>
            </div>
          ))
        }
      </div>
      
      <div className='absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects