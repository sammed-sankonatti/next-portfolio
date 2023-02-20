import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const intial = {
    y : -200,
    opacity : 0,
}

const animate = {
    y : 0,
    opacity : 1,
}

const transition = {
    duration : 1.2
}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 mt-20 xl:mt-20 flex-shrink-0 w-[500px]  md:w-[600px] xl:w-[700px] xl:h-[500px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100
            cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={intial}
            whileInView = {animate}
            viewport={{once : true}}
            transition={transition}
            src="https://media.licdn.com/dms/image/C5603AQHIcyUu2uhGfQ/profile-displayphoto-shrink_800_800/0/1638876624698?e=2147483647&v=beta&t=9aDL9kmNI7g0jlFOuJ8ZLl3D-8mivJi2YP3Pcv6QgVg" 
            alt="" 
            className='h-[10rem] w-[10rem] rounded-full xl:w-[180px] xl:h-[180px] object-cover object-center'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>SDE-1 at Datagrokr</h4>
            <div className='flex space-x-2 my-2'>
                <img src="https://img.icons8.com/officel/256/spring-logo.png" className='h-10 w-10 rounded-full ' alt="" />
                <img src="https://img.icons8.com/fluency/256/node-js.png" className='h-10 w-10 rounded-full ' alt="" />
                <img src="https://img.icons8.com/officel/256/react.png" className='h-10 w-10 rounded-full ' alt="" />
                <img src="https://img.icons8.com/color/256/redux.png" className='h-10 w-10 rounded-full ' alt="" />

            </div>
            <p className='uppercase py-5 text-gray-300 text-sm'>March 2022 - present</p>
            <ul className='list-disc space-y-4 ml-5 text-sm md:text-md'>
                <li>worked on springboot and NodeJs</li>
                <li>worked on React and Redux</li>
                <li>worked with Postgres and Mysql</li> 
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard