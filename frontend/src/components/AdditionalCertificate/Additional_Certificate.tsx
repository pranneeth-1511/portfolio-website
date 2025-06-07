import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Select from 'react-select';
import { FiExternalLink } from 'react-icons/fi';

import TECHFUSIONX_PDF from '../../Assets/PDF/Certificates/Event/Capabl Hackathon.pdf';
import RIP_NSS from '../../Assets/PDF/Certificates/Event/RIP_2K24 NSS.pdf';
import AURC_PDF from '../../Assets/PDF/Certificates/Event/Anna University regional Campus_CBE.pdf';
import BIT_SATHY from '../../Assets/PDF/Certificates/Event/BIT - Sathyamangalam.pdf';
import NIT_DS from '../../Assets/PDF/Certificates/Event/Workshop NIT (Data structure & Algorithms).pdf';

import TECHFUSIONX_IMG from '../../Assets/Certificate-Logos-Badges/Capabl Hackathon.png';
import RIP_NSS_IMG from '../../Assets/Certificate-Logos-Badges/RIP_2K24 NSS.png';
import AURC_IMG from '../../Assets/Certificate-Logos-Badges/Anna University regional Campus_CBE.png';
import BIT_SATHY_IMG from '../../Assets/Certificate-Logos-Badges/BIT - Sathyamangalam.png';
import NIT_DS_IMG from '../../Assets/Certificate-Logos-Badges/Workshop NIT (Data structure & Algorithms).png';

interface AdditionalCertificate {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string | null;
  certLink?: string;
}

const AdditionalCertificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const additionalCertificates: AdditionalCertificate[] = [
    {
      id: 1,
      title: 'Rural Immersion Program - NSS',
      description:
        "Received Certificate for being a part in RIP'24 at Kaduvettipalayam Village. Made active contribution towards community outreach, cultural exchange, and rural development activities.",
      tags: ['NSS'],
      image: RIP_NSS_IMG,
      certLink: RIP_NSS,
    },
    {
      id: 2,
      title: 'TechfusionX Coordinator',
      description:
        'Received Certificate of Coordination by Capabl for the 2-day Coding Saksham Program 2024, handling logistics, team coordination, and coordinating industry-led sessions at KPR Institute of Engineering and Technology.',
      tags: ['COORDINATOR'],
      image: TECHFUSIONX_IMG,
      certLink: TECHFUSIONX_PDF,
    },
    {
      id: 3,
      title: 'GENIO-2K23',
      description:
        'National Level Technical Symposium - Events Participated: CODERS UNITE, TECH SPRINT, CLASH OF LOGOS',
      tags: ['TECHNICAL'],
      image: AURC_IMG,
      certLink: AURC_PDF,
    },
    {
      id: 4,
      title: 'ERSMERONZ-24',
      description: 'National Level Techno Fest - Prezentare-24',
      tags: ['TECHNICAL', 'PAPER PRESENTATION'],
      image: BIT_SATHY_IMG,
      certLink: BIT_SATHY,
    },
    {
      id: 5,
      title: 'Data Structures & Algorithm',
      description: 'Workshop conducted by GeeksforGeeks - DATA STRUCTURES & ALGORITHMS',
      tags: ['WORKSHOP'],
      image: NIT_DS_IMG,
      certLink: NIT_DS,
    },
    {
      id: 6,
      title: 'HackXelerate-25 TechLead',
      description:
        "Selected as the Tech Lead for HackXelerate'25, tasked with managing technical operations, guiding participants, and ensuring the successful conduct of the hackathon.",
      tags: ['COORDINATOR'],
    },
    {
      id: 7,
      title: "Hackfest'24 Coordinator",
      description:
        "Associated with SAP Successfully coordinated Hackfest'24, ensuring smooth execution and team collaboration.",
      tags: ['COORDINATOR'],
    },
    {
      id: 8,
      title: 'TechLead, CSBS Department Association (2024)',
      description:
        'Selected as the TechLead of the Computer Science and Business Systems (CSBS) Department Association, responsible for leading initiatives and coordinating events.',
      tags: ['ASSOCIATION'],
    },
  ];

  const filters = ['ALL', ...Array.from(new Set(additionalCertificates.flatMap(cert => cert.tags)))];
  const filterOptions = filters.map(filter => ({ value: filter, label: filter }));

  const filteredCertificates =
    activeFilter === 'ALL'
      ? additionalCertificates
      : additionalCertificates.filter(cert => cert.tags.includes(activeFilter));

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
        ? theme === 'dark'
          ? '#374151'
          : '#f3f4f6'
        : theme === 'dark'
        ? '#1f2937'
        : '#ffffff',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Event Participation & Volunteering Certificates
          </h2>
        </motion.div>

        <div className="max-w-xs mx-auto mb-12 text-md text-black dark:text-white">
          <Select
            options={filterOptions}
            onChange={(selectedOption) =>
              setActiveFilter(selectedOption ? selectedOption.value : 'ALL')
            }
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
          {filteredCertificates.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants} className="card overflow-hidden">
              {cert.image && (
                <div className="relative w-full overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
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

export default AdditionalCertificates;