/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from './Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import url from '../App'

const Contact = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    // const [number, setNumber] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`https://swaraj-portfolio-backend.vercel.app//api/contact`, {
                firstName,
                lastName,
                email,
                message,
            }, {
                headers: { "Content-Type": "application/json" }
            });
            
            // Show success toast message
            toast.success("Message sent successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // Reset form fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");

        } catch (error) {
            toast.error(error.response?.data?.message || "Error sending message", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div className='md:h-[50rem] bg-slate-100 dark:bg-black py-28' id='contact'>
            <div>
                <div className='max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-12 mx-auto'>
                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: -100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className='text-4xl font-bold text-black dark:text-white'>
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, y: -50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='text-black dark:text-slate-200 text-base mt-4'>
                        Have any questions or want to collaborate on a project? Feel free to get in touch with me directly. I’m excited to hear from you and discuss how we can work together.
                    </motion.p>
                </div>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-10'>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className='flex items-center space-x-4'>
                            <div className='bg-black dark:bg-white p-4 rounded-full'>
                                <FaPhone className='text-white dark:text-black w-6 h-6' />
                            </div>
                            <div>
                                <p className='text-lg font-medium text-black dark:text-white'>Call Me</p>
                                <p className='text-zinc-800 dark:text-white'> +91 7420845778 </p>
                            </div>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className='flex items-center space-x-4'>
                            <div className='bg-black dark:bg-white p-4 rounded-full'>
                                <FaEnvelope className='text-white dark:text-black w-6 h-6' />
                            </div>
                            <div>
                                <p className='text-lg font-medium text-black dark:text-white'>Email</p>
                                <p className='text-zinc-800 dark:text-white'>phalkeswaraj04@gmail.com</p>
                            </div>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className='flex items-center space-x-4'>
                            <div className='bg-black dark:bg-white p-4 rounded-full'>
                                <FaMapMarkerAlt className='text-white dark:text-black w-6 h-6' />
                            </div>
                            <div>
                                <p className='text-lg font-medium text-black dark:text-white'>Address</p>
                                <p className='text-zinc-800 dark:text-white'>Pune, Maharashtra, India</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.form
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className='space-y-4 text-black dark:text-white'
                        onSubmit={submitHandler} // Form submission handled here
                    >
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <input type="hidden" name='access_key' value="0cd0904d-09db-4866-abc9-e62f441898af" />
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder='First Name'
                                className='bg-white border-zinc-950 placeholder:text-zinc-500 border dark:border-purple-500 dark:bg-zinc-800 p-4 rounded-lg w-full outline-none'
                            />
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder='Last Name'
                                className='bg-white border-zinc-950 placeholder:text-zinc-500 border dark:border-purple-500 dark:bg-zinc-800 p-4 rounded-lg w-full outline-none'
                            />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-1 gap-4'>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder='Your Email'
                                className='bg-white border-zinc-950 placeholder:text-zinc-500 border dark:border-purple-500 dark:bg-zinc-800 p-4 rounded-lg w-full outline-none'
                            />
                            {/* <input
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                type="number"
                                placeholder='Phone Number'
                                className='bg-white border-zinc-950 placeholder:text-zinc-500 border dark:border-purple-500 dark:bg-zinc-800 p-4 rounded-lg w-full outline-none'
                            /> */}
                        </div>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Message'
                            className='bg-white border-zinc-950 placeholder:text-zinc-500 border dark:border-purple-500 dark:bg-zinc-800 p-4 rounded-lg w-full outline-none'>
                        </textarea>
                        <button
                            type='submit'
                            className="relative border-2 border-black text-black hover:text-white dark:border-white dark:text-white dark:hover:text-black px-4 py-2 rounded-lg overflow-hidden group">
                            <span className="absolute inset-0 bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                            <span className="relative z-10">Submit</span>
                        </button>
                    </motion.form>
                </div>

                {/* Footer */}
                <Footer />
                <ToastContainer />
            </div>
        </div>
    )
}
export default Contact
