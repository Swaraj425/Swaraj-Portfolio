/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import python from '../assets/Skills/python.svg'
import html from  '../assets/Skills/html.svg'
import css from '../assets/Skills/css.svg'
import javascript from '../assets/Skills/javascript.svg'
import tailwindcss from '../assets/Skills/tailwind.svg'
import react from '../assets/Skills/react.svg'
import node from '../assets/Skills/nodejs.svg'
import express from '../assets/Skills/express.svg'
import mongodb from '../assets/Skills/mongodb.svg'
import java from '../assets/Skills/java.svg'
import ejs from '../assets/Skills/ejs.svg'
import c from '../assets/Skills/c.svg'
import cpp from '../assets/Skills/c++.svg'
import { Link } from 'react-scroll'


const Skills = () => {


    // const generalProgramming = [
    //     {
    //         id: 1,
    //         Name : "Python",
    //         Icon : python,
    //         href: "https://www.oracle.com/java/"
    //     },
    //     {
    //         id: 2,
    //         Name : "Java",
    //         Icon : java,
    //         href: "https://www.oracle.com/java/"
    //     },
    //     {
    //         id: 3,
    //         Name : "C",
    //         Icon : c,
    //         href: "https://www.geeksforgeeks.org/c-programming-language/"
    //     },
    //     {
    //         id: 4,
    //         Name : "C++",
    //         Icon : cpp,
    //         href: "https://isocpp.org/"
    //     }
    // ]
    
    // const frontend = [
    //     {
    //         id: 1,
    //         Name : "HTML",
    //         Icon : html,
    //         href : "https://developer.mozilla.org/en-US/docs/Web/HTML"
    //     },
    //     {
    //         id: 2,
    //         Name : "CSS",
    //         Icon : css,
    //         href : "https://developer.mozilla.org/en-US/docs/Web/CSS"
    //     },
    //     {
    //         id: 3,
    //         Name : "JAVASCRIPT",
    //         Icon : javascript,
    //         href : "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    //     },
    //     {
    //         id: 4,
    //         Name : "REACT JS",
    //         Icon : react,
    //         href : "https://reactjs.org/"
    //     },
    //     {
    //         id: 5,
    //         Name : "TAILWIND CSS",
    //         Icon : tailwindcss,
    //         href : "https://tailwindcss.com/" 
    //     },
    //     {
    //         id:6,
    //         Name : "TEMPLATE ENGINE",
    //         Icon : ejs,
    //         href : "https://ejs.co/"
    //     },
    // ]

    // const backend = [
    //     {
    //         id: 1,
    //         Name : "NODE JS",
    //         Icon : node,
    //         href: "https://nodejs.org/"
    //     },
    //     {
    //         id: 2,
    //         Name : "EXPRESS JS",
    //         Icon : express,
    //         href: "https://expressjs.com/"
    //     },
    //     {
    //         id: 3,
    //         Name : "MONGODB",
    //         Icon : mongodb,
    //         href: "https://www.mongodb.com/"
    //     }
    // ]

    const skills = [
        {
            id: 1,
            Name : "Python",
            Icon : python,
            href: "https://www.oracle.com/java/"
        },
        // {
        //     id: 2,
        //     Name : "Java",
        //     Icon : java,
        //     href: "https://www.oracle.com/java/"
        // },
        // {
        //     id: 3,
        //     Name : "C",
        //     Icon : c,
        //     href: "https://www.geeksforgeeks.org/c-programming-language/"
        // },
        // {
        //     id: 4,
        //     Name : "C++",
        //     Icon : cpp,
        //     href: "https://isocpp.org/"
        // },
        {
            id: 5,
            Name : "HTML",
            Icon : html,
            href : "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
            id: 6,
            Name : "CSS",
            Icon : css,
            href : "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
            id: 7,
            Name : "JAVASCRIPT",
            Icon : javascript,
            href : "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            id: 8,
            Name : "REACT JS",
            Icon : react,
            href : "https://reactjs.org/"
        },
        {
            id: 9,
            Name : "TAILWIND CSS",
            Icon : tailwindcss,
            href : "https://tailwindcss.com/" 
        },
        {
            id:10,
            Name : "TEMPLATE ENGINE",
            Icon : ejs,
            href : "https://ejs.co/"
        },
        {
            id: 11,
            Name : "NODE JS",
            Icon : node,
            href: "https://nodejs.org/"
        },
        {
            id: 12,
            Name : "EXPRESS JS",
            Icon : express, 
            href: "https://expressjs.com/"
        },
        {
            id: 13,
            Name : "MONGODB",
            Icon : mongodb,
            href: "https://www.mongodb.com/"
        }
    ]
    
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    const fadeInVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
    };



    return (
        <div id='skills'>
            <div className='w-full text-black dark:text-white bg-slate-100 dark:bg-black lg:py-28 md:h-[60rem]' id='services'>
                <motion.div 
                ref={ref}
                initial={{opacity:0 , y:100}}
                animate={inView ? {opacity: 1 , y: 0} : {}}
                transition={{duration:0.7}}
                className='container mx-auto px-4 text-center'>
                    <h2 
                    className='text-3xl md:text-4xl font-bold underline mb-10 py-10 sm:-mt-12'>
                        Skills
                    </h2>
                    
                    <div
                    className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 px-6 gap-10'>
                
                        {skills.map((item) => (
                            <motion.div key={item.id} 
                            ref={ref}
                            variants={fadeInVariant}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className='flex flex-col  items-center justify-center p-3 '>
                                <img src={item.Icon} alt={item.Name}
                                className='mx-auto md:h-20 w-20 border border-black dark:bg-slate-200 p-3 rounded-full    object-contain hover:scale-125 transition duration-200'/>
                                <p className='text-xs text-center md:text-lg font-semibold mt-5    '>{item.Name}</p>
                            </motion.div>
                        ))}



                        {/* <div className='border dark:border-white  dark:bg-black bg-slate-100  border-black p-10 rounded-lg'>
                            <h3 className='text-2xl font-bold mb-5'>General Programming</h3>
                            <div className='grid grid-cols-2 sm:grid-cols-2 gap-5 '>
                                {generalProgramming.map((item) => (
                                    <motion.div key={item.id} 
                                    ref={ref}
                                    initial={{opacity:0 , x:150}}
                                    animate={inView ? {opacity: 1 , x: 0 } : {}}
                                    transition={{delay:0.5 , duration:0.8}}
                                    className='flex flex-col items-center justify-center p-3 '>
                                        <img src={item.Icon} alt={item.Name}
                                        className='h-20 w-20  object-contain hover:scale-125 transition duration-200'/>
                                        <p className='text-lg font-semibold'>{item.Name}</p>
                                    </motion.div>
                                ))}
                            </div>



                        {/* <div className='border dark:border-white  dark:bg-black bg-slate-100 border-black p-10 rounded-lg'>
                            <h3 className='text-2xl font-bold mb-5'>General Programming</h3>
                            <div 
                            className='grid grid-cols-2 sm:grid-cols-2 gap-5'>
                                {generalProgramming.map((item) => (
                                    <motion.div 
                                    ref={ref}
                                    initial={{opacity:0 , x: -100}}
                                    animate={inView ? {opacity: 1 , x: 0 } : {}}
                                    transition={{delay:0.5 , duration:0.8}}
                                    key={item.id} className='flex flex-col items-center justify-center'>
                                        <img src={item.Icon} alt={item.Name}
                                        href={item.href} className='h-20 w-20 object-contain hover:scale-125 transition duration-200'/>
                                        <p className='text-lg font-semibold'>{item.Name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div> */}

                        {/* <div className='border dark:border-white  dark:bg-black bg-slate-100 border-black p-10 rounded-lg'>
                            <h3 className='text-2xl font-bold mb-5'>Frontend</h3>
                            <div 
                            
                            className='grid grid-cols-2 sm:grid-cols-2 gap-5'>
                                {frontend.map((item) => (
                                    <motion.div 
                                    ref={ref}
                                    initial={{opacity:0 , y:100}}
                                    animate={inView ? {opacity: 1 , y: 0 } : {}}
                                    transition={{delay:0.5 , duration:0.8}}
                                    key={item.id} className='flex flex-col items-center justify-center'>
                                        <img src={item.Icon} alt={item.Name} 
                                        href={item.href}
                                        className='h-20 w-20 object-contain hover:scale-125 transition duration-200'/>
                                        <p className='text-lg font-semibold'>{item.Name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div> */}

                        {/* <div className='border dark:border-white  dark:bg-black bg-slate-100  border-black p-10 rounded-lg'>
                            <h3 className='text-2xl font-bold mb-5'>Backend</h3>
                            <div className='grid grid-cols-2 sm:grid-cols-2 gap-5 '>
                                {backend.map((item) => (
                                    <motion.div key={item.id} 
                                    ref={ref}
                                    initial={{opacity:0 , x:150}}
                                    animate={inView ? {opacity: 1 , x: 0 } : {}}
                                    transition={{delay:0.5 , duration:0.8}}
                                    className='flex flex-col items-center justify-center p-3 '>
                                            <img src={item.Icon} alt={item.Name}
                                            className='h-20 w-20  object-contain hover:scale-125 transition duration-200'/>
                                        <p className='text-lg font-semibold'>{item.Name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div> */}
                            

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills
