import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';

import wheelchair from "../../Assets/Images/WheelChair.jpg";

import ecommerce_ADMMIN from "../../Assets/Images/E_Commerce/admin page.png";
import ecommerce_HOME from "../../Assets/Images/E_Commerce/Home Page.png";
import ecommerce_PRDMNG from "../../Assets/Images/E_Commerce/Product manage - admin.png";
import ecommerce_PRD_PAGE from "../../Assets/Images/E_Commerce/PRODUCT PAGE.png";
import ecommerce_SM_AD from "../../Assets/Images/E_Commerce/seller management - admin.png";
import ecommerce_SIGNUP from "../../Assets/Images/E_Commerce/Signup Page.png";
import ecommerce_UM_ADMIN from "../../Assets/Images/E_Commerce/user management - admin.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string | string[];
  githubLink: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  // Track current image index per project
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});

  const handleNextImage = (projectId: number, imageCount: number) => {
    setImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] ?? 0) + 1) % imageCount,
    }));
  };

  const handlePrevImage = (projectId: number, imageCount: number) => {
    setImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] ?? 0) - 1 + imageCount) % imageCount,
    }));
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce platform without intermediaries',
      description:
        'developed and built a decentralized e-commerce platform that allows for peer-to-peer transactions to take place directly without the need for middlemen. committed to developing a smooth, user-friendly interface with safe payments and trust based on smart contracts. created end-to-end features to facilitate marketplace scalability and user ownership.',
      tags: ['React', 'Node.js', 'Supabase'],
      image: [ecommerce_ADMMIN,ecommerce_HOME,ecommerce_PRDMNG,ecommerce_PRD_PAGE,ecommerce_SIGNUP,ecommerce_SM_AD,ecommerce_UM_ADMIN,],
      githubLink: 'https://github.com/pranneeth-1511/E-commerce-Website',
    },
    {
      id: 2,
      title: 'Smart wheelchair',
      description:
        'IoT-enabled wheelchair software with GUI controls, joystick input, and mobile app integration.',
      tags: ['Python', 'Tkinter'],
      image: wheelchair,
      githubLink: 'https://github.com/pranneeth-1511/Smart-Wheel-Chair',
    },
  ];

  const filters = ['All', 'React', 'Python', 'Supabase', 'Node.js', 'Tkinter'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section-spacing">
      <div className="container-padding mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and projects that showcase my skills and expertise in web development and design.
          </p>
        </motion.div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const images = Array.isArray(project.image) ? project.image : [project.image];
            const currentIndex = imageIndexes[project.id] ?? 0;
            return (
              <motion.div key={project.id} variants={itemVariants} className="card overflow-hidden shadow-lg rounded-lg">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={images[currentIndex]}
                    alt={`${project.title} screenshot ${currentIndex + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrevImage(project.id, images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => handleNextImage(project.id, images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;