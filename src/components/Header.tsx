import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}


//Framer motion properties:
const intialLeft = {
    x : -500,
    opacity : 0,
    scale : 0.5
}

const intialRight = {
    x : 500,
    opacity : 0,
    scale : 0.5
}

const animate = {
    x : 0,
    opacity : 1,
    scale : 1
}

const transition = {
    duration : 1.2
}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 items-start flex justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={intialLeft}
        animate = {animate}
        transition={transition}
        className='flex flex-row items-center'>
            <SocialIcon url='https://in.linkedin.com/in/sammed-sankonatti' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://instagram.com/sammed.sankonatti' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.facebook.com/samsank31' fgColor='gray' bgColor='transparent' />
        </motion.div>
        <motion.div 
        initial={intialRight}
        animate={animate}
        transition={transition}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon className="cursor-pointer" network='email' fgColor='gray' bgColor='transparent' />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">contact me</p>
        </motion.div>
    </header>
  )
}

export default Header