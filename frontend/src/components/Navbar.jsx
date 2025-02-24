/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaDownload, FaMoon } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import CV from "../assets/Resume.pdf"
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { IoIosSunny } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

    useEffect(() => {
        // Apply theme to the root element (body or html)
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const variants = {
        open: {
            clipPath: 'circle(1200px at 43px 43px)'
        },
        transition: {
            type: 'spring',
        },
        closed: {
            clipPath: 'circle(25px at 43px 37px)',
        }
    };

    const [menu, setMenu] = useState(false);

    const items = [
        { text: "Home", to: "/" },
        { id: 1, text: "About", to: "about" },
        { id: 2, text: "Projects", to: "projects" },
        // { id: 3, text: "Services", to: "services" },
        { id: 3, text: "Skills", to: "skills" },
        { id: 4, text: "Contact", to: "contact" },
    ];

    const filteredItems = location.pathname === '/projectdetail' ? items.filter(item => item.to === "/") : items;

    

    const navigate = useNavigate();

    const handleNavigation = (to) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div
            className={`transition-all duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-100 text-black'
                }`}
        // Added transition for smooth switching between light/dark mode
        >
            {/* Navbar */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="fixed z-[9999] bg-slate-100 border-b-2 border-black text-black dark:bg-black dark:text-white md:w-full mx-auto hidden md:flex justify-between items-center p-5 px-6"
            >
                <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
                    <RouterLink to="/">
                        <span className="dark:text-white text-black">Swaraj</span>
                        <span className="dark:text-white text-black">Phalke</span>
                    </RouterLink>
                </div>
                <div>
                    <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base">
                        {items.map((item) => (
                           <li key={item.id} onClick={() => handleNavigation(item.to)} className="cursor-pointer">
                           {item.text}
                       </li>
                       
                        ))}
                    </ul>
                </div>

                {/* Dark/Light Mode Toggle and CV Download Button */}
                <div className="flex items-center gap-4">
                    {/* Dark/Light Mode Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="text-black border hover:bg-black hover:text-white border-black dark:text-white p-2 dark:border-white rounded-full dark:hover:bg-slate-100 dark:hover:text-black transition duration-300"
                    >
                        {theme === 'light' ? (
                            <FaMoon className="text-xl" />
                        ) : (
                            <IoIosSunny className="text-xl" />
                        )}
                    </button>

                    {/* Download CV Button */}
                    <a
                        href={CV}
                        target="_blank"
                        className="relative md:text-base lg:text-sm text-black border-black border dark:border-white dark:text-white p-2 rounded-lg px-4 overflow-hidden group"
                    >
                        {/* Gradient animation effect for light and dark modes */}
                        <span
                            className={`absolute inset-0 transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left ${theme === 'light' ? 'bg-black' : 'bg-white  '
                                }`}
                        ></span>

                        {/* Text content */}
                        <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-500 ease-out">
                            Download CV
                            <FaDownload className="inline-block ml-4 mb-2" />
                        </span>
                    </a>

                </div>
            </motion.div>


            {/* Mobile Navbar */}
            <div className='flex md:hidden justify-between w-full dark:bg-black'>
                {/* Left side (Hamburger Menu) */}
                <motion.div animate={menu ? 'open' : 'closed'}>
                    <motion.div variants={variants} onClick={() => setMenu((prev) => !prev)} className='bg-slate-100 text-black dark:bg-black w-2/3 h-screen dark:text-white fixed z-[99]'>
                        <div className='px-7 py-6 bg-slate-100 text-black dark:bg-black dark:text-white'>
                            {menu ? (<IoCloseSharp size={30} />) : (<IoMenu size={30} />)}
                        </div>
                        {menu && (
                            <div className='flex flex-col justify-center items-center'>
                                <ul className='space-y-6 text-lg bg-slate-100 text-black dark:bg-black dark:text-white'>
                                    {filteredItems.map((item) => (
                                        <li key={item.id} className='py-2 mt-5 hover:scale-110 text-lg  hover:underline transform transition-all duration-300'>
                                            <ScrollLink to={item.to} onClick={() => setMenu((prev) => !prev)} smooth={true} duration={500} offset={-70}>
                                                {item.text}
                                            </ScrollLink>
                                        </li>
                                    ))}
                                </ul>

                                {/* Download CV Button */}
                                <a
                                    href={CV}
                                    target="_blank"
                                    className="relative mt-5 md:text-base lg:text-sm text-black border-black border dark:border-white dark:text-white p-2 rounded-lg px-4 overflow-hidden group"
                                >
                                    {/* Gradient animation effect for light and dark modes */}
                                    <span
                                        className={`absolute inset-0 transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left ${theme === 'light' ? 'bg-black' : 'bg-slate-100  '
                                            }`}
                                    ></span>

                                    {/* Text content */}
                                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-500 ease-out">
                                        Download CV
                                        <FaDownload className="inline-block ml-4 mb-2" />
                                    </span>
                                </a>
                            </div>
                        )}
                    </motion.div>
                </motion.div>

                {/* Center (Your Name) */}
                <motion.div
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-lg font-bold flex ml-12 items-center gap-2 py-6 px-4'>
                    <span className='dark:text-white text-black'>Swaraj</span>
                    <span className='dark:text-white text-black'>Phalke</span>
                </motion.div>

                {/* Right side (Dark/Light Mode Toggle Button) */}
                <motion.div className="flex items-center gap-4 pr-4">
                    <button
                        onClick={toggleTheme}
                        className="text-black border hover:bg-black hover:text-white border-black dark:text-white p-2 dark:border-white rounded-full dark:hover:bg-slate-100 dark:hover:text-black transition duration-300"
                    >
                        {theme === 'light' ? (
                            <FaMoon className="text-xl" />
                        ) : (
                            <IoIosSunny className="text-xl" />
                        )}
                    </button>
                </motion.div>
            </div>


        </div>
    );
}

export default Navbar;
