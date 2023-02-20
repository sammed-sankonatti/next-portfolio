import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?:boolean
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x :directionLeft ? -70 : 70,
                opacity : 0
            }}
            whileInView={{
                opacity :1,
                x : 0
            }}
            transition ={{
                duration : 1
            }}

            src="https://img.icons8.com/fluency/256/node-js.png"
            className='rounded-full border  border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-500 h-16 w-16 md:h-20 md:w-20 xl:w-26 xl:h-26 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100' >100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill