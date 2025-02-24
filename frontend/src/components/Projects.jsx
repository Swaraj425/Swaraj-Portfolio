/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import Pinterest from '../assets/Project-Pinterest.png'
import Instragram from '../assets/Project-Instagram.png'
import Virtual from '../assets/Project-Virtual.jpg'
import Music from '../assets/Project -Music Player.png'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { image, link } from 'framer-motion/client'

const Projects = () => {

    const titleRef = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px',
    });

    const projects = [
        {
            id: "1_pinterest_clone",
            title: "Pinterest Clone",
            domain: "Web Development",
            image: Pinterest,
            desc: "The Pinterest Clone is a web application replicating Pinterest's core features, allowing users to explore, upload, and save visual content. It is built with modern web development technologies for a seamless user experience.",
            link: "https://github.com/Swaraj425/Pinterest-Clone"

        },
        {
            id: "2_virtual_lab",
            title: " Virtual Lab",
            domain: "App Development",
            image: Virtual,
            desc: "The Virtual Lab is an Android app designed to simulate practical lab exercises for computer engineering students, providing a hands-on learning experience with interactive features.",
            link: "https://github.com/Swaraj425/Pinterest-Clone"
        },
        {
            id: "3_music_player",
            title: "Music Player",
            domain: "Web Development",
            image: Music,
            desc: "The Music Player is a full-featured web application that enables users to explore, upload, and manage their own music collections. With interactive features like album and playlist creation, volume control, and seamless playback, it provides a dynamic and user-friendly experience.",
            link: "lorem102"
        },
        {
            id: "4_instagram_clone",
            title: "Instagram Clone",
            domain: "Web Development",
            image: Instragram,
            desc: "The Instagram Clone is a web-based social media platform that mimics the core features of Instagram, such as account creation, posting images, following users, and interacting with posts.",
            link: "https://github.com/Swaraj425/Pinterest-Clone"
        }

    ];

    return (
        <div className='py-5 md:h-[60rem] bg-slate-100 dark:bg-black' id='projects'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h1
                    ref={titleRef.ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={titleRef.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='text-3xl text-black dark:text-white underline font-bold text-center mb-5'>
                    Projects
                </motion.h1>
                <motion.p
                    ref={titleRef.ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={titleRef.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='mb-10 text-black dark:text-gray-300 text-center text-base'>
                    Check out some of my standout projects, each built with a focus on clean code and modern design. These projects reflect my experience in both front-end and back-end development, showcasing my ability to tackle diverse technical challenges.
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                    {projects.map((project) => {
                        const { ref, inView } = useInView({
                            triggerOnce: false,
                            threshold: 0.1,
                            rootMargin: '0px 0px -20% 0px',
                        });
                        return (
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: project.id * 0.2, duration: 0.5 }}
                                className='overflow-hidden hover:scale-110 '
                                key={project.id}>
                                <div className='bg-zinc-950 dark:bg-zinc-800'>

                                    <img src={project.image} alt="" className='h-[30vh] mx-auto object-cover' />
                                </div>
                                <div className='p-6 bg-white dark:bg-zinc-950 transition duration-500 origin-left -mb-2 flex flex-col justify-between min-h-[360px]'>
                                    <div>
                                        <h2 className='text-xl text-black dark:text-white font-semibold mb-2'>
                                            {project.title}
                                        </h2>
                                        <p className='text-black dark:text-gray-400 text-sm mb-2'>
                                            {project.domain}
                                        </p>
                                        <p className='text-black dark:text-slate-200 line-clamp-6'>
                                            {project.desc}
                                        </p>
                                    </div>
                                    <Link to={`/project/${project.id}`} className="relative border-2 border-black text- hover:text-white dark:border-white dark:text-white dark:hover:text-black px-4 py-2 rounded-lg overflow-hidden group">
                                        <span className="absolute inset-0 bg-gradient-to-r from-black  to-black dark:bg-gradient-to-r dark:from-white  dark:to-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                                        <span className="relative z-10">Details</span>
                                    </Link>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>



            </div>
        </div>
    );
};

export default Projects;
