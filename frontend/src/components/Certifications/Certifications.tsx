import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';
//PDF Files
import AI_PDF from '../../Assets/PDF/Certificates/course/AI For Everyone.pdf';
import GITHUB_PDF from '../../Assets/PDF/Certificates/course/GitHub Foundations.pdf';
import ENGINEERING_GRAPHICS_PDF from '../../Assets/PDF/Certificates/course/Engineering Graphics and Design.pdf';
import IT_PRIMER_PDF from '../../Assets/PDF/Certificates/course/IT Primer.pdf';
import PYTHON_PDF from '../../Assets/PDF/Certificates/course/Python Basics Certificate - Udemy.pdf';
import GOOGLE_ANALYTICS_PDF from '../../Assets/PDF/Certificates/course/Google Analytics.pdf';
import OCI_DFA_PDF from '../../Assets/PDF/Certificates/course/Oracle Cloud Infrastructure 2024 Data Foundations Associate.pdf';
import JAVA_BASIC_HR_PDF from '../../Assets/PDF/Certificates/course/java (Basics) - HR.pdf';
//Image Files
import AI_IMG from "../../Assets/Certificate-Logos-Badges/AI_IMG.jpg";
import GITHUB_IMG from '../../Assets/Certificate-Logos-Badges/GITHUB.png';
import ENGINEERING_GRAPHICS_IMG from '../../Assets/Certificate-Logos-Badges/ENGINEERING_GRAPHICS.png';
import IT_PRIMER_IMG from '../../Assets/Certificate-Logos-Badges/IT_PRIMER.png';
import PYTHON_IMG from '../../Assets/Certificate-Logos-Badges/PYTHON.png';
import GOOGLE_ANALYTICS_IMG from '../../Assets/Certificate-Logos-Badges/GOOGLE_ANALYTICS.png';
import OCI_DFA_IMG from '../../Assets/Certificate-Logos-Badges/OCI_DFA.png';
import JAVA_BASIC_HR_IMG from '../../Assets/Certificate-Logos-Badges/Java (Basics) - HR.png'

interface Certification {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  certLink?: string;
}

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('ALL');

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'GitHub Foundations',
      description:
        'Learned the core functionalities of GitHub including repositories, branching, pull requests, and collaborative development workflows.',
      tags: ['Version Control', 'Software Tools'],
      image: GITHUB_IMG,
      certLink: GITHUB_PDF,
    },
    {
      id: 2,
      title: 'Engineering Graphics & Design',
      description:
        'Gained knowledge in technical drawing, orthographic projections, and CAD tools used for visualizing and designing engineering components.',
      tags: ['Design'],
      image: ENGINEERING_GRAPHICS_IMG,
      certLink: ENGINEERING_GRAPHICS_PDF,
    },
    {
      id: 3,
      title: 'IT Primer',
      description:
        'Covered the basics of information technology including networking, computer systems, and foundational IT concepts.',
      tags: ['Information Technology', 'Networking'],
      image: IT_PRIMER_IMG,
      certLink: IT_PRIMER_PDF,
    },
    {
      id: 4,
      title: 'Python For Beginners',
      description:
        'Learned the fundamentals of Python programming including syntax, data structures, functions, and control flow.',
      tags: ['Programming', 'Python'],
      image: PYTHON_IMG,
      certLink: PYTHON_PDF,
    },
    {
      id: 5,
      title: 'AI For Everyone',
      description:
        'An introductory course by Andrew Ng explaining how AI works, its real-world applications, and its societal impact.',
      tags: ['Artificial Intelligence', 'Information Technology'],
      image: AI_IMG,
      certLink: AI_PDF,
    },
    {
      id: 6,
      title: 'Google Analytics',
      description:
        'Explored website data tracking, user behavior analysis, traffic sources, and reporting using Google Analytics tools.',
      tags: ['Data Analysis', 'Software Tools'],
      image: GOOGLE_ANALYTICS_IMG,
      certLink: GOOGLE_ANALYTICS_PDF,
    },
    {
      id: 7,
      title: 'OCI Data Foundations Associate 2024',
      description:
        'Earned Oracle’s foundational certification covering cloud concepts, data management, and Oracle Cloud Infrastructure services.',
      tags: ['Cloud Computing', 'Data Analysis'],
      image: OCI_DFA_IMG,
      certLink: OCI_DFA_PDF,
    },
    {
      id: 8,
      title: 'Java (Basic)',
      description:
        'HackerRank Java (Basic) Certified: Classes, data structures, inheritance, exception handling, etc.',
      tags: ['Java','programming'],
      image: JAVA_BASIC_HR_IMG,
      certLink: JAVA_BASIC_HR_PDF,
    },
  ];

  const filters = ['ALL', ...new Set(certifications.flatMap(cert => cert.tags))];

  const filteredCertifications =
    activeFilter === 'ALL'
      ? certifications
      : certifications.filter(cert => cert.tags.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="certifications" className="section-spacing">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These certifications reflect my continuous learning and expertise in various technologies.
          </p>
        </motion.div>

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredCertifications.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants} className="card overflow-hidden">
              <div className="relative w-full overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {cert.certLink && (
                  <a
                    href={cert.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <FiExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;