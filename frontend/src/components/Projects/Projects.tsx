import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';
import { FiExternalLink } from 'react-icons/fi';
import Select from 'react-select';

// Images for Ecommerce Platform
import wheelchair from "../../Assets/Images/WheelChair.jpg";
import ecommerce_ADMMIN from "../../Assets/Images/E_Commerce/admin page.png";
import ecommerce_HOME from "../../Assets/Images/E_Commerce/Home Page.png";
import ecommerce_PRDMNG from "../../Assets/Images/E_Commerce/Product manage - admin.png";
import ecommerce_PRD_PAGE from "../../Assets/Images/E_Commerce/PRODUCT PAGE.png";
import ecommerce_SM_AD from "../../Assets/Images/E_Commerce/seller management - admin.png";
import ecommerce_SIGNUP from "../../Assets/Images/E_Commerce/Signup Page.png";
import ecommerce_UM_ADMIN from "../../Assets/Images/E_Commerce/user management - admin.png";

// Images for Evaluation Portal
import EP_IMG1 from "../../Assets/Images/KPR_Legacy_Awards/image1.jpeg";
import EP_IMG2 from "../../Assets/Images/KPR_Legacy_Awards/image2.jpeg";
import EP_IMG3 from "../../Assets/Images/KPR_Legacy_Awards/Image3.png";
import EP_IMG4 from "../../Assets/Images/KPR_Legacy_Awards/Image4.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string | string[];
  githubLink: string;
  websitelink: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const getCurrentTheme = () =>
      document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    setTheme(getCurrentTheme());

    const observer = new MutationObserver(() => {
      setTheme(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

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

  const isValidUrl = (url: string) => {
    try {
      const validUrl = new URL(url);
      return validUrl.protocol === "http:" || validUrl.protocol === "https:";
    } catch (error) {
      return false;
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce platform without intermediaries',
      description:
        'Developed a decentralized e-commerce platform for peer-to-peer transactions without middlemen. Features include a user-friendly interface, secure smart-contract-based payments, and scalable architecture.',
      tags: ['React', 'Node.js', 'Supabase'],
      image: [
        ecommerce_ADMMIN,
        ecommerce_HOME,
        ecommerce_PRDMNG,
        ecommerce_PRD_PAGE,
        ecommerce_SIGNUP,
        ecommerce_SM_AD,
        ecommerce_UM_ADMIN,
      ],
      githubLink: 'https://github.com/pranneeth-1511/E-commerce-Website',
      websitelink: 'https://nextcart-dkp.vercel.app/',
    },
    {
      id: 2,
      title: 'Smart wheelchair',
      description:
        'IoT-enabled wheelchair with GUI, joystick input, and mobile app integration. Designed to aid mobility and accessibility for users.',
      tags: ['Python', 'Tkinter'],
      image: wheelchair,
      githubLink: 'https://github.com/pranneeth-1511/Smart-Wheel-Chair',
      websitelink: '',
    },
    {
      id: 3,
      title: 'Evaluation Platform',
      description:
        'Developed a dynamic web-based evaluation portal for KPR Legacy Awards using AppSheet low-code platform with Google SSO integration. The portal enables seamless data collection, ranking, and visualization for multiple award categories.',
      tags: ['Appsheet', 'Low-code Platform'],
      image: [EP_IMG1, EP_IMG2, EP_IMG3, EP_IMG4],
      githubLink: '',
      websitelink: '',
    },
  ];

  const filters = ['All', ...new Set(projects.flatMap(project => project.tags))];
  const filterOptions = filters.map(filter => ({ value: filter, label: filter }));

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

  const selectStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
      color: theme === 'dark' ? '#fff' : '#000',
      borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db',
      borderRadius: 9999,
      padding: '2px 4px',
    }),
    input: (provided: any) => ({
      ...provided,
      color: theme === 'dark' ? '#fff' : '#000',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
      color: theme === 'dark' ? '#fff' : '#000',
      borderRadius: 16,
      marginTop: 4,
    }),

    menuList: (provided: any) => ({
      ...provided,
      maxHeight: 225,
      overflowY: 'auto',
      borderRadius: 16,
      padding: 0,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? theme === 'dark' ? '#374151' : '#f3f4f6'
        : theme === 'dark' ? '#1f2937' : '#ffffff',
      color: theme === 'dark' ? '#fff' : '#000',
      cursor: 'pointer',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: theme === 'dark' ? '#fff' : '#000',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: theme === 'dark' ? '#9ca3af' : '#6b7280',
    }),
  };

  return (
    <section id="projects" className="section-spacing pb-0">
      <div className="container-padding mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects & Works</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and projects that showcase my skills and expertise in web development and design.
          </p>
        </motion.div>

        {/* Filter Dropdown */}
        <div className="max-w-xs mx-auto mb-8 text-md text-black dark:text-white">
          <Select
            options={filterOptions}
            onChange={(selectedOption) => setActiveFilter(selectedOption ? selectedOption.value : 'All')}
            defaultValue={{ value: 'All', label: 'All' }}
            isSearchable
            isClearable
            placeholder="Filter by Tag..."
            styles={selectStyles}
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const images = Array.isArray(project.image) ? project.image : [project.image];
            const currentIndex = imageIndexes[project.id] ?? 0;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={images[currentIndex]}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrevImage(project.id, images.length)}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-75 dark:bg-opacity-75 text-gray-800 dark:text-white p-2 rounded-full shadow-md"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => handleNextImage(project.id, images.length)}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-75 dark:bg-opacity-75 text-gray-800 dark:text-white p-2 rounded-full shadow-md"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100 text-sm px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {isValidUrl(project.githubLink) && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-primary-500" />
                      </a>
                    )}
                    {isValidUrl(project.websitelink) && (
                      <a href={project.websitelink} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-primary-500" />
                      </a>
                    )}
                  </div>
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