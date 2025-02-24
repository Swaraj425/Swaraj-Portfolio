/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FcPhoneAndroid } from "react-icons/fc";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-scroll';

const Services = () => {

    // const servicesData = [
    //     {
    //         title: "Web Development",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab at maiores eum harum possimus excepturi quae, commodi esse animi!"
    //     },
    //     {
    //         title: "App Develoment",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab at maiores eum harum possimus excepturi quae, commodi esse animi!"
    //     },
        
    // ]

    const {ref, inView} = useInView({
        triggerOnce:false,
        threshold: 0.2
    })

    return (
        <div className='text-black dark:text-white bg-slate-100 dark:bg-black lg:py-28 md:h-[60rem]' id='services'>
            <motion.div 
            ref={ref}
            initial={{opacity:0 , y:100}}
            animate={inView ? {opacity: 1 , y: 0} : {}}
            transition={{duration:0.5}}
            className='container mx-auto px-4 text-center'>
                <h2 
                className='text-3xl md:text-4xl font-bold underline mb-10 py-10 sm:-mt-12'>
                    Services
                </h2>
                {/* <p 
                className='mb-12 text-xl ml-12 text-center text-gray-200'>
                    Providing high-quality web and app development solutions tailored to your needs, from concept to execution, ensuring a seamless digital experience.
                </p> */}
                <div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-6 gap-10'>
            
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity:  1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 0.2, duration:0.5 }}
                            className='bg-slate-200 border-black hover:shadow-md  hover:shadow-slate-800 dark:bg-black rounded-lg p-6 border dark:border-white dark:hover:shadow-md dark:hover:shadow-slate-500 transition duration-300 text-justify mt-10'
                            >
                                <TbWorld className='text-slate-500 text-4xl sm:text-5xl lg:text-8xl mb-4 mx-auto' />
                                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-center'>Web Development</h3>
                                <p className='text-base sm:text-[1.1rem] lg:text-lg mt-8 text-center'>Crafting responsive and visually appealing websites with modern technologies like React, Node.js, and Tailwind CSS. We ensure seamless user experiences, fast load times, and intuitive interfaces for your business needs.</p>
                                <div className='flex justify-center items-center'>
                                    <Link 
                                    to="contact" 
                                    smooth={true} duration={500} offset={-70}
                                    className=" inline-block text-center relative border-2 border-black text-black hover:text-white dark:border-white dark:text-white dark:hover:text-black px-4 py-2 rounded-lg overflow-hidden group mt-14 mb-5 lg:w-2/6 ">
                                        <span className="absolute inset-0 bg-gradient-to-r from-black  to-black  dark:bg-gradient-to-r dark:from-white  dark:to-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                                        <span className="relative z-10">More Info</span>
                                    </Link>
                                </div>
                        </motion.div>
            
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity:  1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{delay: 0.2, duration:0.5 }}
                            className='bg-slate-200 border-black hover:shadow-md  hover:shadow-slate-800 dark:bg-black rounded-lg p-6 border dark:border-white dark:hover:shadow-md dark:hover:shadow-slate-500 transition duration-300 text-justify mt-10'
                            >
                                <FcPhoneAndroid className='text-purple-500 text-4xl sm:text-5xl lg:text-8xl mb-4 mx-auto' />
                                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-center'>App Development</h3>
                                <p className='text-sm sm:text-base lg:text-lg text-center'>We specialize in building basic Android apps that focus on simplicity and functionality. From user registration to basic navigation and interaction, our Android apps are designed to meet the requirements of entry-level projects while ensuring ease of use and efficiency.</p>
                                <div className='flex justify-center items-center'>
                                    <Link 
                                    to="contact" 
                                    smooth={true} duration={500} offset={-70}
                                    className="inline-block text-center relative border-2 border-black text-black hover:text-white dark:border-white dark:text-white px-4 py-2 dark:hover:text-black rounded-lg overflow-hidden group mt-10  lg:w-2/6">
                                        <span className="absolute inset-0 bg-gradient-to-r from-black  to-black  dark:bg-gradient-to-r dark:from-white  dark:to-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                                        <span className="relative z-10">More Info</span>
                                    </Link>
                                </div>
                        </motion.div>

                        

                </div>
            </motion.div>
        </div>
    )
}

export default Services