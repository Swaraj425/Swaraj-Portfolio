/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { instagramImg, projectDetails } from '../assets/Projects/projectDetails';

const ProjectDetails = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);


    const project = projectDetails.find(p => p.id === parseInt(id))    

    if (!project) {
        return <div>Project not found</div>;
    }

    // Slide Functions
    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='w-full bg-slate-100 text-black dark:text-white dark:bg-black' id='project-details'>
            <div className="w-full p-4 md:mt-20">
                <div className="shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white"><span>{project.id}.</span> {project.title}</h2>
                    <p className="text-lg text-black dark:text-slate-300 mt-2 mb-4">{project.domain}</p>

                    {/* Image Slider */}
                    <div className="relative w-full mb-4 flex justify-center items-center">
                        <div className="relative">
                            <img
                                src={project.images[currentIndex]}
                                alt={`detail Image ${currentIndex + 1}`}
                                className="w-full h-[50vh] object-contain rounded-lg cursor-pointer"
                                onClick={() => {
                                    setSelectedImage(project.images[currentIndex]); // Set the clicked image
                                    setIsModalOpen(true); // Open the modal
                                }}
                            />
                        </div>

                        {/* Slide Controls */}
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black dark:text-white p-2 rounded-full text-5xl"
                            onClick={handlePrevSlide}
                        >
                            <FaRegArrowAltCircleLeft />
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black dark:text-white p-2 rounded-full text-5xl"
                            onClick={handleNextSlide}
                        >
                            <FaRegArrowAltCircleRight />
                        </button>
                        {/* Image Name */}
                        <div className="absolute -bottom-20 m-10 left-0 right-0 text-center font-bold text-black dark:text-white p-2 rounded-lg">
                            {project.imageName[currentIndex]}
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-black dark:text-white">Overview</h3>
                    <p className="text-black dark:text-slate-200 mb-4 text-lg mt-3">{project.overview}</p>
                    <h3 className="text-2xl font-semibold text-black dark:text-white">Features</h3>
                    <ul className="list-disc pl-6 mb-4">
                        {project.features.map((feature, index) => (
                            <li key={index} className="text-black dark:text-slate-200 text-lg mt-3">{feature}</li>
                        ))}
                    </ul>
                    <h3 className="text-2xl font-semibold text-black dark:text-white">Technical Stack</h3>
                    <ul className="list-disc pl-6 mb-4">
                        {project.technical_stack.map((tech, index) => (
                            <li key={index} className="text-black dark:text-slate-200 text-lg mt-3">{tech}</li>
                        ))}
                    </ul>
                    <h3 className="text-2xl font-semibold text-black dark:text-white">Challenges & Solutions</h3>
                    <ul className="list-disc pl-6 mb-4">
                        {project.challenges_solutions.map((cs, index) => (
                            <li key={index} className="text-black dark:text-slate-200 text-lg mt-3">{cs}</li>
                        ))}
                    </ul>
                    <h3 className="text-2xl font-semibold text-black dark:text-white">Conclusion</h3>
                    <p className="text-black dark:text-slate-200 text-lg mt-3">{project.conclusion}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
