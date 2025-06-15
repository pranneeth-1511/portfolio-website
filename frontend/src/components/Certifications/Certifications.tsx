import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';
import Select from 'react-select';

import AI_PDF from '../../Assets/PDF/Certificates/course/AI For Everyone.pdf';
import GITHUB_PDF from '../../Assets/PDF/Certificates/course/GitHub Foundations.pdf';
import ENGINEERING_GRAPHICS_PDF from '../../Assets/PDF/Certificates/course/Engineering Graphics and Design.pdf';
import IT_PRIMER_PDF from '../../Assets/PDF/Certificates/course/IT Primer.pdf';
import PYTHON_PDF from '../../Assets/PDF/Certificates/course/Python Basics Certificate - Udemy.pdf';
import GOOGLE_ANALYTICS_PDF from '../../Assets/PDF/Certificates/course/Google Analytics.pdf';
import OCI_DFA_PDF from '../../Assets/PDF/Certificates/course/Oracle Cloud Infrastructure 2024 Data Foundations Associate.pdf';
import JAVA_BASIC_HR_PDF from '../../Assets/PDF/Certificates/course/java (Basics) - HR.pdf';

import AI_IMG from "../../Assets/Certificate-Logos-Badges/AI_IMG.jpg";
import GITHUB_IMG from '../../Assets/Certificate-Logos-Badges/GITHUB.png';
import ENGINEERING_GRAPHICS_IMG from '../../Assets/Certificate-Logos-Badges/ENGINEERING_GRAPHICS.png';
import IT_PRIMER_IMG from '../../Assets/Certificate-Logos-Badges/IT_PRIMER.png';
import PYTHON_IMG from '../../Assets/Certificate-Logos-Badges/PYTHON.png';
import GOOGLE_ANALYTICS_IMG from '../../Assets/Certificate-Logos-Badges/GOOGLE_ANALYTICS.png';
import OCI_DFA_IMG from '../../Assets/Certificate-Logos-Badges/OCI_DFA.png';
import JAVA_BASIC_HR_IMG from '../../Assets/Certificate-Logos-Badges/Java (Basics) - HR.png';

interface Certification {
  id: number;
  title: string;
  description: string;
  issue_date: string;
  expiry_date: string;
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

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'GitHub Foundations',
      description: 'Learned the core functionalities of GitHub including repositories, branching, pull requests, and collaborative development workflows.',
      issue_date: 'JAN 06, 2025',
      expiry_date: 'JAN 06, 2028',
      tags: ['Version Control', 'GitHub'],
      image: GITHUB_IMG,
      certLink: GITHUB_PDF,
    },
    {
      id: 2,
      title: 'Engineering Graphics & Design',
      description: 'Gained knowledge in technical drawing, orthographic projections, and CAD tools used for visualizing and designing engineering components.',
      issue_date: '',
      expiry_date: '',
      tags: ['Design','L&T EduTech'],
      image: ENGINEERING_GRAPHICS_IMG,
      certLink: ENGINEERING_GRAPHICS_PDF,
    },
    {
      id: 3,
      title: 'IT Primer',
      description: 'Covered the basics of information technology including networking, computer systems, and foundational IT concepts.',
      issue_date: '',
      expiry_date: '',
      tags: ['Networking','L&T EduTech'],
      image: IT_PRIMER_IMG,
      certLink: IT_PRIMER_PDF,
    },
    {
      id: 4,
      title: 'Python For Beginners',
      description: 'Learned the fundamentals of Python programming including syntax, data structures, functions, and control flow.',
      issue_date: 'OCT 01, 2022',
      expiry_date: '',
      tags: ['Python', 'Udemy'],
      image: PYTHON_IMG,
      certLink: PYTHON_PDF,
    },
    {
      id: 5,
      title: 'AI For Everyone',
      description: 'An introductory course by Andrew Ng explaining how AI works, its real-world applications, and its societal impact.',
      issue_date: 'JUN 06, 2023',
      expiry_date: '',
      tags: ['AI', 'Coursera'],
      image: AI_IMG,
      certLink: AI_PDF,
    },
    {
      id: 6,
      title: 'Google Analytics',
      description: 'Explored website data tracking, user behavior analysis, traffic sources, and reporting using Google Analytics tools.',
      issue_date: ' March 06, 2025',
      expiry_date: ' March 06, 2026',
      tags: ['Data Analysis'],
      image: GOOGLE_ANALYTICS_IMG,
      certLink: GOOGLE_ANALYTICS_PDF,
    },
    {
      id: 7,
      title: 'OCI Data Foundations Associate 2024',
      description: 'Earned Oracle’s foundational certification covering cloud concepts, data management, and Oracle Cloud Infrastructure services.',
      issue_date: 'MARCH 10, 2025',
      expiry_date: 'MARCH 10,2027',
      tags: ['Cloud Computing', 'Data Analysis', 'Oracle'],
      image: OCI_DFA_IMG,
      certLink: OCI_DFA_PDF,
    },
    {
      id: 8,
      title: 'Java (Basic)',
      description: 'HackerRank Java (Basic) Certified: Classes, data structures, inheritance, exception handling, etc.',
      issue_date: 'JUN 07, 2025',
      expiry_date: '',
      tags: ['Java', 'Hacker Rank'],
      image: JAVA_BASIC_HR_IMG,
      certLink: JAVA_BASIC_HR_PDF,
    },
  ];

  const filters = ['ALL', ...new Set(certifications.flatMap(cert => cert.tags))];
  const filterOptions = filters.map(filter => ({ value: filter, label: filter }));

  const filteredCertifications =
    activeFilter === 'ALL'
      ? certifications
      : certifications.filter(cert => cert.tags.includes(activeFilter));

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
      overflow: 'hidden',
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
    <section id="certifications" className="section-spacing pb-0">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These certifications reflect my continuous learning and expertise in various technologies.
          </p>
        </motion.div>

        <div className="max-w-xs mx-auto mb-12 text-md text-black dark:text-black text-white">
          <Select
            options={filterOptions}
            onChange={(selectedOption) => setActiveFilter(selectedOption ? selectedOption.value : 'ALL')}
            defaultValue={{ value: 'ALL', label: 'ALL' }}
            isSearchable
            isClearable
            placeholder="Filter by Tag..."
            styles={selectStyles}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredCertifications.map(cert => (
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
                {(cert.issue_date || cert.expiry_date) && (
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    {cert.issue_date && <p><strong>Issued on:</strong> {cert.issue_date}</p>}
                    {cert.expiry_date && <p><strong>Expires on:</strong> {cert.expiry_date}</p>}
                  </div>
                )}

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