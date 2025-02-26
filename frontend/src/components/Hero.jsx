/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Hero2Img from '../assets/hero2.png'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


const Hero = () => {

    
    return (

        <>

        <div className='text-black bg-slate-100 dark:bg-black dark:text-white py-16 min-h-screen' id='hero'>
    
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.5
                }}
                src={Hero2Img} alt="" className=' mt-16 mx-auto w-1/2 md:w-[20%] lg:w-[25%]' />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.5
                }}
                className='container mx-auto text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className='text-xl md:text-4xl flex flex-col gap-4 font-bold mb-4'>
                    Empowering Ideas Through Code and Creativity
                </motion.h1>
                {/* <span className='text-purple-500 text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, praesentium.</span> */}
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className='text-zinc-900 dark:text-slate-300 md:text-2xl  text-center text-lg p-1 mt-2 mb-8'>Hi, I'm Swaraj Phalke, a Full-Stack Developer specializing in creating impactful websites, <br /> apps, and custom solutions.<br />
                    <b>Let's build something extraordinary together!.</b>
                </motion.p>
                <div className='flex justify-center items-center gap-4'>
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1,
                            duration: 0.6,
                        }}
                        className='relative bg-white border-black dark:bg-black border dark:border-white dark:text-white dark:hover:text-black px-6 py-3 rounded-md overflow-hidden group hover:scale-110 hover:drop-shadow-2xl  hover:text-white transition duration-300 '>

                        {/* Gradient effect on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>

                        <div className="relative z-10">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}>
                                Hire Me
                            </Link>
                        </div>
                    </motion.button>

                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1,
                            duration: 0.6,
                        }}
                        className='relative bg-white border-black border dark:border-white dark:bg-black dark:text-white dark:hover:text-black px-6 py-3 rounded-md overflow-hidden group hover:scale-110 hover:drop-shadow-2xl hover:text-white transition duration-300'>

                        {/* Gradient effect on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>

                        <div className="relative z-10">
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-70}>
                                About Me
                            </Link>
                        </div>
                    </motion.button>
                </div>

            </motion.div>
        </div></>
    
)
}

export default Hero
