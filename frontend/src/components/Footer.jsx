/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa6'

const Footer = () => {

    const {ref, inView} = useInView({
        triggerOnce: true,
    })

    return (
            <motion.div 
                    ref={ref}
                    initial={{opacity: 0}}
                    animate={inView ? {opacity: 1} : {} }
                    transition={{delay: 1, duration: 0.3}}
                    className='bg-slate-100 text-black dark:bg-black dark:text-white flex justify-between items-center p-8 border-t-2 border-black dark:border-white'>
                    <p className='text-xs sm:text-lg font-bold'> Swaraj Phalke</p>
                    {/* <p className='text-xs sm:text-lg'> &copy; All Rights Reserved </p> */}
                    <div className='flex justify-center items-center space-x-4 text-black dark:text-white mb-1'>
                        <a href="https://www.linkedin.com/in/swaraj-phalke/" className='hover:text-blue-600' target='blank'><FaLinkedin className='w-4 h-4 sm:w-6 sm:h-6' /></a>
                        {/* <a href="https://www.instagram.com/swaraj.p5778" className='hover:text-pink-700' target='blank'><FaInstagram className='w-4 h-4 sm:w-6 sm:h-6' /></a> */}
                        {/* <a href="" className='hover:text-blue-500' target='blank'><FaFacebook className='w-4 h-4 sm:w-6 sm:h-6' /></a> */}
                        <a href="https://github.com/Swaraj425" className='hover:text-gray-500 ' target='blank'><FaGithub className='w-4 h-4 sm:w-6 sm:h-6' /></a>
                    </div>
                </motion.div>
    )
}

export default Footer
