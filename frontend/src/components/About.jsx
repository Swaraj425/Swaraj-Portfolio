/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import AboutImg from '../assets/hero2.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'

const About = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threahold: 0.2,
        
    })

    return (
        <>        
        
            <div className='dark:text-white text-black bg-slate-100 dark:bg-black  md:h-[60rem]' id='about'>
                <div className='container  mx-auto px-4 text-center p-10'>
                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className='text-3xl md:text-4xl font-bold mb-8 underline'>About Me</motion.h2>
                    {/* <p className='mb-12 text-gray-400 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aut error sunt rerum consequuntur! Consectetur voluptate rerum eveniet sed sunt!</p> */}
                    <div className='flex flex-col md:flex-row justify-center items-center w-10/14 mx-auto'>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -100 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className='mb-8 md:mb-0 flex justify-center'>
                            <img src={AboutImg} alt="" className='w-10/12 md:w-10/14 mx-auto' />
                        </motion.div>
                        <motion.p
                            ref={ref}
                            initial={{ opacity: 0, x: 100 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7, duration: 0.9 }}
                            className='md:w-4/6  dark:text-gray-200  text-black md:px-0 text-[1.1rem] sm:text-lg md:text-2xl text-justify px-1 md:text-start'>
                            Hi, I’m Swaraj Phalke, a passionate full stack developer  and also have basic knowledge of Android Development. I like to create dynamic and user-friendly applications that provide great user experiences. I enjoy learning new programming languages and diving into various tech trends.
                        </motion.p>
                    </div>

                    <div
                        className='flex flex-row justify-around items-center mt-10 xl:mt-2'>
                        {/* Experience */}
                        <motion.div 
                        ref={ref}
                        initial={{ opacity: 0}}
                        animate={inView ? { opacity: 1} : {}}
                        transition={{ delay: 1, duration: 1 }}
                        className='text-center'>
                            <motion.h3
                                className='text-3xl md:text-8xl font-bold md:my-6 text-black dark:text-white'>1+</motion.h3>
                            <motion.p
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.9, duration: 1  }}
                                className='text-sm sm:text-[1rem] text-zinc-900 dark:text-gray-300'>Year of Experience</motion.p>
                        </motion.div>
                        {/* Clients */}
                        <motion.div 
                        ref={ref}
                        initial={{ opacity: 0}}
                        animate={inView ? { opacity: 1} : {}}
                        transition={{ delay: 1, duration: 1 }}>
                            <motion.h3
                                className='text-3xl md:text-8xl font-bold md:my-6 text-black dark:text-white'>1</motion.h3>
                            <motion.p
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.9, duration: 1  }}
                                className='text-sm sm:text-[1rem] text-zinc-900 dark:text-gray-300'>Over All Clients</motion.p>
                        </motion.div>
                        {/* Projects */}
                        <motion.div 
                        ref={ref}
                        initial={{ opacity: 0}}
                        animate={inView ? { opacity: 1} : {}}
                        transition={{ delay: 1, duration: 1.2 }}>
                            <motion.h3
                            className='text-3xl md:text-8xl font-bold md:my-6 text-black dark:text-white'>5+</motion.h3>
                            <motion.p
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.9, duration: 1  }}
                                className='text-sm sm:text-[1rem] text-zinc-900 dark:text-gray-300'>Project I have Made</motion.p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </>
)
}

export default About
