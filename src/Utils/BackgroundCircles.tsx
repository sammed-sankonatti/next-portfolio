import { motion } from 'framer-motion'
import React from 'react'
type Props = {}


const initial = {
    opacity : 0
}

const animate ={
    scale : [1,2,2,3,1],
    opacity : [0.1, 0.2, 0.4, 0.8, 1.0],
    borderRadius : ["20%", "20%", "50%", "80%", "20%"]
}

const transition = {
    duration : 2.5
}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
        initial={initial}
        animate={animate}
        transition={transition}
    className='relative flex justify-center items-center'>
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52" />
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping mt-52" />
        <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] animate-ping mt-52" />
        <div className="absolute border border-[#F7AB0A] rounded-full opacity-10 h-[650px] w-[650px] animate-pulse mt-52" />
        <div className="absolute border border-[#F7AB0a] rounded-full opacity-10 h-[800px] w-[800px] animate-pulse mt-52" />
    </motion.div>
  )
}

export default BackgroundCircles